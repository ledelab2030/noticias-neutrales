// /app/estilo-de-vida/ClientGrid.tsx
"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

function classNames(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ")
}
function formatISODate(iso: string) {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString("es-CO", { year: "numeric", month: "short", day: "2-digit" })
  } catch { return iso }
}

export default function ClientGrid({ items, temas }: { items: any[]; temas: string[] }) {
  const [active, setActive] = useState<string | null>(null)
  const filtered = useMemo(() => (!active ? items : items.filter((n) => n.temas?.includes(active))), [items, active])

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <button onClick={() => setActive(null)} className={classNames("rounded-full border px-3 py-1 text-sm",
            !active ? "bg-[color:#0072CE] text-white border-[color:#0072CE]" : "border-slate-300 hover:border-slate-400")}>
          Todos
        </button>
        {temas.map((t) => (
          <button key={t} onClick={() => setActive((curr) => (curr === t ? null : t))}
            className={classNames("rounded-full border px-3 py-1 text-sm",
              active === t ? "bg-[color:#0072CE] text-white border-[color:#0072CE]" : "border-slate-300 text-slate-700 hover:border-slate-400")}>
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((n) => <Card key={n.id} item={n} />)}
      </div>
    </section>
  )
}

function Card({ item }: { item: any }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-md">
      <div className="relative">
        <div className="aspect-[16/10] w-full bg-gradient-to-br from-slate-100 to-slate-200" />
        <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
          <div className="h-full w-full bg-[radial-gradient(circle_at_70%_30%,_rgba(0,114,206,0.12),_transparent_40%)]" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <time>{formatISODate(item.fecha)}</time>
          {item.fuente?.nombre && <span className="truncate">{item.fuente.nombre}</span>}
        </div>
        <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900">
          <Link href={`/estilo-de-vida/${item.id}`} className="hover:text-[color:#0072CE]">{item.titulo}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-slate-700">{item.resumen}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.temas?.map((t: string) => (
            <span key={t} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex-1" />
        <div className="mt-4">
          <Link href={`/estilo-de-vida/${item.id}`} className="inline-flex items-center gap-2 text-[color:#0072CE] hover:underline">
            Leer más
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
