// src/app/equipo/page.tsx
import type { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"

export const metadata: Metadata = {
  title: "Equipo",
  description: "Conoce a las personas detrás de LedeLab.",
}

type Member = {
  name: string
  role: string
  bio: string
  email?: string
}

const MEMBERS: Member[] = [
  {
    name: "Leonardo De la Hoz Borrego",
    role: "Cofundador",
    bio: "Estrategia de producto, investigación aplicada y desarrollo editorial.",
    email: "leonardo@ledelab.group",
  },
  {
    name: "Javier",
    role: "Cofundador",
    bio: "Análisis y desarrollo técnico de soluciones.",
  },
]

export default function EquipoPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeader
        title="Equipo"
        description="Personas que construyen y mantienen LedeLab y su red."
      />
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {MEMBERS.map((m) => (
          <article
            key={m.name}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{m.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{m.role}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{m.bio}</p>
            {m.email && (
              <a
                className="mt-3 inline-block text-blue-700 hover:underline dark:text-blue-300"
                href={`mailto:${m.email}`}
              >
                {m.email}
              </a>
            )}
          </article>
        ))}
      </div>
    </main>
  )
}
