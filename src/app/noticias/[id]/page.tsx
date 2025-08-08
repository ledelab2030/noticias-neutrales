import { noticias } from '@/data/noticias'

export default async function Noticia(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const n = noticias.find(x => x.id === id)

  if (!n) {
    return <main className="p-6">Noticia no encontrada.</main>
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-2">{n.titulo}</h1>
      <p className="text-sm text-gray-600 mb-4">{n.fecha}</p>
      <article className="prose">{n.contenido}</article>
    </main>
  )
}
