// src/components/AutoBrand.tsx
"use client"

import { usePathname } from "next/navigation"
import LogoWithSuffix from "./LogoWithSuffix"

const MAP: Record<string, string> = {
  "/estilo-de-vida": "Estilo de Vida",
  "/health": "Health",
  "/negocios": "Emprendimiento / Negocios",
  "/education": "Sustainability Education",
  "/lifelong": "Life‑Long Learning",
}

export default function AutoBrand({ size = "md" as const }) {
  const pathname = usePathname()
  const entry = Object.keys(MAP).find((p) => pathname.startsWith(p))
  const suffix = entry ? MAP[entry] : "News"

  return <LogoWithSuffix suffix={suffix} size={size} />
}
