// src/components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"
import AutoBrand from "@/components/AutoBrand"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/javier", label: "Javier" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {links.map((l) => {
        const active = pathname === l.href
        return (
          <Link
            key={l.href}
            href={l.href}
            onClick={onClick}
            className={clsx(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              active
                ? "text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-gray-800"
                : "text-gray-700 hover:text-blue-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-blue-300 dark:hover:bg-gray-700"
            )}
          >
            {l.label}
          </Link>
        )
      })}
    </>
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
        <Link href="/" className="shrink-0" aria-label="Ir al inicio">
          <AutoBrand />
        </Link>
        <nav className="hidden md:flex gap-2">
          <NavLinks />
        </nav>
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

      <div
        id="mobile-menu"
        className={clsx("md:hidden border-t dark:border-gray-700", open ? "block" : "hidden")}
      >
        <nav className="px-4 py-3 flex flex-col gap-1 bg-white/90 dark:bg-gray-900/90">
          <NavLinks onClick={() => setOpen(false)} />
        </nav>
      </div>
    </header>
  )
}
