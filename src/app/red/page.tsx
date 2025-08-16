// src/app/red/page.tsx
import Link from "next/link"
import type { ComponentType, SVGProps } from "react"
import { Building2, Users, Share2 } from "lucide-react"

type IconProps = SVGProps<SVGSVGElement>

type Card = {
  title: string
  href: string
  description: string
  Icon: ComponentType<IconProps>
}

const CARDS: Card[] = [
  {
    title: "Filiales",
    href: "/filiales",
    description:
      "Empresas del grupo con operación directa en soluciones de materiales, construcción y sostenibilidad.",
    Icon: Building2,
  },
  {
    title: "Red",
    href: "/red",
    description:
      "Personas y organizaciones que colaboran con LedeLab en proyectos y conocimiento aplicado.",
    Icon: Users,
  },
  {
    title: "Aliados",
    href: "/aliados",
    description:
      "Instituciones y empresas con convenios y proyectos conjuntos.",
    Icon: Share2,
  },
]

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Nuestra red</h1>
        <p className="mt-2 text-sm text-gray-600">
          Conoce a las organizaciones y personas que hacen parte del ecosistema
          LedeLab.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ title, href, description, Icon }) => (
          <Link
            key={href}
            href={href}
            className="rounded-2xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <div className="flex items-start gap-4">
              <span className="rounded-xl border border-gray-200 p-2">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
