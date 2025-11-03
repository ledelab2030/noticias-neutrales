// src/app/ledelab-group-ou/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LedeLab Group OÜ | LedeLab',
  description:
    'Página institucional de LedeLab Group OÜ: historia, divisiones y marco europeo. Empresa matriz del ecosistema LedeLab, registrada en Estonia (Tallinn).',
  openGraph: {
    title: 'LedeLab Group OÜ | LedeLab',
    description:
      'Empresa matriz del ecosistema LedeLab, con sede en Tallinn (Estonia). Conoce su historia, divisiones y compromisos.',
    type: 'website',
    url: 'https://ledelab.co/ledelab-group-ou',
  },
}

export default function LedeLabGroupOUPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* migas */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          inicio
        </Link>
        <span className="px-2">/</span>
        <span>ledelab group oü</span>
      </div>

      <header className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          LedeLab Group OÜ
        </h1>
        <p className="mt-2 max-w-3xl text-[17px] leading-7 text-zinc-900 dark:text-zinc-100">
          LedeLab Group OÜ es la empresa matriz del ecosistema LedeLab. Registrada en Estonia y con sede en
          Tallinn, combina consultoría estratégica, investigación aplicada y el desarrollo de plataformas de
          comunicación científica y educativa. Su actividad se orienta a sostenibilidad industrial, tecnología
          educativa y divulgación basada en evidencia.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_320px]">
        {/* contenido principal */}
        <div className="space-y-8 text-[17px] leading-7 text-zinc-900 dark:text-zinc-100">
          {/* Historia */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
              Historia
            </h2>
            <p>
              La compañía fue constituida el 25 de junio de 2018 en Estonia. Su origen se vincula a iniciativas
              previas en preservación de materiales y transferencia de conocimiento técnico, que más tarde se
              articularon en un portafolio integrado de consultoría, investigación aplicada y comunicación científica.
            </p>
          </section>

          {/* Actividades */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
              Actividades
            </h2>
            <p>
              LedeLab coordina proyectos de innovación, comunicación científica y tecnología educativa. Mantiene un
              portafolio de marcas y unidades operativas orientadas a soluciones técnicas y divulgación, e impulsa
              iniciativas de alfabetización científica y digital con apoyo de herramientas de inteligencia artificial
              y tecnologías abiertas.
            </p>
          </section>

          {/* Divisiones */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
              Divisiones
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">LedeLab Science & Industry</h3>
                <p>
                  Investigación aplicada y transferencia de conocimiento técnico en preservación de materiales y
                  sostenibilidad (por ejemplo, soluciones basadas en cobre como ACQ-D y formulaciones propietarias
                  orientadas a desempeño y seguridad de uso).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">LedeLab Digital & Media</h3>
                <p>
                  Producción de contenidos y plataformas de comunicación científica y cultural. Entre sus proyectos se
                  encuentra el portal <Link href="/" className="underline underline-offset-4">Noticias Neutrales</Link>,
                  orientado a la verificación y al tratamiento neutral de la información.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">LedeLab Education</h3>
                <p>
                  Programas y colaboraciones para tecnología educativa, aprendizaje asistido por IA y educación abierta,
                  con vínculos académicos al ecosistema universitario de Estonia.
                </p>
              </div>
            </div>
          </section>

          {/* Marco europeo */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
              Marco europeo
            </h2>
            <p>
              Como sociedad registrada en Estonia, Estado miembro de la Unión Europea, LedeLab Group OÜ opera bajo las
              directivas comunitarias aplicables a comercio digital, protección de datos (GDPR) y administración
              electrónica. Estonia promueve la gestión digital de empresas a través del programa estatal de e‑Residency.
            </p>
          </section>

          {/* Enlaces y contacto */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
              Enlaces y contacto
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Registro mercantil (e‑Business Register):{' '}
                <a
                  href="https://ariregister.rik.ee/eng/company/14513358/LedeLab-Group-OU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  14513358 — LedeLab Group OÜ
                </a>
              </li>
              <li>
                Programa estatal{' '}
                <a
                  href="https://e-resident.gov.ee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  e‑Residency of Estonia
                </a>
              </li>
              <li>
                Ecosistema académico de referencia:{' '}
                <a
                  href="https://ut.ee/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  University of Tartu
                </a>
              </li>
              <li>
                Sitio corporativo: <Link href="/" className="underline underline-offset-4">ledelab.co</Link>
              </li>
            </ul>
          </section>
        </div>

        {/* infobox lateral */}
        <aside className="h-max rounded-2xl border border-zinc-200 bg-white p-5 text-[15px] shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-3 text-lg font-semibold">Ficha corporativa</h2>
          <dl className="space-y-2">
            <div className="flex justify-between gap-4"><dt className="text-zinc-500">Tipo</dt><dd className="text-right">Sociedad de responsabilidad limitada</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-zinc-500">Industria</dt><dd className="text-right">Consultoría en innovación; comunicación científica; tecnología educativa</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-zinc-500">Fundador</dt><dd className="text-right">Leonardo Javier De la Hoz Borrego</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-zinc-500">Sede central</dt><dd className="text-right">Tallinn, Estonia</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-zinc-500">Sitio web</dt><dd className="text-right"><Link href="/" className="underline underline-offset-4">ledelab.co</Link></dd></div>
            <div className="flex justify-between gap-4"><dt className="text-zinc-500">Lema</dt><dd className="text-right">Laboratorio de ideas para un futuro sostenible</dd></div>
          </dl>
          <div className="mt-4 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-800">
            Esta página mantiene un estilo informativo y neutral. Para el detalle jurídico, consulte los enlaces
            oficiales.
          </div>
        </aside>
      </div>

      {/* navegación secundaria */}
      <nav className="mt-10 text-sm">
        <ul className="flex flex-wrap items-center gap-3 text-muted-foreground">
          <li>
            <Link href="/sobre-nosotros" className="underline-offset-4 hover:underline">
              sobre nosotros
            </Link>
          </li>
          <li>·</li>
          <li>
            <Link href="/flex84" className="underline-offset-4 hover:underline">
              flex84
            </Link>
          </li>
          <li>·</li>
          <li>
            <Link href="/actualidad" className="underline-offset-4 hover:underline">
              actualidad
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
