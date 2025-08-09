// src/app/page.tsx
import { noticias } from '@/data/noticias'

export default function Home() {
  // más recientes primero
  const todas = [...noticias].sort((a, b) => b.fecha.localeCompare(a.fecha))

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Noticias Neutrales — {new Date().toISOString().slice(0, 10)}
      </h1>

      {todas.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No hay noticias por ahora.</p>
      ) : (
        <div className="space-y-10">
          {todas.map((n) => (
            <article key={n.id} className="border-b pb-6">
              <header className="mb-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {n.titulo}
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{n.fecha}</p>
              </header>

              <div className="prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:underline prose-a:text-blue-700 dark:prose-a:text-blue-400 space-y-4">
                {n.contenido.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: resaltarLinksLegibles(p) }} />
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

// ——— Utils ———
// 1) Si el párrafo ya trae <a ...>, lo dejamos tal cual.
// 2) Si hay URLs “crudas”, las convertimos a <a> con un texto legible:
//    - YouTube → "YouTube"
//    - Enlaces que terminen en .pdf → "documento (PDF)"
//    - Otros → "ver enlace"
function resaltarLinksLegibles(texto: string): string {
  if (/<a\s/i.test(texto)) return texto

  const urlRegex = /(https?:\/\/[^\s)]+)/g
  return texto.replace(urlRegex, (url) => {
    const u = url.toLowerCase()
    let label = 'ver enlace'
    if (u.includes('youtube.com') || u.includes('youtu.be')) label = 'YouTube'
    else if (u.endsWith('.pdf')) label = 'documento (PDF)'

    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
  })
}
