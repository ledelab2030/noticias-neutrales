// src/app/pais/page.tsx
import Link from "next/link"
import type { Metadata } from "next"
import { noticias } from "@/data/noticias"

export const metadata: Metadata = {
  title: "Países | Navegar por país",
  description: "Explora todas las notas por país en Noticias Neutrales.",
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
}

export default function PaisesIndexPage() {
  // Contar frecuencia por país (usando el campo `pais` de cada noticia)
  const freq = new Map<string, number>()
  for (const n of noticias) {
    const p = (n.pais ?? "").toString().trim()
    if (!p) continue
    freq.set(p, (freq.get(p) ?? 0) + 1)
  }

  // Crear lista ordenada: primero por nombre (alfabético)
  const paises = [...freq.entries()]
    .sort((a, b) => normalize(a[0]).localeCompare(normalize(b[0])))

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
          {paises.map(([pais, count]) => (
            <li key={pais}>
              <Link
                href={`/pais/${encodeURIComponent(pais)}`}
                className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900"
                aria-label={`Ver noticias de ${pais}`}
              >
                <span className="truncate">{pais}</span>
                <span className="ml-2 rounded-full border px-2 py-0.5 text-xs">{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
