// src/app/contacto/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto | LedeLab',
  description: 'Canales de contacto para prensa, alianzas, soporte y consultas generales.',
}

export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* migas en minúsculas */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">inicio</Link>
        <span className="px-2">/</span>
        <span>contacto</span>
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">Contacto</h1>

      <div className="mt-6 space-y-4 leading-7 text-[17px] text-zinc-900 dark:text-zinc-100">
        <p>
          Si deseas comunicarte con LedeLab, estos son nuestros canales oficiales. Procuramos responder a la
          mayor brevedad posible.
        </p>
        <p>
          Para garantizar trazabilidad y seguridad, te invitamos a usar los correos temáticos según tu
          necesidad. También puedes escribirnos a través de nuestras redes.
        </p>
      </div>

      {/* tarjetas de contacto */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-4">
          <h2 className="text-base font-semibold">Prensa</h2>
          <p className="mt-1 text-sm text-muted-foreground">Entrevistas y solicitudes de información.</p>
          <Link href="mailto:prensa@ledelab.co" className="mt-3 inline-block underline underline-offset-4">prensa@ledelab.co</Link>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="text-base font-semibold">Alianzas</h2>
          <p className="mt-1 text-sm text-muted-foreground">Cooperación institucional y proyectos.</p>
          <Link href="mailto:alianzas@ledelab.co" className="mt-3 inline-block underline underline-offset-4">alianzas@ledelab.co</Link>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="text-base font-semibold">Soporte</h2>
          <p className="mt-1 text-sm text-muted-foreground">Reportes técnicos del sitio.</p>
          <Link href="mailto:soporte@ledelab.co" className="mt-3 inline-block underline underline-offset-4">soporte@ledelab.co</Link>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="text-base font-semibold">Consultas generales</h2>
          <p className="mt-1 text-sm text-muted-foreground">Comentarios y preguntas.</p>
          <Link href="mailto:hola@ledelab.co" className="mt-3 inline-block underline underline-offset-4">hola@ledelab.co</Link>
        </div>
      </div>

      {/* redes / ubicación */}
      <div className="mt-10 space-y-2 text-sm text-muted-foreground">
        <p>
          Redes: {' '}
          <Link href="#" className="underline underline-offset-4">X</Link>{' '}
          · <Link href="#" className="underline underline-offset-4">LinkedIn</Link>{'https://www.linkedin.com/company/ledelab'}
          · <Link href="#" className="underline underline-offset-4">YouTube</Link>{'https://www.youtube.com/@ledelabgroup'}
        </p>
        <p>Ubicación: Barranquilla, Colombia</p>
      </div>
    </main>
  )
}
