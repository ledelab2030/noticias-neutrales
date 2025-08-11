// src/app/protemad/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"
import SubnavTabs from "@/components/SubnavTabs"

export const metadata: Metadata = {
  title: "Grupo Protemad",
  description:
    "Soluciones para protección, tratamiento y mejora de la madera. Filial de LedeLab.",
}

type Service = { title: string; description: string }
type CaseItem = { id: string; name: string; summary: string; href: string }

const SERVICES: Service[] = [
  {
    title: "Protección y preservación",
    description:
      "Especificación y suministro de sistemas de protección para distintos usos y climas.",
  },
  {
    title: "Asistencia en proyecto",
    description:
      "Diagnóstico, pruebas piloto y recomendaciones de aplicación en obra.",
  },
  {
    title: "Capacitación",
    description:
      "Entrenamiento a equipos técnicos y operativos en mejores prácticas.",
  },
]

const CASES: CaseItem[] = [
  {
    id: "deck-exterior",
    name: "Deck exterior — zona húmeda",
    summary:
      "Selección y preparación de madera, y esquema de mantenimiento anual.",
    href: "#contacto",
  },
  {
    id: "estructura-cubierta",
    name: "Estructura de cubierta",
    summary:
      "Tratamiento preventivo y control de insectos de ciclo larvario en madera estructural.",
    href: "#contacto",
  },
  {
    id: "mobiliario-urbano",
    name: "Mobiliario urbano",
    summary:
      "Acondicionamiento, sellos y acabado para alta exposición al sol y lluvia.",
    href: "#contacto",
  },
]

export default function ProtemadPage() {
  const tabs = [
    { label: "Servicios", href: "#servicios" },
    { label: "Casos", href: "#casos" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeader
        title="Grupo Protemad"
        description="Soluciones para protección, tratamiento y mejora de la madera."
        eyebrow="Filial de LedeLab"
      />
      <SubnavTabs items={tabs} className="mb-8" />

      {/* Servicios */}
      <section id="servicios" className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Servicios
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Casos */}
      <section id="casos" className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Casos
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {c.name}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {c.summary}
              </p>
              <div className="mt-4">
                <Link
                  href={c.href}
                  className="text-blue-700 dark:text-blue-300 hover:underline"
                >
                  Ver más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Contacto
        </h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          ¿Tienes un proyecto con madera? Conversemos.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            className="text-blue-700 dark:text-blue-300 hover:underline"
            href="mailto:info@grupoprotemad.com"
          >
            info@grupoprotemad.com
          </a>
          <span className="text-gray-400">•</span>
          <a
            className="text-blue-700 dark:text-blue-300 hover:underline"
            href="https://grupoprotemad.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            grupoprotemad.com
          </a>
        </div>
      </section>
    </main>
  )
}
