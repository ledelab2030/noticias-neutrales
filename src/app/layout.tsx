// /src/app/layout.tsx
import "./globals.css"
import Header from "@/components/Header"
import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

// Plantilla global: cualquier `title` de una página se renderiza como "%s / LedeLab"
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "LedeLab",
    template: "%s / LedeLab",
  },
  description: "Noticias Neutrales por LedeLab.",
  icons: {
    icon: "/ledelab/favicon.png", // favicon personalizado
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-6 py-6">{children}</main>
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-inner mt-8">
          <div className="max-w-5xl mx-auto px-6 py-4 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row sm:justify-between gap-2">
            <span>© {new Date().getFullYear()} Noticias Neutrales. Todos los derechos reservados.</span>
            <span>
              Un proyecto de{" "}
              <a
                href="https://ledelab.group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-300 hover:underline"
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
