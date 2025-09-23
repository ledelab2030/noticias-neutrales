// src/app/pais/page.tsx
import Link from "next/link"
import type { Metadata } from "next"
import { noticias } from "@/data/noticias"

export const metadata: Metadata = {
  title: "Países | Navegar por país",
  description: "Explora todas las notas por país en Noticias Neutrales.",
}

// Clave de agrupación: minúsculas, sin tildes, trim
function normalizeKey(p: string): string {
  return (p || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
}

// Etiqueta para mostrar: capitaliza palabras comunes (de, del, la... en minúscula)
function prettifyName(p: string): string {
  const base = normalizeKey(p)
  const keepLower = new Set(["de", "del", "la", "las", "los", "y", "en"])
  return base
    .split(/\s+/)
    .map((w, i) => (keepLower.has(w) && i !== 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ")
}

export default function PaisesIndexPage() {
  // Map<clave_normalizada, { label: string; count: number }>
  const freq = new Map<string, { label: string; count: number }>()
  for (const n of noticias) {
    const raw = (n.pais ?? "").toString().trim()
    if (!raw) continue
    const key = normalizeKey(raw)
    const label = prettifyName(raw)
    const prev = freq.get(key)
    if (prev) prev.count += 1
    else freq.set(key, { label, count: 1 })
  }

  const paises = [...freq.entries()]
    .map(([key, v]) => ({ key, label: v.label, count: v.count }))
    .sort((a, b) => a.label.localeCompare(b.label, "es", { sensitivity: "base" }))

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Países</h1>
        <p className="text-sm text-muted-foreground">
          Explora las notas agrupadas por país. Selecciona un país para ver sus publicaciones recientes.
        </p>
      </header>

      {paises.length === 0 ? (
        <p className="text-sm text-muted-foreground">Aún no hay países con contenido.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {paises.map(({ key, label, count }) => (
            <li key={key}>
              <Link
                href={`/pais/${encodeURIComponent(label)}`}
                className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900"
                aria-label={`Ver noticias de ${label}`}
              >
                <span className="truncate">{label}</span>
                <span className="ml-2 rounded-full border px-2 py-0.5 text-xs">{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
