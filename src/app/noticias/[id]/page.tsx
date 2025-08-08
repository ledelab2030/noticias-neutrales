import { noticias } from '@/data/noticias'

export default function Noticia({ params }: { params: { id: string } }) {
  const n = noticias.find(x => x.id === params.id)
  if (!n) return <main className="p-6">Noticia no encontrada.</main>
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-2">{n.titulo}</h1>
      <p className="text-sm text-gray-600 mb-4">{n.fecha}</p>
      <article className="prose">{n.contenido}</article>
    </main>
  )
}
