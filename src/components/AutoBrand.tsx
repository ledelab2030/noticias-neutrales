// src/components/AutoBrand.tsx
"use client"

import { usePathname } from "next/navigation"

// Usamos Entry para tipar el mapa y evitar el warning de var no usada.
export type Entry = readonly [prefix: string, label: string]

const MAP: readonly Entry[] = [
  ["/buenas-noticias", "Buenas Noticias!"],
  ["/estilo-de-vida", "Estilo de Vida"],
  ["/podcasts", "Podcasts"],
  ["/actualidad", "Actualidad"],
  ["/noticias", "Actualidad"],
  ["/boletin", "Boletín"], // añadido
  ["/aliados", "Aliados"],
  ["/filiales", "Filiales"],
  ["/mentores", "Mentores"],
  ["/proyectos", "Proyectos"],
  ["/startups", "Startups"],
  ["/red", "Nuestra Red"],
  ["/sobre-nosotros", "Sobre Noticias Neutrales"],
  ["/ledelab", "LedeLab"],
  ["/javier", "jAvIer"],
  ["/imasde", "I+DE SAS"],
  ["/protemad", "Grupo Protemad"],
  ["/contacto", "Contacto"],
  ["/", "Actualidad"],
]

function pickLabel(pathname: string): string {
  // Priorizamos el match más largo (rutas más específicas primero)
  const ordered = [...MAP].sort((a, b) => b[0].length - a[0].length)
  const hit = ordered.find(([prefix]) => pathname.startsWith(prefix))
  return hit ? hit[1] : "Actualidad"
}

export default function AutoBrand() {
  const pathname = usePathname() ?? "/"
  const label = pickLabel(pathname)
  return <span>{label}</span>
}
