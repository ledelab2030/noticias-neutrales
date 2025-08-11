// src/app/red/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"

export const metadata: Metadata = {
  title: "Red",
  description: "Relaciones de LedeLab con filiales y aliados.",
}

export default function RedPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeader
        title="Red"
        description="Nuestra red se compone de filiales operativas y aliados estratégicos."
      />

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Link
          href="/red/filiales"
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:border-gray-800 dark:bg-gray-900"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Filiales</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Empresas del grupo enfocadas en soluciones para madera, construcción y más.
          </p>
        </Link>
        <Link
          href="/red/aliados"
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:border-gray-800 dark:bg-gray-900"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Aliados</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Organizaciones y profesionales con quienes colaboramos en proyectos.
          </p>
        </Link>
      </div>
    </main>
  )
}
