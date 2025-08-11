// src/app/estilo-de-vida/page.tsx
import Link from "next/link"
import { estiloDeVida } from "@/data/estilo-de-vida"
import type { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"

export const metadata: Metadata = {
  title: "Estilo de vida",
  description: "Hábitos saludables, sostenibilidad y bienestar práctico.",
}

function fmt(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("es-CO", { year: "numeric", month: "short", day: "2-digit" })
  } catch {
    return iso
  }
}

export default function EstiloDeVidaPage() {
  const items = [...estiloDeVida].sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
  const [hero, ...rest] = items

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <SectionHeader
        title="Estilo de vida"
        subtitle="Hábitos saludables, sostenibilidad y bienestar práctico. Contenido verificado, sin sensacionalismo."
        // Si quieres sub‑secciones, descomenta y ajusta:
        // tabs={[
        //   { label: "Todo", href: "/estilo-de-vida", isActive: true },
        //   { label: "Nutrición", href: "/estilo-de-vida?cat=nutricion" },
        //   { label: "Bienestar", href: "/estilo-de-vida?cat=bienestar" },
        //   { label: "Sueño", href: "/estilo-de-vida?cat=sueno" },
        // ]}
      />

      {hero && (
        <article className="mb-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center rounded-full border px-2 py-0.5 dark:border-gray-700">Destacado</span>
            <time>{fmt(hero.fecha)}</time>
          </div>
          <h2 className="mt-2 text-2xl font-semibold leading-snug text-gray-900 dark:text-white">
            <Link href={`/estilo-de-vida/${hero.id}`} className="hover:text-blue-700 dark:hover:text-blue-300">
              {hero.titulo}
            </Link>
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{hero.resumen}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {hero.temas?.map((t: string) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
          {hero.fuente?.nombre && (
            <div className="mt-4 text-sm">
              <a
                href={hero.fuente.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 hover:underline dark:text-blue-300"
              >
                Fuente: {hero.fuente.nombre}
              </a>
            </div>
          )}
        </article>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {rest.map((n) => (
          <article
            key={n.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <time>{fmt(n.fecha)}</time>
              {n.fuente?.nombre && <span className="truncate">{n.fuente.nombre}</span>}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              <Link href={`/estilo-de-vida/${n.id}`} className="hover:text-blue-700 dark:hover:text-blue-300">
                {n.titulo}
              </Link>
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{n.resumen}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {n.temas?.map((t: string) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href={`/estilo-de-vida/${n.id}`}
                className="inline-flex items-center gap-2 text-blue-700 hover:underline dark:text-blue-300"
              >
                Leer más
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
