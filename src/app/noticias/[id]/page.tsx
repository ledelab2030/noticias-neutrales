// src/app/noticias/[id]/page.tsx
import { noticias } from "@/data/noticias"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { slugify } from "@/utils/slugify"
import { cookies } from "next/headers"
import { translateNoticia, type Noticia as NoticiaT } from "@/lib/translate"
import { normalizeToSupported, type Lang } from "@/lib/locale"

// En tu proyecto, PageProps usa Promises
type PageProps = {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ auto?: string }>
}

// ⬇️ Extiendo el tipo para que compile n.ubicacion / imagen_portada / destacada
type Noticia = NoticiaT & {
  ubicacion?: { nombre: string; coordenadas?: string }
  imagen_portada?: string
  credito_imagen_portada?: string
  destacada?: boolean
}

const ALL_LANGS: Lang[] = ["es", "en", "de"]
const baseUrl = "https://www.ledelab.co"

function detectarLangDesdeId(id: string): Lang | null {
  const m = id.match(/-(es|en|de)$/i)
  return (m?.[1]?.toLowerCase() as Lang) ?? null
}
function baseIdSinLang(id: string): string {
  const m = id.match(/^(.*?)-(es|en|de)$/i)
  return m ? m[1] : id
}
function idConLang(id: string, lang: Lang): string {
  return `${baseIdSinLang(id)}-${lang}`
}
function nombreLang(lang: Lang) {
  switch (lang) {
    case "es": return "Español"
    case "en": return "English"
    case "de": return "Deutsch"
    default: return lang
  }
}
function fuenteNombre(f: Noticia["fuente"]) {
  if (!f) return ""
  if (typeof f === "string") return f
  return f.nombre ?? ""
}

// ---- SEO ----
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { id } = await params
  const sp = searchParams ? await searchParams : undefined
  const auto = ((sp?.auto ?? "").toLowerCase() as Lang) || undefined

  const n = (noticias as Noticia[]).find((x) => x.id === id)
  if (!n) return {}

  const url = `${baseUrl}/noticias/${n.id}`

  // Imagen OG: usa imagen, o imagen_portada, o fallback
  const ogRel = n.imagen ?? n.imagen_portada ?? "/og-default.jpg"
  const ogAbs = ogRel.startsWith("http") ? ogRel : `${baseUrl}${ogRel}`

  // Cache-buster para evitar previas viejas en FB/WA
  const v = encodeURIComponent(`${n.fecha ?? ""}-${(n.contenido?.join("") ?? "").length}`)
  const ogImage = `${ogAbs}?v=${v}`

  // hreflang solo para hermanas reales
  const base = n.id.replace(/-(es|en|de)$/i, "")
  const languages: Record<string, string> = {}
  for (const l of ALL_LANGS) {
    const idL = `${base}-${l}`
    if ((noticias as Noticia[]).some((x) => x.id === idL)) {
      languages[l] = `/noticias/${idL}`
    }
  }

  const isInstant = Boolean(auto)

  return {
    title: n.titulo,
    description: n.resumen || (Array.isArray(n.contenido) ? n.contenido[0] : undefined),
    openGraph: {
      title: n.titulo,
      description: n.resumen || "",
      url,
      siteName: "LedeLab Noticias",
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: n.titulo }],
    },
    twitter: {
      card: "summary_large_image",
      title: n.titulo,
      description: n.resumen || "",
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      languages,
    },
    robots: isInstant ? { index: false, follow: true } : undefined,
  }
}

// ---- Page ----
export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params
  const sp = searchParams ? await searchParams : undefined
  const auto = (sp?.auto ?? "").toLowerCase() as Lang
  const isValidLang = (l: string): l is Lang => (["es", "en", "de"] as const).includes(l as Lang)

  let n = (noticias as Noticia[]).find((x) => x.id === id)
  if (!n) notFound()

  // Idioma de la nota + preferencia del visitante
  const langDetectado = detectarLangDesdeId(n.id) ?? (n.idioma_original as Lang) ?? "es"
  let langActual: Lang = langDetectado

  // cookies() puede ser sync/async según setup; con await es seguro en ambos casos
  const cookieStore = await cookies()
  const cookieLang = normalizeToSupported(cookieStore.get("nn_lang")?.value ?? "es")

  // Helpers dataset
  const base = baseIdSinLang(n.id)
  const existe = (l: Lang) => (noticias as Noticia[]).some((x) => x.id === idConLang(base, l))

  // 1) ?auto= distinto al actual → traducir on-the-fly
  if (isValidLang(auto) && auto !== langActual) {
    n = await translateNoticia(n, auto)
    langActual = auto
  }
  // 2) Sin ?auto=, preferencia distinta y NO hay hermana → traducir automático
  else if (!isValidLang(auto) && cookieLang !== langActual && !existe(cookieLang)) {
    n = await translateNoticia(n, cookieLang)
    langActual = cookieLang
  }

  // Recalcular disponibles / instantáneas
  const baseNow = baseIdSinLang(n.id)
  const existeNow = (l: Lang) => (noticias as Noticia[]).some((x) => x.id === idConLang(baseNow, l))
  const disponibles = ["es", "en", "de"].filter((l) => l !== langActual && existeNow(l as Lang)) as Lang[]
  const noGuardadas = ["es", "en", "de"].filter((l) => l !== langActual && !existeNow(l as Lang)) as Lang[]

  const pathForInstant = (currentId: string, to: Lang) => `/noticias/${currentId}?auto=${to}`
  const isInstant = isValidLang(auto) || !existeNow(langActual)

  // Imagen hero y crédito (acepta imagen o imagen_portada)
  const heroSrc = n.imagen ?? n.imagen_portada
  const heroCredit = n.credito_imagen ?? n.credito_imagen_portada
  const altHero = n.titulo

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* migas */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">inicio</Link>
        <span className="px-2">/</span>
        <span>actualidad</span>
      </div>

      {/* 🔤 Idiomas */}
      <div className="mb-4 rounded-lg border border-zinc-200 dark:border-zinc-800 p-3 text-sm flex flex-wrap items-center gap-2">
        <span className="opacity-70">Original en:</span>
        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
          {nombreLang(n.idioma_original ?? langDetectado)}
        </span>

        <span className="mx-2 opacity-50">·</span>
        <span className="opacity-70">Disponible en:</span>

        {disponibles.map((l) => (
          <Link
            key={l}
            href={`/noticias/${idConLang(baseNow, l)}`}
            className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
          >
            {nombreLang(l)}
          </Link>
        ))}

        {noGuardadas.map((l) => (
          <Link
            key={`auto-${l}`}
            href={pathForInstant(n.id, l)}
            className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
          >
            {nombreLang(l)} (instantánea)
          </Link>
        ))}
        {isInstant && <span className="ml-2 text-xs opacity-70">(viendo versión instantánea)</span>}
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        {n.titulo}
      </h1>

      {/* Imagen principal */}
      {heroSrc && (
        <figure className="mt-6 mb-6">
          <Image
            src={heroSrc}
            alt={altHero}
            width={1600}
            height={900}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="w-full h-auto rounded-xl shadow-sm object-contain"
          />
          {heroCredit && (
            <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-snug">
              {String(heroCredit).split(" | ").map((chunk, i) => (
                <span key={i} className="block">{chunk}</span>
              ))}
            </figcaption>
          )}
        </figure>
      )}

      {/* Video */}
      {n.video && (
        <div className="mt-6 mb-6">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-sm">
            <iframe
              src={n.video}
              title={n.titulo}
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {n.credito_video && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Crédito de video: {n.credito_video}
            </p>
          )}
        </div>
      )}

      {/* Meta línea */}
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
        <span>{n.fecha}</span>
        {n.pais && (
          <>
            <span className="opacity-60">·</span>
            <span>{n.pais}</span>
          </>
        )}

        {/* 📍 Ubicación */}
        {n.ubicacion && (
          <>
            <span className="opacity-60">·</span>
            {n.ubicacion.coordenadas ? (
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(n.ubicacion.coordenadas)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                📍 {n.ubicacion.nombre}
              </a>
            ) : (
              <span>📍 {n.ubicacion.nombre}</span>
            )}
          </>
        )}

        {n.fuente && (
          <>
            <span className="opacity-60">·</span>
            <span>{fuenteNombre(n.fuente)}</span>
          </>
        )}
        {n.url_fuente && (
          <>
            <span className="opacity-60">·</span>
            <Link
              href={n.url_fuente}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
            >
              ver fuente original
            </Link>
          </>
        )}
      </div>

      {/* Contenido */}
      {Array.isArray(n.contenido) && n.contenido.length > 0 ? (
        <article className="mt-6 space-y-4 leading-7 text-[17px] text-zinc-900 dark:text-zinc-100 prose prose-neutral max-w-none">
          {n.contenido.map((p, i) => {
            const t = (typeof p === "string" ? p : "").trim()
            if (!t) return null

            // bloques HTML completos => render tal cual (evita <div> dentro de <p>)
            if (/^<(div|section|article|figure|iframe|table|ul|ol|blockquote|h[1-6])\b/i.test(t)) {
              return <div key={i} className="my-6" dangerouslySetInnerHTML={{ __html: t }} />
            }

            // separador simple
            if (t === "---") {
              return <hr key={i} className="my-6 border-t border-zinc-200 dark:border-zinc-800" />
            }

            // marcador ya soportado para HTML crudo
            if (t.startsWith("<!--img-->")) {
              const html = t.replace("<!--img-->", "")
              return <div key={i} className="my-6" dangerouslySetInnerHTML={{ __html: html }} />
            }

            // párrafo normal
            return (
              <p
                key={i}
                className="whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: resaltarLinks(t) }}
              />
            )
          })}
        </article>
      ) : n.resumen ? (
        <p className="mt-6 leading-7 text-[17px] whitespace-pre-line text-zinc-900 dark:text-zinc-100">
          {n.resumen}
        </p>
      ) : null}

      {/* Etiquetas */}
      {Array.isArray(n.etiquetas) && n.etiquetas.length > 0 && <Etiquetas etiquetas={n.etiquetas} />}

      {/* Relacionadas */}
      <Relacionadas idActual={n.id} etiquetas={n.etiquetas ?? []} />
    </main>
  )
}

function resaltarLinks(texto: string) {
  return (texto ?? "").replace(
    /(?<!href=["'])(https?:\/\/[^\s"’”)\]\}<>]+)(?=[\s"’”)\]\}.,;:]|$)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline underline-offset-2">$1</a>'
  )
}

function Etiquetas({ etiquetas }: { etiquetas: string[] }) {
  const uniq = Array.from(new Set((etiquetas ?? []).map((t) => (t ?? "").trim()).filter(Boolean)))
  if (uniq.length === 0) return null
  return (
    <>
      <hr className="mt-8 mb-6 border-t border-zinc-200 dark:border-zinc-800" />
      <div className="flex flex-wrap gap-2">
        {uniq.map((tag) => (
          <Link
            key={tag}
            href={`/tag/${encodeURIComponent(slugify(tag))}`}
            className="rounded-full border px-3 py-1 text-xs text-blue-600 hover:text-blue-800 underline underline-offset-2"
            title={`Ver notas con la etiqueta: ${tag}`}
          >
            {tag}
          </Link>
        ))}
      </div>
    </>
  )
}

function Relacionadas({ idActual, etiquetas }: { idActual: string; etiquetas: string[] }) {
  const etiquetasLimpias = Array.from(
    new Set((etiquetas ?? []).map((t) => (t ?? "").trim()).filter(Boolean))
  )

  const relacionadas = (noticias as Noticia[])
    .filter(
      (nn) =>
        nn.id !== idActual &&
        nn.etiquetas?.some((tag) => etiquetasLimpias.includes((tag ?? "").trim()))
    )
    .slice(0, 3)

  if (relacionadas.length === 0) return null

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">Notas relacionadas</h2>
      <ul className="space-y-3">
        {relacionadas.map((r) => (
          <li key={r.id} className="border-b pb-2">
            <Link
              href={`/noticias/${r.id}`}
              className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium"
            >
              {r.titulo}
            </Link>
            {r.resumen && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{r.resumen}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
