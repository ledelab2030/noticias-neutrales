import Link from 'next/link'
import { noticias } from '@/data/noticias'
import { notFound } from 'next/navigation'

// (Next 15) params es Promise: hacemos la página async y hacemos await.
export default async function Noticia(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const n = noticias.find(x => x.id === id)
  if (!n) return notFound()

  return (
    <main className="max-w-3xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        <Link href="/" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/noticias" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300">
          Más noticias
        </Link>
      </nav>

      {/* Encabezado */}
      <header className="mb-3">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
          {n.titulo}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{n.fecha}</p>
      </header>

      {/* Tarjeta de contenido */}
      <article className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm p-6">
        {/* Si más adelante usas Markdown/MDX, la clase `prose` mejora tipografía automáticamente */

