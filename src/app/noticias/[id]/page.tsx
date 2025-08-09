import { notFound } from "next/navigation";
import { noticias } from "@/data/noticias";

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const n = noticias.find((x) => x.id === id);

  if (!n) {
    notFound();
  }

  // Aseguramos que el contenido sea siempre un array de párrafos
  const parrafos: string[] = Array.isArray(n.contenido)
    ? n.contenido
    : (() => {
        const byParagraphs = n.contenido
          .split(/\r?\n\r?\n+/)
          .map((s) => s.trim())
          .filter(Boolean);
        if (byParagraphs.length > 1) return byParagraphs;
        const byLines = n.contenido
          .split(/\r?\n+/)
          .map((s) => s.trim())
          .filter(Boolean);
        return byLines.length ? byLines : [n.contenido];
      })();

  return (
    <article className="container mx-auto px-4 py-8">
      <header className="mb-3">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
          {n.titulo}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {n.fecha}
        </p>
        {n.pais && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {n.pais}
          </p>
        )}
        {n.etiquetas && n.etiquetas.length > 0 && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {n.etiquetas.join(", ")}
          </p>
        )}
      </header>

      <div className="prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:underline prose-a:text-blue-700 dark:prose-a:text-blue-400 space-y-4">
        {parrafos.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>

      {n.url_fuente && (
        <p className="mt-6">
          <a
            href={n.url_fuente}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Ver encuesta completa (PDF)
          </a>
        </p>
      )}
    </article>
  );
}
