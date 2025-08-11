// src/components/AutoBrand.tsx
"use client"

import { usePathname } from "next/navigation"
import LogoWithSuffix from "./LogoWithSuffix"

// Etiqueta corta para el header; el H1 completo va en la página
const MAP: Record<string, string> = {
  "/estilo-de-vida": "vida",
  "/health": "health",
  "/negocios": "negocios",
  "/education": "education",
  "/lifelong": "learning",
}

export default function AutoBrand() {
  const pathname = usePathname()
  const entry = Object.keys(MAP).find((p) => pathname.startsWith(p))
  const suffix = entry ? MAP[entry] : "news"
  return <LogoWithSuffix suffix={suffix} />
}
