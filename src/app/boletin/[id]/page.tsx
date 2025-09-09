// src/app/boletin/[id]/page.tsx
import fs from "fs";
import path from "path";
import { noticias as NOTICIAS, type NoticiaRaw } from "@/data/noticias";
import type { Metadata } from "next";

type NewsletterSnap = {
  tipo: "diario" | "semanal";
  fecha?: string;
  desde?: string;
  hasta?: string;
  total: number;
  ids: string[];
};

// Metadatos dinámicos + OG/Twitter estáticos
export async function generateMetadata(
  props: { params: Promise<{ id: string }> } // 👈 params como Promise en Next 15
): Promise<Metadata> {
  const { id } = await props.params; // 👈 await

  const filePath = path.join(process.cwd(), "public", "newsletters", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Boletín no encontrado – Noticias Neutrales",
      description: "La edición solicitada no existe.",
      openGraph: { images: ["/og-default.jpg"] },
      twitter: { images: ["/og-default.jpg"] },
    };
  }

  const snap: NewsletterSnap = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const titulo =
    snap.tipo === "diario"
      ? `Boletín diario – ${snap.fecha}`
      : `Boletín semanal – ${snap.desde} → ${snap.hasta}`;

  return {
    title: `${titulo} | Noticias Neutrales`,
    description: `Edición ${snap.tipo} con ${snap.total} noticias seleccionadas de actualidad.`,
    openGraph: {
      title: `${titulo} | Noticias Neutrales`,
      description: `Edición ${snap.tipo} con ${snap.total} noticias seleccionadas de actualidad.`,
      url: `https://www.ledelab.co/boletin/${id}`,
      siteName: "Noticias Neutrales",
      type: "article",
      images: ["/og-default.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titulo} | Noticias Neutrales`,
      description: `Edición ${snap.tipo} con ${snap.total} noticias seleccionadas de actualidad.`,
      images: ["/og-default.jpg"],
    },
  };
}

export default async function BoletinEdicionPage(
  props: { params: Promise<{ id: string }> } // 👈 params como Promise
) {
  const { id } = await props.params; // 👈 await

  const filePath = path.join(process.cwd(), "public", "newsletters", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return <div className="p-6">Edición no encontrada</div>;
  }

  const snap: NewsletterSnap = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Map por id con tipos estrictos
  const noticiasMap = new Map<string, NoticiaRaw>(
    (NOTICIAS as NoticiaRaw[]).map((n) => [n.id, n])
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-2">
        {snap.tipo === "diario"
          ? `Boletín diario – ${snap.fecha}`
          : `Boletín semanal – ${snap.desde} → ${snap.hasta}`}
      </h1>
      <p className="text-gray-600 mb-6">
        {snap.total} noticias en esta edición
      </p>

      <ul className="space-y-4">
        {snap.ids.map((nid) => {
          const noticia = noticiasMap.get(nid);
          if (!noticia) return null;

          const preview =
            noticia.resumen ??
            (Array.isArray(noticia.contenido) && noticia.contenido.length > 0
              ? noticia.contenido[0]
              : "");

          return (
            <li key={nid} className="p-4 border rounded-md shadow-sm">
              <a
                href={`/noticias/${encodeURIComponent(nid)}`}
                className="font-semibold text-blue-600 hover:underline"
              >
                {noticia.titulo}
              </a>
              {preview && (
                <p className="text-sm text-gray-600 mt-1">{preview}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
