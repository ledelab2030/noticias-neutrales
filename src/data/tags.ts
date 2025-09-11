// 🏷️ Catálogo oficial de etiquetas (TAGS)
// ——————————————————————————————————————————
// Instrucciones de uso
// 1) Solo agregar/renombrar etiquetas **aquí**.
// 2) En cada noticia, usa únicamente valores de este catálogo.
// 3) Si llegan etiquetas fuera de catálogo (por mayúsculas, acentos o sinónimos),
//    utiliza `toCanonicalTag()` o `sanitizeTags()` para normalizarlas al cargar.
// 4) Para reemplazos editoriales (p.ej. "resultados financieros" → "resultados"),
//    edita el mapa `REPLACEMENTS` de abajo.

export const TAGS = [
  'aceites vegetales',
  'alemania',
  'alimentación',
  'Barranquilla',
  'Bogotá',
  'Bolivia',
  'buenas noticias',
  'cambio climático',
  'carolina corcho',
  'centro democratico',
  'china',
  'colombia',
  'consumo',
  'conversaciones pendientes',
  'corte suprema',
  'convivencia',
  'corte constitucional',
  'derecha',
  'centro',
  'dieta',
  'donald trump',
  'economía',
  'ecopetrol',
  'editorial',
  'elecciones',
  'encuestas',
  'energía',
  'estados unidos',
  'estilo de vida',
  'estonia',
  'eventos',
  'fútbol',
  'guardia nacional',
  'gustavo petro',
  'investigación',
  'Iván Cepeda',
  'izquierda',
  'medios',
  'medio ambiente',
  'mexico',
  'nutrición',
  'opinion',
  'ozempic',
  'paloma valencia',
  'petróleo',
  'podcast',
  'política',
  'putin',
  'psoriasis',
  'reforma agraria',
  'relaciones',
  'resultados',
  'rusia',
  'salud',
  'seguridad',
  'seguridad alimentaria',
  'sexualidad',
  'sinner',
  'sostenibilidad',
  'transición energética',
  'tecnología',
  'tenis',
  'tranquilidad',
  'unión patriótica',
  'uribe',
] as const

export type Tag = typeof TAGS[number]

// ——————————————————————————————————————————
// 🔤 Normalización (acentos, mayúsculas, espacios)
// Convierte entradas "libres" al formato canónico del catálogo.

function normBase(s: string) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita tildes
    .toLowerCase()
    .trim()
}

// Crea un set normalizado de TAGS para comparación exacta sin tildes/mayúsculas
const TAGS_NORM = new Map(
  TAGS.map((t) => [normBase(t), t])
)

// ——————————————————————————————————————————
// 🔁 Reemplazos editoriales
// Para etiquetas que **ya no existen** en el catálogo y deben migrarse a una canónica.
// (Si una noticia trae estas etiquetas, se reemplazarán automáticamente.)

export const REPLACEMENTS: Record<string, Tag> = {
  // Caps/variantes → canónico
  'salud': 'salud',
  'Salud': 'salud',
  'consumo': 'consumo',
  'Consumo': 'consumo',
  'tecnología': 'tecnología',
  'Tecnología': 'tecnología',
  'estados unidos': 'estados unidos',
  'Estados Unidos': 'estados unidos',
  'donald trump': 'donald trump',
  'Donald Trump': 'donald trump',
  'gustavo petro': 'gustavo petro',
  'Gustavo Petro': 'gustavo petro',
  'unión patriótica': 'unión patriótica',
  'Unión Patriótica': 'unión patriótica',
  'Medios': 'medios',

  // Etiquetas removidas → destino sugerido
  'economía de colombia': 'economía',
  'Economía de Colombia': 'economía',
  'resultados financieros': 'resultados',
  'Resultados financieros': 'resultados',
  'salud cardiovascular': 'salud',
  'Salud cardiovascular': 'salud',
  'política pública': 'política',
  'Política pública': 'política',
  'centro democrático': 'política',
  'Centro Democrático': 'política',
  'cidh': 'política',
  'CIDH': 'política',
  'revictimización': 'política',
  'Revictimización': 'política',
  'opinión pública': 'encuestas',
  'Opinión Pública': 'encuestas',
  'indicadores': 'economía',
  'Indicadores': 'economía',
  'muriel bowser': 'estados unidos',
  'Muriel Bowser': 'estados unidos',
  'washington d. c.': 'estados unidos',
  'Washington D. C.': 'estados unidos',
  'home rule act': 'estados unidos',
  'Home Rule Act': 'estados unidos',
  'lanzamiento': 'medios',
  'Lanzamiento': 'medios',
}

// ——————————————————————————————————————————
// 🧰 Utilidades para normalizar y validar

export function toCanonicalTag(raw: string): Tag | null {
  // 1) Si está en REPLACEMENTS explícitos, aplica y devuelve
  if (raw in REPLACEMENTS) return REPLACEMENTS[raw]

  // 2) Normaliza y busca coincidencia exacta vs. catálogo
  const base = normBase(raw)
  const found = TAGS_NORM.get(base)
  if (found) return found

  // 3) Si no hay match, intenta coincidencia "suave" eliminando dobles espacios/guiones
  const relax = base.replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim()
  for (const t of TAGS) {
    const tn = normBase(t).replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim()
    if (tn === relax) return t
  }

  return null
}

export function sanitizeTags(input?: string[] | null): Tag[] {
  const set = new Set<Tag>()
  input?.forEach((t) => {
    const c = toCanonicalTag(t)
    if (c) set.add(c)
  })
  return Array.from(set)
}

// ——————————————————————————————————————————
// 📎 Ejemplo de uso (en el render de una noticia)
// const safeTags = sanitizeTags(n.etiquetas)
// safeTags.map(tag => <Link href={`/tag/${slugify(tag)}`}>{tag}</Link>)
