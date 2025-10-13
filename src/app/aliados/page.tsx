// /app/red/aliados/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Aliados | LedeLab Group OÜ",
  description:
    "Red de aliados estratégicos de LedeLab Group OÜ: innovación, sostenibilidad, educación, diseño y visualización 3D.",
}

export default function Page() {
  const aliados = [
    {
      nombre: "LedeLab Group OÜ",
      href: "https://www.ledelab.co/ledelab",
      descripcion:
        "Ecosistema emprendedor con sede en Estonia que integra innovación, sostenibilidad y educación aplicada. Promueve proyectos globales en desarrollo tecnológico, materiales sostenibles y educación digital.",
      color: "from-teal-400 to-blue-500",
    },
    {
      nombre: "I+DE S.A.S.",
      href: "https://imasde.co",
      descripcion:
        "Investigación, desarrollo y educación aplicada a la innovación sostenible.",
      color: "from-sky-400 to-blue-500",
    },
    {
      nombre: "Protemad Colombia S.A.S.",
      href: "https://www.grupoprotemad.com",
      descripcion:
        "Fabricante colombiano de preservantes para protección de la madera, soluciones químicas sostenibles y transferencia tecnológica.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      nombre: "Noticias Neutrales",
      href: "https://ledelab.co/noticias-neutrales",
      descripcion:
        "Portal informativo con enfoque educativo, ambiental y social, sin sesgos ideológicos.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      nombre: "Flex 84",
      href: "https://ledelab.co/flex84",
      descripcion:
        "Espacio de experimentación y prototipado para diseño, arte y materiales sostenibles.",
      color: "from-pink-500 to-rose-400",
    },
    {
      nombre: "Instituto Javier",
      href: "https://ledelab.co/javier",
      descripcion:
        "Iniciativa educativa enfocada en el aprendizaje autodirigido y tecnologías educativas.",
      color: "from-indigo-400 to-violet-500",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <header className="mb-10 md:mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Aliados estratégicos
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Nuestra red de aliados impulsa proyectos de innovación, sostenibilidad,
            educación y diseño. Cada colaboración fortalece el ecosistema LedeLab.
          </p>
        </header>

        {/* ⭐ Colaboración destacada G3D.co */}
        <section aria-labelledby="g3d-heading" className="mb-10">
          <h2 id="g3d-heading" className="sr-only">Colaboración destacada</h2>

          <Link
            href="/g3d"
            className="group block rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111] p-6 transition-colors hover:border-teal-400"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-teal-400 to-blue-500" />
              <h3 className="text-lg font-semibold group-hover:text-teal-400 transition-colors">
                G3D.co — Renderización y Modelado 3D
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-400 text-sm leading-snug">
              Portafolio de visualización arquitectónica liderado por <strong>Guillermo De la Hoz</strong>.
              Renders de interiores y exteriores, modelado desde planos y recorridos virtuales.
            </p>

            <span className="inline-block mt-3 text-xs text-teal-500 group-hover:underline">
              Ver portafolio →
            </span>
          </Link>
        </section>

        {/* 🔸 Grid general de aliados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aliados.map((a) => (
            <a
              key={a.nombre}
              href={a.href}
              target={a.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group block border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-gray-50 dark:bg-[#111] hover:border-teal-400 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-md bg-gradient-to-br ${a.color}`} />
                <h3 className="text-lg font-semibold group-hover:text-teal-400 transition-colors">
                  {a.nombre}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-snug">
                {a.descripcion}
              </p>
              <span className="inline-block mt-3 text-xs text-teal-500 group-hover:underline">
                {a.href.startsWith("http") ? "Visitar sitio →" : "Ver detalles →"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
