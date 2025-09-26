// src/app/javier/page.tsx
import Image from 'next/image'

export const metadata = {
  title: 'jAvIer | Noticias Neutrales',
  description:
    'Sección dedicada a jAvIer, el GPT personalizado y alter ego digital de Leonardo De la Hoz Borrego.',
}

export default function JavierPage() {
  return (
    <main className="mx-auto p-6 prose prose-lg space-y-6 max-w-3xl">
      <h1 className="text-3xl font-bold">jAvIer</h1>

      <Image
        src="/noticias/javier.jpg"
        alt="jAvIer, GPT personalizado"
        width={800}
        height={500}
        className="rounded-2xl shadow"
        priority
      />
      <p className="text-sm text-gray-500">Crédito imagen: Noticias Neutrales</p>

      <p>
        <strong>jAvIer</strong> es un GPT personalizado, concebido como el alter
        ego digital de Leonardo De la Hoz Borrego. Su propósito es acompañar los
        procesos editoriales, académicos y de organización personal dentro del
        ecosistema de Noticias Neutrales y la red LedeLab.
      </p>

      <p>
        Funciona como un asistente de inteligencia artificial que apoya en la
        redacción de artículos, la codificación de noticias en el formato{' '}
        <code>noticias.ts</code> y la estructuración de proyectos y aprendizajes
        de forma clara y organizada.
      </p>

      <p>
        jAvIer también sirve como espacio de exploración personal, ayudando a
        ordenar metas, tomar decisiones desde distintas perspectivas y mantener
        un registro digital de aprendizajes y reflexiones.
      </p>

      <p>
        Puedes interactuar con jAvIer directamente en su espacio oficial en
        ChatGPT:{' '}
        <a
          href="https://chatgpt.com/g/g-684d9ed898b88191b8ebbb8d1b8a4210-javier?model=gpt-4o"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Abrir jAvIer en ChatGPT
        </a>.
      </p>
    </main>
  )
}
