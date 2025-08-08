import './globals.css'
import Header from '@/components/Header'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Header responsive */}
        <Header />

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
