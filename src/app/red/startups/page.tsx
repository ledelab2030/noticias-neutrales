// /app/red/startups/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import { startups, type Startup } from '@/data/startups'

export const metadata: Metadata = {
  title: 'Startups | LedeLab',
  description:
    'Emprendimientos asociados a LedeLab: incubados, acelerados o co-creados en sostenibilidad e innovación.',
}

export default function StartupsPage() {
  const items: Startup[] = [...startups]

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        title="Startups"
        description="Emprendimientos asociados a LedeLab en distintas etapas: de idea a escalamiento."
      />

      {!items.length ? (
        <p className="text-sm text-muted-foreground">Aún no hay startups publicadas.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <li
              key={s.id}
              className="group rounded-2xl border bg-white/50 p-5 shadow-sm transition hover:shadow-md dark:bg-neutral-900/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium leading-snug">{s.nombre}</h3>
                <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {s.pais}
                </span>
              </div>

              <p className="mt-1 text-xs text-muted-foreground">
                Estado: {s.estado}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.descripcion}
              </p>

              <div className="mt-4 flex items-center gap-2">
                {s.url ? (
                  <Link
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4 hover:opacity-90"
                  >
                    Sitio oficial
                  </Link>
                ) : null}

                {s.etiquetas?.length ? (
                  <div className="ml-auto flex flex-wrap gap-2">
                    {s.etiquetas.map((tag) => (
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
    </main>
  )
}
