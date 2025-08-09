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
  id: 'alerta-dentifrico-colgate-cuidado-oral-funcional-xilitol-2025-08-09',
  titulo: 'Alertas por dentífrico en AL y cuidado oral funcional: opciones seguras y xilitol',
  resumen:
    'Autoridades de la región reportaron reacciones adversas vinculadas a un dentífrico específico. Se resumen prácticas mínimas de cuidado oral funcional, alternativas comerciales de bajo riesgo y preparaciones caseras, incluyendo el rol del xilitol y la postura de la Dra. Ellie Phillips.',
  contenido: [
    'El 9 de agosto de 2025 se reportó una alerta sanitaria regional relacionada con el dentífrico “Colgate Total Clean Mint”, con notificaciones de reacciones adversas en países de América Latina. Las autoridades recomendaron suspender su uso y revisar etiquetas.',
    'El caso reabrió el debate sobre ingredientes potencialmente irritantes y motivó a buscar opciones más seguras. Desde la odontología funcional, el foco es preservar el equilibrio del microbioma oral y potenciar la saliva como defensa natural.',
    'Cuidado mínimo funcional: cepillado dos veces al día (noche imprescindible) con dentífrico de bajo riesgo; limpieza interdental gentil con irrigador o cepillos interproximales, reservando el hilo para restos puntuales y usándolo suavemente tras el cepillado; uso de xilitol tras las comidas para reducir placa, neutralizar ácidos y estimular saliva; espaciar ingestas para favorecer la remineralización salival; limitar bebidas azucaradas o ácidas; y acudir a controles periódicos con el odontólogo.',
    'Opciones de bajo riesgo y caseras: comerciales como pastas con hidroxiapatita, enjuagues suaves con xilitol o CPC sin alcohol, hilos dentales sin PFAS y cepillos interdentales; caseras como enjuague de xilitol (disolver xilitol en agua con unas gotas de menta o eucalipto) y, como complemento, oil pulling con aceite de coco (sin sustituir el cepillado).',
    'La Dra. Ellie Phillips (odontóloga y divulgadora en YouTube) cuestiona el flossing rutinario como pilar en encías inflamadas y enfatiza el papel del xilitol y la saliva para disminuir la placa. Recomienda el video “The TRUTH About Flossing Teeth (What You Aren’t Being Told)”.'
  ],
  fecha: '2025-08-09',
  pais: 'México',
  etiquetas: ['salud', 'odontología funcional', 'xilitol', 'alerta sanitaria'],
  fuente: 'El País (México)',
  url_fuente: 'https://elpais.com/mexico/2025-08-09/la-alerta-sanitaria-por-el-uso-del-dentifrico-colgate-total-clean-mint-se-extiende-por-america-latina.html'
}

]
