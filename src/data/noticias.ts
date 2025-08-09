// src/data/noticias.ts

export type Noticia = {
  id: string
  titulo: string
  resumen: string
  contenido: string[]          // siempre array: 1 párrafo por elemento
  fecha: string                // YYYY-MM-DD
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
      "Encuesta nacional Invamer muestra estabilidad en aprobación presidencial y percepción negativa sobre el rumbo del país.",
    contenido: [
      "La firma Invamer divulgó su medición nacional de opinión pública (Colombia Opina #18), solicitada por Noticias Caracol y Blu Radio y publicada por Cambio Colombia. Según el informe, el 37% de los consultados mantiene una percepción favorable del presidente Gustavo Petro y el 54% expresa una percepción desfavorable.",
      "El trabajo de campo se realizó entre el 30 de julio y el 5 de agosto de 2025 en 84 municipios de todas las regiones, mediante 1.840 entrevistas presenciales en hogares. El estudio empleó muestreo probabilístico multietápico, reporta un margen de error de 2,95% (95% de confianza) y declara cumplimiento de la norma ISO 20252:2019 y la Ley 2494 de 2025.",
      "Entre los resultados, predomina la percepción de ‘mal camino’ sobre la situación del país; como principales problemas se mencionan orden público, desempleo/economía y corrupción. En temas de seguridad, la mayoría se inclina por insistir en diálogos para alcanzar acuerdos y rechaza sacrificar justicia. Las instituciones con mejor imagen son las Fuerzas Militares y la Iglesia Católica, mientras que el Congreso, los partidos y el ELN registran los niveles más bajos.",
      // Agregamos el vínculo legible dentro del contenido porque el page actual no imprime url_fuente:
      'Fuente primaria: <a href="https://raw.githubusercontent.com/ledelab2030/noticias-neutrales/main/public/encuestas/2025-08/invamer-colombia-opina-18.pdf" target="_blank" rel="noopener noreferrer">encuesta completa (PDF)</a>.'
    ],
    fuente: "Invamer (PDF) vía Cambio Colombia",
    url_fuente:
      "https://raw.githubusercontent.com/ledelab2030/noticias-neutrales/main/public/encuestas/2025-08/invamer-colombia-opina-18.pdf",
    etiquetas: ["encuesta", "política", "Colombia"]
  },
  {
    id: "colombia-analisis-uprimny-2025-08-08",
    fecha: "2025-08-08",
    pais: "Colombia",
    titulo:
      "Análisis de Rodrigo Uprimny sobre la consulta popular propuesta por el Gobierno Petro",
    resumen:
      "El jurista explica alcances y limitaciones de la propuesta de consulta popular, destacando retos jurídicos y políticos.",
    contenido: [
      "En entrevista con Noticias Caracol, el jurista Rodrigo Uprimny analizó la propuesta del Gobierno Petro para convocar una consulta popular el 7 de agosto de 2025. Señaló que este mecanismo permitiría a la ciudadanía pronunciarse sobre reformas clave en salud, educación y pensiones.",
      "Uprimny advirtió que, aunque la consulta es legal, sus efectos dependerán de que las preguntas sean claras y específicas. También subrayó que, en caso de ser aprobada por mayoría, tendría carácter vinculante siempre que participe al menos un tercio del censo electoral.",
      'Puedes ver la entrevista completa en <a href="https://www.youtube.com/live/JhqTQ838c_k?si=e6oQ9rRVeFkmJlk3" target="_blank" rel="noopener noreferrer">YouTube</a>.'
    ],
    fuente: "Noticias Caracol",
    url_fuente:
      "https://www.youtube.com/live/JhqTQ838c_k?si=e6oQ9rRVeFkmJlk3",
    etiquetas: ["consulta popular", "análisis", "Colombia"]
  }
]
