// src/app/page.tsx
import { noticias, NoticiaRaw } from "@/data/noticias"
import Link from "next/link"
import Image from "next/image"
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

function fuenteNombre(fuente: unknown): string | null {
  if (!fuente) return null
  if (typeof fuente === "string") return fuente
  if (typeof fuente === "object" && fuente !== null && "nombre" in fuente) {
    const val = (fuente as { nombre?: unknown }).nombre
    return typeof val === "string" ? val : null
  }
  return null
}

export default function HomePage() {
  // Orden: fecha desc; si la fecha empata, respetar el orden del archivo
  const itemsAll = noticias
    .map((n, i) => ({ n, i }))
    .sort((a, b) => {
      if (a.n.fecha === b.n.fecha) return a.i - b.i
      return a.n.fecha < b.n.fecha ? 1 : -1
    })
    .map(({ n }) => n)

  // DESTACADOS (para hero + rejilla secundaria)
  const destacados = itemsAll.filter((n) => n.etiquetas?.includes("destacado"))
  const [hero, ...destacadosSec] = destacados
  const idsUsados = new Set(destacados.map((d) => d.id))

  // HOY (sin repetir con destacados)
  const hoy = itemsAll.filter((n) => esHoy(n.fecha) && !idsUsados.has(n.id))
  hoy.forEach((h) => idsUsados.add(h.id))

  // Noticias generales para rejilla (sin repetir con destacados/HOY)
  const noticiasGrid = itemsAll.filter((n) => !idsUsados.has(n.id)).slice(0, 6)
  noticiasGrid.forEach((g) => idsUsados.add(g.id))

  // Otras publicaciones (lista)
  const recientes = itemsAll.filter((n) => !idsUsados.has(n.id)).slice(0, 8)

  const paisesDestacados = [
    "Colombia","Estados Unidos","Canadá","Estonia","Ecuador","Guatemala",
    "Argentina","Perú","Panamá","Costa Rica","China","Alemania",
    "Corea del Sur","Líbano","España","Portugal","Sudáfrica",
  ]

  return (
    <div className="mx-auto max-w-7xl py-8 px-4 lg:px-0">
      <SectionHeader
        title="Claves del día"
        description="Cobertura neutral y verificada de los hechos más relevantes a nivel nacional e internacional."
      />

      {/* ====== HERO DESTACADO ====== */}
      {hero && (
        <section aria-label="Principal" className="mt-6">
          <article className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
            {/* Hero grande */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <Link href={`/noticias/${hero.id}`} className="group block">
                {hero.imagen ? (
                  <div className="relative aspect-[16/9] w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <Image
                      src={hero.imagen}
                      alt={hero.titulo}
                      fill
                      priority
                      className="object-cover transition-transform group-hover:scale-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                ) : null}

                <div className={hero.imagen ? "p-5" : "p-6"}>
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 dark:border-gray-700">
                      Destacado
                    </span>
                    <time>{fmt(hero.fecha)}</time>
                    {fuenteNombre(hero.fuente) && (
                      <span className="truncate">{fuenteNombre(hero.fuente)}</span>
                    )}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold leading-snug text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    {hero.titulo}
                  </h2>
                  {hero.resumen && (
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{hero.resumen}</p>
                  )}
                </div>
              </Link>
            </div>

            {/* Rejilla de destacados secundarios */}
            <div className="grid grid-cols-1 gap-4">
              {destacadosSec.slice(0, 3).map((n) => (
                <article
                  key={n.id}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 flex flex-col"
                >
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <time>{fmt(n.fecha)}</time>
                    {fuenteNombre(n.fuente) && (
                      <span className="truncate">{fuenteNombre(n.fuente)}</span>
                    )}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                    <Link
                      href={`/noticias/${n.id}`}
                      className="hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      {n.titulo}
                    </Link>
                  </h3>
                  {n.resumen && (
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      {n.resumen}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </article>
        </section>
      )}

      {/* ====== PUBLICACIONES DE HOY ====== */}
      {hoy.length > 0 && (
        <section aria-label="Hoy" className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">De un vistazo</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hoy.map((n) => (
              <NotaCard key={n.id} n={n} />
            ))}
          </div>
        </section>
      )}

      {/* ====== REJILLA DE NOTICIAS (tipo DW) ====== */}
      <section aria-label="Noticias" className="mt-10">
        <h2 className="mb-2 text-2xl font-bold">Noticias</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Actualizaciones recientes de distintas secciones.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {noticiasGrid.map((n) => (
            <article key={n.id} className="flex flex-col">
              {n.imagen && (
                <Link
                  href={`/noticias/${n.id}`}
                  className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={n.imagen}
                      alt={n.titulo}
                      fill
                      className="object-cover transition-transform group-hover:scale-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </Link>
              )}
              <h3 className="mt-3 text-xl font-semibold leading-snug">
                <Link
                  href={`/noticias/${n.id}`}
                  className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {n.titulo}
                </Link>
              </h3>
              {n.resumen && (
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {n.resumen}
                </p>
              )}
              <div className="mt-2 text-xs text-muted-foreground">
                {(n.pais ?? "·")} · {fmt(n.fecha)}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ====== OTRAS PUBLICACIONES (lista) ====== */}
      <section id="ultimas" className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Otras Publicaciones</h2>
        <ul className="space-y-2">
          {recientes.map((n) => (
            <li key={n.id} className="flex items-center justify-between">
              <div>
                <Link
                  href={`/noticias/${n.id}`}
                  className="text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 hover:underline underline-offset-4"
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
          <Link
            href="/noticias"
            className="text-sm underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300"
          >
            Más noticias e información
          </Link>
        </div>
      </section>

      {/* ====== SIDEBAR DE PAÍSES (desktop) ====== */}
      <section className="mt-12 hidden lg:block" aria-label="Países">
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
      </section>
    </div>
  )
}

/* --- Sub-componente para tarjetas compactas --- */
function NotaCard({ n }: { n: NoticiaRaw }) {
  const fuente = fuenteNombre(n.fuente)
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 flex flex-col">
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <time>{fmt(n.fecha)}</time>
        {fuente && <span className="truncate">{fuente}</span>}
      </div>
      <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
        <Link href={`/noticias/${n.id}`} className="hover:text-blue-700 dark:hover:text-blue-300">
          {n.titulo}
        </Link>
      </h3>
      {n.resumen && (
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {n.resumen}
        </p>
      )}
    </article>
  )
}
