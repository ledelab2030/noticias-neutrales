// src/app/noticias/page.tsx
import Link from "next/link"
import { noticias } from "@/data/noticias"

function fmt(iso: string) {
  try {
    const [y, m, d] = iso.split("-").map(Number)
    return new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1)).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC",
    })
  } catch {
    return iso
  }
}

type FuenteObj = { nombre?: string; url?: string }
function isFuenteObj(val: unknown): val is FuenteObj {
  return typeof val === "object" && val !== null && "nombre" in (val as Record<string, unknown>)
}
function fuenteNombre(f: unknown) {
  if (!f) return ""
  if (typeof f === "string") return f
  if (isFuenteObj(f) && typeof f.nombre === "string") return f.nombre
  return ""
}

export default function NoticiasAnteriores() {
  const items = [...noticias].sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Noticias</h1>
      <ul className="space-y-6">
        {items.map((n) => (
          <li key={n.id}>
            <h2 className="text-xl font-semibold">
              <Link href={`/noticias/${n.id}`} className="hover:underline">
                {n.titulo}
              </Link>
            </h2>
            <div className="text-xs text-muted-foreground mt-1">
              {fmt(n.fecha)}
              {fuenteNombre(n.fuente) ? ` · ${fuenteNombre(n.fuente)}` : ""}
            </div>
            <p className="text-gray-700 dark:text-gray-300">{n.resumen ?? ""}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

