// src/app/red/proyectos/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import { proyectos, type Proyecto } from '@/data/proyectos'

export const metadata: Metadata = {
  title: 'Proyectos | LedeLab',
  description:
    'Iniciativas y pilotos impulsados por LedeLab junto a socios nacionales e internacionales.',
}

export default function ProyectosPage() {
  // copiamos a un array nuevo para no mutar la fuente
  const items: Proyecto[] = [...proyectos]

  if (!items.length) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeader
          title="Proyectos"
          description="Iniciativas y pilotos impulsados por LedeLab junto a socios nacionales e internacionales."
        />
        <p className="mt-4 text-sm text-muted-foreground">
          Aún no hay proyectos publicados.
        </p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        title="Proyectos"
        description="Iniciativas y pilotos impulsados por LedeLab junto a socios nacionales e internacionales."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, idx) => (
          <li
            key={p.id ?? `${p.nombre}-${idx}`}
            className="group rounded-2xl border bg-white/50 p-5 shadow-sm transition hover:shadow-md dark:bg-neutral-900/50"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold leading-tight">{p.nombre}</h3>
              {p.url ? (
                <Link
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border px-2 py-1 text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  Sitio
                </Link>
              ) : null}
            </div>

            {p.descripcion ? (
              <p className="mb-3 text-sm text-muted-foreground">{p.descripcion}</p>
            ) : null}

            {Array.isArray(p.colaboradores) && p.colaboradores.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.colaboradores.map((c) => (
                  <li
                    key={c}
                    className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  )
}
