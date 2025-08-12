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
        <p className="text-sm text-muted-foreground">
          Aún no hay proyectos publicados.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <li
              key={p.slug ?? p.id ?? p.titulo}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-tight">
                  {p.titulo}
                </h3>
                {p.url ? (
                  <Link
                    href={p.url}
                    target="_blank"
                    className="shrink-0 rounded-full border px-2 py-1 text-xs hover:bg-neutral-50"
                  >
                    Sitio
                  </Link>
                ) : null}
              </div>

              {p.descripcion ? (
                <p className="mb-3 text-sm text-neutral-600">{p.descripcion}</p>
              ) : null}

              {Array.isArray(p.colaboradores) && p.colaboradores.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.colaboradores.map((c: string) => (
                    <li
                      key={c}
                      className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
