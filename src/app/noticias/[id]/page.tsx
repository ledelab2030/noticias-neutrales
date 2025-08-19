// src/app/noticias/[id]/page.tsx
import { noticias } from "@/data/noticias"
import { notFound } from "next/navigation"
import Link from "next/link"
import { slugify } from "@/utils/slugify"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

type FuenteObj = { nombre?: string; url?: string }
function isFuenteObj(val: unknown): val is FuenteObj {
  return typeof val === "object" && val !== null && "nombre" in (val as Record<string, unknown>)
}
function fuenteNombre(f: unknown) {
  if (!f) return ""
  if (typeof f === "string") return f
  if (isFuenteObj(f) && typeof f.nombre === "string") return f.nombre
  return ""
}

// ✅ Metadatos dinámicos para previews (Open Graph / Twitter)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const n = noticias.find((x) => x.id === id)
  if (!n) return {}

  const base = "https://www.ledelab.co"
  const url = `${base}/noticias/${id}`

  // Usa n.imagen si existe; si es relativa, vuélvela absoluta. Fallback a /og-default.jpg
  const ogImageRelOrAbs = (n as any).imagen ?? "/og-default.jpg"
  const ogImage = ogImageRelOrAbs.startsWith("http")
    ? ogImageRelOrAbs
    : `${base}${ogImageRelOrAbs}`

  return {
    title: n.titulo,
    description: n.resumen || (Array.isArray((n as any).contenido) ? (n as any).contenido[0] : ""),
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
  }
}

export default async function Noticia({ params }: Props) {
  const { id } = await params
  const n = noticias.find((x) => x.id === id)
  if (!n) notFound()

  // Campos opcionales (codconver)
  const dialogo: { autor: string; texto: string }[] | undefined = (n as any).dialogo
  const participantes: string[] | undefined = (n as any).participantes

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* migas */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          inicio
        </Link>
        <span className="px-2">/</span>
        <span>actualidad</span>
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        {n.titulo}
      </h1>

      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
        <span>{n.fecha}</span>
        {n.pais && (
          <>
            <span className="opacity-60">·</span>
            <span>{n.pais}</span>
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
              className="underline underline-offset-4 hover:opacity-80"
            >
              ver fuente original
            </Link>
          </>
        )}
      </div>

      {/* Participantes (codconver) */}
      {!!participantes?.length && (
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          <span className="font-medium">Participantes: </span>
          <span>{participantes.join(" · ")}</span>
        </div>
      )}

      {/* Contenido / Diálogo (compacto) / Resumen */}
      {Array.isArray((n as any).contenido) && (n as any).contenido.length ? (
        <div className="mt-6 space-y-4 leading-7 text-[17px] text-zinc-900 dark:text-zinc-100">
          {(n as any).contenido.map((p: string, i: number) => (
            <p
              key={i}
              className="whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: resaltarLinks(p) }}
            />
          ))}
        </div>
      ) : Array.isArray(dialogo) && dialogo.length ? (
        <div className="mt-6 space-y-4 text-[17px] leading-7 text-zinc-900 dark:text-zinc-100">
          {dialogo.map((d, i) => (
            <p key={i} className="whitespace-pre-line">
              <span className="font-semibold mr-2">{d.autor}:</span>
              {d.texto}
            </p>
          ))}
        </div>
      ) : n.resumen ? (
        <p className="mt-6 leading-7 text-[17px] whitespace-pre-line text-zinc-900 dark:text-zinc-100">
          {n.resumen}
        </p>
      ) : null}

      {/* Separador visual antes de etiquetas */}
      {(n.etiquetas && n.etiquetas.length > 0) && (
        <hr className="mt-8 mb-6 border-t border-zinc-200 dark:border-zinc-800" />
      )}

      {!!n.etiquetas?.length && (
        <div className="flex flex-wrap gap-2">
          {n.etiquetas.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${encodeURIComponent(slugify(tag))}`}
              className="rounded-full border px-3 py-1 text-xs text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}

function resaltarLinks(texto: string) {
  return texto.replace(
    // Detecta URLs que no estén ya dentro de href=""
    /(?<!href=["'])(https?:\/\/[^\s"’”)\]\}<>]+)(?=[\s"’”)\]\}.,;:]|$)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  )
}
