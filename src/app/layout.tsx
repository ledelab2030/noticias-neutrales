import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="bg-white border-b shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-700">
              Noticias Neutrales
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-700 transition-colors">
                Inicio
              </Link>
              <Link href="/noticias" className="hover:text-blue-700 transition-colors">
                Más noticias
              </Link>
              <Link href="/javier" className="hover:text-blue-700 transition-colors">
                Javier
              </Link>
              <Link href="/sobre-nosotros" className="hover:text-blue-700 transition-colors">
                Sobre nosotros
              </Link>
              <Link href="/contacto" className="hover:text-blue-700 transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </header>

        {/* Contenido */}
        <main className="flex-1 max-w-5xl mx-auto px-6 py-6">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t shadow-inner mt-8">
          <div className="max-w-5xl mx-auto px-6 py-4 text-sm text-gray-600 flex flex-col sm:flex-row sm:justify-between gap-2">
            <span>
              © {new Date().getFullYear()} Noticias Neutrales. Todos los derechos reservados.
            </span>
            <span>
              Un proyecto de{' '}
              <a
                href="https://ledelab.group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                LedeLab Group OÜ
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}
