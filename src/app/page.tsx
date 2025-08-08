import { noticias, Noticia } from "@/data/noticias";

function filtrarNoticiasPorFecha(fecha: string, noticias: Noticia[]) {
  return noticias.filter((n) => n.fecha === fecha);
}

export default function Home() {
  const hoy = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  const noticiasHoy = filtrarNoticiasPorFecha(hoy, noticias);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Noticias Neutrales - {hoy}</h1>

      {noticiasHoy.length === 0 ? (
        <p>No hay noticias para hoy.</p>
      ) : (
        noticiasHoy.map(({ id, titulo, resumen, pais }) => (
          <article key={id} className="mb-6 border-b pb-4">
            <h2 className="text-xl font-semibold">{titulo}</h2>
            <p className="text-sm text-gray-600 mb-2">{pais}</p>
            <p>{resumen}</p>
          </article>
        ))
      )}
    </main>
  );
}
