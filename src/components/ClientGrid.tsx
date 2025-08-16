// src/components/ClientGrid.tsx
"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

export type EstiloItem = {
  id: string
  titulo: string
  resumen?: string
  fecha?: string // YYYY-MM-DD
  tema?: string
  etiquetas?: string[]
}

type ClientGridProps = {
  items: EstiloItem[]
  temas?: string[]
  basePath?: string
  ctaLabel?: string
  enableSearch?: boolean
}

export default function ClientGrid(props: ClientGridProps) {
  const {
    items,
    temas = [],
    basePath = "/noticias",
    ctaLabel = "Leer más",
    enableSearch = true
  } = props

  const [query, setQuery] = useState("")
  const [tema, setTema] = useState<string>("__all__")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((it) => {
      const byTema =
        tema === "__all__" ||
        ((it.tema ?? "").toLowerCase() === tema.toLowerCase())
      const byQuery =
        q.length === 0 ||
        it.titulo.toLowerCase().includes(q) ||
        (it.resumen ?? "").toLowerCase().includes(q) ||
        (it.etiquetas ?? []).some((t) => t.toLowerCase().includes(q))
      return byTema && byQuery
    })
  }, [items, query, tema])

  return (
    <section className="mx-auto max-w-6xl">
      {(enableSearch || temas.length > 0) && (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {enableSearch && (
            <div className="relative w-full sm:max-w-md">
              <input
                type="search"
                placeholder="Buscar…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="7" strokeWidth="2" />
                  <path d="M20 20l-3.5-3.5" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          )}

          {temas.length > 0 && (
            <div className="flex items-center gap-2">
              <label htmlFor="tema" className="text-sm text-slate-600 dark:text-slate-300">
                Tema:
              </label>
              <select
                id="tema"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                <option value="__all__">Todos</option>
                {temas.map((t) => (
                  <option key={t} value={t}>
                    {capitalize(t)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <Card
            key={item.id}
            item={item}
            basePath={basePath}
            ctaLabel={ctaLabel}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-6 rounded-lg border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-300">
            No encontramos resultados con esos filtros.
          </p>
        </div>
      )}
    </section>
  )
}

function Card(props: { item: EstiloItem; basePath: string; ctaLabel: string }) {
  const { item, basePath, ctaLabel } = props
  const href = `${basePath}/${item.id}`

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        {item.fecha && <time dateTime={item.fecha}>{formatDate(item.fecha)}</time>}
        {item.tema && (
          <>
            <span>•</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] dark:bg-slate-800">
              {capitalize(item.tema)}
            </span>
          </>
        )}
      </div>

      <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
        <Link href={href} className="hover:text-[color:#0072CE] dark:hover:text-blue-300">
          {item.titulo}
        </Link>
      </h3>

      {item.resumen && (
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          {item.resumen}
        </p>
      )}

      {item.etiquetas && item.etiquetas.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.etiquetas.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex-1" />

      <div className="mt-4">
        <Link href={href} className="inline-flex items-center gap-2 text-[color:#0072CE] hover:underline dark:text-blue-300">
          {ctaLabel}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

function formatDate(iso?: string) {
  if (!iso) return ""
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  })
}

function capitalize(s?: string) {
  if (!s) return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}
