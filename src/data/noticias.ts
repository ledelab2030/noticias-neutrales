export type Fuente = string | { nombre: string; url?: string }

// Campos opcionales para no romper el build cuando falte info
export type Noticia = {
  id: string
  fecha: string
  titulo: string

  // opcionales
  pais?: string
  resumen?: string
  contenido?: string[]         // <– ahora opcional
  etiquetas?: string[]
  fuente?: Fuente
  url_fuente?: string
  consecutivo_unico?: string
}

// 👇 Mantén aquí tu export const noticias: Noticia[] = [ ... ] tal como lo tienes.
// (No es necesario tocar las entradas existentes)

export const noticias: Noticia[] = [
{
    id: "colombia-invamer-ago-2025",
    fecha: "2025-08-09",
    pais: "Colombia",
    titulo: "Invamer reporta 37% de imagen favorable y 54% desfavorable para el presidente Gustavo Petro",
    resumen: "Encuesta nacional Invamer revela que la imagen favorable del presidente se mantiene estable, con principales preocupaciones en orden público, economía y corrupción.",
    contenido: [
      "La firma Invamer divulgó su medición nacional de opinión pública (Colombia Opina #18), solicitada por Noticias Caracol y Blu Radio y publicada por Cambio Colombia. Según el informe, el 37% de los consultados mantiene una percepción favorable del presidente Gustavo Petro y el 54% expresa una percepción desfavorable.",
      "El trabajo de campo se realizó entre el 30 de julio y el 5 de agosto de 2025 en 84 municipios de todas las regiones, mediante 1.840 entrevistas presenciales en hogares. El estudio empleó muestreo probabilístico multietápico, reporta un margen de error de 2,95% (95% de confianza) y declara cumplimiento de la norma ISO 20252:2019 y la Ley 2494 de 2025.",
      "Entre los resultados, predomina la percepción de ‘mal camino’ sobre la situación del país; como principales problemas se mencionan orden público, desempleo/economía y corrupción. En temas de seguridad, la mayoría se inclina por insistir en diálogos para alcanzar acuerdos y rechaza sacrificar justicia. Las instituciones con mejor imagen son las Fuerzas Militares y la Iglesia Católica, mientras que el Congreso, los partidos y el ELN registran los niveles más bajos."
    ],
    fuente: "Invamer (PDF) vía Cambio Colombia",
    url_fuente: "https://raw.githubusercontent.com/ledelab2030/noticias-neutrales/main/public/encuestas/2025-08/invamer-colombia-opina-18.pdf"
  },

{
    id: "colombia-analisis-uprimny-2025-08-08",
    fecha: "2025-08-08",
    pais: "Colombia",
    titulo: "Análisis de Rodrigo Uprimny sobre la consulta popular propuesta por el Gobierno Petro",
    resumen: "El jurista explica alcances y limitaciones de la propuesta de consulta popular, destacando retos jurídicos y políticos.",
    contenido: [
      "En entrevista con Noticias Caracol, el jurista Rodrigo Uprimny analizó la propuesta del Gobierno Petro para convocar una consulta popular el 7 de agosto de 2025. Señaló que este mecanismo permitiría a la ciudadanía pronunciarse sobre reformas clave en salud, educación y pensiones.",
      "Uprimny advirtió que, aunque la consulta es legal, sus efectos dependerán de que las preguntas sean claras y específicas. También subrayó que, en caso de ser aprobada por mayoría, tendría carácter vinculante siempre que participe al menos un tercio del censo electoral.",
      "Puedes ver la entrevista completa en el canal de YouTube de Noticias Caracol: https://www.youtube.com/live/JhqTQ838c_k?si=e6oQ9rRVeFkmJlk3"
    ],
    fuente: "Noticias Caracol",
    url_fuente: "https://www.youtube.com/live/JhqTQ838c_k?si=e6oQ9rRVeFkmJlk3"
  },
  
  {
   id: "ledelab-lanza-nuevo-portal-2025-08-15",
    fecha: "2025-08-12",
    pais: "Estonia",
    titulo: "LedeLab Group OÜ completa el lanzamiento de su nuevo portal corporativo con feed de noticias de actualidad",
    resumen: "Encuesta nacional Invamer revela que la imagen favorable del presidente se mantiene estable, con principales preocupaciones en orden público, economía y corrupción.",
    contenido: [
      "Pçarrafo 1",
      "Pçarrafo 2",
      "Pçarrafo 3",
    ],
    fuente: "Sitio LedeLab Group OU",
    url_fuente: "https://www.ledelab.co"
  },
{
  id: 'washington-dc-datos-y-residentes-contradicen-a-trump-2025-08-12',
  fecha: '2025-08-12',
  titulo: 'Datos y residentes de Washington contradicen a Trump sobre “crisis de violencia”',
  pais: 'Estados Unidos',
  resumen:
    'La Casa Blanca asumió control temporal del MPD y reforzó el despliegue federal en Washington D. C. bajo el Home Rule Act. Datos oficiales reportados por la prensa muestran caídas del delito violento en 2024 y en lo corrido de 2025.',
  contenido: [
    '¿Qué pasó? Entre el 11 y el 12 de agosto de 2025, la Casa Blanca declaró una emergencia de criminalidad en Washington D. C., invocó disposiciones del Home Rule Act y ordenó a la Alcaldía poner a disposición el Metropolitan Police Department (MPD) para fines federales, con apoyo adicional de la Guardia Nacional.',
    '¿Dónde y cuándo? La medida rige en el Distrito de Columbia y se comunicó públicamente el 12 de agosto de 2025, con presencia reforzada de personal de seguridad en zonas como el National Mall y distintos vecindarios.',
    '¿Quién tomó la decisión? La decisión fue anunciada por el Ejecutivo de Estados Unidos. La coordinación operativa incluyó a agencias federales y a la Guardia Nacional, además del MPD.',
    '¿Por qué? El Gobierno federal argumentó que persisten problemas de seguridad que requieren intervención excepcional para proteger instalaciones federales, personal y visitantes.',
    'Marco legal. El Home Rule Act prevé que, en condiciones especiales, el Presidente pueda solicitar los servicios del MPD para fines federales por un periodo limitado, sujeto a controles temporales que requieren intervención del Congreso para extensiones más allá del plazo inicial.',
    'Datos delictivos. Según cifras oficiales difundidas por medios confiables, 2024 cerró con una disminución relevante del delito violento respecto a 2023, y en lo corrido de 2025 se observan caídas adicionales en varias categorías, aunque subsisten retos como el robo de vehículos.',
    'Percepción local. Testimonios de residentes consultados por la prensa describen una vida cotidiana sin sensación generalizada de amenaza, y cuestionan la necesidad de un despliegue militar en la ciudad.',
    'Reacción de autoridades locales. La alcaldesa de Washington D. C., Muriel Bowser, calificó la medida como inusual y expresó preocupación por su alcance, reavivando el debate sobre la autonomía del Distrito y el estatus de Estado.',
    'Operación en campo. En los primeros días se reportaron patrullajes combinados y detenciones en distintos puntos, dentro de un esquema de vigilancia extendida anunciado por las autoridades.',
    'Clave del debate. El contraste entre la narrativa de “crisis” y las series oficiales de criminalidad es el eje de la discusión pública: mientras las cifras agregadas muestran descensos, el Gobierno federal enfatiza categorías específicas de delito para justificar la intervención.',
    'Lo siguiente. La continuidad del control federal más allá del periodo inicial depende de decisiones del Congreso, conforme a los mecanismos de control previstos en la legislación aplicable.',
    'Nota editorial del proyecto: la presente noticia se limita a hechos verificados, series de datos oficiales y declaraciones públicas de autoridades y residentes, sin incluir valoración política ni especulaciones.'
  ],
  etiquetas: [
    'seguridad',
    'política pública',
    'Home Rule Act',
    'Guardia Nacional',
    'Muriel Bowser',
    'Donald Trump',
    'Washington D. C.'
  ],
  fuente: 'El País',
  url_fuente: 'https://elpais.com/us/2025-08-12/los-datos-y-los-residentes-de-washington-contradicen-a-trump-nunca-me-he-sentido-amenazada.html'
}

];
