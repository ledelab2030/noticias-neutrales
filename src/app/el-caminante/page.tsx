// src/app/el-caminante/page.tsx
import Link from "next/link"

type Noticia = {
  id: string
  fecha: string // YYYY-MM-DD
  titulo: string
  resumen?: string
  etiquetas?: string[]
}

type NoticiasLike = {
  default?: Noticia[]
  NOTICIAS?: Noticia[]
  noticias?: Noticia[]
}

import * as noticiasModule from "@/data/noticias"

function cargarNoticias(): Noticia[] {
  const m = noticiasModule as unknown as NoticiasLike
  const arr = m.default ?? m.NOTICIAS ?? m.noticias ?? []
  return Array.isArray(arr) ? arr : []
}

function esElCaminante(n: Noticia): boolean {
  const etiquetas = n.etiquetas ?? []
  return etiquetas.some((e) =>
    e.toLowerCase().replace(/\s+/g, "-") === "el-caminante"
  )
}

function ordenarPorFechaDesc(a: Noticia, b: Noticia): number {
  return a.fecha > b.fecha ? -1 : a.fecha < b.fecha ? 1 : 0
}

export default function Page() {
  const todas = cargarNoticias()
  const lista = todas.filter(esElCaminante).sort(ordenarPorFechaDesc)

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">El Caminante</h1>
        <p className="mt-2 text-sm text-gray-600">
          Historias y reflexiones para redescubrir la ciudad desde los pies.
        </p>
      </header>

      <section className="space-y-6">
        {lista.map((n) => (
          <article key={n.id} className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <time className="block text-xs text-gray-500">{n.fecha}</time>
            <h2 className="mt-1 text-lg font-medium">
              <Link href={`/noticias/${n.id}`} className="hover:underline">
                {n.titulo}
              </Link>
            </h2>
            {n.resumen && (
              <p className="mt-2 text-sm text-gray-700">
                {n.resumen}
              </p>
            )}
          </article>
        ))}

        {lista.length === 0 && (
          <p className="text-sm text-gray-600">No hay artículos publicados todavía en esta sección.</p>
        )}
      </section>
    </main>
  )
}
