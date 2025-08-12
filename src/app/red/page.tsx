// src/app/red/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"

export const metadata: Metadata = {
  title: "Red",
  description: "Relaciones de LedeLab con filiales, aliados y colaboraciones clave.",
}

export default function RedPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeader
        title="Red"
        description="Nuestra red se compone de filiales operativas, aliados estratégicos y colaboraciones que impulsan proyectos de innovación y sostenibilidad."
      />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/red/filiales"
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:border-gray-800 dark:bg-gray-900"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Filiales</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Empresas del grupo con operación directa en soluciones de materiales, construcción y más.
          </p>
        </Link>

        <Link
          href="/red/aliados"
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:border-gray-800 dark:bg-gray-900"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Aliados</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Organizaciones y profesionales con convenios activos en I+D, transferencia, cámaras y sostenibilidad.
          </p>
        </Link>

        <Link
          href="/red/proyectos"
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:border-gray-800 dark:bg-gray-900"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Proyectos</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Iniciativas y pilotos con nombre propio (aceleración, mentoría, impacto social, smart cities).
          </p>
        </Link>

        <Link
          href="/red/mentores"
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:border-gray-800 dark:bg-gray-900"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Mentores</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Consejo y red de expertos que aportan en I+D, sostenibilidad, negocios y educación.
          </p>
        </Link>

        <Link
          href="/red/startups"
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:border-gray-800 dark:bg-gray-900"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Startups</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Emprendimientos incubados, acelerados o co-creados con LedeLab en distintas etapas.
          </p>
        </Link>
      </div>
    </main>
  )
}
