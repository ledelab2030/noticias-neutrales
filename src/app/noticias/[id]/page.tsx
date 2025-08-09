// src/app/noticias/[id]/page.tsx
import { noticias } from '@/data/noticias'
import { notFound } from 'next/navigation'

type Props = {
  params: { id: string }
}

export default function Noticia({ params }: Props) {
  const n = noticias.find((x) => x.id === params.id)
  if (!n) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <header className="mb-3">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
          {n.titulo}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{n.fecha}</p>
      </header>

      <div className="prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:underline prose-a:decoration-2 prose-a:decoration-blue-500 dark:prose-a:decoration-blue-400">
        {n.contenido.map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}
      </div>
    </article>
  )
}
