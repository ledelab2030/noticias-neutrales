import Link from 'next/link'
import { noticias } from '@/data/noticias'
import { todayISO } from '@/utils/fecha'

export default function Home() {
  const hoy = todayISO()
  const deHoy = noticias.filter(n => n.fecha === hoy)

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 mb-4">
        Noticias Neutrales — {hoy}
      </h1>

      {deHoy.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No hay noticias de hoy.</p>
      ) : (
        <ul className="space-y-5">
          {deHoy.map(n => (
            <li key={n.id}>
              <Link
                href={`/noticias/${n.id}`}
                className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 p-5"
              >
                <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 hover:underline">
                  {n.titulo}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{n.fecha}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-200 leading-relaxed">{n.resumen}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
