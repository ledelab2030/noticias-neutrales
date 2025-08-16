// src/components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"
import AutoBrand from "@/components/AutoBrand"

export default function Header() {
  const [open, setOpen] = useState(false)              // menú móvil
  const [openSections, setOpenSections] = useState(false)
  const [openNosotros, setOpenNosotros] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")

  const isSeccionesActive = ["/noticias", "/actualidad", "/buenas-noticias", "/estilo-de-vida", "/podcasts"]
    .some((p) => pathname.startsWith(p))

  const isNosotrosActive = ["/sobre-nosotros", "/nosotros", "/red", "/ledelab", "/javier"]
    .some((p) => pathname.startsWith(p))

  const baseItem = "px-3 py-2 rounded-md text-sm font-medium transition-colors"
  const activeItem = "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800"
  const idleItem = "text-gray-700 hover:text-blue-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-blue-300 dark:hover:bg-gray-700"

  return (
    <header
      className={clsx(
        "sticky top-0 z-50",
        "bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur",
        "border-b border-gray-200 dark:border-gray-800 shadow-sm"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Marca dinámica */}
        <Link href="/" className="shrink-0" aria-label="Ir al inicio">
          <AutoBrand />
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className={clsx(baseItem, isActive("/") ? activeItem : idleItem)}>
            Inicio
          </Link>

          {/* Secciones */}
          <div className="relative group focus-within:visible">
            <div className="flex items-center">
              <Link
                href="/actualidad"
                className={clsx(baseItem, isSeccionesActive ? activeItem : idleItem, "pr-2")}
              >
                Secciones
              </Link>
              <button
                aria-label="Abrir Secciones"
                className={clsx(
                  "ml-0.5 rounded-md p-1",
                  isSeccionesActive ? "text-blue-800 dark:text-blue-300" : "text-gray-500 dark:text-gray-300",
                  "group-hover:text-blue-700 dark:group-hover:text-blue-300"
                )}
                tabIndex={-1}
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div
              className={clsx(
                "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                "transition-opacity duration-150",
                "absolute left-0 mt-2 min-w-[220px] rounded-lg border border-gray-200 dark:border-gray-800",
                "bg-white dark:bg-gray-900 shadow-lg"
              )}
            >
              <div className="py-2">
                <Link href="/actualidad" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Actualidad</Link>
                <Link href="/buenas-noticias" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Buenas Noticias!</Link>
                <Link href="/estilo-de-vida" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Estilo de Vida</Link>
                <Link href="/podcasts" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Podcasts</Link>
              </div>
            </div>
          </div>

          {/* Nosotros */}
          <div className="relative group focus-within:visible">
            <div className="flex items-center">
              <Link
                href="/sobre-nosotros"
                className={clsx(baseItem, isNosotrosActive ? activeItem : idleItem, "pr-2")}
              >
                Nosotros
              </Link>
              <button
                aria-label="Abrir Nosotros"
                className={clsx(
                  "ml-0.5 rounded-md p-1",
                  isNosotrosActive ? "text-blue-800 dark:text-blue-300" : "text-gray-500 dark:text-gray-300",
                  "group-hover:text-blue-700 dark:group-hover:text-blue-300"
                )}
                tabIndex={-1}
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div
              className={clsx(
                "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                "transition-opacity duration-150",
                "absolute left-0 mt-2 min-w-[240px] rounded-lg border border-gray-200 dark:border-gray-800",
                "bg-white dark:bg-gray-900 shadow-lg"
              )}
            >
              <div className="py-2">
                <Link href="/sobre-nosotros" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                  Sobre Noticias Neutrales
                </Link>
                <Link href="/red" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                  Nuestra Red
                </Link>
                <Link href="/ledelab" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                  LedeLab
                </Link>
                <Link href="/javier" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                  jAvIer
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contacto" className={clsx(baseItem, isActive("/contacto") ? activeItem : idleItem)}>
            Contacto
          </Link>
        </nav>

        {/* Botón móvil */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {!open ? (
            <svg className="h-6 w-6 text-gray-900 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-gray-900 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil */}
      <div id="mobile-menu" className={clsx("md:hidden border-t dark:border-gray-700", open ? "block" : "hidden")}>
        <nav className="px-4 py-3 flex flex-col gap-1 bg-white/90 dark:bg-gray-900/90">
          <Link href="/" onClick={() => setOpen(false)} className={clsx(baseItem, isActive("/") ? activeItem : idleItem)}>
            Inicio
          </Link>

          {/* Secciones (móvil) */}
          <div className="flex flex-col">
            <button
              aria-label="Abrir Secciones"
              aria-expanded={openSections}
              onClick={() => setOpenSections((v) => !v)}
              className={clsx(baseItem, isSeccionesActive ? activeItem : idleItem, "text-left")}
            >
              Secciones
            </button>
            {openSections && (
              <div className="ml-3 mt-1 flex flex-col">
                <Link href="/actualidad" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Actualidad</Link>
                <Link href="/buenas-noticias" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Buenas Noticias!</Link>
                <Link href="/estilo-de-vida" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Estilo de Vida</Link>
                <Link href="/podcasts" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Podcasts</Link>
              </div>
            )}
          </div>

          {/* Nosotros (móvil) */}
          <div className="flex flex-col">
            <button
              aria-label="Abrir Nosotros"
              aria-expanded={openNosotros}
              onClick={() => setOpenNosotros((v) => !v)}
              className={clsx(baseItem, isNosotrosActive ? activeItem : idleItem, "text-left")}
            >
              Nosotros
            </button>
            {openNosotros && (
              <div className="ml-3 mt-1 flex flex-col">
                <Link href="/sobre-nosotros" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Sobre Noticias Neutrales</Link>
                <Link href="/red" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Nuestra Red</Link>
                <Link href="/ledelab" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800">LedeLab</Link>
                <Link href="/javier" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800">jAvIer</Link>
              </div>
            )}
          </div>

          <Link href="/contacto" onClick={() => setOpen(false)} className={clsx(baseItem, isActive("/contacto") ? activeItem : idleItem)}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
