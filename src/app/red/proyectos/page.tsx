// src/app/red/proyectos/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import { proyectos, type Proyecto } from '@/data/proyectos'

export const metadata: Metadata = {
  title: 'Proyectos | LedeLab',
  description:
    'Iniciativas y pilotos con nombre propio (aceleración, mentoría, impacto social, smart cities).',
}

export default function ProyectosPage() {
  const items: Proyecto[] = [...proyectos]

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        title="Proyectos"
        description="Iniciativas y pilotos impulsados por LedeLab junto a socios nacionales e internacionales."
      />

      {!items.length ? (
        <p className="text-sm text-muted-foreground">Aún no hay proyectos publicados.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <li
              key={p.id}
              className="group rounded-2xl border bg-white/50 p-5 shadow-sm transition hover:shadow-md dark:bg-neutral-900/50"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium leading-snug">{p.nombre}</h3>
                <p className="text-xs text-muted-foreground">
                  {p.pais} · {p.fecha}
                </p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.descripcion}
              </p>

              {p.colaboradores?.length ? (
                <div className="mt-3">
                  <p className="text-xs font-semibold text-muted-foreground">Colaboradores:</p>
                  <ul className="mt-1 flex flex-wrap gap-1">
                    {p.colaboradores.map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {p.url && (
                <div className="mt-4">
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4 hover:opacity-90"
                  >
                    Más información
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
