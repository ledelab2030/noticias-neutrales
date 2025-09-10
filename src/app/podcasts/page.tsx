// src/app/podcasts/page.tsx
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

function normTag(t: string) {
  return t.toLowerCase().trim().replace(/\s+/g, "-")
}

function esPodcast(n: Noticia): boolean {
  const etiquetas = n.etiquetas ?? []
  const byTag = etiquetas.some((e) =>
    ["podcast", "podcasts", "audio"].includes(normTag(e))
  )

  // Texto a evaluar solo título + resumen (no contenido largo)
  const texto = `${n.titulo} ${n.resumen ?? ""}`.toLowerCase()

  // Coincidencias inequívocas (evita "episodios geológicos", etc.)
  const hayPalabraPodcast = /\bpodcasts?\b/.test(texto)
  const hayFeed = texto.includes("feed de episodios")
  const haySeries =
    texto.includes("conversaciones pendientes") ||
    texto.includes("aprendamos juntos 2030")

  return byTag || hayPalabraPodcast || hayFeed || haySeries
}

function ordenarPorFechaDesc(a: Noticia, b: Noticia): number {
  return a.fecha > b.fecha ? -1 : a.fecha < b.fecha ? 1 : 0
}

export const metadata = { title: "Podcasts" }

export default function Page() {
  const todas = cargarNoticias()
  const lista = todas.filter(esPodcast).sort(ordenarPorFechaDesc)

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Podcasts</h1>
        <p className="mt-2 text-sm text-gray-600">
          Episodios y notas relacionadas con podcasts (Conversaciones Pendientes, Aprendamos Juntos 2030, etc.).
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
              <p className="mt-2 text-sm text-gray-700">{n.resumen}</p>
            )}
          </article>
        ))}

        {lista.length === 0 && (
          <p className="text-sm text-gray-600">No hay artículos relacionados con podcasts todavía.</p>
        )}
      </section>
    </main>
  )
}
