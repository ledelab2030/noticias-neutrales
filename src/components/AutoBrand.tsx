// src/components/AutoBrand.tsx
"use client"

import { usePathname } from "next/navigation"
import LogoWithSuffix from "./LogoWithSuffix"

type Entry = readonly [prefix: string, label: string]

// Más específico ➜ más genérico (el orden importa)
const MAP: Entry[] = [
  // Red (subsecciones)
  ["/red/proyectos", "Proyectos"],
  ["/red/aliados", "Aliados"],
  ["/red/filiales", "Filiales"],
  ["/red/mentores", "Mentores"],
  ["/red/startups", "Startups"],
  ["/red", "Red"],

  // Contenido
  ["/estilo-de-vida", "Estilo de Vida"],
  ["/health", "Health"],
  ["/negocios", "Emprendimiento / Negocios"],
  ["/education", "Sustainability Education"],
  ["/lifelong", "Life-Long Learning"],

  // Institucional / micrositios
  ["/sobre-nosotros", "Sobre nosotros"],
  ["/contacto", "Contacto"],
  ["/imasde", "I+DE SAS"],
  ["/protemad", "Grupo Protemad"],

  // Actualidad / noticias (incluye /noticias/[slug])
  ["/actualidad", "Actualidad"],
  ["/noticias", "Actualidad"],

  // Home
  ["/", "Actualidad"],
] as const

export default function AutoBrand({ size = "md" as const }) {
  const raw = usePathname() || "/"
  // quita slash final para normalizar
  const pathname = raw.replace(/\/+$/, "") || "/"
  const match = MAP.find(([p]) => pathname.startsWith(p))
  const suffix = match ? match[1] : "Actualidad"
  return <LogoWithSuffix suffix={suffix} size={size} />
}
