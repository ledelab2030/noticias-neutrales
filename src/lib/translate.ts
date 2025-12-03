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

/**
 * Detecta el sufijo de idioma en un id (…-es / …-en / …-de)
 */
export function detectarLangDesdeId(id: string): Lang | null {
  const m = id.match(/-(es|en|de)$/i)
  return (m?.[1]?.toLowerCase() as Lang) ?? null
}

/**
 * Devuelve el id sin el sufijo de idioma.
 */
export function baseIdSinLang(id: string): string {
  const m = id.match(/^(.*?)-(es|en|de)$/i)
  return m ? m[1] : id
}

/**
 * Construye un id con sufijo de idioma.
 */
export function idConLang(id: string, lang: Lang): string {
  return `${baseIdSinLang(id)}-${lang}`
}

/**
 * Limpia posibles prefijos residuales como "[en] " de versiones antiguas.
 */
function cleanPrefix(s: string) {
  return (s ?? '').replace(/^\s*\[(?:en|es|de)\]\s*/i, '')
}

/**
 * 🔒 Versión desactivada de traducción por lotes.
 * NO llama a ninguna API externa; simplemente devuelve los textos originales.
 */
async function translateTextBatch(
  inputs: string[],
  _target: Lang,
  _source?: Lang
): Promise<string[]> {
  return inputs.map((t) => cleanPrefix(t))
}

/**
 * 🔒 Versión desactivada de traducción de noticia.
 *
 * No modifica el contenido cuando se pide un idioma distinto del original.
 * Solo garantiza que `idioma_original` esté definido correctamente.
 */
async function translateNoticiaRaw(n: Noticia, to: Lang): Promise<Noticia> {
  const source = n.idioma_original ?? detectarLangDesdeId(n.id) ?? 'es'

  // Si el idioma destino es el mismo que el de origen,
  // normalizamos algunos campos pero no cambiamos el texto.
  if (to === source) {
    return {
      ...n,
      id: idConLang(n.id, source),
      idioma_original: source,
    }
  }

  // Si se pide otro idioma, devolvemos la noticia tal cual,
  // sin crear traducciones automáticas ni ids falsos.
  return {
    ...n,
    idioma_original: source,
  }
}

/**
 * API pública. Conservamos el unstable_cache para no romper imports existentes,
 * pero ya NO se hace ninguna traducción automática.
 */
export async function translateNoticia(n: Noticia, to: Lang) {
  const key = `gtr:manual:${baseIdSinLang(n.id)}:${to}`
  const cached = unstable_cache(() => translateNoticiaRaw(n, to), [key], {
    revalidate: 3600,
  })
  return cached()
}
