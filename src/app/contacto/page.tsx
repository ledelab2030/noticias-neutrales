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
  const unicoCorreo = 'info@ledelab.co'

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        title="Contacto"
        description="Si deseas comunicarte con LedeLab, estos son nuestros canales oficiales."
      />

      <p className="mt-4 text-sm text-muted-foreground">
        Para garantizar trazabilidad y seguridad utilizamos un único correo para todos los temas. 
        Allí recibimos consultas sobre nuestros artículos, propuestas de entrevistas, solicitudes de información, 
        cooperación institucional, reportes técnicos y cualquier otra comunicación general.
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        Valoramos tus aportes y comentarios: cada mensaje nos ayuda a mejorar nuestro trabajo y a fortalecer 
        nuestra red de aliados.
      </p>

      <p className="mt-2 font-medium">
        <Link
          href={`mailto:${unicoCorreo}`}
          className="underline underline-offset-4"
        >
          {unicoCorreo}
        </Link>
      </p>

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
        <p>
          Barranquilla, Colombia — Centro de operaciones y actividades locales.
        </p>
        <p>
          Tallinn, Estonia — Sede administrativa principal y domicilio fiscal de la empresa
          (Tornimäe tn 5, 2nd floor, 10145 Tallinn).
        </p>
      </div>
    </main>
  )
}

