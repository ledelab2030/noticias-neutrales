// src/lib/translate.ts
'use server'

import { unstable_cache } from 'next/cache'
import type { Lang } from '@/lib/locale'

export type Noticia = {
  id: string
  fecha: string
  titulo: string
  pais?: string
  resumen?: string
  contenido?: string[]
  etiquetas?: string[]
  fuente?: string | { nombre: string; url?: string }
  url_fuente?: string
  imagen?: string
  credito_imagen?: string
  video?: string
  credito_video?: string
  idioma_original?: Lang
  traducciones?: Partial<Record<Lang, string>>
  participantes?: string[]
}

const API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY
const CACHE_VERSION = process.env.TRANSLATE_CACHE_VERSION ?? 'v1' // 🔁 súbelo a 'v2' si quieres invalidar todo

function detectarLangDesdeId(id: string): Lang | null {
  const m = id.match(/-(es|en|de)$/i)
  return (m?.[1]?.toLowerCase() as Lang) ?? null
}
function baseIdSinLang(id: string): string {
  const m = id.match(/^(.*?)-(es|en|de)$/i)
  return m ? m[1] : id
}
function idConLang(id: string, lang: Lang) {
  return `${baseIdSinLang(id)}-${lang}`
}

// Sanea posibles prefijos residuales como "[en] " de traducciones viejas
function cleanPrefix(s: string) {
  return (s ?? '').replace(/^\s*\[(?:en|es|de)\]\s*/i, '')
}

// Traducción por lotes (Google v2). Fallback: devuelve el **mismo texto** sin prefijos.
async function translateTextBatch(inputs: string[], target: Lang, source?: Lang): Promise<string[]> {
  if (!API_KEY) {
    return inputs // ⬅️ sin "[en] " ni nada
  }

  const params = new URLSearchParams()
  for (const q of inputs) params.append('q', q)
  params.set('target', target)
  if (source) params.set('source', source)
  params.set('format', 'text')
  params.set('key', API_KEY)

  const res = await fetch('https://translation.googleapis.com/language/translate/v2', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
    cache: 'no-store',
  })

  if (!res.ok) {
    // Si falla la API, devolvemos el texto original en lugar de romper la página
    return inputs
  }

  const data = (await res.json()) as {
    data: { translations: { translatedText: string }[] }
  }
  return (data.data?.translations ?? []).map((t) => cleanPrefix(t.translatedText ?? ''))
}

async function translateNoticiaRaw(n: Noticia, to: Lang): Promise<Noticia> {
  const source = n.idioma_original ?? detectarLangDesdeId(n.id) ?? 'es'
  if (to === source) return { ...n, id: idConLang(n.id, to) }

  // Preparar lotes (evita traducir bloques <!--img-->)
  const headPairs: Array<{ key: 'titulo' | 'resumen'; value: string }> = []
  headPairs.push({ key: 'titulo', value: n.titulo })
  if (n.resumen) headPairs.push({ key: 'resumen', value: n.resumen })

  const contenidoIdxs: number[] = []
  const contenidoTextos: string[] = []
  if (Array.isArray(n.contenido)) {
    n.contenido.forEach((p, i) => {
      if (typeof p === 'string' && !p.trim().startsWith('<!--img-->')) {
        contenidoIdxs.push(i)
        contenidoTextos.push(p)
      }
    })
  }

  const head = await translateTextBatch(headPairs.map(p => p.value), to, source)
  const body = contenidoTextos.length ? await translateTextBatch(contenidoTextos, to, source) : []

  const next: Noticia = {
    ...n,
    id: idConLang(n.id, to),
    idioma_original: source,
    traducciones: { ...(n.traducciones ?? {}), [to]: idConLang(n.id, to) },
  }

  headPairs.forEach((p, i) => {
    const t = cleanPrefix(head[i] ?? p.value)
    if (p.key === 'titulo') next.titulo = t
    if (p.key === 'resumen') next.resumen = t
  })

  if (Array.isArray(n.contenido)) {
    const nuevo = [...n.contenido]
    contenidoIdxs.forEach((idx, i) => {
      nuevo[idx] = cleanPrefix(body[i] ?? contenidoTextos[i])
    })
    next.contenido = nuevo
  }

  return next
}

export async function translateNoticia(n: Noticia, to: Lang) {
  const key = `gtr:${CACHE_VERSION}:${baseIdSinLang(n.id)}:${to}`
  const cached = unstable_cache(() => translateNoticiaRaw(n, to), [key], { revalidate: 3600 })
  return cached()
}
