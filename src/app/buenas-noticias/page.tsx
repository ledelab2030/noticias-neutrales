// src/app/buenas-noticias/page.tsx
import Link from "next/link"

// Tipos mínimos para lo que usamos en el listado
type Noticia = {
  id: string
  fecha: string // YYYY-MM-DD
  titulo: string
  resumen?: string
  etiquetas?: string[]
}

// El módulo puede exportar de varias formas; lo tipamos de forma segura
type NoticiasLike = {
  default?: Noticia[]
  NOTICIAS?: Noticia[]
  noticias?: Noticia[]
}

// Import flexible del dataset
import * as noticiasModule from "@/data/noticias"

// Carga robusta del arreglo de noticias sin usar `any`
function cargarNoticias(): Noticia[] {
  const m = noticiasModule as unknown as NoticiasLike
  const arr = m.default ?? m.NOTICIAS ?? m.noticias ?? []
  return Array.isArray(arr) ? arr : []
}

// Normaliza y filtra por la sección "Buenas Noticias!"
function esBuenasNoticias(n: Noticia): boolean {
  const etiquetas = n.etiquetas ?? []
  return etiquetas.some((e) =>
    e.toLowerCase().replace(/\s+/g, "") === "buenasnoticias!"
  )
}

function ordenarPorFechaDesc(a: Noticia, b: Noticia): number {
  // Orden descendente por fecha (YYYY-MM-DD es lex-friendly)
  return a.fecha > b.fecha ? -1 : a.fecha < b.fecha ? 1 : 0
}

export default function Page() {
  const todas = cargarNoticias()
  const lista = todas.filter(esBuenasNoticias).sort(ordenarPorFechaDesc)

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">¡Buenas Noticias!</h1>
        <p className="mt-2 text-sm text-gray-600">
          Historias verificadas de reconciliación, oportunidades y progreso.
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
          <p className="text-sm text-gray-600">No hay artículos en esta sección todavía.</p>
        )}
      </section>
    </main>
  )
}
