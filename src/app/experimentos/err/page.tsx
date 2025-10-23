// app/experimentos/err/page.tsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

// ————————————————————————————————————————————————
// Tipos (basados en tu codnnv1)
// ————————————————————————————————————————————————
interface Fuente {
  nombre: string;
  url?: string;
}

interface NoticiaRaw {
  id: string;
  fecha: string; // YYYY-MM-DD
  titulo: string;
  pais?: string;
  resumen?: string;
  contenido?: string[];
  etiquetas?: string[];
  fuente?: Fuente | { nombre: string; url?: string };
  url_fuente?: string;
  consecutivo_unico?: string;
  video?: string;
  credito_video?: string;
  credito_imagen?: string;
  imagen?: string;
  imagen_portada?: string;
  idioma_original?: "es" | "en" | "de";
  traducciones?: {
    es?: string;
    en?: string;
    de?: string;
  };
}

interface NoticiaView {
  id: string;
  fecha: string;
  titulo: string;
  pais?: string;
  resumen?: string;
  contenido?: string[];
  etiquetas?: string[];
  fuente?: Fuente;
  url_fuente?: string;
  video?: string;
  credito_video?: string;
  imagen?: string; // portada elegida
  credito_imagen?: string;
}

// ————————————————————————————————————————————————
// Carga de datos desde src/data/noticias.ts (tolerante a default o named export)
// ————————————————————————————————————————————————
import * as DATA from "@/data/noticias";

const RAW: NoticiaRaw[] =
  ((DATA as unknown as { default?: NoticiaRaw[] }).default ??
    (DATA as unknown as { noticias?: NoticiaRaw[] }).noticias ??
    (DATA as unknown as { NEWS?: NoticiaRaw[] }).NEWS ??
    []).filter(Boolean);

// ————————————————————————————————————————————————
// Utilidades
// ————————————————————————————————————————————————
const FLAG: Record<string, string> = {
  Colombia: "🇨🇴",
  Estonia: "🇪🇪",
  "Estados Unidos": "🇺🇸",
};

function parseDate(iso: string): number {
  const d = new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime()) ? 0 : d.getTime();
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

function normalizeFuente(
  f?: Fuente | { nombre: string; url?: string }
): Fuente | undefined {
  if (!f) return undefined;
  return { nombre: (f as Fuente).nombre, url: (f as Fuente).url };
}

function toView(n: NoticiaRaw): NoticiaView {
  const portada = n.imagen_portada ?? n.imagen;
  const fuente = normalizeFuente(n.fuente);
  return {
    id: n.id,
    fecha: n.fecha,
    titulo: n.titulo,
    pais: n.pais,
    resumen: n.resumen,
    contenido: n.contenido,
    etiquetas: n.etiquetas,
    fuente,
    url_fuente: n.url_fuente ?? fuente?.url,
    video: n.video,
    credito_video: n.credito_video,
    imagen: portada,
    credito_imagen: n.credito_imagen,
  };
}

// Toma las 12 más recientes por fecha
const NEWS: NoticiaView[] = RAW.slice()
  .sort((a, b) => parseDate(b.fecha) - parseDate(a.fecha))
  .map(toView)
  .slice(0, 12);

// ————————————————————————————————————————————————
// Componentes UI
// ————————————————————————————————————————————————
function SourceBadge({ fuente, pais }: { fuente?: Fuente; pais?: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
      <span className="inline-flex items-center rounded bg-zinc-100 px-2 py-1 text-xs font-semibold dark:bg-zinc-800">
        {fuente?.nombre ?? "Fuente"}
      </span>
      {pais && (
        <span className="ml-1">
          {FLAG[pais] ?? ""} {pais}
        </span>
      )}
    </div>
  );
}

function Hero({ n }: { n: NoticiaView }) {
  const credit = n.credito_imagen ?? n.credito_video;
  const hasVideo = Boolean(n.video);

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-zinc-50 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
      {hasVideo ? (
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={n.video}
            title={n.titulo}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : n.imagen ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={n.imagen} alt={n.titulo} className="h-auto w-full" />
      ) : null}

      {credit && (
        <div className="border-t border-zinc-200 px-3 py-2 text-right text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          {credit}
        </div>
      )}
    </div>
  );
}

// ————————————————————————————————————————————————
// Página
// ————————————————————————————————————————————————
export default function ERRStyleReaderPage() {
  const safeNews = NEWS.length > 0 ? NEWS : [];
  const [activeId, setActiveId] = useState<string>(safeNews[0]?.id ?? "");

  const active = useMemo(
    () => safeNews.find((x) => x.id === activeId) ?? safeNews[0],
    [activeId, safeNews]
  );
  const rest = useMemo(
    () => safeNews.filter((x) => x.id !== active?.id),
    [active?.id, safeNews]
  );

  if (!active) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-2 text-2xl font-bold">No hay noticias para mostrar</h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          Verifica el export en <code>src/data/noticias.ts</code>. Aceptamos{" "}
          <code>export default</code> o <code>export const noticias = []</code>.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-12">
      {/* Columna principal */}
      <section className="md:col-span-8">
        <div className="mt-2 mb-3 text-xs font-semibold tracking-wider text-blue-700 dark:text-blue-400">
          A EUROPEAN-STYLE PERSPECTIVE
        </div>

        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <SourceBadge fuente={active.fuente} pais={active.pais} />
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            {formatDate(active.fecha)}
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-serif font-bold leading-snug text-zinc-900 dark:text-zinc-100">
          {active.titulo}
        </h1>

        <div className="mb-6">
          <Hero n={active} />
        </div>

        {active.resumen && (
          <p className="mt-4 text-base md:text-lg text-zinc-700/90 dark:text-zinc-200/90">
            {active.resumen}
          </p>
        )}

        {/* Contenido con 3 párrafos iniciales + “Leer más” */}
        <div className="mt-4 space-y-4 text-zinc-800 dark:text-zinc-100">
          {(active.contenido ?? []).slice(0, 3).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {active.contenido && active.contenido.length > 3 && (
            <details>
              <summary className="cursor-pointer select-none text-sm font-medium text-blue-700 hover:underline dark:text-blue-400">
                Leer más
              </summary>
              <div className="mt-3 space-y-4">
                {active.contenido.slice(3).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>
          )}
        </div>

        {(active.fuente?.url || active.url_fuente) && (
          <>
            <div className="mt-6 border-t border-zinc-200 dark:border-zinc-800" />
            <div className="mt-4 flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              <span>
                Fuente: <strong>{active.fuente?.nombre ?? "—"}</strong>
              </span>
              <a
                href={active.fuente?.url ?? active.url_fuente}
                className="rounded-lg px-3 py-1 font-medium text-blue-700 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noreferrer noopener"
              >
                Ver artículo original ↗
              </a>
            </div>
          </>
        )}
      </section>

      {/* Lateral con más historias (sticky + scroll) */}
      <aside className="md:col-span-4">
        <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-auto pr-1">
          <div className="mb-3 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
            Más historias
          </div>
          <div className="flex flex-col gap-4">
            {rest.map((n) => (
              <motion.button
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                key={n.id}
                onClick={() => setActiveId(n.id)}
                className="group overflow-hidden rounded-2xl border border-zinc-200 text-left shadow-sm focus:outline-none dark:border-zinc-800"
              >
                {n.imagen && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={n.imagen}
                    alt={n.titulo}
                    className="h-40 w-full object-cover"
                  />
                )}
                <div className="space-y-1 p-3">
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span>
                      {FLAG[n.pais ?? ""] ?? ""} {n.pais}
                    </span>
                    <span>{formatDate(n.fecha)}</span>
                  </div>
                  <h3 className="line-clamp-2 text-base font-semibold text-zinc-900 group-hover:text-blue-700 dark:text-zinc-100 dark:group-hover:text-blue-400">
                    {n.titulo}
                  </h3>
                  {n.resumen && (
                    <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">
                      {n.resumen}
                    </p>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
