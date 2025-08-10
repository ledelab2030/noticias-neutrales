// /src/app/estilo-de-vida/[id]/page.tsx
import { notFound } from "next/navigation"
import { estiloDeVida } from "@/data/estilo-de-vida"

function f(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    })
  } catch {
    return iso
  }
}

export default async function NotaPage({
  params,
}: {
  // Next 15: params es async
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const nota = estiloDeVida.find((n) => n.id === id)
  if (!nota) return notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none">
        <header className="mb-6">
          <p className="text-sm text-slate-500">{f(nota.fecha)}</p>
          <h1 className="mt-2 text-3xl font-semibold">{nota.titulo}</h1>

          {nota.temas?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {nota.temas.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {nota.fuente?.url && nota.fuente?.nombre && (
            <div className="mt-3 text-sm">
              <a
                href={nota.fuente.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:#0072CE] hover:underline"
              >
                Fuente: {nota.fuente.nombre}
              </a>
            </div>
          )}
        </header>

        <p className="text-slate-800 leading-relaxed">{nota.contenido}</p>
      </article>
    </main>
  )
}
