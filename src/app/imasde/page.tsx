// src/app/imasde/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"
import SubnavTabs from "@/components/SubnavTabs"

export const metadata: Metadata = {
  title: "I+DE SAS",
  description:
    "Diseño y desarrollo de aditivos y recubrimientos sostenibles. Filial de LedeLab.",
}

type Feature = { title: string; description: string }
type Product = { id: string; name: string; blurb: string; href: string }

const FEATURES: Feature[] = [
  {
    title: "I+D aplicada",
    description:
      "Desarrollo de soluciones químicas enfocadas en desempeño real y sostenibilidad.",
  },
  {
    title: "Acompañamiento técnico",
    description:
      "Soporte en planta y transferencia de conocimiento para clientes y aliados.",
  },
  {
    title: "Cadena responsable",
    description:
      "Selección de materias primas con enfoque en seguridad y ambiente.",
  },
]

const PRODUCTS: Product[] = [
  {
    id: "idebio-3",
    name: "IDEBIO‑3",
    blurb:
      "Aditivo sólido, incoloro e inodoro, soluble en agua para protección de madera frente a hongos e insectos.",
    href: "#contacto",
  },
  {
    id: "reve-boro",
    name: "Revelador de Boro",
    blurb:
      "Producto para verificar penetración y profundidad del boro en madera tratada.",
    href: "#contacto",
  },
  {
    id: "reve-cobre",
    name: "Revelador de Cobre",
    blurb:
      "Permite evaluar la difusión del cobre en madera tratada con preservantes a base de cobre.",
    href: "#contacto",
  },
]

export default function ImasdePage() {
  const tabs = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Productos", href: "#productos" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeader
        title="I+DE SAS"
        description="Diseño y desarrollo de aditivos y recubrimientos sostenibles."
        eyebrow="Filial de LedeLab"
      />
      <SubnavTabs items={tabs} className="mb-8" />

      {/* Nosotros */}
      <section id="nosotros" className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Nosotros
        </h2>
        <p className="mt-3 max-w-3xl text-gray-700 dark:text-gray-300">
          I+DE SAS investiga y formula soluciones para madera, construcción y
          cuidado de superficies, combinando desempeño técnico con criterios de
          salud y ambiente.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Productos
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {p.name}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{p.blurb}</p>
              <div className="mt-4">
                <Link
                  href={p.href}
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
          Escríbenos para fichas técnicas, pruebas o distribución.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            className="text-blue-700 dark:text-blue-300 hover:underline"
            href="mailto:contacto@imasde.co"
          >
            contacto@imasde.co
          </a>
          <span className="text-gray-400">•</span>
          <a
            className="text-blue-700 dark:text-blue-300 hover:underline"
            href="https://imasde.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            imasde.co
          </a>
        </div>
      </section>
    </main>
  )
}
