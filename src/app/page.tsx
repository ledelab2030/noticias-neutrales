import Link from 'next/link'
import { noticias } from '@/data/noticias'
import { esHoy } from '@/utils/fecha'

export default function Home() {
  const noticiasHoy = noticias.filter(n => esHoy(n.fecha))

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Noticias Neutrales - {new Date().toISOString().slice(0, 10)}</h1>
      {noticiasHoy.length === 0 && <p>No hay noticias para hoy.</p>}
      {noticiasHoy.map((n) => (
        <article key={n.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            <Link href={`/noticias/${n.id}`} className="text-blue-700 dark:text-blue-400 underline">
              {n.titulo}
            </Link>
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{n.resumen}</p>
        </article>
      ))}
    </main>
  )
}
