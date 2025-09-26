// /src/app/ledelab/page.tsx
import Image from 'next/image'

export const metadata = {
  title: 'LedeLab | Noticias Neutrales',
  description:
    'Información sobre LedeLab, red de innovación, investigación y emprendimientos sostenibles fundada por Leonardo De la Hoz Borrego.',
}

export default function LedeLabPage() {
  return (
    <main className="mx-auto p-6 prose prose-lg space-y-6 max-w-3xl">
      <h1 className="text-3xl font-bold">LedeLab</h1>

      <Image
        src="/noticias/ledelab.jpg"
        alt="Leonardo De la Hoz Borrego en el Global Entrepreneurship Congress 2025"
        width={800}
        height={500}
        className="rounded-2xl shadow"
      />
      <p className="text-sm text-gray-500">
        Crédito imagen: LedeLab Group OÜ
      </p>

      <p>
        <strong>LedeLab</strong> es una red de investigación, innovación y
        emprendimiento fundada por <strong>Leonardo De la Hoz Borrego</strong>,
        con el propósito de articular proyectos en sostenibilidad, educación y
        tecnología, conectando iniciativas locales con alcance global.
      </p>

      <p>
        En junio de 2025, Leonardo participó en el{' '}
        <em>Global Entrepreneurship Congress (GEC)</em>, realizado en
        Indianápolis del <strong>2 al 5 de junio</strong>. Asistió en calidad de
        delegado, invitado por la organización, dentro de la categoría{' '}
        <em>Ecosystem Builder</em> (Constructor de Ecosistemas de
        Emprendimiento). Más información en{' '}
        <a
          href="https://www.genglobal.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Global Entrepreneurship Network
        </a>.
      </p>

      <p>
        La presencia en este encuentro internacional refuerza la visión de LedeLab
        como plataforma para promover la colaboración entre universidades,
        empresas, organizaciones sociales y comunidades de emprendedores.
      </p>

      <p>
        A través de esta sección compartiremos novedades sobre proyectos en curso,
        documentos de referencia y oportunidades de colaboración con la red
        LedeLab.
      </p>
    </main>
  )
}

