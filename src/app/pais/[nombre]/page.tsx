// src/app/pais/[nombre]/page.tsx
import { noticias } from "@/data/noticias"
import type { Metadata } from "next"
import Link from "next/link"

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

// Igual que en el índice: clave normalizada para comparar
function normalizeKey(p: string): string {
  return (p || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

// match por país (normalizado). Si quieres permitir alias por etiqueta, añade esa lógica aquí.
function matchPais(nPais?: string, target?: string) {
  if (!target) return false
  return normalizeKey(String(nPais ?? "")) === normalizeKey(target)
}

function esHoy(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  const today = new Date()
  const y2 = today.getUTCFullYear()
  const m2 = today.getUTCMonth() + 1
  const d2 = today.getUTCDate()
  return y === y2 && m === m2 && d === d2
}

function fuenteNombre(f: unknown): string {
  if (!f) return ""
  if (typeof f === "string") return f
  if (typeof f === "object" && f !== null && "nombre" in (f as Record<string, unknown>)) {
    const n = (f as { nombre?: unknown }).nombre
    return typeof n === "string" ? n : ""
  }
  return ""
}

// Permite params como objeto o Promise sin usar `any`
function isPromise<T>(val: unknown): val is Promise<T> {
  return typeof val === "object" && val !== null && "then" in (val as Record<string, unknown>)
}

export async function generateMetadata(args: unknown): Promise<Metadata> {
  type Params = { nombre: string }
  const raw = (args as { params?: Params | Promise<Params> } | undefined)?.params
  const params: Params | undefined = raw ? (isPromise<Params>(raw) ? await raw : raw) : undefined
  const nombreDecod = decodeURIComponent(params?.nombre ?? "")
  return {
    title: `${nombreDecod} | Actualidad por país`,
    description: `Cobertura neutral y verificada de noticias relacionadas con ${nombreDecod}.`,
  }
}

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
    .filter((n) => matchPais(n.pais, nombreDecod))
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))

  // Si quieres filtrar por etiqueta dentro del país:
  const items = tag
    ? base.filter((n) => (n.etiquetas ?? []).some((t) => normalizeKey(String(t)) === normalizeKey(tag)))
    : base

  // Temas más frecuentes dentro del país (para chips)
  const temasMap = new Map<string, number>()
  for (const n of base) for (const t of n.etiquetas ?? []) {
    temasMap.set(t, (temasMap.get(t) ?? 0) + 1)
  }
  const temas = [...temasMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)

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
    ]
      .filter(Boolean)
      .join("&")}`

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{nombreDecod}</h1>
        <p className="text-sm text-muted-foreground">
          {tag ? <>Filtrado por tema: <span className="font-medium">{tag}</span> · </> : null}
          {items.length} notas
        </p>
      </header>

      {temas.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Temas relacionados</h2>
          <div className="flex flex-wrap gap-2">
            <Link href={`/pais/${encodeURIComponent(nombreDecod)}`} className="px-3 py-1 text-xs rounded-full border hover:bg-gray-50 dark:hover:bg-gray-800">
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

      {hero && (
        <article className="mb-8 rounded-xl border p-5 shadow-sm">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center rounded-full border px-2 py-0.5">
              Destacado de hoy
            </span>
            <time>{fmt(hero.fecha)}</time>
            {fuenteNombre(hero.fuente) && <span className="truncate">{fuenteNombre(hero.fuente)}</span>}
          </div>
          <h2 className="mt-2 text-2xl font-semibold leading-snug">
            <Link href={`/noticias/${hero.id}`} className="hover:text-blue-700">
              {hero.titulo}
            </Link>
          </h2>
          <p className="mt-2 text-gray-700">{hero.resumen}</p>
        </article>
      )}

      {restHoy.length > 0 && (
        <section className="mb-10">
          <h3 className="mb-3 text-lg font-semibold">Hoy</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {restHoy.map((n) => (
              <article key={n.id} className="rounded-xl border p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <time>{fmt(n.fecha)}</time>
                  {fuenteNombre(n.fuente) && <span className="truncate">{fuenteNombre(n.fuente)}</span>}
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
                  {fuenteNombre(n.fuente) && <span className="truncate">{fuenteNombre(n.fuente)}</span>}
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
