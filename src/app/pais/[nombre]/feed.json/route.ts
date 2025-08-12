import { NextRequest, NextResponse } from "next/server"
import { noticias } from "@/data/noticias"

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()

const matchPais = (nPais?: string, etiq?: string[], target?: string) =>
  !!target &&
  ((nPais && norm(nPais) === norm(target)) ||
    (etiq ?? []).some((e) => norm(String(e)) === norm(target)))

export async function GET(req: NextRequest) {
  // /pais/[nombre]/feed.json → ['', 'pais', nombre, 'feed.json']
  const parts = req.nextUrl.pathname.split("/")
  const nombre = parts[2] ?? ""
  const pais = decodeURIComponent(nombre)

  const items = noticias
    .filter((n) => matchPais(n.pais, n.etiquetas, pais))
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))

  return NextResponse.json({
    country: pais,
    count: items.length,
    items: items.map((n) => ({
      id: n.id,
      title: n.titulo,
      date: n.fecha,
      summary: n.resumen,
      country: n.pais,
      source: n.fuente,
      source_url: n.url_fuente,
      tags: n.etiquetas ?? [],
      url: `/noticias/${n.id}`,
    })),
  })
}
