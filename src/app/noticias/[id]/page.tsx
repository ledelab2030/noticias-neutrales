import { notFound } from "next/navigation";
import { noticias } from "@/data/noticias";

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ Destructuramos después de resolver el Promise
  const n = noticias.find((x) => x.id === id);

  if (!n) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <header className="mb-3">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
          {n.titulo}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {n.fecha}
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:underline prose-a:text-blue-700 dark:prose-a:text-blue-400">
        {n.contenido.map((parrafo, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{
              __html: parrafo,
            }}
          />
        ))}
      </div>
    </article>
  );
}
