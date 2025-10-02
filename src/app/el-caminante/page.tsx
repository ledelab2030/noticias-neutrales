// src/app/el-caminante/page.tsx
import Link from "next/link"
import Image from "next/image"

type Noticia = {
  id: string
  fecha: string // YYYY-MM-DD
  titulo: string
  resumen?: string
  etiquetas?: string[]
  imagen?: string                 // imagen principal
  imagen_portada?: string         // miniatura/portada opcional
  credito_imagen?: string
  ubicacion?: {
    nombre: string
    coordenadas?: string
  }
  destacada?: boolean             // ← fijar al inicio cuando true
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
  return etiquetas.some((e) => e.toLowerCase().replace(/\s+/g, "-") === "el-caminante")
}

function ordenarPorFechaDesc(a: Noticia, b: Noticia): number {
  return a.fecha > b.fecha ? -1 : a.fecha < b.fecha ? 1 : 0
}

function LineaMeta({ n }: { n: Noticia }) {
  const ubicacionLink =
    n.ubicacion?.coordenadas
      ? `https://www.google.com/maps?q=${encodeURIComponent(n.ubicacion.coordenadas)}`
      : null

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
      <time className="block text-xs text-gray-500">{n.fecha}</time>
      {n.ubicacion && (
        <span className="block text-xs text-gray-500">
          •{" "}
          {ubicacionLink ? (
            <a
              href={ubicacionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              📍 {n.ubicacion.nombre}
            </a>
          ) : (
            <>📍 {n.ubicacion.nombre}</>
          )}
        </span>
      )}
    </div>
  )
}

function Miniatura({ n, className = "" }: { n: Noticia; className?: string }) {
  const src = n.imagen ?? n.imagen_portada
  if (!src) return null
  // Tamaños: 160x90 (16:9) en desktop, 120x75 en xs (el CSS ajusta)
  return (
    <div className={`shrink-0 overflow-hidden rounded-xl border border-gray-200 ${className}`}>
      <Image
        src={src}
        alt={n.titulo}
        width={160}
        height={90}
        loading="lazy"
        className="h-[90px] w-[160px] object-cover sm:h-[90px] sm:w-[160px] xs:h-[75px] xs:w-[120px]"
      />
    </div>
  )
}

function Card({ n }: { n: Noticia }) {
  const tieneImagen = Boolean(n.imagen || n.imagen_portada)
  return (
    <article
      key={n.id}
      className="rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow transition-shadow"
    >
      <div className={`flex gap-4 ${tieneImagen ? "items-start" : "items-center"}`}>
        {tieneImagen && <Miniatura n={n} />}
        <div className="min-w-0">
          <LineaMeta n={n} />
          <h2 className="mt-1 text-lg font-medium leading-snug">
            <Link href={`/noticias/${n.id}`} className="hover:underline">
              {n.titulo}
            </Link>
          </h2>
          {n.resumen && (
            <p className="mt-2 line-clamp-3 text-sm text-gray-700">{n.resumen}</p>
          )}
        </div>
      </div>
    </article>
  )
}

function CardDestacada({ n }: { n: Noticia }) {
  const src = n.imagen ?? n.imagen_portada
  return (
    <article className="rounded-2xl border border-blue-200 p-4 shadow-sm hover:shadow transition-shadow bg-blue-50/40">
      <div className="flex flex-col gap-4 sm:flex-row">
        {src && (
          <div className="shrink-0 overflow-hidden rounded-xl border border-gray-200">
            <Image
              src={src}
              alt={n.titulo}
              width={280}
              height={160}
              loading="lazy"
              className="h-[140px] w-[240px] object-cover sm:h-[160px] sm:w-[280px]"
            />
          </div>
        )}
        <div className="min-w-0">
          <LineaMeta n={n} />
          <h2 className="mt-1 text-2xl font-semibold leading-snug">
            <Link href={`/noticias/${n.id}`} className="hover:underline">
              {n.titulo}
            </Link>
          </h2>
          {n.resumen && (
            <p className="mt-3 text-[15px] text-gray-800">{n.resumen}</p>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Page() {
  const todas = cargarNoticias().filter(esElCaminante).sort(ordenarPorFechaDesc)

  // Nota destacada (presentación) y resto
  const destacada = todas.find((n) => n.destacada)
  const restantes = todas.filter((n) => !n.destacada)

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">El Caminante</h1>
        <p className="mt-2 text-sm text-gray-600">
          Historias y reflexiones para redescubrir la ciudad desde los pies.
        </p>
      </header>

      {/* Nota de presentación fijada */}
      {destacada && (
        <section className="mb-10">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Presentación
          </h3>
          <CardDestacada n={destacada} />
        </section>
      )}

      {/* Resto en orden cronológico */}
      <section className="space-y-6">
        {restantes.map((n) => (
          <Card key={n.id} n={n} />
        ))}
      </section>

      {todas.length === 0 && (
        <p className="text-sm text-gray-600 mt-8">
          No hay artículos publicados todavía en esta sección.
        </p>
      )}
    </main>
  )
}
