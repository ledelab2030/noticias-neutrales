// src/app/contacto/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Contacto | LedeLab',
  description:
    'Canales oficiales de contacto de LedeLab. Un único correo para prensa, alianzas, soporte y consultas generales.',
}

export default function ContactoPage() {
  const unicoCorreo = 'contacto@ledelab.co'

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        title="Contacto"
        description="Si deseas comunicarte con LedeLab, estos son nuestros canales oficiales."
      />

      <p className="mt-4 text-sm text-muted-foreground">
        Para garantizar trazabilidad y seguridad usamos un único correo para todos los temas:
      </p>

      <p className="mt-2 font-medium">
        <Link
          href={`mailto:${unicoCorreo}`}
          className="underline underline-offset-4"
        >
          {unicoCorreo}
        </Link>
      </p>

      <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Comentar sobre nuestros artículos de actualidad y opinión</li>
        <li>Proponer entrevistas y solicitudes de información</li>
        <li>Conocer más sobre nuestros aliados o proponer cooperación institucional y proyectos</li>
        <li>Reportar problemas técnicos del sitio o pedir orientación en su uso</li>
        <li>Darnos retroalimentación</li>
        <li>O en general, cualquier consulta</li>
      </ul>

      <p className="mt-6 text-sm text-muted-foreground">
        También puedes seguirnos o escribirnos a través de nuestras redes:
      </p>

      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <Link href="https://x.com/ledelabgroup" className="underline underline-offset-4">
          X
        </Link>
        <Link href="https://www.linkedin.com/company/ledelab" className="underline underline-offset-4">
          LinkedIn
        </Link>
        <Link href="https://www.youtube.com/@ledelabgroup" className="underline underline-offset-4">
          YouTube
        </Link>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p className="font-medium">Ubicaciones:</p>
        <p>Barranquilla, Colombia</p>
        <p>Tallinn, Estonia</p>
      </div>
    </main>
  )
}
