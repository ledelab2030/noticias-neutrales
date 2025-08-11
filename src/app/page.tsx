// src/app/page.tsx
import { noticias } from "@/data/noticias"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"

function fmt(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
  } catch {
    return iso
  }
}

// Ayuda: normaliza fuente para admitir string u objeto { nombre, url }
function getFuenteNombre(fuente: unknown): string | null {
  if (!fuente) return null
  if (typeof fuente === "string") return fuente
  if (typeof fuente === "object" && fuente !== null && "nombre" in fuente) {
    const val = (fuente as { nombre?: unknown }).nombre
    return typeof val === "string" ? val : null
  }
  return null
}

export default function HomePage() {
  const items = [...noticias].sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
  const [hero, ...rest] = items

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <SectionHeader
        title="Noticias"
        description="Cobertura neutral y verificada de los hechos más relevantes a nivel nacional e internacional."
      />

      {/* Destacado */}
      {hero && (
        <article className="mb-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center rounded-full border px-2 py-0.5 dark:border-gray-700">
              Destacado
            </span>
            <time>{fmt(hero.fecha)}</time>
            {getFuenteNombre(hero.fuente) && (
              <span className="truncate">{getFuenteNombre(hero.fuente)}</span>
            )}
          </div>
          <h2 className="mt-2 text-2xl font-semibold leading-snug text-gray-900 dark:text-white">
            <Link
              href={`/noticias/${hero.id}`}
              className="hover:text-blue-700 dark:hover:text-blue-300"
            >
              {hero.titulo}
            </Link>
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{hero.resumen}</p>
        </article>
      )}

      {/* Lista */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {rest.map((n) => {
          const fuenteNombre = getFuenteNombre(n.fuente)
          return (
            <article
              key={n.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <time>{fmt(n.fecha)}</time>
                {fuenteNombre && <span className="truncate">{fuenteNombre}</span>}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                <Link
                  href={`/noticias/${n.id}`}
                  className="hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {n.titulo}
                </Link>
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{n.resumen}</p>
            </article>
          )
        })}
      </div>
    </main>
  )
}
