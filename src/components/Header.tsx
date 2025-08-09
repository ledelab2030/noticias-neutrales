'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/noticias', label: 'Más noticias' },
  { href: '/javier', label: 'Javier' },
  { href: '/sobre-nosotros', label: 'Sobre nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Bloquear scroll cuando el drawer está abierto
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [open])

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
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              active
                ? 'text-blue-800 bg-blue-50 dark:text-blue-300 dark:bg-blue-950/30'
                : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-blue-300 dark:hover:bg-gray-800'
            )}
          >
            {l.label}
          </Link>
        )
      })}
    </>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-300 hover:opacity-90"
        >
          Noticias Neutrales
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2">
          <NavLinks />
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {/* Icono hamburguesa */}
          <svg
            className={clsx('h-6 w-6 text-gray-800 dark:text-gray-200', open ? 'hidden' : 'block')}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          {/* Icono cerrar */}
          <svg
            className={clsx('h-6 w-6 text-gray-800 dark:text-gray-200', open ? 'block' : 'hidden')}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] transition-opacity md:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        className={clsx(
          'fixed right-0 top-0 z-50 h-full w-72 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-xl md:hidden',
          'transform transition-transform duration-200 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
          <span className="font-semibold text-blue-700 dark:text-blue-300">Noticias Neutrales</span>
          <button
            aria-label="Cerrar menú"
            className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <nav className="px-2 py-3 flex flex-col gap-1">
          <NavLinks onClick={() => setOpen(false)} />
        </nav>
      </aside>
    </header>
  )
}
