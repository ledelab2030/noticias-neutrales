// src/app/page.tsx
import Link from 'next/link'
import { noticias } from '@/data/noticias'
import { esHoy } from '@/utils/fecha'

export default function Home() {
  const noticiasHoy = noticias.filter(n => esHoy(n.fecha))

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Noticias Neutrales - {new Date().toISOString().split('T')[0]}</h1>
      {noticiasHoy.length === 0 ? (
        <p>No hay noticias para hoy.</p>
      ) : (
        <div className="space-y-8">
          {noticiasHoy.map((n) => (
            <article key={n.id} className="border-b pb-4">
              <header>
                <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                  <Link href={`/noticias/${n.id}`}>{n.titulo}</Link>
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{n.fecha}</p>
              </header>
              <p className="mt-2">{n.resumen}</p>
              <div className="mt-4 prose dark:prose-invert max-w-none prose-a:underline prose-a:decoration-2 prose-a:decoration-blue-500 dark:prose-a:decoration-blue-400">
                <Link href={`/noticias/${n.id}`} className="text-blue-700 dark:text-blue-400">
                  Leer más
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
