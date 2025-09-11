//app/leonardo-de-la-hoz-borrego/page.tsx
import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import photo from "./leonardo-de-la-hoz-borrego.jpg"; // imagen en la misma carpeta

const img = photo as StaticImageData;

export const metadata: Metadata = {
  title: "Leonardo De la Hoz Borrego | LedeLab",
  description:
    "Perfil de Leonardo De la Hoz Borrego: fundador y líder de LedeLab, miembro del Comité de Educación del Consejo Colombiano de Construcción Sostenible (CCCS).",
  alternates: { canonical: "/leonardo-de-la-hoz-borrego" },
  metadataBase: new URL("https://ledelab.co"),
  openGraph: {
    title: "Leonardo De la Hoz Borrego | LedeLab",
    description:
      "Perfil de Leonardo De la Hoz Borrego: fundador y líder de LedeLab, miembro del Comité de Educación del CCCS.",
    url: "/leonardo-de-la-hoz-borrego",
    siteName: "LedeLab",
    type: "profile",
    images: [
      {
        url: img.src,
        width: img.width || 1200,
        height: img.height || 630,
        alt: "Leonardo De la Hoz Borrego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo De la Hoz Borrego | LedeLab",
    description:
      "Perfil de Leonardo De la Hoz Borrego: fundador y líder de LedeLab, miembro del Comité de Educación del CCCS.",
    images: [img.src],
  },
};

export default function Page() {
  const highlights = [
    "Fundador y líder de iniciativas de innovación en LedeLab Group",
    "Miembro del Comité de Educación del Consejo Colombiano de Construcción Sostenible (CCCS)",
    "Desarrollo de plataformas digitales: Noticias Neutrales, LedeLab.co y ecosistema de herramientas de IA",
    "Intereses: sostenibilidad aplicada, economía real, productos químicos para madera, datos y automatización",
  ];

  const tags = [
    "innovación",
    "sostenibilidad",
    "educación",
    "tecnología",
    "emprendimiento",
    "química aplicada",
    "construcción sostenible",
    "datos e IA",
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Encabezado */}
      <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-[220px,1fr]">
        <div className="flex justify-center md:justify-start">
          <div className="relative h-48 w-48 overflow-hidden rounded-2xl ring-1 ring-neutral-200 dark:ring-neutral-800">
            <Image
              src={photo}
              alt="Foto de Leonardo De la Hoz Borrego"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leonardo De la Hoz Borrego</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Fundador de LedeLab Group OÜ e I+DE SAS. Miembro del Comité de Educación del
            Consejo Colombiano de Construcción Sostenible (CCCS). Impulsa proyectos que
            integran ciencia aplicada, construcción sostenible y productos digitales.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <Link href="mailto:leonardo@ledelab.group" className="underline-offset-4 hover:underline">
              ✉️ leonardo@ledelab.group
            </Link>
            <span className="hidden h-4 w-px bg-neutral-300 md:inline-block dark:bg-neutral-700" />
            <Link href="https://ledelab.co" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              🌐 ledelab.co ↗
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:text-neutral-200">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {highlights.map((h) => (
          <div key={h} className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
            <p className="text-sm font-medium">{h}</p>
          </div>
        ))}
      </section>

      {/* Bio / trayectoria */}
      <section className="mt-10">
        <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="text-lg font-semibold">Trayectoria</h2>
          <div className="mt-3 space-y-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            <p>
              Leonardo lidera LedeLab como plataforma de innovación que conecta
              investigación, desarrollo de productos y soluciones digitales. Desde el
              Caribe colombiano, articula equipos y aliados para crear herramientas que
              resuelven problemas reales en industria, logística y medios.
            </p>
            <p>
              En el ámbito de la construcción sostenible, participa en el Comité de Educación
              del CCCS, promoviendo estándares, formación continua y articulación regional.
              Su enfoque combina sostenibilidad aplicada (materiales, procesos) con adopción
              de tecnologías emergentes (datos, IA) para acelerar la transición del sector.
            </p>
            <p>
              En química aplicada a la madera, ha impulsado el desarrollo y la transferencia
              de formulaciones (p. ej., sistemas base cobre y oxina) y prácticas seguras
              orientadas a desempeño y trazabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos clave */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Proyectos y frentes</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
            <h3 className="font-semibold">LedeLab.co</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Hub corporativo de innovación: portafolio, contenidos y experimentos con IA.
            </p>
            <Link href="https://ledelab.co" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm underline-offset-4 hover:underline">
              Visitar ↗
            </Link>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
            <h3 className="font-semibold">Noticias Neutrales</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Medio digital con enfoque en hechos verificados, estilo neutral y datos.
            </p>
            <Link href="https://noticias-neutrales.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm underline-offset-4 hover:underline">
              Ver edición más reciente ↗
            </Link>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
            <h3 className="font-semibold">I+DE SAS (Industria / Química aplicada)</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Desarrollo y comercialización de preservantes y soluciones para madera.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
            <h3 className="font-semibold">CCCS — Educación</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Participación en el Comité de Educación del Consejo Colombiano de
              Construcción Sostenible; impulso a programas de formación y eventos
              regionales.
            </p>
          </div>
        </div>
      </section>

      {/* Cronología breve */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Cronología breve</h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <span className="font-medium">2025–actualidad:</span> Consolidación del
            ecosistema LedeLab (medios, I+D, automatización).
          </li>
          <li>
            <span className="font-medium">2023–2024:</span> Expansión de portafolio en
            química aplicada y desarrollo de herramientas digitales internas.
          </li>
          <li>
            <span className="font-medium">Años previos:</span> Gestión de proyectos y
            plataformas de contenido, con foco en sostenibilidad y datos.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-neutral-200 p-6 md:flex-row md:items-center dark:border-neutral-800">
          <div>
            <h3 className="text-lg font-semibold">¿Colaboremos?</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Si deseas orientación para incrementar tu independencia profesional, mejorar tu estilo de vida y salud, conversemos.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="mailto:leonardo@ledelab.group"
              className="rounded-2xl border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Escribir a Leonardo
            </Link>
            <Link
              href="https://calendly.com/ledelab"
              className="rounded-2xl bg-black px-4 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-black"
            >
              Agenda un espacio ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Datos estructurados JSON-LD (ProfilePage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Leonardo De la Hoz Borrego",
            url: "https://ledelab.co/leonardo-de-la-hoz-borrego",
            image: new URL(img.src, "https://ledelab.co").toString(),
            affiliation: [
              { "@type": "Organization", name: "LedeLab Group OÜ", url: "https://ledelab.co" },
              { "@type": "Organization", name: "I+DE SAS" },
              {
                "@type": "Organization",
                name: "Consejo Colombiano de Construcción Sostenible (CCCS)",
                url: "https://www.cccs.org.co/",
                memberOf: { "@type": "Organization", name: "WorldGBC" },
              },
            ],
            mainEntity: { "@type": "Person", name: "Leonardo De la Hoz Borrego", email: "mailto:leonardo@ledelab.group" },
          }),
        }}
      />
    </main>
  );
}
