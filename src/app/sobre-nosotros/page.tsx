// src/app/sobre-nosotros/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre nosotros | LedeLab',
  description:
    'Conoce la historia, misión y equipo de LedeLab, así como el propósito de nuestras iniciativas y redes.',
}

export default function SobreNosotrosPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* migas en minúsculas */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          inicio
        </Link>
        <span className="px-2">/</span>
        <span>sobre nosotros</span>
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        Sobre nosotros
      </h1>

      <div className="mt-6 space-y-4 leading-7 text-[17px] text-zinc-900 dark:text-zinc-100">
        <p>
          LedeLab es un ecosistema que integra ciencia, tecnología y
          sostenibilidad. Nuestro propósito es impulsar iniciativas que mejoren la calidad del acceso a la
          información, fortalezcan la toma de decisiones y aporten a la educación en sostenibilidad.
        </p>

        <p>
          El portal <strong>Noticias Neutrales</strong> es una de nuestras más recientes iniciativas. A través de él
          contribuimos a la educación para la sostenibilidad mediante la difusión y creación de contenidos con
          posiciones moderadas o neutralizadas, que minimizan el amarillismo y la polarización. Priorizamos hechos
          confirmados, claridad y neutralidad, alejándonos de titulares sensacionalistas.
        </p>

        <p>
          Además del portal, desarrollamos proyectos de análisis de datos, investigación aplicada, divulgación
          científica y formación en competencias digitales, fomentando la colaboración con aliados e investigadores
          que comparten nuestro compromiso con la calidad informativa.
        </p>

        <p>
          Con presencia en Colombia y Estonia, y un seguimiento que abarca también países como Estados Unidos,
          Canadá, Ecuador, Guatemala, Argentina, Perú, Panamá y Costa Rica, creemos que la diversidad de disciplinas
          y perspectivas es esencial para enfrentar los desafíos de la desinformación.
        </p>

        <p>
          Desde la tecnología, trabajamos en herramientas que faciliten la curaduría, clasificación y distribución
          de contenidos, apoyándonos en inteligencia artificial y metodologías de verificación.
        </p>
      </div>
    </main>
  )
}

