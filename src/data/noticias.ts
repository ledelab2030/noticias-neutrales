export type Noticia = {
  id: string
  titulo: string
  resumen: string
  contenido: string
  fecha: string // ISO YYYY-MM-DD
}

export const noticias: Noticia[] = [
  {
    id: 'prueba-filtrado-hoy-2025-08-08',
    titulo: 'Colombia actualiza políticas de salud pública',
    resumen: 'El Ministerio de Salud anunció medidas para fortalecer la atención primaria.',
    contenido: `El 8 de agosto de 2025 el Ministerio de Salud presentó un paquete de reformas orientadas a reforzar la atención primaria...`,
    fecha: '2025-08-08'
  },
  {
    id: 'prueba-filtrado-ayer-2025-08-07',
    titulo: 'Estonia impulsa programa nacional de ciberseguridad',
    resumen: 'El gobierno lanzó un plan estratégico para sectores críticos.',
    contenido: `El 7 de agosto de 2025 el Ministerio de Economía y Comunicaciones presentó su nuevo plan nacional de ciberseguridad...`,
    fecha: '2025-08-07'
  }
]
