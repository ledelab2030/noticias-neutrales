// src/components/F84GalleryClient.tsx
"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import type { F84Foto, F84Categoria } from "@/data/flex84.gallery"

type Props = { items: F84Foto[] }

const cats: Array<"todas" | F84Categoria> = [
  "todas",
  "espacio",
  "procesos",
  "reuniones",
  "acondicionamiento",
  "concepto",
]

export default function F84GalleryClient({ items }: Props) {
  const [cat, setCat] = useState<"todas" | F84Categoria>("todas")
  const [open, setOpen] = useState(false)
  const [curr, setCurr] = useState<F84Foto | null>(null)

  const gallery = useMemo(() => {
    const sorted = [...items].sort((a, b) => {
      const da = a.date ?? ""
      const db = b.date ?? ""
      if (da && db && db !== da) return db.localeCompare(da)
      return (a.titulo ?? "").localeCompare(b.titulo ?? "")
    })
    return cat === "todas" ? sorted : sorted.filter((g) => g.categoria === cat)
  }, [items, cat])

  return (
    <>
      {/* Filtros */}
      <div className="mb-6 flex flex-wrap gap-2">
        {cats.map((c) => {
          const active = cat === c
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-1.5 text-sm rounded-full border transition ${
                active
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-teal-400"
              }`}
              aria-pressed={active}
            >
              {c}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((f) => (
          <figure
            key={f.id}
            className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]"
          >
            <button
              onClick={() => {
                setCurr(f)
                setOpen(true)
              }}
              className="block w-full text-left"
              aria-label={`Ampliar imagen: ${f.titulo}`}
            >
              <Image
                src={f.file}
                alt={f.alt}
                width={1024}
                height={768}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-auto object-cover group-hover:opacity-95 transition"
              />
            </button>
            <figcaption className="p-3 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium">{f.titulo}</span>
                {f.date && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-gray-800">
                    {f.date}
                  </span>
                )}
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300">
                  {f.categoria}
                </span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {open && curr && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={curr.file}
              alt={curr.alt}
              width={1920}
              height={1280}
              className="w-full h-auto rounded-lg"
              priority
            />
            <div className="mt-2 text-gray-200 text-sm flex items-center justify-between">
              <div>
                <span className="font-medium">{curr.titulo}</span>
                {curr.date ? ` · ${curr.date}` : ""} · {curr.categoria}
              </div>
              <div className="flex gap-2">
                <a
                  href={curr.file}
                  target="_blank"
                  rel="noopener"
                  className="underline hover:no-underline"
                >
                  Ver original
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="px-3 py-1 rounded border border-gray-500 hover:bg-white/10"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
