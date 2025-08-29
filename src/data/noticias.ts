// src/data/noticias.ts
import { TAGS } from "@/data/tags"

// Tipos base (codnnv1) + extensión para imagen OG/Twitter
export type Fuente =
  | string
  | {
      nombre: string
      url?: string
    }

export type NoticiaRaw = {
  id: string
  fecha: string
  titulo: string

  // opcionales
  pais?: string
  resumen?: string
  contenido?: string[]
  etiquetas?: string[]
  fuente?: Fuente
  url_fuente?: string
  consecutivo_unico?: string

  // opcional: portada para previews (ruta absoluta o relativa a /public)
  imagen?: string
}

export type Noticia = NoticiaRaw

// Normalizador de etiquetas (case-insensitive, dedup, solo catálogo de tags.ts)
function sanitizeTags(tags: string[] = []): string[] {
  const canon = new Map<string, string>(TAGS.map((t) => [t.toLowerCase(), t]))
  const out: string[] = []
  const seen = new Set<string>()
  for (const raw of tags) {
    const key = (raw ?? "").trim().toLowerCase()
    if (!key) continue
    const hit = canon.get(key)
    if (hit && !seen.has(hit)) {
      seen.add(hit)
      out.push(hit)
    }
  }
  return out
}
const noticiasRaw: NoticiaRaw[] = [
  // 🔽 PEGAR aquí debajo las noticias:
{
  id: "2025-08-29-negacion-origen-humano-cambio-climatico",
  fecha: "2025-08-29",
  titulo: "¿Qué porcentaje niega el origen humano del cambio climático? Panorama comparado y cifras recientes",
  pais: "Internacional",
  resumen: "No existe una cifra global única y comparable, pero los datos más recientes muestran que la negación del origen humano del cambio climático es minoritaria en la Unión Europea y Colombia, y mayor en Estados Unidos y Canadá según la métrica utilizada.",
  etiquetas: ["encuestas", "investigación", "colombia", "estados unidos"],
  contenido: [
    "No existe una cifra global única y estrictamente comparable sobre cuánta población niega el origen humano del cambio climático, porque las encuestas formulan preguntas distintas (p. ej., 'principalmente humano' vs. 'principalmente natural' o 'no está ocurriendo'). Este análisis usa fuentes oficiales y académicas recientes y reporta, por país o región, la mejor aproximación disponible con esa definición operativa.",
    
    "En la Unión Europea, el Eurobarómetro de junio de 2025 indica que el 84% de los europeos está de acuerdo con que el cambio climático está causado por la actividad humana. En consecuencia, hasta un 16% no lo atribuye a causas humanas (porque discrepa o no responde), lo que ofrece un coto superior para la negación del origen humano a escala de la UE.",
    
    "En Estados Unidos, la encuesta 'Climate Change in the American Mind' (Yale/George Mason) para otoño de 2024, publicada en febrero de 2025, muestra que el 60% cree que el calentamiento global es causado principalmente por actividades humanas; el 28% piensa que se debe principalmente a cambios naturales y el 14% cree que 'no está ocurriendo'. Tomadas de manera conservadora, estas cifras implican que la proporción que no atribuye principalmente a causas humanas se sitúa entre el 28% (si solo se considera 'principalmente natural') y alrededor del 42% (si se suma además quienes dicen que no está ocurriendo).",
    
    "En Colombia, la EIB Climate Survey 2023 (Banco Europeo de Inversiones) reporta que el 80% de los colombianos reconoce que acciones humanas como la quema de combustibles fósiles son el principal factor del cambio climático. Esto implica que alrededor del 20% no atribuye principalmente a la actividad humana el fenómeno.",
    
    "En Canadá, el programa PARCA del Gobierno de Canadá (Impact Canada) señala que, a marzo de 2025, aproximadamente el 74% de los canadienses está de acuerdo (total o parcialmente) con que la actividad humana es la causa principal del cambio climático. De forma complementaria, síntesis académicas de opinión pública señalan variaciones por año y casa encuestadora, pero convergen en que la negación del origen humano es claramente minoritaria.",
    
    "En conclusión, dependiendo de la fuente y la redacción de las preguntas, la negación del origen humano del cambio climático varía entre contextos. Con las mediciones más recientes, se sitúa en torno a 'hasta 16%' en la UE; entre 28% y ~42% en EE. UU. (según se incluya a quienes creen que 'no está ocurriendo'); cerca del 20% en Colombia; y alrededor de una cuarta parte en Canadá (complemento del 74% que atribuye causa principal humana). Estas estimaciones deben leerse con cautela por diferencias de cuestionario, pero ofrecen una base factual y comparada para el debate público.",
    
    "Fuentes citadas:",
    "1) [Comisión Europea — Eurobarómetro (junio 2025)](https://europa.eu/eurobarometer/surveys/detail/3472)",
    "2) [Yale Program on Climate Change Communication — Climate Change in the American Mind (febrero 2025)](https://climatecommunication.yale.edu/publications/climate-change-in-the-american-mind-beliefs-attitudes-fall-2024/toc/2/)",
    "3) [Banco Europeo de Inversiones — EIB Climate Survey (septiembre 2023, Colombia)](https://www.eib.org/en/press/all/2023-307-9-colombians-in-10-demand-stricter-climate-policies-eib-survey-reveals)",
    "4) [Impact Canada (Gobierno de Canadá) — PARCA Wave 3&4 (marzo 2025)](https://impact.canada.ca/en/behavioural-science/parca/wave3_4)"
  ],
  fuente: "LedeLab",
  consecutivo_unico: "20250829-01"
},

  {
  id: 'desempleo-colombia-julio-2025-08-29',
  fecha: '2025-08-29',
  titulo: 'Desempleo en Colombia cayó a 8,8% en julio, la cifra más baja desde 2001',
  pais: 'Colombia',
  resumen: 'El Departamento Administrativo Nacional de Estadística (DANE) informó que la tasa de desempleo en Colombia fue de 8,8% en julio de 2025, el nivel más bajo registrado para ese mes en los últimos 24 años.',
  contenido: [
    'El DANE reportó que la tasa de desempleo en Colombia durante julio de 2025 fue de 8,8%, lo que representa la cifra más baja para este mes desde 2001. En comparación, en julio de 2024 la tasa había sido de 9,6%.',
    'Según la entidad, el número de personas ocupadas alcanzó los 24,2 millones, mientras que la población desocupada se redujo a 2,3 millones. Las ciudades con mayores reducciones en desempleo fueron Bogotá, Medellín y Cali.',
    'La tasa de participación laboral se ubicó en 64,3%, con un ligero aumento frente al mismo mes del año anterior. El DANE destacó que el comportamiento estuvo impulsado por sectores como comercio, transporte, alojamiento y servicios de comida.',
    'El ministro de Trabajo señaló que la recuperación económica y los programas de empleabilidad han contribuido a esta mejora. Sin embargo, expertos advierten que aún persisten retos relacionados con la informalidad laboral y la calidad del empleo generado.',
    'Fuentes citadas:',
    '1) DANE. *Boletín técnico de mercado laboral julio 2025*. https://www.dane.gov.co/index.php/estadisticas-por-tema/mercado-laboral',
    '2) El Espectador. *Desempleo en Colombia cae a 8,8%, la cifra más baja para un julio desde 2001*. https://www.elespectador.com/economia/desempleo-en-colombia-cae-a-88-la-cifra-mas-baja-para-un-julio-desde-2001/'
  ],
  etiquetas: ['economía', 'colombia', 'resultados'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/economia/desempleo-en-colombia-cae-a-88-la-cifra-mas-baja-para-un-julio-desde-2001/' },
  url_fuente: 'https://www.elespectador.com/economia/desempleo-en-colombia-cae-a-88-la-cifra-mas-baja-para-un-julio-desde-2001/',
  consecutivo_unico: '20250829-01'
},

  {
  id: 'ivan-cepeda-campana-presidencial-2025-08-27',
  fecha: '2025-08-27',
  titulo: 'El Congresista Iván Cepeda Castro se perfila como figura clave en la campaña presidencial en Colombia',
  pais: 'Colombia',
  resumen: '“Yo creo que no se pueden atribuir los problemas de la violencia a la búsqueda de la paz, no comparto esa visión. Esa visión nos quiere retrotraer a épocas donde los gobiernos no tenían política de paz”, explicó Cepeda.',
  contenido: [
    'El senador Iván Cepeda, miembro del Polo Democrático Alternativo, se proyecta como un actor relevante en el inicio de la campaña presidencial de 2026 en Colombia. Su intervención reciente, en la que defendió la política de paz, ha generado eco en un escenario político marcado por la polarización y la redefinición de alianzas.',
    '“Yo creo que no se pueden atribuir los problemas de la violencia a la búsqueda de la paz, no comparto esa visión. Esa visión nos quiere retrotraer a épocas donde los gobiernos no tenían política de paz”, señaló Cepeda al referirse a los debates sobre seguridad y conflicto en el país.',
    'Cepeda ha tenido un papel protagónico en la defensa de los acuerdos de paz y en debates sobre derechos humanos. Su figura es observada tanto por sectores que buscan consolidar un proyecto político en torno a la paz, como por críticos que cuestionan su postura.',
    'La publicación destaca que, más allá de definiciones formales, la figura de Cepeda está llamada a ser uno de los referentes de la discusión política de cara a las elecciones de 2026 en Colombia.',
    'Además de su rol político, Cepeda ha sido reconocido por acudir sistemáticamente a las vías legales para sustentar sus denuncias e iniciativas. Un ejemplo de ello es el proceso judicial en el que fue reconocida su condición de víctima frente al expresidente Álvaro Uribe Vélez.',
    'El 1 de agosto de 2025, el Juzgado 44 Penal del Circuito de Bogotá condenó a Uribe a 12 años de prisión domiciliaria, más una multa millonaria e inhabilidad política, por fraude procesal y soborno en actuación penal. La jueza Sandra Liliana Heredia fundamentó la decisión en pruebas como interceptaciones legales, registros audiovisuales y testimonios corroborados, entre ellos el de Juan Guillermo Monsalve.',
    'La misma jueza estableció que el caso tuvo origen en una denuncia presentada años atrás por el propio Uribe contra Cepeda, la cual fue archivada por falta de fundamento. A partir de esa investigación se abrieron nuevos hallazgos que derivaron en el proceso actual contra el exmandatario. En la sentencia, Cepeda fue ratificado como víctima.',
    'El Tribunal Superior de Bogotá otorgó la libertad provisional a Uribe mientras se resuelve la apelación interpuesta por su defensa. El proceso ahora pasa a segunda instancia, en donde se definirá si se confirma o se modifica la condena.',
    'Tras conocerse la sentencia, los hijos de Uribe y dirigentes del Centro Democrático, entre ellos el actual presidente de esa colectividad, Gabriel Vallejo, intensificaron sus críticas y señalamientos contra Cepeda. Ante lo que consideró una campaña de hostigamiento y difamación, el senador, junto con el abogado Miguel Ángel del Río, presentó una nueva denuncia penal contra Uribe, sus hijos y Vallejo por calumnia agravada, injuria agravada, hostigamiento agravado y amenazas.',
    'De este modo, Cepeda ha reiterado que su actuación se enmarca en la legalidad y en el respeto a las instituciones, insistiendo en que cualquier controversia debe resolverse mediante la justicia y no a través de presiones políticas o mediáticas.'
  ],
  etiquetas: ['colombia','política','gustavo petro','encuestas','ivan cepeda'],
  fuente: { nombre: 'France 24', url: 'https://www.france24.com/es/am%C3%A9rica-latina/20250827-iv%C3%A1n-cepeda-la-figura-de-izquierda-que-puede-sacudir-la-campa%C3%B1a-presidencial-en-colombia' },
  url_fuente: 'https://www.france24.com/es/am%C3%A9rica-latina/20250827-iv%C3%A1n-cepeda-la-figura-de-izquierda-que-puede-sacudir-la-campa%C3%B1a-presidencial-en-colombia',
  consecutivo_unico: '20250827-01'
},

{
  id: 'judicial-penaliza-tortura-claudia-duque-2025-08-25',
  fecha: '2025-08-25',
  titulo: 'Condenan a exdirector de inteligencia del DAS por tortura psicológica a periodista',
  pais: 'Colombia',
  resumen: 'El juzgado Décimo Penal Especializado de Bogotá condenó a Giancarlo Auque de Silvestri por tortura agravada contra la periodista Claudia Julieta Duque, investigadora del crimen de Jaime Garzón.',
  contenido: [
    'El 25 de agosto de 2025, el juzgado Décimo Penal Especializado de Bogotá declaró culpable a Giancarlo Auque de Silvestri, exdirector de inteligencia del extinto Departamento Administrativo de Seguridad (DAS), por el delito de tortura agravada en contra de la periodista investigadora Claudia Julieta Duque ([El Espectador](https://www.elespectador.com/judicial/condenan-a-exfuncionario-del-das-por-tortura-a-periodista-que-investigo-caso-de-jaime-garzon/)).',
    'La sentencia impone una pena de 12 años y medio de prisión, junto con una multa de 1.200 salarios mínimos legales. Además, las autoridades solicitaron una circular roja de Interpol para su localización, dado que no se tiene información sobre su paradero desde 2016, cuando fue dejado en libertad.',
    'Según el fallo, Auque de Silvestri participó en un plan coordinado para ejercer tortura psicológica contra Duque durante sus investigaciones sobre el asesinato de Jaime Garzón, mediante intimidación a su familia, en particular a su hija.',
    'La jueza Martha Cecilia Artunduaga Guaraca advirtió que estos actos también constituyen violencia de género, ejercida por ser mujer y por su labor periodística e investigativa, lo cual fue empleado como estrategia para silenciarla.'
  ],
  etiquetas: ['Colombia','justicia','periodismo','derechos-humanos'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/judicial/condenan-a-exfuncionario-del-das-por-tortura-a-periodista-que-investigo-caso-de-jaime-garzon/' },
  consecutivo_unico: '20250825-01'
}
,
  {
  id: 'estilo-vida-riqueza-tranquilidad-2025-08-25',
  fecha: '2025-08-25',
  titulo: 'La verdadera riqueza: la tranquilidad de ceder el paso',
  pais: 'Colombia',
  resumen: 'En un mundo acelerado, ceder el paso a peatones o vehículos revela más que cortesía: es un signo de tranquilidad y de verdadera abundancia emocional.',
  contenido: [
    'En las ciudades modernas, el tráfico se convierte en un espejo de la forma en que vivimos. Mientras algunos corren contra el reloj, otros encuentran en pequeños gestos una oportunidad para demostrar respeto y serenidad. Ceder el paso a un peatón o a otro vehículo es uno de esos actos sencillos que revelan más de lo que parece.',
    'No es raro ver a personas con gran éxito económico, conduciendo con prisa, sin detenerse siquiera unos segundos para permitir el paso. Paradójicamente, aunque poseen abundancia material, parecen carecer de lo más valioso: la calma. Tener dinero no siempre significa tener tiempo, y menos aún la disposición para regalar medio minuto en beneficio de otro.',
    'Ceder el paso no retrasa la vida, al contrario, la dignifica. Ese gesto muestra riqueza emocional, equilibrio y un entendimiento profundo de que la vida no se mide por segundos ganados, sino por la calidad de nuestras interacciones diarias. La tranquilidad, en ese sentido, es un signo de prosperidad que no se puede comprar.',
    'Al final, la verdadera abundancia no se refleja en el tamaño del vehículo ni en la velocidad con la que se llega a destino, sino en la capacidad de vivir con paciencia, respeto y humanidad. Porque detenerse unos instantes puede ser la diferencia entre el caos y la armonía, entre la prisa y la paz.'
  ],
  etiquetas: ['estilo de vida','tranquilidad','convivencia'],
  fuente: { nombre: 'Redacción Noticias Neutrales' },
  consecutivo_unico: '20250825-01'
},

{
  id: 'opinion-barranquilla-obras-sin-memoria-2025-08-19',
  fecha: '2025-08-19',
  titulo: 'Barranquilla: obras urbanas cuestionadas por falta de memoria y sentido cultural',
  pais: 'Colombia',
  resumen: 'En una columna publicada en Las2Orillas se critica que las obras emblemáticas de Barranquilla, como la “Ventana al Mundo” y la “Aleta del Tiburón”, no se integran con la memoria histórica ni con la identidad cultural de la ciudad.',
  contenido: [
    'La columna publicada en *Las2Orillas* reflexiona sobre el desarrollo urbano de Barranquilla y el impacto de las obras que han transformado la ciudad en los últimos años.',
    'El autor sostiene que, aunque se han llenado calles y espacios con monumentos y estructuras llamativas, muchas de ellas no guardan relación con la memoria histórica ni con la identidad cultural de la ciudad.',
    'Como ejemplo se menciona la “Ventana al Mundo”, inaugurada en 2018 como un gran ícono visual en la entrada de la ciudad. Pese a su imponencia y colorido, la obra ha sido cuestionada por carecer de referencias claras a la tradición barranquillera y a su patrimonio cultural.',
    'Otro caso citado es la “Aleta del Tiburón”, escultura monumental vinculada al equipo de fútbol Junior de Barranquilla. Aunque ha generado identidad en torno a la afición deportiva, la crítica señala que su ubicación y magnitud responden más a una apuesta mediática que a un plan de urbanismo integrado con la historia local.',
    'La columna también advierte que la acumulación de obras de este tipo —estructuras de gran escala, pensadas como hitos aislados— produce una sensación de fragmentación urbana. Según el autor, en lugar de fortalecer la identidad de Barranquilla, refuerzan la idea de un “decorado” sin raíces.',
    'Finalmente, se invita a reflexionar sobre la necesidad de que las intervenciones públicas y privadas en el espacio urbano no se limiten a lo estético o lo funcional, sino que integren memoria, historia y cultura como ejes centrales de planificación y diseño.',
    'Fuente original: (https://www.las2orillas.co/__trashed-328/)'
  ],
  etiquetas: ['colombia','editorial','medios','política'],
  fuente: { nombre: 'Las2Orillas', url: 'https://www.las2orillas.co/__trashed-328/' },
  consecutivo_unico: '20250819-01'
},

  {
  id: 'empleados-olimpica-tercerizacion-mintrabajo-2025-08-19',
  fecha: '2025-08-19',
  titulo: 'Ministerio de Trabajo afirma que 90% de empleados de Olímpica están tercerizados',
  pais: 'Colombia',
  resumen: 'El Ministerio de Trabajo informó que cerca del 90% de los empleados vinculados a la cadena de supermercados Olímpica trabajan mediante tercerización, situación que será objeto de investigación y medidas de inspección laboral.',
  contenido: [
    'El Ministerio de Trabajo de Colombia aseguró que alrededor del 90% de los empleados de la cadena de supermercados Olímpica se encuentran vinculados bajo esquemas de tercerización. La entidad advirtió que esta práctica podría desconocer derechos laborales y afectar las condiciones de los trabajadores.',
    'Según el pronunciamiento oficial, se desplegarán equipos de inspección para verificar la legalidad de las contrataciones y determinar si existe incumplimiento de la normatividad vigente. El Ministerio recordó que la tercerización laboral no puede usarse para evadir responsabilidades legales de los empleadores.',
    'Olímpica es una de las principales cadenas de supermercados del país, con operaciones en varias ciudades y presencia significativa en la Costa Caribe. El Gobierno indicó que, de encontrarse irregularidades, se aplicarán sanciones y se exigirá la formalización de los empleados afectados.',
    'Fuentes citadas:',
    'Ministerio de Trabajo de Colombia: https://www.mintrabajo.gov.co/',
    'La República: https://www.larepublica.co/empresas/ministerio-de-trabajo-aseguro-que-90-de-empleados-de-olimpica-son-tercerizados-4205112'
  ],
  etiquetas: ['colombia','economía','trabajo','empleo'],
  fuente: { nombre: 'La República', url: 'https://www.larepublica.co/empresas/ministerio-de-trabajo-aseguro-que-90-de-empleados-de-olimpica-son-tercerizados-4205112' },
  consecutivo_unico: '20250819-01'
},

  {
  id: 'clima-puntos-inflexion-economist-2025-08-13',
  fecha: '2025-08-13',
  titulo: 'El clima se acerca a puntos de inflexión irreversibles, advierte The Economist',
  pais: 'Internacional',
  resumen: 'Un informe de The Economist alerta que el sistema climático global está próximo a superar límites críticos que podrían generar cambios irreversibles, como el colapso de capas de hielo, la selva amazónica y la circulación oceánica.',
  contenido: [
    'El artículo publicado el 13 de agosto de 2025 por The Economist advierte que la Tierra se acerca a puntos de inflexión climáticos irreversibles. Entre los más críticos se encuentran el colapso de las capas de hielo en Groenlandia y la Antártida Occidental, la interrupción de la circulación oceánica Atlántica (AMOC) y el colapso de la selva amazónica.',
    'Según los científicos citados, existen al menos 25 componentes clave del sistema climático global en riesgo de sufrir cambios abruptos e irreversibles. Algunos podrían activarse incluso con aumentos de temperatura relativamente bajos, en torno a 0,8 °C por encima de los niveles preindustriales.',
    'El informe subraya que, aunque algunos procesos parecen lentos, como el deshielo de Groenlandia, pueden desencadenar cambios súbitos e impredecibles. Esto implica riesgos en cascada para la estabilidad climática, los ecosistemas y las sociedades humanas.',
    'Fuentes citadas:',
    '1) The Economist. *Earth’s climate is approaching irreversible tipping points*. https://www.economist.com/interactive/science-and-technology/2025/08/13/earths-climate-is-approaching-irreversible-tipping-points',
    '2) Eco-Business. *Tipping points: Window to avoid irreversible climate impacts is rapidly closing*. https://www.eco-business.com/news/tipping-points-window-to-avoid-irreversible-climate-impacts-is-rapidly-closing/'
  ],
  etiquetas: ['salud','medio ambiente','cambio climático','internacional'],
  fuente: { nombre: 'The Economist', url: 'https://www.economist.com/interactive/science-and-technology/2025/08/13/earths-climate-is-approaching-irreversible-tipping-points' },
  url_fuente: 'https://www.economist.com/interactive/science-and-technology/2025/08/13/earths-climate-is-approaching-irreversible-tipping-points',
  consecutivo_unico: '20250813-01'
},

{
  id: 'sexualidad-y-afecto-en-pareja-2025-08-18',
  fecha: '2025-08-18',
  titulo: 'Más allá del sexo: la afectividad como dimensión esencial de la sexualidad',
  pais: 'Internacional',
  resumen: 'El artículo explica cómo la sexualidad incluye múltiples manifestaciones afectivas más allá del sexo, como abrazar, acurrucarse, mirar o susurrar, con soporte científico sobre sus beneficios en el bienestar y las relaciones de pareja.',
  contenido: [
    'La sexualidad abarca una amplia gama de expresiones humanas, y no se agota en la actividad sexual genital. La intimidad física no sexual, como abrazarse, acurrucarse, tocar, besar suavemente, acariciar, sostener la mirada o susurrar, también forma parte vital de esta dimensión.',
    'Investigaciones en psicología señalan que el contacto físico no sexual –como masajes, caricias, abrazos, tomarse de las manos– está relacionado con mayores niveles de satisfacción en la relación y con mejor resolución de conflictos, según estudios del Instituto Kinsey y otras fuentes ((https://blogs.iu.edu/kinseyinstitute/2020/05/28/the-power-of-touch-physical-affection-is-important-in-relationships-but-some-people-need-more-than-others)).',
    'La proximidad sin contacto físico, como sostener una mirada, también puede generar sensaciones de intimidad emocional comparables al contacto directo ((https://en.wikipedia.org/wiki/Physical_intimacy)).',
    'El afecto físico no sexual favorece la liberación de oxitocina—la llamada hormona del vínculo—y reduce cortisol, generando una sensación de cercanía emocional, seguridad y relajación ((https://www.psychologytoday.com/us/blog/mental-health-nerd/202408/how-non-sexual-physical-affection-enhances-sexual-connection)).',
    'La afectividad no sexual también está asociada con beneficios fisiológicos: abrazos, caricias o candorosas muestras de afecto contribuyen a la reducción del estrés y mejoran el bienestar general, según revisiones recientes basadas en múltiples estudios ((https://www.dailytelegraph.com.au/lifestyle/physical-touch-can-reduce-pain-and-depression-research-confirms)).',
    'El "toque consolador", como un abrazo o tomar de la mano a alguien en angustia, provoca una liberación de oxitocina, dopamina y serotonina, al tiempo que disminuye el cortisol; estos efectos tienden a ser mayores si la persona que consuela es emocionalmente cercana ((https://en.wikipedia.org/wiki/Consoling_touch)).',
    'La Teoría del Intercambio de Afecto (AET) explica que comunicar afecto es una conducta biológicamente adaptativa, que fortalece los vínculos, favorece la salud mental y contribuye al bienestar relacional ([(https://en.wikipedia.org/wiki/Affection_exchange_theory)).',
    'Si dudas si estás siendo afectivo o recibiendo suficiente afecto, ten en cuenta que los gestos cotidianos –un abrazo espontáneo, una mirada cercana, un susurro al oído o tomarse de la mano– son expresiones esenciales de intimidad que fortalecen la relación, disminuyen el estrés y promueven el bienestar emocional. Reconocer un posible vacío afectivo es un primer paso valioso, y abrir un diálogo sobre tus necesidades puede marcar la diferencia.',
    'La sexualidad, entendida de manera plena, va más allá del sexo. El deseo de acurrucarse, abrazar, mirar, tocar o susurrar son expresiones profundas de afecto fundamentales para las relaciones. La evidencia científica respalda su impacto positivo: fomentan la intimidad, disminuyen el estrés, aumentan el bienestar y promueven comportamientos saludables. Si sientes que falta afecto en tu relación, recuerda que son esos gestos sencillos los que pueden fortalecer el vínculo. Atrévete a expresarte, comunícate con tu pareja y valora las formas no verbales de conexión emocional.'
  ],
  etiquetas: ['salud','relaciones','sexualidad','afecto'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250818-01'
},

{
  id: 'trump-ucrania-crimea-otan-2025-08-18',
  fecha: '2025-08-18',
  titulo: 'Trump descarta recuperación de Crimea y entrada de Ucrania en la OTAN',
  pais: 'Estados Unidos',
  resumen: 'El expresidente Donald Trump afirmó que Ucrania no recuperará Crimea ni ingresará en la OTAN, declaraciones que reafirman su postura sobre el conflicto con Rusia.',
  contenido: [
    'El expresidente de Estados Unidos, Donald Trump, declaró que Ucrania no podrá recuperar la península de Crimea ni acceder a la OTAN. Las declaraciones fueron realizadas el 18 de agosto de 2025 en el marco de su campaña política y difundidas por medios internacionales.',
    'Trump señaló que la anexión de Crimea por parte de Rusia en 2014 es un hecho consolidado, lo que hace inviable cualquier intento ucraniano de revertirla. También sostuvo que la entrada de Ucrania en la OTAN no ocurrirá, argumentando que ello implicaría riesgos mayores para la seguridad internacional.',
    'Las afirmaciones del exmandatario se producen en un contexto en el que el conflicto en Ucrania sigue marcando la agenda internacional y donde las relaciones entre Washington, Kiev y Moscú son observadas con atención por aliados europeos y organismos multilaterales.',
    'Estas declaraciones contrastan con la posición oficial de la administración estadounidense actual, que ha reiterado su respaldo a la integridad territorial de Ucrania y su derecho a decidir sobre sus alianzas internacionales.',
    'Fuente citada: https://elpais.com/internacional/2025-08-18/trump-ni-recuperar-crimea-ni-entrada-en-la-otan-para-ucrania.html'
  ],
  etiquetas: ['estados unidos','donald trump','política','resultados'],
  fuente: { nombre: 'El País', url: 'https://elpais.com/internacional/2025-08-18/trump-ni-recuperar-crimea-ni-entrada-en-la-otan-para-ucrania.html' },
  consecutivo_unico: '20250818-01'
},
  {
  id: 'bolivia-elecciones-fragmentacion-izquierda-2025-08-17',
  fecha: '2025-08-17',
  titulo: 'Fragmentación de la izquierda en Bolivia y avance de la derecha en elecciones presidenciales',
  pais: 'Bolivia',
  resumen: 'Las elecciones presidenciales en Bolivia dejaron en evidencia la profunda división del MAS y del bloque progresista, con un voto nulo del 19 % promovido por Evo Morales que debilitó a la izquierda y abrió paso a candidatos de centro y derecha en la segunda vuelta.',
  contenido: [
    'El 17 de agosto de 2025 se realizaron las elecciones presidenciales en Bolivia. Los resultados reflejaron un giro hacia la derecha y una fuerte fragmentación del bloque progresista, que gobernó el país por casi dos décadas.',
    'El Movimiento al Socialismo (MAS), encabezado por el presidente Luis Arce, sufrió una derrota histórica. Su candidato Eduardo del Castillo apenas alcanzó alrededor del 3 % de los votos, lo que evidenció la pérdida de apoyo del oficialismo.',
    'El expresidente Evo Morales, inhabilitado por decisión del Tribunal Constitucional, llamó a sus seguidores a votar nulo en señal de protesta. Esa convocatoria elevó el voto nulo y blanco a cerca del 19 %, con un peso determinante en el resultado.',
    'Por su parte, Andrónico Rodríguez, que se presentó como candidato independiente del MAS y buscó capitalizar el descontento dentro de la izquierda, obtuvo alrededor del 8 % de los sufragios.',
    'En conjunto, el MAS, Rodríguez y el voto nulo alcanzaron aproximadamente un 30 % del electorado. Sin embargo, la falta de unidad y la ausencia de un candidato único redujeron la competitividad de la izquierda frente a la derecha.',
    'Los dos aspirantes que pasaron a la segunda vuelta fueron Rodrigo Paz, de centroderecha, con alrededor del 32 %, y Jorge Quiroga, de derecha, con cerca del 27 %. De esta forma, la izquierda quedó fuera de la contienda decisiva.',
    'La decisión de Morales de promover el voto nulo se sustentó en la denuncia de que ningún candidato representaba el “proceso de cambio” iniciado en 2006. Señaló que el gobierno de Arce se había apartado de los principios históricos del MAS y que su exclusión de la carrera electoral era una maniobra política.',
    'Analistas señalan que la experiencia boliviana ilustra el riesgo de la fragmentación: mientras la izquierda dispersó fuerzas y votos, la derecha logró consolidarse y pasar unida a la segunda vuelta.',
    'Fuentes citadas:',
    '1) El País. *Bolivia gira a la derecha*. https://elpais.com/america/opinion/2025-08-18/bolivia-gira-a-la-derecha.html',
    '2) Reuters. *Bolivia heads to runoff after right turn in presidential vote*. https://www.reuters.com/world/americas/bolivia-heads-runoff-after-right-turn-presidential-vote-2025-08-18/',
    '3) The Guardian. *Two decades of leftwing dominance end in Bolivia as rightwingers head to election runoff*. https://www.theguardian.com/world/2025/aug/18/bolivia-presidential-election-preliminary-results'
  ],
  etiquetas: ['bolivia','política','elecciones','izquierda','resultados'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/mundo/america/la-izquierda-fragmentada-y-un-giro-a-la-derecha-claves-de-las-elecciones-en-bolivia/' },
  url_fuente: 'https://www.elespectador.com/mundo/america/la-izquierda-fragmentada-y-un-giro-a-la-derecha-claves-de-las-elecciones-en-bolivia/',
  consecutivo_unico: '20250817-01'
},

{
  id: 'diana-marcela-morales-gestion-mincomercio-balance-2025-08-17',
  fecha: '2025-08-17',
  titulo: 'Diana Marcela Morales expone balance y hoja de ruta en Comercio, Industria y Turismo',
  pais: 'Colombia',
  resumen: 'La ministra de Comercio, Industria y Turismo, Diana Marcela Morales, presentó un balance de su gestión en el marco del gobierno de Gustavo Petro, destacando avances en implementación del programa de gobierno y señalando los retos que persisten en materia de productividad y relaciones comerciales.',
  contenido: [
    'Diana Marcela Morales, ministra de Comercio, Industria y Turismo de Colombia, expuso en entrevista un balance de su gestión, señalando que se ha logrado implementar la visión del programa de gobierno en varios frentes económicos y productivos.',
    'La funcionaria destacó que se han fortalecido políticas para apoyar a las micro, pequeñas y medianas empresas, así como programas de innovación y desarrollo industrial orientados a incrementar la competitividad del país.',
    'En materia internacional, Morales subrayó la importancia de las relaciones con Estados Unidos y otros socios estratégicos, indicando que el gobierno trabaja en diversificar mercados y consolidar acuerdos que beneficien a distintos sectores productivos.',
    'El balance también incluyó retos pendientes como mejorar la productividad, reducir las brechas de competitividad regional y enfrentar el contexto global de desaceleración económica. La ministra afirmó que la hoja de ruta seguirá centrada en impulsar sectores clave y promover el turismo sostenible.',
    'Según Morales, el compromiso es avanzar en políticas públicas que permitan consolidar el crecimiento económico con equidad, en línea con los objetivos trazados por el presidente Gustavo Petro.'
  ],
  etiquetas: ['colombia','economía','política','gustavo petro','estados unidos'],
  fuente: { nombre: 'Semana', url: 'https://www.semana.com/politica/articulo/diana-marcela-morales-ministra-de-comercio-industria-y-turismo-se-ha-logrado-implementar-la-vision-del-programa-de-gobierno/202512/' },
  url_fuente: 'https://www.semana.com/politica/articulo/diana-marcela-morales-ministra-de-comercio-industria-y-turismo-se-ha-logrado-implementar-la-vision-del-programa-de-gobierno/202512/',
  consecutivo_unico: '20250817-02',

  // NUEVO:
  imagen: '/noticias/og/diana-marcela-morales.jpg' // súbela a /public/noticias/og/
},
{
  id: 'opinion-rodrigo-uprimny-terna-corte-constitucional-2025-08-17',
  fecha: '2025-08-17',
  titulo: 'Rodrigo Uprimny cuestiona la terna de la Corte Suprema para la Corte Constitucional',
  pais: 'Colombia',
  resumen: 'En su columna en El Espectador, el jurista Rodrigo Uprimny analiza la terna enviada por la Corte Suprema de Justicia para la elección de un nuevo magistrado de la Corte Constitucional, advirtiendo riesgos de que se configure como una "terna de uno".',
  contenido: [
    'Rodrigo Uprimny es un jurista colombiano, profesor universitario y columnista habitual en El Espectador. Su trayectoria académica y profesional ha estado ligada al derecho constitucional, el acceso a la justicia y los derechos humanos.',
    'En la columna titulada "Una problemática terna de uno", publicada el 17 de agosto de 2025, Uprimny examina la terna enviada por la Corte Suprema de Justicia para la elección de un magistrado de la Corte Constitucional.',
    'El autor plantea que, aunque formalmente se cumpla el requisito de presentar tres nombres, en la práctica dos de los integrantes carecen de opciones reales, lo que convierte el proceso en una "terna de uno". Esta situación, advierte, limita la pluralidad y reduce la legitimidad del mecanismo.',
    'Uprimny subraya que la Corte Constitucional desempeña un papel central en la democracia colombiana, al garantizar la supremacía de la Constitución y proteger los derechos fundamentales. Por eso considera preocupante que la selección de magistrados se convierta en un trámite sin verdadero debate ni alternativas.',
    'El jurista concluye que el respeto al espíritu del mecanismo de ternas es fundamental para preservar la independencia de la Corte y su credibilidad institucional en el país.',
    'Fuente original: https://www.elespectador.com/opinion/columnistas/rodrigo-uprimny/una-problematica-terna-de-uno/'
  ],
  etiquetas: ['colombia','política','editorial','corte suprema','corte constitucional'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/opinion/columnistas/rodrigo-uprimny/una-problematica-terna-de-uno/' },
  consecutivo_unico: '20250817-02'
},

  {
  id: 'colombia-china-memorando-ruta-de-la-seda-2025-08-15',
  fecha: '2025-08-15',
  titulo: 'Colombia y China firman memorando de entendimiento sobre la Ruta de la Seda',
  pais: 'Colombia',
  resumen: 'Colombia y China suscribieron un memorando de entendimiento que formaliza la incorporación del país sudamericano a la Iniciativa de la Franja y la Ruta, con el objetivo de fortalecer la cooperación en infraestructura, comercio e inversión.',
  contenido: [
    'El Gobierno de Colombia y la República Popular China firmaron un memorando de entendimiento para formalizar la adhesión de Colombia a la Iniciativa de la Franja y la Ruta, conocida como la Ruta de la Seda. El acto se llevó a cabo en presencia de representantes de ambos gobiernos y marca un nuevo capítulo en las relaciones bilaterales.',
    'El acuerdo contempla el impulso a proyectos conjuntos en áreas como infraestructura, conectividad, comercio, inversión, ciencia, tecnología y educación. Según el Ministerio de Relaciones Exteriores, se busca fomentar el desarrollo sostenible y ampliar las oportunidades de intercambio económico y cultural.',
    'La Iniciativa de la Franja y la Ruta, lanzada por China en 2013, agrupa a más de 150 países y organizaciones internacionales con el objetivo de mejorar la cooperación global mediante redes de transporte, comercio e inversión. Colombia se convierte así en uno de los últimos países de América Latina en unirse formalmente a esta estrategia.',
    'Fuentes citadas:',
    '1) Ministerio de Relaciones Exteriores de Colombia – Comunicado oficial.',
    '2) Gobierno de la República Popular China – Iniciativa de la Franja y la Ruta.'
  ],
  etiquetas: ['colombia', 'china', 'política', 'economía'],
  fuente: { nombre: 'Blu Radio', url: 'https://www.bluradio.com/nacion/ruta-de-la-seda-ya-es-una-realidad-colombia-y-china-firmaron-memorando-de-entendimiento-rg10?s=09' },
  url_fuente: 'https://www.bluradio.com/nacion/ruta-de-la-seda-ya-es-una-realidad-colombia-y-china-firmaron-memorando-de-entendimiento-rg10?s=09',
  consecutivo_unico: '20250815-01'
},

  {
  id: 'china-biotech-expansion-opinion-2025-08-17',
  fecha: '2025-08-17',
  titulo: 'China busca expandir su influencia en biotecnología',
  pais: 'China',
  resumen: 'Un análisis del New York Times advierte que China está destinando importantes recursos para consolidarse como potencia en biotecnología, lo que podría redefinir el liderazgo global en esta industria.',
  contenido: [
    'El artículo de opinión del New York Times señala que China ha intensificado sus inversiones en biotecnología, buscando no solo fortalecer su industria interna, sino también proyectar poder e influencia en el ámbito internacional.',
    'Según el análisis, esta estrategia incluye el desarrollo de capacidades avanzadas en investigación genética, farmacéutica y agrícola, lo cual representa un reto directo a la posición dominante de Estados Unidos en el sector.',
    'El texto también alerta sobre la necesidad de establecer reglas claras de transparencia, cooperación internacional y salvaguardas éticas para evitar riesgos asociados con la manipulación genética y el uso indebido de tecnologías emergentes.'
  ],
  etiquetas: ['tecnología', 'investigación', 'china'],
  fuente: { nombre: 'The New York Times', url: 'https://www.nytimes.com/2025/08/17/opinion/china-biotech.html' },
  url_fuente: 'https://www.nytimes.com/2025/08/17/opinion/china-biotech.html',
  consecutivo_unico: '20250817-01'
},

{
  id: 'air-canada-suspende-vuelos-huelga-auxiliares-2025-08-16',
  fecha: '2025-08-16',
  titulo: 'Air Canada suspende vuelos por huelga de auxiliares de vuelo',
  pais: 'Canadá',
  resumen: 'Air Canada suspendió temporalmente sus operaciones internacionales y nacionales tras iniciarse una huelga de auxiliares de vuelo, que afecta miles de pasajeros en Canadá y otros destinos.',
  contenido: [
    'Air Canada anunció este sábado 16 de agosto la suspensión de gran parte de sus vuelos debido a una huelga de auxiliares de vuelo que comenzó a nivel nacional. La medida afecta tanto rutas internas como internacionales y ha generado cancelaciones y retrasos en aeropuertos clave como Toronto y Montreal.',
    'El sindicato de auxiliares de vuelo, que representa a más de 9.000 trabajadores, declaró el paro tras no lograr un acuerdo en las negociaciones contractuales relacionadas con salarios, condiciones laborales y seguridad en los vuelos. “Nuestros miembros se han visto obligados a tomar esta medida tras meses de conversaciones sin resultados”, señaló el sindicato en un comunicado.',
    'La aerolínea pidió comprensión a los pasajeros y recomendó verificar el estado de sus vuelos antes de dirigirse a los aeropuertos. También anunció que ofrecerá reembolsos y reprogramaciones sin costo adicional para los afectados. El gobierno canadiense manifestó su preocupación y pidió a las partes retomar el diálogo para restablecer el servicio aéreo lo antes posible.'
  ],
  etiquetas: ['canadá', 'economía', 'política'],
  fuente: { nombre: 'CNN Español', url: 'https://cnnespanol.cnn.com/2025/08/16/mundo/air-canada-suspende-vuelos-huelga-auxiliares-trax?s=09' },
  url_fuente: 'https://cnnespanol.cnn.com/2025/08/16/mundo/air-canada-suspende-vuelos-huelga-auxiliares-trax?s=09',
  consecutivo_unico: '20250816-01'
},
{
  id: 'consulta-pacto-historico-intencion-voto-2025-08-16',
  fecha: '2025-08-16',
  titulo: 'Consulta del Pacto Histórico: Quintero y otros precandidatos lideran intención de voto',
  pais: 'Colombia',
  resumen: 'Una encuesta de Invamer para Caracol Televisión, Blu Radio y El Espectador muestra a Daniel Quintero en primer lugar de intención de voto entre los precandidatos del Pacto Histórico, seguido por Alexander López y otros aspirantes.',
  contenido: [
    'Según la más reciente encuesta de Invamer, divulgada el 16 de agosto, Daniel Quintero, exalcalde de Medellín, encabeza la intención de voto en la consulta del Pacto Histórico con el 25%. Le siguen Alexander López con 13%, Clara López con 9%, Álex Flórez con 7% y otros precandidatos con porcentajes menores.',
    'La medición se realizó para Caracol Televisión, Blu Radio y El Espectador, con el propósito de evaluar las preferencias de los ciudadanos frente a la consulta interna que definirá el candidato presidencial de la coalición. El estudio abarcó distintos grupos etarios y regiones del país.',
    'En la misma encuesta se exploraron escenarios de consulta, mostrando que Quintero obtiene ventaja significativa frente a sus competidores, aunque aún persiste un alto nivel de indecisión. Un 34% de los encuestados manifestó no haber definido su voto.',
    'La consulta del Pacto Histórico busca escoger un candidato único de la coalición para las elecciones presidenciales de 2026, en un proceso que incluye debates y mecanismos de participación interna.',
    'Fuentes citadas: Invamer, El Universal.'
  ],
  etiquetas: ['colombia', 'política', 'elecciones', 'pacto historico'],
  fuente: { nombre: 'El Universal', url: 'https://www.eluniversal.com.co/colombia/2025/08/16/consulta-del-pacto-historico-los-precandidatos-que-lideran-la-intencion-de-voto/' },
  url_fuente: 'https://www.eluniversal.com.co/colombia/2025/08/16/consulta-del-pacto-historico-los-precandidatos-que-lideran-la-intencion-de-voto/',
  consecutivo_unico: '20250816-03'
},
{
  id: 'productividad-y-bienestar-conversacion-2025-08-16',
  fecha: '2025-08-16',
  titulo: 'Productividad OCDE: datos recientes y alcance del indicador',
  pais: 'Internacional',
  resumen: 'Síntesis de los puntos principales sobre productividad laboral (PIB por hora trabajada) reportados por la OCDE y las preguntas frecuentes sobre su interpretación.',
  contenido: [
    'La OCDE reporta que, en promedio, la productividad laboral creció 0,6% en 2023, mientras que en la zona euro se observó una caída de -0,9%. El indicador utilizado por la OCDE es el PIB por hora trabajada, no el PIB per cápita.',
    'Entre las dudas habituales están si hay datos estimados de 2024 y cómo se relaciona el indicador con el bienestar. La aclaración clave es que el PIB por hora trabajada mide eficiencia económica, pero no incorpora directamente equidad, sostenibilidad u otros componentes de bienestar.',
    'Este resumen proviene de un intercambio tipo preguntas-respuestas; para mantener consistencia con el formato de noticias, se presenta en párrafos y no como diálogo estructurado.'
  ],
  etiquetas: ['economía','productividad','bienestar'],
  fuente: { nombre: 'OCDE' },
  consecutivo_unico: '20250816-02'
},

  {
  id: 'gobernacion-uribe-antioquia-paramilitares-jep-2025-08-16',
  fecha: '2025-08-16',
  titulo: 'Gobernación de Álvaro Uribe en Antioquia y vínculos con paramilitares fueron mencionados en la JEP',
  pais: 'Colombia',
  resumen: 'La JEP recibió testimonios que mencionan a funcionarios de la gobernación de Álvaro Uribe en Antioquia durante las masacres de La Granja (1996) y El Aro (1997), señalando la creación de un grupo de seguridad privada que habría sido fachada de paramilitares. El expresidente niega cualquier relación.',
  contenido: [
    'El Espectador reveló que en la Jurisdicción Especial para la Paz (JEP) se conocieron testimonios de dos financiadores de las masacres paramilitares de La Granja (1996) y El Aro (1997), ocurridas en el municipio antioqueño de Ituango.',
    'Según los relatos, dos altos funcionarios de la gobernación de Álvaro Uribe Vélez en Antioquia habrían impulsado la conformación de un grupo de seguridad privada, el cual terminó siendo utilizado como fachada por estructuras paramilitares.',
    'El expresidente Uribe ha rechazado los señalamientos y sostiene que no existió ningún vínculo entre su administración departamental y organizaciones criminales.',
    'Estos testimonios forman parte del proceso de esclarecimiento que adelanta la JEP en torno a la relación entre agentes estatales, sectores privados y grupos armados durante los años noventa en Antioquia.'
  ],
  etiquetas: ['colombia', 'investigación', 'política', 'seguridad'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/judicial/gobernacion-de-alvaro-uribe-en-antioquia-y-paramilitares-fueron-senalados-en-la-jep-noticia-792001/' },
  url_fuente: 'https://www.elespectador.com/judicial/gobernacion-de-alvaro-uribe-en-antioquia-y-paramilitares-fueron-senalados-en-la-jep-noticia-792001/',
  consecutivo_unico: '20250816-01'
},
  {
  id: 'sinner-atmane-semifinal-cincinnati-2025-08-16',
  fecha: '2025-08-16',
  titulo: 'Sinner vence a Atmane y avanza a la final del Masters 1000 de Cincinnati',
  pais: 'Estados Unidos',
  resumen: 'Jannik Sinner derrotó a Térence Atmane en semifinales del Masters 1000 de Cincinnati. El francés alcanzó por primera vez esta ronda en un torneo de esta categoría y obtuvo más de 300 mil dólares en premios.',
  contenido: [
    'El sábado 16 de agosto de 2025, Jannik Sinner se impuso en la semifinal del Masters 1000 de Cincinnati al francés Térence Atmane con un marcador de 7-6(4), 6-2. El número uno del mundo defendió con éxito su título en el torneo y aseguró su paso a la final.',
    'Atmane, ubicado en el puesto 136 del ranking ATP y proveniente de la fase clasificatoria, fue una de las sorpresas de la semana. Su actuación lo convirtió en uno de los jugadores con ranking más bajo en alcanzar una semifinal de Masters 1000.',
    'El encuentro se disputó en Cincinnati, Estados Unidos, como parte del calendario ATP que antecede al US Open. El triunfo permitió a Sinner celebrar su cumpleaños número 24 con una victoria especial y alcanzar su octava final de Masters 1000.',
    'Para Atmane, este resultado representó un salto significativo en su carrera. Sumó 413 puntos ATP, con lo que se proyecta hasta el puesto 69 del ranking mundial. Además, alcanzó por primera vez la ronda de semifinales en un torneo de esta categoría.',
    'En el aspecto económico, el francés recibió 332.160 dólares en premios por su participación en Cincinnati. La cifra resulta histórica para él, ya que supera lo que había acumulado en toda la temporada y marca un hito en la carrera de un jugador que compite sin patrocinadores de ropa ni calzado.'
  ],
  etiquetas: ['resultados', 'tenis', 'estados unidos'],
  fuente: { nombre: 'ATP Tour', url: 'https://www.atptour.com/en/news/sinner-atmane-cincinnati-2025-sf' },
  url_fuente: 'https://www.atptour.com/en/news/sinner-atmane-cincinnati-2025-sf',
  consecutivo_unico: '20250816-01'
},

  {
  id: 'diferencias-diabetes-tipo1-tipo2-2025-08-16',
  fecha: '2025-08-16',
  titulo: 'Cinco diferencias clave entre la diabetes tipo 1 y tipo 2',
  pais: 'Internacional',
  resumen: 'Explicación sencilla y didáctica sobre las principales diferencias entre la diabetes tipo 1 y la tipo 2, enfocada en causas, edad de inicio, producción de insulina, tratamiento y frecuencia.',
  contenido: [
    'La diabetes es una enfermedad que afecta la forma en que el cuerpo maneja la glucosa en la sangre. Existen distintos tipos, siendo la tipo 1 y la tipo 2 las más comunes. Aunque comparten síntomas similares, tienen orígenes y tratamientos distintos.',
    'En la diabetes tipo 1, el sistema de defensas destruye las células del páncreas encargadas de producir insulina. En la tipo 2, en cambio, el problema suele estar en la resistencia del cuerpo a la insulina y en factores como el sobrepeso, el sedentarismo y la edad.',
    'La edad de inicio también marca una diferencia importante: la diabetes tipo 1 suele diagnosticarse en la infancia o adolescencia, mientras que la tipo 2 aparece con mayor frecuencia en adultos, aunque hoy en día también afecta a jóvenes con exceso de peso.',
    'Otra diferencia central está en la producción de insulina. En la tipo 1, el páncreas deja de producirla casi por completo, lo que obliga a usar insulina desde el inicio. En la tipo 2, el cuerpo todavía fabrica insulina, pero no la usa de forma eficiente, y con el tiempo puede disminuir la producción.',
    'Finalmente, la frecuencia es distinta: la diabetes tipo 1 representa alrededor del 5 a 10 % de los casos, mientras que la tipo 2 es mucho más común, llegando al 90 a 95 %. Por eso, mantener hábitos de vida saludables es una de las mejores formas de prevenir y controlar esta última.'
  ],
  etiquetas: ['salud', 'alimentación', 'estilo de vida'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250816-01'
},
  {
  id: 'canciller-aleman-sugiere-cumbre-trump-putin-zelenski-europa-2025-08-16',
  fecha: '2025-08-16',
  titulo: 'Canciller alemán sugiere que una cumbre entre Trump, Putin y Zelenski se realice en Europa',
  pais: 'Alemania',
  resumen: 'El canciller alemán instó a que un eventual encuentro entre Donald Trump, Vladímir Putin y Volodímir Zelenski tenga lugar en territorio europeo, subrayando la importancia de la unidad del continente frente al conflicto en Ucrania.',
  contenido: [
    'El canciller alemán Annalena Baerbock señaló este sábado que, de concretarse una cumbre entre el presidente estadounidense Donald Trump, el mandatario ruso Vladímir Putin y el presidente ucraniano Volodímir Zelenski, esta debería celebrarse en Europa.',
    'La jefa de la diplomacia alemana argumentó que la Unión Europea debe desempeñar un papel central en cualquier iniciativa orientada a la paz en Ucrania. "Europa no puede ser un espectador en un conflicto que ocurre en su propio continente", declaró.',
    'Baerbock recalcó que Alemania y sus socios europeos están dispuestos a apoyar un proceso de diálogo, pero insistió en que cualquier negociación debe basarse en el respeto a la soberanía e integridad territorial de Ucrania.',
    'El planteamiento surge en medio de discusiones internacionales sobre posibles escenarios de mediación en el conflicto, con Estados Unidos y actores europeos evaluando opciones para reducir las tensiones militares y diplomáticas.',
    'Fuentes citadas: https://www.dw.com/es/canciller-alem%C3%A1n-sugiere-que-cumbre-trump-putin-zelenski-sea-en-europa/a-73668088'
  ],
  etiquetas: ['política', 'internacional', 'estados unidos', 'donald trump','rusia','putin'],
  fuente: { nombre: 'DW', url: 'https://www.dw.com' },
  url_fuente: 'https://www.dw.com/es/canciller-alem%C3%A1n-sugiere-que-cumbre-trump-putin-zelenski-sea-en-europa/a-73668088',
  consecutivo_unico: '20250816-01'
},

  {
  id: 'precios-electricidad-america-latina-comparacion-2025-08-16',
  fecha: '2025-08-16',
  titulo: 'Precios de la electricidad en América Latina: comparación regional y calidad del servicio',
  pais: 'Internacional',
  resumen: 'Un análisis de los precios minoristas de electricidad en América Latina muestra que Guatemala, Honduras, Uruguay y Puerto Rico figuran entre los más altos, mientras que Paraguay, Cuba y Venezuela aparecen con tarifas muy bajas, aunque con serias limitaciones de calidad en el suministro.',
  contenido: [
    'Datos de GlobalPetrolPrices (GPP) para diciembre de 2024 confirman que Colombia se ubica alrededor de 0,21 USD/kWh, en un rango medio-alto dentro de América Latina.',
    'Guatemala y Honduras muestran precios elevados, asociados a una fuerte dependencia de combustibles fósiles importados.',
    'Puerto Rico registra entre 22 y 25 centavos de dólar por kWh según la EIA, lo que lo sitúa entre los más caros por su dependencia del petróleo y derivados.',
    'Paraguay y Ecuador figuran entre los más bajos debido a la alta participación hidroeléctrica; sin embargo, Ecuador enfrentó racionamientos por sequías en 2023–2024.',
    'Cuba y Venezuela presentan valores nominales muy bajos (0,006 USD/kWh y 0 USD/kWh en GPP), pero ambos países sufren frecuentes apagones y racionamientos.',
    'En Cuba, el gobierno modificó tarifas residenciales en 2024, aunque se mantienen subsidios que limitan la sostenibilidad financiera del sistema.',
    'En Venezuela, reportes de prensa documentaron apagones nacionales durante 2024, reflejo del deterioro de la infraestructura eléctrica.',
    'Los precios extremadamente bajos suelen provenir de subsidios estatales y tipos de cambio administrados, lo que genera distorsiones en la comparación internacional.',
    'Expertos subrayan que un kWh barato en la tarifa puede resultar costoso en la práctica si obliga a los usuarios a invertir en plantas eléctricas o baterías por la falta de continuidad.',
    'En contraste, Colombia combina generación hidroeléctrica, térmica y renovable, y su costo final incluye cargos de red, impuestos y subsidios cruzados.',
    'La dependencia de la hidrología hace que la región sea vulnerable a sequías, lo que afecta tanto precios como disponibilidad del servicio.',
    'Ante estos datos, la pregunta irónica “¿será que tenemos que pedir asistencia a Venezuela y Cuba?” pone de relieve que, aunque sus tarifas sean mínimas, la precariedad del servicio eléctrico muestra que no son modelos replicables para garantizar acceso confiable y sostenible.'
  ],
  etiquetas: ['economía', 'consumo','energia'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250816-01'
},

  {
  id: 'sofia-petro-mensaje-familia-miguel-uribe-2025-08-16',
  fecha: '2025-08-16',
  titulo: 'Sofía Petro envía mensaje a la familia de Miguel Uribe tras su fallecimiento',
  pais: 'Colombia',
  resumen: 'Sofía Petro, hija del presidente Gustavo Petro, expresó un mensaje de solidaridad a la familia de Miguel Uribe, tras el fallecimiento del senador. El gesto fue compartido en redes sociales y ha sido resaltado por diferentes medios.',
  contenido: [
    'Sofía Petro, hija del presidente de la República, envió un mensaje público de condolencia a la familia del senador Miguel Uribe, quien falleció recientemente. El pronunciamiento se dio a través de sus redes sociales.',
    'En su mensaje, la joven manifestó solidaridad con los familiares del congresista en medio del duelo. El hecho fue recogido por medios nacionales, que resaltaron la importancia del gesto en un contexto político marcado por tensiones y diferencias.',
    'El fallecimiento de Miguel Uribe ha generado múltiples reacciones en la esfera pública y política del país, incluyendo expresiones de apoyo y mensajes de condolencia provenientes de diversos sectores.'
  ],
  etiquetas: ['colombia', 'política', 'gustavo petro', 'medios'],
  fuente: { nombre: 'Semana', url: 'https://www.semana.com/confidenciales/articulo/el-mensaje-de-sofia-petro-hija-del-presidente-a-la-familia-de-miguel-uribe-tubay/202553/' },
  url_fuente: 'https://www.semana.com/confidenciales/articulo/el-mensaje-de-sofia-petro-hija-del-presidente-a-la-familia-de-miguel-uribe-tubay/202553/',
  consecutivo_unico: '20250816-01'
},
{
  id: 'china-turbina-eolica-mas-grande-2025-08-14',
  fecha: '2025-08-14',
  titulo: 'China presenta la turbina eólica más grande del mundo',
  pais: 'China',
  resumen: 'China instaló la turbina eólica marina más grande del mundo, con palas de 140 metros y una capacidad de 22 megavatios, capaz de generar electricidad suficiente para 40.000 hogares en un día con una sola rotación.',
  contenido: [
    'El 14 de agosto de 2025, China anunció la entrada en operación de la turbina eólica marina más grande del mundo, desarrollada por la empresa estatal CSSC Haizhuang. La estructura se encuentra en la provincia de Fujian, al sureste del país.',
    'La turbina tiene palas de 140 metros y un rotor de 310 metros de diámetro. Su capacidad es de 22 megavatios y, según cálculos de la compañía, una sola vuelta de las palas puede suministrar electricidad a 40.000 hogares durante un día.',
    'El proyecto busca fortalecer la capacidad de China en energías renovables. Actualmente, el país es el mayor fabricante e instalador de turbinas eólicas del mundo, con más del 60 % de la capacidad global de producción.',
    'Las autoridades chinas afirman que estas innovaciones ayudan a reducir la dependencia del carbón y contribuyen a los compromisos de neutralidad de carbono para 2060.',
    'Fuentes citadas:',
    '1) El Confidencial – "China instala la turbina eólica más grande del mundo: puede alterar el clima local". https://www.elconfidencial.com/tecnologia/2025-08-14/china-turbina-mas-grande-influye-clima-1qrt_4191522/'
  ],
  etiquetas: ['tecnología', 'consumo','energía','china'],
  fuente: { nombre: 'El Confidencial', url: 'https://www.elconfidencial.com' },
  url_fuente: 'https://www.elconfidencial.com/tecnologia/2025-08-14/china-turbina-mas-grande-influye-clima-1qrt_4191522/',
  consecutivo_unico: '20250814-01'
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
    'política',
    'Donald Trump'
  ],
  fuente: 'El País',
  url_fuente: 'https://elpais.com/us/2025-08-12/los-datos-y-los-residentes-de-washington-contradicen-a-trump-nunca-me-he-sentido-amenazada.html'
},

{
  id: 'encuesta-polimetrica-favorabilidad-petro-45-2025-05',
  fecha: '2025-05-03',
  titulo: 'Encuesta Polimétrica: Favorabilidad de Gustavo Petro alcanza 45 % en mayo de 2025',
  pais: 'Colombia',
  resumen: 'La encuesta Polimétrica de Cifras & Conceptos reporta que la imagen favorable del presidente Gustavo Petro se ubica en 45 %, con 52 % desfavorable y 3 % sin opinión. El estudio, realizado entre el 24 de abril y el 3 de mayo de 2025 en las principales ciudades, cumple con estándares internacionales de calidad y cuenta con ficha técnica detallada.',
  contenido: [
    'La encuesta Polimétrica de mayo de 2025, elaborada por la firma Cifras & Conceptos, señala que la imagen favorable del presidente Gustavo Petro se ubica en el 45 %, mientras que la desfavorable alcanza el 52 % y un 3 % de los encuestados no tiene opinión definida.',
    'Cifras & Conceptos es una encuestadora reconocida en el ámbito nacional e internacional, miembro de ESOMAR y de la Asociación Colombiana de Empresas de Investigación de Mercados y Opinión Pública (ACEI). Cuenta con certificación en la norma internacional ISO 20252:2012, lo que respalda la seriedad y calidad técnica de sus mediciones.',
    'La ficha técnica del estudio indica que se realizaron 1.596 entrevistas presenciales, cara a cara en hogares, aplicadas con dispositivos móviles, en las ciudades de Bogotá, Medellín, Cali y Barranquilla. El margen de error general es de ± 4,3 %, con variaciones por ciudad según el tamaño muestral. El muestreo fue por etapas y estratificado, con ponderación por zona geográfica, edad, sexo y estrato socioeconómico.',
    'El trabajo de campo se llevó a cabo entre el 24 de abril y el 3 de mayo de 2025, con un equipo conformado por 62 encuestadores y 7 supervisores. El estadístico responsable fue Miguel Ángel León.',
    'El resultado del 45 % de favorabilidad marca un repunte frente a mediciones previas y coincide con la estrategia del presidente Petro de impulsar una consulta popular sobre reformas sociales y derechos laborales. Aunque la ficha técnica de Polimétrica no desagrega la favorabilidad por ciudad, encuestas de otras firmas, como Invamer, han mostrado variaciones significativas entre las principales capitales.',
    'El informe completo de la encuesta puede consultarse en el sitio oficial de Cifras & Conceptos: https://www.cifrasyconceptos.com/wp-content/uploads/2025/05/Polimetrica-Mayo-2025-V2.pdf'
  ],
  etiquetas: ['Política', 'Encuestas', 'Petro', 'Colombia'],
  fuente: 'Cifras & Conceptos',
  url_fuente: 'https://www.cifrasyconceptos.com/wp-content/uploads/2025/05/Polimetrica-Mayo-2025-V2.pdf',
  consecutivo_unico: '2025-05-03-colombia-encuesta-polimetrica'
},
{
  id: 'confianza-del-consumidor-en-colombia-sube-a-su-nivel-mas-alto-en-13-meses-2025-08-13',
  fecha: '2025-08-13',
  titulo: 'Confianza del consumidor en Colombia sube a su nivel más alto en 13 meses',
  pais: 'Colombia',
  resumen: 'El Índice de Confianza del Consumidor en Colombia alcanzó en julio de 2025 su mayor nivel desde junio de 2024, con un balance de 5,3 %, segundo mes consecutivo en terreno positivo, impulsado por mejoras en la percepción económica y expectativas a futuro.',
  contenido: [
    'En julio de 2025, el Índice de Confianza del Consumidor (ICC) de Colombia se ubicó en 5,3 %, su registro más alto en 13 meses, según la Encuesta de Opinión del Consumidor (EOC) de Fedesarrollo. Este resultado representa un aumento de 3,1 puntos porcentuales frente a junio y de 14,3 puntos frente al mismo mes de 2024.',
    'El avance estuvo impulsado por un incremento de 5,6 puntos en el Índice de Condiciones Económicas y de 1,4 puntos en el Índice de Expectativas. El director de Fedesarrollo, Luis Fernando Mejía, destacó que se observó una mejora tanto en la percepción de la situación actual de los hogares como en las expectativas a un año.',
    'Por ciudades, Barranquilla (+17,4 puntos, hasta 18,8 %), Bucaramanga (+16,2, hasta 14,4 %), Medellín (+13,0, hasta -11,6 %) y Cali (+1,5, hasta 13,2 %) registraron incrementos. En contraste, Bogotá presentó una caída de 1,5 puntos porcentuales.',
    'Aunque la disposición a comprar vivienda continúa en terreno negativo, mejoró levemente en comparación con meses anteriores. La evaluación para la compra de bienes muebles y electrodomésticos también mostró avances en la mayoría de ciudades, con excepción de Medellín.',
    'El ICC se compone de la percepción sobre las condiciones económicas actuales y las expectativas a futuro, siendo un indicador clave para medir el ánimo del consumidor y proyectar tendencias en el gasto de los hogares.'
  ],
  etiquetas: ['economía', 'consumo', 'Colombia','buenas noticias'],
  fuente: 'El Espectador',
  url_fuente: 'https://www.elespectador.com/economia/confianza-del-consumidor-en-colombia-sube-a-su-nivel-mas-alto-en-13-meses/',
  consecutivo_unico: '20250813-02'
},
{
    id: 'ozempic-porciones-restaurantes-2025-08-07',
    fecha: '2025-08-07',
    titulo: 'Restaurantes adaptan porciones ante menor apetito por uso de Ozempic',
    pais: 'Estados Unidos',
    resumen: 'El uso creciente de medicamentos GLP-1 como Ozempic está llevando a algunos restaurantes a ofrecer menús con porciones más pequeñas, adaptándose a clientes con menor apetito.',
    contenido: [
      'Un artículo del New York Times publicado el 7 de agosto de 2025 describe cómo el uso de medicamentos GLP-1, como Ozempic y Wegovy, está influyendo en la oferta gastronómica de algunos restaurantes en Estados Unidos. El fenómeno se observa especialmente en establecimientos de la ciudad de St. Louis, donde varios locales han incorporado opciones de menor tamaño o precios reducidos para clientes que consumen menos.',
      'Ejemplos incluyen el restaurante Clinton Hall, que ofrece un "teeny-weeny mini meal" (mini hamburguesa, papas y bebida) por 8 dólares, y bares que sirven versiones reducidas de cócteles como el "snaquiri", una versión pequeña del daiquiri. Algunos negocios también ofrecen cajas gratuitas para llevar las sobras, mientras que otros han ajustado su carta para permitir medias porciones.',
      'De acuerdo con un informe de PricewaterhouseCoopers de octubre de 2024, entre el 8 % y el 10 % de los estadounidenses ya usan medicamentos GLP-1, y hasta un 35 % manifiesta interés en utilizarlos. Esto ha reducido el consumo de alimentos y bebidas, especialmente indulgencias como postres o alcohol, lo que está afectando el modelo de negocio de ciertos restaurantes.',
      'Los propietarios consultados señalan que el reto es mantener la rentabilidad sin sacrificar la experiencia gastronómica. Las estrategias incluyen diversificar menús, ajustar precios de porciones reducidas y ofrecer alternativas para compartir, todo sin perder la identidad culinaria.'
    ],
    etiquetas: ['Salud', 'Consumo', 'Estados Unidos', 'Ozempic'],
    fuente: 'The New York Times',
    url_fuente: 'https://www.nytimes.com/2025/08/07/dining/ozempic-appetite-small-meals-restaurants.html',
    consecutivo_unico: '20250807-001'
  },
{
  id: 'editorial-ozempic-prescripcion-responsable-2025-08-07',
  fecha: '2025-08-07',
  titulo: 'Nota editorial – Uso y abuso de medicamentos GLP-1',
  pais: 'Estados Unidos',
  resumen: 'Reflexión sobre la conveniencia de regular y controlar la prescripción de medicamentos como Ozempic, cuyo uso masivo plantea riesgos sanitarios y de acceso.',
  contenido: [
    'El creciente uso de medicamentos análogos del GLP-1, como semaglutida (Ozempic, Wegovy y otros), plantea interrogantes relevantes sobre su prescripción y consumo masivo. Originalmente desarrollados para tratar la diabetes tipo 2, hoy se utilizan cada vez más para la pérdida de peso, incluso en personas sin indicación clínica estricta.',
    'Su eficacia para reducir el apetito está respaldada por evidencia médica, pero el aumento de recetas fuera de los criterios establecidos genera riesgos: desatención de cambios sostenibles en la alimentación, exposición a efectos adversos, y posible desabastecimiento para pacientes con diabetes que dependen de estos fármacos para su control metabólico.',
    'La medicalización acelerada de la obesidad puede desplazar la inversión y atención en medidas preventivas como educación nutricional, acceso a alimentos saludables, actividad física y políticas públicas para entornos menos obesogénicos.',
    'Prescribir de forma responsable implica evaluar cada caso, priorizar el beneficio clínico, garantizar el acceso a quienes más lo necesitan y evitar que la demanda sea impulsada principalmente por tendencias o marketing. El desafío es conservar la utilidad de esta herramienta terapéutica sin convertirla en una solución de moda con consecuencias negativas a largo plazo.',
    'Puede leer la noticia relacionada en: https://ledelab.co/noticias/ozempic-porciones-restaurantes-2025-08-07'
  ],
  etiquetas: ['Salud', 'Editorial', 'Estados Unidos', 'Ozempic'],
  fuente: 'Elaboración propia',
  url_fuente: '',
  consecutivo_unico: '20250807-002',
},
{
  id: 'uribe-revictimizacion-up-discurso-centrodemocratico-2025-08-13',
  fecha: '2025-08-13',
  titulo: 'Discurso leído por el Centro Democrático revictimiza y niega exterminio de la UP',
  pais: 'Colombia',
  resumen: 'En el homenaje fúnebre a Miguel Uribe Turbay, el director del Centro Democrático leyó un discurso del expresidente Álvaro Uribe que niega y revictimiza a la Unión Patriótica (UP), generando rechazo de sectores políticos y víctimas. El caso de la UP ya había sido reconocido por la CIDH en 2023 como un exterminio político por el que el Estado colombiano fue declarado responsable.',
  contenido: [
    'El 13 de agosto de 2025, durante las honras fúnebres al senador y precandidato presidencial Miguel Uribe Turbay en el Salón Elíptico del Congreso, el director del Centro Democrático, Gabriel Vallejo, leyó un discurso escrito por el expresidente Álvaro Uribe Vélez, quien no asistió por estar bajo medida de aseguramiento domiciliaria. En el texto, Uribe afirmó que la Unión Patriótica “promovía el secuestro, participaba de órdenes de asesinato” y “fue permisiva con la financiación ilícita”, contrastando esa supuesta conducta con la trayectoria de Miguel Uribe.',
    'Las declaraciones provocaron rechazo inmediato. El presidente Gustavo Petro las calificó como una burla a la justicia, recordando que el 30 de enero de 2023 la Corte Interamericana de Derechos Humanos declaró responsable al Estado colombiano por el exterminio político de la UP, que dejó más de 6.000 víctimas entre 1984 y 2002, incluyendo asesinatos, desapariciones forzadas, desplazamientos y amenazas sistemáticas contra sus integrantes.',
    'En su sentencia de 2023, la CIDH estableció que agentes estatales participaron en crímenes contra la UP, hubo tolerancia frente a la acción de grupos armados ilegales y se incumplió el deber de prevenir y proteger a sus miembros. Ordenó medidas de reparación integral, como el reconocimiento público de responsabilidad, garantías de no repetición y sanción de los responsables materiales e intelectuales.',
    'La concejala de Bogotá Heidy Sánchez Barreto y la senadora Isabel Zuleta, ambas del Pacto Histórico, calificaron el discurso como “infame” y “revictimizante”. Expresaron su solidaridad con las víctimas y sobrevivientes de la UP, reiterando que el exterminio político está documentado y fue objeto de condena internacional.',
    'Sectores de víctimas y organizaciones de derechos humanos señalaron que este tipo de pronunciamientos no solo desconocen la verdad judicialmente establecida, sino que contribuyen a mantener el estigma contra una colectividad política que sufrió una de las más graves persecuciones en la historia reciente del país.'
  ],
  etiquetas: ['Unión Patriótica', 'Centro Democrático', 'Álvaro Uribe', 'Revictimización', 'CIDH', 'Colombia'],
  fuente: 'Infobae',
  url_fuente: 'https://www.infobae.com/colombia/2025/08/13/alvaro-uribe-es-blanco-de-criticas-por-discurso-contra-la-up-expuesto-en-homenaje-a-miguel-uribe-merece-el-rechazo/',
  consecutivo_unico: '20250813-03'
},
{
  id: 'aceites-de-semillas-analisis-nutricional-y-salud-endocrinorosero-2025-08-14',
  fecha: '2025-08-13',
  titulo: 'Análisis sobre aceites de semillas y su impacto en la salud',
  pais: 'Colombia',
  resumen:
    'Un artículo de Endocrino Rosero examina la calidad nutricional de aceites de semillas comunes, comparando su perfil con otros aceites y grasas, y analiza sus posibles efectos en la salud cardiovascular y metabólica.',
  contenido: [
    'El especialista colombiano Endocrino Rosero publicó un análisis sobre los aceites de semillas más consumidos —como soya, maíz, girasol y canola— evaluando su composición de ácidos grasos y su relación con la salud humana.',
    'El texto compara el contenido de ácidos grasos poliinsaturados, monoinsaturados y saturados, así como la proporción omega-6/omega-3, señalando que un exceso relativo de omega-6 podría favorecer procesos inflamatorios en ciertos contextos.',
    'A continuación se presenta una tabla resumen con valores aproximados de la composición de ácidos grasos por cada 100 g de aceite, según datos promedio reportados en literatura científica:',
    `
<section>
  <style>
    .tabla-aceites{width:100%;border-collapse:collapse;font-size:.95rem}
    .tabla-aceites th,.tabla-aceites td{border:1px solid rgba(255,255,255,0.15);padding:.5rem .6rem;text-align:center}
    .tabla-aceites th{font-weight:600}
    .tabla-aceites caption{caption-side:bottom;font-size:.85rem;opacity:.8;padding-top:.5rem}
  </style>
  <table class="tabla-aceites">
    <thead>
      <tr>
        <th style="text-align:left">Aceite</th>
        <th>Grasas saturadas (%)</th>
        <th>Monoinsaturadas (%)</th>
        <th>Poliinsaturadas (%)</th>
        <th>Relación Ω‑6/Ω‑3</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="text-align:left">Soya</td><td>15</td><td>23</td><td>58</td><td>~7:1</td></tr>
      <tr><td style="text-align:left">Maíz</td><td>13</td><td>28</td><td>55</td><td>~45:1</td></tr>
      <tr><td style="text-align:left">Girasol</td><td>10</td><td>20</td><td>66</td><td>~200:1</td></tr>
      <tr><td style="text-align:left">Canola</td><td>7</td><td>63</td><td>28</td><td>~2:1</td></tr>
      <tr><td style="text-align:left">Oliva (ref.)</td><td>14</td><td>73</td><td>11</td><td>~13:1</td></tr>
    </tbody>
    <caption>Valores aproximados. Pueden variar según origen, variedad y método de extracción.</caption>
  </table>
</section>
    `,
    'También se revisan estudios clínicos y epidemiológicos que muestran beneficios y riesgos potenciales del consumo regular de estos aceites, dependiendo de la dieta general y el estilo de vida. El autor enfatiza la importancia de la calidad del procesamiento y el origen del aceite.',
    'Entre las recomendaciones prácticas se incluye: priorizar aceites prensados en frío o mínimamente refinados; usarlos en cantidades moderadas; y combinarlos con fuentes ricas en omega-3 como pescado graso, linaza o chía para equilibrar la relación de ácidos grasos.',
    'La conclusión general es que los aceites de semillas no son “malos” por sí mismos, pero su uso debe contextualizarse dentro de una alimentación variada, con atención al balance de grasas y a la calidad del producto.'
  ],
  etiquetas: ['nutrición', 'aceites vegetales', 'salud', 'dieta', 'Colombia'],
  fuente: 'Endocrino Rosero',
  url_fuente: 'https://www.endocrinorosero.com/post/aceites-de-semillas-son-tan-buenos-como-nos-los-venden?s=09',
  consecutivo_unico: '20250813-04'
},

{
  id: 'ecopetrol-resultados-primer-semestre-2025-2025-08-13',
  fecha: '2025-08-13',
  titulo: 'Ecopetrol incrementa producción pero reduce utilidades en el primer semestre de 2025',
  pais: 'Colombia',
  resumen:
    'La petrolera estatal Ecopetrol reportó un aumento en su producción durante el primer semestre de 2025, pero una caída en sus ganancias, atribuida a menores precios internacionales del crudo y mayores costos operativos.',
  contenido: [
    'Ecopetrol informó que su producción promedio en el primer semestre de 2025 fue de 743.000 barriles de petróleo equivalente por día, un incremento del 4,1 % frente al mismo periodo de 2024.',
    'Pese al aumento en producción, la utilidad neta cayó un 12 % en comparación con el primer semestre del año anterior, alcanzando los 12,5 billones de pesos. La compañía explicó que esta disminución se debió principalmente a la caída de los precios internacionales del crudo y al incremento de costos asociados a transporte y operación.',
    'El presidente de Ecopetrol, Ricardo Roa, señaló que la empresa ha mantenido su compromiso con las inversiones en transición energética, destinando parte de sus ingresos a proyectos de energías renovables, hidrógeno verde y reducción de emisiones.',
    'En el mismo periodo, las exportaciones representaron cerca del 60 % de las ventas, con los principales destinos en Estados Unidos, China y países de Europa, a pesar de un entorno global volátil en los precios de la energía.',
    'La petrolera estatal reiteró que continuará su estrategia de diversificación energética y fortalecimiento de la producción, buscando equilibrio entre rentabilidad y sostenibilidad.'
  ],
  etiquetas: ['Ecopetrol', 'Petróleo', 'Resultados', 'Economía','china','estados unidos','europa'],
  fuente: 'El Espectador',
  url_fuente:
    'https://www.elespectador.com/economia/ecopetrol-produce-mas-pero-gana-menos-resultados-del-primer-semestre-de-2025-noticias-hoy/'
},
{
  id: 'tomate-y-solanaceas-recomendaciones-seguras-2025-08-14',
  fecha: '2025-08-14',
  titulo: 'Tomate y solanáceas: recomendaciones prácticas para un consumo seguro',
  pais: 'Internacional',
  resumen:
    'Guía basada en evidencia sobre el consumo de tomate y otras solanáceas, con recomendaciones para la población general y personas con condiciones inflamatorias como psoriasis o artritis.',
  contenido: [
    'Las solanáceas —grupo de plantas que incluye tomate, papa, berenjena y pimentón— contienen compuestos naturales llamados glicoalcaloides (como la solanina y la tomatina) que, en concentraciones elevadas, pueden ser tóxicos o provocar reacciones en personas sensibles. En la población general, el consumo moderado de tomate maduro es seguro y forma parte de una dieta equilibrada. Sin embargo, en ciertos contextos de salud, como psoriasis, artritis u otras condiciones inflamatorias, algunos pacientes reportan mejoría al reducir o eliminar temporalmente estos alimentos.',
    'Recomendaciones:',
    '1. Población general: el tomate rojo maduro puede consumirse a diario sin riesgos conocidos, ya que su contenido de tomatina es muy bajo (0,3–6 mg/kg).',
    '2. Evitar tomate verde no maduro: puede contener hasta 500 mg/kg de tomatina; su ingesta frecuente no es aconsejable, especialmente en personas sensibles.',
    '3. Papa: consumir papas bien almacenadas, no verdes, sin brotes y preferiblemente peladas; descartar si tienen sabor amargo.',
    '4. Personas con psoriasis o enfermedades autoinmunes: considerar una dieta de eliminación de 3–4 semanas sin solanáceas, seguida de reintroducción gradual, para evaluar cambios en síntomas.',
    '5. Supervisión profesional: cualquier restricción prolongada debe ser guiada por médico o nutricionista para evitar deficiencias nutricionales.',
    'Nota: Este contenido se basa en revisiones y datos de seguridad alimentaria, así como en estudios y reportes sobre solanáceas y salud. No reemplaza la consulta médica.',
"Fuentes citadas:",
"1) Health Canada. *Glycoalkaloids in foods*. Government of Canada. Disponible en: https://www.canada.ca/en/health-canada/services/food-nutrition/reports-publications/food-safety/glycoalkaloids-foods.html",
"2) Friedman M. *Tomatine and tomatidine content in tomatoes and tomato products*. Journal of Agricultural and Food Chemistry, 2009. https://doi.org/10.1021/jf900312x",
"3) National Psoriasis Foundation. *Dietary behaviors and psoriasis: patient-reported outcomes*. J Am Acad Dermatol, 2017;76(3):618–621. https://doi.org/10.1016/j.jaad.2016.10.019",
"4) EFSA Panel on Contaminants in the Food Chain (CONTAM). *Scientific opinion on glycoalkaloids in food and feed*. EFSA Journal, 2020;18(8):6222. https://efsa.onlinelibrary.wiley.com/doi/epdf/10.2903/j.efsa.2020.6222"
  ],
  etiquetas: ['salud', 'alimentación', 'investigación', 'psoriasis', 'seguridad alimentaria'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250814-01'
},
{
  id: 'estonia-e-residency-creacion-evolucion-y-ledelab-group-ou-2025-08-14',
  fecha: '2025-08-14',
  titulo: 'Programa de residencia virtual "e-Residency" de Estonia: creación, evolución y su impacto en LEDELAB GROUP OÜ',
  pais: 'Estonia',
  resumen:
    'Desde su lanzamiento en 2014, el programa e-Residency de Estonia ha evolucionado como un modelo pionero de identidad digital para emprendedores globales. LEDELAB GROUP OÜ, propietaria de este portal, fue fundada tras la obtención de e-residency por su creador, inspirada por una visita al stand del gobierno estonio en el Global Entrepreneurship Congress 2018 en Estambul.',
  contenido: [
    'El programa e-Residency de Estonia fue lanzado el 1 de diciembre de 2014, con la misión de otorgar una identidad digital y un estatus legal a personas no residentes, permitiéndoles utilizar los servicios de gobierno electrónico del país y acceder a su entorno empresarial transparente y modernizado. Esta iniciativa pionera posibilitó fundar empresas, firmar documentos electrónicamente, acceder a banca, gestionar impuestos y más, sin necesidad de residencia física en Estonia (e-resident.gov.ee).',
    'Las raíces del proyecto se remontan a iniciativas de digitalización anteriores en el país, pero fue impulsado finalmente por Taavi Kotka, Ruth Annus y Siim Sikkut a través de un concurso de ideas del Estonian Development Fund en 2014. El objetivo estratégico apuntaba, simbólicamente, a alcanzar “10 millones de e-residents para 2025” (en.wikipedia.org).',
    'El británico Edward Lucas fue el primer e-resident, y Hamid Tahsildoost, de Estados Unidos, fue el primero en completar el proceso estándar para obtener el estatus (en.wikipedia.org). En sus primeros cinco años, el programa atrajo alrededor de 63 000 e-residents de 167 países, y se fundaron más de 10 000 empresas (investinestonia.com).',
    'Avanzando hasta finales de 2023, el alcance del programa creció exponencialmente: ya contaba con más de 100 000 e-residents de 181 países, quienes habían creado más de 27 000 empresas en Estonia (en.wikipedia.org).',
    'Más allá de su funcionalidad técnica, e-Residency ha cimentado el estatus de Estonia como un centro internacional de emprendimiento digital. El sistema apoya a emprendedores remotos, freelancers, startups y nómadas digitales en todo el mundo, permitiendo operar empresas desde cualquier lugar con pocos clics (e-resident.gov.ee).',
    'Para Estonia, los beneficios incluyen: crecimiento económico, difusión de su tecnología, ingresos por tasas de servicio, creación de empleos y fortalecimiento de su reputación global mediante lo que se ha descrito como “soft power digital” (e-resident.gov.ee).',
    'Aun así, el modelo ha enfrentado desafíos relacionados con la seguridad y la privacidad. Por ejemplo, en 2017 se detectó una vulnerabilidad importante en los certificados digitales emitidos entre octubre de 2014 y noviembre de 2017, lo que llevó al gobierno a suspender temporalmente dichos certificados hasta que se reemplazaron (en.wikipedia.org).',
    'Tu empresa LEDELAB GROUP OÜ fue registrada en Estonia el 25 de junio de 2018, con un capital social de 2 500 €, bajo el nombre y los datos de registro oficiales (ariregister.rik.ee). Además, descubriste el programa de e-Residency durante una visita al booth del gobierno de Estonia en el Global Entrepreneurship Congress de Estambul en 2018, lo cual fue la chispa que te motivó a solicitar la e-residency y finalmente fundar tu empresa. Es importante destacar que, según el portal oficial de e-Residency, LEDELAB GROUP OÜ figura en la lista de compañías registradas bajo el programa (en.wikipedia.org).',
    'Este proceso refleja perfectamente la misión del programa: personas de cualquier parte del mundo pueden acceder al ecosistema legal y digital de Estonia para emprender sin necesidad de presencia física en el país.',
    'Desde su lanzamiento en diciembre de 2014 hasta finales de 2023, el programa e-Residency de Estonia ha evolucionado de una idea audaz a una infraestructura digital consolidada, con más de 100 000 participantes de todo el mundo y decenas de miles de empresas creadas. Tu caso personal —la visita en el Global Entrepreneurship Congress, la decisión de tramitar la e-residency, y la fundación de LEDELAB GROUP OÜ— ilustra cómo este modelo permite que emprendedores globales materialicen sus iniciativas de manera digital. Tu empresa no solo es un testimonio de la visión del programa, sino también un embajador activo de ese ecosistema digital estonio.',
  ],
  etiquetas: ['tecnología', 'economía', 'medios','estonia'],
  fuente: {
    nombre: 'Portal oficial e-Residency Estonia',
    url: 'https://www.e-resident.gov.ee'
  },
  url_fuente: 'https://company.e-resident.gov.ee/company/ledelab-group-ou/',
},
{
  id: 'recoleccion-basura-bogota-problema-sin-resolver-2025-08-14',
  fecha: '2025-08-14',
  titulo: 'La recolección de basura, un problema sin resolver en Bogotá',
  pais: 'Colombia',
  resumen: 'El sistema de recogida de basuras de Bogotá enfrenta problemas de coordinación, recolección y separación de residuos. La unidad de la alcaldía de Bogotá no quiso responder preguntas de Deutsche Welle.',
  contenido: [
    'Luis trabaja en el último sitio donde pueden reciclarse las basuras orgánicas producidas en Bogotá, separando los desechos de origen orgánico de los demás. “Más conciencia, más conciencia porque realmente la naturaleza es la que sufre y nosotros también… nos cortamos también en las manos”, señaló.',
    'El sistema de recogida de basuras de la capital enfrenta problemas en la coordinación y separación de residuos. “Mientras la basura no esté al frente de mi casa, yo no tengo problemas”, comentó un ciudadano, destacando la falta de conciencia más allá de los espacios privados. Aunque Bogotá aspira a ser un destino turístico, la basura en las calles es uno de los principales reclamos ciudadanos.',
    'El plan de desarrollo distrital “Bogotá Camina Segura” contrasta con la afirmación de que “Bogotá ni siquiera puede caminar en medio de tanta basura”. La unidad distrital encargada no quiso responder a las preguntas de Deutsche Welle. En paralelo, surgen iniciativas privadas como un servicio de recolección de residuos orgánicos en baldes que luego son convertidos en compost.',
    'Este programa, que atiende a 2.700 hogares en 10 localidades, transforma unas 150 toneladas de residuos orgánicos en 80 a 90 toneladas de abono entregado a asociaciones campesinas y hogares participantes. Luis afirma que gracias a estos procesos “nace de todo… hasta las aves también vuelven acá”.'
  ],
  etiquetas: ['colombia', 'medio ambiente'],
  fuente: { nombre: 'Deutsche Welle', url: 'https://www.youtube.com/watch?v=5SDkz8mQxOY' },
  url_fuente: 'https://www.youtube.com/watch?v=5SDkz8mQxOY',
  consecutivo_unico: '20250814-01'
},
{
  id: 'gloria-gaitan-carta-padre-miguel-uribe-turbay-2025-08-14',
  fecha: '2025-08-14',
  titulo: 'Gloria Gaitán envía carta abierta al padre de Miguel Uribe Turbay por rechazo a presencia de Petro',
  pais: 'Colombia',
  resumen: 'Gloria Gaitán, hija de Jorge Eliécer Gaitán, envió una carta abierta a Miguel Uribe Londoño tras su decisión y la de su familia de rechazar la presencia del presidente Gustavo Petro en las exequias de su hijo, Miguel Uribe Turbay.',
  contenido: [
    'En la carta, Gaitán recordó la amistad de décadas con Uribe Londoño y expresó su sorpresa y tristeza por la decisión de no permitir la asistencia del presidente Petro a las ceremonias en la Catedral Primada de Colombia.',
    'Según Gaitán, el gesto envía un mensaje que excluye a una parte de la ciudadanía y contradice valores de reconciliación, especialmente en un momento que debía unir en el dolor y la reflexión.',
    'Reafirmó su compromiso con la "Restauración Moral y Democrática" y manifestó que, aunque mantiene el afecto por la historia de amistad, no podía callar ante lo que considera un acto de exclusión.',
    'Se puede consultar el texto completo de la carta en el siguiente enlace: <a href="https://www.ledelab.co/noticias/2025.08.14-Carta-Gloria-Gaitan-a-papa-Miguel-Uribe.png" target="_blank">(Ver carta)</a>'
  ],
  etiquetas: ['colombia', 'política', 'gustavo petro', 'editorial'],
  fuente: { nombre: 'Caracol Radio', url: 'https://caracol.com.co' },
  url_fuente: 'https://caracol.com.co',
  consecutivo_unico: '20250814-02'
},
{
  id: 'cincinnati-2025-sinner-vence-a-auger-aliassime-2025-08-14',
  fecha: '2025-08-14',
  titulo: 'Sinner avanza en Cincinnati tras vencer a Auger-Aliassime',
  pais: 'Estados Unidos',
  resumen: 'El italiano Jannik Sinner derrotó al canadiense Félix Auger-Aliassime en el torneo de Cincinnati 2025, asegurando su paso a la siguiente ronda del Masters 1000.',
  contenido: [
    'En el Masters 1000 de Cincinnati 2025, Jannik Sinner superó a Félix Auger-Aliassime en sets corridos, consolidando su posición como uno de los principales candidatos al título.',
    'El encuentro, disputado en pista dura, mostró a un Sinner sólido desde el fondo de la cancha y efectivo en los momentos clave, mientras que Auger-Aliassime no logró mantener el ritmo en los intercambios más largos.',
    'Con esta victoria, Sinner avanza a semifinales, donde se enfrentará al ganador del duelo entre el francés Terence Atmane (136) y el danés Holger Rune (9), quienes nunca se han enfrentado en el circuito ATP.',
    'Fuente citada: https://www.atptour.com/es/news/cincinnati-2025-sinner-felix-cf'
  ],
  etiquetas: ['resultados', 'estados unidos', 'tenis','deportes'],
  fuente: { nombre: 'ATP Tour', url: 'https://www.atptour.com' },
  url_fuente: 'https://www.atptour.com/es/news/cincinnati-2025-sinner-felix-cf',
  consecutivo_unico: '20250814-01'
},
{
  id: 'indice-glucemico-arroz-vs-azucar-2025-08-15',
  fecha: '2025-08-15',
  titulo: 'Comparación del índice glucémico entre arroz y azúcar según Dr. Bayter',
  pais: 'Colombia',
  resumen: 'El Dr. Bayter afirmó en un video que una porción de arroz tiene un índice glucémico equivalente al de 10 cucharaditas de azúcar, lo que generó debate en redes sociales sobre el impacto de estos alimentos en la glucemia.',
  contenido: [
    'En una publicación reciente, el médico colombiano Dr. Bayter afirmó que “una porción de arroz equivale al mismo índice glucémico que 10 cucharaditas de azúcar”.',
    'Según la base de datos de la Universidad de Sídney, el índice glucémico promedio del arroz blanco cocido se sitúa entre 70 y 89, dependiendo de la variedad y el método de cocción, mientras que el del arroz integral está entre 50 y 66. El azúcar de mesa (sacarosa) presenta un IG aproximado de 63.',
    'Especialistas señalan que, aunque el arroz blanco y el azúcar pueden generar aumentos rápidos en la glucemia, su perfil nutricional es distinto: el arroz aporta algo de proteína y minerales, mientras que el azúcar refinado ofrece principalmente calorías vacías.',
    'Usuarios en redes sociales destacaron que la comparación debe considerar el contexto de la dieta y las necesidades individuales, así como que no todas las recomendaciones alimentarias son adecuadas para todas las personas.',
    'Nota: el índice glucémico mide la velocidad con la que un alimento eleva la glucosa en sangre en comparación con un estándar, pero no refleja la cantidad total de carbohidratos ingeridos ni el valor nutricional global del alimento.'
  ],
  etiquetas: ['salud', 'nutrición', 'alimentación', 'dieta'],
  fuente: { nombre: 'University of Sydney – Glycemic Index', url: 'https://glycemicindex.com/' },
  consecutivo_unico: '20250815-01'
},
{
  id: 'cesar-caballero-logros-y-retos-gobierno-petro-2025-08-15',
  fecha: '2025-08-15',
  titulo: 'César Caballero destaca avances y desafíos en el gobierno de Gustavo Petro',
  pais: 'Colombia',
  resumen: 'En entrevista, César Caballero resaltó logros del actual gobierno como la creación de más de 2,2 millones de empleos, reducción de la pobreza y desigualdad, y crecimiento sostenido del sector agropecuario; también advirtió sobre problemas en la reforma a la salud y la necesidad de mayor gobernabilidad.',
  contenido: [
    'En el programa *Conversaciones Pendientes*, el estadígrafo y director de Cifras y Conceptos, César Caballero, evaluó el uso de datos y encuestas como dispositivos de poder en Colombia, y analizó la gestión del presidente Gustavo Petro. Caballero subrayó que entre agosto de 2022 y la fecha se han creado más de 2,2 millones de empleos, lo que ha contribuido a reducir la pobreza monetaria y la desigualdad, con el índice de Gini en descenso por primera vez en décadas.',
    'Destacó que el PIB agropecuario ha crecido por encima del PIB total por dos años consecutivos, rompiendo una tendencia de más de tres décadas, y que este comportamiento puede fortalecer la base electoral del progresismo en el sector rural. Resaltó además la decisión de cerrar el subsidio a la gasolina y avanzar en la eliminación del de ACPM, así como la aprobación de reformas clave como la tributaria, la pensional y la ratificación del Acuerdo de Escazú cuando el Ejecutivo promovió acuerdos amplios.',
    'Caballero consideró que estos logros deberían ser más comunicados por el gobierno, pero advirtió que persisten problemas graves en la reforma a la salud por falta de negociación y deficiencias en la ejecución, lo que podría llevar al colapso del sistema. Señaló también que el presidente ha roto puentes con sectores políticos y que existe falta de control sobre la Casa de Nariño, ministerios y entidades.',
    'El analista sostuvo que, aunque hay resistencia de parte de algunos sectores empresariales y políticos, también ha habido disposición de otros para alcanzar acuerdos, mencionando ejemplos de cooperación en proyectos de infraestructura y abastecimiento de agua. Reiteró que el éxito legislativo del Ejecutivo depende de mantener consensos y evitar la polarización interna.',
    'En su balance, Caballero expresó optimismo sobre los cambios sociales en marcha y consideró que Colombia necesitaba un gobierno con las características del actual, aunque cuestionó la renuncia del presidente a ciertas tareas de gobernar. Invitó a centrar esfuerzos en consolidar los avances económicos y sociales alcanzados en estos dos años y medio de mandato.'
  ],
  etiquetas: ['colombia', 'gustavo petro', 'política', 'resultados', 'encuestas','conversaciones pendientes'],
  fuente: { nombre: 'Conversaciones Pendientes', url: 'https://www.youtube.com/watch?v=7b3kV-v5YR8' },
  url_fuente: 'https://www.youtube.com/watch?v=7b3kV-v5YR8',
  consecutivo_unico: '20250815-01'
},
{
  id: 'ivan-cepeda-conversaciones-pendientes-juicio-uribe-2025-07-27',
  fecha: '2025-07-27',
  titulo: 'Iván Cepeda analiza el papel de la justicia y las víctimas ante fallo en juicio a Álvaro Uribe',
  pais: 'Colombia',
  resumen: 'En entrevista con Juan David Correa, Iván Cepeda reflexiona sobre el contexto histórico, político y judicial que rodea el juicio al expresidente Álvaro Uribe, previo a la lectura del sentido del fallo, abordando el papel de la justicia, las víctimas y las estructuras de poder en Colombia.',
  contenido: [
    'En el programa "Conversaciones Pendientes", Iván Cepeda habló sobre el juicio que enfrenta el expresidente Álvaro Uribe por fraude procesal, cuyo sentido del fallo será leído el 28 de julio en los Juzgados de Paloquemao, Bogotá. Cepeda repasó las raíces históricas del caso, vinculadas al auge del narcotráfico, el paramilitarismo y su relación con estructuras políticas desde la década de 1980 en Antioquia.',
    'El senador destacó el papel de la justicia como factor democrático y de contención frente a proyectos políticos, así como la importancia del movimiento de víctimas en visibilizar la verdad. Recordó hechos como la masacre de Jesús María Valle, la aparición del Bloque Metro y las investigaciones sobre la Hacienda Guacharacas, resaltando que estos sucesos marcaron un patrón de violencia y control territorial.',
    'Cepeda explicó que parte de los líderes paramilitares fueron extraditados a Estados Unidos para impedir que declararan sobre sus vínculos con actores políticos. Entre ellos mencionó a Salvatore Mancuso, cuya trayectoria y relaciones en Córdoba fueron documentadas en investigaciones previas. El congresista advirtió que esta práctica dificultó el acceso a la verdad judicial en Colombia.',
    'El entrevistado describió la existencia de una estructura para la compra o fabricación de testigos, con dos etapas principales: una entre 2012 y 2018 y otra a partir de la intervención del abogado Diego Cadena y sus colaboradores. Según Cepeda, la Corte Suprema de Justicia documentó la persistencia de estas prácticas y su repetición con diferentes actores para el mismo fin.',
    'Sobre el papel de los medios, Cepeda resaltó la labor de periodistas como Daniel Coronell, cuyo trabajo investigativo ha contribuido a esclarecer episodios clave y difundirlos ante la opinión pública, incluso enfrentando ataques en redes sociales y presiones mediáticas.',
    'En relación con las víctimas, subrayó que el reconocimiento legal de quienes sufrieron violencia estatal o paramilitar solo se dio a partir de la Ley de Víctimas de 2011. Antes de eso, las organizaciones que representaban a estas personas enfrentaban altos niveles de persecución y visibilidad limitada.',
    'Cepeda insistió en que su propósito no es la venganza, sino propiciar un acuerdo nacional que permita reconocer responsabilidades y llegar a la verdad de lo ocurrido. Defendió que la base de una democracia sólida es el esclarecimiento histórico y la justicia restaurativa, que incluya a todos los sectores afectados.',
    'Finalmente, expresó que la audiencia y el fallo que se avecinan representan una oportunidad para que el país reflexione sobre las estructuras de poder que han marcado su historia reciente y para avanzar hacia un modelo de justicia que priorice a las víctimas y la reparación social.'
  ],
  etiquetas: ['colombia', 'política', 'investigación', 'medios', 'conversaciones pendientes'],
  fuente: { nombre: 'YouTube - Conversaciones Pendientes', url: 'https://www.youtube.com/watch?v=-MpoeVZzaO8' },
  url_fuente: 'https://www.youtube.com/watch?v=-MpoeVZzaO8',
  consecutivo_unico: '20250727-01'
},
{
  id: 'aida-avella-entrevista-conversaciones-pendientes-2025-08-15',
  fecha: '2025-08-15',
  titulo: 'Aida Avella repasa su trayectoria política y el papel de la mujer en la izquierda colombiana',
  pais: 'Colombia',
  resumen: 'En una conversación con Juan David Correa, la senadora Aida Avella narró su experiencia como mujer en la política de izquierda, su paso por la Universidad Nacional en los años 70, la persecución a líderes sociales y el impacto de eventos como el fraude electoral de 1970.',
  contenido: [
    'En el programa "Conversaciones pendientes", conducido por Juan David Correa, la senadora Aida Avella repasó su trayectoria como líder política y sindical, así como las dificultades de ser mujer en la izquierda colombiana. Recordó su paso por la Universidad Nacional en los años 70, destacando la vida cultural y académica, y el ambiente de debate político que caracterizó a la institución en esa época.',
    'Avella describió la represión estatal contra dirigentes y militantes de izquierda, señalando que la persecución afectaba tanto a jóvenes como a personas mayores. Relató experiencias de semiclandestinidad, vigilancia y hostigamiento, y recordó que durante décadas el país estuvo bajo estados de sitio casi permanentes, lo que limitaba la participación política.',
    'También abordó el impacto del 19 de abril de 1970, cuando el presunto fraude electoral que favoreció a Misael Pastrana sobre Gustavo Rojas Pinilla generó descontento y un sentimiento de impotencia en amplios sectores sociales. Avella relacionó este hecho con la radicalización de algunos movimientos y la posterior formación de la Unión Patriótica, resaltando la importancia de la organización sindical y social en medio de la represión.'
  ],
  etiquetas: ['colombia', 'política', 'unión patriótica','conversaciones pendientes'],
  fuente: { nombre: 'YouTube - Conversaciones pendientes', url: 'https://www.youtube.com/watch?v=gAElF8Fo1to' },
  url_fuente: 'https://www.youtube.com/watch?v=gAElF8Fo1to',
  consecutivo_unico: '20250815-01'
},
{
  id: 'israel-plan-asentamientos-entierra-estado-palestino-2025-08-14',
  fecha: '2025-08-14',
  titulo: 'Ministro israelí aprueba plan de asentamientos que busca frenar la creación de un Estado palestino',
  pais: 'Internacional',
  resumen: 'El ministro de Finanzas de Israel, Bezalel Smotrich, aprobó un plan para construir miles de viviendas en asentamientos de Cisjordania con el objetivo declarado de impedir la formación de un Estado palestino.',
  contenido: [
    'El ministro de Finanzas de Israel, Bezalel Smotrich, aprobó un plan para la construcción de miles de viviendas en asentamientos israelíes en Cisjordania ocupada. Según declaró, la medida busca “enterrar la idea de un Estado palestino”.',
    'El proyecto contempla la expansión de varios asentamientos y la creación de nuevas infraestructuras, lo que, de acuerdo con organizaciones internacionales, contraviene el derecho internacional y complica las perspectivas de una solución de dos Estados.',
    'Autoridades palestinas y grupos de derechos humanos han condenado la decisión, calificándola como un paso más hacia la anexión de facto de territorios ocupados. La comunidad internacional ha expresado preocupación por el impacto de esta política en la estabilidad regional.'
  ],
  etiquetas: ['política', 'seguridad'],
  fuente: { nombre: 'France 24', url: 'https://www.france24.com/es/medio-oriente/20250814-ministro-israel%C3%AD-aprueba-plan-de-asentamientos-para-enterrar-la-idea-de-un-estado-palestino' },
  url_fuente: 'https://www.france24.com/es/medio-oriente/20250814-ministro-israel%C3%AD-aprueba-plan-de-asentamientos-para-enterrar-la-idea-de-un-estado-palestino',
  consecutivo_unico: '20250814-01'
},
{
  id: 'kalinskaya-solicita-cambios-horarios-wta-2025-08-14',
  fecha: '2025-08-14',
  titulo: 'Kalinskaya pide cambios en los horarios de juego de la WTA',
  pais: 'Internacional',
  resumen: 'La tenista rusa Anna Kalinskaya expresó su preocupación por los horarios tardíos en torneos de la WTA, tras jugar hasta pasada la medianoche y tener que competir nuevamente a la mañana siguiente contra Iga Swiatek. El partido fue finalmente reprogramado para el viernes.',
  contenido: [
    'La jugadora rusa Anna Kalinskaya manifestó su inconformidad con los horarios establecidos en algunos torneos de la WTA, argumentando que estos pueden afectar el rendimiento y la salud de las tenistas. La deportista señaló que competir hasta altas horas de la noche y volver a jugar a primera hora del día siguiente no ofrece condiciones justas para la recuperación física.',
    'Kalinskaya venía de disputar un exigente partido contra la rusa Ekaterina Alexandrova, que finalizó alrededor de las 00:20 h (hora local) con marcador de 3-6, 7-6 (5) y 6-1 a su favor. El encuentro, correspondiente a los octavos de final del WTA 1000 de Cincinnati, se prolongó por más de dos horas y media.',
    'Tras atender compromisos de prensa, recuperación física y traslado, la jugadora indicó que pudo irse a dormir cerca de las 02:00 h. Pese a ello, la organización programó su siguiente partido, correspondiente a los cuartos de final, para las 10:00 a.m. del día siguiente contra la polaca Iga Swiatek, tercera cabeza de serie del torneo.',
    'Finalmente, la programación fue modificada y el partido se reprogramó para el viernes, otorgando a ambas jugadoras un margen adicional de descanso. Kalinskaya insistió en que casos como este evidencian la necesidad de revisar los criterios de programación para proteger la salud y el rendimiento de las tenistas.',
    'El debate sobre los horarios en el circuito femenino se ha reavivado con este caso, sumándose a otras voces que han pedido a la WTA mayor flexibilidad y criterios más claros para programar los partidos, especialmente en torneos de alta exigencia y con condiciones climáticas variables.',
    'Fuentes citadas:',
    'https://www.puntodebreak.com/2025/08/14/kalinskaya-quiere-wta-torneo-tenistas-jueguen-estos-horarios-injustos',
    'https://as.com/tenis/masters_1000/linette-echa-a-pegula-y-kalinskaya-sigue-sonando-en-cincinnati-n/'
  ],
  etiquetas: ['deporte', 'tenis'],
  fuente: { nombre: 'Punto de Break', url: 'https://www.puntodebreak.com' },
  url_fuente: 'https://www.puntodebreak.com/2025/08/14/kalinskaya-quiere-wta-torneo-tenistas-jueguen-estos-horarios-injustos',
  consecutivo_unico: '20250814-01'
},
{
  id: 'juan-david-correa-la-cancion-del-destripador-2025-08-07',
  fecha: '2025-08-07',
  titulo: 'Juan David Correa lee “La canción del Destripador” en Jueves de Cambio',
  pais: 'Colombia',
  resumen: 'En su espacio “Jueves de Cambio”, el ministro de Cultura, Juan David Correa, leyó el texto titulado “La canción del Destripador” durante la conmemoración del 7 de agosto, abordando la idea de la falsa equivalencia política en Colombia y defendiendo un proyecto de sociedad incluyente.',
  contenido: [
    'El 7 de agosto de 2025, en el programa “Jueves de Cambio”, el ministro de Cultura, Juan David Correa, presentó el texto titulado “La canción del Destripador”. En él, cuestionó la idea de que Colombia esté dividida en dos mitades equivalentes, señalando que esta visión ignora las profundas desigualdades históricas y las luchas sociales vigentes.',
    'Correa argumentó que equiparar el uribismo y el petrismo omite reconocer que en el actual momento político se desarrolla un proyecto de sociedad más incluyente. Destacó la diversidad de sectores que apoyan al gobierno, desde comunidades indígenas y afrodescendientes hasta sindicatos, intelectuales y organizaciones sociales.',
    'El ministro subrayó la importancia de un nuevo modelo de desarrollo que priorice la vida, la soberanía alimentaria, la educación y la salud universales, y que enfrente el impacto ambiental del capital fósil. También recordó que las luchas actuales tienen antecedentes históricos y que no son comparables con épocas de violencia sistemática ejercida por el Estado y actores armados.',
    'En su intervención, hizo un recorrido histórico desde la independencia en 1819 hasta la Constitución de 1991, enfatizando que la desigualdad y la exclusión han persistido a lo largo de dos siglos. Llamó a rechazar la “canción del Destripador”, que simboliza discursos de odio y miedo, y a reconocer los avances, aunque sean insuficientes.',
    'Correa concluyó invitando a quienes se sienten distantes del proceso de cambio a reflexionar y participar en el diálogo nacional, resaltando que no hay dos mitades equivalentes y que es posible construir un país más justo e incluyente.'
  ],
  etiquetas: ['colombia', 'política', 'gustavo petro', 'editorial', 'medios','conversaciones pendientes'],
  fuente: { nombre: 'YouTube - Ministerio de Cultura de Colombia', url: 'https://www.youtube.com/watch?v=JVWLXGnG0j0' },
  url_fuente: 'https://www.youtube.com/watch?v=JVWLXGnG0j0',
  consecutivo_unico: '20250807-01'
},
{
  id: 'sinner-septimo-jugador-mas-semanas-consecutivas-numero-1-2025-07-21',
  fecha: '2025-07-21',
  titulo: 'Sinner alcanza séptimo puesto histórico por semanas consecutivas como número uno del tenis masculino',
  pais: 'Internacional',
  resumen: 'Jannik Sinner se convirtió en el séptimo jugador con más semanas consecutivas en el número uno del ranking ATP, consolidando su liderazgo en el circuito masculino.',
  contenido: [
    'El tenista italiano Jannik Sinner acumula 59 semanas consecutivas como número 1 del ranking ATP desde que debutó en esa posición el 10 de junio de 2024 :contentReference[oaicite:1]{index=1}.',
    'Con este registro, Sinner supera a figuras como John McEnroe (58 semanas) y se sitúa detrás de Lleyton Hewitt (75 semanas), Jimmy Connors, Roger Federer y otros en la clasificación histórica de permanencia como líder :contentReference[oaicite:2]{index=2}.',
    'Respecto a jugadores aún en actividad, Sinner lidera ampliamente: Carlos Alcaraz, su principal perseguidor actual, ha acumulado solo 36 semanas totales como número 1, sin encabezar el ranking de forma consecutiva :contentReference[oaicite:3]{index=3}.',
    'Además, Sinner integra un selecto grupo de solo cinco jugadores que durante su primera etapa en lo más alto han permanecido al menos un año completo (52 semanas o más): Roger Federer, Jimmy Connors, Lleyton Hewitt, Novak Djokovic y el propio Sinner :contentReference[oaicite:4]{index=4}.',
    'Fuentes citadas:',
    'https://www.puntodebreak.com/2025/07/21/sinner-septimo-jugador-historia-mas-semanas-consecutivas-numero-1'
  ],
  etiquetas: ['deportes', 'tenis', 'sinner'],
  fuente: { nombre: 'Punto de Break', url: 'https://www.puntodebreak.com' },
  url_fuente: 'https://www.puntodebreak.com/2025/07/21/sinner-septimo-jugador-historia-mas-semanas-consecutivas-numero-1',
  consecutivo_unico: '20250721-01'
},
{
  id: 'bayern-munich-respaldo-luis-diaz-supercopa-alemania-2025-08-15',
  fecha: '2025-08-15',
  titulo: 'Bayern Múnich respalda a Luis Díaz antes de la Supercopa de Alemania',
  pais: 'Alemania',
  resumen: 'El Bayern Múnich expresó su respaldo al colombiano Luis Díaz en la previa de la Supercopa de Alemania, destacando su talento y compromiso de cara al encuentro clave contra el Bayer Leverkusen.',
  contenido: [
    'En la antesala de la Supercopa de Alemania, el Bayern Múnich manifestó públicamente su apoyo al extremo colombiano Luis Díaz, quien se prepara para un duelo decisivo que marca el inicio oficial de la temporada.',
    'El cuerpo técnico y la directiva del club bávaro resaltaron el aporte del jugador durante la pretemporada, subrayando su capacidad para adaptarse rápidamente al esquema de juego y su potencial para marcar la diferencia en encuentros de alta exigencia.',
    'El rival en la Supercopa será el Bayer Leverkusen, vigente campeón de la Copa de Alemania, en un choque que reunirá a los dos equipos más destacados de la última campaña y que servirá como termómetro para medir el estado de forma de ambas plantillas.',
    'Luis Díaz, quien llegó al Bayern en el reciente mercado de fichajes, ha generado expectativas por su capacidad de desborde y su versatilidad en ataque, cualidades que podrían ser determinantes frente a un rival de alto nivel competitivo.',
    'La Supercopa de Alemania se disputará este fin de semana en Múnich, y se espera una amplia asistencia de aficionados. El encuentro no solo otorgará un título, sino que también será una oportunidad para que Díaz consolide su lugar como pieza clave en el equipo.'
  ],
  etiquetas: ['fútbol', 'alemania', 'colombia'],
  fuente: { nombre: 'ESPN', url: 'https://www.espn.com.co/futbol/alemania/nota/_/id/15540421/respaldo-bayern-munich-luis-diaz-antes-supercopa-alemania' },
  url_fuente: 'https://www.espn.com.co/futbol/alemania/nota/_/id/15540421/respaldo-bayern-munich-luis-diaz-antes-supercopa-alemania',
  consecutivo_unico: '20250815-01'
},
{
  id: 'mexico-retiro-colgate-total-clean-mint-por-riesgo-sanitario-2025-08-06',
  fecha: '2025-08-06',
  titulo: 'México ordena retiro de Colgate Total Clean Mint por posible riesgo sanitario',
  pais: 'México',
  resumen: 'La Cofepris ordenó retirar del mercado la pasta dental Colgate Total Clean Mint tras reportes de irritación bucal y otras reacciones adversas. Aunque no se ha confirmado la causa, en otros países se ha vinculado al fluoruro de estaño.',
  contenido: [
    'La Comisión Federal para la Protección contra Riesgos Sanitarios (Cofepris) emitió un aviso de riesgo sanitario ordenando el retiro del mercado de la pasta dental Colgate Total Clean Mint. La medida se tomó tras múltiples reportes de efectos adversos como irritación bucal, inflamación de encías, sensibilidad dental, úlceras, aftas y reacciones alérgicas.',
    'El aviso fue emitido en los primeros días de agosto de 2025 y aplica a todo el territorio mexicano. La Cofepris solicitó a distribuidores y puntos de venta suspender su comercialización y recomendó a los consumidores cambiar el producto por otra fórmula sin riesgo. También pidió reportar cualquier efecto adverso.',
    'Si bien la autoridad mexicana no ha identificado públicamente el componente responsable, en países como Brasil, Argentina, Chile y Colombia, el fluoruro de estaño ha sido señalado como posible causa de los problemas reportados. Este compuesto se utiliza para prevenir caries, gingivitis y sensibilidad dental, pero puede provocar efectos secundarios en personas sensibles.',
    'Fuentes citadas:',
    '1) El País. *México ordena retirar el dentífrico Colgate Total Clean Mint por un aviso de riesgo sanitario*. https://elpais.com/mexico/2025-08-06/mexico-ordena-retirar-el-dentifrico-colgate-total-clear-mint-por-un-aviso-de-riesgo-sanitario.html',
    '2) Infobae. *Este es el efecto del fluoruro de estaño y razón del retiro de la pasta Colgate Total Clean Mint*. https://www.infobae.com/mexico/2025/08/08/este-es-el-efecto-del-fluoruro-de-estano-y-razon-del-retiro-de-la-pasta-colgate-total-clean-mint/'
  ],
  etiquetas: ['salud', 'consumo', 'seguridad alimentaria'],
  fuente: 'Cofepris',
  url_fuente: 'https://elpais.com/mexico/2025-08-06/mexico-ordena-retirar-el-dentifrico-colgate-total-clear-mint-por-un-aviso-de-riesgo-sanitario.html',
  consecutivo_unico: '20250806-01',

},
]

// Export normalizado (garantiza arreglo de etiquetas siempre válido)
export const noticias: Noticia[] = noticiasRaw.map((n) => ({
  ...n,
  etiquetas: sanitizeTags(n.etiquetas ?? []),
}))