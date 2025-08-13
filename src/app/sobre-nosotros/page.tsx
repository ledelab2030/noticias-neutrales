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
          LedeLab es un proyecto creado con el propósito de impulsar un espacio informativo que priorice la
          veracidad y la neutralidad, alejándose de los titulares sensacionalistas y enfocándose en hechos
          confirmados. Nuestro trabajo combina experiencia en comunicación, análisis de datos y tecnología.
        </p>

        <p>
          Nacimos con la visión de construir un entorno digital donde las personas puedan acceder a
          información confiable y filtrada, cubriendo tanto noticias de interés global como de los países
          priorizados en nuestro seguimiento: Colombia, Estados Unidos, Canadá, Estonia, Ecuador, Guatemala,
          Argentina, Perú, Panamá, Costa Rica, entre otros. También surgió en parte para contribuir con la
          educación en sostenibilidad, en el sentido de que la desinformación es una de las grandes barreras
          para tomar decisiones que vayan a favor de la sostenibilidad.
        </p>

        <p>
          Además de la producción de contenidos, fomentamos la colaboración con aliados, investigadores y
          organizaciones que compartan nuestro compromiso con la calidad informativa.
        </p>

        <p>
          Nuestra red está conformada por personas de distintas disciplinas, lo que nos permite
          abordar la información desde ángulos complementarios. Creemos que la diversidad de perspectivas es
          clave para un periodismo más justo y completo.
        </p>

        <p>
          Desde la tecnología, trabajamos en herramientas que faciliten la curaduría, clasificación y
          distribución de noticias, apoyándonos en inteligencia artificial y metodologías de verificación.
        </p>
      </div>
    </main>
  )
}
