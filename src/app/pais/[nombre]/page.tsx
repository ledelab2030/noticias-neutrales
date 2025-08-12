// src/app/pais/[nombre]/page.tsx
import Link from "next/link"
import type { Metadata } from "next"
import { noticias } from "@/data/noticias"

const PAGE_SIZE = 12

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

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function matchPais(nPais?: string, etiquetas?: string[], target?: string) {
  if (!target) return false
  const t = normalize(target)
  if (nPais && normalize(nPais) === t) return true
  if (Array.isArray(etiquetas)) return etiquetas.some((e) => normalize(String(e)) === t)
  return false
}

function esHoy(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  const today = new Date()
  const y2 = today.getUTCFullYear()
  const m2 = today.getUTCMonth() + 1
  const d2 = today.getUTCDate()
  return y === y2 && m === m2 && d === d2
}

function countEtiquetas(items: typeof noticias) {
  const freq = new Map<string, number>()
  for (const n of items) for (const tag of n.etiquetas ?? []) {
    const k = String(tag)
    freq.set(k, (freq.get(k) ?? 0) + 1)
  }
  return [...freq.entries()].sort((a, b) => b[1] - a[1])
}

// --- helpers para metadata sin usar `any`
function isPromise<T>(val: unknown): val is Promise<T> {
  return typeof val === "object" && val !== null && "then" in (val as Record<string, unknown>)
}

export async function generateMetadata(args: unknown): Promise<Metadata> {
  type ParamsObj = { nombre: string }
  const maybe = args as { params?: ParamsObj | Promise<ParamsObj> } | undefined
  const raw = maybe?.params
  const params: ParamsObj | undefined = raw ? (isPromise<ParamsObj>(raw) ? await raw : raw) : undefined
  const nombreDecod = decodeURIComponent(params?.nombre ?? "")
  return {
    title: `${nombreDecod} | Actualidad por país`,
    description: `Cobertura neutral y verificada de noticias relacionadas con ${nombreDecod}.`,
  }
}

// --- Página (tu contrato: params y searchParams como Promise)
export default async function PaisPage({
  params,
  searchParams,
}: {
  params: Promise<{ nombre: string }>
  searchParams: Promise<{ page?: string; tag?: string }>
}) {
  const { nombre } = await params
  const sp = await searchParams
  const nombreDecod = decodeURIComponent(nombre)
  const tag = sp.tag ? decodeURIComponent(sp.tag) : undefined

  const base = noticias
    .filter((n) => matchPais(n.pais, n.etiquetas, nombreDecod))
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))

  const items = tag
    ? base.filter((n) => (n.etiquetas ?? []).some((t) => normalize(String(t)) === normalize(tag)))
    : base

  const temas = countEtiquetas(base).slice(0, 12)

  const hoy = items.filter((n) => esHoy(n.fecha))
  const [hero, ...restHoy] = hoy

  const pageNum = Math.max(1, parseInt(sp.page ?? "1", 10) || 1)
  const start = (pageNum - 1) * PAGE_SIZE
  const paginated = items.slice(start, start + PAGE_SIZE)
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE))

  const urlFor = (p: number) =>
    `/pais/${encodeURIComponent(nombreDecod)}?${[
      tag ? `tag=${encodeURIComponent(tag)}` : "",
      `page=${p}`,
    ].filter(Boolean).join("&")}`

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{nombreDecod}</h1>
        <p className="text-sm text-muted-foreground">
          {tag ? <>Filtrado por tema: <span className="font-medium">{tag}</span> · </> : null}
          {items.length} notas
        </p>
      </header>

      {/* Temas relacionados */}
      {temas.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Temas relacionados</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/pais/${encodeURIComponent(nombreDecod)}`}
              className="px-3 py-1 text-xs rounded-full border hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Todos
            </Link>
            {temas.map(([t, c]) => (
              <Link
                key={t}
                href={`/pais/${encodeURIComponent(nombreDecod)}?tag=${encodeURIComponent(t)}`}
                className="px-3 py-1 text-xs rounded-full border hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {t} · {c}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Destacado de hoy */}
      {hero && (
        <article className="mb-8 rounded-xl border p-5 shadow-sm">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center rounded-full border px-2 py-0.5">Destacado de hoy</span>
            <time>{fmt(hero.fecha)}</time>
          </div>
          <h2 className="mt-2 text-2xl font-semibold leading-snug">
            <Link href={`/noticias/${hero.id}`} className="hover:text-blue-700">
              {hero.titulo}
            </Link>
          </h2>
          <p className="mt-2 text-gray-700">{hero.resumen}</p>
        </article>
      )}

      {/* Hoy (resto) */}
      {restHoy.length > 0 && (
        <section className="mb-10">
          <h3 className="mb-3 text-lg font-semibold">Hoy</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {restHoy.map((n) => (
              <article key={n.id} className="rounded-xl border p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <time>{fmt(n.fecha)}</time>
                </div>
                <h4 className="mt-2 text-lg font-semibold">
                  <Link href={`/noticias/${n.id}`} className="hover:text-blue-700">
                    {n.titulo}
                  </Link>
                </h4>
                <p className="mt-2 text-gray-700">{n.resumen}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Todas (paginadas) */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-lg font-semibold">Todas</h3>
          <span className="rounded-full border px-2 py-0.5 text-xs text-gray-600">
            página {pageNum} / {totalPages}
          </span>
        </div>

        {paginated.length === 0 ? (
          <p className="text-sm text-muted-foreground">Sin resultados.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {paginated.map((n) => (
              <li key={n.id} className="rounded-xl border p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <time>{fmt(n.fecha)}</time>
                  <span className="truncate">{n.fuente ?? ""}</span>
                </div>
                <h4 className="mt-2 font-semibold">
                  <Link href={`/noticias/${n.id}`} className="hover:text-blue-700">
                    {n.titulo}
                  </Link>
                </h4>
                <p className="text-sm text-gray-700">{n.resumen}</p>
              </li>
            ))}
          </ul>
        )}

        {totalPages > 1 && (
          <nav className="mt-6 flex items-center gap-2">
            <Link
              aria-disabled={pageNum === 1}
              href={pageNum === 1 ? "#" : urlFor(pageNum - 1)}
              className={`px-3 py-1 rounded border ${pageNum === 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-50"}`}
            >
              Anterior
            </Link>
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1
              const active = p === pageNum
              return (
                <Link
                  key={p}
                  href={urlFor(p)}
                  className={`px-3 py-1 rounded border ${active ? "bg-gray-900 text-white" : "hover:bg-gray-50"}`}
                >
                  {p}
                </Link>
              )
            })}
            <Link
              aria-disabled={pageNum === totalPages}
              href={pageNum === totalPages ? "#" : urlFor(pageNum + 1)}
              className={`px-3 py-1 rounded border ${pageNum === totalPages ? "pointer-events-none opacity-50" : "hover:bg-gray-50"}`}
            >
              Siguiente
            </Link>
          </nav>
        )}
      </section>
    </main>
  )
}
