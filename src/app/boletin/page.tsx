// src/app/boletin/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";

type NewsletterSnap = {
  tipo: "diario" | "semanal";
  fecha?: string;
  desde?: string;
  hasta?: string;
  total: number;
  ids: string[];
};

export default async function BoletinPage() {
  const dir = path.join(process.cwd(), "public", "newsletters");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));

  const items = files
    .map((file) => {
      const content = fs.readFileSync(path.join(dir, file), "utf8");
      const snap: NewsletterSnap = JSON.parse(content);
      const base = file.replace(".json", "");
      return { file, base, snap };
    })
    .sort((a, b) => b.base.localeCompare(a.base)); // más recientes primero

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Ediciones del boletín</h1>
      <ul className="space-y-4">
        {items.map(({ base, snap }) => (
          <li key={base} className="p-4 border rounded-md shadow-sm">
            <div className="font-semibold">
              {snap.tipo === "diario"
                ? `Diario ${snap.fecha}`
                : `Semanal ${snap.desde} → ${snap.hasta}`}
            </div>
            <div className="text-sm text-gray-600">{snap.total} noticias</div>
            <Link
              href={`/boletin/${base}`}
              className="text-blue-600 hover:underline text-sm"
            >
              Ver edición completa →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
