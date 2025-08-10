// /src/app/estilo-de-vida/page.tsx
import Link from "next/link"
import { estiloDeVida } from "@/data/estilo-de-vida"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estilo de vida | LedeLab",
  description: "Hábitos saludables, sostenibilidad y bienestar práctico.",
}

function fmt(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("es-CO", { year: "numeric", month: "short", day: "2-digit" })
  } catch { return iso }
}

export default function EstiloDeVidaPage() {
  // Ordena por fecha y divide en destacado + resto
  const items = [...estiloDeVida].sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
  const [hero, ...rest] = items

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      {/* Encabezado */}
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Estilo de vida</h1>
        <p className="mt-2 text-gray-600">
          Hábitos saludables, sostenibilidad y bienestar práctico. Contenido verificado, sin sensacionalismo.
        </p>
      </header>

      {/* Destacado simple */}
      {hero && (
        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center rounded-full border px-2 py-0.5">Destacado</span>
            <time>{fmt(hero.fecha)}</time>
          </div>
          <h2 className="mt-2 text-2xl font-semibold leading-snug">
            <Link href={`/estilo-de-vida/${hero.id}`} className="hover:text-blue-700">
              {hero.titulo}
            </Link>
          </h2>
          <p className="mt-2 text-gray-700">{hero.resumen}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {hero.temas?.map((t: string) => (
              <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700">
                {t}
              </span>
            ))}
          </div>
          {hero.fuente?.nombre && (
            <div className="mt-4 text-sm">
              <a
                href={hero.fuente.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 hover:underline"
              >
                Fuente: {hero.fuente.nombre}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          )}
        </article>
      )}

      {/* Lista simple (sin filtros) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {rest.map((n) => (
          <article key={n.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <time>{fmt(n.fecha)}</time>
              {n.fuente?.nombre && <span className="truncate">{n.fuente.nombre}</span>}
            </div>
            <h3 className="mt-2 text-lg font-semibold">
              <Link href={`/estilo-de-vida/${n.id}`} className="hover:text-blue-700">
                {n.titulo}
              </Link>
            </h3>
            <p className="mt-2 text-gray-700">{n.resumen}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {n.temas?.map((t: string) => (
                <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <Link href={`/estilo-de-vida/${n.id}`} className="text-blue-700 hover:underline inline-flex items-center gap-2">
                Leer más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
