/**
 * scripts/genera-newsletter.ts
 * 
 * Generación automática de newsletter (diario y semanal) a partir de /data/noticias.ts
 * Mantiene JSON como fuente canónica y produce HTML de email (tablas + estilos inline).
 * 
 * Uso:
 *  - npx ts-node scripts/genera-newsletter.ts
 *  - Variables opcionales:
 *      SITE_URL=https://www.ledelab.co 
 *      NL_OUT_DIR=public/newsletters 
 *      NL_DATE=2025-08-29         // YYYY-MM-DD en zona America/Bogota
 *      NL_FREQ=diario|semanal     // Si se especifica, genera solo esa frecuencia
 * 
 * Salidas:
 *  - public/newsletters/newsletter-diario-YYYY-MM-DD.html
 *  - public/newsletters/newsletter-diario-YYYY-MM-DD.json
 *  - public/newsletters/newsletter-semanal-YYYY-MM-DD.html
 *  - public/newsletters/newsletter-semanal-YYYY-MM-DD.json
 */

import fs from 'fs/promises'
import path from 'path'
import { pathToFileURL } from 'url'

// ====== Tipos (alineados con codnnv1) ======
export type NoticiaRaw = {
  id: string
  fecha: string // YYYY-MM-DD
  titulo: string
  pais?: string
  resumen?: string
  contenido?: string[]
  etiquetas?: string[]
  fuente?: string | { nombre: string; url?: string }
  url_fuente?: string
  consecutivo_unico?: string
}

// ====== Config ======
const TIMEZONE = 'America/Bogota'
const SITE_URL = process.env.SITE_URL || 'https://www.ledelab.co'
const OUT_DIR = process.env.NL_OUT_DIR || path.join('public', 'newsletters')

// ====== Utilidades de fecha (respetando zona Bogotá) ======
function ymdInTZ(d: Date, tz = TIMEZONE): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(d)
  const y = parts.find(p => p.type === 'year')?.value
  const m = parts.find(p => p.type === 'month')?.value
  const da = parts.find(p => p.type === 'day')?.value
  return `${y}-${m}-${da}`
}

function todayBogota(): string {
  return ymdInTZ(new Date(), TIMEZONE)
}

function parseYMDToBogotaDate(ymd: string): Date {
  // Bogotá no tiene DST; -05:00 es válido todo el año.
  return new Date(`${ymd}T00:00:00-05:00`)
}

function addDaysYMD(ymd: string, delta: number): string {
  const base = parseYMDToBogotaDate(ymd)
  base.setDate(base.getDate() + delta)
  return ymdInTZ(base, TIMEZONE)
}

// ====== Carga de datos ======


async function cargarNoticias(): Promise<NoticiaRaw[]> {
  // importar con require porque estamos en CommonJS
  const mod = require("../src/data/noticias.ts")
  const arr = (mod.default ?? mod.noticias ?? mod.NOTICIAS) as NoticiaRaw[]
  if (!Array.isArray(arr)) throw new Error("El módulo noticias.ts no exporta un array de noticias")
  return arr
}


// ====== Selección de noticias ======
function ordenarDescPorFecha(a: NoticiaRaw, b: NoticiaRaw): number {
  // Desc: más reciente primero
  if (a.fecha < b.fecha) return 1
  if (a.fecha > b.fecha) return -1
  // en empate, ordenar por id para estabilidad
  return a.id.localeCompare(b.id)
}

function filtrarDiarias(noticias: NoticiaRaw[], ymd: string): NoticiaRaw[] {
  return noticias.filter(n => n.fecha === ymd).sort(ordenarDescPorFecha)
}

function filtrarSemanales(noticias: NoticiaRaw[], hastaYMD: string): { desde: string; hasta: string; items: NoticiaRaw[] } {
  const desde = addDaysYMD(hastaYMD, -6) // últimos 7 días inclusive
  const items = noticias
    .filter(n => n.fecha >= desde && n.fecha <= hastaYMD)
    .sort(ordenarDescPorFecha)
  return { desde, hasta: hastaYMD, items }
}

// ====== Helpers HTML ======
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderItem(n: NoticiaRaw): string {
  const url = `${SITE_URL.replace(/\/$/, '')}/noticias/${encodeURIComponent(n.id)}`
  const etiquetas = (n.etiquetas?.slice(0, 3) ?? []).join(' · ')
  const pais = n.pais ? ` — ${escapeHtml(n.pais)}` : ''
  const resumen = n.resumen ?? (n.contenido?.[0] ?? '')

  return `
    <tr>
      <td style="padding:16px 0; border-bottom:1px solid #e5e7eb;">
        <a href="${url}" style="font-weight:700; font-size:18px; text-decoration:none; color:#111827;">
          ${escapeHtml(n.titulo)}
        </a>
        <div style="font-size:14px; line-height:1.6; color:#374151; margin-top:6px;">
          ${escapeHtml(resumen)}
        </div>
        <div style="font-size:12px; color:#6b7280; margin-top:8px;">
          ${escapeHtml(n.fecha)}${pais}${etiquetas ? ' · ' + escapeHtml(etiquetas) : ''}
        </div>
        <div style="margin-top:10px;">
          <a href="${url}" style="display:inline-block; padding:9px 14px; border-radius:8px; background:#0072CE; color:#ffffff; text-decoration:none; font-size:14px;">Leer más</a>
        </div>
      </td>
    </tr>
  `
}

function headHtml(title: string) {
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>
    /* Estilos mínimos para clientes que respetan <style>. Todo lo crítico va inline. */
    @media (prefers-color-scheme: dark) {
      body { background:#0b1220; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background:#f5f7fb;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f5f7fb;">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="width:600px; max-width:100%; background:#ffffff; border-radius:12px; box-shadow:0 1px 2px rgba(0,0,0,0.04); padding:0 24px 24px;">
          <tr>
            <td style="padding:24px 0 8px;">
              <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#6b7280;">Boletín</div>
              <div style="font-weight:800; font-size:22px; color:#111827;">Noticias Neutrales</div>
            </td>
          </tr>
  `
}

function footerHtml(frecuencia: 'diario'|'semanal') {
  const base = SITE_URL.replace(/\/$/, '')
  return `
          <tr>
            <td style="padding-top:18px;">
              <div style="font-size:12px; color:#6b7280; line-height:1.6;">
                Estás recibiendo la edición <strong>${frecuencia}</strong> de Noticias Neutrales.
                <br>
                <a href="${base}/boletin?f=diario" style="color:#0072CE; text-decoration:none;">Cambiar a diario</a> ·
                <a href="${base}/boletin?f=semanal" style="color:#0072CE; text-decoration:none;">Cambiar a semanal</a> ·
                <a href="${base}/boletin/preferencias" style="color:#0072CE; text-decoration:none;">Preferencias</a> ·
                <a href="${base}/boletin/baja" style="color:#0072CE; text-decoration:none;">Darse de baja</a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function sectionHeaderHtml(text: string, sub?: string) {
  return `
    <tr>
      <td style="padding-top:8px; padding-bottom:8px;">
        <div style="font-size:16px; font-weight:800; color:#111827;">${escapeHtml(text)}</div>
        ${sub ? `<div style=\"font-size:12px; color:#6b7280; margin-top:4px;\">${escapeHtml(sub)}<\/div>` : ''}
      </td>
    </tr>
  `
}

function renderNewsletter(
  titulo: string,
  frecuencia: 'diario' | 'semanal',
  edicionYMD: string,
  items: NoticiaRaw[],
  rango?: { desde: string; hasta: string }
): string {
  const maxItems = 14 // límite para email; evita newsletters demasiado largos
  const destacados = items.slice(0, Math.min(6, items.length))
  const resto = items.slice(destacados.length, maxItems)

  let html = headHtml(titulo)

  // Encabezado de edición
  const subtitulo = frecuencia === 'diario'
    ? `Edición del ${edicionYMD}`
    : `Edición del ${rango?.desde} al ${rango?.hasta}`

  html += sectionHeaderHtml(titulo, subtitulo)

  if (items.length === 0) {
    html += `
      <tr><td style="padding:8px 0; color:#6b7280;">No hay noticias para esta edición.</td></tr>
    `
    html += footerHtml(frecuencia)
    return html
  }

  // Destacados
  html += sectionHeaderHtml('Lo más reciente')
  destacados.forEach(n => {
    html += renderItem(n)
  })

  // Más del período
  if (resto.length > 0) {
    html += sectionHeaderHtml('También en esta edición')
    resto.forEach(n => {
      html += renderItem(n)
    })
  }

  // Nota de cierre si se truncó
  if (items.length > maxItems) {
    const base = SITE_URL.replace(/\/$/, '')
    const moreUrl = `${base}/actualidad` // landing general
    html += `
      <tr>
        <td style="padding-top:8px;">
          <div style="font-size:13px; color:#6b7280;">Hay más noticias en el portal.
            <a href="${moreUrl}" style="color:#0072CE; text-decoration:none;">Ver todas</a>
          </div>
        </td>
      </tr>
    `
  }

  html += footerHtml(frecuencia)
  return html
}

// ====== Escritura de archivos ======
async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true })
}

async function writeOut(basename: string, html: string, snapshot: any) {
  await ensureDir(OUT_DIR)
  const htmlPath = path.join(OUT_DIR, `${basename}.html`)
  const jsonPath = path.join(OUT_DIR, `${basename}.json`)
  await fs.writeFile(htmlPath, html, 'utf8')
  await fs.writeFile(jsonPath, JSON.stringify(snapshot, null, 2), 'utf8')
  return { htmlPath, jsonPath }
}

// ====== Main ======
async function main() {
  const noticias = await cargarNoticias()
  const runDate = process.env.NL_DATE || todayBogota()
  const onlyFreq = process.env.NL_FREQ as 'diario' | 'semanal' | undefined

  if (!onlyFreq || onlyFreq === 'diario') {
    const diarias = filtrarDiarias(noticias, runDate)
    const titulo = 'Noticias Neutrales — Diario'
    const html = renderNewsletter(titulo, 'diario', runDate, diarias)
    const snap = { tipo: 'diario', fecha: runDate, total: diarias.length, ids: diarias.map(n => n.id) }
    const { htmlPath, jsonPath } = await writeOut(`newsletter-diario-${runDate}`, html, snap)
    // eslint-disable-next-line no-console
    console.log('Generado:', htmlPath, 'y', jsonPath)
  }

  if (!onlyFreq || onlyFreq === 'semanal') {
    const semanal = filtrarSemanales(noticias, runDate)
    const titulo = 'Noticias Neutrales — Semanal'
    const html = renderNewsletter(titulo, 'semanal', runDate, semanal.items, { desde: semanal.desde, hasta: semanal.hasta })
    const snap = {
      tipo: 'semanal',
      desde: semanal.desde,
      hasta: semanal.hasta,
      total: semanal.items.length,
      ids: semanal.items.map(n => n.id),
    }
    const base = `newsletter-semanal-${semanal.hasta}`
    const { htmlPath, jsonPath } = await writeOut(base, html, snap)
    // eslint-disable-next-line no-console
    console.log('Generado:', htmlPath, 'y', jsonPath)
  }
}

main().catch(err => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})

/*
==============================================
Sugerencia de scripts en package.json:
==============================================
{
  "scripts": {
    "nl:build:diario": "SITE_URL=https://www.ledelab.co ts-node scripts/genera-newsletter.ts",
    "nl:build:semanal": "SITE_URL=https://www.ledelab.co NL_FREQ=semanal ts-node scripts/genera-newsletter.ts"
  }
}

==============================================
Sugerencia de GitHub Action (opcional): .github/workflows/newsletters.yml
==============================================
name: Generar newsletters

on:
  schedule:
    - cron: '30 9 * * *'   # 09:30 UTC (~04:30 Bogotá)
  workflow_dispatch: {}

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: |
          export SITE_URL=https://www.ledelab.co
          export NL_OUT_DIR=public/newsletters
          export TZ=America/Bogota
          npx ts-node scripts/genera-newsletter.ts
      - name: Commit & push
        run: |
          if [ -n "$(git status --porcelain)" ]; then
            git config user.name "github-actions"
            git config user.email "actions@users.noreply.github.com"
            git add -A
            git commit -m "chore(newsletter): generar edición ${new Date().toISOString().slice(0,10)}"
            git push
          fi
*/
