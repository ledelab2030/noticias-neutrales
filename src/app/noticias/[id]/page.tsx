// src/app/noticias/[id]/page.tsx
import { noticias } from "@/data/noticias"
import { notFound } from "next/navigation"
import Link from "next/link"

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

export default async function Noticia({ params }: Props) {
  const { id } = await params
  const n = noticias.find((x) => x.id === id)
  if (!n) notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* migas en minúsculas */}
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

      {/* cuerpo: muestra contenido si existe; si no, cae al resumen */}
      {n.contenido?.length ? (
        <div className="mt-6 space-y-4 leading-7 text-[17px] text-zinc-900 dark:text-zinc-100">
          {n.contenido.map((p, i) => (
            <p
              key={i}
              className="whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: resaltarLinks(p) }}
            />
          ))}
        </div>
      ) : n.resumen ? (
        <p className="mt-6 leading-7 text-[17px] whitespace-pre-line text-zinc-900 dark:text-zinc-100">
          {n.resumen}
        </p>
      ) : null}

      {/* etiquetas */}
      {!!n.etiquetas?.length && (
        <div className="mt-8 flex flex-wrap gap-2">
          {n.etiquetas.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </main>
  )
}

function resaltarLinks(texto: string) {
  return texto.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;">$1</a>'
  )
}
