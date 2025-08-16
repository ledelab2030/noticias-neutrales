// /app/red/aliados/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { aliados, type Aliado } from '@/data/aliados'

export const metadata: Metadata = {
  title: 'Aliados | LedeLab',
  description:
    'Aliados de LedeLab: instituciones académicas, oficinas de transferencia, cámaras y asociaciones con las que colaboramos.',
}

type Grouped = Record<string, Aliado[]>

const CATEGORIA_ORDEN = [
  'Instituciones académicas y de investigación',
  'Transferencia de tecnología',
  'Cámaras y asociaciones empresariales',
  'Aliados internacionales',
] as const

function groupBy(arr: Aliado[], key: keyof Aliado): Grouped {
  return arr.reduce((acc, item) => {
    const k = String(item[key] ?? '')
    if (!acc[k]) acc[k] = []
    acc[k].push(item)
    return acc
  }, {} as Grouped)
}

export default function AliadosPage() {
  if (!aliados.length) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-3xl font-bold">Aliados de LedeLab</h1>
        <p className="mt-4 text-muted-foreground">
          Aún no hay aliados publicados.
        </p>
      </main>
    )
  }

  const grouped = groupBy(aliados, 'categoria')

// Mapa de orden para evitar "any"
const orderMap = new Map(
  (CATEGORIA_ORDEN as readonly string[]).map((c, i) => [c, i])
)

const categorias = Object.keys(grouped).sort((a, b) => {
  const ia = orderMap.get(a) ?? 999
  const ib = orderMap.get(b) ?? 999
  return ia - ib
})


  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Aliados de LedeLab</h1>
        <p className="mt-2 text-muted-foreground">
          Colaboraciones que impulsan proyectos sostenibles, innovadores y de
          impacto social. Esta lista se actualiza conforme se consolidan nuevas
          alianzas en Colombia y otros países.
        </p>
      </header>

      <div className="space-y-10">
        {categorias.map((categoria) => {
          const items = grouped[categoria] ?? []
          return (
            <section key={categoria}>
              <h2 className="text-xl font-semibold mb-4">{categoria}</h2>

              {items.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Aún no hay aliados en esta categoría.
                </p>
              ) : (
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((a) => (
                    <li
                      key={a.id}
                      className="group rounded-2xl border bg-white/50 p-5 shadow-sm transition hover:shadow-md dark:bg-neutral-900/50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-medium leading-snug">
                          {a.nombre}
                        </h3>
                        {a.pais && (
                          <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                            {a.pais}
                          </span>
                        )}
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {a.descripcion}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {a.url ? (
                          <Link
                            href={a.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm underline underline-offset-4 hover:opacity-90"
                          >
                            Sitio oficial
                          </Link>
                        ) : null}
                        {a.etiquetas?.length ? (
                          <div className="ml-auto flex flex-wrap gap-2">
                            {a.etiquetas.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )
        })}
      </div>

      <footer className="mt-12 border-t pt-6 text-sm text-muted-foreground">
        Nota: Los aliados listados aquí tienen sede en Colombia, salvo los
        que se indiquen en la categoría “Aliados internacionales”.
      </footer>
    </main>
  )
}
