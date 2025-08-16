// /app/red/mentores/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import { mentores, type Mentor } from '@/data/mentores'

export const metadata: Metadata = {
  title: 'Mentores | LedeLab',
  description:
    'Consejo y red de mentores de LedeLab: expertos en I+D, sostenibilidad, negocios y educación.',
}

export default function MentoresPage() {
  const items: Mentor[] = [...mentores]

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        title="Mentores"
        description="Expertos que acompañan a LedeLab en I+D, sostenibilidad, negocios y educación."
      />

      {!items.length ? (
        <p className="text-sm text-muted-foreground">Aún no hay mentores publicados.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m) => (
            <li
              key={m.id}
              className="group rounded-2xl border bg-white/50 p-5 shadow-sm transition hover:shadow-md dark:bg-neutral-900/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium leading-snug">{m.nombre}</h3>
                  <p className="text-sm text-muted-foreground">
                    {m.rol}{m.organizacion ? ` · ${m.organizacion}` : ''}
                  </p>
                </div>
                {m.pais && (
                  <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                    {m.pais}
                  </span>
                )}
              </div>

              {m.bio && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.bio}
                </p>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {m.url ? (
                  <Link
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4 hover:opacity-90"
                  >
                    Perfil
                  </Link>
                ) : null}

                {m.expertise?.length ? (
                  <div className="ml-auto flex flex-wrap gap-2">
                    {m.expertise.map((tag) => (
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
