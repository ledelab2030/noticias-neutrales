export type Noticia = {
  id: string
  titulo: string
  resumen: string
  contenido: string
  fecha: string // ISO YYYY-MM-DD
  fuente?: string
  url_fuente?: string
  pais?: string
  etiquetas?: string[]
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
  },
{
  id: 'uprimny-no-es-delito-menor-uribe-2025-08-08',
  titulo: '“No es un delito menor”: Rodrigo Uprimny sobre el caso Álvaro Uribe',
  resumen: 'En entrevista con Noticias Caracol, Rodrigo Uprimny sostuvo que el soborno a testigos y el fraude procesal no son conductas menores por su impacto en la administración de justicia. Explicó que pueden debatirse la detención inmediata o el cálculo de la pena, pero no trivializar la gravedad de los cargos ni desconocer el recorrido judicial del expediente.',
  contenido: `¿Qué dijo? Rodrigo Uprimny afirmó que, de comprobarse, el soborno de testigos y el fraude procesal “no son delitos menores” porque buscan torcer la administración de justicia y afectar a un rival político. Subrayó que en Colombia se tiende a minimizar el falso testimonio, cuando en realidad es una conducta grave que fomenta la impunidad.

¿Cuándo y dónde? Las declaraciones fueron dadas en una entrevista emitida por el canal de YouTube de Noticias Caracol, dentro de un especial con dos juristas sobre el caso Uribe, grabado y difundido en agosto de 2025.

¿Cómo sustenta su posición? Uprimny indicó que el caso ha pasado por múltiples instancias y autoridades —Corte Suprema, jueces de circuito y Tribunal de Bogotá— que negaron la preclusión y habilitaron la acusación, por lo que considera infundada la tesis de una persecución política coordinada. Recordó, además, la intervención de la Corte Constitucional en temas de procedimiento.

¿Qué pruebas resalta? Sobre las interceptaciones telefónicas obtenidas por error, explicó que han sido consideradas válidas por jueces por el criterio de “hallazgo ocasional” y por tratarse, según esos fallos, de un delito en curso que no está cubierto por el privilegio abogado–cliente; aclaró que su admisibilidad puede volver a discutirse en la apelación.

¿Por qué importa? Para Uprimny, manipular testigos o inducir a error a la justicia compromete la igualdad ante la ley y la confianza pública en las instituciones. Dijo que el debate legítimo está en la ejecución inmediata de la pena o en su cuantía, pero no en considerar “menores” las conductas atribuidas.

Contexto sobre tiempos y recorrido: El jurista señaló que parte de la duración del proceso obedeció a intentos previos de preclusión que fueron negados por jueces y por una sala del Tribunal, tras lo cual se presentó la acusación y se adelantó el juicio de primera instancia.

Diferencia con justicia transicional: Uprimny explicó que los beneficios penales en procesos de paz responden a un objetivo distinto (terminar el conflicto y aportar verdad), mientras que el caso Uribe se tramita en la justicia ordinaria y, por tanto, se le aplican penas del régimen común.

Subtítulo — La visión de Alfonso Gómez Méndez: El ex Fiscal y ex Ministro de Justicia destacó que la decisión de la jueza tiene tres componentes —condena, pena y efectividad inmediata— y que, aunque discutible la ejecución inmediata, su adopción cabe dentro del margen de apreciación judicial; agregó que las pruebas podían conducir tanto a condena como a absolución por duda razonable, y que esa valoración corresponde ahora al Tribunal en la apelación.

¿Qué sigue? Ambos juristas coincidieron en que la apelación ante el Tribunal de Bogotá deberá revisar, entre otros puntos, la pena impuesta y la admisibilidad y fuerza probatoria de las interceptaciones, decisiones que podrían confirmar, modificar o revocar aspectos del fallo de primera instancia.

Fuente: Entrevista “Condena contra Álvaro Uribe: dos miradas de los más destacados juristas de Colombia”, publicada en el canal de YouTube de Noticias Caracol. <a href="https://www.youtube.com/live/JhqTQ838c_k?si=e6oQ9rRVeFkmJlk3" target="_blank" rel="noopener noreferrer">Ver entrevista completa en YouTube</a>.`,
  fecha: '2025-08-08'
},
{
  "id": "armenia-azerbaiyan-paz-eeuu-2025-08-08",
  "titulo": "Armenia y Azerbaiyán firman acuerdo de paz histórico con mediación e intereses estratégicos de EE. UU.",
  "resumen": "El 8 de agosto de 2025, Armenia y Azerbaiyán firmaron en la Casa Blanca un tratado de paz tras décadas de conflicto por Nagorno-Karabaj. El acuerdo, mediado por Estados Unidos, incluye un corredor estratégico bajo administración estadounidense y reduce la influencia de Rusia en la región.",
  "contenido": "El 8 de agosto de 2025, en la Casa Blanca (Washington D.C., Estados Unidos), Armenia y Azerbaiyán firmaron un tratado de paz que busca poner fin a casi cuatro décadas de conflicto por Nagorno-Karabaj. El primer ministro armenio, Nikol Pashinyan, declaró que se “abre un capítulo de paz”, mientras que el presidente azerbaiyano, Ilham Aliyev, destacó que estaban “escribiendo una gran nueva historia” (Euronews).\n\nLa firma fue mediada por el presidente de EE. UU., Donald Trump, quien calificó el pacto como “histórico”. Según el comunicado oficial, ambas partes se comprometen a cesar enfrentamientos, reabrir comercio y relaciones diplomáticas, y respetar la soberanía e integridad territorial mutua (Euronews).\n\nEl acuerdo incluye un elemento estratégico: la creación del “Trump Route for International Peace and Prosperity” (TRIPP), un corredor de tránsito que conectará Azerbaiyán con su enclave de Najicheván a través de territorio armenio. Este corredor estará bajo administración estadounidense y otorgará a EE. UU. derechos exclusivos para desarrollar infraestructuras como ferrocarriles, gasoductos, oleoductos, redes de fibra óptica y posiblemente líneas eléctricas (Financial Times, Wikipedia).\n\nEl pacto representa un cambio significativo en la geopolítica del Cáucaso Sur, reduciendo la influencia de Rusia —que medió el alto el fuego de 2020— y posicionando a EE. UU. como un actor central en la región (Washington Post). La Unión Europea ha respaldado el acuerdo, subrayando que aún requiere ratificación formal para consolidarse (Consejo de la UE).\n\nEl conflicto comenzó a finales de la década de 1980 y derivó en una guerra abierta en 1991-1994, seguida de un frágil alto el fuego. En 2020, un acuerdo mediado por Rusia puso fin a una nueva escalada, y en 2023 las fuerzas armenias en Nagorno-Karabaj se rindieron, disolviendo de facto la autoproclamada República de Artsaj. Desde entonces, la región ha estado bajo control total de Azerbaiyán.",
  "fecha": "2025-08-08"
},
{
  id: "colombia-invamer-ago-2025",
  fecha: "2025-08-09", // AAAA-MM-DD
  pais: "Colombia",
  titulo: "Invamer reporta 37% de imagen favorable y 54% desfavorable para el presidente Gustavo Petro",
  fuente: "Invamer (PDF) vía Cambio Colombia",
  url_fuente: "https://raw.githubusercontent.com/ledelab2030/noticias-neutrales/main/public/encuestas/2025-08/invamer-colombia-opina-18.pdf",
  contenido: [
    "La firma Invamer divulgó su medición nacional de opinión pública (Colombia Opina #18), solicitada por Noticias Caracol y Blu Radio y publicada por Cambio Colombia. Según el informe, el 37% de los consultados mantiene una percepción favorable del presidente Gustavo Petro y el 54% expresa una percepción desfavorable.",
    "El trabajo de campo se realizó entre el 30 de julio y el 5 de agosto de 2025 en 84 municipios de todas las regiones, mediante 1.840 entrevistas presenciales en hogares. El estudio empleó muestreo probabilístico multietápico, reporta un margen de error de 2,95% (95% de confianza) y declara cumplimiento de la norma ISO 20252:2019 y la Ley 2494 de 2025.",
    "Entre los resultados, predomina la percepción de ‘mal camino’ sobre la situación del país; como principales problemas se mencionan orden público, desempleo/economía y corrupción. En temas de seguridad, la mayoría se inclina por insistir en diálogos para alcanzar acuerdos y rechaza sacrificar justicia. Las instituciones con mejor imagen son las Fuerzas Militares y la Iglesia Católica, mientras que el Congreso, los partidos y el ELN registran los niveles más bajos."
  ],
  etiquetas: ["encuestas", "opinion-publica", "invamer", "colombia", "presidencia"],
}


]
