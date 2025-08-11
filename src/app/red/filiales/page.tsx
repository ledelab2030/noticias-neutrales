// src/app/red/filiales/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"

export const metadata: Metadata = {
  title: "Filiales",
  description: "Empresas del grupo LedeLab.",
}

const FILIALES = [
  {
    name: "I+DE SAS",
    href: "/imasde",
    summary: "Aditivos y recubrimientos sostenibles. Investigación y desarrollo.",
  },
  {
    name: "Grupo Protemad",
    href: "/protemad",
    summary: "Protección, tratamiento y mejora de la madera.",
  },
]

export default function FilialesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeader title="Filiales" description="Empresas operadas por LedeLab." />
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {FILIALES.map((f) => (
          <Link
            key={f.name}
            href={f.href}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:border-gray-800 dark:bg-gray-900"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{f.name}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{f.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
