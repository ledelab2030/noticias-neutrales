// /app/red/filiales/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { filiales, type Filial } from '@/data/filiales'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Filiales | LedeLab',
  description:
    'Empresas operadas por LedeLab, enfocadas en innovación sostenible y soluciones para materiales y construcción.',
}

export default function FilialesPage() {
  const items: Filial[] = filiales

  if (!items.length) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeader
          title="Filiales"
          description="Empresas operadas por LedeLab."
        />
        <p className="text-sm text-muted-foreground">Aún no hay filiales publicadas.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        title="Filiales"
        description="Empresas operadas por LedeLab."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <li
            key={f.id}
            className="group rounded-2xl border bg-white/50 p-5 shadow-sm transition hover:shadow-md dark:bg-neutral-900/50"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium leading-snug">{f.nombre}</h3>
              {f.pais && (
                <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {f.pais}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {f.descripcion}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {f.url ? (
                <Link
                  href={f.url}
                  className="text-sm underline underline-offset-4 hover:opacity-90"
                >
                  Sitio oficial
                </Link>
              ) : null}

              {f.etiquetas?.length ? (
                <div className="ml-auto flex flex-wrap gap-2">
                  {f.etiquetas.map((tag) => (
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
    </main>
  )
}
