// /src/app/layout.tsx
import "./globals.css"
import Header from "@/components/Header"
import type { Metadata, Viewport } from "next"
import Analytics from "@/components/Analytics"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react" // 👈 añadido

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ledelab.co"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Noticias Neutrales",
    template: "%s | Noticias Neutrales",
  },
  description:
    "Portal de noticias neutrales de LedeLab Group OÜ, con información clara, sin sensacionalismo.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Noticias Neutrales",
    images: [
      { url: "/preview.png", width: 1200, height: 628, alt: "Noticias Neutrales" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ledelabgroup",
    creator: "@ledelabgroup",
  },
  icons: { icon: "/ledelab/favicon.png" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
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

        {/* GA4: usa useSearchParams → requiere Suspense */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
