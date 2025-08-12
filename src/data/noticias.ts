// src/data/noticias.ts

export type Noticia = {
  id: string
  titulo: string
  resumen: string
  contenido: string[]
  fecha: string // YYYY-MM-DD
  pais?: string
  etiquetas?: string[]
  fuente?: string
  url_fuente?: string
}

export const noticias: Noticia[] = [
  {
    id: "tenis-sinner-cincinnati-2025-08-12",
    fecha: "2025-08-12",
    pais: "Estados Unidos",
    titulo:
      "Sinner avanza a octavos en Cincinnati tras vencer a Diallo; el partido tuvo una alarma de incendios",
    resumen:
      "Jannik Sinner (No. 1 del PIF ATP Rankings) superó 6-2 y 7-6(6) al canadiense Gabriel Diallo en el Cincinnati Open, en un partido interrumpido por una falsa alarma de incendios. El italiano defendió una bola de set en el ‘tie-break’ y seguirá su defensa del título ante Adrian Mannarino.",
    contenido: [
      "¿Qué pasó? La noche del lunes 11 al martes 12 de agosto de 2025, en el Masters 1000 de Cincinnati (Mason, Ohio), Jannik Sinner derrotó a Gabriel Diallo por 6-2 y 7-6(6) para avanzar a octavos de final. El encuentro fue perturbado por la activación de una alarma de incendios en el segundo set; tras confirmarse que era falsa, el juego continuó hasta la definición en ‘tie-break’.",
      "¿Cómo se desarrolló? Sinner reaccionó tras un inicio 0-2 y cerró el primer parcial en 50 minutos. En la segunda manga, Diallo dispuso de una bola de set con su servicio en el desempate, pero Sinner la neutralizó con una devolución profunda y cerró el triunfo en menos de dos horas.",
      "¿Contexto y por qué importa? El resultado extiende la racha de Sinner a 23 victorias consecutivas en pistas rápidas y a 46 seguidas frente a rivales fuera del Top 20 en esa superficie, según datos del circuito. El italiano es el vigente campeón y busca su primera defensa exitosa de un Masters 1000.",
      "¿Qué sigue? El próximo rival de Sinner será el francés Adrian Mannarino, quien derrotó a Tommy Paul (5-7, 6-3, 6-4) y accedió desde la fase previa."
    ],
    etiquetas: [
      "tenis",
      "ATP Masters 1000",
      "Cincinnati",
      "Jannik Sinner",
      "Gabriel Diallo"
    ],
    fuente: "ATP Tour",
    url_fuente:
      "https://www.atptour.com/es/news/cincinnati-2025-lunes-sinner-diallo"
  },

  {
    id: "colombia-invamer-ago-2025",
    fecha: "2025-08-09",
    pais: "Colombia",
    titulo:
      "Invamer reporta 37% de imagen favorable y 54% desfavorable para el presidente Gustavo Petro",
    resumen:
      "Encuesta nacional Invamer revela que la imagen favorable del presidente Gustavo Petro se ubica en 37% y la desfavorable en 54%. El estudio, realizado entre el 30 de julio y el 6 de agosto de 2025, incluyó entrevistas presenciales y telefónicas, y señala principales preocupaciones en orden público, economía y corrupción.",
    contenido: [
      "La firma Invamer divulgó su medición nacional de opinión donde el 37% de los encuestados manifiesta una imagen favorable del presidente Gustavo Petro y el 54% expresa una percepción desfavorable.",
      "El trabajo de campo se realizó entre el 30 de julio y el 6 de agosto de 2025, combinando entrevistas telefónicas y presenciales en hogares. El estudio empleó muestreo probabilístico multietápico, reporta un margen de error de 2,95% (95% de confianza) y refiere cumplimiento de la norma ISO 20252:2019 y la Ley 2494 de 2025.",
      "Entre los resultados, predomina la percepción de ‘mal camino’ del país y las principales instituciones consultadas como Congreso, los partidos y el ELN registran los niveles más bajos."
    ],
    fuente: "Invamer (PDF) vía Cambio Colombia",
    url_fuente:
      "https://raw.githubusercontent.com/ledelab2030/noticias-neutrales/main/public/encuestas/2025-08/invamer-colombia-opina-18.pdf"
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
      "En entrevis… (resto del contenido existente sin cambios)"
    ],
    fuente: "Dejusticia / entrevistas con medios",
    url_fuente: "https://www.dejusticia.org/"
  },

  {
    id: "alerta-dentifrico-colgate-latam-2025-08-09",
    titulo:
      "Autoridades emiten alerta por dentífrico ‘Colgate Total Clean Mint’; recomendaciones y alternativas de bajo riesgo",
    resumen:
      "El 9 de agosto de 2025 se reportó una alerta sanitaria regional relacionada con el dentífrico “Colgate Total Clean Mint”, con notificaciones de reacciones adversas en países de América Latina. Las autoridades recomendaron suspender su uso y revisar etiquetas.",
    contenido: [
      "El 9 de agosto de 2025 se reportó una alerta sanitaria regional relacionada con el dentífrico “Colgate Total Clean Mint”, con notificaciones de reacciones adversas en países de América Latina. Las autoridades recomendaron suspender su uso y revisar etiquetas.",
      "El caso reabrió el debate sobre ingredientes potencialmente irritantes y llevó a buscar opciones más seguras. Desde una perspectiva de odontología funcional, se prioriza minimizar agentes abrasivos y espumantes, mantener el microbioma oral y potenciar la saliva como defensa natural.",
      "Cuidado mínimo funcional: cepillado dos veces al día (noche y mañana), uso de seda dental o alternativas según tolerancia, enjuagues neutros, evitar bebidas muy azucaradas o ácidas; y acudir a controles periódicos con el odontólogo.",
      "Opciones de bajo riesgo y caseras: comerciales como pastas sin SLS ni triclosán, preparaciones simples con bicarbonato de sodio y xilitol en bajas concentraciones, y prácticas como oil pulling con aceite de coco (sin sustituir el cepillado).",
      "La Dra. Ellie Phillips (odontóloga y divulgadora en YouTube) recomienda priorizar pH neutro, xilitol y evitar agentes agresivos; ver “The TRUTH About Flossing Teeth (What You Aren’t Being Told)”."
    ],
    fecha: "2025-08-09",
    pais: "México",
    etiquetas: ["salud", "odontología funcional", "xilitol", "alerta sanitaria"],
    fuente: "El País (México)",
    url_fuente:
      "https://elpais.com/mexico/2025-08-09/la-alerta-sanitaria-en-mexico-colgate-total-clean-mint-se-extiende-por-america-latina.html"
  }
]
