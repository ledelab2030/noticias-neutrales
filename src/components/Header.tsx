// src/components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"
import AutoBrand from "@/components/AutoBrand"

export default function Header() {
  const [open, setOpen] = useState(false)           // menú móvil
  const [openRed, setOpenRed] = useState(false)     // submenú móvil de Red
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/")

  const baseItem =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors"
  const activeItem =
    "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800"
  const idleItem =
    "text-gray-700 hover:text-blue-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-blue-300 dark:hover:bg-gray-700"

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
          <Link
            href="/"
            className={clsx(baseItem, isActive("/") ? activeItem : idleItem)}
          >
            Inicio
          </Link>

          {/* Red: Link a /red + dropdown accesible */}
          <div className="relative group focus-within:visible">
            <div className="flex items-center">
              <Link
                href="/red"
                className={clsx(
                  baseItem,
                  isActive("/red") ? activeItem : idleItem,
                  "pr-2"
                )}
              >
                Red
              </Link>
              {/* chevron visual */}
              <button
                aria-label="Abrir submenú de Red"
                className={clsx(
                  "ml-0.5 rounded-md p-1",
                  isActive("/red") ? "text-blue-800 dark:text-blue-300" : "text-gray-500 dark:text-gray-300",
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

            {/* Dropdown (hover/focus) */}
            <div
              className={clsx(
                "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                "transition-opacity duration-150",
                "absolute left-0 mt-2 min-w-[200px] rounded-lg border border-gray-200 dark:border-gray-800",
                "bg-white dark:bg-gray-900 shadow-lg"
              )}
            >
              <div className="py-2">
                <Link
                  href="/red"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Vista general
                </Link>
                <Link
                  href="/red/filiales"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Filiales
                </Link>
                <Link
                  href="/red/aliados"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Aliados
                </Link>
                <Link
                  href="/red/proyectos"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Proyectos
                </Link>
                <Link
                  href="/red/mentores"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Mentores
                </Link>
                <Link
                  href="/red/startups"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Startups
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/sobre-nosotros"
            className={clsx(
              baseItem,
              isActive("/sobre-nosotros") ? activeItem : idleItem
            )}
          >
            Sobre nosotros
          </Link>

          <Link
            href="/contacto"
            className={clsx(baseItem, isActive("/contacto") ? activeItem : idleItem)}
          >
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
      <div
        id="mobile-menu"
        className={clsx("md:hidden border-t dark:border-gray-700", open ? "block" : "hidden")}
      >
        <nav className="px-4 py-3 flex flex-col gap-1 bg-white/90 dark:bg-gray-900/90">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={clsx(baseItem, isActive("/") ? activeItem : idleItem)}
          >
            Inicio
          </Link>

          {/* Red en móvil: link + toggle para subitems */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <Link
                href="/red"
                onClick={() => setOpen(false)}
                className={clsx(
                  baseItem,
                  "flex-1",
                  isActive("/red") ? activeItem : idleItem
                )}
              >
                Red
              </Link>
              <button
                aria-label="Abrir submenú Red"
                aria-expanded={openRed}
                onClick={() => setOpenRed((v) => !v)}
                className="ml-2 rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {openRed && (
              <div className="ml-3 mt-1 flex flex-col">
                <Link href="/red/filiales" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
                  Filiales
                </Link>
                <Link href="/red/aliados" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
                  Aliados
                </Link>
                <Link href="/red/proyectos" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
                  Proyectos
                </Link>
                <Link href="/red/mentores" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
                  Mentores
                </Link>
                <Link href="/red/startups" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
                  Startups
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/sobre-nosotros"
            onClick={() => setOpen(false)}
            className={clsx(baseItem, isActive("/sobre-nosotros") ? activeItem : idleItem)}
          >
            Sobre nosotros
          </Link>

          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className={clsx(baseItem, isActive("/contacto") ? activeItem : idleItem)}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
