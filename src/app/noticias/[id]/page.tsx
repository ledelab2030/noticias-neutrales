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
    <main className="max-w-4xl mx-auto p-4">
      <header className="mb-3">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
          {n.titulo}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {n.fecha}
          {n.fuente ? <> · {fuenteNombre(n.fuente)}</> : null}
          {n.url_fuente ? (
            <>
              {" · "}
              <Link
                href={n.url_fuente}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Ver fuente original
              </Link>
            </>
          ) : null}
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none prose-p:leading-relaxed">
        {(n.contenido ?? []).map((parrafo, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: resaltarLinks(parrafo) }} />
        ))}
      </div>
    </main>
  )
}

function resaltarLinks(texto: string) {
  return texto.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" style="color:#1d4ed8;text-decoration:underline;">$1</a>'
  )
}
