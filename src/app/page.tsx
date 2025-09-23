// src/app/page.tsx
import { noticias } from "@/data/noticias"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"
import { esHoy } from "@/utils/fecha"

function fmt(iso: string) {
  try {
    const [y, m, d] = iso.split("-").map(Number)
    const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1))
    return date.toLocaleDateString("es-CO", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC",
    })
  } catch {
    return iso
  }
}

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
  const itemsAll = [...noticias].sort((a, b) => (a.fecha < b.fecha ? 1 : -1))

  // HOY
  const hoy = itemsAll.filter((n) => esHoy(n.fecha))
  const [hero, ...rest] = hoy
  const idsDeHoy = new Set(hoy.map((n) => n.id))

  // NO-HOY, sin repetir
  const recientes = itemsAll
    .filter((n) => !esHoy(n.fecha) && !idsDeHoy.has(n.id))
    .slice(0, 8)

  const paisesDestacados = [
    "Colombia","Estados Unidos","Canadá","Estonia","Ecuador","Guatemala",
    "Argentina","Perú","Panamá","Costa Rica","China","Alemania",
    "Corea del Sur","Líbano","España","Portugal","Sudáfrica",
  ]

  return (
    <div className="mx-auto max-w-5xl py-8">{/* sin px-4 para alinear con layout */}
      {/* Título principal */}
      <SectionHeader
        title="Claves del día"
        description="Cobertura neutral y verificada de los hechos más relevantes a nivel nacional e internacional."
      />

      {/* Países en móvil: mismo ancho de la franja blanca (sin scroll) */}
      <section className="mt-6 lg:hidden" aria-label="Países">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Países</h2>
          <Link href="/pais" className="text-sm text-blue-700 dark:text-blue-300 hover:underline">
            Todos
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {paisesDestacados.map((pais) => (
            <Link
              key={pais}
              href={`/pais/${encodeURIComponent(pais)}`}
              className="rounded-full border px-3 py-1 text-xs hover:bg-gray-50 dark:hover:bg-gray-800"
              aria-label={`Filtrar por ${pais}`}
            >
              {pais}
            </Link>
          ))}
        </div>
      </section>

      {/* Grid principal: contenido + sidebar (desktop) */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        {/* Columna de contenido */}
        <section aria-labelledby="ultimas">
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

          {/* Listado de otras publicaciones */}
          <section id="ultimas" className="mt-12">
            <h2 className="mb-4 text-xl font-semibold">Otras Publicaciones</h2>
            <ul className="space-y-2">
              {recientes.map((n) => (
                <li key={n.id} className="flex items-center justify-between">
                  <div>
                    <Link
                      href={`/noticias/${n.id}`}
                      className="text-sm font-medium hover:underline underline-offset-4"
                    >
                      {n.titulo}
                    </Link>
                    <div className="text-xs text-muted-foreground">
                      {(n.pais ?? "·")} · {fmt(n.fecha)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href="/noticias" className="text-sm underline underline-offset-4">
                Más noticias e información
              </Link>
            </div>
          </section>
        </section>

        {/* Sidebar de países (solo desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
              Países
            </h2>
            <div className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {paisesDestacados.map((pais) => (
                  <li key={pais}>
                    <Link
                      href={`/pais/${encodeURIComponent(pais)}`}
                      className="rounded-full border px-3 py-1 text-xs hover:bg-gray-50 dark:hover:bg-gray-800"
                      aria-label={`Filtrar por ${pais}`}
                    >
                      {pais}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/pais"
                className="mt-4 inline-block text-sm text-blue-700 dark:text-blue-300 hover:underline"
              >
                Ver todos los países
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
