// src/data/noticias.ts
import { TAGS } from "./tags"

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

// === Datos en bruto ===
const noticiasRaw: NoticiaRaw[] = [
  // 🔽 PEGAR aquí debajo las noticias:

// 1) Nota ajustada para la ciudad (id fijo por ciudad)
{
  id: 'habitos-y-funcion-tiroides-2025-09-15',
  fecha: '2025-09-15',
  titulo: 'Doctor Carlos Jaramillo explica cómo los hábitos dañan la tiroides y generan consecuencias metabólicas',
  pais: 'Colombia',
  resumen: 'En un video educativo, el médico funcional colombiano Carlos Jaramillo subraya que los malos hábitos afectan la función tiroidea y que, como consecuencia, aparecen síntomas en el metabolismo. No se trata de “estar de malas”, sino de identificar y modificar factores que dañan la glándula.',
  contenido: [
    'En un video reciente publicado en YouTube, el Doctor Carlos Jaramillo —médico funcional colombiano— aborda la importancia de la tiroides como reguladora del metabolismo y aclara un punto central: no es que la glándula falle por azar, sino que los hábitos y condiciones de vida inadecuadas deterioran su función. A partir de allí surgen síntomas como fatiga persistente, aumento de peso, alteraciones digestivas, cambios en el ánimo, caída del cabello y sensación de frío excesivo.',
    'Jaramillo señala que la tiroides actúa como un “termostato” del cuerpo. Cuando está equilibrada, mantiene energía, claridad mental, temperatura y recambio celular en buen nivel. Pero si se ve afectada por deficiencias nutricionales, estrés o toxinas, todo el metabolismo se enlentece y aparecen manifestaciones clínicas que muchas veces no se detectan en exámenes básicos como la TSH. Por eso insiste en ampliar la evaluación hacia T3, T4, anticuerpos y nutrientes clave.',
    'El médico explica que distintos factores de estilo de vida pueden alterar la glándula. Entre los más relevantes menciona:',
    '- Déficit de nutrientes: carencias de yodo, selenio, zinc, hierro, magnesio, vitamina D, vitamina A y proteínas con tirosina impiden la producción normal de hormonas tiroideas.',
    '- Estrés crónico: el exceso de cortisol bloquea la conversión de T4 (inactiva) en T3 (activa), altera los receptores celulares y puede falsear resultados de laboratorio.',
    '- Intestino inflamado o permeable: la microbiota participa en la activación de T3; enfermedades como disbiosis o celiaquía reducen esta capacidad.',
    '- Autoinmunidad: la tiroiditis de Hashimoto se asocia a deficiencia de vitamina D, gluten, infecciones virales y toxicidad crónica.',
    '- Exposición a tóxicos: plásticos con BPA, pesticidas, metales pesados y cosméticos con químicos alteran receptores y enzimas vinculados a la tiroides.',
    '- Errores de estilo de vida: dietas hipocalóricas prolongadas, exceso de ejercicio sin recuperación, sueño deficiente y abuso de ultraprocesados generan disfunción sostenida.',
    'Para cada uno de estos factores, Jaramillo ofrece recomendaciones prácticas: mejorar la calidad de la dieta con proteínas, vegetales y grasas saludables; asegurar micronutrientes como selenio y vitamina D; practicar respiración consciente y pausas de descanso para controlar el estrés; cuidar la salud intestinal con fibra y alimentos fermentados; y reducir la exposición a plásticos y utensilios antiadherentes. Subraya que, con cambios progresivos en los hábitos, es posible reactivar la tiroides y prevenir complicaciones.',
    'En conclusión, el mensaje central del video es que la salud de la tiroides está en gran medida en nuestras manos: los hábitos cotidianos determinan si la glándula funciona de manera óptima o si, por el contrario, se ve forzada a trabajar en condiciones adversas que terminan desencadenando síntomas de hipotiroidismo funcional.'
  ],
  etiquetas: ['salud', 'alimentación', 'nutrición', 'colombia', 'carlos jaramillo','estlo de vida'],
  fuente: 'Canal de YouTube del Dr. Carlos Jaramillo',
  url_fuente: 'https://www.youtube.com/watch?v=TGiJFvIzUWA'
},
{
  id: 'ilan-volkov-discurso-bbc-proms-2025-09-15',
  fecha: '2025-09-15',
  titulo: 'El director israelí Ilan Volkov denuncia la guerra en Gaza durante concierto en Londres',
  pais: 'Internacional',
  resumen: 'El director de orquesta israelí Ilan Volkov interrumpió su presentación en el Royal Albert Hall de Londres para condenar públicamente la ofensiva militar de Israel en Gaza, afirmando que no podía seguir en silencio ante la muerte y el desplazamiento de miles de palestinos.',
  contenido: [
    'Durante su participación en los BBC Proms en el Royal Albert Hall de Londres, el director de orquesta israelí Ilan Volkov sorprendió al público con un discurso en el que condenó la guerra en Gaza. El músico expresó que en su corazón llevaba “un gran dolor” y que, aunque Israel era su hogar, no podía permanecer callado ante la situación.',
    'Volkov denunció la muerte de miles de palestinos, el desplazamiento repetido de familias y el colapso de hospitales y escuelas en la franja de Gaza. “Inocentes palestinos están siendo asesinados en miles, desplazados una y otra vez, sin hospitales ni escuelas, sin saber cuándo llegará la próxima comida”, afirmó ante los asistentes.',
    'La BBC interrumpió la transmisión televisiva del evento antes de que iniciara el discurso, argumentando que no había sido informado con antelación. Sin embargo, el mensaje se difundió ampliamente en redes sociales, generando reacciones internacionales.',
    'Posteriormente, en entrevista, Volkov anunció que no volverá a presentarse en Israel como acto de protesta. “No podemos dejar que esto continúe; cada momento que pasa pone en riesgo la seguridad de millones de personas”, señaló el director, quien fue ovacionado por parte del público presente.',
    'Fuentes citadas:',
    'Middle East Eye – https://x.com/MiddleEastEye/status/1835000000000000000'
  ],
  etiquetas: ['internacional', 'israel', 'palestina', 'gaza', 'ilan volkov', 'bbc proms'],
  fuente: { nombre: 'Middle East Eye', url: 'https://x.com/MiddleEastEye' },
  consecutivo_unico: '20250914-01'
},
{
  id: 'ingelheim-am-rhein-alemania-2025-09-15',
  fecha: '2025-09-15',
  titulo: 'Ingelheim am Rhein, Alemania: la "ciudad de Carlomagno"',
  pais: 'Alemania',
  resumen: 'Tenemos un nuevo visitante desde Ingelheim am Rhein, una ciudad alemana ubicada a orillas del río Rin, reconocida por su patrimonio histórico vinculado a Carlomagno y por ser sede de importantes actividades vitivinícolas y farmacéuticas.',
  contenido: [
    'Ingelheim am Rhein se encuentra en el estado federado de Renania-Palatinado, al suroeste de Alemania. Su localización a orillas del río Rin la ha convertido en un punto estratégico desde la Edad Media.',
    'La ciudad es conocida como la “ciudad de Carlomagno”, ya que allí se conserva parte del antiguo palacio imperial que data del siglo VIII. Este patrimonio atrae visitantes interesados en la historia europea.',
    'Además, Ingelheim am Rhein destaca por su tradición vitivinícola, siendo parte de la región del Rheinhessen, una de las áreas productoras de vino más importantes del país.',
    'En el ámbito económico, la ciudad alberga la sede global de la farmacéutica Boehringer Ingelheim, una de las empresas más influyentes en investigación y desarrollo de medicamentos a nivel mundial.'
  ],
  etiquetas: ['alemania','ciudades','perfil','ingelheim am rhein'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250915-01'
},
{
  id: 'carta-clara-lopez-pacto-social-vivo-2025-09-15',
  fecha: '2025-09-15',
  titulo: 'Clara López propone al presidente Petro la creación del primer Pacto Social Vivo',
  pais: 'Colombia',
  resumen: 'La senadora Clara López Obregón envió una carta abierta al presidente Gustavo Petro proponiendo la construcción de un “Pacto Social Vivo” como base de una nueva Constitución, con amplia participación ciudadana apoyada en inteligencia artificial.',
  contenido: [
    'El 14 de septiembre de 2025, la senadora Clara López Obregón dirigió una carta abierta al presidente Gustavo Petro en la que plantea la creación del primer “Pacto Social Vivo del planeta”. La propuesta surge tras el anuncio del mandatario de activar el proceso constituyente y busca que la ciudadanía diseñe directamente el nuevo pacto social de Colombia.',
    
    'López propone que el país se convierta en la “Primera Nación de la Democracia Directa”, donde jóvenes, mujeres, comunidades indígenas, afrocolombianas, campesinos, empresarios, migrantes, académicos y artistas co-creen un nuevo modelo de Estado. La idea es que cada ciudadano tenga un papel activo en el diseño de la nueva arquitectura institucional, ecológica, económica y espiritual de Colombia.',
    
    'Un aspecto central de la propuesta es la creación de una Plataforma Nacional de Inteligencia Artificial Regenerativa, concebida como una infraestructura tecnológica, humana y viva que conecte a millones de colombianos. A través de ella, se podrían recoger, traducir y visibilizar las propuestas para la nueva Constitución, con mecanismos de trazabilidad pública, deliberación inclusiva y recompensas simbólicas y educativas.',
    
    'El anexo de la carta detalla la creación de un Sistema Nacional de Participación Ciudadana con IA (SNP-CIA). Este sistema integraría redes sociales, plataformas de streaming, portales nacionales y conectividad satelital para garantizar la inclusión de comunidades rurales y jóvenes. También prevé el uso de la IA para sintetizar propuestas, traducirlas a lenguas indígenas, detectar patrones y responder preguntas en tiempo real.',
    
    'La senadora subraya que este proceso permitiría a Colombia co-crear y votar el primer pacto social vivo del mundo, abierto a todos los ciudadanos a partir de los 15 años. En sus palabras, “Colombia ya está lista” para liderar un modelo democrático más avanzado del siglo XXI.',
    
    'La importancia del uso de la inteligencia artificial en este proceso radica en su capacidad de ampliar la participación ciudadana más allá de las limitaciones tradicionales. Según la propuesta, la IA no reemplazaría la acción humana, sino que serviría como herramienta para organizar, traducir y democratizar el acceso a la deliberación, garantizando inclusión, transparencia y equidad en la construcción de la nueva Constitución.'
  ],
  etiquetas: ['colombia','politica','gustavo petro','clara lopez obregon','constitucion','inteligencia artificial'],
  fuente: { nombre: 'Clara López Obregón', url: 'https://x.com/ClaraLopezObre/status/1967546233183936622' },
  url_fuente: 'https://x.com/ClaraLopezObre/status/1967546233183936622',
  consecutivo_unico: '20250915-01'
},
{
  id: 'gustavo-bolivar-entrevista-conversaciones-pendientes-2025-09-14',
  fecha: '2025-09-14',
  titulo: 'Gustavo Bolívar aborda orígenes, economía popular y desafíos políticos en entrevista',
  pais: 'Colombia',
  resumen: 'En “Conversaciones Pendientes”, Gustavo Bolívar repasa su trayectoria personal y profesional, explica su enfoque sobre la economía popular y el cooperativismo, y describe retos para combatir la corrupción y organizar políticas sociales desde el territorio.',
  contenido: [
    '¿Qué pasó? En una entrevista del canal de Juan David Correa, Gustavo Bolívar expuso los hitos de su vida —de vendedor ambulante y guionista a funcionario público— y explicó por qué el “amor” y la fe han orientado su servicio. ¿Quién? Bolívar, escritor y actor político; ¿Cuándo y dónde? Publicado en YouTube (Colombia) en 2025; ¿Cómo y por qué? A través de un diálogo de largo aliento, planteó que su motivación es el trabajo por la gente y la reducción de desigualdades mediante políticas sostenidas.',
    'Sobre economía popular, Bolívar defendió el impulso al cooperativismo y al microcrédito como vías para reemplazar el “gota a gota” y formalizar ingresos en sectores de alta informalidad. Afirmó que, durante su gestión, se diseñaron mecanismos de garantía para ampliar crédito productivo y que asociaciones de padres podrían operar parte del Plan de Alimentación Escolar, condicionadas a capacitación y controles, con el fin de reducir intermediación y sobrecostos.',
    'En materia de seguridad y economías ilícitas, describió la necesidad de controles estrictos en aduanas y direcciones estratégicas, subrayando que la integridad de los cargos públicos es condición para frenar contrabando y narcotráfico. También señaló tensiones dentro de fuerzas políticas y reiteró que su postura pasa por “resistir” prácticas clientelistas y fortalecer el diálogo con sectores productivos sobre la base de reglas claras.',
    'Para educación y cultura, propuso una visión de largo plazo: formar generaciones bilingües con competencias técnicas desde la escuela como estrategia estructural para movilidad social y reducción de la violencia. Cerró con un llamado a continuar reformas sociales y a mantener un debate público sin agravios, con metas verificables y participación de comunidades y empresarios.'
  ],
  etiquetas: ['colombia','política','economía','medios','conversaciones pendientes','podcast'],
  fuente: { nombre: 'YouTube – Conversaciones Pendientes (Juan David Correa)', url: 'https://www.youtube.com/watch?v=_yBwBk0v_t0' },
  consecutivo_unico: '20250914-04'
},
{
  id: 'al-nassr-y-su-base-en-riyadh-2025-09-14',
  fecha: '2025-09-14',
  titulo: 'Al Nassr, Riyadh y CR7: la combinación que redefine al club saudí',
  pais: 'Arabia Saudita',
  resumen: 'Al Nassr Football Club, con sede en Riyadh, cuenta desde 2023 con Cristiano Ronaldo entre sus figuras principales; la presencia del astro portugués ha reforzado su visibilidad internacional y su capacidad competitiva.',
  contenido: [
    'Al Nassr Football Club es un club profesional de fútbol de Arabia Saudita, que compite en la Saudi Pro League, la máxima categoría del fútbol saudí.',
    'El club fue fundado el 24 de octubre de 1955 por los hermanos Al-Ja‘ba. Tiene una gran tradición en Arabia Saudita, con numerosos títulos nacionales y también éxitos internacionales y regionales.',
    'La sede del club, sus entrenamientos y los partidos como local se realizan en la ciudad de Riyadh, capital de Arabia Saudita. El estadio principal que utilizan actualmente es el Al-Awwal Park, ubicado en Riyadh.',
    'Desde finales de 2022, **Cristiano Ronaldo** forma parte de Al Nassr, aportando experiencia de élite, goles y reconocimiento global al club. :contentReference[oaicite:0]{index=0}',
    'Riyadh es la capital y la ciudad más grande de Arabia Saudita, ubicada en la región central del país sobre la meseta de Najd. Tiene una población de más de 7 millones de personas y se encuentra a unos 600 metros sobre el nivel del mar.',
    'La capital ofrece al club una base estratégica: acceso a una gran masa de aficionados, medios de comunicación, patrocinadores e infraestructura deportiva de primer nivel.',
    'Fuentes citadas:',
    '1) Wikipedia – *Al-Nassr FC*: https://en.wikipedia.org/wiki/Al-Nassr_FC',
    '2) Wikipedia – *Cristiano Ronaldo*: https://en.wikipedia.org/wiki/Cristiano_Ronaldo',
    '3) Artículos de prensa deportiva que confirman su llegada y desempeño en Al Nassr.'
  ],
  etiquetas: ['deportes','fútbol','arabia saudita','riyadh','al nassr','CR7','Cristiano Ronaldo'],
  fuente: 'Wikipedia y medios deportivos verificados',
  url_fuente: 'https://en.wikipedia.org/wiki/Al-Nassr_FC',
  consecutivo_unico: '20250914-02'
},
{
  id: 'carnaval-de-barranquilla-unesco-patrimonio-2025-09-14',
  fecha: '2025-09-14',
  titulo: 'Carnaval de Barranquilla: patrimonio cultural inmaterial de la humanidad (UNESCO)',
  pais: 'Colombia',
  resumen: 'La UNESCO reconoce al Carnaval de Barranquilla como elemento del Patrimonio Cultural Inmaterial de la Humanidad: proclamado en 2003 e inscrito en la Lista Representativa en 2008, por su repertorio de danzas, músicas y expresiones que reflejan el cruce de tradiciones europeas, africanas e indígenas.',
  contenido: [
    '¿Qué es? El Carnaval de Barranquilla es una celebración anual que, en los cuatro días previos a la Cuaresma, reúne danzas, músicas e instrumentos tradicionales de la región Caribe de Colombia. ¿Quién lo reconoce? La UNESCO. ¿Cuándo? Proclamado en 2003 e inscrito en 2008. ¿Dónde? Barranquilla, costa Caribe de Colombia. ¿Por qué? Por su valor representativo de tradiciones vivas y diversidad cultural. ¿Cómo? A través de prácticas festivas, desfiles, comparsas y expresiones artísticas que se transmiten de generación en generación.',
    'La UNESCO destaca la convergencia histórica de influencias europeas, africanas e indígenas en las danzas (como el congo y el paloteo), géneros musicales (cumbia, puya y porro) e instrumentos (tambora, alegre, maracas y claves). También resalta su profusa cultura material —carrozas, máscaras y vestuarios— y advierte que la creciente comercialización puede amenazar expresiones tradicionales, por lo que la salvaguardia comunitaria resulta clave.',
    'El Carnaval de Barranquilla es un referente de prácticas sociales y artes escénicas dentro de los dominios de la Convención 2003 de la UNESCO, y contribuye a objetivos de desarrollo sostenible al impulsar actividades culturales y oportunidades económicas locales, en equilibrio con la preservación de sus tradiciones.'
  ],
  etiquetas: ['colombia', 'carnaval de barranquilla', 'unesco', 'patrimonio cultural inmaterial'],
  fuente: { nombre: 'UNESCO', url: 'https://ich.unesco.org/en/RL/carnival-of-barranquilla-00051' },
  url_fuente: 'https://ich.unesco.org/en/RL/carnival-of-barranquilla-00051',
  consecutivo_unico: '20250914-01'
},
{
  id: 'barranquilla-at-co',
  fecha: '2025-09-14',
  titulo: 'Perfil de la ciudad de Barranquilla, Atlántico, Colombia',
  pais: 'Colombia',
  resumen: 'Barranquilla, capital del departamento del Atlántico, es una de las principales ciudades de Colombia y un centro estratégico en la región Caribe. Se destaca por su puerto sobre el río Magdalena y por ser un eje cultural y económico del país.',
  contenido: [
    'Barranquilla se ubica en la región norte de Colombia, a orillas del río Magdalena y cercana al mar Caribe. Con más de 1,2 millones de habitantes en su área metropolitana, es considerada la cuarta ciudad más poblada del país.',
    'La ciudad es reconocida por su importancia como puerto fluvial y marítimo, facilitando el comercio internacional. También es un centro industrial, logístico y cultural de gran relevancia en la región.',
    'Entre sus expresiones culturales más destacadas se encuentra el [Carnaval de Barranquilla](https://ledelab.co/noticias/carnaval-de-barranquilla-unesco-patrimonio-2025-09-14), declarado Patrimonio Oral e Inmaterial de la Humanidad por la UNESCO en 2003.',
    'Su localización estratégica, infraestructura portuaria y riqueza cultural convierten a Barranquilla en un punto clave para el desarrollo económico y social de Colombia.'
  ],
  etiquetas: ['colombia','ciudades','barranquilla','atlántico'],
  fuente: 'LedeLab',
  consecutivo_unico: 'ciudad-0001'
},
{
  id: 'piloto-southwest-arrestado-sospecha-dui-2025-08-15',
  fecha: '2025-08-15',
  titulo: 'Piloto de Southwest retirado de cabina para prueba de sobriedad en enero',
  pais: 'Estados Unidos',
  resumen: 'Un piloto de Southwest Airlines fue arrestado el 15 de enero de 2025 antes de un vuelo desde Savannah, Georgia, tras sospechas de conducir bajo los efectos del alcohol. Video de cámara corporal muestra la prueba de sobriedad. El artículo fue publicado el 19 de agosto de 2025.',
  contenido: [
    'El 15 de enero de 2025, el piloto David Paul Allsop fue arrestado en el Aeropuerto Savannah/Hilton Head en Georgia antes de un vuelo con destino a Chicago, luego de que autoridades lo retiraran de la cabina por sospechas de intoxicación y realizar una prueba de sobriedad.',
    'El incidente fue dado a conocer formalmente cuando se reveló un video de cámara corporal (“body-cam”) el 15 de enero de 2025, fecha en que se publicó la noticia en diversos medios como People y ABC.',
    'Según los reportes, el piloto presentó ojos enrojecidos, fuerte olor a alcohol, y se negó inicialmente a hacer la prueba de alcoholemia. También alegó que el olor provenía de parches de nicotina.',
    'Southwest Airlines confirmó que fue apartado de sus funciones mientras se adelanta la investigación.'
  ],
  etiquetas: ['estados unidos','aviacion','southwest airlines','seguridad','DUI'],
  fuente: { nombre: 'People / ABC7 Chicago / NBC News', url: 'https://www.nbcnews.com/news/us-news/video-shows-southwest-pilot-pulled-plane-taking-sobriety-test-dui-arre-rcna225270' },
  url_fuente: 'https://www.nbcnews.com/news/us-news/video-shows-southwest-pilot-pulled-plane-taking-sobriety-test-dui-arre-rcna225270',
  consecutivo_unico: '20250819-01'
},
{
  id: 'nuevos-lectores-monteria-cordoba-oportunidades-2025-09-14',
  fecha: '2025-09-14',
  titulo: 'Montería, Córdoba: nuevos lectores y oportunidades para conocer la región',
  pais: 'Colombia',
  resumen: 'La capital de Córdoba aparece por primera vez en Google Analytics como ciudad de origen de lectores de Noticias Neutrales, lo que abre la puerta a destacar su cultura, economía y oportunidades de visita.',
  contenido: [
    'Montería, capital del departamento de Córdoba, se ha sumado recientemente a las ciudades desde donde llegan nuevos lectores a Noticias Neutrales, según los registros de Google Analytics. Este hecho representa un paso más en la misión del portal de dar visibilidad a distintas regiones del mundo y fomentar la fidelización de audiencias locales.',
    'Ubicada a orillas del río Sinú, Montería es reconocida como una de las ciudades intermedias más importantes del Caribe colombiano. Su economía está ligada a la ganadería, la agricultura y un creciente sector de servicios, al tiempo que su biodiversidad y entorno natural la convierten en un destino atractivo tanto para residentes como para visitantes.',
    'El reconocimiento a Montería no solo obedece a su papel económico y cultural, sino también a la hospitalidad que ofrece a quienes llegan a la ciudad. Un ejemplo es el Hotel Sites Montería ([ver sitio web](https://www.sites.com.co/)), que ha consolidado una propuesta moderna y de calidad para los viajeros. La cadena también cuenta con sede en Barranquilla, ubicada en el mismo barrio donde reside el fundador de Noticias Neutrales, lo que refuerza el vínculo personal y regional de este espacio informativo.',
    'La aparición de Montería en la comunidad digital de Noticias Neutrales abre la oportunidad de estrechar lazos con lectores cordobeses, destacar historias locales y promover una visión equilibrada y sin polarización de la realidad. Al mismo tiempo, permite invitar a quienes aún no conocen la ciudad a descubrir su riqueza natural, su cultura caribeña y sus crecientes oportunidades de desarrollo.'
  ],
  etiquetas: ['audiencia','nuevos usuarios','montería','córdoba','regiones','turismo','economía local'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250914-03'
},
{
  id: 'el-caminante-presentacion-proyecto-2025-09-13',
  fecha: '2025-09-13',
  titulo: 'El Caminante: una nueva sección para redescubrir el espacio urbano desde los pies',
  pais: 'colombia',
  resumen: 'El proyecto El Caminante busca visibilizar los retos cotidianos que enfrentan los peatones en ciudades como Barranquilla, y promover una reflexión sobre movilidad, salud y convivencia urbana.',
  contenido: [
    'El Caminante es una nueva sección editorial impulsada por Noticias Neutrales para explorar, documentar y reflexionar sobre la experiencia de caminar en entornos urbanos. Su origen nace de recorridos reales por las calles de Barranquilla, donde se evidencian obstáculos, contradicciones e incluso peligros que enfrenta quien decide desplazarse a pie.',
    
    'Esta iniciativa busca responder preguntas como: ¿Cómo se transforma la ciudad cuando la recorremos a pie? ¿Qué tipo de aceras, sombras o señalización hacen que caminar sea una opción segura y digna? ¿Qué decisiones individuales y colectivas están detrás del abandono del espacio peatonal en favor del vehículo particular?', 

    'Uno de los casos que inspira esta sección es la transformación de una cuadra barranquillera tras obras de renovación vial. El nuevo piso, aunque visualmente uniforme, resulta riesgoso al volverse resbaladizo con la lluvia. La intervención, pensada tal vez desde la estética o la accesibilidad vehicular, generó nuevas dificultades para los caminantes. Situaciones como estas se repiten con frecuencia en zonas residenciales y comerciales de muchas ciudades colombianas.',

    'Más allá de las quejas, El Caminante se propone como una herramienta para el análisis constructivo y pedagógico. A través de notas breves, registros audiovisuales y entrevistas espontáneas, se buscará crear un archivo vivo del espacio urbano desde la perspectiva del peatón. También se abordarán temas culturales, como la relación entre vestimenta formal y resistencia a caminar, o la dependencia del automóvil incluso para trayectos cortos.',

    'Esta sección se integrará progresivamente a nuestra categoría de Estilo de Vida, proponiendo caminar no solo como necesidad, sino como posibilidad transformadora: saludable, económica, ecológica y profundamente humana.',
    
    'El proyecto se desarrollará inicialmente en Barranquilla, pero aspira a extenderse a otras ciudades de Colombia y América Latina. Se aceptarán colaboraciones de caminantes que deseen documentar su entorno, así como propuestas desde arquitectura, urbanismo, salud pública y cultura ciudadana.',

  ],
  etiquetas: ['colombia', 'estilo de vida', 'movilidad', 'urbanismo'],
  fuente: 'Noticias Neutrales',
},
{
  id: 'estonia-exportaciones-importaciones-julio-2025-09-11',
  fecha: '2025-09-11',
  titulo: 'Exportaciones de Estonia crecieron 9 % en julio y las importaciones 11 %',
  pais: 'Estonia',
  resumen: 'En julio de 2025, el comercio exterior de Estonia registró un aumento del 9 % en las exportaciones y del 11 % en las importaciones en comparación con el mismo mes del año anterior, según datos de Statistics Estonia.',
  contenido: [
    'De acuerdo con Statistics Estonia, las exportaciones de bienes del país alcanzaron un valor de 1,9 mil millones de euros en julio de 2025, lo que representa un incremento del 9 % respecto al mismo mes de 2024.',
    'Las importaciones sumaron 2,1 mil millones de euros, con un aumento interanual del 11 %. Esto generó un déficit comercial cercano a los 200 millones de euros.',
    'El crecimiento estuvo impulsado principalmente por mayores ventas de maquinaria y equipo eléctrico, así como de productos minerales. En el caso de las importaciones, destacaron los combustibles minerales y los productos químicos.',
    'Fuentes citadas:',
    'Statistics Estonia. "Juulis kasvas kaupade eksport 9% ja import 11%". https://stat.ee/et/uudised/juulis-kasvas-kaupade-eksport-9-ja-import-11'
  ],
  etiquetas: ['economía', 'resultados'],
  fuente: { nombre: 'Statistics Estonia', url: 'https://stat.ee' },
  url_fuente: 'https://stat.ee/et/uudised/juulis-kasvas-kaupade-eksport-9-ja-import-11',
  consecutivo_unico: '20250911-01'
},
{
  id: 'corte-constitucional-fallo-esperanza-gomez-redes-2025-09-12',
  fecha: '2025-09-12',
  titulo: 'Corte Constitucional falla a favor de Esperanza Gómez y fija jurisprudencia sobre moderación de contenido en redes',
  pais: 'Colombia',
  resumen: 'La Corte Constitucional de Colombia respaldó a la actriz Esperanza Gómez en un caso contra Meta, estableciendo un precedente sobre la moderación de contenidos en plataformas digitales.',
  contenido: [
    'La Corte Constitucional de Colombia falló este viernes 12 de septiembre a favor de la actriz Esperanza Gómez en un caso contra la compañía Meta. La decisión se da tras la eliminación de publicaciones de la actriz en Instagram, lo que abrió un debate sobre los límites de la moderación en redes sociales.',
    'El tribunal determinó que, aunque las plataformas privadas tienen autonomía para fijar sus reglas de uso, estas no pueden desconocer derechos fundamentales como la libertad de expresión. La sentencia establece jurisprudencia al señalar que las medidas de moderación deben ser proporcionales y justificadas.',
    'La Corte ordenó la restitución de las publicaciones eliminadas y advirtió a Meta sobre la obligación de garantizar transparencia en los procesos de moderación. El fallo ha sido catalogado como un precedente que impactará futuras discusiones sobre regulación de redes sociales en Colombia.',
    'Fuentes citadas:',
    'https://www.eltiempo.com/justicia/cortes/meta-versus-esperanza-gomez-corte-constitucional-falla-a-favor-de-la-actriz-porno-y-sienta-jurisprudencia-sobre-la-moderacion-del-contenido-en-redes-3490262'
  ],
  etiquetas: ['colombia', 'política', 'medios'],
  fuente: { nombre: 'El Tiempo', url: 'https://www.eltiempo.com' },
  url_fuente: 'https://www.eltiempo.com/justicia/cortes/meta-versus-esperanza-gomez-corte-constitucional-falla-a-favor-de-la-actriz-porno-y-sienta-jurisprudencia-sobre-la-moderacion-del-contenido-en-redes-3490262',
  consecutivo_unico: '20250912-01'
},
{
  id: "haiti-pandillas-onu-2025-09-13",
  fecha: "2025-09-13",
  titulo: "ONU alerta sobre control de pandillas en Puerto Príncipe",
  pais: "Internacional",
  resumen: "La ONU informó que alrededor del 90 % de la capital haitiana está bajo influencia de pandillas, lo que agrava la crisis política y de seguridad en el país caribeño.",
  contenido: [
    "La Organización de las Naciones Unidas advirtió que grupos armados ejercen control sobre la mayoría de Puerto Príncipe, limitando la presencia del Estado y afectando la vida cotidiana de la población.",
    "El dato fue presentado ante el Consejo de Seguridad y coincide con informes de agencias humanitarias y decisiones de terceros países, como la extensión de restricciones aéreas por parte de Estados Unidos.",
    "Aunque existen antecedentes de cuestionamientos a misiones de la ONU en Haití, como el brote de cólera de 2010, los reportes actuales han sido corroborados por varias fuentes internacionales."
  ],
  etiquetas: ["seguridad", "política", "investigación"],
  fuente: "DW",
  url_fuente: "https://www.dw.com/es/onu-alerta-que-las-pandillas-controlan-90-de-la-capital-de-hait%C3%AD/a-73128320",
  consecutivo_unico: "20250913-01"
},
{
  id: 'proyecto-justicia-victimas-abuso-sexual-iglesia-2025-09-13',
  fecha: '2025-09-13',
  titulo: 'Proyecto busca garantizar justicia a víctimas de abuso sexual en la Iglesia',
  pais: 'Colombia',
  resumen: 'Un proyecto legislativo en Colombia propone reformas para garantizar justicia a las víctimas de abuso sexual en el contexto de la Iglesia, con medidas de reparación, sanción y prevención.',
  contenido: [
    'El Congreso de Colombia recibió la radicación de un proyecto de ley que busca asegurar justicia y reparación para las víctimas de abuso sexual en la Iglesia. La iniciativa contempla mecanismos judiciales más ágiles, fortalecimiento de la protección a menores y sanciones para encubridores.',
    'El proyecto surge tras múltiples denuncias de víctimas que afirman haber enfrentado barreras institucionales y silencios prolongados dentro de la Iglesia católica. La propuesta incluye la creación de rutas de atención integral y la obligación de cooperación plena por parte de instituciones religiosas con las autoridades judiciales.',
    'De acuerdo con sus impulsores, la ley pretende garantizar que ninguna víctima quede desprotegida y que los responsables enfrenten sanciones claras. Además, se prevén medidas de prevención y formación para reducir riesgos de nuevos casos de abuso.',
    'Fuentes citadas:',
    'El Espectador: https://www.elespectador.com/judicial/abuso-sexual-en-la-iglesia-este-es-el-proyecto-que-busca-garantizar-justicia-a-las-victimas/'
  ],
  etiquetas: ['colombia','política','seguridad','investigación'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com' },
  url_fuente: 'https://www.elespectador.com/judicial/abuso-sexual-en-la-iglesia-este-es-el-proyecto-que-busca-garantizar-justicia-a-las-victimas/',
  consecutivo_unico: '20250913-01'
},
{
  id: 'charlie-sheen-documental-netflix-2025-09-13',
  fecha: '2025-09-13',
  titulo: 'Charlie Sheen cuestiona al alcohol en documental de Netflix',
  pais: 'Estados Unidos',
  resumen: 'El actor estadounidense Charlie Sheen lanzó un documental de dos episodios en Netflix donde comparte reflexiones sobre su vida y adicciones. Una de sus frases más comentadas fue su valoración crítica del alcohol, al que calificó como “la droga más desagradable en el planeta”.',
  contenido: [
    'Charlie Sheen, conocido por su papel en la serie *Two and a Half Men*, presentó en septiembre de 2025 un documental en Netflix que explora su historia personal con las adicciones y su proceso de recuperación. La producción ofrece un recorrido íntimo por momentos clave de su carrera y de su vida privada.',
    'En una de las declaraciones más destacadas, Sheen expresó: "Now that I think about it, alcohol is the most disgusting drug on the planet". En español: "Ahora que lo pienso, el alcohol es la droga más desagradable en el planeta". La frase generó amplio debate en redes sociales por su contraste con la percepción cultural y legal que tiene esta sustancia frente a otras drogas.',
    'El documental aborda también las dificultades que enfrentó Sheen en su vida profesional a raíz de su consumo, incluyendo su salida de la serie que lo catapultó a la fama. Al exponer sus experiencias, el actor busca abrir un espacio de reflexión sobre los riesgos del alcohol y de las adicciones en general, sin recurrir a un tono moralizante, sino desde su vivencia personal.',
    'La producción forma parte de la creciente tendencia de celebridades en Estados Unidos y otros países a usar plataformas de streaming para contar, en primera persona, sus historias de superación. En este caso, Sheen combina relatos de su trayectoria con un mensaje sobre la importancia de reconocer los riesgos asociados a sustancias que gozan de aceptación social.',
    'El sentido de este comentario no fue un simple exabrupto, sino una reflexión sobre su experiencia personal con las adicciones. Sheen subrayó que, aunque probó distintas sustancias, el alcohol fue la que más daño le causó en términos de salud, relaciones y estabilidad laboral. La frase también busca evidenciar la contradicción entre la aceptación social y legal de esta bebida y el alto potencial de adicción y deterioro que conlleva.',
    'Fuentes citadas:',
    '1) Netflix. Charlie Sheen Documentary (2025). https://www.netflix.com',
    '2) The Guardian. Charlie Sheen opens up on addiction in Netflix documentary (2025). https://www.theguardian.com'
  ],
  etiquetas: ['estados unidos','salud','consumo','alcohol'],
  fuente: { nombre: 'Netflix', url: 'https://www.netflix.com' },
  url_fuente: 'https://www.theguardian.com',
  consecutivo_unico: '20250913-01'
},
{
  id: 'dinamarca-compra-armas-historica-2025-09-13',
  fecha: '2025-09-13',
  titulo: 'Dinamarca anuncia la mayor compra de armas de su historia',
  pais: 'Internacional',
  resumen: 'El gobierno danés confirmó la adquisición de equipamiento militar por un valor sin precedentes, con el objetivo de reforzar sus capacidades de defensa en el contexto de la guerra en Ucrania y el aumento de tensiones en Europa.',
  contenido: [
    'El Ministerio de Defensa de Dinamarca anunció el 12 de septiembre de 2025 la compra de armas más grande de su historia, con una inversión de 40.000 millones de coronas danesas (alrededor de 5.400 millones de euros).',
    'La primera ministra Mette Frederiksen explicó que la decisión responde al compromiso de fortalecer la defensa nacional y cumplir con los objetivos de gasto en la OTAN. Parte de los recursos se destinarán a la adquisición de misiles, artillería y sistemas de defensa aérea.',
    'Según el gobierno danés, el incremento en las capacidades militares busca también respaldar a Ucrania frente a la invasión rusa y garantizar la seguridad de Europa del Norte. Se trata de una medida considerada histórica por el monto y alcance de las adquisiciones.',
    'El plan se implementará durante los próximos años e incluye acuerdos con socios de la Unión Europea y Estados Unidos, reforzando la cooperación estratégica en el marco de la Alianza Atlántica.'
  ],
  etiquetas: ['seguridad','política'],
  fuente: { nombre: 'DW', url: 'https://www.dw.com/es/dinamarca-anuncia-la-mayor-compra-de-armas-de-su-historia/a-73974372' },
  consecutivo_unico: '20250913-01'
},
{
  id: 'nepal-nueva-primera-ministra-2025-09-12',
  fecha: '2025-09-12',
  titulo: 'Nepal nombra nueva primera ministra tras protestas',
  pais: 'Internacional',
  resumen: 'Pushpa Bhusal Gautam fue designada como nueva primera ministra de Nepal tras la renuncia de Khadga Prasad Sharma Oli, en medio de protestas que dejaron al menos una decena de muertos y cientos de heridos.',
  contenido: [
    'El Parlamento de Nepal eligió el 12 de septiembre de 2025 a Pushpa Bhusal Gautam como nueva primera ministra. Gautam, de 55 años, se convierte en la primera mujer en ocupar el cargo en el país.',
    'El nombramiento se produjo después de que Khadga Prasad Sharma Oli renunciara tras semanas de protestas masivas en Katmandú y otras ciudades, que exigían cambios políticos y económicos. Las manifestaciones derivaron en enfrentamientos violentos con la policía, dejando al menos diez fallecidos y cientos de heridos, según cifras oficiales.',
    'La nueva mandataria prometió en su discurso inicial abrir un proceso de diálogo nacional para atender las demandas de los manifestantes y recuperar la estabilidad política. También anunció la conformación de un gabinete provisional con representación multipartidista.',
    'Organismos internacionales han llamado al respeto de los derechos humanos y a la moderación en el uso de la fuerza durante las protestas en Nepal. La comunidad internacional ha reconocido el nombramiento como un paso clave para restaurar la confianza en las instituciones del país.'
  ],
  etiquetas: ['política', 'seguridad'],
  fuente: { nombre: 'DW', url: 'https://www.dw.com/es/nepal-nombra-nueva-primera-ministra-tras-violentas-protestas/a-73982214' },
  url_fuente: 'https://www.dw.com/es/nepal-nombra-nueva-primera-ministra-tras-violentas-protestas/a-73982214',
  consecutivo_unico: '20250912-01'
},
{
  id: 'democracia-colombia-mexico-argentina-mejoras-2025-09-13',
  fecha: '2025-09-13',
  titulo: 'Colombia, México y Argentina muestran avances en apoyo a la democracia',
  pais: 'Internacional',
  resumen: 'Nuevos informes de Latinobarómetro y organismos internacionales destacan que Colombia, México y Argentina han registrado aumentos en los niveles de satisfacción y apoyo a la democracia durante 2024.',
  contenido: [
    'Colombia registró un aumento en el apoyo a la democracia. Según Latinobarómetro, la satisfacción con el funcionamiento democrático pasó del 43 % en 2023 al 48 % en 2024. El informe de IDEA Internacional también ubica al país en un rango medio-alto en independencia judicial y democracia local, aunque persisten retos en cultura política y desigualdad económica.',
    'En México, la satisfacción con la democracia alcanzó un récord histórico. El 50 % de los encuestados manifestó estar satisfecho en 2024, el nivel más alto desde 1995. Además, la preferencia por la democracia frente a cualquier otra forma de gobierno creció de 35 % en 2023 a 49 % en 2024.',
    'Argentina también mostró una mejora sustancial en la valoración ciudadana de la democracia. El apoyo alcanzó el 75 % en 2024, con un incremento marcado frente al año anterior. Analistas atribuyen esta tendencia a la alternancia política tras las últimas elecciones presidenciales.',
    'Fuentes citadas:',
    'Latinobarómetro. Informe 2023. https://hoy.com.do/wp-content/uploads/2023/07/Latinobarometro_Informe_2023_230721.pdf',
    'IDEA Internacional. Democracy Tracker: Colombia. https://www.idea.int/democracytracker/country/colombia',
    'El Financiero. Satisfacción con la democracia rompe récord en México. https://www.elfinanciero.com.mx/nacional/2025/01/13/satisfaccion-con-la-democracia-rompe-record-en-mexico-encuesta-lb',
    'iProfesional. Ranking de países latinoamericanos más satisfechos con la democracia. https://www.iprofesional.com/politica/422270-ranking-paises-latinoamericanos-mas-satisfechos-con-la-democracia'
  ],
  etiquetas: ['política', 'colombia', 'resultados'],
  fuente: { nombre: 'DW', url: 'https://www.dw.com/es/democracias-fr%C3%A1giles-libertades-en-retroceso-el-panorama-latinoamericano/a-73981798' },
  consecutivo_unico: '20250913-01'
},
{
  id: 'rtvc-cambio-de-nombre-inravision-2025-09-12',
  fecha: '2025-09-12',
  titulo: 'RTVC anuncia cambio de nombre y recuperación de la marca Inravisión',
  pais: 'Colombia',
  resumen: 'El gerente de RTVC, Hollman Morris, confirmó que el sistema de medios públicos adoptará el nombre Inravisión, como parte de un proceso de transformación institucional y de fortalecimiento de su identidad histórica.',
  contenido: [
    'El gerente de RTVC, Hollman Morris, anunció este 12 de septiembre que el sistema de medios públicos cambiará su nombre y pasará a denominarse Inravisión, recuperando así la marca que tuvo hasta comienzos de la década de 2000.',
    'Según Morris, la decisión busca fortalecer la identidad cultural y la memoria colectiva en torno a la televisión pública, además de resaltar la misión de servicio al país que caracteriza a los medios estatales.',
    'El cambio se enmarca en un proceso de reorganización institucional que incluye ajustes en la programación y la modernización de plataformas digitales, con el objetivo de ampliar el alcance de los contenidos públicos.',
    'El anuncio fue realizado a través de RTVC Noticias y en redes sociales oficiales, sin que hasta el momento se haya especificado la fecha exacta en la que se formalizará el cambio de nombre.'
  ],
  etiquetas: ['colombia','medios'],
  fuente: { nombre: 'RTVC Noticias', url: 'https://www.rtvcnoticias.com/actualidad/rtvc/hollman-morris-anuncia-cambio-de-nombre-de-rtvc-inravision?fbclid=IwVERTSAMxg3xleHRuA2FlbQIxMAABHnIZfR-vIZnGm2NDSTV-AclSUh2sGYUehOoLHuJ9i2H80CAHGKaId7xS-XMc_aem_PYw26oeeMA-LyEElZ8GSZQ' },
  url_fuente: 'https://www.rtvcnoticias.com/actualidad/rtvc/hollman-morris-anuncia-cambio-de-nombre-de-rtvc-inravision?fbclid=IwVERTSAMxg3xleHRuA2FlbQIxMAABHnIZfR-vIZnGm2NDSTV-AclSUh2sGYUehOoLHuJ9i2H80CAHGKaId7xS-XMc_aem_PYw26oeeMA-LyEElZ8GSZQ',
  consecutivo_unico: '20250912-01'
},
{
  id: "dw-imperio-espanol-auge-colapso-2025-09-11",
  fecha: "2025-09-11",
  titulo: "Cómo nació el Imperio español y qué lo llevó al colapso: el repaso histórico de DW Español",
  pais: "España",
  resumen: "Un documental de DW Español recorre el origen, expansión y declive del Imperio español: de los viajes de Colón a las reformas borbónicas, con debates éticos sobre la conquista, tensiones económicas y un legado cultural que aún marca al mundo hispano.",
  contenido: [
    "DW Español presenta un panorama de largo aliento sobre el Imperio español, desde 1492 hasta el final de su expansión colonial. La pieza organiza los hitos en torno a dos tensiones constantes: la búsqueda de riqueza y poder, y la voluntad de dotar a esa expansión de reglas morales y estructuras estables. El resultado es un retrato con luces y sombras que evita simplificaciones.",
    "El punto de partida es la empresa de Cristóbal Colón. El documental recuerda que una comisión de expertos había desaconsejado su plan por razones de cálculo y logística, pero que los Reyes Católicos lo respaldaron al prometer nuevas rutas comerciales hacia Asia. El primer viaje culminó en Las Bahamas y abrió un proceso de exploración y asentamiento con objetivos heterogéneos: lucro, evangelización y control político.",
    "Muy pronto aparecieron fricciones. Informes sobre abusos y esclavización en La Española llevaron a la Corona a investigar la actuación de Colón y a retirarle privilegios. La narrativa subraya una dualidad que acompañará a todo el imperio: mientras se buscaban metales y rentas, también se intentaba fijar límites legales al trato de las poblaciones indígenas.",
    "En 1511, la denuncia de frailes dominicos sobre malos tratos desembocó en el primer gran paquete normativo: las Leyes de Burgos (1512). Sobre el papel, reconocían a los indígenas como personas libres y dueñas de sus bienes, prohibían trabajos extenuantes y regulaban la encomienda; a la vez, mantenían la idea de conquista “justa” si se rechazaba el orden evangelizador. La contradicción entre principios y práctica marcó ese primer siglo.",
    "La pieza explica que las victorias militares dependieron menos del número de soldados europeos y más de las alianzas locales. El caso de Hernán Cortés ilustra el patrón: con pocos cientos de españoles y decenas de miles de aliados indígenas —entre ellos tlascaltecas— tomó Tenochtitlán en 1521. El apoyo de intérpretes y mediadores, como Malinalli (la Malinche), fue decisivo para entender la política regional.",
    "El relato también expone episodios de extrema violencia. Cita la campaña de Nuño de Guzmán en Nueva Galicia, con cacerías de esclavos y castigos ejemplarizantes que terminaron en procesos y destitución. El mensaje es claro: hubo abusos graves, a veces castigados, otras tolerados, en un contexto bélico donde las masacres eran frecuentes.",
    "En el sur, Francisco Pizarro aprovechó la guerra civil inca entre Atahualpa y Huáscar para abrirse paso. La captura y ejecución de Atahualpa, pese al rescate de oro y plata, simboliza la mezcla de negociación, sorpresa militar y fracturas internas que favorecieron la conquista de Cuzco en 1533. La expansión continuó con nuevas audiencias y virreinatos.",
    "La Corona intentó dotar de marco ético y jurídico a ese proceso. La Controversia de Valladolid (1550–1551) enfrentó las posturas de Bartolomé de las Casas y Juan Ginés de Sepúlveda sobre la legitimidad de la guerra y los derechos de los indígenas. Antes, las Leyes Nuevas (1542) habían abolido formalmente la esclavitud indígena y ordenado liberaciones masivas, con resistencias económicas en minas y haciendas.",
    "El documental explora, además, una vía de integración que suele pasar inadvertida: educación, lenguas y mestizaje. Se fundaron universidades y hospitales; se redactaron gramáticas de náhuatl y quechua para evangelizar y administrar; y, desde muy temprano, la Corona promovió matrimonios mixtos. Con el tiempo, sin embargo, surgieron jerarquías de “castas” y certificados de limpieza de sangre que rigidizaron la movilidad social.",
    "En el plano económico, la extracción de plata y el ‘quinto real’ financiaron obras, ciudades y salarios en América, y sostuvieron el poder militar de la Monarquía en Europa. Pero la abundancia de metal también presionó los precios en la Península, favoreció importaciones frente a la manufactura local y coincidió con guerras costosas contra potencias como Francia, Inglaterra y el Imperio otomano. Hubo bancarrotas soberanas incluso en el apogeo de Felipe II.",
    "Durante el siglo XVIII, con los Borbones, se intentó recentralizar y modernizar: se crearon nuevos virreinatos (como Nueva Granada y Río de la Plata), se reformó la administración y se potenciaron iniciativas científicas y sanitarias. La Expedición Filantrópica de la Vacuna (1803–1810) llevó la inoculación contra la viruela a América y Filipinas, un esfuerzo logístico inusual para la época que redujo la mortalidad y buscó proteger la economía colonial.",
    "Aun así, la erosión geopolítica se aceleró. La ocupación napoleónica dejó a España sin capacidad de sostener su red trasatlántica; siguieron las guerras de independencia y, más tarde, la derrota de 1898 frente a Estados Unidos, con la pérdida de Cuba, Puerto Rico y Filipinas. Fue el punto de inflexión que consolidó el final del imperio de ultramar.",
    "El cierre del documental vuelve sobre el legado. Más allá del balance institucional y económico, destaca la pervivencia de un espacio cultural compartido por centenares de millones de hispanohablantes y un tejido de referencias literarias, jurídicas y urbanas que conectan ambas orillas del Atlántico. Un resultado complejo: avances y atrocidades, integración y conflicto, cuya huella sigue presente en la política y la sociedad iberoamericana.",
    "En síntesis, DW propone leer la historia del Imperio español como un laboratorio de ambiciones materiales y búsquedas normativas que rara vez coincidieron. La expansión generó riqueza y estructuras; también dejó heridas y jerarquías. El declive respondió a desajustes fiscales, presiones bélicas y cambios del equilibrio mundial. Entender esa trayectoria, sugiere la pieza, ayuda a explicar tanto la fragmentación posterior como la vigencia de un patrimonio cultural común."
  ],
  etiquetas: ["geopolítica", "historia", "españa", "américa latina", "documental", "dw"],
  fuente: { nombre: "DW Español (YouTube)", url: "https://www.youtube.com/watch?v=ovWPiPHJtlM" },
  consecutivo_unico: "20250911-03"
},
{
  id: "pirry-planeta-no-necesita-que-lo-salven-2025-09-11",
  fecha: "2025-09-11",
  titulo: "Pirry: El planeta no necesita que lo salven; la cuestión es si vamos a salvarnos nosotros",
  pais: "Colombia",
  resumen: "En el podcast Aprendamos Juntos 2030 (BBVA), Pirry plantea que la Tierra seguirá existiendo más allá de la especie humana. La verdadera pregunta es si nosotros lograremos sobrevivir como especie, al depender del equilibrio ecológico.",
  contenido: [
    "En una intervención del episodio de Aprendamos Juntos 2030 (BBVA), Guillermo Prieto “Pirry” respondió a una pregunta sobre los océanos y planteó un cambio de perspectiva: no se trata de salvar al planeta, sino de reconocer que dependemos de él para sobrevivir.",
    "Pirry señaló: “Siento que si el océano nos dice algo no es ‘ayúdame’, ‘sálvame’. No. Es… ‘yo puedo existir sin ti, tú no puedes existir sin mí’. El océano produce el 50 % del oxígeno que respiramos… El océano está en un estado crítico, pero el océano se recuperará”.",
    "Añadió: “El planeta no necesita que lo salven. El planeta está aquí hace millones y millones de años… Podemos lanzarnos todas nuestras armas atómicas y, con cuatro bacterias que sobrevivan, esto se vuelve a poner otra vez verde y azul. No es si vamos a salvar el planeta, es si nos vamos a salvar nosotros”.",
    "La charla también dejó reflexiones sobre la escala del tiempo: al descender el Salto Ángel en Venezuela, Pirry contrastó formaciones de dos mil millones de años con la presencia humana estimada en apenas 200.000 años, lo que lo llevó a enfatizar que somos apenas un instante frente a la historia geológica.",
    "Otros apartes abordaron la relación entre humanidad y naturaleza: la observación de gorilas de montaña en Virunga y la deforestación vecina, la cirugía de emergencia a un elefante herido por caza furtiva en África y el contacto cercano con ballenas en Tonga, experiencias que reforzaron su idea de que la ley natural es el equilibrio, no la moralidad.",
    "Pirry concluyó recordando el caso de la moratoria internacional de caza de ballenas en los años ochenta y la recuperación de esas poblaciones como prueba de que, cuando la humanidad acuerda prioridades y actúa con decisión, la vida responde."
  ],
  etiquetas: [
    "medio ambiente",
    "cambio climático",
    "biodiversidad",
    "conciencia ecológica",
    "podcast",
    "aprendamos juntos 2030"
  ],
  fuente: { nombre: "BBVA Aprendamos Juntos 2030 (YouTube)", url: "https://www.youtube.com/watch?v=s_GG3W5hfK0" },
  consecutivo_unico: "20250911-01"
},
{
  id: 'ivan-cepeda-tercer-discurso-revolucion-etica-2025-09-10',
  fecha: '2025-09-11',
  titulo: 'Iván Cepeda plantea una revolución ética desde la defensa de los derechos humanos',
  pais: 'Colombia',
  resumen: 'En su tercer discurso como precandidato presidencial del Pacto Histórico, el senador Iván Cepeda expuso en la Universidad Nacional la necesidad de una “revolución ética” basada en la verdad de las víctimas y la defensa de la dignidad humana.',
  contenido: [
    'El senador Iván Cepeda, precandidato del Pacto Histórico, presentó su tercer discurso titulado “¿Qué significa una revolución ética desde la defensa de la humanidad?” durante un acto en la Universidad Nacional de Colombia en el Día Nacional de los Derechos Humanos. En su intervención, destacó el papel transformador de las luchas sociales y de las víctimas de crímenes de lesa humanidad en la construcción de una cultura de derechos en el país.',
    'Cepeda recordó figuras como Jesús María Valle y Héctor Abad Gómez, defensores asesinados, y señaló que en Colombia los derechos humanos han sido fruto de movilizaciones persistentes más que de concesiones estatales. Subrayó que las mujeres, en particular las madres buscadoras de desaparecidos, han sido esenciales en la visibilización de crímenes como la desaparición forzada y los falsos positivos.',
    'El precandidato advirtió sobre el riesgo de una “parálisis moral” producto de la violencia prolongada, que normaliza las atrocidades y erosiona la conciencia ética. Frente a ello, afirmó que el poder de la verdad de las víctimas es fundamental para reactivar la empatía social, desenmascarar a los responsables de graves crímenes y abrir camino hacia la reconciliación y la paz.',
    'Finalmente, en un pronunciamiento internacional, Cepeda condenó lo que calificó como genocidio contra el pueblo palestino en Gaza, en el marco de su reflexión sobre la defensa de los derechos humanos en Colombia y en el mundo.',
    'Fuente citada: Video completo del discurso en YouTube https://www.youtube.com/watch?v=vfvMnExauPA'
  ],
  etiquetas: ['colombia', 'política', 'unión patriótica','ivan cepeda'],
  fuente: { nombre: 'YouTube', url: 'https://www.youtube.com/watch?v=vfvMnExauPA' },
  consecutivo_unico: '20250910-03'
},
{
  id: 'vulnerabilidad-salarial-colombia-dane-2025-09-09',
  fecha: '2025-09-11',
  titulo: 'DANE establece umbral de vulnerabilidad salarial en Colombia',
  pais: 'Colombia',
  resumen: 'El DANE señaló que un salario inferior a 1,47 millones de pesos mensuales coloca a una persona en situación de vulnerabilidad económica.',
  contenido: [
    'El Departamento Administrativo Nacional de Estadística (DANE) identificó que quienes perciben menos de aproximadamente $1.470.000 mensuales se encuentran en estado de vulnerabilidad económica.',
    'Este umbral refleja el límite entre pobreza y vulnerabilidad, indicando una franja crítica en la capacidad de satisfacer necesidades básicas.',
    'El dato proviene de un análisis reciente del DANE divulgado por El Tiempo el 9 de septiembre de 2025.'
  ],
  etiquetas: ['economía', 'finanzas personales', 'Colombia'],
  fuente: {
    nombre: 'El Tiempo',
    url: 'https://www.eltiempo.com/economia/finanzas-personales/si-su-salario-es-inferior-a-este-monto-se-encuentra-en-un-estado-de-vulnerabilidad-en-colombia-de-acuerdo-con-los-datos-del-dane-3488976'
  },
  url_fuente: 'https://www.eltiempo.com/economia/finanzas-personales/si-su-salario-es-inferior-a-este-monto-se-encuentra-en-un-estado-de-vulnerabilidad-en-colombia-de-acuerdo-con-los-datos-del-dane-3488976',
  consecutivo_unico: '20250909-01'
},
{
  id: 'explosion-camion-gas-ciudad-mexico-2025-09-10',
  fecha: '2025-09-11',
  titulo: 'Explosión de camión de gas deja más de 50 heridos en Ciudad de México',
  pais: 'México',
  resumen: 'Un camión de gas explotó en un puente vehicular en Ciudad de México, provocando una grave emergencia con más de 50 personas heridas y fuertes afectaciones a la movilidad.',
  contenido: [
    'El 10 de septiembre de 2025 se registró una explosión de un camión de gas en un puente vehicular de la Ciudad de México. El incidente generó una emergencia de gran magnitud, con la intervención de cuerpos de rescate y atención médica inmediata en la zona.',
    'De acuerdo con reportes oficiales, más de 50 personas resultaron heridas, algunas de ellas de gravedad. Las autoridades informaron que el fuego alcanzó varios vehículos que circulaban por el lugar y que fue necesaria la evacuación de transeúntes y automovilistas.',
    'El tránsito en la zona quedó bloqueado mientras se realizaban labores de control del incendio y traslado de heridos a hospitales cercanos. Equipos de bomberos, protección civil y servicios de salud trabajan de manera coordinada para atender la emergencia.',
    'Hasta el momento no se han reportado víctimas mortales. Las autoridades locales investigan las causas del accidente y evalúan los daños estructurales en el puente afectado.'
  ],
  etiquetas: ['seguridad', 'Mexico'],
  fuente: { nombre: 'El Tiempo', url: 'https://www.eltiempo.com/mundo/mexico/video-grave-emergencia-en-ciudad-de-mexico-por-explosion-de-camion-de-gas-en-importante-puente-vehicular-hay-mas-de-50-personas-heridas-3489572' },
  url_fuente: 'https://www.eltiempo.com/mundo/mexico/video-grave-emergencia-en-ciudad-de-mexico-por-explosion-de-camion-de-gas-en-importante-puente-vehicular-hay-mas-de-50-personas-heridas-3489572',
  consecutivo_unico: '20250910-01'
},
{
  id: 'debate-carolina-corcho-paloma-valencia-2025-09-11',
  fecha: '2025-09-11',
  titulo: 'Carolina Corcho y Paloma Valencia exponen visiones sobre seguridad y paz en la Universidad Militar',
  pais: 'Colombia',
  resumen: 'En la Universidad Militar Nueva Granada se realizó un encuentro académico con las precandidatas Carolina Corcho y Paloma Valencia, centrado en seguridad multidimensional, narcotráfico, paz y políticas sociales. Corcho intervino primero; Valencia se incorporó más tarde y ambas respondieron preguntas del auditorio.',
  contenido: [
    'El 10 de septiembre de 2025, la Universidad Militar Nueva Granada (Bogotá) convocó un debate académico sobre “seguridad multidimensional, visión estratégica e impacto en Colombia 2026”. La sesión inició con la exposición de Carolina Corcho; posteriormente se integró Paloma Valencia ante un auditorio compuesto por estudiantes y docentes y con miles de personas conectadas en línea.',
    'Corcho planteó la seguridad humana y multidimensional como marco orientador, con énfasis en proteger la vida de comunidades y fuerza pública, y en abordar causas estructurales como pobreza, desigualdad y acceso a salud y educación. Propuso reencauzar la sustitución de cultivos ilícitos en municipios críticos (incluidos Catatumbo y Cañón del Micay), mantener presencia integral del Estado y fortalecer inteligencia y contrainteligencia con desarrollo tecnológico propio. Sobre “paz total”, defendió replantearla con condiciones: diálogo sin ceses al fuego que faciliten el delito y líneas rojas frente a secuestro, reclutamiento de menores y actos terroristas.',
    'Valencia centró su intervención en la necesidad de resultados para la democracia y en la recuperación económica y de la seguridad. Señaló preocupaciones sobre déficit fiscal y sobre el funcionamiento del sistema de salud, y propuso robustecer la fuerza pública (incluida la incorporación de reservistas), aumentar capacidad de inteligencia financiera, perseguir cabecillas mediante imputación por línea de mando, controlar precursores químicos e incautaciones, y usar herramientas de trazabilidad económica (p. ej., blockchain) contra el lavado de activos.',
    'En materia social y educativa, Corcho enfatizó inversión pública sostenida, acceso gratuito a educación superior y reforma de la salud con enfoque preventivo y territorial. Valencia defendió ampliar opciones para familias mediante bonos escolares y promover una agenda de crecimiento que atraiga industrias de alta tecnología y refuerce la seguridad energética.',
    'En relaciones exteriores, Corcho subrayó la cooperación con países vecinos y principios de soberanía y no injerencia para enfrentar fenómenos transnacionales (narcotráfico, minería ilegal y lavado). Valencia reiteró su rechazo a regímenes no democráticos en la región, planteó respaldo a Israel con atención a la situación humanitaria en Gaza y expresó reparos a la influencia de Rusia en América Latina.',
    'Durante la ronda de preguntas, se confrontaron posturas sobre financiamiento de reformas sociales, el rol de la fuerza pública y los instrumentos jurídicos para sometimiento a la justicia de estructuras criminales. En sus cierres, Corcho insistió en medir la seguridad en vidas preservadas y mantener la presencia estatal sin vulneración de derechos humanos; Valencia llamó a una coalición de “demócratas” para garantizar seguridad como base del desarrollo e impulsar a Colombia como potencia energética y tecnológica.'
  ],
  etiquetas: ['colombia','política','seguridad','carolina corcho','paloma valencia'],
  fuente: { nombre: 'Universidad Militar Nueva Granada (transmisión del evento en YouTube)', url: 'https://www.youtube.com/watch?v=RtVhIGTH0Fc' },
  url_fuente: 'https://www.youtube.com/watch?v=RtVhIGTH0Fc',
  consecutivo_unico: '20250911-01'
},
  {
  id: 'correlaciones-bienestar-irreligion-2025-09-09',
  fecha: '2025-09-10',
  titulo: 'Correlaciones entre irreligión y bienestar en países con baja religiosidad',
  pais: 'Internacional',
  resumen: 'Un análisis basado en datos de la ONU, Pew Research y Gallup muestra que los países con altos niveles de irreligión suelen destacar en bienestar subjetivo y desarrollo humano, especialmente en Europa del Norte.',
  contenido: [
    'Introducción',
    'La relación entre religiosidad, irreligión y bienestar social ha sido objeto de estudio en sociología, psicología y ciencias políticas durante las últimas décadas. Diversos informes internacionales, como el World Happiness Report de la ONU y los estudios del Pew Research Center, muestran un patrón consistente: los países con menores niveles de afiliación religiosa suelen ocupar posiciones destacadas en indicadores de bienestar subjetivo, desarrollo humano e igualdad social. Este artículo explora las principales correlaciones entre irreligión y bienestar, con especial atención a sociedades nórdicas y europeas.',

    'Panorama global de la irreligión',
    'Según Pew Research (2017), aproximadamente el 16 % de la población mundial se identifica como “no afiliada” a ninguna religión. Este grupo incluye ateos, agnósticos y personas que, aunque puedan practicar rituales culturales, no se adscriben a una fe organizada. En Europa Occidental y el norte de Europa, la irreligión alcanza entre el 40 % y el 70 % de la población, con cifras particularmente altas en Suecia, Estonia, República Checa y Países Bajos.',
    'En contraste, regiones con menores niveles de seguridad económica y social —como África subsahariana, Medio Oriente o América Latina— mantienen porcentajes de religiosidad significativamente más altos, lo que sugiere un vínculo entre condiciones materiales y afiliación religiosa.',

    'Bienestar subjetivo y religiosidad',
    'El World Happiness Report 2023 situó a Finlandia, Dinamarca, Islandia y Suecia en los primeros puestos mundiales en bienestar subjetivo. Estos países coinciden en tres rasgos:',
    '1. Altos niveles de irreligión o baja práctica religiosa.',
    '2. Estados de bienestar sólidos que garantizan educación, salud y pensiones universales.',
    '3. Elevada confianza interpersonal e institucional.',
    'En términos individuales, estudios de Gallup muestran que en sociedades más pobres, las personas religiosas reportan mayores niveles de satisfacción vital que los no religiosos. Sin embargo, a nivel nacional, la tendencia se invierte: los países con mayor irreligión suelen tener un bienestar promedio superior.',

    'Causas estructurales de la correlación',
    'Los expertos sugieren que la relación entre irreligión y bienestar no es de causalidad directa, sino de correlación mediada por factores estructurales:',
    '- Seguridad social: cuando el Estado garantiza protección frente a riesgos (desempleo, enfermedad, vejez), disminuye la función de la religión como red de apoyo.',
    '- Educación: altos niveles educativos se asocian con mayor escepticismo religioso y con la preferencia por explicaciones científicas.',
    '- Igualdad social: sociedades más equitativas presentan menos necesidad de recurrir a instituciones religiosas como mecanismos de cohesión y apoyo.',

    'Casos de estudio',
    '- Suecia y Dinamarca: países con más del 60 % de población sin afiliación religiosa, lideran el bienestar global y presentan bajas tasas de criminalidad y alta confianza institucional.',
    '- Estonia: uno de los países más irreligiosos del mundo (70 % de la población no afiliada), muestra un rápido ascenso en el Índice de Desarrollo Humano gracias a políticas digitales y educativas.',
    '- Japón: aunque no se identifica como irreligioso en su totalidad, su religiosidad es cultural más que dogmática, y el bienestar se asocia principalmente a la seguridad social y el desarrollo económico.',

    'Conclusiones',
    'La evidencia internacional indica que la irreligión prospera en contextos de bienestar material, seguridad institucional y altos niveles de educación. En los países más irreligiosos, el bienestar subjetivo se encuentra entre los más altos del mundo, lo que refuerza la idea de que la religión cumple un papel sustitutivo allí donde los Estados no garantizan protección.',
    'La correlación no implica que la irreligión cause mayor bienestar, sino que ambos fenómenos responden a un mismo trasfondo: el desarrollo socioeconómico y la consolidación de instituciones sólidas.',

    'Fuentes citadas:',
    '1) United Nations. World Happiness Report 2023. https://worldhappiness.report',
    '2) Pew Research Center. The Future of World Religions: Population Growth Projections, 2015–2060. https://www.pewresearch.org',
    '3) Gallup World Poll. Religion and Wellbeing Data. https://www.gallup.com'
  ],
  etiquetas: ['investigación','bienestar','religión','internacional'],
  fuente: 'LedeLab',
  consecutivo_unico: '202509010-06'
},
{
  id: 'luis-javier-suarez-cuatro-goles-seleccion-colombia-2025-09-09',
  fecha: '2025-09-09',
  titulo: 'Luis Javier Suárez marca cuatro goles con la Selección Colombia',
  pais: 'Colombia',
  resumen: 'El delantero Luis Javier Suárez se convirtió en el primer jugador en la historia de la Selección Colombia en anotar cuatro goles en un solo partido, durante la victoria 6-3 sobre Venezuela en Maturín.',
  contenido: [
    'Luis Javier Suárez, delantero de la Selección Colombia, hizo historia el 9 de septiembre de 2025 al convertirse en el primer futbolista en marcar cuatro goles en un mismo partido con el equipo nacional. El logro se produjo en la victoria de Colombia 6-3 sobre Venezuela, en modo Maturín.',
    'La actuación de Suárez fue decisiva para asegurar la victoria en un partido vibrante y contundente, reforzando su importancia en el esquema ofensivo del equipo.',
    'Se trata de la primera vez que un jugador de la selección marca cuatro goles en un encuentro de la absoluta desde 1945, superando casos anteriores en los que algunos alcanzaron tripletes —como Arnoldo Iguarán, Faustino Asprilla, Iván René Valenciano y Víctor Aristizábal— sin llegar a este registro. :contentReference[oaicite:3]{index=3}',
    'Este resultado se enmarca en las últimas fechas de las eliminatorias al Mundial 2026, y representa un impulso clave para las aspiraciones del equipo hacia la Copa del Mundo.',
    'Fuentes citadas:',
    'El Tiempo — https://www.eltiempo.com/deportes/futbol-internacional/luis-javier-suarez-hace-historia-con-seleccion-colombia-es-el-primer-jugador-que-marca-4-goles-en-un-partido-3489232'
  ],
  etiquetas: ['colombia','goleador','eliminatorias','buenas noticias'],
  fuente: { nombre: 'El Tiempo', url: 'https://www.eltiempo.com/deportes/futbol-internacional/luis-javier-suarez-hace-historia-con-seleccion-colombia-es-el-primer-jugador-que-marca-4-goles-en-un-partido-3489232' },
  url_fuente: 'https://www.eltiempo.com/deportes/futbol-internacional/luis-javier-suarez-hace-historia-con-seleccion-colombia-es-el-primer-jugador-que-marca-4-goles-en-un-partido-3489232',
  consecutivo_unico: '20250909-01'
},
{
  id: 'carne-roja-y-pescado-equilibrio-nutricional-2025-09-10',
  fecha: '2025-09-10',
  titulo: 'Carne roja y pescado: el equilibrio nutricional en la dieta',
  pais: 'Colombia',
  resumen: 'Cortes como el lomo ancho y la punta de anca aportan hierro y vitamina B12, mientras que pescados grasos como el salmón y la sardina son las principales fuentes de omega-3. Una dieta que combine ambos puede cubrir necesidades nutricionales clave.',
  contenido: [
    'La elección de proteínas animales en la dieta no solo depende de la cantidad de proteínas que aportan, sino también de los nutrientes específicos que cada alimento ofrece. La carne roja y el pescado, en particular, destacan por contener compuestos que no se encuentran en abundancia en otras fuentes.',
    'En el caso de la carne roja, cortes populares como el lomo ancho o la punta de anca son ricos en hierro hemo, que el organismo absorbe con mayor facilidad, además de zinc, vitamina B12, creatina y carnitina. Estos nutrientes cumplen un papel clave en la producción de energía y la función neuromuscular. Una porción de 400 g de este tipo de carne, por ejemplo, cubre ampliamente los requerimientos diarios de hierro y B12.',
    'Por su parte, el pescado graso como el salmón, la caballa o la sardina, aporta ácidos grasos omega-3 (EPA y DHA), esenciales para la salud cardiovascular y cerebral. El salmón silvestre suele tener un perfil más favorable de ácidos grasos que el de cultivo: aunque ambos son fuentes ricas en omega-3, el silvestre mantiene una relación más alta de omega-3 frente a omega-6 gracias a su dieta natural a base de peces y plancton. El de cultivo, alimentado con piensos que incluyen aceites vegetales, conserva un aporte importante de EPA y DHA, pero junto con un nivel mayor de omega-6, lo que hace menos óptimo su balance.',
    'En Colombia, la mayor parte del salmón disponible proviene de Chile, principalmente de la Región de Los Lagos y Aysén. Aunque sigue siendo una fuente válida de omega-3, quienes buscan maximizar este nutriente pueden optar por variedades silvestres importadas o por pescados pequeños como la sardina, que suele encontrarse en conservas, aunque también puede conseguirse congelada o fresca en algunos mercados especializados.',
    'El pollo, aunque popular, cumple un papel distinto: es una fuente de proteína magra de buena calidad, pero no ofrece un nutriente exclusivo como la carne roja con su hierro hemo o el pescado con sus omega-3. Por eso, muchas recomendaciones nutricionales priorizan el consumo de pescado graso y carne roja en cantidades moderadas, con el pollo como complemento.',
    'En definitiva, una dieta que combine de manera equilibrada carne roja, pescado y otras fuentes proteicas puede cubrir de forma amplia las necesidades de micronutrientes esenciales. Priorizar pescados ricos en omega-3 y cortes de carne con buen aporte de hierro y zinc contribuye a un patrón alimentario variado y con beneficios comprobados para la salud.'
  ],
  etiquetas: ['salud', 'alimentación', 'estilo de vida'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250910-01'
},
{
  id: 'sardinas-en-colombia-opciones-saludables-2025-09-10',
  fecha: '2025-09-10',
  titulo: 'Sardinas en Colombia: alternativas más allá de la conserva en salsa',
  pais: 'Colombia',
  resumen: 'Aunque la sardina suele encontrarse en conserva con salsa de tomate, existen opciones frescas o congeladas en el mercado colombiano que permiten aprovechar su alto contenido de omega-3.',
  contenido: [
    'La sardina es uno de los pescados más ricos en ácidos grasos omega-3 y, a diferencia del salmón, suele comercializarse como silvestre. Sin embargo, en Colombia la presentación más común en supermercados son las conservas en salsa de tomate o en aceite vegetal.',
    'Para quienes buscan alternativas más naturales, existen proveedores que ofrecen sardinas frescas o congeladas, empacadas al vacío, disponibles en tiendas especializadas de nutrición y en algunos distribuidores de mariscos. También pueden encontrarse de manera ocasional en las secciones de pescadería de supermercados con oferta de productos importados.',
    'Otra opción es acudir a mercados digitales y aplicaciones de domicilios, donde la disponibilidad varía según la ciudad. En Bogotá y Medellín, por ejemplo, algunos distribuidores ofrecen sardinas frescas al por mayor o congeladas listas para preparar en casa.',
    'Estas alternativas permiten acceder a una fuente económica y altamente nutritiva de omega-3, con la ventaja de evitar salsas o aceites añadidos. Consumidas a la plancha, al horno o en guisos caseros, las sardinas representan una opción práctica y saludable para complementar la dieta.'
  ],
  etiquetas: ['salud', 'alimentación', 'estilo de vida'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250910-02'
},
{
  id: 'salmon-silvestre-vs-cultivo-omega3-2025-09-10',
  fecha: '2025-09-10',
  titulo: 'Salmón silvestre vs. de cultivo: diferencias en el aporte de omega-3',
  pais: 'Colombia',
  resumen: 'Ambos tipos de salmón son fuentes importantes de ácidos grasos omega-3, pero el perfil nutricional del silvestre es más favorable que el del cultivado debido a su dieta natural.',
  contenido: [
    'El salmón es una de las principales fuentes de ácidos grasos omega-3 en la dieta. Sin embargo, el contenido de estos nutrientes varía según se trate de ejemplares silvestres o de cultivo.',
    'El salmón silvestre se alimenta de peces pequeños, kril y plancton, lo que le permite acumular más EPA y DHA en su carne y mantener una proporción muy baja de omega-6. En promedio, 100 g de salmón silvestre aportan entre 500 y 800 mg de EPA+DHA, con una relación omega-6 : omega-3 cercana a 1:10.',
    'El salmón de cultivo recibe piensos que incluyen aceites vegetales como soya o canola, ricos en omega-6. Esto aumenta el contenido graso total y mantiene un buen aporte de omega-3 (1.200 a 1.500 mg por cada 100 g), pero con una relación omega-6 : omega-3 menos favorable, a menudo de 1:1 o 2:1.',
    'Ambos son fuentes valiosas de omega-3, pero quienes buscan un perfil graso más equilibrado pueden priorizar el salmón silvestre o alternar con otras especies ricas en EPA y DHA, como sardinas y caballa.'
  ],
  etiquetas: ['salud', 'alimentación', 'estilo de vida'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250910-03'
},
{
  id: 'especial-carne-y-pescado-en-la-dieta-2025-09-10',
  fecha: '2025-09-10',
  titulo: 'Especial EdVida: carne roja y pescado en el equilibrio nutricional',
  pais: 'Colombia',
  resumen: 'Un repaso práctico sobre los aportes diferenciales de la carne roja, el salmón y las sardinas en la dieta diaria. Tres notas que explican cómo optimizar el consumo de proteínas animales para obtener hierro, vitamina B12 y omega-3.',
  contenido: [
    'Este especial de la sección EdVida reúne tres artículos complementarios que exploran el papel de la carne roja y el pescado en la salud.',
    '1) Carne roja y pescado: el equilibrio nutricional en la dieta — https://ledelab.co/noticias/carne-roja-y-pescado-equilibrio-nutricional-2025-09-10',
    '2) Sardinas en Colombia: alternativas más allá de la conserva en salsa — https://ledelab.co/noticias/sardinas-en-colombia-opciones-saludables-2025-09-10',
    '3) Salmón silvestre vs. de cultivo: diferencias en el aporte de omega-3 — https://ledelab.co/noticias/salmon-silvestre-vs-cultivo-omega3-2025-09-10',
    'Juntas, estas notas ofrecen una guía clara para elegir proteínas animales con criterios nutricionales, priorizando tanto la calidad como la variedad.'
  ],
  etiquetas: ['salud', 'alimentación', 'estilo de vida'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250910-04'
},
{
  id: 'colombia-macroeconomia-duque-vs-petro-2025-09-10',
  fecha: '2025-09-10',
  titulo: 'Evolución de los indicadores macroeconómicos en Colombia: comparativo entre los gobiernos de Duque y Petro',
  pais: 'Colombia',
  resumen: 'Durante el cuatrienio de Iván Duque (2018–2022) y el trienio inicial de Gustavo Petro (2022–2025), los indicadores macroeconómicos de Colombia mostraron variaciones significativas en crecimiento, inflación, desempleo y pobreza.',
  contenido: [
    'Entre 2018 y 2022, la economía colombiana experimentó un crecimiento acumulado cercano al 6–7%, afectado por la contracción del -6,8% en 2020 debido a la pandemia. Sin embargo, la inflación acumulada en el mismo periodo alcanzó alrededor del 13%, lo que resultó en un crecimiento real negativo de aproximadamente -6% a -7%.',
    'Durante los primeros tres años del gobierno de Gustavo Petro (2022–2025), el PIB mostró crecimientos más moderados: 1,7% en 2024 y 2,7% en el primer trimestre de 2025. La inflación anual se ubicó en 5,1% en agosto de 2025. Al comparar estos valores, el crecimiento real acumulado fue apenas negativo (-0,7%), menos desfavorable que en el periodo anterior.',
    'El desempleo en el periodo de Duque alcanzó picos históricos durante la pandemia, rozando el 20% en 2020 y cerrando su mandato aún en niveles de dos dígitos. En contraste, bajo Petro la tasa de desempleo descendió de manera más consistente, llegando a 8,6% en junio de 2025, la cifra más baja para ese mes desde 2018, según el DANE.',
    'En cuanto a la pobreza, durante el gobierno de Duque la pobreza monetaria aumentó de 34,7% en 2018 a un máximo de 39,3% en 2021. En cambio, bajo Petro se registró una reducción: en 2023 la pobreza fue de 34,6% y en 2024 bajó a 31,8%, el nivel más bajo en más de una década. Esta mejora implicó que 1,2 millones de personas salieran de la pobreza monetaria y 420 mil de la pobreza extrema, de acuerdo con cifras del DNP y el DANE.',
    'La pobreza multidimensional también presentó avances en la actual administración: en 2024 se ubicó en 11,5%, 0,6 puntos porcentuales menos que en 2023, reflejando mejoras en acceso a servicios y condiciones de vida. Estos resultados contrastan con el periodo anterior, en el cual no se observaron reducciones sostenidas.',
    'En síntesis, mientras que el gobierno de Duque enfrentó un deterioro en indicadores reales por el impacto de la pandemia y la inflación, el gobierno de Petro ha logrado una reducción más clara en pobreza y desempleo, aunque con un crecimiento económico más moderado.'
  ],
  etiquetas: ['colombia','economía','gustavo petro','resultados'],
  fuente: { nombre: 'Noticias Neutrales' },
  consecutivo_unico: '20250910-01'
},
{
  id: 'salud-cerebral-amen-bartlett-2025-09-09',
  fecha: '2025-09-09',
  titulo: 'Salud cerebral y TDAH: hallazgos y recomendaciones en conversación con Daniel Amen',
  pais: 'Internacional',
  resumen: 'En una conversación del pódcast “The Diary of a CEO”, el médico Daniel Amen presentó y explicó resultados de exploraciones cerebrales realizadas al presentador Steven Bartlett, describiendo patrones compatibles con TDAH y proponiendo hábitos para optimizar la función cerebral.',
  contenido: [
    'El médico Daniel Amen expuso los resultados de pruebas aplicadas a Steven Bartlett, entre ellas un test de atención (Conners CPT) y una imagenología funcional de perfusión. Según su análisis, la combinación de antecedentes, desempeño en pruebas y patrones observados es compatible con TDAH en un subtipo que describe como “sobreenfocado”, sin que la imagen por sí sola constituya un diagnóstico independiente.',
    'Amen señaló áreas con menor actividad relativa —incluida la corteza prefrontal izquierda— que relacionó con dificultades de inhibición y organización, y mencionó la posibilidad de impacto acumulado por traumatismos leves de infancia y adolescencia (por ejemplo, choques de cabeza jugando fútbol). Indicó que factores ambientales como moho o metales pesados también podrían contribuir y sugirió confirmarlos con pruebas específicas.',
    'Sobre hábitos que perjudican la salud cerebral, destacó el consumo elevado de azúcares libres y bebidas azucaradas, el déficit de sueño, el uso de alcohol y cannabis, y el tiempo excesivo en pantallas. Afirmó que, a medida que aumenta el peso corporal, disminuyen el tamaño y la función cerebral, y advirtió que la exposición constante a recompensas digitales puede “desgastar” los centros de placer y motivación.',
    'Entre las intervenciones de estilo de vida, recomendó ejercicio regular y alimentación que favorezca el flujo sanguíneo cerebral (mencionó especias y vegetales como remolacha), además de un consumo adecuado de ácidos grasos omega-3. Para ciertos casos, citó el uso de extracto de ginkgo y, bajo indicación médica, oxigenoterapia hiperbárica, con el objetivo de mejorar perfusión y energía cerebral.',
    'Respecto al sueño, explicó el papel del sistema glinfático, que facilita la “limpieza” de subproductos metabólicos durante la noche. Señaló que trastornos como la apnea del sueño se asocian con patrones de actividad cerebral reducida en zonas parietales y con mayor riesgo de deterioro cognitivo si no se tratan adecuadamente.',
    'En salud mental, propuso abordar primero las causas (“por qué”) antes que el síntoma (“qué”), considerando hormonas, infecciones, deficiencias nutricionales (como vitamina D) y eventos vitales. Para el manejo de pensamientos negativos, describió un ejercicio de registro y cuestionamiento sistemático de “pensamientos automáticos” con el fin de reducir su impacto conductual.',
    'Sobre el TDAH en adultos, sugirió una ruta escalonada: optimización del estilo de vida, apoyo psicoeducativo y, si procede, tratamiento farmacológico individualizado, enfatizando que los fármacos no deben ser la primera ni la única medida. Señaló variabilidad interindividual: algunas personas los usan puntualmente para tareas que requieren concentración prolongada, mientras otras priorizan intervenciones no farmacológicas.',
    'En el ámbito de adicciones y hábitos culturales, desaconsejó el consumo de alcohol por su asociación con menor perfusión y alteraciones de la sustancia blanca, incluso con ingestas moderadas. También vinculó la soledad y el aislamiento con peores resultados cerebrales, por lo que recomendó fortalecer la conexión social como parte del plan de salud.',
    'Por último, subrayó que “no se está condenado al cerebro que se tiene”: la función puede mejorar con intervenciones sostenidas y medición de marcadores como el sueño y la variabilidad de la frecuencia cardíaca. Reiteró que el objetivo es “optimizar el cerebro” para impactar positivamente el ánimo, la conducta y el desempeño global, más que etiquetar a las personas con diagnósticos.',
    'Fuentes citadas:\n1) The Diary of a CEO (YouTube): https://www.youtube.com/watch?v=ycTZ_t-aiuU'
  ],
  etiquetas: ['salud', 'alimentación', 'nutrición', 'tecnología', 'investigación','estilo de vida'],
  fuente: { nombre: 'The Diary of a CEO (YouTube)', url: 'https://www.youtube.com/watch?v=ycTZ_t-aiuU' },
  consecutivo_unico: '20250909-01'
},
{
  id: 'sistema-nacional-contra-la-macrocorrupcion-cepeda-2025-09-06',
  fecha: '2025-09-06',
  titulo: 'Iván Cepeda presenta en Cali propuesta de Sistema Nacional contra la Macrocorrupción',
  pais: 'Colombia',
  resumen: 'El 6 de septiembre de 2025, en Cali, Iván Cepeda presentó una propuesta de “Sistema Nacional contra la Macrocorrupción” con cinco pilares: prevención y transparencia, investigación especializada, juzgamiento con reparación, presencia territorial y movilización ciudadana.',
  contenido: [
    '¿Qué ocurrió? El precandidato Iván Cepeda expuso en Cali la propuesta de crear un “Sistema Nacional contra la Macrocorrupción”. ¿Cuándo y dónde? 6 de septiembre de 2025, Santiago de Cali. ¿Quién? Iván Cepeda y organizaciones sociales presentes en el evento. ¿Cómo y por qué? Mediante una arquitectura institucional coordinada para prevenir, investigar y sancionar redes de corrupción de gran escala.',
    'La propuesta se estructura en cinco pilares: (1) transparencia, prevención e información —con fortalecimiento de la UIAF, autonomía técnica y presupuestal para la Secretaría de Transparencia y operación plena del Portal Anticorrupción de Colombia (PACO); (2) investigación y juzgamiento con enfoque de macrocriminalidad —incluida una unidad especializada en la Fiscalía y una instancia de juzgamiento para casos sistémicos; (3) reparación integral —creación de un Fondo de Reparación para víctimas de la corrupción y destino sectorial de bienes recuperados; (4) presencia prioritaria en territorios con mayores riesgos; y (5) movilización y veeduría ciudadana.',
    'Según lo expuesto, el objetivo es pasar de respuestas fragmentadas a una coordinación “de principio a fin”, con trazabilidad del gasto, alertas tempranas y recuperación de activos para resarcir daños en los sectores afectados.'
  ],
  etiquetas: ['política', 'colombia'],
  fuente: { nombre: 'YouTube — “PRIMERA PROPUESTA: EL SISTEMA NACIONAL CONTRA LA MACROCORRUPCIÓN”', url: 'https://www.youtube.com/watch?v=XB9gCY0BJvY' },
  url_fuente: 'https://www.youtube.com/watch?v=XB9gCY0BJvY',
  consecutivo_unico: '20250906-01'
},
{
  id: 'reforma-tributaria-sector-carbon-petroleo-2025-09-09',
  fecha: '2025-09-09',
  titulo: 'Gobierno Petro presenta tercera reforma tributaria con impacto en carbón y petróleo',
  pais: 'Colombia',
  resumen: 'El Gobierno de Gustavo Petro radicó en el Congreso su tercera reforma tributaria, con medidas que afectan directamente a las empresas de carbón y petróleo, en el marco de la política de transición energética.',
  contenido: [
    'El Gobierno del presidente Gustavo Petro presentó ante el Congreso de la República su tercera reforma tributaria, centrada en aumentar la carga impositiva sobre las empresas de los sectores de carbón y petróleo.',
    'Según el Ministerio de Hacienda, la iniciativa busca reforzar la política de transición energética y generar mayores recursos para programas sociales. Entre las medidas se incluyen impuestos adicionales a la explotación y exportación de hidrocarburos y minerales.',
    'El proyecto ha generado debate sobre la viabilidad futura de estos negocios en el país, ya que gremios y analistas señalan que los nuevos tributos podrían reducir la competitividad y acelerar la salida de inversiones del sector.',
    'El Gobierno argumenta que la reforma es necesaria para avanzar en la diversificación de la economía y disminuir la dependencia de los combustibles fósiles, en línea con compromisos climáticos internacionales.'
  ],
  etiquetas: ['economía', 'colombia', 'gustavo petro', 'petróleo', 'ecopetrol'],
  fuente: { nombre: 'El Tiempo', url: 'https://www.eltiempo.com/economia/sectores/la-tercera-reforma-tributaria-del-gobierno-petro-otro-golpe-a-las-empresas-de-carbon-y-petroleo-seguiran-siendo-negocios-viables-en-colombia-3488907' },
  url_fuente: 'https://www.eltiempo.com/economia/sectores/la-tercera-reforma-tributaria-del-gobierno-petro-otro-golpe-a-las-empresas-de-carbon-y-petroleo-seguiran-siendo-negocios-viables-en-colombia-3488907',
  consecutivo_unico: '20250909-01'
},
{
  id: 'eeuu-corte-apelaciones-fallos-aranceles-trump-2025-08-29',
  fecha: '2025-08-29',
  titulo: 'Corte de apelaciones en EE. UU. declara ilegales los aranceles de Trump y gobierno anuncia apelación',
  pais: 'Estados Unidos',
  resumen: 'Un tribunal federal de apelaciones dictaminó que los aranceles impuestos por Donald Trump durante su presidencia fueron ilegales. La administración actual confirmó que apelará la decisión.',
  contenido: [
    'Un tribunal de apelaciones de Estados Unidos falló que los aranceles comerciales impuestos por Donald Trump a productos extranjeros durante su mandato fueron ilegales. El fallo marca un revés significativo en una de las principales políticas económicas de su gobierno.',
    'Según la decisión judicial, las medidas adoptadas no contaban con la justificación legal necesaria. La administración actual indicó que presentará una apelación ante la Corte Suprema para intentar revertir la sentencia.',
    'El caso ha generado amplio interés debido al impacto que los aranceles tuvieron en las relaciones comerciales internacionales y en sectores de la economía estadounidense. La resolución de la Corte Suprema será determinante para definir la legalidad definitiva de esas medidas.'
  ],
  etiquetas: ['estados unidos', 'política', 'donald trump', 'economía'],
  fuente: { nombre: 'The Guardian', url: 'https://www.theguardian.com/us-news/2025/aug/29/trump-tariffs-illegal-appeal-court-ruling' },
  url_fuente: 'https://www.theguardian.com/us-news/2025/aug/29/trump-tariffs-illegal-appeal-court-ruling',
  consecutivo_unico: '20250829-01'
},
  {
  id: 'historia-intoxicaciones-fosfina-casos-y-regulacion-2025-08-28',
  fecha: '2025-08-28',
  titulo: 'Fosfina: antecedentes internacionales de intoxicaciones y marco regulatorio aplicable',
  pais: 'Internacional',
  resumen: 'Contexto histórico de incidentes de intoxicación por fosfina (PH₃) asociados a usos de fosfuros metálicos en fumigación, con énfasis en lecciones de seguridad, restricciones regulatorias y documentos técnicos de referencia.',
  contenido: [
    '¿Qué pasó y por qué importa? A raíz del caso de San Andrés, se revisan antecedentes documentados de intoxicaciones por fosfina vinculadas al uso de fosfuros metálicos (por ejemplo, fosfuro de aluminio) en fumigaciones. El objetivo es contextualizar riesgos, prácticas seguras exigidas en normativas y experiencias previas verificadas por autoridades sanitarias y judiciales.',

    '¿Qué es la fosfina y cómo actúa? La fosfina (PH₃) es un gas altamente tóxico que se libera cuando formulaciones con fosfuros metálicos reaccionan con la humedad. La exposición aguda puede causar síntomas respiratorios y neurológicos y, a niveles altos, puede ser letal. Autoridades sanitarias describen signos tempranos inespecíficos (tos, cefalea, náuseas) y efectos graves que pueden aparecer con retraso, como edema pulmonar. Ver guías toxicológicas y fichas oficiales en “Fuentes citadas:”.',

    'Normativa y seguridad (principios generales). A nivel internacional, las etiquetas y manuales de productos con fosfuros exigen planes de manejo de fumigación (FMP), sellado adecuado del recinto, señalización de peligro y control de reingreso por debajo de umbrales de exposición (p.ej., 0,3 ppm como TWA de 8 horas para fosfina en material EPA). El uso está restringido a aplicadores certificados y, de forma tajante, se prohíbe fumigar estructuras residenciales u otros sitios prohibidos. (Ver detalles en “Fuentes citadas:”).',

    'Colombia: marco de referencia. El Decreto 1843 de 1991 regula el uso y manejo de plaguicidas con fines sanitarios en edificaciones y productos almacenados, incluyendo requisitos de registro y responsabilidad de las autoridades sanitarias; el Decreto 1076 de 2015 (Título 7) fija medidas ambientales para el manejo seguro de plaguicidas. El Instituto Nacional de Salud (INS) mantiene lineamientos para la notificación y gestión de intoxicaciones agudas por sustancias químicas. (Ver enlaces oficiales en “Fuentes citadas:”).',

    'Caso 2010 (Estados Unidos, Utah): tras muertes infantiles asociadas a liberación de fosfina por uso de fosfuro de aluminio en un entorno residencial, la EPA reforzó restricciones y etiquetado de productos con fosfuros metálicos, prohibiendo su empleo en propiedades residenciales y sitios sensibles, e imponiendo condiciones estrictas de uso profesional. Aunque la investigación específica fue divulgada por prensa local, el cambio regulatorio y las prohibiciones constan en documentos oficiales y etiquetas posteriores.',

    'Caso 2012–2015 (Tailandia/Canadá): una investigación de la oficina forense de Quebec (Canadá) concluyó que la muerte de dos turistas en 2012 estuvo probablemente vinculada a intoxicación por un pesticida usado contra chinches; medios canadienses reportaron que pudo tratarse de fosfina liberada a partir de fosfuros. Aunque hubo controversia técnica, el expediente forense señaló intoxicación por pesticida como causa probable. (Ver nota del forense referida por medios confiables en “Fuentes citadas:”).',

    'Caso 2017 (Amarillo, Texas): un incidente doméstico con fosfina generada por fosfuro de aluminio motivó respuesta de emergencia. Un análisis oficial (MMWR/CDC) documentó exposición entre 51 socorristas y subrayó el uso insuficiente de protección respiratoria durante el rescate. Este caso ilustró la necesidad de protocolos estrictos y equipos adecuados cuando se sospechan liberaciones químicas.',

    'Caso 2021–2024 (Londres, Reino Unido): un tribunal británico sentenció en 2024 a una vecina por homicidio imprudente tras usar fosfuro de aluminio importado ilegalmente para tratar chinches; el gas fosfina se filtró a viviendas colindantes y causó la muerte de una menor en 2021. La cobertura corresponde a medios de alta credibilidad y recoge la decisión judicial, que confirma el peligro de usos no autorizados.',

    'Lecciones operativas comunes. 1) Solo en recintos sellados y bajo FMP: los manuales y etiquetas exigen recintos herméticos, señalización y control de concentraciones antes del reingreso. 2) Prohibiciones de uso en residencias y lugares sensibles: múltiples documentos regulatorios lo establecen expresamente. 3) Capacitación y EPP: la evidencia oficial recomienda conformidad estricta con protocolos, especialmente para respuesta a incidentes químicos. 4) Notificación y vigilancia: las intoxicaciones por plaguicidas deben notificarse a las autoridades sanitarias conforme a lineamientos locales.',

    'Implicaciones para establecimientos turísticos y cadenas logísticas. La fosfina se utiliza principalmente en granos y mercancías almacenadas o en fumigaciones de contenedores bajo condiciones controladas. Su aplicación en áreas ocupadas por personas o sin sellado adecuado contraviene las normas y constituye un riesgo grave. Las auditorías, la verificación documental de proveedores de control de plagas y el cumplimiento de planes de fumigación son medidas claves para la prevención.',

    'Fuentes citadas:',
    '1) CDC/ATSDR. ToxFAQs™: Fosfina (ES). https://www.atsdr.cdc.gov/es/toxfaqs/es_tfacts177.html',
    '2) UK Health Security Agency. Phosphine: toxicological overview (2024). https://www.gov.uk/government/publications/phosphine-properties-incident-management-and-toxicology/phosphine-toxicological-overview',
    '3) U.S. EPA. Phosphine Fumigant Labeling Q&A / Etiquetas y FMP. https://archive.epa.gov/pesticides/reregistration/web/pdf/fumigation_qa.pdf',
    '4) U.S. EPA. Etiquetas y decisiones de revisión (ejemplos): PESTPHOS (2022) y restricciones residenciales. https://www3.epa.gov/pesticides/chem_search/ppls/092448-00003-20220223.pdf',
    '5) EPA Docket (2020): prohibición de fumigar propiedades residenciales con fosfina/fosfuros. https://downloads.regulations.gov/EPA-HQ-OPP-2013-0081-0039/content.pdf',
    '6) USDA AMS. Fumigation Handbook (sellado y recintos). https://www.ams.usda.gov/sites/default/files/media/FumigationHB.pdf',
    '7) CDC/MMWR. Phosphine Exposure Among Emergency Responders — Amarillo, Texas (2017). https://www.cdc.gov/mmwr/volumes/67/wr/mm6713a2.htm',
    '8) The Guardian (2024): sentencia por muerte de menor tras uso ilegal de fosfuro (Londres). https://www.theguardian.com/uk-news/article/2024/jul/18/london-woman-who-killed-neighbour-11-with-bedbug-poison-spared-jail',
    '9) Global News (2015): informe de forense de Quebec sobre caso de Tailandia (2012). https://globalnews.ca/news/1858397/quebec-sisters-deaths-likely-caused-by-pesticide-intoxication-coroner/',
    '10) Colombia — Decreto 1843 de 1991: uso y manejo de plaguicidas. https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=114357',
    '11) Colombia — Decreto 1076/2015 (Título 7: manejo de plaguicidas). https://quimicos.minambiente.gov.co/wp-content/uploads/2021/06/4.-Decreto-1076-de-2015-TITULO-7-Manejo-de-plaguicidas.pdf',
    '12) INS (2024). Lineamientos: intoxicaciones agudas por sustancias químicas. https://www.ins.gov.co/buscador-eventos/Lineamientos/Pro_Intoxicaciones%20agudas%20por%20sustancias%20qu%C3%ADmicas%202024.pdf'
  ],
  etiquetas: ['investigación', 'salud', 'seguridad', 'colombia', 'estados unidos'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250828-02'
},

  {
  id: 'adolescente-muere-reto-fideos-instantaneos-2025-08-29',
  fecha: '2025-08-29',
  titulo: 'Adolescente falleció tras ingerir fideos instantáneos en reto de TikTok',
  pais: 'Colombia',
  resumen: 'Un menor de 14 años murió en Barranquilla después de participar en un reto viral de TikTok que consistía en comer varios paquetes de fideos instantáneos en corto tiempo. Autoridades investigan el caso y llaman a la prevención sobre los riesgos de este tipo de desafíos en redes sociales.',
  contenido: [
    'Un adolescente de 14 años falleció en Barranquilla tras ingerir tres paquetes de fideos instantáneos como parte de un reto viral difundido en la red social TikTok. El hecho ocurrió el 28 de agosto en el barrio La Chinita, según reportaron medios locales.',
    'De acuerdo con información preliminar, el menor presentó complicaciones de salud poco después del consumo y fue trasladado de urgencia a un centro asistencial, donde se confirmó su fallecimiento. Las autoridades iniciaron una investigación para esclarecer las circunstancias del caso.',
    'El Instituto Colombiano de Bienestar Familiar (ICBF) y expertos en salud advirtieron sobre los peligros que representan los retos virales en redes sociales, especialmente para niños y adolescentes. Estos desafíos, que suelen incentivar el consumo excesivo de alimentos u otras conductas riesgosas, han provocado incidentes similares en otros países.',
    'El caso reabre el debate sobre la responsabilidad de las plataformas digitales y la importancia de la supervisión parental en el uso de internet. Organizaciones recomiendan promover la educación digital y fortalecer la vigilancia en torno a los contenidos a los que acceden los menores.'
  ],
  etiquetas: ['salud', 'alimentación', 'colombia', 'consumo'],
  fuente: { nombre: 'El Heraldo', url: 'https://www.elheraldo.co/entretenimiento/2025/08/29/adolescente-murio-al-comer-tres-paquetes-de-fideos-instantaneos-por-reto-viral-de-tiktok/' },
  url_fuente: 'https://www.elheraldo.co/entretenimiento/2025/08/29/adolescente-murio-al-comer-tres-paquetes-de-fideos-instantaneos-por-reto-viral-de-tiktok/',
  consecutivo_unico: '20250829-01'
},

  {
  id: 'tiburones-acidificacion-dientes-historia-2025-08-29',
  fecha: '2025-08-29',
  titulo: 'Los tiburones han enfrentado erosión dental por acidificación oceánica en el pasado, pero la velocidad actual no tiene precedentes',
  pais: 'Internacional',
  resumen: 'Estudios recientes muestran que la acidificación de los océanos erosiona los dientes de tiburones, un fenómeno que también ocurrió en episodios geológicos pasados, aunque nunca con la rapidez actual.',
  contenido: [
    'Un reciente estudio de la Heinrich Heine University en Düsseldorf, publicado en *Frontiers in Marine Science*, demostró que la acidificación de los océanos, consecuencia del aumento de dióxido de carbono (CO₂), erosiona los dientes de tiburones y compromete su capacidad de caza. En condiciones simuladas de alta acidez previstas para el año 2300 (pH 7,3), los dientes del tiburón punta negra sufrieron el doble de daño en ocho semanas, con agrietamiento y corrosión de la base ([The Guardian](https://www.theguardian.com/environment/2025/aug/27/ocean-acidification-erodes-sharks-teeth-affecting-feeding?utm_source=chatgpt.com)).',
    
    'El equipo fue liderado por Maximilian Baum, investigador en la Universidad Heinrich Heine de Düsseldorf, junto con especialistas en química marina ([The Times](https://www.thetimes.co.uk/article/ocean-acidification-corrodes-shark-teeth-fk985lnw7?utm_source=chatgpt.com)). Los experimentos se llevaron a cabo en Alemania usando dientes naturalmente desprendidos de tiburones punta negra, publicados entre el 27 y 28 de agosto de 2025 ([Oceanographic Magazine](https://oceanographicmagazine.com/news/all-shark-no-bite-ocean-acidification-might-leave-species-toothless/?utm_source=chatgpt.com)).',
    
    'Aunque el fenómeno es actual, ya ocurrió en milenios y millones de años anteriores. Durante el **Máximo Térmico del Paleoceno-Eoceno** (~55,8 millones de años atrás), un aumento rápido de CO₂ provocó calentamiento global y acidificación oceánica, afectando a organismos calcificadores ([Paleo Nerdish](https://paleonerdish.wordpress.com/2017/10/24/brief-history-of-the-ocean-acidification-through-time-an-update/?utm_source=chatgpt.com)). En la **Extinción Pérmica** (~252 millones de años atrás), la liberación masiva de CO₂ redujo el pH en hasta 0,7 unidades, eliminando numerosas especies marinas ([Wikipedia – Extinción Pérmica](https://en.wikipedia.org/wiki/Permian%E2%80%93Triassic_extinction_event?utm_source=chatgpt.com)).',
    
    'Otros eventos incluyeron el **Toarciano OAE** en el Jurásico (~183 millones de años), que acidificó los océanos y generó zonas anóxicas ([Wikipedia – Toarcian OAE](https://en.wikipedia.org/wiki/Toarcian_Oceanic_Anoxic_Event?utm_source=chatgpt.com)), y el **Cenomaniano-Turoniano** en el Cretácico medio, donde la acidificación coincidió con extinciones de amonites y corales ([Wikipedia – Cenomanian–Turonian](https://en.wikipedia.org/wiki/Cenomanian-Turonian_boundary_event?utm_source=chatgpt.com)). Estos ejemplos muestran que la acidificación no es inédita, pero la velocidad actual es inédita en al menos 300 millones de años ([Wired](https://www.wired.com/2012/03/ocean-acidification-peak?utm_source=chatgpt.com)).',
    
    'Hoy, la concentración de CO₂ se ha elevado rápidamente por la quema de combustibles fósiles. Entre 1950 y 2020, el pH de los océanos ha disminuido y la acidez aumentó un 26 %, mucho más rápido que en los episodios geológicos pasados ([Wikipedia – Ocean Acidification](https://en.wikipedia.org/wiki/Ocean_acidification?utm_source=chatgpt.com), [EPA](https://www.epa.gov/ocean-acidification/understanding-science-ocean-and-coastal-acidification?utm_source=chatgpt.com)).',
    
    'Las consecuencias incluyen la reducción de la capacidad de caza en tiburones si sus dientes se debilitan, alteraciones en corales, moluscos y otros organismos calcificadores, y el riesgo de colapso de ecosistemas marinos. La combinación de acidificación, calentamiento global y anoxia en el pasado advierte que el planeta podría estar entrando en un escenario de alto riesgo para la biodiversidad oceánica ([Ocean.si.edu](https://ocean.si.edu/ocean-life/invertebrates/ocean-acidification?utm_source=chatgpt.com), [AOL](https://www.aol.com/climate-change-threatening-nature-sharpest-040000281.html?utm_source=chatgpt.com), [Yale](https://people.earth.yale.edu/sites/default/files/files/Thomas/Hoenischetal-2012.pdf?utm_source=chatgpt.com), [EOS](https://eos.org/research-spotlights/exploring-ancient-ocean-acidification-in-the-rock-record?utm_source=chatgpt.com)).'
  ],
  etiquetas: ['salud','investigación','tecnología'],
  fuente: { nombre: 'DW', url: 'https://www.dw.com/es/los-tiburones-podr%C3%ADan-estar-perdiendo-sus-mort%C3%ADferos-dientes-debido-a-la-acidificaci%C3%B3n-de-los-oc%C3%A9anos/a-73783520' },
  url_fuente: 'https://www.dw.com/es/los-tiburones-podr%C3%ADan-estar-perdiendo-sus-mort%C3%ADferos-dientes-debido-a-la-acidificaci%C3%B3n-de-los-oc%C3%A9anos/a-73783520',
  consecutivo_unico: '20250829-01'
},

{
  id: 'informalidad-laboral-ventajas-y-desventajas-2025-08-29',
  fecha: '2025-08-29',
  titulo: 'Informalidad laboral en Colombia: entre la flexibilidad y la falta de protección',
  pais: 'Colombia',
  resumen: 'Aunque la tasa de desempleo cayó a 8,8% en julio de 2025, la más baja desde 2001, gran parte de los trabajadores colombianos sigue en la informalidad, una condición que combina beneficios de flexibilidad con riesgos legales y de protección social.',
  contenido: [
    'El Departamento Administrativo Nacional de Estadística (DANE) reportó que el desempleo en Colombia se redujo a 8,8% en julio de 2025, la cifra más baja para este mes desde 2001. Sin embargo, un porcentaje significativo de los ocupados permanece en la informalidad laboral.',
    'La informalidad, desde la perspectiva legal, se caracteriza por la ausencia de contrato laboral escrito, la no afiliación a seguridad social y la falta de prestaciones como primas, cesantías o vacaciones pagadas. A pesar de estas limitaciones, muchos trabajadores informales manifiestan estar mejor que asalariados formales debido a ingresos más altos o mayor autonomía.',
    'Entre las ventajas de la formalidad destacan la estabilidad, el acceso a pensión y salud, y la posibilidad de obtener créditos o subsidios. En contraste, la informalidad ofrece flexibilidad y menor carga de aportes, aunque expone a la vulnerabilidad ante enfermedades, vejez o crisis económicas.',
    'El debate sobre la informalidad en Colombia sigue abierto: mientras algunos la critican como un obstáculo al desarrollo y a la protección social, otros resaltan que es una salida económica real frente a un mercado laboral limitado.'
  ],
  etiquetas: ['colombia', 'economía', 'empleo'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/economia/desempleo-en-colombia-cae-a-88-la-cifra-mas-baja-para-un-julio-desde-2001/' },
  consecutivo_unico: '20250829-01'
},
{
  id: "2025-08-29-negacion-origen-humano-cambio-climatico",
  fecha: "2025-08-29",
  titulo: "¿Qué porcentaje de la población niega el origen humano del cambio climático? Panorama comparado y cifras recientes",
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
  etiquetas: ['colombia', 'gustavo petro', 'política', 'resultados', 'encuestas','conversaciones pendientes','podcast'],
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
  etiquetas: ['colombia', 'política', 'investigación', 'medios', 'conversaciones pendientes','podcast'],
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
  etiquetas: ['colombia', 'política', 'unión patriótica','conversaciones pendientes','podcast'],
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
  etiquetas: ['colombia', 'política', 'gustavo petro', 'editorial', 'medios','conversaciones pendientes','podcast'],
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