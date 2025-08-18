// src/components/Analytics.tsx
"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// Tipos seguros para GA en window (evita @ts-ignore)
declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Enviar page_view manual en SPA (App Router)
function sendPageView(url: string) {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: url,
  })
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Primer render + cada cambio de ruta / query
  useEffect(() => {
    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`
    sendPageView(url)
  }, [pathname, searchParams])

  if (!GA_ID) return null

  return (
    <>
      {/* Carga gtag.js */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          // Desactivamos el auto page_view y lo enviamos manualmente en cada cambio de ruta
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  )
}
