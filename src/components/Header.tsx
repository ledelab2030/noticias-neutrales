// src/components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import clsx from "clsx"
import AutoBrand from "@/components/AutoBrand"
import LogoWithSuffix from "@/components/LogoWithSuffix"
import dynamic from "next/dynamic"

// Reloj sin SSR (evita hydration mismatch)
const ClockLocal = dynamic(() => import("@/components/ClockLocal"), { ssr: false })

// Azul Estonia para subrayado activo
const ESTONIA_BLUE = "#0072CE"

/** Barra secundaria de pestañas persistentes */
function SubmenuBar({
  items,
  pathname,
}: {
  items: { href: string; label: string }[]
  pathname: string
}) {
  return (
    <div className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="flex gap-5 overflow-x-auto py-2">
          {items.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/")
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "whitespace-nowrap pb-1 text-sm font-medium transition-colors",
                  active
                    ? "text-slate-900"
                    : "text-slate-700 hover:text-slate-900"
                )}
                style={active ? { borderBottom: `3px solid ${ESTONIA_BLUE}` } : {}}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Tabs de secciones (Actualidad → /noticias)
  const SECCIONES = useMemo(
    () => [
      { href: "/noticias", label: "Actualidad" },
      { href: "/buenas-noticias", label: "Buenas Noticias!" },
      { href: "/estilo-de-vida", label: "Estilo de Vida" },
      { href: "/podcasts", label: "Podcasts" },
    ],
    []
  )
  const NOSOTROS = useMemo(
    () => [
      { href: "/sobre-nosotros", label: "Sobre Noticias Neutrales" },
      { href: "/red", label: "Nuestra Red" },
      { href: "/ledelab", label: "LedeLab" },
      { href: "/javier", label: "jAvIer" },
    ],
    []
  )

  // Reglas de aparición del submenú (incluye /noticias)
  const inSecciones = /^\/(noticias|actualidad|buenas-noticias|estilo-de-vida|podcasts)(\/|$)/.test(pathname)
  const inNosotros  = /^\/(sobre-nosotros|red|ledelab|javier)(\/|$)/.test(pathname)

  // Estilo de item nav para fondo SIEMPRE blanco
  const navItem =
    "px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-slate-300"

  return (
    <>
      {/* Masthead: SIEMPRE fondo blanco */}
      <header className="sticky top-0 z-50 shadow-sm">
        <div className="w-full bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            {/* Marca: logo a color + sufijo contextual */}
            <Link href="/" className="shrink-0 flex items-center gap-2" aria-label="Ir al inicio">
              <LogoWithSuffix size="md" tone="onLight" />
              <span aria-hidden className="hidden sm:inline h-[22px] w-px bg-slate-200" />
              <span className="hidden sm:inline text-[13px] text-slate-600 leading-none relative top-[2px]">
                <AutoBrand />
              </span>
            </Link>

            {/* Nav desktop + reloj */}
            <div className="hidden md:flex items-center gap-3">
              <nav className="flex items-center">
                <Link className={navItem} href="/">Inicio</Link>
                <Link className={navItem} href="/noticias" title="Ver secciones">Secciones</Link>
                <Link className={navItem} href="/boletin" title="Boletín diario">Boletín</Link>
                <Link className={navItem} href="/sobre-nosotros" title="Ver información institucional">Nosotros</Link>
                <Link className={navItem} href="/contacto">Contacto</Link>
              </nav>

              {/* separador sutil */}
              <span aria-hidden className="h-5 w-px bg-slate-200 mx-1" />

              {/* Reloj local */}
              <ClockLocal className="text-slate-600" showSeconds={false} dateStyle="medium" />
            </div>

            {/* Botón móvil */}
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
            >
              {!mobileOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>

          {/* Menú móvil */}
          <div id="mobile-menu" className={clsx("md:hidden border-t border-slate-200", mobileOpen ? "block" : "hidden")}>
            <nav className="px-4 py-3 flex flex-col gap-1 bg-white">
              <Link href="/" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-gray-100">
                Inicio
              </Link>
              <Link href="/noticias" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-gray-100">
                Secciones
              </Link>
              <Link href="/boletin" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-gray-100">
                Boletín
              </Link>
              <Link href="/sobre-nosotros" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-gray-100">
                Nosotros
              </Link>
              <Link href="/contacto" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-gray-100">
                Contacto
              </Link>

              {/* reloj en móvil */}
              <div className="mt-2 pt-2 border-t border-slate-200">
                <ClockLocal className="text-slate-600" showSeconds={false} dateStyle="medium" />
              </div>
            </nav>
          </div>
        </div>

        {/* Submenús persistentes bajo el masthead */}
        {inSecciones && <SubmenuBar items={SECCIONES} pathname={pathname} />}
        {inNosotros && <SubmenuBar items={NOSOTROS} pathname={pathname} />}
      </header>
    </>
  )
}
