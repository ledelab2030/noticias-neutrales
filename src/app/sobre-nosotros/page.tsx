// src/app/sobre-nosotros/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sobre nosotros | LedeLab',
  description:
    'Conoce la historia, misión y equipo de LedeLab, así como el propósito de nuestras iniciativas y redes.',
}

export default function SobreNosotrosPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* migas */}
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
          LedeLab es un ecosistema que integra ciencia, tecnología y sostenibilidad. Nuestro propósito es impulsar
          iniciativas que mejoren la calidad del acceso a la información, fortalezcan la toma de decisiones y
          aporten a la educación en sostenibilidad.
        </p>

        <p>
          El portal <strong>Noticias Neutrales</strong> es una de nuestras iniciativas más recientes. A través de él,
          contribuimos a la educación para la sostenibilidad mediante la difusión y creación de contenidos con
          posiciones moderadas o neutralizadas que minimizan el amarillismo y la polarización. Priorizamos hechos
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

      {/* Nuestro editor */}
      <section className="mt-12 clear-both">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Nuestro editor
        </h2>

        <div className="mt-6 space-y-4 leading-7 text-[17px] text-zinc-900 dark:text-zinc-100">
          <Image
            src="/noticias/editor-leonardo.jpg"
            alt="Leonardo de la Hoz Borrego"
            width={220}
            height={220}
            className="rounded-xl shadow-md mb-4 mx-auto block md:float-left md:mr-6 md:mb-4"
          />

          <p>
            <strong>Leonardo de la Hoz Borrego</strong> es el editor de Noticias Neutrales. Emprendedor y consultor
            con más de 25 años de experiencia en sostenibilidad, ciencia aplicada a la industria y comunicación
            estratégica.
          </p>

          <p>
            Leonardo es cofundador de{' '}
            <a
              href="https://www.grupoprotemad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline"
            >
              Grupo Protemad
            </a>{' '}
            y de LedeLab Group OÜ, así como de{' '}
            <a
              href="https://www.imasde.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline"
            >
              I+DE S.A.S.
            </a>
            , entre otras empresas dedicadas a la investigación y desarrollo de soluciones sostenibles para alargar
            la vida útil de los materiales mediante su protección frente a agentes que los deterioran estructural y
            estéticamente.
          </p>

          <p>
            Hace algunos años entendió que, para llevar sus iniciativas a otro nivel, debía prepararse y que una de
            las vías más poderosas para avanzar era fomentar la educación con tecnología en campos como la salud y la
            sostenibilidad, empoderando a las personas para que se conviertan en dueñas de su{' '}
            <em>aprendizaje a lo largo de la vida</em> (<em>lifelong learning</em>).
          </p>

          <p>
            Más recientemente, comprendió también el valor de promover un medio de comunicación donde compartir
            contenidos propios y de diversas voces para impulsar el aprendizaje a través del análisis y la discusión
            serena. El objetivo es construir visiones de vida desde lo que nos une, en lugar de polarizar. Estos
            propósitos son relevantes en todo el mundo y, de manera particular, en Colombia y Latinoamérica, área
            principal de influencia de nuestra edición.
          </p>

          <p>
            Conoce más sobre su trayectoria profesional en{' '}
            <a
              href="http://www.linkedin.com/in/leonardodelahoz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
