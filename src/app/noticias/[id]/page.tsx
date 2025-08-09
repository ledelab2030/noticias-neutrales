// src/app/noticias/[id]/page.tsx
import { noticias } from '@/data/noticias'
import { notFound } from 'next/navigation'

type Props = {
  params: { id: string }
}

export default function Noticia({ params }: Props) {
  const n = noticias.find((x) => x.id === params.id)
  if (!n) return notFound()

  const parrafos: string[] = Array.isArray(n.contenido)
    ? n.contenido
    : (() => {
        const byParagraphs = n.contenido.split(/\r?\n\r?\n+/).map(s => s.trim()).filter(Boolean)
        if (byParagraphs.length > 1) return byParagraphs
        const byLines = n.contenido.split(/\r?\n+/).map(s => s.trim()).filter(Boolean)
        return byLines.length ? byLines : [n.contenido]
      })()

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-3">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
          {n.titulo}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{n.fecha}</p>
      </header>

      {n.url_fuente && (
        <p className="mb-4">
          Fuente primaria:{' '}
          <a
            href={n.url_fuente}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 underline decoration-2 decoration-blue-500 dark:decoration-blue-400"
          >
            Ver documento
          </a>
        </p>
      )}

      <div className="prose dark:prose-invert max-w-none space-y-4 prose-a:underline prose-a:decoration-2 prose-a:decoration-blue-500 dark:prose-a:decoration-blue-400">
        {parrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </main>
  )
}
