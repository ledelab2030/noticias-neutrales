// src/data/noticias.ts

export type Noticia = {
  id: string
  titulo: string
  resumen: string
  contenido: string[] // siempre array de párrafos
  fecha: string // ISO YYYY-MM-DD
  pais?: string
  etiquetas?: string[]
  fuente?: string
  url_fuente?: string
}

export const noticias: Noticia[] = [
  {
    id: "colombia-invamer-ago-2025",
    fecha: "2025-08-09",
    pais: "Colombia",
    titulo:
      "Invamer reporta 37% de imagen favorable y 54% desfavorable para el presidente Gustavo Petro",
    resumen:
      "Encuesta Invamer revela que la imagen favorable del presidente Gustavo Petro se mantiene estable, mientras la mayoría percibe que el país va por mal camino.",
    contenido: [
      "La firma Invamer divulgó su medición nacional de opinión pública (Colombia Opina #18), solicitada por Noticias Caracol y Blu Radio y publicada por Cambio Colombia. Según el informe, el 37% de los consultados mantiene una percepción favorable del presidente Gustavo Petro y el 54% expresa una percepción desfavorable.",
      "El trabajo de campo se realizó entre el 30 de julio y el 5 de agosto de 2025 en 84 municipios de todas las regiones, mediante 1.840 entrevistas presenciales en hogares. El estudio empleó muestreo probabilístico multietápico, reporta un margen de error de 2,95% (95% de confianza) y declara cumplimiento de la norma ISO 20252:2019 y la Ley 2494 de 2025.",
      "Entre los resultados, predomina la percepción de ‘mal camino’ sobre la situación del país; como principales problemas se mencionan orden público, desempleo/economía y corrupción. En temas de seguridad, la mayoría se inclina por insistir en diálogos para alcanzar acuerdos y rechaza sacrificar justicia. Las instituciones con mejor imagen son las Fuerzas Militares y la Iglesia Católica, mientras que el Congreso, los partidos y el ELN registran los niveles más bajos."
    ],
    etiquetas: ["encuesta", "política", "Colombia"],
    fuente: "Invamer (PDF) vía Cambio Colombia",
    url_fuente:
      "https://raw.githubusercontent.com/ledelab2030/noticias-neutrales/main/public/encuestas/2025-08/invamer-colombia-opina-18.pdf"
  },

  // Ejemplo de noticia con 1 párrafo (también array)
  {
    id: "colombia-salud-2025-08-08",
    fecha: "2025-08-08",
    pais: "Colombia",
    titulo: "Colombia actualiza políticas de salud pública",
    resumen:
      "El Ministerio de Salud anunció medidas para fortalecer la atención primaria.",
    contenido: [
      "El 8 de agosto de 2025 el Ministerio de Salud presentó un paquete de reformas orientadas a reforzar la atención primaria..."
    ],
    etiquetas: ["salud", "Colombia"],
    fuente: "Ministerio de Salud",
    url_fuente: "https://www.minsalud.gov.co/"
  }

  // Agrega aquí el resto de tus noticias siguiendo el mismo formato
]
