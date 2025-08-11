// src/components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"
import AutoBrand from "@/components/AutoBrand"

export default function Header() {
  const [open, setOpen] = useState(false)        // menú móvil
  const [openRed, setOpenRed] = useState(false)  // dropdown "Red" (desktop)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  const DesktopLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={clsx(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive(href)
          ? "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800"
          : "text-gray-700 hover:text-blue-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-blue-300 dark:hover:bg-gray-700"
      )}
    >
      {label}
    </Link>
  )

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
        <nav className="relative hidden md:flex items-center gap-1">
          <DesktopLink href="/" label="Inicio" />

          {/* Red (dropdown) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenRed((v) => !v)}
              onBlur={(e) => {
                // cierra si el foco se va fuera del dropdown
                if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                  setOpenRed(false)
                }
              }}
              className={clsx(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                "text-gray-700 hover:text-blue-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-blue-300 dark:hover:bg-gray-700",
                (pathname.startsWith("/red") || pathname === "/protemad" || pathname === "/imasde") &&
                  "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800"
              )}
              aria-haspopup="menu"
              aria-expanded={openRed}
            >
              Red
              <span className="ml-1 inline-block align-middle">▾</span>
            </button>

            {openRed && (
              <div
                className="absolute right-0 mt-2 w-44 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
                role="menu"
                tabIndex={-1}
              >
                <Link
                  href="/red/filiales"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                  onClick={() => setOpenRed(false)}
                  role="menuitem"
                >
                  Filiales
                </Link>
                <Link
                  href="/red/aliados"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                  onClick={() => setOpenRed(false)}
                  role="menuitem"
                >
                  Aliados
                </Link>
              </div>
            )}
          </div>

          <DesktopLink href="/equipo" label="Equipo" />
          <DesktopLink href="/sobre-nosotros" label="Sobre nosotros" />
          <DesktopLink href="/contacto" label="Contacto" />
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
          <svg
            className={clsx("h-6 w-6", open ? "hidden" : "block")}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"
              className="stroke-gray-900 dark:stroke-gray-200" />
          </svg>
          <svg
            className={clsx("h-6 w-6", open ? "block" : "hidden")}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"
              className="stroke-gray-900 dark:stroke-gray-200" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={clsx("md:hidden border-t dark:border-gray-700", open ? "block" : "hidden")}
      >
        <nav className="px-4 py-3 flex flex-col gap-1 bg-white/90 dark:bg-gray-900/90">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={clsx(
              "px-3 py-2 rounded-md text-sm font-medium",
              isActive("/") ? "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
            )}
          >
            Inicio
          </Link>

          {/* Red (se muestra desplegado en móvil) */}
          <div className="px-1 py-1">
            <div className="px-2 pb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Red</div>
            <Link
              href="/red/filiales"
              onClick={() => setOpen(false)}
              className={clsx(
                "ml-2 block px-3 py-2 rounded-md text-sm",
                pathname === "/red/filiales" ? "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
              )}
            >
              Filiales
            </Link>
            <Link
              href="/red/aliados"
              onClick={() => setOpen(false)}
              className={clsx(
                "ml-2 block px-3 py-2 rounded-md text-sm",
                pathname === "/red/aliados" ? "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
              )}
            >
              Aliados
            </Link>
          </div>

          <Link
            href="/equipo"
            onClick={() => setOpen(false)}
            className={clsx(
              "px-3 py-2 rounded-md text-sm font-medium",
              isActive("/equipo") ? "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
            )}
          >
            Equipo
          </Link>
          <Link
            href="/sobre-nosotros"
            onClick={() => setOpen(false)}
            className={clsx(
              "px-3 py-2 rounded-md text-sm font-medium",
              isActive("/sobre-nosotros") ? "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
            )}
          >
            Sobre nosotros
          </Link>
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className={clsx(
              "px-3 py-2 rounded-md text-sm font-medium",
              isActive("/contacto") ? "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
            )}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
