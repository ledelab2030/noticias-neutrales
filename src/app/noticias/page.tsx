import Link from 'next/link'
import { noticias } from '@/data/noticias'
import { todayISO } from '@/utils/fecha'

export default function Noticias() {
  const hoy = todayISO()
  const anteriores = noticias
    .filter(n => n.fecha !== hoy)
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Más noticias</h1>

      {anteriores.length === 0 ? (
        <p>No hay más noticias por ahora.</p>
      ) : (
        <ul className="space-y-6">
          {anteriores.map(n => (
            <li key={n.id}>
              <Link
                href={`/noticias/${n.id}`}
                className="block rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 p-4"
              >
                <h2 className="text-lg font-semibold text-blue-700 hover:underline">
                  {n.titulo}
                </h2>
                <p className="text-sm text-gray-500">{n.fecha}</p>
                <p className="mt-2 text-gray-700">{n.resumen}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
