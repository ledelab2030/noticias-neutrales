import { NextRequest, NextResponse } from "next/server"
import { noticias } from "@/data/noticias"

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()

const matchPais = (nPais?: string, etiq?: string[], target?: string) =>
  !!target &&
  ((nPais && norm(nPais) === norm(target)) ||
    (etiq ?? []).some((e) => norm(String(e)) === norm(target)))

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin
  const parts = req.nextUrl.pathname.split("/") // ['', 'pais', nombre, 'feed.xml']
  const nombre = parts[2] ?? ""
  const pais = decodeURIComponent(nombre)

  const items = noticias
    .filter((n) => matchPais(n.pais, n.etiquetas, pais))
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))

  const xmlItems = items
    .map((n) => {
      const link = `${origin}/noticias/${n.id}`
      const pubDate = new Date(`${n.fecha}T00:00:00Z`).toUTCString()
      return `
        <item>
          <title><![CDATA[${n.titulo}]]></title>
          <link>${link}</link>
          <guid isPermaLink="false">${n.id}</guid>
          <pubDate>${pubDate}</pubDate>
          <description><![CDATA[${n.resumen}]]></description>
          ${n.url_fuente ? `<source url="${n.url_fuente}">${n.fuente ?? ""}</source>` : ""}
        </item>`
    })
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"><channel>
    <title><![CDATA[Noticias por país: ${pais}]]></title>
    <link>${origin}/pais/${encodeURIComponent(pais)}</link>
    <description><![CDATA[Cobertura neutral y verificada de ${pais}.]]></description>
    ${xmlItems}
  </channel></rss>`

  return new NextResponse(rss, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}

