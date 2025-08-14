// /tag/[tag]/page.tsx
import Link from "next/link"
import { noticias } from "@/data/noticias"
import { slugify, unslug } from "@/utils/slugify"

interface Props {
  params: Promise<{ tag: string }>
}

function fmt(iso: string) {
  try {
    const [y, m, d] = iso.split("-").map(Number)
    const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1))
    return date.toLocaleDateString("es-CO", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC",
    })
  } catch {
    return iso
  }
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params
  const human = unslug(tag)

  const items = noticias
    .filter((n) => n.etiquetas?.some((t) => slugify(t) === tag))
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          inicio
        </Link>
        <span className="px-2">/</span>
        <span className="lowercase">etiqueta</span>
        <span className="px-2">/</span>
        <span className="lowercase">{human}</span>
      </div>

      <h1 className="text-2xl font-semibold">
        Etiqueta: <span className="lowercase">{human}</span>
      </h1>

      {!items.length ? (
        <p className="mt-6 text-sm text-muted-foreground">
          No hay noticias con esta etiqueta.
        </p>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((n) => (
            <li key={n.id} className="rounded-xl border p-5 dark:border-gray-800">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <time>{fmt(n.fecha)}</time>
                <span>{n.pais ?? "·"}</span>
              </div>
              <h2 className="mt-2 text-lg font-semibold">
                <Link href={`/noticias/${n.id}`} className="hover:underline">
                  {n.titulo}
                </Link>
              </h2>
              {n.resumen && <p className="mt-2 text-sm">{n.resumen}</p>}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
