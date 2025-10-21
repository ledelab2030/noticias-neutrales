// src/data/noticias.ts
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
  video?: string          // URL de YouTube/Vimeo/etc. para embed
  credito_video?: string  // Texto del crédito (ej: "YouTube / Canal oficial de ATP")
  
  // opcional: portada para previews (ruta absoluta o relativa a /public)
  imagen?: string
  credito_imagen?: string

  // NUEVO: miniatura para home/listados
  imagen_portada?: string    
  credito_imagen_portada?: string
  
  // NUEVO: ubicación (nombre + coordenadas)
  ubicacion?: {
    nombre: string
    coordenadas?: string
  }
  
  // 🔤 Multi-idioma
  idioma_original?: 'es' | 'en' | 'de'
  traducciones?: {
    es?: string
    en?: string
    de?: string
  }
}

export type Noticia = NoticiaRaw

// Normalizador de etiquetas (case-insensitive, dedup, acepta cualquiera)
export function sanitizeTags(tags: string[] = []): string[] {
  const seen = new Set<string>()
  const out: string[] = []

  for (const raw of tags) {
    const key = (raw ?? '').trim()
    if (!key) continue

    const lower = key.toLowerCase()
    if (!seen.has(lower)) {
      seen.add(lower)
      out.push(key) // conserva la forma original (con mayúsculas si venía)
    }
  }

  return out
}

// === Datos en bruto ===
const noticiasRaw: NoticiaRaw[] = [
  // 🔽 PEGAR aquí debajo las noticias:

// 1) Nota ajustada para la ciudad (id fijo por ciudad)


{
  id: 'trump-miente-sobre-colombia-amenaza-invasion-2025-10-21-es',
  fecha: '2025-10-21',
  titulo: 'Trump miente sobre Colombia y amenaza con una invasión militar',
  pais: 'Colombia',
  resumen: 'En un análisis del canal La Pulla “Trump miente sobre Colombia”, Juan Carlos Rincón expone las afirmaciones falsas del expresidente estadounidense Donald Trump sobre el presidente Gustavo Petro, así como las implicaciones de su amenaza de “cerrar los campos” de coca en Colombia por la fuerza.',
  etiquetas: ['estados unidos', 'colombia', 'donald trump', 'gustavo petro', 'politica', 'amenaza', 'narcotrafico','portada'],
  fuente: { nombre: 'YouTube / Trump miente sobre Colombia', url: 'https://www.youtube.com/watch?v=kmWdVZO-aW8' },
  url_fuente: 'https://www.youtube.com/watch?v=kmWdVZO-aW8',
  video: 'https://www.youtube.com/embed/kmWdVZO-aW8',
  credito_video: 'YouTube / @LaPulla: Trump miente sobre Colombia',
  imagen_portada: '/noticias/trump-miente-sobre-colombia-amenaza-invasion-2025-10-21.jpg',
  credito_imagen_portada: 'Juan Carlos Rincón, editor de Opinión del periódico El Espectador',

  contenido: [
    'El video de La Pulla “Trump miente sobre Colombia” denuncia una serie de afirmaciones falsas realizadas por Donald Trump sobre el presidente colombiano Gustavo Petro y sobre el país en general. En su intervención pública, el expresidente estadounidense acusó sin pruebas a Petro de ser un “líder del narcotráfico” y de incentivar la producción masiva de drogas en Colombia.',
    
    'Según el análisis del canal, estas declaraciones ignoran la trayectoria política de Petro, quien ha sido reconocido incluso por sus críticos como uno de los dirigentes que más ha denunciado los vínculos del narcotráfico con estructuras del poder en Colombia. El video señala que la afirmación de Trump demuestra un desconocimiento profundo de la realidad del país o un uso deliberado de la mentira con fines políticos.',
    
    'El material también refuta la acusación de inacción frente al narcotráfico, al recordar que durante los primeros tres años del actual gobierno las incautaciones aumentaron un 65 % en comparación con el periodo del expresidente Iván Duque. Pese a las dificultades estructurales del fenómeno, la fuerza pública ha continuado realizando operativos contra los grupos criminales en distintas regiones del país.',
    
    'Sin embargo, la parte más grave de las declaraciones de Trump fue su advertencia a Petro de que, si no “cerraba los campos de coca”, Estados Unidos lo haría “de manera no amable”. El video interpreta esta frase como una amenaza directa a la soberanía colombiana, recordando que una flotilla del ejército estadounidense opera actualmente en el mar Caribe con capacidad ofensiva. Según el análisis, ese lenguaje constituye una violación del derecho internacional y un intento de intimidación política con posibles implicaciones militares.'
  ]
},
{
  id: 'esmeralda-hernandez-conversaciones-pendientes-2025-10-19-es',
  fecha: '2025-10-19',
  titulo: 'Esmeralda Hernández expone su agenda ambiental y balance de la ley antitaurina en “Conversaciones Pendientes”',
  pais: 'Colombia',
  resumen: 'En una conversación con Juan David Correa, la senadora Esmeralda Hernández repasó su trayectoria en lo público, explicó el enfoque cultural de la ley antitaurina sancionada el 22 de julio de 2024, y delineó prioridades legislativas en ambiente, bienestar animal, antifracking y control a la corrupción.',
  etiquetas: [
    'colombia',
    'politica',
    'congreso',
    'medio ambiente',
    'bienestar animal',
    'ley antitaurina',
    'pacto historico',
    'esmeralda hernandez',
    'juan david correa',
    'entrevista'
  ],
  fuente: { nombre: 'YouTube / Conversaciones Pendientes (Juan David Correa)', url: 'https://www.youtube.com/@ConversacionesPendientes' },
  url_fuente: 'https://www.youtube.com/watch?v=lSaCdjMBCrk',
  imagen_portada: '/noticias/esmeralda-hernandez-conversaciones-pendientes-2025-10-19.jpg',
  credito_imagen: 'Captura de video / Conversaciones Pendientes',
  consecutivo_unico: '20251019-01',

  // 🔤 Idioma y enlaces entre versiones (puedes completar en el futuro si traduces)
  idioma_original: 'es',
  traducciones: {
    // en: 'esmeralda-hernandez-conversaciones-pendientes-2025-10-19-en',
    // de: 'esmeralda-hernandez-conversaciones-pendientes-2025-10-19-de'
  },

  // 🎬 Video embebido
  video: 'https://www.youtube.com/embed/lSaCdjMBCrk',
  credito_video: 'YouTube / Conversaciones Pendientes (Juan David Correa)',

  contenido: [
    '¿Qué pasó? En el programa “Conversaciones Pendientes”, Juan David Correa entrevistó a la senadora Esmeralda Hernández. La conversación abordó su origen comunitario en Bosa, su paso por la administración pública y su trabajo legislativo reciente. El intercambio se centró en prácticas políticas, condiciones laborales en el Estado y la necesidad de fortalecer el mérito y la estabilidad en la función pública.',
    '¿Quiénes? Participaron el periodista y escritor Juan David Correa, anfitrión del espacio, y Esmeralda Hernández, senadora vinculada al sector progresista. Hernández describió la incidencia de las juntas de acción comunal, su formación en administración pública y su tránsito por cargos distritales y locales antes de llegar al Congreso.',
    '¿Cuándo y dónde? La entrevista fue publicada en YouTube y se emitió como parte de la serie habitual del canal. La nota se registra el 19 de octubre de 2025. El diálogo se desarrolló en formato de estudio y se enfocó en hechos y procesos ocurridos en Colombia.',
    '¿Cómo se dio el enfoque de la ley antitaurina? Hernández explicó que el proyecto cambió el eje de discusión desde lo “animal” hacia lo “cultural”, al considerar la tauromaquia como práctica cultural. Con ese enfoque, la iniciativa se debatió en la Comisión de Cultura, lo que facilitó un trámite que en intentos previos había fracasado.',
    '¿Qué se aprobó? Según Hernández, el 22 de julio de 2024 el Presidente sancionó la ley que prohíbe las corridas de toros en Colombia, con un periodo de transición de tres años. Durante ese lapso, solo ciertos municipios que cumplan requisitos específicos podrían realizar eventos, y a partir del 22 de julio de 2027 quedarán prohibidos.',
    '¿Por qué ese enfoque? La senadora sostuvo que la transformación cultural contribuye a escenarios de paz y que el debate público, la evidencia científica sobre sufrimiento animal y la movilización ciudadana fueron determinantes para la decisión legislativa. También destacó la concurrencia de congresistas de varios partidos en las votaciones clave.',
    '¿Qué otras agendas se discutieron? Hernández señaló prioridades en antifracking (con intentos de prohibición archivados en Cámara), regulación del glifosato, una “ley de ríos” de alcance nacional y el reconocimiento de animales y ecosistemas como víctimas del conflicto, iniciativa que ha tenido múltiples aplazamientos en el Congreso.',
    '¿Qué propone para la función pública? La senadora defendió la ampliación de planta y el mérito en nombramientos, así como la reducción gradual de nóminas paralelas para separar la gestión estatal de ciclos electorales. También insistió en fortalecer los órganos de control mediante procesos de mérito para evitar su captura política.',
    'Finalmente, las partes abordaron el uso de inteligencia artificial en campañas y comunicación política. Hernández consideró útil la tecnología bajo límites éticos claros y con transparencia para evitar la manipulación del debate público.',
    'Fuentes citadas: https://www.youtube.com/watch?v=lSaCdjMBCrk'
  ]
},
{
  id: 'bernie-sanders-no-kings-rally-washington-2025-10-18-es',
  fecha: '2025-10-18',
  titulo: 'Bernie Sanders denuncia el autoritarismo y la concentración de riqueza en el mitin “No Kings” de Washington',
  pais: 'Estados Unidos',
  resumen: 'El senador Bernie Sanders encabezó el mitin nacional “No Kings” en Washington D. C., donde advirtió sobre los riesgos de un gobierno autoritario y la creciente desigualdad económica bajo la administración de Donald Trump.',
  etiquetas: ['estados unidos', 'bernie sanders', 'donald trump', 'no kings', 'politica', 'protestas'],
  fuente: { nombre: 'YouTube / Bernie Sanders', url: 'https://www.youtube.com/watch?v=jcxJPdWYBfo' },
  url_fuente: 'https://www.youtube.com/watch?v=jcxJPdWYBfo',
  video: 'https://www.youtube.com/watch?v=jcxJPdWYBfo',
  credito_video: 'YouTube / Bernie Sanders',
  imagen: '/noticias/saad-ahmad-u15HL2HFna0-unsplash.jpg',
  credito_imagen: 'Foto de Saad Ahmad en Unsplash',
  idioma_original: 'en',
  traducciones: {
    en: 'bernie-sanders-no-kings-rally-washington-2025-10-18-en'
  },
  contenido: [
    'Miles de personas se reunieron el 18 de octubre de 2025 en Washington D. C. para participar en la concentración nacional “No Kings”, una jornada de protestas simultáneas en todo Estados Unidos convocadas por organizaciones civiles contra las políticas del presidente Donald Trump. Entre los oradores principales estuvo el senador independiente por Vermont, Bernie Sanders, quien dirigió un discurso centrado en la defensa de la democracia estadounidense.',
    'En su intervención, Sanders recordó los orígenes republicanos de Estados Unidos y afirmó que el pueblo estadounidense “no quiere reyes ni dictadores”, aludiendo directamente al lema del evento. “No, presidente Trump. No queremos que usted ni ningún otro rey nos gobierne. Mantendremos nuestra forma democrática de sociedad”, declaró ante los asistentes.',
    'El senador denunció lo que calificó como un peligro sin precedentes para la democracia, mencionando acciones del gobierno federal como el uso de fuerzas del orden para reprimir manifestaciones en ciudades como Portland y Chicago, el despido masivo de empleados públicos y el debilitamiento de las instituciones judiciales y legislativas. También criticó la concentración de poder económico en manos de una élite empresarial, mencionando por nombre a Elon Musk, Jeff Bezos y Mark Zuckerberg.',
    'Sanders advirtió que la combinación de autoritarismo político y desigualdad económica representa una amenaza directa para la sociedad estadounidense. “Rechazamos el derecho divino de los reyes en el siglo XVIII. No aceptaremos el derecho divino de los oligarcas en el siglo XXI”, afirmó. En su discurso también propuso medidas como garantizar la atención médica universal, ampliar la seguridad social, invertir en energías limpias y educación pública gratuita.',
    'El evento se desarrolló en el contexto de un cierre parcial del gobierno federal, iniciado por desacuerdos presupuestarios relacionados con recortes a Medicaid y al sistema de salud. Sanders responsabilizó a la administración Trump de priorizar exenciones fiscales para los sectores más ricos, a costa de millones de estadounidenses de bajos ingresos. “No votaré por un presupuesto que deje sin atención médica a 15 millones de personas”, enfatizó.',
    'Al cierre de su intervención, el senador llamó a la unidad social frente a las divisiones políticas y raciales: “Cuando no permitimos que Trump o nadie más nos divida, podemos crear una nación dedicada a la libertad, la justicia y la democracia”. El mitin en la capital fue parte de una jornada de manifestaciones simultáneas en varias ciudades del país bajo el lema “No Kings”.'
  ]
},
{
  id: 'dependencia-economica-eeuu-reflexion-2025-10-19',
  fecha: '2025-10-19',
  titulo: 'Reducir la dependencia del poder económico de Estados Unidos',
  pais: 'Colombia',
  resumen: 'La concentración del poder económico y político en una sola nación representa un riesgo global. La diversificación comercial y la independencia económica son pasos esenciales para equilibrar las relaciones internacionales.',
  etiquetas: ['editorial', 'economia', 'comercio internacional', 'colombia', 'estados unidos', 'diversificacion','portada'],
  idioma_original: 'es',
  imagen: '/noticias/steve-johnson-9xojIuTqumg-unsplash.jpg',
  credito_imagen: 'Foto de Steve Johnson en Unsplash',
  contenido: [
    'El principal problema no surge cuando un país elige a un líder con posturas controversiales o políticas internas divisorias. El problema real aparece cuando ese país concentra un poder desproporcionado sobre el resto del mundo. Estados Unidos no es cualquier nación: su peso económico, militar y cultural afecta directamente a las economías y decisiones de numerosos países, incluidos aquellos con los que mantiene relaciones de dependencia comercial.',
    'Por ello, la elección de un presidente como Donald Trump no solo tiene consecuencias para los ciudadanos estadounidenses, sino también para países que dependen en exceso de ese mercado. Las políticas proteccionistas, los cambios en tratados comerciales o las decisiones unilaterales sobre aranceles y sanciones pueden alterar las economías latinoamericanas de un día para otro.',
    'Colombia, como muchas otras naciones, mantiene una fuerte dependencia de las exportaciones hacia Estados Unidos y de las importaciones provenientes de ese país. Esta relación asimétrica limita la autonomía económica y reduce la capacidad de respuesta ante crisis externas. La diversificación de mercados y alianzas es, por tanto, una prioridad estratégica para reducir la vulnerabilidad.',
    'No se trata de romper relaciones ni de cerrar puertas, sino de abrir otras. El comercio con Asia, Europa, África y el propio continente latinoamericano puede ofrecer alternativas sostenibles. Mientras tanto, Estados Unidos deberá decidir por sí mismo si su modelo de consumo y su visión de liderazgo global son sostenibles o no. Lo que corresponde al resto del mundo es aprender de la experiencia y no depender de un único centro de poder.'
  ]
},
{
  id: 'encuesta-mensual-comercio-dane-agosto-2025-10-19-es',
  fecha: '2025-10-19',
  titulo: 'Ventas del comercio minorista crecieron 12,4 % en agosto, según la Encuesta Mensual de Comercio del DANE',
  pais: 'Colombia',
  resumen: 'El DANE reportó que en agosto de 2025 las ventas reales del comercio minorista y de vehículos en Colombia aumentaron 12,4 % frente al mismo mes del año anterior. El personal ocupado presentó una leve disminución de 0,2 %, según la Encuesta Mensual de Comercio (EMC).',
  etiquetas: ['colombia', 'economia', 'dane', 'comercio', 'estadisticas oficiales'],
  fuente: { nombre: 'DANE', url: 'https://www.dane.gov.co/index.php/estadisticas-por-tema/comercio-interno/encuesta-mensual-de-comercio-emc' },
  url_fuente: 'https://www.dane.gov.co/index.php/estadisticas-por-tema/comercio-interno/encuesta-mensual-de-comercio-emc',
  imagen: '/noticias/DANE-encuesta-mensual-comercio-agosto-2025.jpg',
  credito_imagen: 'DANE',
  consecutivo_unico: '20251019-01',
  idioma_original: 'es',

  contenido: [
    'El Departamento Administrativo Nacional de Estadística (DANE) informó que las ventas reales del comercio minorista y de vehículos en Colombia aumentaron 12,4 % en agosto de 2025 frente al mismo mes del año anterior. El resultado se desprende de la Encuesta Mensual de Comercio (EMC), que evalúa la dinámica de ventas, personal ocupado y salarios del sector.',
    
    'Según el informe, el crecimiento acumulado en el año corrido (enero a agosto de 2025) fue del 12,0 %, mientras que en los últimos doce meses (septiembre 2024 – agosto 2025) el aumento fue del 10,1 %. Estas cifras confirman una tendencia sostenida de expansión en la actividad comercial del país.',
    
    'El grupo de mercancías con mayor crecimiento fue el de equipos de informática y telecomunicaciones para uso personal o doméstico, que registró un incremento del 51 %. Otros sectores destacados fueron alimentos, bebidas y productos de uso doméstico, que también mostraron desempeños positivos en comparación con 2024.',
    
    'En contraste, el personal ocupado en el comercio minorista presentó una leve variación negativa de 0,2 % frente al mismo mes del año anterior. Esta reducción es marginal y puede asociarse a procesos de modernización o automatización en el sector, sin que ello afecte el comportamiento general del empleo formal.',
    
    'La Encuesta Mensual de Comercio (EMC) del DANE constituye la fuente estadística oficial sobre el comportamiento del comercio minorista y mayorista en Colombia. Su información es utilizada por el Gobierno, analistas y empresas para evaluar la evolución del consumo interno y orientar decisiones de política económica.'
  ]
},
{
  id: 'metabolismo-hormonas-y-habitos-en-la-salud-capilar-2025-10-14',
  fecha: '2025-10-14',
  titulo: 'Metabolismo, hormonas y hábitos: lo que explican Frank Suárez y Carlos Jaramillo sobre la salud capilar',
  pais: 'Latinoamérica',
  resumen: 'Dos enfoques coinciden en que la caída del cabello puede ser una señal del cuerpo ante desequilibrios internos. Frank Suárez la relaciona con hipotiroidismo y metabolismo lento, mientras que Carlos Jaramillo y John Harvey Gaviria amplían la mirada hacia causas genéticas, hormonales, inflamatorias y de estilo de vida.',
  etiquetas: [
    'salud',
    'metabolismo',
    'tiroides',
    'estrés',
    'caida del cabello',
    'calvicie',
    'nutricion',
    'inflamacion',
    'vida saludable'
  ],
  fuente: { nombre: 'Metabolismo TV / Dr. Carlos Jaramillo', url: 'https://www.youtube.com/' },
  imagen_portada: '/noticias/metabolismo-hormonas-y-habitos-en-la-salud-capilar-2025-10-14.jpg',
  credito_imagen: 'Metabolismo TV y YouTube / Dr. Carlos Jaramillo',
  idioma_original: 'es',
  contenido: [
    'La caída del cabello es un fenómeno frecuente que, según distintos especialistas, puede reflejar desequilibrios metabólicos, hormonales o inflamatorios. Aunque la predisposición genética influye, tanto el divulgador puertorriqueño Frank Suárez como el médico colombiano Carlos Jaramillo coinciden en que los hábitos de vida tienen un papel decisivo en la salud capilar.',
    
    'En el episodio #218 de “Súper Ayuda”, Suárez explica que la pérdida de cabello suele estar asociada al hipotiroidismo, incluso en su forma subclínica, cuando las pruebas de laboratorio resultan normales. Según su planteamiento, un metabolismo lento reduce la producción de energía celular (ATP) y oxígeno en la raíz del cabello, debilitando el folículo. Recomienda evaluar la temperatura corporal como indicador del metabolismo, evitar alimentos que inhiben la función tiroidea y, bajo supervisión médica, tratar la deficiencia hormonal cuando corresponda.',
    
    'Por su parte, en el video “5 secretos para luchar contra la calvicie en 92 días”, el Dr. Carlos Jaramillo conversa con el dermatólogo John Harvey Gaviria, quien describe cinco causas frecuentes de la caída capilar: predisposición genética, alteraciones hormonales, condiciones médicas (como hipotiroidismo, disbiosis intestinal o alopecia autoinmune), estrés psicológico e inflamación crónica de bajo grado. Ambos señalan que, más allá de la herencia, el entorno biológico y los hábitos determinan la evolución del folículo.',
    
    'El equipo de Jaramillo propone cinco herramientas de prevención y tratamiento: una alimentación rica en proteínas, suplementación con antioxidantes y vitaminas, control del estrés, cuidado capilar con productos antioxidantes y uso de medicamentos de prescripción cuando es necesario. Enfatizan que el cuidado integral del organismo —nutrición, descanso, microbiota y manejo emocional— es tan importante como los tratamientos tópicos o farmacológicos.',
    
    'Tanto Suárez como Jaramillo coinciden en que la caída del cabello puede ser una señal temprana de desequilibrio metabólico o inflamatorio. Sus enfoques convergen en la idea de que mejorar el metabolismo, reducir el estrés y mantener una dieta adecuada son estrategias que fortalecen el folículo piloso desde dentro, y que la salud capilar depende, en gran medida, del equilibrio general del cuerpo.'
  ],
  video: 'https://www.youtube.com/embed/7-SrclScQVQ',
  credito_video: 'YouTube / Metabolismo TV – Frank Suárez y Dr. Carlos Jaramillo',
  consecutivo_unico: '20251014-01'
},
{
  id: 'indemnizacion-estado-iglesia-abusos-sexuales-2025-10-14',
  fecha: '2025-10-14',
  titulo: 'Fallo judicial abre la puerta a indemnizaciones del Estado y la Iglesia por abusos sexuales',
  pais: 'Colombia',
  resumen: 'El Consejo de Estado reconoció por primera vez la responsabilidad conjunta del Estado y la Iglesia Católica en casos de abuso sexual cometidos por sacerdotes, marcando un precedente histórico para las víctimas.',
  etiquetas: ['colombia', 'justicia', 'abusos sexuales', 'iglesia catolica', 'derechos humanos','portada'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/judicial/el-caso-que-abrio-la-puerta-a-indemnizaciones-del-estado-y-la-iglesia-por-abusos-sexuales/' },
  url_fuente: 'https://www.elespectador.com/judicial/el-caso-que-abrio-la-puerta-a-indemnizaciones-del-estado-y-la-iglesia-por-abusos-sexuales/',
  imagen_portada: '/noticias/indemnizacion-estado-iglesia-abusos-sexuales-2025-10-14.jpg',
  imagen: '/noticias/indemnizacion-estado-iglesia-abusos-sexuales-2025-10-14.jpg',
  credito_imagen: 'Ilustración NN / IA generativa',
  idioma_original: 'es',
  contenido: [
    'El Consejo de Estado de Colombia emitió una sentencia que reconoce la responsabilidad del Estado y de la Iglesia Católica en un caso de abuso sexual cometido por un sacerdote. La decisión abre la posibilidad de que las víctimas de abusos cometidos por miembros del clero sean indemnizadas no solo por la Iglesia, sino también por el Estado, en casos donde se demuestre omisión o falta de control institucional.',
    'El caso que dio origen a la decisión fue el de una joven víctima de abuso sexual por parte de un sacerdote de la Diócesis de Santa Marta. El tribunal consideró que la Iglesia actuó de manera negligente al no prevenir ni atender las denuncias previas contra el religioso, y que el Estado falló al no ejercer la vigilancia que le corresponde sobre las instituciones religiosas que prestan servicios educativos.',
    'El fallo, de carácter histórico, establece que cuando una institución religiosa cumple funciones públicas, como la educación o la atención social, debe responder solidariamente por los daños ocasionados en el ejercicio de esas actividades. En consecuencia, la Iglesia y el Estado deberán asumir la reparación económica de la víctima.',
    'Con esta sentencia, el Consejo de Estado sienta un precedente en materia de responsabilidad compartida entre entidades públicas y privadas frente a violaciones de derechos humanos, especialmente en contextos donde existe delegación de funciones estatales. Organizaciones defensoras de derechos de víctimas celebraron el fallo como un avance hacia la reparación integral y la garantía de no repetición.'
  ]
},
{
  id: 'ranking-qs-latam-2025-javeriana-primer-lugar-colombia-2025-10-10-es',
  fecha: '2025-10-10',
  titulo: 'La Universidad Javeriana lidera el ranking QS Latinoamérica 2025 en Colombia',
  pais: 'Colombia',
  resumen: 'La Universidad Javeriana fue reconocida como la mejor institución del país en el ranking QS Latin America 2025, superando a la Universidad de los Andes y a la Universidad Nacional de Colombia.',
  contenido: [
    'El más reciente QS Latin America & The Caribbean University Rankings 2025 ubicó a la Pontificia Universidad Javeriana como la mejor institución colombiana en educación superior. El listado fue publicado por Quacquarelli Symonds (QS), una de las principales firmas internacionales dedicadas a la medición del desempeño académico y reputacional de universidades en el mundo.',
    'En la clasificación regional, la Javeriana se situó en el puesto 22 entre más de 430 universidades evaluadas en América Latina y el Caribe. Superó a la Universidad de los Andes y a la Universidad Nacional de Colombia, que tradicionalmente han encabezado los resultados nacionales en años anteriores.',
    'El estudio de QS considera indicadores como reputación académica, empleabilidad de los egresados, proporción de profesores con doctorado, impacto de la investigación y número de citaciones por artículo. En esta edición, también se destacó la mejora en los resultados de internacionalización y sostenibilidad universitaria.',
    'En el contexto latinoamericano, el primer lugar fue ocupado por la Pontificia Universidad Católica de Chile, seguida por la Universidad de São Paulo y el Tecnológico de Monterrey. El ranking 2025 consolida a Colombia entre los cinco países con mayor número de universidades incluidas en la lista regional.',
    'Fuentes citadas: https://www.topuniversities.com/latin-america-university-rankings, https://www.eltiempo.com/vida/educacion/el-prestigioso-ranking-de-universidades-en-el-que-ni-los-andes-ni-la-nacional-fueron-las-mejores-del-pais-cual-ocupo-el-primer-lugar-3498488'
  ],
  etiquetas: ['colombia', 'educacion', 'universidades', 'ranking', 'qs', 'javeriana', 'los andes', 'universidad nacional'],
  fuente: { nombre: 'El Tiempo', url: 'https://www.eltiempo.com/' },
  url_fuente: 'https://www.eltiempo.com/vida/educacion/el-prestigioso-ranking-de-universidades-en-el-que-ni-los-andes-ni-la-nacional-fueron-las-mejores-del-pais-cual-ocupo-el-primer-lugar-3498488',
  imagen: '/noticias/clement-proust-OhLJg_KpS0U-unsplash.jpg',
  credito_imagen: 'Foto: Clement Proust / Unsplash',
  idioma_original: 'es',
  traducciones: {
    en: 'ranking-qs-latam-2025-javeriana-primer-lugar-colombia-2025-10-10-en',
    de: 'ranking-qs-latam-2025-javeriana-primer-lugar-colombia-2025-10-10-de'
  }
},
{
  id: 'beneficios-sol-endocrinorocero-vitamina-d-2025-10-08-es',
  fecha: '2025-10-08',
  titulo: 'El Dr. Rosero destaca los beneficios comprobados de la exposición solar moderada',
  pais: 'Colombia',
  resumen: 'El endocrinólogo colombiano Dr. Rosero compartió en X una síntesis de los principales beneficios fisiológicos de la exposición solar controlada, respaldados por investigaciones médicas sobre vitamina D, ritmos circadianos, presión arterial y salud mental.',
  etiquetas: ['salud', 'vitamina d', 'sol', 'endocrinología', 'estilo de vida', 'colombia'],
  fuente: { nombre: 'Cuenta oficial del Dr. Andrés Rosero (@endocrinorocero)', url: 'https://x.com/endocrinorocero' },
  imagen: '/noticias/beneficios-sol-endocrinorocero-vitamina-d-2025-10-08.jpg',
  credito_imagen: 'Foto de https://unsplash.com/es/@therandomspoon',
  consecutivo_unico: '20251008-01',
  idioma_original: 'es',
  contenido: [
    'El endocrinólogo Andrés Rosero, reconocido por su divulgación científica en temas hormonales y metabólicos, publicó en su cuenta de X una lista de beneficios asociados a la exposición solar responsable. Entre ellos, mencionó la síntesis cutánea de vitamina D, la regulación de los ritmos circadianos, la mejora de la presión arterial y la salud mental vinculada con la actividad física al aire libre.',

    'La evidencia científica respalda estos puntos. Según la *Harvard Medical School* y los *National Institutes of Health (NIH)*, la radiación ultravioleta B (UVB) permite que la piel produzca vitamina D, esencial para la salud ósea y la función inmunológica. Estudios revisados en *The Journal of Clinical Endocrinology & Metabolism* han demostrado que niveles adecuados de esta vitamina reducen el riesgo de osteoporosis y modulan procesos inflamatorios.',

    'Respecto a los ritmos circadianos, investigaciones del *Sleep Research Society* indican que la exposición a la luz natural en la mañana ayuda a sincronizar el reloj biológico, mejorando el estado de ánimo y la regulación metabólica. Además, trabajos del *British Journal of Dermatology* señalan que la luz UVA puede inducir una leve vasodilatación por la liberación de óxido nítrico, contribuyendo a una mejor presión arterial.',

    'El Dr. Rosero también recordó que el melanoma, el tipo más grave de cáncer de piel, suele presentarse con mayor frecuencia en áreas no expuestas al sol, según datos de la *American Cancer Society*. Sin embargo, enfatizó la importancia de una exposición moderada y con precauciones adecuadas, como evitar las horas de máxima radiación y usar protección solar cuando sea necesario.',

    'En su publicación, el especialista concluyó que el equilibrio es clave: no se trata de evitar completamente el sol, sino de comprender sus beneficios fisiológicos y aprovecharlos de manera segura. Recomendó siempre consultar al médico antes de cambiar rutinas de exposición solar, especialmente en personas con antecedentes de enfermedades dermatológicas o metabólicas.',

    'Fuentes citadas: https://www.health.harvard.edu/staying-healthy/the-truth-about-vitamin-d https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/ https://academic.oup.com/jcem https://academic.oup.com/sleep https://www.cancer.org/cancer/melanoma-skin-cancer.html'
  ]
},
{
  id: 'the-economist-uribe-autocracia-reeleccion-colombia-2025-10-04-es',
  fecha: '2025-10-04',
  titulo: 'La advertencia de The Economist sobre Uribe en 2009 resuena en el debate actual sobre reelección en América Latina',
  pais: 'Colombia',
  resumen: 'En 2009, el medio británico The Economist alertó sobre los riesgos autoritarios del intento de reelección del entonces presidente Álvaro Uribe. Hoy, esa advertencia vuelve a tener eco en el debate regional sobre los límites del poder y la coherencia democrática.',
  etiquetas: ['colombia', 'uribe', 'reeleccion', 'petro', 'democracia', 'the economist', 'politica', 'america latina','destacados'],
  fuente: { nombre: 'The Economist', url: 'https://www.economist.com/the-americas/2009/05/14/uribe-edges-towards-autocracy' },
  url_fuente: 'https://www.economist.com/the-americas/2009/05/14/uribe-edges-towards-autocracy',
  idioma_original: 'en',
  imagen: '/noticias/the-economist-uribe-autocracia-2009.jpg',
  credito_imagen: 'The Economist',
  contenido: [
    'En mayo de 2009, el semanario británico The Economist publicó un artículo titulado “Uribe edges towards autocracy”, en el que advertía que el entonces presidente de Colombia, Álvaro Uribe Vélez, se acercaba a una deriva autoritaria al promover su reelección por tercera vez consecutiva.',
    'El texto reconocía los avances del gobierno en materia de seguridad y reducción de la violencia, pero alertaba que la insistencia en modificar la Constitución para mantenerse en el poder amenazaba la independencia de las instituciones y el equilibrio entre los poderes públicos. La revista subrayaba que, aunque el respaldo popular era amplio, la concentración del poder personal podía debilitar la democracia.',
    'Esa advertencia provenía de un medio identificado con posiciones de centro-derecha y de libre mercado, lo que reforzaba su valor histórico: el recordatorio de que los riesgos de la autocracia pueden provenir de cualquier espectro ideológico cuando los liderazgos se personalizan y los controles institucionales se relativizan.',
    'Dieciséis años después, en plena temporada preelectoral, el debate sobre la reelección vuelve a ocupar espacio en Colombia y en varios países de la región. Desde sectores conservadores se acusa al presidente Gustavo Petro de tener “intenciones reeleccionistas”, pese a que él ha reiterado que no buscará reelegirse ni modificar la Constitución. Al mismo tiempo, varias figuras políticas que apoyaron reelecciones pasadas se presentan hoy como defensoras de la alternancia.',
    'La comparación evidencia una constante en la política latinoamericana: los intentos de justificar la permanencia en el poder cuando conviene al propio grupo, sin importar la ideología. La advertencia de The Economist en 2009 sigue vigente como una llamada de atención sobre la importancia de la coherencia democrática y la defensa del principio de alternancia que sustenta la estabilidad institucional.'
  ]
},
{
  id: '2025-10-04-jaramillo-enjuague-bucal',
  fecha: '2025-10-04',
  titulo: 'Carlos Jaramillo advierte sobre los riesgos del enjuague bucal que “mata el 99.9% de las bacterias”',
  pais: 'Colombia',
  etiquetas: ['estilo de vida', 'Carlos Jaramillo', 'salud', 'microbiota', 'salud oral'],
  resumen: 'El médico Carlos Jaramillo advierte que los enjuagues bucales que prometen eliminar el 99.9% de las bacterias pueden alterar la microbiota oral, afectar la salud cardiovascular y generar más problemas que beneficios.',

  contenido: [
    'El médico colombiano Carlos Jaramillo volvió a generar conversación con un video en el que cuestiona el uso indiscriminado de los enjuagues bucales que prometen “eliminar el 99.9% de las bacterias”. Según explica, esa idea de “boca limpia y estéril” no solo es falsa, sino que puede ser perjudicial para la salud general.',
    '“Tu boca necesita bacterias para proteger el esmalte, producir óxido nítrico y cuidar tu corazón”, dice Jaramillo, señalando que la microbiota oral cumple funciones vitales que se alteran cuando se destruyen las comunidades microbianas que la habitan.',
    'El especialista critica la tendencia a trasladar la lógica hospitalaria de los antisépticos al cuidado diario. “Nos creímos el cuento de que todo tiene que ser estéril, cuando en realidad la boca sana no es una boca sin bacterias, sino una en equilibrio”, afirma.',
    '<b>Cíticas principales</b>',
    'Jaramillo detalla que muchos de estos productos contienen clorhexidina, amonios cuaternarios (CPC), peróxido de hidrógeno, povidona yodo, flúor en exceso, alcoholes, SLS, colorantes y saborizantes artificiales, todos con potencial de irritar, manchar o alterar la microbiota. “El hecho de que algo arda no significa que funcione; significa que está irritando”, advierte.',
    'El médico agrega que el uso crónico puede tener efectos indirectos sobre la salud cardiovascular, al reducir la producción de óxido nítrico, molécula esencial para la vasodilatación y la regulación de la presión arterial. “Una boca estéril puede conducir, paradójicamente, a un corazón enfermo”, resume.',
    '<b>Cuándo sí y cuándo no</b>',
    'El uso de enjuague bucal, dice Jaramillo, solo estaría justificado bajo indicación odontológica o médica, por tiempo limitado, y con un objetivo claro: después de cirugías, abscesos o infecciones severas. Para el resto de los casos, su recomendación es tajante: “si lo usas solo por el comercial o por el aliento mentolado, mejor no”.',
    '<b>Alternativas más saludables</b>',
    'El médico propone un enfoque más natural y consciente: cepillado suave dos veces al día y uso de hilo o cepillos interdentales; buena hidratación (“la saliva es medicina”); gomas con xilitol de base natural, no plástica; pasta dental sin SLS ni químicos agresivos; enjuagues simples con agua o con un poco de xilitol unas veces por semana; y enjuagues con té verde como alternativa ocasional. También recomienda evitar el uso de bicarbonato o aceites esenciales, que pueden alterar la flora oral.',
    '“Menos del 2% de los microorganismos del planeta son patógenos”, recuerda Jaramillo. “El resto son aliados que necesitamos cuidar, también en la boca.”',
    'El mensaje final es claro: no se trata de eliminar bacterias, sino de convivir en equilibrio con ellas. Una reflexión que, más allá de la higiene bucal, nos recuerda que la salud no se logra con productos que prometen esterilidad, sino con hábitos sostenibles y conocimiento del propio cuerpo.'
  ],
  credito_video: 'Carlos Jaramillo / YouTube',
  video: 'https://www.youtube.com/embed/zZKAXsWXayM',
  credito_imagen: 'Imagen generada con IA para Noticias Neutrales',
  imagen_portada: '/noticias/A_news_article_digital_graphic_features_Carlos_Jar.png'
},
{
  id: 'ruta-integral-obesidad-cali-reacciones-rosero-2025-10-02-es',
  fecha: '2025-10-02',
  titulo: 'Dr. Óscar Rosero cuestiona nueva Ruta Integral de Obesidad en Cali',
  pais: 'Colombia',
  resumen: 'La Alcaldía de Cali anunció el lanzamiento de la primera Ruta Integral e Integrada de Atención de Obesidad en el país. El endocrinólogo Rosero advirtió que, aunque parece un avance, puede derivar en mayor medicalización y gasto público sin atacar las causas reales del problema.',
  etiquetas: ['colombia', 'salud', 'cali', 'obesidad', 'politica-publica','portada'],
  fuente: { nombre: 'Cuenta del Dr. Óscar Rosero en X', url: 'https://x.com/endocrinorosero/status/1973722735919476770' },
  url_fuente: 'https://www.cali.gov.co/boletines/publicaciones/188939/cali-se-convierte-en-el-primer-distrito-en-tener-una-ruta-integral-e-integrada-de-atencion-de-obesidad/',
  consecutivo_unico: '20251002-01',
  idioma_original: 'es',
  imagen: '/noticias/foto-endocrino-rosero.jpg',
  credito_imagen: 'Tomada de https://www.endocrinorosero.com/',
  contenido: [
    'La Alcaldía de Santiago de Cali presentó oficialmente la primera Ruta Integral e Integrada de Atención de Obesidad del país. Según el boletín oficial, la iniciativa busca ofrecer acompañamiento médico, psicológico y nutricional a la población, en coordinación con entidades de salud pública.',
    
    'El anuncio se realizó en alianza con el laboratorio Novo Nordisk, productor de algunos de los medicamentos más costosos para el tratamiento de la obesidad. El programa fue presentado con el respaldo de la Secretaría de Salud del distrito, como parte de los esfuerzos para enfrentar una de las principales enfermedades crónicas que afecta a la población.',
    
    'El endocrinólogo Rosero reaccionó a este lanzamiento señalando que la obesidad no debe entenderse solo como una enfermedad sino como el síntoma de un sistema alimentario dominado por ultraprocesados y marketing agresivo. “Si no cerramos la fábrica de obesidad, cualquier estrategia se limitará a medicar”, afirmó en su cuenta oficial de X.',
    
    'El especialista advirtió además sobre los riesgos de que laboratorios privados, con intereses directos en la venta de fármacos, influyan en la definición de la política pública en obesidad. Según explicó, este enfoque puede traducirse en más diagnósticos, mayor indicación de medicamentos y un aumento del gasto público sin atacar las causas estructurales del problema.',
    
    'Rosero concluyó que la ciencia y la política deben servir a la salud de la población y no a los intereses de la industria. De lo contrario, advirtió, se corre el riesgo de tener sistemas de salud en crisis, una población medicalizada y una obesidad que persiste intacta. Más información sobre su trabajo en https://www.endocrinorosero.com/ y en sus redes sociales: @endocrinorosero.'
  ]
},
{
  id: 'anden-bloqueado-air-e-villa-santos-2025-09-27-es',
  fecha: '2025-09-27',
  titulo: 'Lo que aprendí al hablar con los podadores de Air-e en Villa Santos',
  pais: 'Colombia',
  resumen: 'Mientras caminaba por el barrio Villa Santos en Barranquilla encontré bloqueado el andén por ramas dejadas por una cuadrilla de Air-e. La situación me obligó a entrar a la vía y aprovechar para conversar con los trabajadores sobre la importancia de pensar en el peatón y la sostenibilidad.',
  etiquetas: ['barranquilla', 'espacio publico', 'seguridad vial', 'arborizacion', 'el caminante'],
  imagen: '/noticias/anden-bloqueado-air-e-villa-santos-2025-09-27.jpg',
  credito_imagen: 'Foto tomada durante el recorrido de El Caminante',
  ubicacion: {
    nombre: 'Barrio Villa Santos, Barranquilla',
    coordenadas: '11.012968512396997,-74.83655938141438'
  },
  contenido: [
    'El sábado 27 de septiembre, mientras recorría a pie el barrio Villa Santos en Barranquilla, me encontré con una situación que ilustra los retos de nuestra ciudad en materia de espacio público: una cuadrilla de la empresa Air-e realizaba labores de poda y había dejado grandes ramas sobre el andén, bloqueando completamente el paso.',
    'Ante el obstáculo tuve que desviarme hacia la calzada vehicular, exponiéndome al riesgo de que un automóvil me golpeara. Decidí detenerme y hablar con los trabajadores, explicándoles que, aunque la cuadrilla de recolección de ramas estuviera cerca, bastaba con unos segundos de exposición para que ocurriera un accidente.',
    'Les señalé que mover las ramas a un lado del andén habría sido suficiente para mantener la seguridad de quienes caminamos, sin afectar su labor. Fue una oportunidad para recordar la importancia de ponerse en el lugar del otro, en este caso del peatón, y de comprender que pequeños gestos de consideración pueden prevenir tragedias.',
    'Este episodio no solo refleja las dificultades de gestión del arbolado urbano y el cableado eléctrico, sino que también nos invita a pensar en la educación ciudadana y en la sostenibilidad. Caminar por la ciudad debería ser seguro y agradable, y para lograrlo se necesita tanto infraestructura adecuada como conciencia de cada actor en el espacio público.'
  ],
  idioma_original: 'es'
},
{
  id: 'global-sumud-flotilla-interceptada-israel-2025-10-01-es',
  fecha: '2025-10-01',
  titulo: 'Israel intercepta la Global Sumud Flotilla con 497 activistas de 46 países rumbo a Gaza',
  pais: 'Internacional',
  resumen: 'La Global Sumud Flotilla, integrada por 497 activistas de 46 países que transportaban ayuda humanitaria hacia Gaza, fue interceptada por Israel en el Mediterráneo. Políticos como Camilo Romero denunciaron el hecho como un ataque contra una delegación internacional civil.',
  etiquetas: ['gaza', 'israel', 'palestina', 'flotilla', 'derechos humanos', 'bloqueo'],
  fuente: { nombre: 'AP News', url: 'https://apnews.com/article/5c9c5e9baa4fc893a0f6e6eef69b280c' },
  url_fuente: 'https://apnews.com/article/5c9c5e9baa4fc893a0f6e6eef69b280c',
  imagen: '/noticias/global-sumud-flotilla-2025-10-01.jpg',
  credito_imagen: 'Global Sumud Flotilla. Crédito: The Associated Press',
  consecutivo_unico: '20251001-01',
  idioma_original: 'es',
  contenido: [
    'La Global Sumud Flotilla, una misión civil internacional compuesta por 497 personas de 46 países, fue interceptada por fuerzas israelíes en aguas del Mediterráneo cuando se dirigía hacia Gaza. El convoy buscaba entregar ayuda humanitaria y visibilizar el bloqueo impuesto a la Franja.',
    
    'La iniciativa, integrada por médicos, periodistas, activistas y representantes políticos, había zarpado desde diferentes puertos europeos y del norte de África con más de 40 embarcaciones cargadas con alimentos y medicinas. El nombre "Sumud", que en árabe significa perseverancia, simboliza la resistencia de la población palestina ante las restricciones.',
    
    'Israel argumenta que mantiene el bloqueo marítimo como medida de seguridad. Sin embargo, organizaciones internacionales y gobiernos como el de España han señalado que la flotilla no representaba una amenaza y que impedir su paso podría constituir una violación del derecho internacional humanitario.',
    
    'El político colombiano Camilo Romero denunció públicamente la acción, señalando que Netanyahu "no sólo ataca al pueblo palestino sino a representantes de 46 países". El mensaje fue acompañado de un mapa con la procedencia de los delegados, al que calificó como una "delegación ética de la humanidad".',

    'Este episodio revive la controversia sobre los límites del bloqueo a Gaza, que ha sido criticado por Naciones Unidas y organizaciones de derechos humanos, al tiempo que abre un nuevo frente de presión diplomática hacia Israel por el trato a una misión civil internacional.',
    
    'Fuentes citadas: https://apnews.com/article/5c9c5e9baa4fc893a0f6e6eef69b280c , https://www.theguardian.com/world/2025/oct/01/pro-palestine-flotilla-heading-towards-gaza-harassed-by-israeli-naval-boats , https://globalsumudflotilla.org'
  ]
},
{
  id: 'barcelona-psg-champions-league-2025-10-01-es',
  fecha: '2025-10-01',
  titulo: 'Barcelona y PSG se enfrentan en la Champions League',
  pais: 'España',
  resumen: 'El FC Barcelona y el Paris Saint-Germain disputan en el Estadio Olímpico Lluís Companys un partido clave de la fase de grupos de la Liga de Campeones de la UEFA.',
  etiquetas: ['futbol', 'champions league', 'barcelona', 'psg', 'uefa'],
  fuente: { nombre: 'El País', url: 'https://elpais.com/deportes/futbol/2025-10-01/barcelona-psg-en-directo-el-partido-de-la-champions-league-en-vivo.html' },
  url_fuente: 'https://elpais.com/deportes/futbol/2025-10-01/barcelona-psg-en-directo-el-partido-de-la-champions-league-en-vivo.html',
  imagen: '/noticias/barcelona-psg-champions-2025-10-01.jpg',
  credito_imagen: 'Crédito imagen: Fabrizio Romano',
  consecutivo_unico: '20251001-01',
  idioma_original: 'es',
  contenido: [
    'El FC Barcelona y el Paris Saint-Germain se enfrentan este miércoles 1 de octubre en el Estadio Olímpico Lluís Companys, en Barcelona, en un partido correspondiente a la fase de grupos de la Liga de Campeones de la UEFA.',
    'El encuentro reúne a dos de los equipos más poderosos de Europa, con figuras como Robert Lewandowski en el conjunto azulgrana y Kylian Mbappé en el equipo parisino, en lo que se anticipa como uno de los duelos más atractivos de la jornada.',
    'Barcelona llega al compromiso después de un inicio sólido en el torneo, mientras que el PSG busca afianzarse en el grupo y confirmar su favoritismo con una victoria como visitante.',
    'La Champions League 2025-2026 mantiene su formato tradicional de fase de grupos, en el que los dos primeros de cada llave avanzan a octavos de final. Este partido es determinante para la clasificación de ambos equipos hacia la siguiente fase.',
    'Fuentes citadas: https://www.uefa.com/uefachampionsleague/'
  ]
},
{
  id: 'us-government-shutdown-trump-democrats-meeting-2025-09-29-en',
  fecha: '2025-09-29',
  titulo: 'Donald Trump Meets with Democratic Leaders as Federal Government Shutdown Looms',
  pais: 'United States',
  resumen: 'President Donald Trump met with Democratic leaders in Washington as the deadline to approve funding and avoid a federal government shutdown approaches. The meeting aimed to narrow differences, though key disputes over spending remain unresolved.',
  etiquetas: ['united states', 'politics', 'donald trump', 'congress', 'federal government', 'budget'],
  fuente: { nombre: 'The Wall Street Journal', url: 'https://www.wsj.com/politics/policy/government-shutdown-2025-democrats-trump-meeting-ec8e5d54' },
  url_fuente: 'https://www.wsj.com/politics/policy/government-shutdown-2025-democrats-trump-meeting-ec8e5d54',
  imagen: '/noticias/colin-lloyd-ml10EikO52E-unsplash.jpg',
  credito_imagen: 'Foto de Colin Lloyd en https://unsplash.com/photos/ml10EikO52E',
  consecutivo_unico: '20250929-01',
  idioma_original: 'en',
  traducciones: {
    es: 'eeuu-gobierno-cierre-reunion-trump-democratas-2025-09-29-es'
  },
  contenido: [
    'U.S. President Donald Trump met on Monday in Washington with Democratic congressional leaders to discuss budget negotiations as the risk of a federal government shutdown grows.',
    'The meeting took place just days before current funding expires, which would suspend many administrative operations and leave hundreds of thousands of federal employees without pay. According to The Wall Street Journal, the session sought to identify potential compromises to pass new spending measures.',
    'Despite the talks, differences between the White House and Democratic lawmakers remain over key issues such as defense spending levels, social programs, and infrastructure priorities. Representatives from both sides acknowledged the discussion remains ongoing but reported no concrete breakthroughs.',
    'The prospect of a shutdown has raised concerns across federal agencies and economic sectors. Analysts warn that a prolonged suspension would disrupt basic services and undermine market confidence. Congress faces limited time to reach a deal that prevents broader harm to the U.S. economy.' ]
},
{
  id: 'milagro-barranquillero-desigualdad-2025-09-29-es',
  fecha: '2025-09-29',
  titulo: 'El “milagro barranquillero” dejó por fuera a los pobres, según análisis de Laura Ardila en El Espectador',
  pais: 'Colombia',
  resumen: 'Un análisis de la periodista Laura Ardila Arrieta en El Espectador plantea que el modelo de desarrollo de Barranquilla, conocido como “milagro barranquillero”, ha priorizado la modernización urbana y el embellecimiento de la ciudad, pero ha excluido a las comunidades más pobres y profundizado la desigualdad.',
  etiquetas: ['colombia', 'barranquilla', 'desarrollo urbano', 'desigualdad', 'laura ardila', 'el espectador','destacados'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/opinion/columnistas/laura-ardila-arrieta/el-milagro-barranquillero-dejo-por-fuera-a-los-pobres/' },
  url_fuente: 'https://www.elespectador.com/opinion/columnistas/laura-ardila-arrieta/el-milagro-barranquillero-dejo-por-fuera-a-los-pobres/',
  credito_imagen: 'Ecoparque Ciénaga de Mallorquín - Foto tomada por Leonardo De la Hoz Borrego',
  imagen: '/noticias/milagro-barranquillero-2025-09-29.jpg',
  consecutivo_unico: '20250929-01',
  idioma_original: 'es',
  contenido: [
   'Uno de los ejes centrales de su análisis es la brecha social que se mantiene. Según Ardila, “la ciudad bonita y atractiva para la inversión internacional se construyó dejando por fuera a los pobres, que siguen padeciendo precariedades en barrios periféricos sin soluciones estructurales”. La autora sostiene que los logros visibles contrastan con realidades invisibilizadas en los indicadores de pobreza.',
  ` <figure class="my-4">
  <img 
    src="/noticias/Calle21-barrio-rebolo-Foto-Valentina-Bolano.jpg" 
    alt="Calle 21 en el barrio Rebolo, Barranquilla" 
    class="rounded-xl shadow-sm mx-auto"
  />
  <figcaption class="text-sm text-gray-500 text-center mt-1">
    Barrio Rebolo. Foto: Valentina Bolaño. Tomado de Semanario Voz "Barranquilla, entre la opulencia y la pobreza"
  </figcaption>
    </figure>
 `,
    'En otro apartado, la columnista advierte que las prioridades del modelo han favorecido proyectos de alto impacto mediático sobre las necesidades básicas de la población. En sus palabras: “el milagro barranquillero privilegió la estética urbana antes que garantizar derechos como vivienda, empleo y servicios públicos de calidad para todos sus habitantes”.',
    'El artículo también enfatiza en la falta de participación comunitaria en la definición de las obras ejecutadas. Ardila señala: “las decisiones sobre el rumbo de la ciudad se han tomado desde arriba, sin incorporar la voz de las comunidades que más sufren las consecuencias de la desigualdad”. Con ello, pone en cuestión la sostenibilidad social del modelo adoptado.',
    'Si bien la narrativa oficial proyecta a Barranquilla como ejemplo de transformación, los datos de pobreza multidimensional, informalidad laboral y déficit habitacional muestran que los beneficios no alcanzan a toda la población. La columnista recuerda que, a pesar de los reconocimientos nacionales e internacionales, el éxito urbano no necesariamente se traduce en justicia social.',
    'El texto concluye que el verdadero reto de la ciudad consiste en replantear sus políticas públicas para que la inversión en obras no sea incompatible con la inclusión. Según Ardila, Barranquilla necesita avanzar hacia un modelo que combine modernización con equidad, “porque de nada sirve tener una ciudad reluciente si buena parte de su gente sigue excluida del bienestar”.',
    'De esta forma, el análisis aporta un llamado a revisar críticamente la idea de “milagro barranquillero”, recordando que un desarrollo urbano integral debe medir su éxito no solo en el cemento y los parques, sino en la capacidad de mejorar las condiciones de vida de quienes históricamente han estado al margen.'
  ]
},
{
  id: 'comparativo-azucar-drogas-costos-salud-2025-09-28-es',
  fecha: '2025-09-28',
  titulo: 'La guerra contra las drogas ilícitas y el paralelo con los alimentos no saludables',
  pais: 'Global',
  resumen: 'La evidencia de organismos internacionales muestra que las enfermedades no transmisibles asociadas a dietas poco saludables —donde el exceso de azúcares libres y carbohidratos refinados es un factor clave— representan una carga de mortalidad y costos sanitarios muy superior a la atribuible directamente al uso de drogas. Deberían restringirse?',
  etiquetas: ['salud', 'oms', 'unodc', 'idf', 'world obesity federation', 'diabetes', 'obesidad', 'azucar', 'coca', 'politicas publicas', 'economia','portada'],
  fuente: { nombre: 'Organización Mundial de la Salud (OMS)', url: 'https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases' },
  url_fuente: 'https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases',
  consecutivo_unico: '20250928-01',
  idioma_original: 'es',
  imagen: '/noticias/danny-trujillo-qxWlkTcZTfE-unsplash.jpg',
  credito_imagen: 'Danny Trujillo / Unsplash — Imagen ilustrativa',
  contenido: [
    'Los datos de la Organización Mundial de la Salud (OMS), la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC), la Federación Internacional de Diabetes (IDF) y la World Obesity Federation (WOF) permiten comparar dos cadenas con impactos globales muy distintos: la de las dietas con exceso de azúcares y carbohidratos refinados, y la del uso de drogas ilícitas como la cocaína.',
        
    'Las enfermedades no transmisibles (ENT) concentran la mayor parte de la mortalidad evitable en el mundo. En 2021 murieron más de 43 millones de personas por estas causas. Dentro de sus determinantes, los patrones dietarios poco saludables —incluido el consumo excesivo de azúcares libres— incrementan de manera significativa el riesgo de obesidad, resistencia a la insulina y diabetes tipo 2. Estas condiciones generan altos niveles de gasto sanitario y pérdida de productividad.',
    
    '<!--img--><img src="/noticias/azucar-cocaina-tabla.jpg" alt="Descripción de la imagen" class="rounded-xl shadow-sm"/>',

    'El impacto económico de estas enfermedades es evidente. La IDF calculó que la diabetes demandó alrededor de 1,015 billones de dólares en gasto sanitario mundial en 2024, cerca del 12% del gasto sanitario global. La World Obesity Federation proyecta que el costo económico del sobrepeso y la obesidad superará los 4,32 billones de dólares anuales para 2035, equivalentes al 3% del PIB mundial. Estas cifras muestran que el problema asociado al consumo excesivo de azúcar es de magnitud sistémica.',
    
    '<!--img--><img src="/noticias/hamburguesa-sobrepeso.jpg" alt="Descripción de la imagen" class="rounded-xl shadow-sm"/>',
    
    'En comparación, el uso de drogas psicoactivas está vinculado a alrededor de 0,6 millones de muertes anuales según la OMS, con la mayor carga atribuida a opioides. La fracción correspondiente a la cocaína es menor y varía según la región. La UNODC estima que en 2023 alrededor de 25 millones de personas fueron consumidores problemáticos de cocaína, en un mercado que alcanza niveles históricos. Aunque el daño social y de seguridad es alto, la escala sanitaria es menor que la de las ENT vinculadas a la dieta.',
        
    'En términos de políticas públicas, las estrategias efectivas frente al azúcar incluyen impuestos a bebidas azucaradas, advertencias visibles en empaques y restricciones a la publicidad dirigida a niños. Estas medidas han demostrado reducir el consumo y generar recursos fiscales para prevención y atención. Para las drogas, los organismos internacionales recomiendan dar prioridad a la salud pública, la reducción de daños y el desarrollo alternativo en regiones productoras, complementados con acciones de seguridad focalizadas.',
    
    'La conclusión es clara: en términos de salud y costos sanitarios, la carga derivada de dietas con exceso de azúcares y carbohidratos refinados es de órdenes de magnitud mayor que la atribuible directamente al uso de drogas ilícitas. Sin embargo, la cadena de la coca y la cocaína genera daños específicos en seguridad y gobernanza que la hacen un problema distinto. Ambos fenómenos exigen políticas diferenciadas, basadas en evidencia y con enfoque integral.',
    
    'Fuentes citadas:\n- OMS – Hoja informativa ENT: https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases\n- OMS – Recomendaciones sobre azúcares: https://www.who.int/publications/i/item/9789241549028\n- OPS/OMS – ENT (síntesis regional): https://www.paho.org/en/topics/noncommunicable-diseases\n- IDF – Diabetes Atlas (gasto sanitario 2024): https://diabetesatlas.org/\n- World Obesity Federation – World Obesity Atlas: https://data.worldobesity.org/publications/WOF-Obesity-Atlas-V5.pdf\n- OMS – Nota 2024 alcohol y drogas: https://www.who.int/news/item/25-06-2024-over-3-million-annual-deaths-due-to-alcohol-and-drug-use-majority-among-men\n- UNODC – World Drug Report 2024: https://www.unodc.org/unodc/data-and-analysis/world-drug-report-2024.html'
  ]
},
{
  id: 'unad-primer-doctorado-aprobacion-2025-09-25',
  fecha: '2025-09-25',
  titulo: 'UNAD resalta aprobación de su primer doctorado en encuentro con el Ministerio de Educación',
  pais: 'colombia',
  imagen_portada: '/noticias/Logo-de-la-UNAD.jpg',    
  credito_imagen_portada: 'Por Universidad Nacional Abierta y a Distancia - https://sig.unad.edu.co/documentos/sgc/documentos_referencia/manual_identidad/Manual_Identidad_Institucional.pdf, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=103664161',
  resumen: 'La Universidad Nacional Abierta y a Distancia (UNAD) recordó, durante un encuentro con el Ministerio de Educación, la aprobación en junio de su primer programa de doctorado, resaltando el avance en cobertura y calidad académica.',
  contenido: [
    'El rector de la Universidad Nacional Abierta y a Distancia (UNAD), Jaime Leal, se reunió con el ministro de Educación, Daniel Rojas, para dialogar sobre cobertura educativa y acreditación institucional. En el encuentro se destacó el reciente avance académico de la institución.',
    'En particular, se recordó que en el mes de junio de 2025 fue aprobado el primer programa de doctorado de la UNAD, un hito en la historia de la universidad y en la educación a distancia en Colombia. Este logro marca un paso significativo en la consolidación de su oferta académica de alta calidad.',
    '<!--img--><img src="/noticias/doctorado-educacion-unad.jpg" alt="Descripción de la imagen" class="rounded-xl shadow-sm"/>',
    'La UNAD ha señalado que su compromiso es ampliar la cobertura nacional sin sacrificar estándares de excelencia académica, fortaleciendo su capacidad para enfrentar los retos actuales de la educación superior en el país.',
    'La institución reafirmó su disposición de trabajar junto al Ministerio de Educación para garantizar que más colombianos puedan acceder a programas de calidad, incluyendo el nuevo doctorado, que representa un avance hacia una educación inclusiva y pertinente.',
    'Durante la presentación oficial del programa, se destacó que el doctorado en Educación, Tecnología y Pedagogías Emergentes fue aprobado mediante la resolución 11120 del 4 de junio de 2025. La universidad explicó que este programa busca fortalecer la investigación de alto nivel con impacto territorial, apoyado en metodologías innovadoras y en enfoques como la neuropedagogía y la eutagogía, que forman parte de su modelo académico.',
    'En el lanzamiento, la UNAD señaló que el nuevo doctorado apunta a diseñar ecosistemas de aprendizaje que contribuyan al cierre de brechas educativas en todo el territorio nacional, con énfasis en docentes que no han tenido acceso a este nivel de formación. También resaltó que el programa incorpora principios de inclusión social, sostenibilidad y transformación digital, aportando al desarrollo de comunidades académicas especializadas y a la construcción de paradigmas educativos innovadores tanto a nivel local como global.'
  ],
  etiquetas: ['colombia', 'educación', 'unad', 'doctorado'],
  fuente: { nombre: 'Universidad UNAD', url: 'https://twitter.com/UniversidadUNAD/status/183904527' },
  video: 'https://www.youtube.com/embed/tzg6L04H-HQ',
  credito_video: 'YouTube / Universidad UNAD'
},
{
  id: 'tutela-garantiza-consulta-octubre-pacto-historico-2025-09-25',
  fecha: '2025-09-25',
  titulo: 'Tutela garantiza inscripción de precandidaturas del Pacto Histórico para la consulta de octubre',
  pais: 'colombia',
  imagen_portada: '/noticias/tutela-corcho-bolivar-portada.jpg',
  imagen: '/noticias/tutela-corcho-bolivar.jpg',
  resumen: 'El Tribunal Superior de Bogotá ordenó habilitar la inscripción de precandidatos del Pacto Histórico para la consulta interna del 26 de octubre de 2025, tras la tutela presentada por Gustavo Bolívar y Carolina Corcho.',
  contenido: [
    'El 25 de septiembre de 2025, el Tribunal Superior de Bogotá, Sala Laboral, falló a favor de una tutela presentada por Gustavo Bolívar y Carolina Corcho, en representación de las bases del Pacto Histórico. La acción buscaba garantizar la participación democrática dentro del movimiento.',
    'La decisión suspende los efectos de la Resolución 09673 del 17 de septiembre de 2025 del Consejo Nacional Electoral y ordena a la Registraduría habilitar de inmediato la inscripción de precandidatos para la consulta interna convocada para el 26 de octubre de 2025.',
    'El fallo establece la medida como cautelar para evitar un perjuicio irremediable y asegurar el derecho a la igualdad en la contienda política. Con esto, las bases del Pacto Histórico podrán presentar candidatos en igualdad de condiciones.',
    'El Comité Político Nacional del Pacto Histórico señaló que en octubre se realizará la consulta para definir el orden de las listas al Congreso, mientras que la precandidatura presidencial se resolverá en marzo de 2026 dentro de una consulta interpartidista del Frente Amplio.',
    'El resultado de la tutela representa un avance para la participación de las bases en los procesos internos y marca un precedente en la defensa del derecho político al interior del movimiento.'
  ],
  etiquetas: ['colombia', 'politica', 'gustavo bolivar', 'carolina corcho', 'pacto historico', 'resultados'],
  fuente: { nombre: 'El Tiempo', url: 'https://www.eltiempo.com/politica/elecciones-colombia-2026/pacto-historico-anuncia-que-hara-consulta-para-definir-sus-listas-al-congreso-en-octubre-y-pospone-eleccion-de-candidato-a-presidencia-a-marzo-3494205' }
},
{
  id: 'el-caminante-acera-calle-84-42d-barranquilla-2025-09-25',
  fecha: '2025-09-25',
  titulo: 'Lo que observé al caminar por la acera de una de las calles del Barrio Nuevo Horizonte de Barranquilla',
  pais: 'colombia',
  resumen: 'Recorrido por la acera de la calle 84 con carrera 42D en Barranquilla, donde se evidencian diferentes tipos de pisos, algunos poco adecuados para andenes por no ser antideslizantes.',
  imagen_portada: '/noticias/andenes-cl84-42d-portada.jpg',
  video: 'https://www.youtube.com/embed/hBdx8tXYYAo',
  credito_video: 'Proyecto El Caminante',
  contenido: [
    'Como parte del proyecto El Caminante, realicé un recorrido por una de las aceras de la calle 84 con carrera 42D de Barranquilla. En este trayecto observé la diversidad de pisos instalados, que van desde el acabado corriente sin decoración hasta plaquetas y baldosas más vistosas.',
    'El piso corriente resulta ser el más funcional, mientras que otros materiales, aunque más decorativos, no están diseñados para uso en andenes, pues carecen de propiedades antideslizantes.',
    'En muchos casos, los propietarios sustituyen los pisos buscando mejorar la presentación de sus fachadas o reparar daños, probablemente con buena intención, pero generando riesgos para los peatones. Estas superficies pueden volverse resbaladizas con facilidad.',
    'La situación representa un peligro para quienes transitan la zona, especialmente en días de lluvia o cuando se riega el jardín, como quedó registrado en el video al final del recorrido.'
  ],
  etiquetas: ['colombia', 'el caminante', 'barranquilla', 'seguridad'],
  fuente: 'LedeLab',
  url_fuente: 'https://youtube.com/shorts/hBdx8tXYYAo?si=249P-PNoSw5K-LzN',
  consecutivo_unico: '20250925-01',
  ubicacion: {
    nombre: 'Barrio Nuevo Horizonte, Barranquilla',
    coordenadas: '10.994852853309174,-74.82344863394042'
  }
},
{
  id: 'margarita-rosa-no-debe-explicacion-2025-09-25',
  fecha: '2025-09-25',
  titulo: 'Por qué Margarita Rosa de Francisco no nos debe ninguna explicación (y nosotros le debemos mucho)',
  pais: 'colombia',
  resumen: 'Margarita Rosa de Francisco ha aclarado públicamente que su matrícula de honor en la UNAD fue por mérito y no por fama. Esta nota editorial sostiene que ella no necesita justificarse: es la universidad y el país los que se han beneficiado con su ejemplo.',
  imagen_portada: '/noticias/margarita-rosa-no-debe-explicacion-2025-09-25.jpg',
  imagen: '/noticias/margarita-rosa-no-debe-explicacion-2025-09-25.jpg',
  credito_imagen: 'Crédito imagen: www.diezminutos.es',
  contenido: [
    'Hay veces en que personas como Margarita Rosa de Francisco se encuentran dando explicaciones que en realidad no tendrían que dar. Recientemente, ella ha aclarado por segunda vez que su matrícula de honor en la Universidad Nacional Abierta y a Distancia de Colombia no tuvo nada que ver con su fama, sino con su desempeño. Ella, como siempre, ha sido transparente hasta el exceso, queriendo dejar las cosas claras. Pero en realidad, Margarita no necesita justificar nada.',
    
    'La verdad es que la universidad probablemente ha ganado mucho más al contar con ella entre sus estudiantes que lo que Margarita haya podido “ganar” con una reducción de matrícula. Porque ella le da prestigio a esa casa de estudios, le da visibilidad y, con su ejemplo, inspira a otros.',
    
    'Yo mismo, por ejemplo, me sentí atraído a explorar la oferta académica de la UNAD gracias a que supe que Margarita estudiaba allí. Me interesaba un programa de filosofía, pero en ese proceso terminé encontrando algo que era aún más apropiado para mí: un programa de doctorado en educación, tecnología y pedagogía avanzada que la UNAD ofrece desde mediados de este año. Es totalmente en línea y encaja perfectamente con mi trayectoria, ya que actualmente estoy escribiendo mi tesis de grado en la Maestría en Tecnología Educativa de la Universidad de Tartu, en Estonia.',
    
    'Entonces, lo que quiero decirte, Margarita, es que no tienes por qué preocuparte ni dar más explicaciones. Al contrario, somos nosotros los que te debemos gratitud. No solo por tu transparencia y tu compromiso con mejorar como persona, sino también por todo lo que nos has dado a través de tu carrera, de tu arte y de tu voz en temas que importan.',
    
    'Si algún día decides incursionar en la política, tendrás mi voto. Y si no, también te entenderé, porque sabemos que personas como tú sacrifican mucho de su tranquilidad personal por el bienestar de todos.'
  ],
  etiquetas: ['colombia', 'editorial', 'margarita rosa de francisco', 'educación'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250925-01'
},
{
  id: 'acido-urico-inflamacion-nudillos-dolor-lumbar-ayuno-36h-2025-09-24',
  fecha: '2025-09-24',
  titulo: 'Ácido úrico, inflamación en nudillos y dolor lumbar: posibles vínculos y el papel del ayuno de 36 horas',
  pais: 'Internacional',
  imagen_portada: '/noticias/acido-urico-mano.jpg',
  imagen: '/noticias/acido-urico-mano.jpg',
  credito_imagen: 'Foto: Leonardo De la Hoz Borrego',
  resumen: 'La inflamación en los nudillos y el dolor lumbar pueden estar relacionados con niveles elevados de ácido úrico y procesos inflamatorios. El ayuno prolongado de 36 horas podría aportar beneficios metabólicos, aunque con precauciones.',
  contenido: [
    'El ácido úrico elevado en sangre, conocido como hiperuricemia, puede originar la formación de cristales de urato en las articulaciones. Esto provoca inflamación y dolor, especialmente en articulaciones pequeñas como los nudillos de los dedos de las manos o los pies.',
    'Además de las articulaciones periféricas, algunas personas presentan molestias en la espalda baja. En ciertos casos, la inflamación asociada a ácido úrico puede afectar la columna o coexistir con otras enfermedades inflamatorias como la espondiloartritis.',
    'La relación entre inflamación articular y dolor lumbar se entiende como parte de un proceso sistémico. La gota y otras artritis inflamatorias se vinculan al síndrome metabólico, la obesidad y dietas ricas en purinas, lo que contribuye a elevar el ácido úrico en sangre.',
    'El ayuno de 36 horas, practicado de manera controlada, ha mostrado en estudios preliminares una reducción de marcadores inflamatorios y una mejor regulación metabólica. Sin embargo, a corto plazo puede aumentar transitoriamente los niveles de ácido úrico debido a la competencia con los cuerpos cetónicos en la excreción renal.',
    'Por ello, aunque el ayuno prolongado puede ofrecer beneficios en la reducción de inflamación y en la salud metabólica, su práctica debe realizarse con precaución y, de ser posible, bajo supervisión médica en personas con antecedentes de gota o hiperuricemia.',
    'Fuentes citadas:',
    '1) Mayo Clinic. *Gout: Symptoms and causes*. https://www.mayoclinic.org/diseases-conditions/gout/symptoms-causes/syc-20372897',
    '2) National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK). *Hyperuricemia and Gout*. https://www.niddk.nih.gov/health-information/kidney-disease/hyperuricemia-gout',
    '3) Longo VD, Mattson MP. *Fasting: Molecular Mechanisms and Clinical Applications*. Cell Metab. 2014. https://doi.org/10.1016/j.cmet.2013.12.008'
  ],
  etiquetas: ['salud', 'alimentación', 'dieta'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250924-03'
},
{
  id: 'sismo-mene-grande-venezuela-2025-09-24',
  fecha: '2025-09-24',
  titulo: 'Sismo de magnitud 6,1 en Mene Grande, Venezuela, se sintió en el Caribe colombiano',
  pais: 'Internacional',
  resumen: 'Un sismo superficial de magnitud 6,1 se registró el 24 de septiembre de 2025 en Mene Grande, estado Zulia, Venezuela. El movimiento telúrico alcanzó intensidad instrumental VIII y fue percibido en varias ciudades del Caribe, incluyendo Puerto Colombia.',
  imagen_portada: '/noticias/sismo-mene-grande-venezuela-2025-09-24.jpg',
  imagen: '/noticias/sismo-mene-grande-venezuela-2025-09-24.jpg',
  credito_imagen: 'Tomado del sitio web del Servicio Geológico Colombiano',
  contenido: [
    'El Servicio Geológico Colombiano reportó que un sismo de magnitud 6,1 se presentó el 24 de septiembre de 2025 a las 17:21 hora local, con epicentro en Mene Grande, estado Zulia, Venezuela. El evento fue clasificado como superficial y registrado con una intensidad instrumental de VIII en la escala Macrosísmica Europea (EMS-98).',
    'El movimiento telúrico se sintió en municipios cercanos como Bachaquero, San Timoteo y Tía Juana, en el estado Zulia, y alcanzó también zonas del Caribe colombiano. En Puerto Colombia, Atlántico, residentes reportaron haber percibido el temblor con fuerza, especialmente en edificios de varios pisos.',
    'La intensidad instrumental VIII corresponde a un nivel severo, en el cual pueden producirse daños considerables en construcciones de calidad normal y colapsos parciales en edificaciones vulnerables. Según el Servicio Geológico Colombiano, este valor es estimado a partir de registros sísmicos y modelos de propagación de ondas.',
    'Hasta el momento no se han reportado víctimas ni daños significativos en Colombia, aunque las autoridades locales y los organismos de gestión del riesgo mantienen seguimiento a la situación para evaluar posibles afectaciones en la región fronteriza y en el Caribe.',
    'Fuentes citadas:',
    'Servicio Geológico Colombiano – https://www.sgc.gov.co'
  ],
  etiquetas: ['colombia', 'venezuela', 'sismo', 'servicio geologico colombiano'],
  fuente: { nombre: 'Servicio Geológico Colombiano', url: 'https://www.sgc.gov.co' },
  consecutivo_unico: '20250924-01'
},
{
  id: 'petro-onu-discurso-dignidad-2025-09-24',
  fecha: '2025-09-24',
  titulo: 'En modo campaña? No, en modo #DIGNIDAD!',
  pais: 'Internacional',
  resumen: 'Gustavo Petro cerró su ciclo de discursos ante la ONU con un mensaje directo contra Donald Trump, cuestionando la política de Estados Unidos y denunciando la ofensiva en Gaza. Su intervención generó debate en medios y respaldo ciudadano en redes bajo la etiqueta #Dignidad.',
  contenido: [
    'El presidente de Colombia, Gustavo Petro, pronunció su último discurso como mandatario en la Asamblea General de Naciones Unidas el 24 de septiembre de 2025. En esta intervención criticó al expresidente estadounidense Donald Trump y se refirió a la descertificación de su gobierno por parte de Washington, así como a la presencia militar de Estados Unidos en el Caribe y la ofensiva israelí en Gaza.',
    'El medio colombiano *Cambio* presentó la alocución como un discurso “en modo campaña”, destacando su tono retador y confrontacional. La publicación generó reacciones inmediatas de usuarios en redes sociales, quienes cuestionaron la narrativa mediática y defendieron el carácter de denuncia del pronunciamiento.',
    'En plataformas como X, múltiples ciudadanos replicaron que el discurso de Petro no fue una campaña electoral sino un acto de dignidad. Comentarios destacaron que el presidente expresó lo que muchos no se atreven a decir sobre la situación en Gaza, la relación con Estados Unidos y la lucha contra el narcotráfico.',
    'La controversia refleja la polarización entre medios y audiencias frente a la política exterior del mandatario saliente. Mientras unos enmarcan sus palabras en clave electoral, otros lo ven como una voz necesaria para llamar la atención internacional sobre conflictos y violaciones de derechos humanos en curso.'
  ],
  etiquetas: ['internacional', 'gustavo petro', 'estados unidos', 'donald trump', 'medios', 'politica'],
  fuente: { nombre: 'Cambio', url: 'https://cambiocolombia.com/poder/articulo' },
  url_fuente: 'https://x.com/estoescambio/status/197080895160933329'
},
{
  id: 'eltiempo-hechos-verificables-petro-onu-2025-09-24',
  fecha: '2025-09-24',
  titulo: 'El diario El Tiempo sorprende con una nota con hechos verificables sobre discurso de Petro en la ONU',
  pais: 'Internacional',
  resumen: 'En su última intervención ante la Asamblea General de la ONU, Gustavo Petro criticó a Donald Trump y varios congresistas estadounidenses abandonaron la sala. Noticias Neutrales destaca que El Tiempo reportó estos hechos de manera verificable, sin recurrir a opiniones.',
  contenido: [
    'El presidente de Colombia, Gustavo Petro, pronunció el 24 de septiembre de 2025 su última intervención ante la Asamblea General de la Organización de las Naciones Unidas (ONU). En su discurso, cuestionó directamente al expresidente estadounidense Donald Trump, al tiempo que denunció la “descertificación” de su gobierno por parte de Washington.',
    
    'Las críticas de Petro se centraron en la figura de Trump y en la influencia de su política. El mandatario colombiano afirmó que Estados Unidos, bajo ese liderazgo, contribuyó a la polarización y al desequilibrio internacional. También señaló que Colombia había sido objeto de decisiones externas que condicionaron su soberanía y limitaban sus posibilidades de avanzar en un modelo más justo de desarrollo.',
    
    'Entre las frases más destacadas de Petro se encuentran:',
    '- “Mi gobierno fue descertificado por Estados Unidos”.',
    '- “Trump representa una visión que divide y genera polarización en el mundo”.',
    '- “Las potencias han mantenido relaciones desiguales con América Latina que deben replantearse”.',
    '- “Es urgente un cambio en el orden internacional hacia la equidad y la cooperación”.',
    
    'Durante la intervención, varios congresistas de Estados Unidos que asistían en el recinto se levantaron y abandonaron la sala. El gesto fue percibido como una respuesta directa a las críticas de Petro contra Trump, subrayando la tensión en el ambiente.',
    
    '<b>Nota editorial:<b>',
    'El diario El Tiempo, que con frecuencia publica artículos de opinión, sorprendió al presentar un cubrimiento basado en hechos verificables. Invitamos a los lectores a consultar la nota completa de El Tiempo para revisar en detalle las afirmaciones y el contexto de la intervención: https://www.eltiempo.com/politica/gobierno/las-frases-mas-fuertes-del-presidente-gustavo-petro-contra-donald-trump-en-el-discurso-ante-la-asamblea-general-de-la-onu-3493523'
  ],
  etiquetas: ['ONU','El Tiempo','internacional', 'gustavo petro', 'donald trump', 'estados unidos', 'politica', 'medios'],
  fuente: 'Noticias Neutrales',
  consecutivo_unico: '20250924-03'
},
{
  id: 'como-ayunar-bien-dr-carlos-jaramillo-2025-09-24',
  fecha: '2025-09-24',
  titulo: 'Cómo ayunar bien? - por el Dr. Carlos Jaramillo',
  pais: 'Colombia',
  resumen: 'El Dr. Carlos Jaramillo explica cuáles bebidas pueden consumirse durante el ayuno sin afectar sus beneficios, y cuáles deben evitarse.',
  video: 'https://www.youtube.com/embed/0hcaYRg9pL8',
  credito_video: 'Canal de YouTube Dr. Carlos Jaramillo',
  contenido: [
    'Este es uno de los videos que contiene más coincidencias entre lo expuesto por el Dr. Carlos Jaramillo y las ideas que otros expertos han compartido sobre el ayuno. Por ello, se invita a ver el episodio completo, que incluye recomendaciones prácticas sobre qué beber y qué evitar durante esta práctica.',
    
    'El ayuno, según explica el Dr. Jaramillo en este episodio, es un proceso en el que el cuerpo utiliza reservas energéticas y activa mecanismos como la autofagia. Los beneficios comienzan a evidenciarse después de 12 a 14 horas sin ingesta de alimentos, y se potencian en lapsos mayores.',
    
    'Durante este periodo, no se debe consumir nada que aporte calorías, como azúcares, proteínas o grasas. Tampoco se recomienda caldo de hueso, jugos de frutas o vegetales, ni bebidas con aceites o leche vegetal. La excepción mencionada es añadir el jugo de medio limón diluido en un litro de agua, ya que su aporte de azúcares libres no supera los 2 gramos y no interrumpe el estado de ayuno.',
    
    'El doctor también advierte sobre la controversia en torno a los endulzantes artificiales. Estudios muestran que polioles como sorbitol o maltitol estimulan insulina o ácido úrico, mientras que el eritritol genera debate. Por ello, recomienda evitarlos para no arriesgar la eficacia del ayuno. En contraste, bebidas seguras incluyen agua, agua con limón, agua con vinagre de manzana, café filtrado, té, mate e infusiones de hierbas.',
    
    'La hidratación es un pilar fundamental, por lo que se sugiere incluir electrolitos como sodio, potasio y magnesio para prevenir síntomas de deshidratación. Finalmente, al romper el ayuno, se aconseja hacerlo con alimentos ricos en fibra, proteínas y grasas saludables —como vegetales, aguacate o caldo de hueso— para minimizar picos de glucosa e insulina.'
  ],
  etiquetas: ['salud', 'nutrición', 'alimentación', 'ayuno'],
  fuente: { nombre: 'Dr. Carlos Jaramillo', url: 'https://www.youtube.com/watch?v=0hcaYRg9pL8' },
  consecutivo_unico: '20250924-01'
},
{
  id: 'beneficios-matcha-organico-2025-09-24',
  fecha: '2025-09-24',
  titulo: 'Beneficios del matcha orgánico en agua',
  pais: 'Estados Unidos',
  resumen: 'El consumo de matcha orgánico en agua ofrece una alta concentración de antioxidantes, posibles mejoras metabólicas, apoyo a la salud cardiovascular y beneficios cognitivos, de acuerdo con la evidencia científica disponible.',
  contenido: [
    'El matcha es un polvo fino elaborado a partir de hojas jóvenes de té verde (*Camellia sinensis*) cultivadas bajo sombra, lo que incrementa su contenido de clorofila y aminoácidos. A diferencia del té verde infusionado, en el que se desechan las hojas, el matcha permite ingerir la hoja entera, concentrando así catequinas, L-teanina y otros compuestos bioactivos de interés para la salud.',
    
    'Cuando se habla de matcha “orgánico” se hace referencia a un producto cultivado bajo certificaciones que prohíben pesticidas sintéticos y fertilizantes químicos, reduciendo la exposición a residuos agrícolas. Aunque esta característica no modifica de manera sustancial la composición de antioxidantes o cafeína, sí asegura un estándar de producción más limpio y confiable para el consumidor.',
    
    'Uno de los principales beneficios del matcha es su alto contenido de antioxidantes, especialmente epigalocatequina galato (EGCG). Esta catequina ha sido ampliamente estudiada por su capacidad de neutralizar radicales libres y disminuir el daño oxidativo, lo que contribuye a reducir procesos inflamatorios crónicos. Un análisis publicado en *Food Chemistry* reporta que el matcha presenta niveles de EGCG superiores al té verde convencional.',
    
    'En relación con el metabolismo, investigaciones en modelos animales y estudios preliminares en humanos han mostrado que el matcha puede mejorar la regulación de la glucosa en sangre e inhibir parcialmente la digestión del almidón, ralentizando los picos de glucemia postprandial. En ratas alimentadas con dietas altas en grasa, el consumo de matcha se asoció con menor ganancia de peso, reducción de grasa visceral y mejor perfil lipídico (colesterol y triglicéridos). Si bien los resultados en humanos aún son limitados, apuntan a un potencial efecto coadyuvante en la prevención de trastornos metabólicos.',
    
    'Otro aporte relevante está en el área cognitiva. El matcha combina cafeína con L-teanina, un aminoácido que promueve un estado de alerta relajado. Estudios clínicos han mostrado que esta sinergia mejora la atención, la memoria y los tiempos de reacción en comparación con placebo. Además, se ha sugerido que el consumo habitual de matcha podría ayudar a reducir la respuesta fisiológica al estrés y mejorar la calidad del rendimiento mental en situaciones de alta exigencia.',
    
    'En cuanto a la salud cardiovascular, un metaanálisis revisado por Harvard Health Publishing señala que las catequinas del té verde pueden disminuir la presión arterial y los niveles de colesterol LDL. Estas observaciones se aplican al matcha, ya que concentra mayores cantidades de estas moléculas. Además, evidencia reciente de la Escuela de Salud Pública de Harvard indica que el consumo de matcha podría beneficiar no solo al corazón, sino también al cerebro y al microbioma intestinal, aunque aún se requieren estudios clínicos más extensos.',
    
    'Beber matcha en agua, sin añadidos calóricos, permite aprovechar de manera directa estos compuestos bioactivos. Al no incorporar azúcares ni endulzantes, se evitan picos glucémicos y se preservan los efectos antioxidantes y metabólicos del té. No obstante, es importante subrayar que el matcha contiene cafeína, por lo que puede producir insomnio, palpitaciones o molestias gastrointestinales en personas sensibles, y que dosis muy elevadas de extractos de té verde han sido asociadas a hepatotoxicidad en casos aislados.',
    
    'Fuentes citadas:',
    '1) Harvard Health Publishing. *Matcha: a look at possible health benefits*. https://www.health.harvard.edu/staying-healthy/matcha-a-look-at-possible-health-benefits',
    '2) Harvard T.H. Chan School of Public Health. *Matcha, brain, heart and gut health*. https://hsph.harvard.edu/news/matcha-brain-heart-gut-health/',
    '3) Food Chemistry. *Protective effects of matcha on oxidative stress and inflammation*. https://www.sciencedirect.com/science/article/abs/pii/S0963996923005525',
    '4) National Library of Medicine. *Effects of matcha on glucose metabolism in animal models*. https://pmc.ncbi.nlm.nih.gov/articles/PMC9792400/',
    '5) National Library of Medicine. *Green tea catechins and human health*. https://pmc.ncbi.nlm.nih.gov/articles/PMC7796401/'
  ],
  etiquetas: ['salud', 'alimentación', 'nutrición', 'consumo'],
  fuente: { nombre: 'Harvard Health Publishing', url: 'https://www.health.harvard.edu/staying-healthy/matcha-a-look-at-possible-health-benefits' },
  url_fuente: 'https://www.health.harvard.edu/staying-healthy/matcha-a-look-at-possible-health-benefits',
  consecutivo_unico: '20250924-01'
},
{
  id: 'ayuno-36-horas-fases-y-beneficios-2025-09-24',
  fecha: '2025-09-24',
  titulo: 'Fases del ayuno de 36 horas y los procesos clave que motivan a practicarlo',
  pais: 'Rusia',
  resumen: 'Un repaso detallado de las cinco fases del ayuno de 36 horas, destacando los cambios metabólicos, hormonales y celulares que favorecen la quema de grasa, la autodepuración y la claridad mental.',
  video: 'https://www.youtube.com/embed/iIc7wYm6kYs',
  credito_video: 'Canal de YouTube Dr. Michael Diamonds',
  contenido: [
    'El ayuno prolongado de 36 horas se divide en cinco fases que reflejan transformaciones profundas en el metabolismo humano. En la primera fase, entre 0 y 12 horas, predomina el uso del glucógeno almacenado en hígado y músculos. El organismo reduce gradualmente la insulina y aumenta la hormona de crecimiento, preparando el terreno para cambios posteriores.',
    'La segunda fase, de 12 a 18 horas, corresponde al llamado “cambio metabólico”. El cuerpo empieza a agotar sus reservas de glucógeno y activa enzimas que facilitan la oxidación de grasas. En este punto se inician la producción de cuerpos cetónicos y la disminución progresiva de la sensación de hambre.',
    'Entre las 18 y 24 horas se da la tercera fase: cetosis profunda y activación de la autofagia. El cerebro comienza a nutrirse principalmente de cetonas, lo que se traduce en mayor claridad mental. Al mismo tiempo, la autofagia aumenta hasta cuatro veces, eliminando proteínas dañadas y residuos celulares, mientras la hormona de crecimiento se eleva para proteger la masa muscular.',
    'La cuarta fase, de 24 a 30 horas, marca el máximo de la transformación metabólica. El organismo alcanza su mayor eficiencia en la quema de grasa y en la regeneración celular. La autofagia neuronal se intensifica, reduciendo acumulaciones que se asocian con enfermedades neurodegenerativas. Además, se incrementa el factor neurotrófico BDNF, que estimula nuevas conexiones cerebrales.',
    'Finalmente, en la fase de 30 a 36 horas, se consolida la flexibilidad metabólica y la biogénesis mitocondrial. El cuerpo se prepara para reanudar la ingesta de alimentos con una sensibilidad a la insulina altamente optimizada, lo que asegura un uso eficiente de los nutrientes. Se recomienda romper el ayuno con una comida ligera y rica en nutrientes, como caldos o vegetales al vapor, para mantener los beneficios obtenidos.',
    'Este proceso no solo promueve la pérdida de grasa y la preservación muscular, sino que también fortalece la salud metabólica, optimiza la función cerebral y reduce marcadores de inflamación. Los beneficios pueden extenderse hasta 72 horas después de haber concluido el ayuno, consolidando un “reinicio metabólico” con impacto integral en el organismo.',
    'Fuentes citadas:',
    '1) Ho KY, Evans WS, Blizzard RM, et al. Fasting enhances growth hormone secretion and amplifies the complex rhythms of growth hormone secretion in man. J Clin Invest. 1988;81(4):968-975. https://pubmed.ncbi.nlm.nih.gov/3127426/',
    '2) Cornford AS, Barkan AL, Horowitz JF. Rapid suppression of growth hormone after caloric restriction in humans: a potential mechanism for loss of lipid mobilization. J Clin Endocrinol Metab. 2011;94(3):965–972. https://academic.oup.com/jcem/article/94/3/965/2596752',
    '3) Ganesan S, Ito S, Nagaoka Y, et al. Autophagy and fasting: the connection between cellular health and longevity. FEBS Lett. 2023;597(21):3347–3363. https://pmc.ncbi.nlm.nih.gov/articles/PMC10509423/',
    '4) Madeo F, Zimmermann A, Maiuri MC, Kroemer G. Essential role for autophagy in life span extension. Curr Opin Cell Biol. 2015;31:96–102. https://www.sciencedirect.com/science/article/abs/pii/S1568163718301478',
    '5) Patterson RE, Sears DD. Metabolic Effects of Intermittent Fasting. Annu Rev Nutr. 2017;37:371–393. https://pmc.ncbi.nlm.nih.gov/articles/PMC4516560/',
    '6) Hu C, Yan X, Chen Y, et al. Intermittent fasting improves glycemic control in patients with type 2 diabetes: a systematic review and meta-analysis. J Health Popul Nutr. 2025;44(1):5. https://jhpn.biomedcentral.com/articles/10.1186/s41043-025-01039-2',
    '7) Nature Metabolism Editorial. Water-only fasting elevates growth hormone independently of weight loss. Nat Metab. 2024;6:103–105. https://www.nature.com/articles/s44324-024-00025-2'


  ],
  etiquetas: ['salud', 'nutrición', 'alimentación','ayuno'],
  fuente: { nombre: 'Dr. Michael Diamonds', url: 'https://www.youtube.com/watch?v=iIc7wYm6kYs' },
  url_fuente: 'https://www.youtube.com/watch?v=iIc7wYm6kYs',
  consecutivo_unico: '20250923-01'
},
{
  id: 'irg-wp-57-beijing-2026-leonardo-de-la-hoz-borrego-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'El IRG/WP realizará su 57º encuentro anual en Beijing en 2026',
  pais: 'Suecia',
  resumen: 'El International Research Group on Wood Protection (IRG/WP) anunció que su reunión número 57 se llevará a cabo del 24 al 28 de mayo de 2026 en el Nirvana Resort Beijing, China. El investigador colombiano Leonardo De la Hoz Borrego, miembro del grupo desde 2006, participará en el encuentro.',
  contenido: [
    'El International Research Group on Wood Protection (IRG/WP) con base en Estocolmo, confirmó que su 57ª reunión anual se celebrará entre el 24 y el 28 de mayo de 2026 en el Nirvana Resort Beijing, en China.',
    'El lugar fue seleccionado por ofrecer instalaciones modernas y adecuadas para el tamaño del encuentro, además de contar con múltiples opciones de alojamiento y su proximidad a la Gran Muralla China. El evento promete un entorno ideal para el intercambio académico y técnico sobre preservación de la madera.',
    'El IRG/WP reúne a expertos internacionales en biología de la madera, tratamientos químicos y térmicos, tecnologías de protección y sostenibilidad. Desde 1969 organiza conferencias anuales para compartir avances científicos y fomentar la cooperación entre instituciones, empresas y académicos.',
    'Leonardo De la Hoz Borrego, investigador colombiano y miembro del IRG/WP desde 2006, hace parte de esta red internacional y ha participado en diversas discusiones técnicas sobre innovación y preservación de la madera en la región latinoamericana.',
    'Fuentes citadas:',
    'International Research Group on Wood Protection (IRG/WP). https://www.irg-wp.com/IRG57/index.html'
  ],
  etiquetas: ['tecnología', 'investigación', 'industria de la madera','China','Suecia'],
  fuente: { nombre: 'International Research Group on Wood Protection (IRG/WP)', url: 'https://www.irg-wp.com/IRG57/index.html' },
  url_fuente: 'https://www.irg-wp.com/IRG57/index.html',
  consecutivo_unico: '20250922-02'
},
{
  id: 'dialogo-financiacion-climatica-onu-petro-2025-09-22',
  fecha: '2025-09-23',
  titulo: 'Petro en la ONU: crítica a la guerra contra las drogas y llamado urgente frente a la crisis climática',
  pais: 'Internacional',
  resumen: 'En su última intervención en Naciones Unidas, el presidente Gustavo Petro denunció la política internacional de drogas, vinculó la codicia con la violencia global y advirtió que la humanidad tiene apenas diez años para frenar el colapso climático.',
  video: 'https://www.youtube.com/embed/Lq8n2pLv_pQ',
  credito_video: 'Canal de YouTube Naciones Unidas',
  contenido: [
    'El presidente de Colombia, Gustavo Petro, participó en un diálogo de alto nivel sobre soluciones para la financiación climática en Naciones Unidas. Durante su intervención afirmó que su gobierno fue “descertificado” por Estados Unidos debido a su oposición a la aspersión con glifosato y a la política internacional de drogas.',
    'Petro denunció que la llamada guerra contra las drogas ha recaído sobre los jóvenes pobres del Caribe y de América Latina, mientras que los verdaderos narcotraficantes viven en ciudades como Miami, Dubái, París o Madrid. Señaló que la ONU mantiene un enfoque equivocado al responsabilizar a las sustancias y no a los actores de poder detrás del negocio.',
    'El mandatario relacionó la política de drogas con otras crisis globales, como el genocidio en Gaza y la migración forzada, afirmando que “la guerra en el mundo es de la codicia contra la vida”. Añadió que los recursos naturales como la coca, el carbón y el petróleo son usados como fetiches para ocultar las relaciones de poder que generan desigualdad y violencia.',
    'Sobre la crisis climática, Petro advirtió que la humanidad enfrenta un punto de no retorno, ilustrado por la muerte de delfines rosados en el Amazonas debido al aumento de la temperatura del agua. “Si la selva amazónica no se salva, no se salva la humanidad”, dijo, al tiempo que criticó la fe en un “capitalismo verde” para resolver la crisis.',
    'El presidente insistió en que no existe un mercado capaz de frenar por sí solo la expansión de los combustibles fósiles y llamó a la regulación global del capital. Señaló que Naciones Unidas se equivoca al creer que los bancos y la competencia financiera resolverán el problema, cuando en realidad “el capital siempre invertirá en lo fósil si da más ganancia”.',
    'Finalmente, hizo un llamado a la comunidad internacional para detener tanto el genocidio en Gaza como la crisis climática. Según Petro, la COP 30 será la última oportunidad para decidir colectivamente un cambio profundo en el modelo económico y social: “Nos quedan diez años para cambiar el mundo”.'
  ],
  etiquetas: ['gustavo petro', 'politica', 'estados unidos', 'colombia', 'petróleo', 'economía', 'clima','destacados','portada'],
  fuente: 'Naciones Unidas',
  url_fuente: 'https://www.youtube.com/watch?v=Lq8n2pLv_pQ',
  imagen_portada: '/noticias/dialogo-financiacion-climatica-onu-petro-2025-09-22.jpg',

  consecutivo_unico: '20250922-01'
},
{
  id: 'laver-cup-2025-final-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Team World se corona campeón del Laver Cup 2025 tras imponerse 15-9 a Europa',
  pais: 'Internacional',
  resumen: 'El Team World, bajo la capitanía de Andre Agassi, conquistó el Laver Cup 2025 en San Francisco con marcador de 15-9 sobre Europa, destacando el triunfo decisivo de Taylor Fritz ante Alexander Zverev.',
  contenido: [
    'El Team World se proclamó campeón del Laver Cup 2025 tras imponerse 15-9 al Team Europe en el Chase Center de San Francisco, Estados Unidos. El torneo se disputó entre el 19 y el 21 de septiembre sobre pista dura bajo techo.',
    'La formación del Resto del Mundo estuvo liderada por Andre Agassi en su debut como capitán, mientras que Europa fue dirigida por Yannick Noah. Entre los jugadores más destacados de los campeones se encuentran Taylor Fritz, Alex de Minaur, Francisco Cerúndolo y Reilly Opelka. Por Europa participaron Carlos Alcaraz, Alexander Zverev, Casper Ruud y Holger Rune.',
    'La diferencia clave se produjo el sábado, cuando el Team World ganó todos los partidos de la jornada, sumando seis puntos y tomando ventaja de 9-3. El domingo, con partidos que otorgaban tres puntos cada uno, los europeos lograron reducir la brecha con un triunfo en dobles, pero el estadounidense Taylor Fritz aseguró el título al vencer a Alexander Zverev por 6-3 y 7-6(4).',
    'Con esta victoria, el Team World consiguió su tercer título en las últimas cuatro ediciones, consolidando un ciclo de dominio en la competencia. El rendimiento de Fritz fue determinante, tras superar tanto a Carlos Alcaraz como a Zverev en duelos individuales claves. La edición también marcó el estreno de nuevos capitanes, que aportaron una dinámica renovada al torneo.',
    'Fuentes citadas:',
    '1) Laver Cup. Resultados oficiales. https://lavercup.com/scores-results-2025',
    '2) ATP Tour. Crónica final del torneo. https://www.atptour.com/en/news/laver-cup-2025-sunday',
    '3) Reuters. Fritz fires on final day as Team World land third Laver Cup title. https://www.reuters.com/sports/tennis/fritz-fires-final-day-team-world-land-third-laver-cup-title-2025-09-22/'
  ],
  etiquetas: ['resultados', 'tenis', 'laver cup', 'carlos alcaraz', 'taylor fritz'],
  fuente: { nombre: 'Laver Cup', url: 'https://lavercup.com' },
  url_fuente: 'https://lavercup.com',
  consecutivo_unico: '20250922-01'
},
{
  id: 'maurice-armitage-desigualdad-negocio-colombia-2025-09-23',
  fecha: '2025-09-23',
  titulo: 'Maurice Armitage expone por qué reducir la desigualdad es buen negocio en Colombia',
  pais: 'Colombia',
  resumen: 'El empresario y exalcalde de Cali, Maurice Armitage, sostiene que valorar el trabajo, mejorar salarios y compartir utilidades fortalece la productividad y la estabilidad, alineando intereses de empresas y trabajadores.',
  imagen_portada: 'noticias/maurice-armitage.png',
  video: 'https://www.youtube.com/embed/b2xBjkrGS1s',
  credito_video: 'Canal A Fondo',
  contenido: [
    'En entrevista con el canal A Fondo, el empresario y exalcalde de Cali, Maurice Armitage, argumenta que reducir la desigualdad es consistente con la rentabilidad empresarial. Según su experiencia, “valorar al ser humano” y “distribuir utilidades” crea equipos más comprometidos y competitivos, lo que se traduce en mejores resultados para las compañías.',
    
    'Armitage describe prácticas aplicadas en sus compañías —como la Siderúrgica de Occidente (SIDOC) y Cementos San Marcos— orientadas a compartir parte de las utilidades con los trabajadores y a elevar salarios por encima del mínimo legal cuando la productividad lo permite. Afirma que esta estrategia permitió competir con firmas más grandes no “con plata ni con tecnología”, sino con capital humano motivado y estable.',
    
    'El caso colombiano que plantea el empresario vincula directamente menos desigualdad con más mercado interno y menor conflictividad. Sostiene que cuando aumenta el poder adquisitivo de quienes trabajan, crece la demanda de bienes durables y servicios formales (comercio, vivienda, financieros), y disminuyen costos asociados a la inestabilidad. En su visión, “los que tenemos dinero” también se benefician de ciudades más seguras y previsibles, porque “si no cambiamos de actitud, este país no va a ser viable”.',
    
    'Armitage conecta su propuesta con una idea que resume como coexistencia de “capitalismo productivo con socialismo distributivo”: producir más y mejor, pero compartiendo parte del progreso con quienes lo hacen posible. Presenta esta postura como una estrategia práctica para empresas colombianas que buscan rentabilidad sostenida en contextos de alta desigualdad.',
    
    'Contexto y verificación: fuentes públicas confirman su trayectoria como fundador de SIDOC, socio de Cementos San Marcos y exalcalde de Cali (2016–2019). También registran su participación como víctima en los diálogos de paz y su defensa de esquemas de reparto de utilidades como mecanismo de cohesión y productividad.',
    
    'Fuentes citadas:',
    'Entrevista completa en A Fondo. https://www.youtube.com/watch?v=b2xBjkrGS1s',
    'Perfil de Maurice Armitage (biografía y cargos). https://es.wikipedia.org/wiki/Maurice_Armitage',
    'Sitio oficial de Cementos San Marcos. https://cementosanmarcos.com/',
    'Notas y perfil público sobre reparto de utilidades y trayectoria empresarial. https://thedialogue.org/expert/maurice-armitage/'
  ],
  etiquetas: ['economía', 'colombia', 'editorial','destacado','portada'],
  fuente: { nombre: 'A Fondo', url: 'https://www.youtube.com/watch?v=b2xBjkrGS1s' }
},
{
  id: 'crisis-financiera-salud-colombia-vicente-calvo-2025-09-23',
  fecha: '2025-09-23',
  titulo: 'Vicente Calvo explica cómo se gestó la crisis financiera del sistema de salud en Colombia',
  pais: 'Colombia',
  resumen: 'El investigador Vicente Calvo expone con detalle los factores que llevaron a la implosión del sistema de salud en 2024, señalando el incumplimiento de reservas técnicas, la permisividad institucional y el maquillaje de indicadores financieros por parte de las EPS.',
  contenido: [
    'Vicente Calvo, quien ha dedicado los últimos años a investigar y denunciar con cifras el desfalco de las EPS al sistema de salud, publicó un análisis sobre cómo se gestó la crisis financiera que estalló en 2024. Según Calvo, el colapso pudo haberse evitado si se hubiesen cumplido las normas expedidas desde 2007.',
    'En 2007, el Decreto 574 obligaba a las EPS a contar con reservas técnicas como mecanismo de protección financiera para responder por los servicios de salud. Sin embargo, año tras año esta exigencia fue prorrogada mediante diferentes resoluciones, lo que permitió a las entidades operar sin el respaldo real requerido.',
    'A partir de 2014, nuevas normas otorgaron prerrogativas adicionales a las EPS, flexibilizando sus obligaciones. En lugar de fortalecerse los controles, se crearon rutas de recuperación y reorganización que les permitieron continuar operando pese a sus problemas financieros. Esta permisividad, afirma Calvo, terminó institucionalizando el incumplimiento.',
    'El investigador también recordó que el Acuerdo de Punto Final de 2019 no resolvió los problemas estructurales, pues aunque cubrió parcialmente las deudas históricas, las EPS siguieron sin reservas suficientes y el flujo de recursos hacia las IPS permaneció débil y poco transparente.',
    'Finalmente, resoluciones expedidas en 2021 y 2022 permitieron maquillar indicadores de solvencia al flexibilizar los criterios de cálculo de reservas. Esto, según Calvo, fue una bomba de tiempo que estalló en 2024, afectando directamente a millones de usuarios y trabajadores de la salud.',
    'Para Calvo, la lección central es que el sistema requiere reglas claras que se cumplan efectivamente, evitando que las excepciones temporales se conviertan en normas permanentes y que el maquillaje financiero prime sobre la salud de los colombianos.'
  ],
  etiquetas: ['colombia', 'salud', 'investigación'],
  fuente: { nombre: 'Vicente Calvo', url: 'https://x.com/vcalvot/status/1970200529654386829' },
  url_fuente: 'https://x.com/vcalvot/status/1970200529654386829',
  consecutivo_unico: '20250922-01'
},
{
  id: 'gluten-caseina-autismo-trump-2025-09-23',
  fecha: '2025-09-23',
  titulo: 'Gluten, caseína y autismo: debate científico tras advertencia de Trump sobre paracetamol',
  pais: 'Internacional',
  resumen: 'El presidente Donald Trump pidió limitar el paracetamol en el embarazo por un supuesto vínculo con el autismo, mientras persiste la discusión científica sobre el papel del gluten y la caseína en algunos pacientes con trastorno del espectro autista.',
  contenido: [
    'El presidente de Estados Unidos, Donald Trump, solicitó restricciones al uso de paracetamol durante el embarazo por un posible riesgo de autismo. Sus declaraciones reactivaron el debate público sobre las causas de este trastorno del neurodesarrollo y las intervenciones dietéticas en pacientes diagnosticados.',
    'Diversos estudios han analizado la relación entre el consumo de gluten y caseína —proteína presente en la leche— y los síntomas del autismo. Si bien no existe evidencia de que estos alimentos causen la condición, revisiones científicas han documentado mejoras en un subgrupo de niños con trastorno del espectro autista que siguen dietas libres de gluten y caseína.',
    'La revisión Cochrane de 2017 concluyó que la calidad de los estudios disponibles es baja y con muestras reducidas, pero reconoció que algunas investigaciones muestran mejoras en comunicación, conducta y síntomas gastrointestinales al retirar gluten y lácteos. Esto ha llevado a médicos y familias a considerar estas dietas como una opción supervisada, especialmente en niños con problemas digestivos.',
    'Organismos internacionales como la Organización Mundial de la Salud y la Organización Panamericana de la Salud sostienen que no hay pruebas suficientes para recomendar estas dietas de manera generalizada. Sin embargo, expertos en nutrición señalan que su implementación bajo control médico y nutricional puede ser beneficiosa para ciertos pacientes.',
    'Fuentes citadas:',
    '1) SWI swissinfo.ch. *Trump pide limitar uso de paracetamol en embarazo por posible riesgo de autismo*. https://share.google/8hv5fRfBrSDuhnadS',
    '2) Millward C, Ferriter M, Calver S, Connell-Jones G. *Gluten- and casein-free diets for autistic spectrum disorder*. Cochrane Database Syst Rev. 2017. https://doi.org/10.1002/14651858.CD003498.pub4',
    '3) Organización Mundial de la Salud. *Autism spectrum disorders*. https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders',
    '4) Pan American Health Organization. *Autism in the Americas*. https://www.paho.org/en/news/2-4-2023-autism-americas'
  ],
  etiquetas: ['salud', 'donald trump', 'investigación','Estados Unidos'],
  fuente: { nombre: 'SWI swissinfo.ch', url: 'https://www.swissinfo.ch' },
  url_fuente: 'https://share.google/8hv5fRfBrSDuhnadS',
  consecutivo_unico: '20250923-02'
},
{
  id: 'roger-federer-canchas-lentas-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Roger Federer critica la uniformidad de la velocidad en las canchas del circuito',
  pais: 'Internacional',
  resumen: 'En el pódcast SERVED, conducido por Andy Roddick, Roger Federer cuestionó la tendencia a homogenizar la velocidad de las canchas en el tenis profesional, señalando que limita la variedad de estilos de juego.',
  video: 'https://www.youtube.com/embed/v7RsLVkwbDA?start=4078',
  credito_video: 'Canal de YouTube Andy Roddick',
  contenido: [
    'Roger Federer, invitado al pódcast SERVED de Andy Roddick, expresó su inconformidad con la tendencia a ralentizar las canchas de tenis en el circuito profesional. Según el ex número uno del mundo, la uniformidad actual reduce la diversidad en el juego y perjudica la riqueza competitiva.',
    '“Necesitamos no solo canchas rápidas, sino también ver a jugadores como Alcaraz o Sinner resolver partidos en superficies extremadamente veloces y luego enfrentarse en canchas mucho más lentas. Eso mostraría contrastes interesantes”, afirmó Federer durante la conversación.',
    'El suizo sostuvo que los directores de torneos han permitido que la velocidad de las pelotas y las canchas se mantenga prácticamente igual en todo el calendario, lo que, a su juicio, facilita que un mismo estilo de juego funcione tanto en Roland Garros, como en Wimbledon o el US Open.',
    'La declaración generó reacciones en redes sociales, incluyendo un registro del momento publicado en X por la cuenta Tennis Masterr: https://x.com/tennismasterr/status/1970093111180214570',
    'Fuentes citadas:',
    '1) Canal de YouTube Andy Roddick. SERVED podcast. https://www.youtube.com/watch?v=v7RsLVkwbDA&t=4078s',
    '2) Publicación en X de Tennis Masterr. https://x.com/tennismasterr/status/1970093111180214570'
  ],
  etiquetas: ['tenis', 'roger federer', 'andy roddick'],
  fuente: { nombre: 'Andy Roddick', url: 'https://www.youtube.com/@AndyRoddick' },
  url_fuente: 'https://www.youtube.com/watch?v=v7RsLVkwbDA&t=4078s',
  consecutivo_unico: '20250922-03'
},
{
  id: 'jep-sentencias-farc-falsos-positivos-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'La Silla Vacía analiza las sentencias de la JEP a exFarc y militares por falsos positivos',
  pais: 'Colombia',
  resumen: 'En el programa “La Siguiente Movida” de La Silla Vacía, Juanita León y Héctor Riveros discutieron el alcance histórico y las críticas a las sentencias de la JEP contra exintegrantes del Secretariado de las Farc por secuestros y contra militares del batallón La Popa por ejecuciones extrajudiciales.',
  video: 'https://www.youtube.com/embed/14NvqwHlf7c',
  credito_video: 'Canal de YouTube La Silla Vacía (programa “La Siguiente Movida”)',
  contenido: [
    'La Jurisdicción Especial para la Paz (JEP) emitió sentencias contra siete exintegrantes del Secretariado de las Farc y doce militares del batallón La Popa. Los primeros fueron condenados por crímenes de lesa humanidad vinculados al secuestro, mientras que los segundos lo fueron por ejecuciones extrajudiciales conocidas como “falsos positivos”.',
    'En el análisis de La Silla Vacía, los conductores destacaron la relevancia histórica de que ambos grupos fueran juzgados por un tribunal nacional. Sin embargo, señalaron que persiste una percepción de sanciones débiles o ambiguas, en especial en el caso de las Farc, donde no se concretaron de inmediato las obligaciones reparadoras.',
    'Las sanciones a los exFarc incluyen labores como apoyo a la búsqueda de desaparecidos, actividades de memoria y reforestación. En contraste, las de los militares contemplan presencia territorial y trabajos específicos en beneficio de comunidades indígenas victimizadas, lo que fue considerado más claro y reparador.',
    'Víctimas como César Lazo, secuestrado durante 13 años, expresaron frustración por la falta de justicia proporcional al daño sufrido. Los analistas subrayaron que la efectividad de las sentencias dependerá de la implementación de los TOAR (trabajos, obras y actividades con contenido restaurador y reparador) y de la real participación de las víctimas en su definición.',
    'En el plano político, recordaron que el acuerdo de paz fue cuestionado por sectores que advirtieron impunidad y privilegios para los exguerrilleros. A su vez, el expresidente Juan Manuel Santos defendió que las sanciones fueron un compromiso necesario para lograr la dejación de armas, mientras críticos como Álvaro Uribe insistieron en que se trató de concesiones excesivas.',
    '<b>Nota del editor:<b>',
    'Las reflexiones de Juanita León y Héctor Riveros muestran la tensión entre lo alcanzado y lo que aún falta en la justicia transicional. Coincido en que lo verdaderamente histórico no es solo el fallo de la JEP, sino la posibilidad que nos da como sociedad de mirarnos en un espejo sin negar responsabilidades. Sin embargo, la división política que ha acompañado este proceso ha debilitado su potencial reparador. Ninguna condena puede devolver lo perdido a las víctimas, pero sí podemos decidir si la verdad, la reparación y la memoria se convierten en cimientos de un país distinto o en una oportunidad desperdiciada. La vida, la dignidad y el reconocimiento del otro deberían ser el centro de nuestra acción colectiva, más allá de banderas políticas o ideológicas.'
  ],
  etiquetas: ['Colombia', 'JEP', 'FARC', 'falsos positivos', 'justicia transicional', 'víctimas', 'proceso de paz'],
  fuente: { nombre: 'La Silla Vacía', url: 'https://www.youtube.com/watch?v=14NvqwHlf7c' }
},
{
  id: 'tejiendo-redes-digital-sostenible-thaly-gutierrez-2023-12-22',
  fecha: '2023-12-22',
  titulo: 'Tejiendo redes digitales sostenibles con Thaly Gutiérrez',
  pais: 'Internacional',
  resumen: 'Leonardo de la Hoz y Thaly Gutiérrez dialogaron sobre la residencia electrónica de Estonia, el papel de LinkedIn en la creación de comunidades profesionales y el uso de la inteligencia artificial para el emprendimiento y la educación.',
  video: 'https://www.youtube.com/embed/8gIKAIxu_ac',
  credito_video: 'Canal de YouTube Leonardo de la Hoz Borrego',
  contenido: [
    'La conversación publicada el 22 de diciembre de 2023 aborda cómo LinkedIn puede servir como puente para encuentros profesionales y colaboraciones. Thaly Gutiérrez relató su experiencia participando en una investigación de usuario del programa de residencia electrónica de Estonia y destacó la importancia de las comunidades digitales.',
    'El diálogo detalla las características del programa de e-Residency de Estonia, que permite crear empresas y operar de forma remota con identificación digital. Ambos señalaron que la residencia electrónica no implica nacionalidad ni pasaporte, sino una herramienta para emprendedores y freelancers que buscan integrarse a la economía digital europea.',
    'La charla también exploró el rol de la alfabetización digital y el diseño de prompts para inteligencia artificial, subrayando la necesidad de aprender a interactuar con estos modelos en distintos idiomas para mejorar la calidad de los resultados. Se mencionaron avances recientes en modelos abiertos y la importancia de su aplicación en contextos educativos.',
    'Finalmente, los participantes reflexionaron sobre el estilo de vida nómada digital, las oportunidades de emprendimiento en distintas regiones y la relevancia de la educación financiera y tecnológica para aprovechar las ventajas del trabajo remoto internacional.',
    'Fuentes citadas:',
    'https://www.youtube.com/watch?v=8gIKAIxu_ac'
  ],
  etiquetas: ['tecnología', 'emprendimiento', 'educación','entrevistas','leonardo de la hoz borrego','thaly gutiérrez','estonia'],
  fuente: 'LedeLab',
  url_fuente: 'https://www.youtube.com/watch?v=8gIKAIxu_ac',
  consecutivo_unico: '20231222-01'
},
{
  id: 'importaciones-colombia-julio-2025-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Importaciones de Colombia crecieron 16,2 % en julio, impulsadas por las manufacturas',
  pais: 'colombia',
  resumen: 'El DANE reportó que las importaciones del país ascendieron a US$6.484 millones en julio de 2025, con un aumento de 16,2 % frente al mismo mes de 2024, explicado principalmente por el crecimiento del 12,9 % en el grupo de manufacturas.',
  contenido: [
    'El Departamento Administrativo Nacional de Estadística (DANE) informó que en julio de 2025 las importaciones de Colombia alcanzaron los US$6.484 millones CIF. Esta cifra representó un incremento de 16,2 % en comparación con el mismo mes del año anterior.',
    'El comportamiento obedeció principalmente al grupo de manufacturas, que registró un crecimiento anual de 12,9 % y concentró el 76,7 % del valor total importado en el mes analizado.',
    'Dentro de las manufacturas, se destacaron las mayores compras de productos químicos y conexos, así como de artículos manufacturados clasificados principalmente según el material. Estos subgrupos explicaron gran parte del dinamismo reportado.',
    'Según el DANE, las demás categorías de importación (agropecuarios, combustibles y productos diversos) mantuvieron participaciones menores frente al peso de las manufacturas en la estructura total de importaciones.'
  ],
  etiquetas: ['economía', 'colombia','DANE'],
  fuente: { nombre: 'DANE', url: 'https://www.dane.gov.co/index.php/estadisticas-por-tema/comercio-internacional/importaciones' },
  url_fuente: 'https://x.com/UltimaHoraCR/status/1970144920469209248?t=9BSoLXzgNQOriKHz2DJT9w&s=09',
  consecutivo_unico: '20250922-01'
},
{
  id: 'salud-y-sostenibilidad-conversacion-peter-alvarez-leonardo-de-la-hoz-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Salud y sostenibilidad: conversación de Peter Álvarez y Leonardo De la Hoz sobre hábitos, alimentación y huella ambiental',
  pais: 'Colombia',
  resumen: 'Diálogo sobre mitos de la alimentación, personalización de la dieta, ayuno, sueño y la relación directa entre estilo de vida saludable y reducción del impacto ambiental.',
  video: 'https://www.youtube.com/embed/VFpIUd5gUnA',
  credito_video: 'Canal de YouTube Leonardo De la Hoz Borrego',
  contenido: [
    'En esta conversación de diciembre de 2023, Peter Álvarez Mora y Leonardo De la Hoz abordan la conexión entre salud personal y sostenibilidad ambiental. El punto de partida es desmontar mitos habituales —como eliminar por completo un macronutriente o basar la dieta en el conteo de calorías— y proponer un enfoque centrado en la calidad del alimento y en cómo “la comida es información” para el organismo.',
    'Se explica de forma sencilla el concepto de metabolismo basal como la energía que el cuerpo necesita para existir de manera continua. A partir de allí, se recomienda priorizar un plato balanceado en macro y micronutrientes frente a estrategias restrictivas de corto plazo. También se advierte sobre la baja densidad nutricional de muchos ultraprocesados y su potencial efecto adictivo.',
    'Los autores defienden la personalización: la frecuencia y el horario de las comidas deben adaptarse al contexto y a los ciclos circadianos. Plantean que, para muchas personas, dos comidas completas dentro de una ventana de alimentación razonable resultan suficientes, y recuerdan que el ayuno intermitente —mínimo 14 horas— es una práctica histórica que puede favorecer la salud cuando se aplica con criterio.',
    'El diálogo vincula estos hábitos con la sostenibilidad: cocinar más en casa con alimentos frescos y locales, reducir el número de comidas y evitar procesados disminuye consumo energético, empaques y desperdicios. Además, organizar la jornada para dormir mejor y moverse más a pie o en bicicleta contribuye tanto al bienestar individual como a una menor huella de carbono.',
    'Por último, se subraya que los cambios pueden percibirse en pocas semanas si se es constante, en especial por la rápida renovación celular del intestino. La invitación es a adoptar un estilo de vida equilibrado —alimentación, descanso y movimiento— que sea sostenible en el tiempo y compatible con las responsabilidades personales y laborales.',
    'Durante la charla, Peter Álvarez enfatizó que “no tiene sentido que cuando vaya a comer consuma solo un nutriente, siempre hay que darle al cuerpo carbohidratos, proteínas, grasas y micronutrientes”. También advirtió que “el gran problema es que la gente come mucha comida de baja densidad nutricional y el cuerpo sigue pidiendo más porque no recibe lo que necesita”.',
    'Por su parte, Leonardo De la Hoz compartió ejemplos personales: “En la costa atlántica comemos muy mal en general, con demasiado consumo de arroz y poca proporción de otros alimentos”. Recordó además que “cuando dejé el deporte en la universidad y cambié el ejercicio por trasnochos y comida rápida, apareció mi psoriasis, lo que me mostró cómo los hábitos alteran la salud a largo plazo”.',
    'Álvarez insistió también en que el conteo de calorías no es un método fiable: “La alimentación y el estilo de vida son tan personalizados que decir que alguien debe consumir cierta cantidad matemática de calorías es irresponsable. No es lo mismo comerse una papa cocida que unas papas fritas procesadas, aunque numéricamente den lo mismo”.',
    'En la misma línea, De la Hoz resaltó la relación entre salud y medio ambiente: “Si yo procuro comer la comida recién hecha y evito recalentarla, no solo cuido mi cuerpo sino que ahorro tiempo y energía. La sostenibilidad no es solo ambiental, también es aprovechar mejor los recursos personales”.'
  ],
  etiquetas: ['salud', 'alimentación', 'seguridad alimentaria', 'colombia','sostenibilidad','leonardo de la hoz borrego','peter álvarez'],
  fuente: 'Leonardo De la Hoz Borrego'
},
{
  id: 'emprendimiento-bienestar-peter-alvarez-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Emprendimiento y bienestar: Leonardo De la Hoz Borrego entrevista con Péter Álvarez sobre prevención en salud y cambio de hábitos',
  pais: 'Colombia',
  resumen: 'El ingeniero y asesor en nutrición Péter Álvarez relata su transición profesional, su enfoque de medicina del estilo de vida y su plan para llevar bienestar 360 a empleados mediante soluciones digitales.',
  video: 'https://www.youtube.com/embed/ijhCR_bAX4k',
  credito_video: 'Canal de YouTube del proyecto (entrevista con Péter Álvarez)',
  contenido: [
    'En esta conversación, Péter Álvarez —ingeniero de profesión y asesor en nutrición por vocación— explica cómo pasó de una carrera tradicional a emprender en el ámbito del bienestar. Su propósito, afirma, es ayudar a las personas a estar más saludables desde la prevención, al margen de un modelo que describe como centrado en la gestión de enfermedades. La entrevista aborda la construcción de su propuesta y la manera en que convirtió esa motivación en un proyecto de vida con alcance personal y empresarial.',
    'Álvarez cuenta que el primer punto de inflexión fue comprender los efectos del estrés en su propio cuerpo, experiencia que lo llevó a retomar la actividad física y a estudiar sobre descanso, alimentación y salud mental. Tras certificarse en nutrición en España y publicar un libro, en 2017 tomó la decisión de dedicarse de lleno al bienestar, atendiendo a personas de forma personalizada y acumulando experiencia clínica en problemas frecuentemente asociados al sobrepeso, así como en síntomas digestivos, migraña e insomnio, entre otros.',
    'El enfoque que propone es integral: alimentación adecuada, sueño reparador, ejercicio y manejo del estrés como pilares para equilibrar hormonas, microbiota y ritmos circadianos. Subraya que prácticas como la meditación o el entrenamiento de alta intensidad a intervalos cortos pueden ayudar a «acallar» la mente y vivir el presente, reduciendo la carga de estrés que impacta negativamente en la salud. Su trabajo busca, además, generar conciencia: muchas decisiones cotidianas, especialmente en la alimentación, se toman por desconocimiento.',
    'A nivel de modelo de negocio, distingue dos nichos. Por un lado, la asesoría uno a uno, que suele atraer a directivos o cargos medios-altos con posibilidad de pagar un proceso personalizado. Por otro, un proyecto empresarial orientado a compañías interesadas en mejorar el bienestar de toda su plantilla a un costo accesible, apalancado en tecnología (aplicaciones y mensajería), con contenidos educativos y seguimiento remoto. El objetivo es aumentar el alcance y el impacto preventivo en salud dentro de los entornos laborales.',
    'Respecto al papel del sistema sanitario, sostiene que su propuesta se enfoca en prevenir y revertir condiciones desde el estilo de vida, mientras que la práctica clínica suele concentrarse en el manejo farmacológico de síntomas. Sin embargo, enfatiza que no se trata de culpar a los profesionales, sino de construir rutas complementarias de educación y hábitos sostenibles. Para él, la clave está en que cada persona asuma el control de su salud cotidiana con información clara y herramientas prácticas.',
    'La entrevista cierra con una invitación a iniciar procesos guiados que fortalezcan el conocimiento y la conciencia sobre alimentación, descanso y movimiento. Álvarez insiste en que nadie busca dañarse a sí mismo ni a su familia: cuando hay información útil y comprensible, las personas encuentran tiempo y motivación para priorizar su bienestar y sostener cambios que, con el acompañamiento adecuado, se traducen en mejoras palpables en su vida diaria.'
  ],
  etiquetas: ['salud', 'alimentación', 'nutrición', 'colombia','peter álvarez','leonardo de la hoz borrego','entrevistas','saludarte'],
  fuente: 'LedeLab'
},
{
  id: 'jason-fung-dietdoctor-ayuno-desintoxicacion-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Dr. Jason Fung y Diet Doctor: el ayuno como estrategia para la desintoxicación y regeneración',
  pais: 'Internacional',
  resumen: 'El Dr. Jason Fung, nefrólogo canadiense y pionero en el uso terapéutico del ayuno, es uno de los principales referentes en el portal Diet Doctor. Su enfoque destaca el ayuno como herramienta clave para la regeneración celular y la desintoxicación, especialmente relevante en tiempos de déficit de sueño y hábitos modernos.',
  contenido: [
    'El portal Diet Doctor se ha convertido en una de las plataformas más reconocidas para la educación nutricional, con énfasis en dietas bajas en carbohidratos, cetogénicas y estrategias de ayuno. Entre sus principales autores se encuentra el Dr. Jason Fung, nefrólogo canadiense, cuya investigación y práctica clínica han ayudado a popularizar el ayuno intermitente como herramienta terapéutica.',
    'El Dr. Fung sostiene que el ayuno activa procesos de regeneración celular como la autofagia, un mecanismo natural mediante el cual el cuerpo elimina componentes dañados o envejecidos. Este proceso no solo favorece la desintoxicación interna, sino que también contribuye a la prevención de enfermedades metabólicas relacionadas con la obesidad y la resistencia a la insulina.',
    'En la actualidad, la falta de sueño y la reducción en la calidad del descanso han generado un escenario en el que los mecanismos naturales de reparación del organismo se ven comprometidos. El ayuno, al dar un respiro al metabolismo digestivo, permite al cuerpo redirigir energía hacia procesos de reparación y limpieza celular, funcionando como un complemento al sueño en la restauración fisiológica.',
    'La propuesta del Dr. Fung en Diet Doctor busca ofrecer un marco basado en evidencia científica y en la experiencia clínica con miles de pacientes. Su mensaje central es que el ayuno no debe entenderse como una privación extrema, sino como una práctica natural que puede adaptarse de forma segura bajo supervisión, y que resulta especialmente valiosa en el contexto actual de estilos de vida acelerados.',
    'Fuentes citadas:',
    '1) Diet Doctor. Perfil del Dr. Jason Fung. https://www.dietdoctor.com/es/authors/dr-jason-fung'
  ],
  etiquetas: ['salud', 'alimentación', 'nutrición', 'dieta', 'jason fung', 'diet doctor', 'ayuno'],
  fuente: { nombre: 'Diet Doctor', url: 'https://www.dietdoctor.com/es/authors/dr-jason-fung' },
  url_fuente: 'https://www.dietdoctor.com/es/authors/dr-jason-fung',
  consecutivo_unico: '20250922-01'
},
{
  id: 'calorie-deficit-mito-insulina-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'El mito del déficit calórico: por qué la insulina es clave en la pérdida de peso',
  pais: 'Internacional',
  resumen: 'Un análisis en YouTube explica, mediante ejemplos matemáticos y metabólicos, por qué el llamado déficit calórico no puede existir sin la liberación de energía almacenada y cómo la insulina determina el éxito en la pérdida de grasa.',
  video: 'https://www.youtube.com/embed/6rqIG5cDCXw',
  credito_video: 'Canal de YouTube Dr. Jason Fung',
  contenido: [
    'En una exposición titulada “A Calorie Deficit cannot EVER exist – here’s why!”, se argumenta que la ecuación de balance energético —calorías consumidas menos calorías gastadas— no refleja la complejidad del metabolismo humano. El video subraya que no se puede hablar de déficit calórico si el organismo no logra acceder a las reservas de grasa corporal.',
    'Mediante analogías con el manejo del dinero, se explica que así como no se puede gastar lo que no se puede retirar de un lugar de almacenamiento, el cuerpo tampoco puede recurrir a la grasa acumulada si las señales hormonales no lo permiten. En este proceso, la hormona insulina cumple un papel central.',
    'Cuando los niveles de insulina son altos, el organismo recibe la señal de almacenar energía y bloquea la liberación de grasa. En cambio, si la insulina se mantiene baja —por medio de dietas bajas en carbohidratos o ayuno intermitente—, el cuerpo accede a la grasa almacenada y la utiliza como fuente de energía, equilibrando la ecuación energética.',
    'El video enfatiza que dos personas pueden consumir la misma cantidad de calorías, pero obtener resultados radicalmente distintos según la calidad de los alimentos y su impacto en la insulina. Así, alimentos como galletas y dulces elevan rápidamente la insulina y favorecen la acumulación de grasa, mientras que proteínas magras y vegetales permiten su quema eficiente.',
    'La conclusión es que la pérdida de peso sostenible no depende únicamente del conteo de calorías, sino del control hormonal. Comprender cómo la insulina regula el acceso a la grasa corporal resulta esencial para estrategias efectivas de reducción de peso.',
    'Fuentes citadas:',
    '1) Video en YouTube: “A Calorie Deficit cannot EVER exist – here’s why!” https://www.youtube.com/watch?v=6rqIG5cDCXw'
  ],
  etiquetas: ['salud', 'alimentación', 'nutrición', 'dieta', 'ayuno', 'jason fung', 'insulina'],
  fuente: { nombre: 'YouTube', url: 'https://www.youtube.com/watch?v=6rqIG5cDCXw' },
  url_fuente: 'https://www.youtube.com/watch?v=6rqIG5cDCXw',
  consecutivo_unico: '20250922-02'
},
{
  id: 'colon-irritable-testimonio-transformacion-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Testimonio: cómo una mujer superó el colon irritable y las migrañas a través de cambios en hábitos de vida',
  pais: 'Internacional',
  resumen: 'Daniela Anillo relató en el programa “Transformando Divas” cómo logró dejar de depender de medicamentos para migrañas, colon irritable y acidez, tras adoptar nuevos hábitos de alimentación y cuidado integral.',
  video: 'https://www.youtube.com/embed/GcRU0teAa9I',
  credito_video: 'Canal de YouTube Peter Álvarez | Reversión Biológica',
  contenido: [
    'En un testimonio compartido en el canal de YouTube Peter Álvarez | Reversión Biológica, una mujer explicó cómo logró superar años de molestias relacionadas con colon irritable, migrañas recurrentes y acidez. Antes de iniciar el programa, debía tomar diariamente hasta cinco medicamentos para controlar el dolor y las molestias digestivas.',
    'Durante su proceso relató que, al cambiar sus hábitos de alimentación y estilo de vida, las migrañas desaparecieron progresivamente y pudo suspender los medicamentos para el colon, la acidez y el estreñimiento. Según su testimonio, estos cambios permitieron que su organismo recuperara un funcionamiento regular.',
    'La participante destacó que uno de los aprendizajes más importantes fue conocer mejor su cuerpo y reconocer qué alimentos y rutinas le resultaban beneficiosas. Señaló que ahora puede comer una mayor variedad de alimentos sin molestias, lo cual le permitió recuperar confianza y bienestar en su vida cotidiana.',
    'Además de los beneficios digestivos y neurológicos, observó mejoras visibles en su piel y en la caída del cabello. También relató la desaparición de la celulitis sin necesidad de rutinas intensivas de ejercicio, lo que atribuyó a una alimentación más balanceada e hidratación constante.',
    'Finalmente, recomendó el programa por su enfoque integral, que combina acompañamiento en salud física, emocional y de autocuidado. Afirmó que el proceso no solo alivió sus dolencias sino que también transformó su estado de ánimo, haciéndola sentir más plena y satisfecha con su calidad de vida.',
    '<b>Sobre el creador del programa:<b>', 
    'Peter Álvarez es nutricionista y experto en rejuvenecimiento, con más de 20 años de experiencia en el campo de la salud y el bienestar. Con su método de los tres pilares “Equilibrio Cuerpo, Mente y Emociones”, ha acompañado a numerosas personas en procesos de adelgazamiento y bienestar integral. Es autor de “El Poder del Ayuno Intermitente” y del libro *Cuerpo Detox*, así como creador del concepto “Plato Saludable Balanceado por Nutrientes”, una guía práctica para lograr una alimentación equilibrada y sostenible.'
  ],
  etiquetas: ['salud', 'alimentación', 'colon irritable','estilo de vida','peter álvarez'],
  fuente: { nombre: 'Peter Álvarez | Reversión Biológica', url: 'https://peter-alvarez-mora.hotmart.host/pagina-de-ventas-155b3923-313f-4837-8bbd-95bd202c6504' },
  url_fuente: 'https://peter-alvarez-mora.hotmart.host/pagina-de-ventas-155b3923-313f-4837-8bbd-95bd202c6504',
  consecutivo_unico: '20250922-01'
},
{
  id: 'resistencia-insulina-factores-prevencion-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'The Diary of a CEO: Dr. Pradip Jamnadas explica factores que llevan a la resistencia a la insulina y cómo prevenirla',
  pais: 'Internacional',
  resumen: 'El cardiólogo Pradip Jamnadas, con más de 35 años de experiencia, advierte sobre la epidemia de grasa visceral y resistencia a la insulina, y recomienda el ayuno como estrategia clave de prevención.',
  video: 'https://www.youtube.com/embed/gryta3KZKU4',
  credito_video: 'Canal de YouTube The Diary of a CEO',
  contenido: [
    'El doctor Pradip Jamnadas, cardiólogo con más de tres décadas de experiencia clínica, alertó sobre el impacto del exceso de grasa visceral en la salud metabólica y cardiovascular. Según explicó, la acumulación de grasa en el abdomen es un signo temprano de resistencia a la insulina, condición que precede a la diabetes y aumenta el riesgo de enfermedad coronaria.',
    'Durante su exposición, señaló que el consumo frecuente de carbohidratos refinados, azúcares y alimentos procesados mantiene elevados los niveles de insulina en la sangre. Este fenómeno, conocido como hiperinsulinemia, puede prolongarse durante años antes de que aparezca un diagnóstico formal de diabetes, momento en el cual muchas personas ya presentan daño arterial.',
    'El especialista resaltó la importancia del ayuno como herramienta terapéutica. Explicó que después de 12 horas sin ingerir alimentos el organismo comienza a movilizar la grasa acumulada, y la primera en reducirse es la visceral, considerada la más dañina por su relación con procesos inflamatorios crónicos.',
    'Jamnadas también advirtió sobre otros factores que favorecen la resistencia a la insulina, como la falta de sueño, el exceso de ejercicio aeróbico prolongado, la presencia de moho en el hogar y el consumo excesivo de suplementos de calcio o arroz blanco con altos niveles de arsénico. En contraste, recomendó prácticas como el ayuno intermitente (protocolos 12:12 o 18:6), el entrenamiento de resistencia y la diversificación de la dieta con fibra y alimentos reales.',
    'Finalmente, subrayó la necesidad de evaluar tempranamente los niveles de insulina, además de la glucosa en sangre, para identificar a las personas en riesgo. También recomendó pruebas como el puntaje de calcio coronario y paneles inflamatorios avanzados para detectar a tiempo la progresión de la enfermedad cardiovascular.',
    '<b>Top de hábitos y alimentos a dejar o reducir:</b>',
    '1) Azúcares añadidos y bebidas azucaradas, incluidos jugos envasados y gaseosas.',
    '2) Exceso de pan blanco, galletas y productos de harina refinada.',
    '3) Consumo regular de alcohol, que altera la función hepática y eleva la inflamación.',
    '4) Ingesta elevada de arroz blanco sin preparación previa para reducir arsénico.',
    '5) Rutinas de ejercicio aeróbico excesivo y prolongado sin descanso adecuado.',
    '6) Cenas muy tardías que interrumpen la ventana de descanso metabólico.',
    '<b>Recomendaciones para incorporar y fortalecer la salud metabólica:</b>',
    '1) Practicar ayuno intermitente adaptado (12:12 o 18:6), supervisado según la condición de cada persona.',
    '2) Incluir alimentos ricos en fibra soluble como vegetales variados, semillas y legumbres.',
    '3) Mantener una hidratación adecuada, priorizando agua y evitando bebidas con endulzantes artificiales.',
    '4) Integrar entrenamientos de fuerza y sesiones cortas de alta intensidad en la semana.',
    '5) Priorizar alimentos fermentados como kéfir o yogur natural para cuidar el microbioma intestinal.',
    '6) Crear rutinas de sueño estables que permitan entre 7 y 8 horas de descanso continuo.',
    'El Dr. Pradip Jamnadas comparte más información y recursos de contacto en su página oficial: https://linktr.ee/pradipjamnadasmd',
    '<b>Fuentes citadas:</b>',
    '1) American Heart Association. Understanding Insulin Resistance. https://www.heart.org/en/health-topics/diabetes/understanding-insulin-resistance',
    '2) National Institutes of Health. Visceral Fat and Metabolic Risk. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6019055/'
  ],
  etiquetas: ['salud', 'alimentación', 'dieta', 'nutrición','ayuno'],
  fuente: { nombre: 'The Diary of a CEO', url: 'https://www.youtube.com/watch?v=gryta3KZKU4' },
  url_fuente: 'https://www.youtube.com/watch?v=gryta3KZKU4',
  consecutivo_unico: '20250922-01'
},
{
  id: 'alimentos-ricos-en-magnesio-consejos-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Cómo obtener magnesio de forma natural en la alimentación diaria',
  pais: 'Internacional',
  resumen: 'Más allá de los suplementos, existen múltiples fuentes naturales de magnesio que ayudan a cubrir los requerimientos diarios. Frutos secos, verduras de hoja verde y legumbres están entre los alimentos más recomendados.',
  contenido: [
    'El magnesio es un mineral esencial para el funcionamiento del cuerpo humano. Aunque los suplementos como el bisglicinato han ganado popularidad, la alimentación sigue siendo la vía más segura y sostenible para cubrir las necesidades diarias.',
    'Entre los alimentos más ricos en magnesio se destacan las semillas de calabaza, almendras, anacardos, nueces y el cacao puro. Estos productos pueden incorporarse fácilmente en meriendas o como complemento de ensaladas y yogures.',
    'Las verduras de hoja verde como la espinaca, la acelga y la kale también aportan cantidades significativas de magnesio, al igual que las legumbres (lentejas, garbanzos y fríjoles). El consumo regular de cereales integrales, como la avena y el arroz integral, también contribuye al aporte diario.',
    'Según la Organización Mundial de la Salud, los adultos requieren entre 300 y 400 mg de magnesio al día. Una dieta equilibrada puede cubrir esta necesidad sin necesidad de recurrir a suplementos, salvo en casos de deficiencia diagnosticada o situaciones especiales.',
    'En resumen, combinar una alimentación rica en semillas, frutos secos, verduras verdes y legumbres es una manera práctica de mantener un nivel adecuado de magnesio. Esta estrategia, junto con hábitos saludables, favorece la energía, el descanso y la salud cardiovascular.',
    'En cuanto a la comparación con suplementos, un puñado de almendras (30 g) aporta unos 80 mg de magnesio, de los cuales el cuerpo absorbe entre 24 y 40 mg debido a la biodisponibilidad del 30–50%. En contraste, una cápsula de magnesio bisglicinato de 200 mg puede aportar entre 140 y 180 mg realmente absorbidos, gracias a su biodisponibilidad más alta (70–90%). Esto muestra que el suplemento es más eficiente en cantidad absorbida, aunque los alimentos ofrecen beneficios adicionales que ningún suplemento reemplaza.'
  ],
  etiquetas: ['salud', 'nutrición', 'alimentación', 'magnesio', 'estilo de vida'],
  fuente: 'OMS',
  url_fuente: 'https://www.who.int/news-room/fact-sheets/detail/micronutrient-deficiencies',
  consecutivo_unico: '20250922-02'
},
{
  id: 'ejercicio-excesivo-y-longevidad-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Ejercicio excesivo y longevidad: recomendaciones sobre la vía mTOR',
  pais: 'Internacional',
  resumen: 'El Dr. Bayter explicó en su canal de YouTube cómo la activación de la vía mTOR favorece el crecimiento muscular, pero su exceso puede reducir la longevidad. Presentó recomendaciones sobre frecuencia, duración y forma de entrenar para mantener un equilibrio saludable.',
  video: 'https://www.youtube.com/embed/2pOrOfBdhNw',
  credito_video: 'Canal de YouTube Dr. Bayter',
  contenido: [
    'El especialista señaló que el músculo cumple funciones esenciales no solo de fuerza y movilidad, sino también en la generación de mitocondrias. Estas estructuras producen tanto radicales libres como antioxidantes, lo que hace del tejido muscular un regulador clave del metabolismo y la salud.',
    'Explicó que la síntesis de nuevo músculo se activa a través de la vía mTOR, especialmente estimulada por la leucina presente en las proteínas animales y por hormonas como la hormona del crecimiento y el IGF1. Sin embargo, advirtió que la activación excesiva de esta vía está asociada con un mayor riesgo de cáncer y con menor esperanza de vida.',
    'Según el Dr. Bayter, el problema no radica en la vía mTOR en sí, sino en los métodos utilizados para estimularla. El consumo elevado de carbohidratos y el uso de hormonas externas, como en el caso de los fisicoculturistas, son factores que reducen la longevidad y pueden aumentar riesgos de salud.',
    'Recomendó un entrenamiento de fuerza moderado, de una hora a hora y media, entre tres y cuatro veces por semana, preferiblemente en ayunas y acompañado de una dieta basada en proteínas de calidad, buen descanso y exposición al sol. Estas prácticas permiten aprovechar los beneficios de la vía mTOR sin comprometer la longevidad.',
    'El especialista concluyó que la clave para una vida larga y saludable está en mantener músculo en niveles óptimos, evitando tanto el sedentarismo como el exceso de ejercicio, y regulando los ritmos circadianos con sueño adecuado y manejo del estrés.'
  ],
  etiquetas: ['salud', 'ejercicio', 'longevidad', 'nutrición'],
  fuente: 'LedeLab',
  url_fuente: 'https://www.youtube.com/watch?v=2pOrOfBdhNw',
  consecutivo_unico: '20250922-01'
},
{
  id: 'azucar-en-naranjas-y-jugo-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Azúcar en tres naranjas frente a un vaso de jugo: diferencias clave para la salud',
  pais: 'Internacional',
  resumen: 'Unas tres naranjas medianas contienen alrededor de 36 gramos de azúcar natural. La diferencia está en que al consumirlas enteras se incorpora fibra, mientras que en el jugo se concentra el azúcar y se elimina casi toda la fibra, lo cual tiene implicaciones metabólicas importantes.',
  contenido: [
    'Cada naranja mediana de unos 130 gramos aporta en promedio 12 gramos de azúcar natural, lo que significa que tres naranjas contienen cerca de 36 gramos de azúcar, equivalentes a unas nueve cucharaditas.',
    'Cuando la fruta se consume entera, el azúcar se acompaña de fibra y agua, lo que ralentiza la absorción y genera mayor saciedad. En cambio, al preparar jugo de naranja se concentra el azúcar y se elimina gran parte de la fibra, lo que eleva más rápido la glucosa en sangre.',
    'Un vaso de jugo de naranja de 250 ml puede requerir entre tres y cuatro naranjas para su preparación, por lo que en una sola porción líquida se ingieren 36 a 48 gramos de azúcar, prácticamente el consumo máximo recomendado por la Organización Mundial de la Salud para todo un día.',
    'El aspecto relevante es que quienes acostumbran beber jugo de naranja suelen hacerlo a diario, lo que implica una ingesta frecuente y elevada de azúcar libre. Esta práctica puede aumentar el riesgo de sobrepeso, resistencia a la insulina y acumulación de grasa en el hígado.',
    'Como recomendación práctica, se sugiere preferir la fruta entera y reservar el jugo de naranja para ocasiones esporádicas, ya que el consumo diario puede contribuir a niveles elevados de glucosa y ácido úrico en la sangre.'
  ],
  etiquetas: ['salud', 'alimentación', 'consumo'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250922-04'
},
{
  id: 'acido-urico-causas-frank-suarez-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Frank Suárez explicó las causas del ácido úrico y su relación con el hígado',
  pais: 'Internacional',
  resumen: 'En un episodio de MetabolismoTV, Frank Suárez, fallecido en 2021, explicó que el verdadero problema del ácido úrico no está en la carne sino en la capacidad del hígado de desintoxicar y eliminarlo.',
  contenido: [
    'Frank Suárez señalaba que la gota, caracterizada por acumulación de cristales de ácido úrico en articulaciones como el dedo gordo del pie o los codos, era un problema muy doloroso y frecuente. Aunque se suele culpar a la carne como principal causa, él consideraba que no era el factor determinante.',
    'En su explicación, afirmaba que el ácido úrico proviene del DNA celular, pero que la diferencia entre quienes desarrollan gota y quienes no, aun consumiendo carne, está en la función hepática. Un hígado sano puede procesar y eliminarlo, mientras que un hígado sobrecargado o con hígado graso pierde esta capacidad.',
    'Suárez destacaba el papel del sistema nervioso excitado, que afecta la desintoxicación. Personas con este perfil presentaban además problemas de sueño, digestión y eliminación, lo que agrava la acumulación de ácido úrico.',
    'Entre los factores que sobrecargaban el hígado mencionaba el alcohol (acetato), las grasas en exceso y los azúcares, en especial la fructosa, que inducen hígado graso. Como medidas prácticas proponía reducir azúcar, alcohol y grasas para dar descanso al hígado y permitir que el cuerpo elimine el ácido úrico.',
    'Finalmente, resaltaba la relación entre infecciones por hongo cándida y la gota: la fermentación interna de glucosa producía alcohol, que a su vez generaba acetato y sobrecargaba el hígado, aumentando así el riesgo de ácido úrico elevado.'
  ],
  etiquetas: ['salud', 'alimentación', 'dieta'],
  video: 'https://www.youtube.com/embed/DgqxJc1bikk',
  credito_video: 'MetabolismoTV – Frank Suárez (YouTube)',
  fuente: 'LedeLab',
  url_fuente: 'https://www.youtube.com/watch?v=DgqxJc1bikk',
  consecutivo_unico: '20250922-03'
},
{
  id: 'acido-urico-causas-rango-estrategias-2025-09-22',
  fecha: '2025-09-22',
  titulo: 'Ácido úrico: causas reales, rango ideal y estrategias radicales y moderadas para controlarlo',
  pais: 'Internacional',
  resumen: 'Explicación sobre qué eleva realmente el ácido úrico, cuál es el rango recomendado y cómo bajarlo con dos enfoques prácticos: uno radical y otro moderado. Incluye las estrategias presentadas por el Dr. Carlos Jaramillo y Frank Suárez.',
  contenido: [
    'El ácido úrico es un subproducto del metabolismo de las purinas, provenientes del recambio celular y de ciertos alimentos. En exceso puede generar gota y está asociado con mayor riesgo cardiometabólico y renal. El hígado produce ácido úrico y los riñones lo eliminan; cuando se acumula, aumenta en sangre.',
    'El rango de referencia suele estar entre 3,5 y 7,2 mg/dL en adultos. Sin embargo, las guías clínicas recomiendan como meta en personas con gota mantenerlo por debajo de 6 mg/dL, y en casos más graves por debajo de 5 mg/dL.',
    'Las causas principales de elevación sostenida incluyen: consumo excesivo de azúcares, especialmente fructosa (jugos, bebidas azucaradas, jarabes), consumo regular de alcohol (sobre todo cerveza), ingesta elevada de alimentos con purinas como vísceras y mariscos, uso de ciertos medicamentos (diuréticos), enfermedad renal crónica y predisposición genética. La hidratación insuficiente también contribuye.',
    'La estrategia radical consiste en eliminar por completo bebidas azucaradas, jugos de fruta y alcohol, así como vísceras y carnes procesadas. Se recomienda además aumentar la ingesta de agua, favorecer lácteos bajos en grasa, verduras y frutos rojos, y ajustar medicamentos que favorezcan la hiperuricemia con supervisión médica.',
    'La estrategia moderada, en cambio, busca reducir sin eliminar del todo: limitar alcohol y carnes rojas, reemplazar bebidas azucaradas por agua, consumir proteínas magras en porciones moderadas y mantener un patrón tipo mediterráneo o DASH, con énfasis en verduras, legumbres, integrales y lácteos bajos en grasa.',
    'Entre los alimentos protectores destacan los lácteos bajos en grasa y las cerezas, por su efecto antioxidante. La pérdida de peso gradual y la actividad física regular también ayudan a estabilizar los niveles. En todos los casos, se recomienda un seguimiento médico con controles de ácido úrico y marcadores metabólicos.',
    'En el canal de YouTube del Dr. Carlos Jaramillo se expone un enfoque clínico y moderado, enfatizando la relación con la fructosa y el alcohol, y en MetabolismoTV, Frank Suárez explica de manera didáctica la importancia de la hidratación, los jugos de vegetales y la dieta como herramientas prácticas.'
  ],
  etiquetas: ['salud', 'alimentación', 'dieta'],
  video: 'https://www.youtube.com/embed/VksiqJIJfMc',
  credito_video: 'Dr. Carlos Jaramillo (YouTube)',
  fuente: 'LedeLab',
  url_fuente: 'https://www.youtube.com/watch?v=VksiqJIJfMc',
  consecutivo_unico: '20250922-01'
},
{
  id: 'advantage-austria-inversion-y-neutralidad-2025-09-21',
  fecha: '2025-09-21',
  titulo: 'ADVANTAGE AUSTRIA: inversión, migración y el papel de la neutralidad austriaca',
  pais: 'Austria',
  resumen: 'La red internacional ADVANTAGE AUSTRIA apoya la inversión extranjera en más de 70 países. Además de promover negocios, Austria ofrece vías legales de migración para emprendedores y mantiene una posición única de neutralidad internacional junto a pocos países en el mundo.',
  contenido: [
    'ADVANTAGE AUSTRIA es la red internacional de la Cámara Económica Federal de Austria (WKO). Cuenta con cerca de 100 oficinas en más de 70 países y tiene como objetivo conectar a empresas austriacas con socios globales. Su labor incluye acompañar a inversionistas extranjeros en el proceso de establecerse en el país, facilitando información sobre sectores estratégicos, ferias y contactos empresariales.',
    'Austria, a través de la Austrian Business Agency (ABA), complementa este trabajo con asesoría gratuita para inversionistas y profesionales. ABA ofrece información sobre requisitos de residencia, programas de inversión y empleo, y opciones de ubicación para nuevas empresas. Esto convierte al país en una puerta de entrada atractiva para quienes buscan emprender en Europa Central.',
    'En materia migratoria, Austria ofrece la Tarjeta Rojo-Blanco-Rojo (RWR), que permite a empresarios y profesionales de terceros países residir y trabajar en el país. Existen categorías para autónomos clave, donde se requiere demostrar inversión o impacto macroeconómico, y para fundadores de startups, que exigen un plan innovador y un capital mínimo. Tras cinco años de residencia legal, es posible solicitar residencia de larga duración, y la ciudadanía puede obtenerse en diez años o seis en casos de integración especial.',
    'Un aspecto que diferencia a Austria es su condición de país neutral. Junto con Suiza, Irlanda, Suecia y Costa Rica, forma parte de un grupo reducido de Estados que mantienen una política de neutralidad reconocida. En este contexto, ser neutral significa no integrarse a alianzas militares como la OTAN y comprometerse a no participar en conflictos armados, salvo en defensa propia o bajo mandato de Naciones Unidas. Esta política, establecida en 1955, le permite a Austria desempeñar un papel de mediador y mantener relaciones abiertas con distintos bloques internacionales.',
    'La neutralidad, sumada a un sistema social sólido, educación de calidad y estabilidad política, hace de Austria un destino atractivo no solo para los negocios, sino también para quienes buscan establecerse en un país con un perfil equilibrado y con proyección internacional.'
  ],
  etiquetas: ['economía','investigación','austria','migración','neutralidad'],
  fuente: 'LedeLab',
  url_fuente: 'https://www.advantageaustria.org/',
  consecutivo_unico: '20250921-02'
},
{
  id: 'clara-lopez-unitarios-pacto-historico-2025-09-21',
  fecha: '2025-09-21',
  titulo: 'Clara López afirma que el movimiento En Unitarios no busca unirse al Pacto Histórico',
  pais: 'colombia',
  resumen: 'La senadora y precandidata presidencial Clara López aseguró que el movimiento En Unitarios no pretende fusionarse con el Pacto Histórico, aunque reconoce coincidencias programáticas en algunos temas.',
  contenido: [
    'La senadora Clara López, precandidata presidencial por el movimiento En Unitarios, manifestó que su colectividad no busca fundirse con el Pacto Histórico. Las declaraciones fueron recogidas en una entrevista publicada por El Tiempo el 21 de septiembre de 2025.',
    'López explicó que su movimiento comparte con el Pacto Histórico la preocupación por asuntos sociales, pero remarcó que su propuesta busca diferenciarse en la manera de abordar la economía y la institucionalidad democrática.',
    'La dirigente destacó que En Unitarios pretende consolidar una opción política propia de cara a las elecciones de 2026, en la que confluyan diferentes sectores progresistas sin que ello implique diluir su identidad organizativa.',
    'La entrevista se dio en el marco de la etapa previa a la definición de alianzas y consultas interpartidistas para los comicios presidenciales de 2026 en Colombia.'
  ],
  etiquetas: ['politica','colombia','clara lopez','pacto historico','elecciones 2026'],
  fuente: { nombre: 'El Tiempo', url: 'https://www.eltiempo.com/politica/elecciones-colombia-2026/en-unitarios-no-queremos-fundirnos-con-el-pacto-historico-precandidata-y-senadora-clara-lopez-3492557?s=09' },
  url_fuente: 'https://www.eltiempo.com/politica/elecciones-colombia-2026/en-unitarios-no-queremos-fundirnos-con-el-pacto-historico-precandidata-y-senadora-clara-lopez-3492557?s=09'
},
{
  id: 'documental-petro-senal-colombia-2025-09-21',
  fecha: '2025-09-21',
  titulo: 'Señal Colombia transmite hoy el documental "PETRO"',
  pais: 'colombia',
  resumen: 'Este 21 de septiembre a las 9:00 p.m., Señal Colombia emitirá el documental "PETRO", que recorre la vida y trayectoria política del presidente Gustavo Petro, desde su juventud hasta su llegada a la Presidencia.',
  contenido: [
    'Señal Colombia anunció que este domingo 21 de septiembre a las 9:00 p.m. se transmitirá el documental "PETRO". La producción presenta un recorrido histórico por la vida y trayectoria política del actual presidente de Colombia, Gustavo Petro.',
    'El documental abarca desde sus luchas sociales en la juventud, pasando por su actividad política y campañas, hasta el momento en que alcanzó la presidencia del país. La producción busca ofrecer un panorama completo de su recorrido personal y público.',
    'La emisión se realizará a través de la pantalla de Señal Colombia, canal público de televisión nacional, y hace parte de su programación especial con contenidos documentales.',
    'RTVC Noticias informó que la producción resalta momentos clave de la historia política reciente del país y la forma en que Gustavo Petro construyó su camino hasta la presidencia.'
  ],
  video: 'https://www.youtube.com/embed/1Pl5YFrLFu8',
  etiquetas: ['colombia','gustavo petro','documental','medios','politica'],
  fuente: { nombre: 'RTVC Noticias', url: 'https://x.com/RTVCnoticias/status/1837477092591499590' },
  url_fuente: 'https://x.com/RTVCnoticias/status/1837477092591499590',
  credito_video: 'RTVC Noticias',
  consecutivo_unico: '20250921-03'
},
{
  id: 'asi-se-robaron-la-nueva-eps-cambio-2025-09-21',
  fecha: '2025-09-21',
  titulo: 'Revista Cambio revela pruebas de la Fiscalía sobre el desfalco en la Nueva EPS',
  pais: 'Colombia',
  resumen: 'La Revista Cambio publicó un artículo con documentos de la Fiscalía que exponen cómo se habría dado el desfalco en la Nueva EPS, con implicaciones en el sistema de salud colombiano.',
  contenido: [
    'La Revista Cambio reveló un informe detallado en el que se presentan pruebas de la Fiscalía General de la Nación sobre el desfalco ocurrido en la Nueva EPS. Según la publicación, las investigaciones han permitido identificar una red de operaciones irregulares que comprometieron recursos destinados a la atención en salud de millones de afiliados.',
    'El artículo describe cómo se realizaron contratos inflados, pagos por servicios no prestados y movimientos financieros que afectaron de manera directa el patrimonio de la entidad. Estos hallazgos han sido sustentados con documentos oficiales de la Fiscalía, lo que refuerza el alcance judicial de las denuncias.',
    'De acuerdo con la investigación, el desfalco no solo comprometió a exdirectivos de la Nueva EPS, sino también a intermediarios y contratistas que habrían participado en el entramado de corrupción. El caso se encuentra en etapa de judicialización, con procesos en curso para determinar responsabilidades penales y administrativas.',
    'El artículo también identifica a los integrantes de la junta directiva que deberán responder por los hechos revelados: Enrique Vargas Lleras, Néstor Ricardo Rodríguez, Noemí Sanín Posada, Fernando Jiménez Rodríguez y Beatriz Muñoz.',
    'El impacto de estas revelaciones es significativo, ya que la Nueva EPS es una de las entidades más grandes del país en el régimen contributivo y subsidiado, con más de diez millones de usuarios. El manejo irregular de los recursos compromete la sostenibilidad del sistema de salud colombiano y ha encendido el debate público sobre la vigilancia y control de las entidades prestadoras de servicios de salud.',
    'La invitación es a leer el artículo completo en la Revista Cambio, que detalla con mayor amplitud los documentos, testimonios y pruebas que sustentan esta investigación periodística.'
  ],
  etiquetas: ['colombia','salud','corrupcion','nueva eps','fiscalia','revista cambio'],
  fuente: { nombre: 'Revista Cambio', url: 'https://cambiocolombia.com/poder/articulo/2025/9/asi-se-robaron-la-nueva-eps-cambio-revela-las-pruebas-de-la-fiscalia/?s=09' },
  url_fuente: 'https://cambiocolombia.com/poder/articulo/2025/9/asi-se-robaron-la-nueva-eps-cambio-revela-las-pruebas-de-la-fiscalia/?s=09',
  consecutivo_unico: '20250921-01',
  imagen: '/noticias/asi-se-robaron-la-nueva-eps-cambio-2025-09-21.jpg',
  credito_imagen: 'Revista Cambio'
},
{
  id: 'obesidad-y-grasa-en-la-lengua-relacion-con-ronquido-2025-09-21',
  fecha: '2025-09-21',
  titulo: 'Obesidad y grasa en la lengua: estudios confirman su relación con ronquido y apnea del sueño',
  pais: 'Internacional',
  resumen: 'Investigaciones médicas recientes muestran que la obesidad aumenta la acumulación de grasa en la lengua, lo que contribuye al ronquido y a la apnea obstructiva del sueño. Perder peso puede reducir este riesgo.',
  contenido: [
    'El ronquido es un sonido producido por la vibración de las estructuras de la vía aérea superior durante el sueño. Aunque suele considerarse un problema menor, puede ser la señal de condiciones más serias como la apnea obstructiva del sueño (AOS).',
    'Estudios con resonancia magnética han demostrado que las personas con obesidad acumulan grasa en la lengua, especialmente en la base, lo que aumenta su volumen y favorece la obstrucción de la vía aérea. Investigaciones en revistas médicas han confirmado esta asociación.',
    'Una investigación de la Universidad de Pensilvania observó que pacientes obesos con AOS tenían una lengua más grande y con mayor contenido de grasa en comparación con obesos sin apnea. Al perder alrededor de un 10% de su peso corporal, se redujo de manera significativa la grasa lingual y mejoraron los índices de apnea.',
    'Los especialistas recomiendan medidas iniciales como la pérdida de peso, la reducción del consumo de alcohol y tabaco y la higiene del sueño. En casos graves, se utilizan dispositivos como el CPAP, que evita las pausas respiratorias durante la noche.',
    'La conclusión de los expertos es que el ronquido persistente no debe ignorarse. Identificar factores como la obesidad y el aumento de grasa en la lengua permite diseñar tratamientos más efectivos y prevenir complicaciones como hipertensión pulmonar y falla cardíaca.',
    '---',
    'Video recomendado: El ronquido explicado por el Dr. Baiter',
    'El médico colombiano Dr. Baiter publicó un video en el que explica de forma clara qué es el ronquido, cuáles son sus causas más comunes y cuándo puede convertirse en un problema de salud como la apnea del sueño.',
    'En su explicación, detalla que la obstrucción de la vía aérea superior puede deberse a desviación del tabique nasal, amígdalas o lengua aumentada, y que en casos de apnea obstructiva del sueño el uso de CPAP resulta fundamental. También resalta que la pérdida de peso, dejar el alcohol, tabaco y sedantes son medidas básicas para mejorar la calidad del sueño.',
    'Credito video: Canal del Dr. Baiter en YouTube.',
    '---',
    'Fuentes citadas:',
    '1) Penn Medicine. Losing Tongue Fat Improves Sleep Apnea. https://www.pennmedicine.org/news/losing-tongue-fat-improves-sleep-apnea',
    '2) Kim AM et al. Tongue Fat and its Relationship to Obstructive Sleep Apnea. https://pmc.ncbi.nlm.nih.gov/articles/PMC4173920/',
    '3) Meta-análisis 2025 sobre volumen de lengua y apnea. https://pmc.ncbi.nlm.nih.gov/articles/PMC12023004/',
    '4) American Academy of Sleep Medicine. Study shows that tongue size and fat may predict sleep apnea risk. https://aasm.org/study-shows-that-tongue-size-and-fat-may-predict-sleep-apnea-risk-in-obese-adults/',
    '5) Dr. Baiter. Video: Qué es el ronquido y cómo tratarlo. https://www.youtube.com/watch?v=tTivi4Ujsps'
  ],
  video: 'https://www.youtube.com/embed/tTivi4Ujsps',
  etiquetas: ['salud', 'sueño', 'obesidad', 'apnea del sueño', 'ronquido','estilo de vida','internacional'],
  fuente: 'LedeLab',
  url_fuente: 'https://www.youtube.com/watch?v=tTivi4Ujsps',
  consecutivo_unico: '20250921-02'
},
{
  id: 'debate-hijos-colombia-2025-09-21',
  fecha: '2025-09-21',
  titulo: 'El debate sobre tener o no hijos en la actualidad en Colombia',
  pais: 'Colombia',
  resumen: 'En Colombia se mantiene un debate creciente sobre la decisión de tener hijos, en medio de cambios culturales, sociales y económicos que influyen en la planificación familiar y en la percepción de la maternidad y la paternidad.',
  contenido: [
    'En los últimos años, la discusión sobre si tener o no hijos ha tomado fuerza en Colombia. Factores como la situación económica, las oportunidades de educación y empleo, así como los cambios culturales en torno a la familia, han llevado a que más personas cuestionen la decisión de la maternidad y la paternidad tradicionales.',
    
    'De acuerdo con datos del Fondo de Población de las Naciones Unidas (UNFPA), cerca del 50% de los embarazos en el país no son planeados, lo que refleja las dificultades en el acceso a métodos anticonceptivos, así como la falta de información suficiente en torno a la planificación familiar. Estos indicadores han alimentado la discusión sobre la autonomía reproductiva y la importancia de políticas públicas que garanticen derechos en salud sexual y reproductiva.',
    
    'Expertos señalan que las generaciones más jóvenes tienden a retrasar la decisión de tener hijos o incluso a renunciar a ella, priorizando la estabilidad financiera y el desarrollo personal. A esto se suman las preocupaciones ambientales y el impacto que tendría traer hijos en un contexto de cambio climático y crisis de recursos, argumentos que son cada vez más frecuentes en este debate.',
    
    'Frente a estas tendencias, instituciones académicas y organizaciones sociales insisten en la necesidad de ampliar el acceso a educación sexual integral, garantizar la cobertura de anticonceptivos y fomentar un diálogo abierto sobre las diferentes formas de vivir la vida familiar. El debate no se centra únicamente en tener hijos o no, sino en el derecho de cada persona a decidir de manera informada y libre sobre su propio proyecto de vida.'
  ],
  etiquetas: ['colombia','sociedad','salud','demografía','familia'],
  fuente: { nombre: 'UNFPA Colombia', url: 'https://colombia.unfpa.org' },
  consecutivo_unico: '20250920-01'
},
{
  id: 'venezuela-rusia-alianza-estados-unidos-2025-09-20',
  fecha: '2025-09-20',
  titulo: 'Venezuela y Rusia sellan alianza ante tensiones con Estados Unidos',
  pais: 'Internacional',
  resumen: 'Los gobiernos de Venezuela y Rusia anunciaron este 20 de septiembre una nueva alianza estratégica en medio de crecientes tensiones diplomáticas con Estados Unidos.',
  contenido: [
    'El gobierno de Venezuela y la Federación de Rusia firmaron este 20 de septiembre una alianza estratégica que busca fortalecer su cooperación política, militar y económica. El anuncio se produjo en Caracas durante una visita oficial de representantes rusos.',
    'El acuerdo incluye compromisos en materia de defensa, energía e infraestructura, y fue presentado por las autoridades de ambos países como una respuesta a lo que califican como presiones y sanciones impuestas por Estados Unidos.',
    'La cancillería venezolana destacó que esta cooperación bilateral reafirma la soberanía del país y su disposición a mantener relaciones con naciones que respalden un orden multipolar. Por su parte, Rusia subrayó su interés en consolidar su presencia en América Latina a través de proyectos conjuntos con Venezuela.',
    'Estados Unidos no se ha pronunciado oficialmente sobre el anuncio, aunque en el pasado ha manifestado su preocupación por los vínculos entre Caracas y Moscú. La alianza se presenta en un contexto de tensiones geopolíticas globales y de medidas restrictivas impuestas tanto contra Rusia como contra Venezuela.'
  ],
  etiquetas: ['venezuela', 'rusia', 'estados unidos', 'politica', 'diplomacia'],
  fuente: { nombre: 'El Tiempo', url: 'https://www.eltiempo.com/mundo/venezuela/venezuela-y-rusia-sellan-alianza-ante-tension-con-estados-unidos-3492295' },
  url_fuente: 'https://www.eltiempo.com/mundo/venezuela/venezuela-y-rusia-sellan-alianza-ante-tension-con-estados-unidos-3492295',
  consecutivo_unico: '20250920-01'
},
{
  id: 'sardine-fasting-tim-ferriss-2025-09-20',
  fecha: '2025-09-20',
  titulo: 'Experto explica el "sardine fasting" en conversación con Tim Ferriss',
  pais: 'Internacional',
  resumen: 'En una entrevista en el canal de YouTube de Tim Ferriss se explicó el concepto de "sardine fasting" y su aplicación en pacientes, destacando un caso clínico con cáncer de próstata metastásico.',
  contenido: [
    'En el canal de YouTube de Tim Ferriss, un experto relató cómo utiliza el ayuno de forma situacional a través de distintas modalidades, incluyendo restricción calórica, dietas cetogénicas y alimentación con tiempo limitado.',
    'Durante la conversación presentó la práctica que denominó "sardine fasting", basada en el consumo de una o dos latas de sardinas al día durante una semana. Esta estrategia se aplicó inicialmente con un paciente con cáncer de próstata metastásico.',
    'El entrevistado explicó que, según los reportes médicos, este paciente vivió muchos años más de lo pronosticado, alcanzando incluso periodos sin evidencia de enfermedad. Aclaró que además del "sardine fasting" el paciente adoptó dieta baja en carbohidratos y mejoró otros hábitos de vida.',
    'El experto comparó esta práctica con la dieta de ayuno simulado desarrollada por Valter Longo y señaló que, en el caso narrado, se aplicaba de manera mensual o bimensual. Concluyó que estas experiencias lo motivaron a profundizar en la investigación sobre el potencial de las dietas cetogénicas y de restricción energética en distintas enfermedades.'
  ],
  etiquetas: ['salud', 'dieta', 'ayuno', 'cetogénica', 'Tim Ferriss'],
  fuente: { nombre: 'Canal de YouTube Tim Ferriss', url: 'https://www.youtube.com/watch?v=Vhy29BTS25Q' },
  url_fuente: 'https://www.youtube.com/watch?v=Vhy29BTS25Q',
  video: 'https://www.youtube.com/embed/Vhy29BTS25Q',
  credito_video: 'Canal de YouTube Tim Ferriss',
  consecutivo_unico: '20250920-01'
},
{
  id: 'verdad-sobre-tratamientos-de-conducto-2025-09-20',
  fecha: '2025-09-20',
  titulo: 'Tratamientos de conducto: qué son, cuándo se indican y alternativas',
  pais: 'Internacional',
  resumen: 'La odontóloga Dr. Ellie explica qué ocurre cuando muere la pulpa dental, cómo se realiza un tratamiento de conducto, qué riesgos hay al no tratar un diente necrótico y cómo se compara esta opción con la extracción y el implante.',
  contenido: [
    '¿Qué es y por qué? Un tratamiento de conducto (root canal) se indica cuando el tejido vivo del interior del diente —pulpa con vasos y nervios— muere o se infecta. Puede ocurrir por caries profundas o por traumatismos que interrumpen el riego sanguíneo. Sin tratamiento, ese espacio se coloniza con bacterias y puede formarse un absceso doloroso en el ápice radicular.',
    '¿Cómo se hace? Según la explicación del video, el especialista en endodoncia abre el diente, limpia y desinfecta los conductos, y rellena y sella el sistema radicular. La autora señala que, aunque en los años 80 se popularizaron materiales y técnicas que dieron malos resultados en algunos casos, hoy existen avances en instrumentación, magnificación y selladores que mejoran el pronóstico.',
    '¿Qué alternativas hay? La principal alternativa es la extracción con reemplazo mediante implante. La autora sostiene que conservar la pieza con un tratamiento de conducto preserva el ligamento periodontal —fibras que conectan el diente al hueso—, lo que aporta retroalimentación mecano-sensorial ausente en los implantes. También advierte que los implantes pueden desarrollar periimplantitis si no hay higiene rigurosa.',
    '¿Qué recomiendan? El video sugiere valorar conservar el diente tratable mediante endodoncia realizada por un especialista y acompañar con higiene oral metódica. Para quienes opten por implantes, enfatiza el control de placa y el cuidado periodontal para reducir complicaciones. Ante dolor persistente, cambio de coloración dental o indicios de infección, el llamado es a consultar oportunamente.'
  ],
  etiquetas: ['salud','odontología','endodoncia','tratamiento de conducto'],
  fuente: { nombre: 'YouTube - Dr. Ellie' },
  url_fuente: 'https://www.youtube.com/watch?v=7tqpz1mK9MA',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7tqpz1mK9MA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  credito_video: 'Canal: Dr. Ellie (YouTube)',
  consecutivo_unico: '20250920-01'
},
{
  id: 'ivan-cepeda-pedro-viveros-foto-alterada-2025-09-19',
  fecha: '2025-09-19',
  titulo: 'Iván Cepeda denuncia publicación de foto alterada en la que aparece como guerrillero',
  pais: 'Colombia',
  resumen: 'El senador Iván Cepeda anunció acciones legales contra el analista Pedro Viveros por la difusión de una imagen manipulada que lo muestra vestido como miembro de las FARC.',
  contenido: [
    'El senador y precandidato presidencial Iván Cepeda denunció la difusión de una fotografía alterada en la que aparece con uniforme de camuflaje, como si perteneciera a las FARC. La publicación fue atribuida al analista político Pedro Viveros, quien compartió la imagen como parte de una campaña que llama a reflexionar sobre los extremos políticos.',
    'Cepeda calificó la publicación como un atentado contra su honra y advirtió que denunciará penalmente a Viveros por calumnia si no presenta las pruebas que respalden la autenticidad de la imagen. La controversia se amplificó en redes sociales y en una valla publicitaria donde se mostraba la foto junto a la de otro aspirante, Abelardo de la Espriella.',
    'Viveros respondió que no fue autor de la manipulación y que su intención era generar un debate sobre las opciones políticas en Colombia. Señaló que no busca afectar la reputación de Cepeda y que la crítica se centra en evitar lo que considera “la trampa de los extremos”.',
    'El episodio ocurre en plena precampaña electoral y pone de relieve el impacto de las imágenes alteradas en el debate político. Cepeda, reconocido por su defensa de los derechos humanos, insistió en que este tipo de acciones pueden desinformar y afectar de manera grave la discusión democrática.',
    'Fuentes citadas:',
    '1) Infobae. *Iván Cepeda estalló por publicación de foto alterada en la que aparece con traje de guerrillero: “Denunciaré penalmente”*. https://www.infobae.com/colombia/2025/09/20/ivan-cepeda-estallo-por-publicacion-de-foto-alterada-en-la-que-aparece-con-traje-de-guerrillero-denunciare-penalmente/',
    '2) Publimetro. *Iván Cepeda se quejó por foto suya alterada que le publicaron vestido de guerrillero*. https://www.publimetro.co/bogota/2025/09/20/ivan-cepeda-se-quejo-por-foto-suya-alterada-que-le-publicaron-vestido-de-guerrillero/',
    '3) X (antes Twitter). Declaraciones de Iván Cepeda. https://x.com/IvanCepedaCast/status/1969180759190872503'
  ],
  etiquetas: ['colombia', 'politica', 'ivan cepeda', 'pedro viveros'],
  fuente: 'LedeLab',
  url_fuente: 'https://www.infobae.com/colombia/2025/09/20/ivan-cepeda-estallo-por-publicacion-de-foto-alterada-en-la-que-aparece-con-traje-de-guerrillero-denunciare-penalmente/',
  consecutivo_unico: '20250919-02'
},
{
  id: 'limpiar-arterias-dr-jaramillo-2025-09-20',
  fecha: '2025-09-20',
  titulo: 'Dr. Carlos Jaramillo explica cómo reducir el riesgo cardiovascular más allá del colesterol',
  pais: 'Colombia',
  resumen: 'El médico Carlos Jaramillo advierte que el colesterol no es el único marcador de riesgo cardiovascular y resalta la importancia del ApoB, la inflamación, la glucosa y los hábitos de vida. Además, presenta seis factores que deterioran las arterias y una lista de 12 alimentos y prácticas recomendadas.',
  contenido: [
    'En un video publicado en su canal de YouTube, el Dr. Carlos Jaramillo explicó que hablar de “limpiar las arterias” no se refiere a un procedimiento mágico, sino a estabilizar la placa ateromatosa, reducir la inflamación, mejorar la función del endotelio y controlar los niveles de glucosa e insulina.',
    'El especialista recalcó que el colesterol es solo uno de los marcadores de riesgo, y que el ApoB permite identificar cuántas partículas LDL circulan en la sangre. Señaló que cerca del 50% de las personas que sufren un infarto tienen colesterol normal, lo que evidencia la importancia de considerar este marcador adicional.',
    'Jaramillo detalló seis factores principales que afectan las arterias: niveles elevados de ApoB, resistencia a la insulina, inflamación crónica (medida por PCR ultrasensible), hipertensión sostenida, tabaquismo o vapeo con estrés oxidativo y consumo de alimentos ultraprocesados con azúcares, harinas y aceites refinados.',
    'Para contrarrestar estos riesgos, recomendó 12 alimentos que favorecen la salud arterial, entre ellos hojas verdes, remolacha, aceite de oliva extravirgen, pescados azules, nueces, leguminosas, avena, semillas de lino, ajo, cacao puro, granada y té verde. Asimismo, propuso hábitos simples como tres caminatas de 10 minutos al día después de comer, tres colores de vegetales por comida y una adecuada hidratación.',
    'Finalmente, presentó un checklist de exámenes útiles para evaluar la salud cardiovascular: ApoB, perfil lipídico, glucosa e insulina, PCR ultrasensible y presión arterial. Insistió en que el enfoque debe ser integral y no limitarse a un solo indicador como el colesterol total.'
  ],
  etiquetas: ['salud', 'nutrición', 'colesterol', 'inflamación', 'endotelio'],
  fuente: { nombre: 'Canal de YouTube Dr. Carlos Jaramillo', url: 'https://www.youtube.com/watch?v=-u3VVx7RJpU' },
  video: 'https://www.youtube.com/embed/-u3VVx7RJpU',
  credito_video: 'Dr. Carlos Jaramillo',
  consecutivo_unico: '20250920-01'
},
{
  id: 'laver-cup-2025-resultados-parciales-2025-09-20',
  fecha: '2025-09-20',
  titulo: 'Laver Cup 2025: resultados parciales en San Francisco',
  pais: 'Estados Unidos',
  resumen: 'La Laver Cup 2025 se disputa en San Francisco y enfrenta a Team Europe contra Team World. Hasta el cierre parcial del sábado, el marcador favorece a Team World 5-3 tras la remontada en la segunda jornada.',
  contenido: [
    'La Laver Cup 2025 se está llevando a cabo en el Chase Center de San Francisco, Estados Unidos, entre el 19 y el 21 de septiembre. El torneo enfrenta a Team Europe, capitaneado por Yannick Noah, y a Team World, dirigido por Andre Agassi. Cada partido otorga puntos crecientes: uno el viernes, dos el sábado y tres el domingo.',
    'En la primera jornada, Team Europe tomó ventaja 3-1 gracias a las victorias de Casper Ruud, Jakub Mensik y el dobles formado por Carlos Alcaraz y Mensik. El único triunfo de Team World llegó con el brasileño João Fonseca sobre Flavio Cobolli.',
    'La segunda jornada comenzó con la remontada del equipo mundial. El australiano Alex de Minaur venció con autoridad a Alexander Zverev, y luego el argentino Francisco Cerúndolo superó a Holger Rune. Con estos resultados, Team World pasó al frente 5-3.',
    'La definición queda abierta para el domingo 21 de septiembre, cuando los encuentros otorgarán tres puntos cada uno. El primer equipo en alcanzar 13 puntos será el campeón de esta edición de la Laver Cup.',
    'Fuentes citadas:',
    '1) Laver Cup. *Scores & Results 2025*. https://lavercup.com/scores-results-2025',
    '2) ATP Tour. *Fonseca y Alcaraz brillan en el inicio de la Laver Cup 2025*. https://www.atptour.com/en/news/fonseca-cobolli-alcaraz-mensik-laver-cup-2025-friday'
  ],
  etiquetas: ['tenis','laver cup','san francisco','resultados'],
  fuente: { nombre: 'Laver Cup', url: 'https://lavercup.com/schedule' },
  url_fuente: 'https://lavercup.com/scores-results-2025',
  consecutivo_unico: '20250920-03'
},
{
  id: 'juez-bloquea-plan-trump-deportacion-menores-guatemaltecos-2025-09-19',
  fecha: '2025-09-19',
  titulo: 'Juez bloquea plan de Trump para deportar menores guatemaltecos',
  pais: 'Estados Unidos',
  resumen: 'Un juez federal en Washington suspendió las deportaciones de cientos de niños guatemaltecos que habían sido trasladados a Texas para su repatriación, al considerar que muchos de ellos aún tienen solicitudes de asilo pendientes.',
  contenido: [
    'El juez del distrito Timothy Kelly, en Washington, emitió este jueves una orden que mantiene el bloqueo a la deportación de menores guatemaltecos que llegaron acompañados de adultos a Estados Unidos. Algunos habían sido llevados a un aeropuerto de Texas a finales de agosto, pero la repatriación se detuvo antes del despegue.',
    'De acuerdo con la resolución judicial, los casos permanecerán abiertos mientras existan solicitudes de asilo en curso. Desde agosto, iglesias y centros comunitarios en el sur de Texas han recibido a cientos de menores, la mayoría de origen guatemalteco, actualmente bajo custodia de la Oficina de Reasentamiento de Refugiados.',
    'El operativo incluyó traslados nocturnos de niños hacia aeropuertos, con vuelos programados de repatriación. La medida judicial frenó uno de estos vuelos en el último momento. Organizaciones como el Young Center for Immigrant Children’s Rights advirtieron que los menores tienen derecho a debido proceso, representación legal y decisiones individuales sobre sus solicitudes de protección.',
    'Datos de la Oficina de Reasentamiento indican que en octubre de 2024 había 6,212 menores no acompañados bajo custodia federal en Estados Unidos, cifra que para marzo de 2025 se redujo a 2,173. Abogados y defensores de derechos de la niñez señalaron que estos procedimientos recuerdan prácticas registradas en 2018 durante la política de separación familiar.',
    'Sectores conservadores en la frontera han defendido las medidas de la actual administración, criticando a gobiernos anteriores por la falta de soluciones permanentes. Mientras tanto, el futuro de estos menores sigue en incertidumbre entre la posibilidad de permanecer en Estados Unidos o ser devueltos a Guatemala.'
  ],
  etiquetas: ['estados unidos','donald trump','migracion','derechos humanos','guatemala'],
  fuente: { nombre: 'DW en Español', url: 'https://www.youtube.com/watch?v=_H0n3DXGQxc' },
  video: 'https://www.youtube.com/embed/_H0n3DXGQxc',
  credito_video: 'DW en Español',
  consecutivo_unico: '20250919-48'
},
{
  id: 'paolini-italia-final-billie-jean-king-cup-2025-09-19',
  fecha: '2025-09-19',
  titulo: 'Paolini lidera a Italia a la final de la Billie Jean King Cup 2025',
  pais: 'Italia',
  resumen: 'Italia avanzó a la final de la Billie Jean King Cup 2025 tras vencer a Ucrania, con Jasmine Paolini como figura clave tanto en individuales como en dobles.',
  contenido: [
    'Italia logró clasificar a la final de la Billie Jean King Cup 2025 al derrotar a Ucrania por 2-1 en las semifinales disputadas en Shenzhen, China.',
    'Marta Kostyuk había dado ventaja a Ucrania al superar a Elisabetta Cocciaretto por 6-2, 6-3. Sin embargo, Jasmine Paolini remontó frente a Elina Svitolina y ganó 3-6, 6-4, 6-4, igualando la serie.',
    'En el partido de dobles decisivo, Paolini se unió a Sara Errani y juntas superaron a Kostyuk y Lyudmyla Kichenok por 6-2, 6-3, sellando el pase a la final.',
    'Paolini, quien ya conquistó títulos en Grand Slam y una medalla de oro olímpica en 2024, reafirma así su papel central en el tenis femenino italiano. Su liderazgo impulsa un momento histórico para Italia, que también ganó este torneo en 2024.',
    'El tenis italiano atraviesa una etapa dorada: en la rama masculina, Jannik Sinner llevó a Italia a ganar la Copa Davis en 2023 y 2024, mientras que en la rama femenina el equipo nacional busca repetir el título conseguido el año pasado.',
    'Fuentes citadas:',
    'Reuters. *Paolini sparkles as Italy overcome Ukraine to reach Billie Jean King Cup final*. https://www.reuters.com/sports/tennis/italy-overcome-ukraine-reach-billie-jean-king-cup-final-2025-09-19/',
    'X / Jasmine Paolini. https://x.com/JasminePaolini/status/1969114449307894219'
  ],
  etiquetas: ['tenis','billie jean king cup','italia','jasmine paolini'],
  fuente: { nombre: 'Reuters', url: 'https://www.reuters.com/sports/tennis/italy-overcome-ukraine-reach-billie-jean-king-cup-final-2025-09-19/' },
  imagen: '/noticias/paolini-italia-final-billie-jean-king-cup-2025-09-19.jpg',
  credito_imagen: 'X / Jasmine Paolini'
},
{
  id: 'peru-ley-31814-inteligencia-artificial-2025-09-19',
  fecha: '2025-09-19',
  titulo: 'Perú promueve el uso de la inteligencia artificial con la Ley N.° 31814',
  pais: 'Perú',
  resumen: 'El Congreso de la República aprobó la Ley N.° 31814, publicada el 5 de julio de 2023, que impulsa el uso y desarrollo de la inteligencia artificial en el país, estableciendo principios rectores y lineamientos para su implementación.',
  contenido: [
    'El Congreso de la República del Perú promulgó la Ley N.° 31814 el 5 de julio de 2023, con el propósito de fomentar el uso responsable de la inteligencia artificial en diversos sectores del país. La norma busca crear un marco normativo que oriente el desarrollo tecnológico hacia el beneficio social y económico.',
    'Entre sus disposiciones principales, la ley establece principios de ética, transparencia y protección de datos personales como pilares para la adopción de soluciones basadas en inteligencia artificial. También promueve la formación de talento humano especializado y la investigación en este campo.',
    'La norma encarga al Poder Ejecutivo la implementación de una Política Nacional de Inteligencia Artificial, en coordinación con las entidades competentes, para asegurar un despliegue inclusivo y sostenible de esta tecnología en sectores como educación, salud, justicia y seguridad.',
    'Con esta ley, Perú se suma a la tendencia internacional de establecer marcos legales para la inteligencia artificial, con el fin de potenciar la innovación y, al mismo tiempo, prevenir riesgos asociados a su uso.',
    'Fuente citada:',
    'Gobierno Digital Perú. “Ley N.° 31814 que promueve el uso de la inteligencia artificial”. https://gobiernodigital.pe/noticias/peru-ley-n-31814-que-promueve-el-uso-de-la-inteligencia-artificial/'
  ],
  etiquetas: ['tecnología','inteligencia artificial','perú'],
  fuente: { nombre: 'Gobierno Digital Perú', url: 'https://gobiernodigital.pe' },
  url_fuente: 'https://gobiernodigital.pe/noticias/peru-ley-n-31814-que-promueve-el-uso-de-la-inteligencia-artificial/',
  consecutivo_unico: '20250919-03'
},
{
  id: 'referendo-constituyente-ecuador-noboa-2025-09-19',
  fecha: '2025-09-19',
  titulo: 'Noboa convoca referendo para Constituyente en Ecuador',
  pais: 'Ecuador',
  resumen: 'El presidente Daniel Noboa anunció la convocatoria a un referendo para instalar una Asamblea Constituyente, sin contar con el aval de la Asamblea Nacional ni de la Corte Constitucional, lo que ha generado debate sobre la legalidad de la medida.',
  contenido: [
    'El presidente de Ecuador, Daniel Noboa, anunció este 19 de septiembre la convocatoria a un referendo popular para instalar una Asamblea Constituyente. La decisión fue tomada sin que mediara un pronunciamiento previo de la Asamblea Nacional ni de la Corte Constitucional, instancias previstas en la Constitución de 2008.',
    'Noboa justificó la medida afirmando que “es el pueblo quien debe decidir si quiere una nueva Constitución”, argumentando que las instituciones existentes han obstaculizado sus reformas. Según el mandatario, la consulta sería un mecanismo directo de legitimidad para avanzar en cambios políticos y estructurales.',
    'El anuncio ha generado controversia en el ámbito político y jurídico. Diversos actores han señalado que el procedimiento contraviene el orden constitucional vigente, ya que la Carta Magna establece que la convocatoria a una Constituyente requiere aprobación de al menos dos tercios de la Asamblea Nacional o un dictamen favorable de la Corte Constitucional.',
    'La iniciativa ocurre en un contexto de tensiones entre el Ejecutivo y otros poderes del Estado. Mientras el gobierno sostiene que la convocatoria responde a un mandato ciudadano, sectores de la oposición y juristas advierten que el paso podría abrir una crisis institucional en el país.'
  ],
  etiquetas: ['ecuador', 'politica', 'daniel noboa', 'constituyente'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/mundo/america/noboa-se-salta-los-poderes-en-ecuador-y-convoca-referendo-para-una-constituyente/' },
  url_fuente: 'https://www.elespectador.com/mundo/america/noboa-se-salta-los-poderes-en-ecuador-y-convoca-referendo-para-una-constituyente/',
  consecutivo_unico: '20250919-03'
},
{
  id: 'idolatria-judaismo-catolicismo-papa-2025-09-19',
  fecha: '2025-09-19',
  titulo: 'Idolatría en el judaísmo y el catolicismo: un análisis comparativo con el papel del Papa',
  pais: 'Internacional',
  resumen: 'La prohibición de la idolatría está presente tanto en la Torá como en el catecismo católico, aunque difieren en sus consecuencias. El debate se reaviva con la devoción hacia el Papa y las acusaciones de “papolatría”.',
  contenido: [
    'La idolatría, entendida como adorar a otros dioses o imágenes, es un concepto central en el judaísmo y el cristianismo. En la Torá, los mandamientos prohíben expresamente la adoración de ídolos: “No tendrás dioses ajenos delante de mí” (Éxodo 20:3). En la antigüedad bíblica, esta práctica se castigaba incluso con la pena de muerte, según Deuteronomio 17:2–5, dentro del pueblo de Israel.',
    
    'La tradición judía posterior mantuvo la prohibición de la idolatría como uno de los Siete Mandamientos de Noé, aplicables a toda la humanidad. Sin embargo, en la práctica actual, ninguna autoridad judía aplica sanciones civiles por idolatría. Se considera un tema teológico y ético, no legal. Interpretaciones contemporáneas radicales han usado este marco para hacer declaraciones polémicas, pero no representan una política oficial.',
    
    'En el catolicismo, el Catecismo enseña que la idolatría es “divinizar lo que no es Dios” (CIC 2113). Se considera un pecado grave que separa al creyente de Dios, pero no conlleva sanciones civiles ni castigos físicos. El Concilio Vaticano II reafirmó la libertad religiosa y descartó cualquier imposición de la fe por la fuerza.',
    
    'Un tema de debate contemporáneo es el papel del Papa. Oficialmente, la Iglesia enseña que solo a Dios corresponde la adoración (latría). Al Papa se le debe respeto y obediencia como sucesor de Pedro, pero no culto divino. Sin embargo, prácticas populares como besar el anillo o aclamaciones multitudinarias han llevado a algunos críticos a hablar de “papolatría”, es decir, una devoción excesiva que puede confundirse con idolatría.',
    
    'Desde el interior de la Iglesia se insiste en que el Papa es “servidor de los siervos de Dios” y que su autoridad se entiende siempre en referencia a Cristo. El mismo Francisco ha advertido que la figura papal no debe ser idolatrada, sino acompañada en oración y servicio al Evangelio.'
  ],
  etiquetas: ['religión', 'judaísmo', 'catolicismo', 'papa', 'idolatría'],
  fuente: { nombre: 'Catecismo de la Iglesia Católica y Torá' },
  consecutivo_unico: '20250919-03'
},
{
  id: 'embajador-huckabee-discurso-jerusalen-2025-09-19',
  fecha: '2025-09-19',
  titulo: 'Embajador de Estados Unidos en Israel reafirma en Jerusalén la visión religiosa del “pueblo elegido”',
  pais: 'Internacional',
  resumen: 'En un discurso en la Ciudad de David, el embajador estadounidense Mike Huckabee afirmó que hace 4.000 años Dios eligió al pueblo judío, la tierra de Israel y un propósito: ser luz para el mundo. Concluyó proclamando que Israel es el hogar eterno del pueblo judío.',
  contenido: [
    'El embajador de Estados Unidos en Israel, Mike Huckabee, pronunció un discurso en la Ciudad de David, Jerusalén, durante una ceremonia oficial. En su intervención, el diplomático vinculó elementos religiosos con la legitimidad histórica y política de Israel como Estado judío.',
    
    '“Fue hace 4.000 años aquí en el Monte Moriah donde Dios eligió a su pueblo. No solo eligió un pueblo, eligió un lugar y un propósito. El pueblo fueron los judíos, el lugar fue Israel y el propósito fue ser una luz para el mundo”, declaró Huckabee ante autoridades israelíes y representantes internacionales.',
    
    'El embajador destacó que, pese a la destrucción de Jerusalén y la diáspora del pueblo judío, la conexión con la ciudad se mantuvo viva. Recordó las palabras del salmo 137: “Si te olvidare, oh Jerusalén, que mi diestra se olvide de mí”, como símbolo de la persistencia histórica de esa relación.',
    
    'En la parte final de su discurso, Huckabee afirmó: “Este es en verdad el hogar eterno del pueblo judío, del Estado judío y del pueblo que legítimamente pertenece aquí. Y esta noche el resto del mundo viene a decir: bienvenidos a casa, que nadie jamás intente quitarles su hogar. Es suyo”.',
    
    'Asimismo, dirigió un mensaje a quienes no son judíos: “Les agradecemos por darnos a todos una base de moralidad, decencia y civilización sobre la cual nuestra propia fe está construida. Sin la suya, no tenemos una”. Concluyó asegurando que su fe cristiana no puede entenderse sin la herencia judía y sentenció: “Dios nunca ha terminado con Israel y nunca lo hará. Este es el hogar eterno que él ha escogido”.'
  ],
  etiquetas: ['estados unidos', 'israel', 'política', 'religión'],
  fuente: { nombre: 'Embajada de Estados Unidos en Israel', url: 'https://www.youtube.com/watch?v=8-NxWF4I2pk' },
  video: 'https://www.youtube.com/embed/8-NxWF4I2pk',
  credito_video: 'Embajada de Estados Unidos en Israel',
  consecutivo_unico: '20250919-02'
},
{
  id: 'real-madrid-olympique-marsella-2025-09-16',
  fecha: '2025-09-16',
  titulo: 'Real Madrid vence 2-1 al Olympique de Marsella en su debut en la Champions League',
  pais: 'Internacional',
  resumen: 'El Real Madrid, dirigido por Xabi Alonso, se impuso 2-1 al Olympique de Marsella en el Santiago Bernabéu en el inicio de la fase de grupos de la Champions League 2025/26.',
  contenido: [
    'El Real Madrid inició con triunfo su participación en la fase de grupos de la Liga de Campeones al vencer 2-1 al Olympique de Marsella el martes 16 de septiembre de 2025 en el estadio Santiago Bernabéu.',
    'El encuentro estuvo marcado por el protagonismo de Kylian Mbappé, quien anotó los dos goles del conjunto blanco desde el punto de penalti. El delantero francés se consolidó como la figura del partido al liderar la ofensiva madridista.',
    'El Olympique de Marsella abrió el marcador en la primera mitad, pero el Real Madrid reaccionó con determinación para darle la vuelta al resultado. A pesar de la expulsión de Dani Carvajal en el minuto 71, el equipo supo mantener la ventaja hasta el final.',
    'El equipo dirigido por Xabi Alonso suma así sus primeros tres puntos en la Champions League, dando un paso importante en su interés de avanzar a la siguiente fase.',
    'Fuentes citadas: Real Madrid C.F. — Crónica oficial del partido; Reuters — Reporte del encuentro.'
  ],
  etiquetas: ['fútbol', 'champions league', 'real madrid', 'olympique de marsella', 'xabi alonso', 'kylian mbappé'],
  fuente: { nombre: 'Real Madrid C.F.', url: 'https://www.realmadrid.com/es-ES/noticias/futbol/primer-equipo/cronicas/real-madrid-olympique-de-marsella-16-09-2025' },
  url_fuente: 'https://www.realmadrid.com/es-ES/noticias/futbol/primer-equipo/cronicas/real-madrid-olympique-de-marsella-16-09-2025',
  imagen: '/noticias/real-madrid-olympique-marsella-2025-09-16.jpg',
  credito_imagen: 'Fotógrafo: Antonio Villalba, David S. Bustamante y María Jiménez / Real Madrid C.F.',
  consecutivo_unico: '20250916-01'
},
{
  id: 'columna-frente-amplio-o-frente-nacional-2025-09-17',
  fecha: '2025-09-19',
  titulo: 'Columna sobre Frente Amplio o Frente Nacional en el panorama político colombiano',
  pais: 'Colombia',
  resumen: 'En su columna del 17 de septiembre de 2025 para la revista Cambio, Juan David Correa analiza la coyuntura de las elecciones presidenciales de 2026 en Colombia, comparando los intentos de unidad de la izquierda con las alianzas de partidos tradicionales que evocan un posible Frente Nacional.',
  contenido: [
    'La columna titulada "Frente Amplio o Frente Nacional" fue presentada el 17 de septiembre de 2025 a través de la revista Cambio. En ella se reflexiona sobre la campaña presidencial de 2026 en Colombia, marcada por personalismos y falta de proyectos colectivos, en la que las redes sociales y la confrontación pública han tomado un papel central.',
    'Se destaca que, mientras la izquierda busca consolidar su unidad dentro del Pacto Histórico con partidos como la Unión Patriótica, el Partido Comunista, Colombia Humana, Progresistas y el Polo Democrático Alternativo, en la derecha se gestan reuniones entre líderes de partidos tradicionales como César Gaviria (Liberal), Germán Vargas Lleras (Cambio Radical), Efraín Cepeda (Conservador), Dilian Francisca Toro (Partido de la U), Juan Manuel Galán (Nuevo Liberalismo) y Álvaro Uribe (Centro Democrático). Estas alianzas evocan el recuerdo del Frente Nacional que gobernó al país durante varias décadas del siglo XX.',
    'El texto repasa el origen histórico del Frente Nacional tras el golpe de Gustavo Rojas Pinilla en 1953, y cómo dicho pacto entre Alberto Lleras Camargo y Laureano Gómez derivó en una exclusión política prolongada que cerró espacios a sectores populares, juveniles y de izquierda, desembocando en la aparición de guerrillas en los años sesenta.',
    'Asimismo, se hace un paralelo entre ese esquema de reparto del poder y las dinámicas políticas posteriores, incluyendo la influencia del narcotráfico, el neoliberalismo de los años noventa y el papel de Álvaro Uribe y Juan Manuel Santos en procesos que reconfiguraron el panorama nacional. Según la columna, algunos dirigentes buscan reeditar un "Frente Nacional 2.0" que limite la participación política de sectores alternativos.',
    'La reflexión final señala que, ante los intentos de revivir acuerdos excluyentes, el reto para la izquierda y otros sectores es construir un Frente Amplio con reglas claras y pactos transparentes, que continúe la pacificación del país a través de la inversión territorial y una inclusión más amplia de la diversidad social y política de Colombia.'
  ],
  etiquetas: ['colombia','politica','frente nacional','elecciones 2026','podcast','conversaciones pendientes'],
  fuente: { nombre: 'Canal Juan David Correa', url: 'https://www.youtube.com/watch?v=zFxf-gjxdWM' },
  url_fuente: 'https://www.youtube.com/watch?v=zFxf-gjxdWM',
  video: 'https://www.youtube.com/embed/zFxf-gjxdWM',
  credito_video: 'Canal Juan David Correa / YouTube',
  consecutivo_unico: '20250918-03'
},
{
  id: 'declaraciones-ministro-finanzas-israel-gaza-2025-09-18',
  fecha: '2025-09-18',
  titulo: 'Declaraciones atribuidas al ministro de Finanzas de Israel sobre la Franja de Gaza',
  pais: 'Internacional',
  resumen: 'El ministro de Finanzas de Israel, Bezalel Smotrich, calificó la Franja de Gaza como una “bonanza inmobiliaria” y señaló que se adelantan conversaciones con Estados Unidos para definir el futuro del territorio palestino.',
  contenido: [
    'Durante una conferencia inmobiliaria en Tel Aviv, el ministro de Finanzas de Israel, Bezalel Smotrich, aseguró que la Franja de Gaza representa una “bonanza inmobiliaria” que “se paga sola”.',
    'Smotrich afirmó que ya se desarrollan negociaciones con Estados Unidos para repartir el territorio palestino. “Se compartirá con Estados Unidos. Una vez esté destruida, veremos cómo la repartimos. Hemos invertido mucho dinero en esta guerra. Necesitamos ver cómo distribuiremos el terreno en porcentajes (...) La demolición, la primera fase de la renovación de la ciudad, ya está lista, ahora solo debemos reconstruir”, dijo el ministro.',
    'Las declaraciones coinciden con expresiones del expresidente estadounidense Donald Trump, quien previamente habló de planes para convertir la Franja de Gaza en una “riviera” bajo control de Estados Unidos.',
    'La información fue difundida por el medio colombiano Última Hora Caracol a través de su cuenta oficial en la red social X.'
  ],
  etiquetas: ['internacional','israel','gaza','estados unidos'],
  fuente: { nombre: 'Última Hora Caracol', url: 'https://x.com/UltimaHoraCR/status/1968360598397161795' },
  consecutivo_unico: '20250918-01'
},
{
  id: 'comparacion-modelos-economicos-petro-milei-2025-09-18',
  fecha: '2025-09-18',
  titulo: 'Comparación de modelos económicos: Petro en Colombia y Milei en Argentina',
  pais: 'Internacional',
  resumen: 'El economista Alfredo Serrano Manc comparó la evolución económica de Colombia y Argentina en 2025, destacando diferencias entre el modelo de Gustavo Petro y el de Javier Milei a partir del tipo de cambio y el riesgo país.',
  contenido: [
    'Alfredo Serrano Manc, director del Centro Estratégico Latinoamericano de Geopolítica (CELAG), publicó un análisis en el que contrasta los resultados de la política económica en Colombia, bajo la presidencia de Gustavo Petro, y en Argentina, bajo la administración de Javier Milei.',
    'Según el economista, se trata de dos enfoques distintos: uno que incorpora a la ciudadanía y busca estabilidad macroeconómica con bienestar microeconómico, frente a otro que genera desequilibrios macroeconómicos y malestar en los hogares. Para sustentar su afirmación, compartió datos del tipo de cambio y del riesgo país en ambos países durante 2025.',
    'En el caso de Colombia, el peso se apreció respecto al dólar y el riesgo país mostró una tendencia a la baja, de acuerdo con cifras de BanRep y el EMBI de JP Morgan. En contraste, en Argentina el peso sufrió una marcada depreciación y el riesgo país aumentó con fuerza, según datos del Banco Central de la República Argentina (BCRA) y JP Morgan.',
    'Serrano concluyó que los indicadores reflejan un mejor desempeño de Colombia frente a Argentina en lo corrido de 2025, y remarcó su frase: "Dato mata relato", en referencia a la evidencia empírica frente a los discursos políticos.',
    'Fuentes citadas:',
    '1) Banco Central de la República Argentina (BCRA). https://www.bcra.gob.ar/',
    '2) Banco de la República de Colombia (BanRep). https://www.banrep.gov.co/',
    '3) JP Morgan. EMBI Global Index. https://www.jpmorgan.com/'
  ],
  etiquetas: ['economía','colombia','argentina','gustavo petro','javier milei','celag'],
  fuente: { nombre: 'Alfredo Serrano Manc', url: 'https://x.com/alfreserramanci' },
  consecutivo_unico: '20250918-01'
},
{
  id: 'alemania-presupuesto-general-2025-09-18',
  fecha: '2025-09-18',
  titulo: 'Alemania aprueba presupuestos generales con inversiones récord',
  pais: 'Alemania',
  resumen: 'El Parlamento alemán aprobó los presupuestos generales para 2025, que incluyen un volumen histórico de inversiones públicas y un aumento significativo en áreas estratégicas.',
  contenido: [
    'El Bundestag dio luz verde este jueves al presupuesto general de Alemania para 2025, que contempla un volumen total de 490.000 millones de euros. El plan financiero destaca por asignar una cifra récord de 110.000 millones de euros destinados a inversiones públicas.',
    'El gobierno alemán ha justificado estas medidas como necesarias para impulsar la modernización del país, con especial énfasis en infraestructura, digitalización, transición energética y defensa. Según el ministro de Finanzas, el presupuesto busca asegurar el crecimiento económico sostenible y fortalecer la resiliencia del Estado frente a crisis futuras.',
    'Entre los sectores priorizados se encuentran la transición hacia energías renovables, la movilidad sostenible y la innovación tecnológica, con el objetivo de cumplir compromisos ambientales y mantener la competitividad industrial. También se contempla un refuerzo en el gasto social y la seguridad nacional.',
    'La aprobación se da en un contexto de debate político sobre la disciplina fiscal y la necesidad de mantener el “freno a la deuda” inscrito en la Constitución alemana. No obstante, el gobierno defendió que las inversiones extraordinarias son indispensables para responder a los desafíos globales y garantizar el bienestar de la población.'
  ],
  etiquetas: ['economía','alemania','presupuesto','inversión pública'],
  fuente: { nombre: 'DW', url: 'https://www.dw.com/es/alemania-aprueba-presupuestos-generales-con-inversiones-r%C3%A9cord/a-74046711' },
  url_fuente: 'https://www.dw.com/es/alemania-aprueba-presupuestos-generales-con-inversiones-r%C3%A9cord/a-74046711',
  consecutivo_unico: '20250918-01'
},
{
  id: 'ataques-lanchas-caribe-ejecuciones-extrajudiciales-2025-09-18',
  fecha: '2025-09-18',
  titulo: 'Ataques a lanchas con drogas en el Caribe son ejecuciones extrajudiciales',
  pais: 'Internacional',
  resumen: 'La ONU denunció que los ataques contra lanchas usadas para transportar drogas en el Caribe constituyen ejecuciones extrajudiciales, vulnerando el derecho internacional.',
  contenido: [
    'La Oficina de la Alta Comisionada de las Naciones Unidas para los Derechos Humanos afirmó que los ataques registrados contra embarcaciones sospechosas de transportar drogas en el Caribe son ejecuciones extrajudiciales. El informe señala que estas acciones contravienen los estándares internacionales y ponen en riesgo la vida de personas que no han tenido un juicio justo.',
    'De acuerdo con la ONU, los operativos se han realizado principalmente en aguas internacionales del Caribe, donde fuerzas navales de distintos países han abierto fuego contra lanchas rápidas presuntamente dedicadas al narcotráfico. La organización advierte que el uso de la fuerza letal en estos casos no cumple con las obligaciones de proporcionalidad ni con el debido proceso.',
    'La Alta Comisionada enfatizó que, aunque los Estados tienen la responsabilidad de combatir el narcotráfico, deben hacerlo en cumplimiento del derecho internacional y respetando los derechos humanos. El informe pide a los gobiernos involucrados que detengan estas prácticas y aseguren mecanismos de rendición de cuentas.',
    'La ONU también instó a establecer protocolos claros que prioricen la detención y el sometimiento a la justicia de los sospechosos, en lugar de recurrir a medidas que resulten en ejecuciones extrajudiciales. Según el organismo, la lucha contra el crimen organizado no puede justificar la vulneración de principios básicos de derechos humanos.'
  ],
  etiquetas: ['seguridad','onu','ejecuciones extrajudiciales','caribe'],
  fuente: { nombre: 'DW', url: 'https://www.dw.com/es/ataques-a-lanchas-con-drogas-en-el-caribe-son-ejecuciones-extrajudiciales/a-74020988' },
  url_fuente: 'https://www.dw.com/es/ataques-a-lanchas-con-drogas-en-el-caribe-son-ejecuciones-extrajudiciales/a-74020988',
  consecutivo_unico: '20250918-03'
},
{
  id: 'colombia-primera-sentencia-exmilitares-2025-09-18',
  fecha: '2025-09-18',
  titulo: 'Colombia emite primera sentencia contra exmilitares por falsos positivos',
  pais: 'Colombia',
  resumen: 'Un tribunal en Bogotá condenó a seis exmilitares por su responsabilidad en ejecuciones extrajudiciales, conocidas como falsos positivos, ocurridas entre 2006 y 2008.',
  contenido: [
    'Un tribunal de Bogotá dictó la primera sentencia contra seis exmilitares involucrados en ejecuciones extrajudiciales, conocidas en Colombia como falsos positivos. Los hechos juzgados ocurrieron entre 2006 y 2008, en medio del conflicto armado interno.',
    'Según la investigación, las víctimas fueron presentadas falsamente como guerrilleros abatidos en combate, con el fin de mostrar resultados operativos y obtener beneficios dentro de la estructura militar. La Justicia determinó que los acusados actuaron de manera sistemática y coordinada.',
    'La condena se emitió tras varios años de indagaciones y hace parte de los procesos adelantados por la Jurisdicción Especial para la Paz (JEP) y la justicia ordinaria, que han recibido miles de testimonios y pruebas sobre la magnitud de estos crímenes.',
    'El caso marca un precedente en el reconocimiento judicial de la responsabilidad de altos mandos y subalternos en estas prácticas. Se espera que futuras sentencias contribuyan a esclarecer más de 6.400 muertes reportadas como falsos positivos en Colombia durante los años de mayor intensidad del conflicto armado.'
  ],
  etiquetas: ['colombia','seguridad','investigación','falsos positivos'],
  fuente: { nombre: 'DW', url: 'https://www.dw.com/es/colombia-emite-primera-sentencia-contra-exmilitares/a-74051270' },
  url_fuente: 'https://www.dw.com/es/colombia-emite-primera-sentencia-contra-exmilitares/a-74051270',
  consecutivo_unico: '20250918-03'
},
{
  id: 'critica-hanwen-zhang-encuestas-cifras-colombia-2025-09-18',
  fecha: '2025-09-18',
  titulo: 'Hanwen Zhang cuestiona encuestas y cifras políticas en Colombia',
  pais: 'Colombia',
  resumen: 'La investigadora Hanwen Zhang señaló que encuestas y estudios con errores metodológicos o sesgos están afectando la discusión política en Colombia, citando tres casos recientes.',
  contenido: [
    'La investigadora Hanwen Zhang advirtió que encuestas y cifras malintencionadas están causando un impacto negativo en la discusión política en Colombia. Según explicó, durante el último año se han registrado varios ejemplos que han generado controversia y desinformación.',
    'El primero de ellos es el documento del Banco de la República que alertaba sobre la posible "pérdida de 450 mil empleos" en caso de aprobarse la reforma laboral. Zhang cuestionó la validez de este cálculo y su uso en el debate público.',
    'En segundo lugar, mencionó la encuesta del partido Mira, también relacionada con la reforma laboral, que presentó problemas en la recolección de datos, una baja tasa de respuestas efectivas y presunta manipulación de resultados.',
    'Finalmente, señaló el estudio de Fenalco, en el que se afirma que el impuesto a la comida saludable estaría afectando de manera grave a los tenderos. Para Zhang, este tipo de informes carecen del rigor suficiente para ser usados como referencia.',
    'Zhang advirtió que los políticos citan estos estudios sin investigar la calidad de los mismos, lo que contribuye a la propagación de información poco confiable en el debate público.'
  ],
  etiquetas: ['colombia','politica','encuestas','medios'],
  fuente: { nombre: 'Hanwen Zhang', url: 'https://x.com/hanwenzhang1982/status/1837137729083461657' },
  consecutivo_unico: '20250918-07'
},
{
  id: 'acuerdos-clan-del-golfo-gobierno-petro-2025-09-18',
  fecha: '2025-09-18',
  titulo: 'Gobierno y Clan del Golfo logran primeros acuerdos en negociación en Catar',
  pais: 'Colombia',
  resumen: 'En Doha, Catar, se alcanzaron los primeros acuerdos entre el gobierno del presidente Gustavo Petro y el Clan del Golfo. Los compromisos incluyen el fin del reclutamiento de menores y la sustitución de economías ilícitas en los territorios bajo influencia de ese grupo.',
  contenido: [
    'En la capital de Catar, el gobierno de Colombia y el Clan del Golfo lograron avances en el marco de los diálogos de paz que se desarrollan desde septiembre. El encuentro concluyó con la firma de dos acuerdos iniciales, centrados en el cese del reclutamiento de menores y en la sustitución de economías ilegales.',
    'Según lo anunciado, el Clan del Golfo se comprometió a suspender de manera inmediata la vinculación de menores de edad a sus estructuras armadas. Este punto ha sido uno de los principales reclamos de organismos internacionales y defensores de derechos humanos en el país.',
    'El segundo acuerdo plantea avanzar en la sustitución de economías ilícitas, con especial énfasis en la producción y tráfico de drogas, buscando abrir paso a proyectos productivos legales en las zonas bajo influencia de este grupo armado. El gobierno, por su parte, acompañará con programas sociales y de inversión.',
    'Las negociaciones en Doha continuarán en las próximas semanas. El gobierno de Gustavo Petro destacó que estos compromisos representan un primer paso para reducir la violencia en regiones afectadas, mientras que se mantiene el proceso de verificación y el acompañamiento internacional en el marco de la política de paz total.'
  ],
  etiquetas: ['colombia','seguridad','gustavo petro','clan del golfo','paz'],
  fuente: { nombre: 'El Espectador', url: 'https://www.elespectador.com/colombia-20/paz-y-memoria/clan-del-golfo-y-petro-estos-son-los-primeros-acuerdos-tras-ronda-de-negociacion-en-catar-reclutamiento-y-sustitucion/' },
  url_fuente: 'https://www.elespectador.com/colombia-20/paz-y-memoria/clan-del-golfo-y-petro-estos-son-los-primeros-acuerdos-tras-ronda-de-negociacion-en-catar-reclutamiento-y-sustitucion/',
  consecutivo_unico: '20250918-01'
},
{
  id: 'crecimiento-economia-colombia-2025-09-18',
  fecha: '2025-09-18',
  titulo: 'Economía colombiana creció 4,3% anual en julio, según el DANE',
  pais: 'Colombia',
  resumen: 'El DANE reportó un crecimiento anual de 4,3% en el Indicador de Seguimiento a la Economía (ISE) para julio de 2025, resultado que el presidente Gustavo Petro destacó como señal de reactivación plena.',
  contenido: [
    'El Departamento Administrativo Nacional de Estadística (DANE) informó que el Indicador de Seguimiento a la Economía (ISE) creció 4,33% anual en julio de 2025, frente al mismo mes de 2024. La cifra corresponde a la serie original del índice, mientras que la serie ajustada por efecto estacional y calendario registró un crecimiento de 4,14%.',
    'Entre los sectores que impulsaron el crecimiento se destacan las actividades de comercio, transporte y alojamiento, con un aumento de 6,7%; la administración pública, defensa, educación y salud, con 7,0%; y la industria manufacturera y construcción, con 4,3%.',
    'El presidente Gustavo Petro resaltó en sus redes sociales que la economía muestra un repunte en la industria, la agricultura y los servicios públicos. Señaló además que el comercio “está a reventar en ventas” y subrayó la importancia de acelerar la transición energética y la exportación de la agroindustria.',
    'Petro afirmó que oficialmente la economía nacional “está plenamente reactivada” y sostuvo que una eventual reducción de la tasa de interés por parte del Banco de la República permitiría impulsar con mayor fuerza la construcción de edificaciones.',
    'El boletín técnico del DANE también muestra que, en lo corrido del año hasta julio, el ISE creció 2,7% en comparación con el mismo periodo de 2024, lo que refleja una recuperación sostenida frente al año anterior.'
  ],
  etiquetas: ['colombia', 'economía', 'gustavo petro', 'resultados'],
  fuente: { nombre: 'DANE', url: 'https://www.dane.gov.co/index.php/estadisticas-por-tema/cuentas-nacionales/indicador-de-seguimiento-a-la-economia-ise' },
  url_fuente: 'https://www.dane.gov.co/files/investigaciones/boletines/ise/bol-ISE-jul2025.pdf',
  imagen: '/noticias/crecimiento-economia-colombia-2025-09-18.jpg',
  credito_imagen: 'DANE',
  consecutivo_unico: '20250918-01'
},
{
  id: 'jimmy-kimmel-suspension-comentarios-charlie-kirk-2025-09-18',
  fecha: '2025-09-18',
  titulo: 'Suspensión de Jimmy Kimmel tras comentarios de Charlie Kirk en EE. UU.',
  pais: 'Estados Unidos',
  resumen: 'El presentador Jimmy Kimmel suspendió temporalmente su programa tras la polémica generada por comentarios de Charlie Kirk durante su monólogo, en medio de un clima político marcado por las elecciones y la influencia de Donald Trump.',
  contenido: [
    'El comediante y presentador de televisión Jimmy Kimmel suspendió su programa nocturno después de un monólogo que incluyó referencias a Charlie Kirk, figura política conservadora cercana al expresidente Donald Trump. El hecho ocurrió el 18 de septiembre de 2025 y generó un amplio debate en los medios de comunicación de Estados Unidos.',
    'La cadena responsable de la transmisión señaló que la suspensión busca “dar espacio a la evaluación editorial”, sin precisar si se trata de una cancelación definitiva o de una pausa temporal. El episodio se difundió en un momento en que las tensiones políticas en el país aumentan por la campaña electoral presidencial de 2026.',
    'En su monólogo, Kimmel afirmó: “Hemos tocado nuevos mínimos este fin de semana con la banda MAGA, desesperada por caracterizar a este chico que asesinó a Charlie Kirk como cualquier cosa menos uno de ellos, haciendo todo lo posible por sacar provecho político de ello.”',
    'Al mostrar un video de Donald Trump reaccionando a la muerte de Kirk, Kimmel comentó: “Esto no es la forma en que un adulto llora el asesinato de alguien a quien llama amigo. Es la manera en que un niño de cuatro años llora la muerte de un pez dorado.” Estas frases fueron ampliamente replicadas en redes sociales y medios.',
    'El expresidente Donald Trump también fue aludido indirectamente en el monólogo, lo que incrementó la repercusión del caso entre sectores republicanos y demócratas. Hasta el momento, Kimmel no se ha pronunciado directamente sobre la suspensión, mientras que el canal revisa los próximos pasos en torno a su continuidad en pantalla.',
    'El episodio refleja cómo la interacción entre entretenimiento y política en Estados Unidos sigue teniendo impacto directo en la opinión pública, especialmente cuando involucra a figuras mediáticas y dirigentes políticos vinculados a la contienda electoral.'
  ],
  etiquetas: ['estados unidos', 'medios', 'donald trump', 'politica'],
  fuente: { nombre: 'The Guardian', url: 'https://www.theguardian.com/us-news/live/2025/sep/18/jimmy-kimmel-charlie-kirk-comments-show-cancelled-suspended-monologue-trump-us-politics-live' },
  url_fuente: 'https://www.theguardian.com/us-news/live/2025/sep/18/jimmy-kimmel-charlie-kirk-comments-show-cancelled-suspended-monologue-trump-us-politics-live',
  consecutivo_unico: '20250918-03'
},
{
  id: 'precandidatos-pacto-historico-10am-caracol-radio-2025-09-17',
  fecha: '2025-09-17',
  titulo: 'Precandidatos del Pacto Histórico a la Presidencia dialogan en Caracol Radio',
  pais: 'Colombia',
  resumen: 'Caracol Radio presentó un espacio de diálogo con los precandidatos presidenciales del Pacto Histórico, moderado por la periodista Vanessa De la Torre en el programa 10AM.',
  contenido: [
    'En la mañana del martes 16 de septiembre de 2025, Caracol Radio transmitió un especial en su programa "10AM" con la participación de los precandidatos a la Presidencia por el Pacto Histórico: María José Pizarro, Gustavo Bolívar, Susana Muhamad, Daniel Quintero y Carolina Corcho. El espacio fue moderado por la periodista Vanessa De la Torre.',
    'Durante el encuentro, los aspirantes expusieron sus principales propuestas y respondieron preguntas sobre asuntos de coyuntura nacional. El senador Iván Cepeda Castro no participó, ya que se excusó por un compromiso adquirido con anterioridad a la fecha prevista para el debate.',
    'El especial fue transmitido en vivo por Caracol Radio y quedó disponible en su canal oficial de YouTube, permitiendo a la audiencia acceder de manera abierta al diálogo entre los precandidatos del movimiento político.',
    'La sección de comentarios en la transmisión de YouTube reflejó opiniones diversas: varios usuarios resaltaron la elocuencia y serenidad de Carolina Corcho, mientras que otros se mostraron identificados con la trayectoria de Daniel Quintero, considerándolo un candidato fuerte. También hubo quienes destacaron la presencia de María José Pizarro y Gustavo Bolívar, así como la capacidad de Susana Muhamad para presentar ideas claras.',
    'Algunos participantes del chat criticaron el rol de los periodistas, señalando interrupciones o falta de neutralidad, mientras otros reclamaron la ausencia de Iván Cepeda como una oportunidad perdida en el panel. En conjunto, los comentarios reflejaron tanto respaldos entusiastas como cuestionamientos a los precandidatos y al formato del espacio.'
  ],
  etiquetas: ['colombia', 'política', 'pacto histórico', 'caracol radio'],
  fuente: { nombre: 'Caracol Radio', url: 'https://caracol.com.co/' },
  url_fuente: 'https://www.youtube.com/watch?v=1rGk2qNMEuk',
  video: 'https://www.youtube.com/embed/1rGk2qNMEuk',
  credito_video: 'YouTube / Caracol Radio',
  consecutivo_unico: '20250917-01'
},
{
  id: 'educacion-vial-colegio-aleman-barranquilla-2025-09-17',
  fecha: '2025-09-17',
  titulo: 'Lo que viví al ver una “cebra” en el Colegio Alemán de Barranquilla',
  pais: 'colombia',
  resumen: 'Un alumno del Colegio Alemán de Barranquilla participó como “cebra” en una iniciativa educativa para fomentar el respeto por los cruces peatonales y promover la autonomía infantil en la movilidad urbana.',
  imagen: '/noticias/cebra-colegio-aleman.jpg',
  contenido: [
    'La mañana del 17 de septiembre, al llegar al Colegio Alemán de Barranquilla, presencié una escena inusual: un estudiante vestido de cebra, acompañado por otro con señal de “PARE”, organizaba el cruce peatonal frente a la institución. Esta intervención forma parte de una iniciativa escolar que busca enseñar a los estudiantes y a la comunidad a respetar las cebras y promover la movilidad segura.',
    'El proyecto pedagógico incluye señalización horizontal en diversos puntos del campus para que los niños se acostumbren desde pequeños a caminar con autonomía y usar correctamente los cruces. También promueve que los propios padres y docentes den ejemplo utilizando las cebras para desplazarse, en lugar de cruzar por cualquier parte.',
    'A pesar de los esfuerzos, persisten debilidades en la implementación. Algunas demarcaciones están deterioradas y varios conductores —incluidos algunos padres— no respetan los cruces, se detienen encima de ellos o no ceden el paso, lo que pone en riesgo a los peatones. La labor del estudiante disfrazado de cebra recuerda a programas exitosos en ciudades como La Paz (Bolivia) y Quito (Ecuador), donde estas figuras han humanizado el tránsito y fomentado una cultura de respeto.',
    'La experiencia del Colegio Alemán se inspira en el modelo educativo de Alemania, país donde los niños reciben formación vial desde la infancia. A partir de los 6 años se les enseña a ir caminando al colegio de forma independiente, con rutas seguras identificadas por las familias y reforzadas por programas escolares.',
    'Además, a partir de los 9 o 10 años, muchos niños alemanes se preparan para obtener una “Fahrradführerschein” o licencia de conducción de bicicleta, tras exámenes teóricos y prácticos impartidos en colaboración con la policía local.',
    'Replicar estas prácticas en ciudades como Barranquilla requeriría un compromiso público sostenido para mejorar la infraestructura peatonal, formar agentes de tránsito con enfoque pedagógico, implementar campañas de educación ciudadana y, sobre todo, transformar la mentalidad colectiva sobre el rol del peatón en el ecosistema urbano.',
    'Algunos dirán que es impensable que esto se dé en Colombia, pero al menos se trata de diseñar un plan para que los niños muy pequeños hoy sean la generación que crezca con nuevas costumbres. Dentro de unos 20 años podríamos ver los frutos en la cultura ciudadana y en otros aspectos del estilo de vida, con beneficios reales para toda la sociedad.'
  ],
  etiquetas: ['colombia', 'movilidad', 'educación', 'el caminante', 'peatones', 'alemania','buenas noticias'],
  fuente: 'Noticias Neutrales',
  url_fuente: '/el-caminante',
  consecutivo_unico: '20250917-01',
  ubicacion: {
    nombre: 'Colegio Alemán de Barranquilla',
    coordenadas: '11.015616356929003,-74.86107156994868'
  }
},
{
  id: 'sentencia-exjefes-farc-secuestros-colombia-2025-09-16',
  fecha: '2025-09-17',
  titulo: 'Exjefes de las FARC reciben sentencia máxima por miles de secuestros en Colombia',
  pais: 'Colombia',
  resumen: 'La Jurisdicción Especial para la Paz (JEP) emitió la sentencia más alta contemplada en su marco de justicia contra antiguos comandantes de las FARC por crímenes de secuestro cometidos entre 1990 y 2016.',
  contenido: [
    'La Jurisdicción Especial para la Paz (JEP) dictó este 16 de septiembre la sentencia máxima contra ocho exintegrantes del antiguo Secretariado de las FARC por miles de secuestros cometidos durante más de dos décadas en Colombia. La decisión marca un precedente histórico en el sistema de justicia transicional establecido tras el acuerdo de paz de 2016.',
    'Los magistrados concluyeron que los exjefes guerrilleros son responsables de la política de secuestros ejecutada por la organización entre 1990 y 2016. Durante ese tiempo, miles de personas fueron privadas de la libertad con fines extorsivos, de control territorial y de presión política.',
    'La sanción impuesta contempla una restricción efectiva de la libertad de entre 5 y 8 años en condiciones especiales, bajo un régimen restaurativo que incluye proyectos para reparar a las víctimas. Esta medida corresponde al marco establecido por la JEP, que prioriza la verdad, la reparación y la no repetición.',
    'Entre los condenados se encuentran Rodrigo Londoño (Timochenko) y otros antiguos miembros del Secretariado. Todos ellos reconocieron su responsabilidad en audiencias previas, lo que permitió reducir la sanción en comparación con penas ordinarias de cárcel.',
    'La sentencia busca dignificar a las víctimas y consolidar el proceso de justicia transicional en Colombia. Según la JEP, este es el primer gran fallo en el caso de secuestros, y se espera que sirva como base para decisiones futuras en otros macrocasos relacionados con crímenes cometidos durante el conflicto armado.',
    'Fuentes citadas:',
    'Jurisdicción Especial para la Paz (JEP). Sentencia sobre el Caso 01: Toma de rehenes y otras privaciones graves de la libertad por parte de las FARC-EP. https://www.jep.gov.co',
    'Deutsche Welle (DW). Exjefes de las FARC reciben sentencia máxima por miles de secuestros en Colombia. https://www.dw.com/es/exjefes-de-las-farc-reciben-sentencia-m%C3%A1xima-por-miles-de-secuestros-en-colombia/a-74020979'
  ],
  etiquetas: ['colombia','farc','jep','justicia'],
  fuente: { nombre: 'Deutsche Welle (DW)', url: 'https://www.dw.com/es/exjefes-de-las-farc-reciben-sentencia-m%C3%A1xima-por-miles-de-secuestros-en-colombia/a-74020979' },
  url_fuente: 'https://www.dw.com/es/exjefes-de-las-farc-reciben-sentencia-m%C3%A1xima-por-miles-de-secuestros-en-colombia/a-74020979',
  consecutivo_unico: '20250916-01'
},
{
  id: 'leyendas-colombianas-en-familia-2025-09-16',
  fecha: '2025-09-17',
  titulo: 'Compartir leyendas en familia: tradición, miedo y diversión',
  pais: 'Colombia',
  resumen: 'Las leyendas transmitidas de generación en generación hacen parte de la cultura popular y despiertan en los niños tanto curiosidad como miedo o diversión, según la historia y la edad.',
  contenido: [
    'Las leyendas forman parte del patrimonio cultural que se transmite de abuelos a padres e hijos. Son relatos que viajan de generación en generación, cargados de misterio y tradición oral, que fortalecen la identidad y los lazos familiares.',
    'Cuando los niños son pequeños, su imaginación hace que vivan intensamente estas historias. Algunas pueden causar miedo, al punto de que después de cumplir con una tarea escolar sobre leyendas, pidan dormir acompañados porque creen escuchar a la Llorona o ver al cura sin cabeza.',
    'No todas las reacciones son de temor. Algunos niños descubren el lado curioso o gracioso de relatos como el del hombre caimán, que despierta más risas que susto y se convierte en un recuerdo divertido dentro de la familia.',
    'Compartir leyendas con los hijos no solo entretiene: también enseña, advierte y transmite valores. Aunque a veces provoquen desvelos, estas historias cumplen su papel cultural y mantienen viva la memoria colectiva de los pueblos.'
  ],
  etiquetas: ['colombia','cultura','leyendas','familia','educación'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250916-01'
},
{
  id: 'tallinn-teatro-ruso-restricciones-2025-09-16',
  fecha: '2025-09-17',
  titulo: 'Debate en Tallin sobre restricciones a obras y directores rusos',
  pais: 'Estonia',
  resumen: 'El cambio de nombre del Teatro Ruso de Tallin a Teatro del Centro reabre el debate sobre si deben restringirse obras y directores rusos en la capital estonia.',
  contenido: [
    'El Teatro Ruso de Tallin anunció recientemente que dejará de utilizar esa denominación para llamarse ahora Teatro del Centro. La decisión busca desligarse de una identidad que algunos perciben asociada al gobierno de Moscú, en un contexto marcado por la invasión rusa a Ucrania.',
    'El debate en Estonia gira en torno a si deben restringirse o no las obras y directores rusos en espacios culturales. Algunos sectores consideran que limitar la presencia cultural rusa sería una respuesta simbólica frente a la agresión militar, mientras otros alertan sobre el riesgo de caer en censura y excluir un patrimonio artístico universal.',
    'Críticos de la medida recuerdan que autores como Antón Chéjov, Lev Tolstói o Serguéi Prokófiev forman parte del acervo cultural mundial y no deben confundirse con la política actual del Kremlin. Proponen mantener las obras rusas en la programación, pero acompañarlas de foros o notas explicativas que contextualicen la situación política.',
    'La opción intermedia que gana apoyo en algunos teatros europeos es diferenciar entre cultura y propaganda. Se plantea aceptar las producciones rusas con valor artístico universal, pero restringir aquellas financiadas o promovidas directamente por el Estado ruso, con el fin de evitar que los escenarios culturales se conviertan en plataformas de legitimación política.',
    'En el ámbito educativo, las restricciones también han estado presentes. Leonardo De la Hoz Borrego, durante sus sesiones presenciales de maestría en Tecnología Educativa en la Universidad de Tartu en agosto de 2023, conoció de primera mano cómo en las escuelas de Estonia se estaban limitando las clases en ruso, como parte de las medidas para contrarrestar la influencia del Kremlin tras el inicio de la guerra en Ucrania en 2022.',
    'El tiempo pasará y sabremos que tan convenientes habrán sido este tipo de medidas.'
  ],
  etiquetas: ['estonia','cultura','teatro','rusia','educación'],
  fuente: { nombre: 'ERR News', url: 'https://news.err.ee/1609802388/gallery-russian-dropped-as-tallinn-theater-renamed-downtown-theater' },
  consecutivo_unico: '20250916-01'
},
{
  id: 'jannik-sinner-us-open-2025-balance-temporada',
  fecha: '2025-09-17',
  titulo: 'Jannik Sinner: un 2025 de gloria, tropiezos y récords en el tenis mundial',
  pais: 'Internacional',
  resumen: 'El italiano cerró su participación en el US Open 2025 con la pérdida del número uno, tras 65 semanas consecutivas en la cima, pero consolidando una temporada histórica con títulos de Grand Slam, récords y acuerdos comerciales.',
  imagen: '/noticias/20250917-jannik-sinner-atp-perfil.jpg',
  contenido: [
    'El US Open 2025 marcó un punto de inflexión en la temporada de Jannik Sinner. El italiano, que llegaba como número uno del mundo y vigente campeón, se encontró con un Carlos Alcaraz inspirado en la final de Nueva York. La derrota por 6-2, 3-6, 6-1, 6-4 no solo le costó el título, también el trono del ranking ATP que había ocupado durante 65 semanas consecutivas. Con ello se cerró un ciclo histórico: fue el primer italiano en alcanzar la cima y lo hizo con una regularidad que pocos jugadores han conseguido en su primer reinado.',
    'El recorrido de Sinner en 2025 no se mide solo por esa caída. Abrió la temporada defendiendo con éxito el título en el Australian Open, protagonizó la final más larga de la historia de Roland Garros ante Alcaraz y se convirtió en el primer hombre de su país en conquistar Wimbledon. Tres grandes logros en un mismo año que lo consolidan como uno de los jugadores más consistentes y carismáticos del circuito.',
    'La temporada también estuvo marcada por un capítulo complejo fuera de la cancha. En febrero aceptó una suspensión de tres meses tras detectarse en su organismo restos de clostebol, una sustancia prohibida. Las investigaciones concluyeron que fue una exposición involuntaria y que no le otorgó ventaja competitiva. Ese periodo de inactividad, que iba del 9 de febrero al 4 de mayo, le sirvió para resetear la mente. Al regresar, lejos de hundirse, alcanzó finales en Roma y París y levantó el trofeo en la hierba londinense, demostrando que la pausa no detuvo su ascenso.',
    'En lo económico, Sinner se consolidó como una de las grandes estrellas del deporte. En 2025 superó los 11 millones de dólares en premios y multiplicó esa cifra con patrocinios de marcas globales como Nike, Head, Rolex, Gucci, Lavazza y De Cecco. Su imagen trasciende las canchas: combina tenis de élite con colaboraciones en moda y estilo de vida, lo que lo convierte en uno de los deportistas más influyentes de su generación.',
    'Comparado con leyendas como Federer, Nadal o Djokovic, el primer reinado de Sinner en el número uno todavía es corto, pero sus 65 semanas seguidas en lo más alto lo ubican ya entre los grandes. Aunque perdió el trono en Nueva York, liberarse de la presión de defenderlo puede ser la clave para seguir creciendo. Con apenas 24 años, su historia en el tenis está lejos de terminar, y 2025 quedará como el año en que, pese a las dificultades, demostró que está hecho para durar.',
    'En la rueda de prensa tras la final del US Open, Sinner reconoció: “Tengo que ser menos predecible”. Y la reflexión invita a imaginar: ¿qué pasaría si realmente lograra añadir esa imprevisibilidad a su juego? Con 20 títulos ATP y 65 semanas como número uno en su primer intento, el futuro promete mucho más.'
  ],
  etiquetas: ['tenis','atp','jannik sinner','us open','carlos alcaraz','deportes'],
  fuente: { nombre: 'ATP Tour', url: 'https://www.atptour.com/en/news/sinner-alcaraz-us-open-2025-final-for-world-no-1' },
  consecutivo_unico: '20250916-01'
},
{
  id: 'decision-petroleo-perspectiva-integral-2025-09-16',
  fecha: '2025-09-16',
  titulo: 'Decisión de vender operaciones de fracking en EE. UU.: razones más allá de lo económico',
  pais: 'Colombia',
  resumen: 'La orden presidencial para que Ecopetrol venda su operación de fracking en la cuenca Pérmica de EE. UU. no obedece solo a razones fiscales, sino también ambientales, sanitarias, humanitarias, sociales y de sostenibilidad, en un contexto nacional con indicadores económicos favorables.',
  contenido: [
    'La decisión del gobierno de vender operaciones de fracking en EE. UU. ha sido presentada en algunos titulares como una pérdida fiscal, reducida al monto económico que deja de percibir la Nación. Sin embargo, la medida se fundamenta en criterios mucho más amplios que trascienden el aspecto financiero.',
    'En primer lugar, se consideran los impactos ambientales asociados a la explotación y el consumo de combustibles fósiles. Colombia, como otros países, enfrenta la presión de mitigar el cambio climático y cumplir compromisos internacionales que apuntan a reducir las emisiones de gases de efecto invernadero.',
    'En segundo lugar, el gobierno argumenta la necesidad de atender factores de salud pública. La contaminación del aire derivada del uso de combustibles fósiles está relacionada con enfermedades respiratorias y cardiovasculares, lo que genera costos humanos y económicos que superan la ganancia inmediata por regalías e impuestos.',
    'La medida también responde a razones humanitarias y sociales: disminuir la dependencia del petróleo es parte de un enfoque de sostenibilidad que busca proteger a comunidades vulnerables, preservar territorios y garantizar una transición energética justa.',
    'Finalmente, el presidente plantea que la decisión debe leerse como un paso hacia la sostenibilidad de la especie humana en el largo plazo. Reducir la dependencia de los hidrocarburos no solo protege el ambiente, sino que fortalece la capacidad del país para diversificar su economía y garantizar el bienestar de las próximas generaciones.',
    'Este ha sido el primer gobierno que, mientras defiende todo lo que favorece a la salud humana, ha logrado mantener un balance en materia económica. Con algunas dificultades, las cifras muestran crecimiento económico sostenido, reducción del desempleo, recuperación del turismo, aumento de las exportaciones de café y mejoras en otros indicadores. Estos resultados desmienten las narrativas de sectores opositores y de quienes expresaban temores sobre la política del presidente en relación con el petróleo.',
    'Fuentes citadas:',
    '1) DANE. *Indicadores de mercado laboral* (desempleo y ocupación). https://www.dane.gov.co/index.php/estadisticas-por-tema/mercado-laboral',
    '2) Banco de la República. *Informe de política monetaria* (crecimiento económico). https://www.banrep.gov.co/es/informe-politica-monetaria',
    '3) Ministerio de Comercio, Industria y Turismo. *Informe de turismo receptivo*. https://www.mincit.gov.co',
    '4) Federación Nacional de Cafeteros. *Informe de exportaciones*. https://federaciondecafeteros.org',
    '5) Ministerio de Ambiente y Desarrollo Sostenible. *Estrategia de transición energética*. https://www.minambiente.gov.co',
    '6) Organización Mundial de la Salud (OMS). *Contaminación del aire y salud*. https://www.who.int/es/health-topics/air-pollution',
    '7) Naciones Unidas. *Agenda 2030 para el Desarrollo Sostenible*. https://sdgs.un.org/es/2030agenda'
  ],
  etiquetas: ['colombia','petróleo','economía','salud','sostenibilidad','medio ambiente'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250916-01'
},
{
  id: 'descertificacion-colombia-eeuu-reacciones-2025-09-16',
  fecha: '2025-09-16',
  titulo: 'Reacciones a la descertificación de Colombia por parte de Estados Unidos',
  pais: 'Colombia',
  resumen: 'La decisión de Estados Unidos de descertificar a Colombia en materia de lucha antidrogas provocó la reacción del senador Iván Cepeda y múltiples comentarios en redes sociales, donde se cuestionó la estrategia internacional y se plantearon críticas desde distintas perspectivas.',
  contenido: [
    'El senador Iván Cepeda Castro afirmó este 16 de septiembre que la descertificación de Colombia por parte de Estados Unidos confirma “el fracaso de la guerra global contra las drogas impuesta por Estados Unidos”. Señaló que se trata de una decisión política que refleja una doble moral, dado que mientras crece el consumo en países desarrollados, Colombia continúa pagando altos costos sociales y económicos.',
    'Cepeda agregó que miles de vidas se han perdido, se han dilapidado recursos públicos y se ha profundizado la degradación institucional como consecuencia de una estrategia que, en su opinión, fue diseñada e impuesta desde el exterior. Llamó a que Estados Unidos asuma su responsabilidad en esta guerra fallida, cuyas consecuencias más graves han recaído sobre países productores como Colombia.',
    'La publicación del senador en redes sociales generó cientos de reacciones (194, al momento de esta publicación). Entre los comentarios, @ferdiadiaz2000 aludió al papel del lobby político en Estados Unidos. Por su parte, @Diotima81474120 afirmó que no se trata solo de doble moral, sino de un negocio que produce “mucho dinero y poder”.',
    'Otros usuarios respaldaron directamente la postura de Cepeda. @Alfonso19742009 señaló “Bien dicho Cepeda, así se habla”, mientras que @aarangob11 destacó que su postura refuerza la soberanía del país bajo el gobierno actual. En el mismo sentido, @JimmyPsicol calificó su análisis de “argumentos veraces”.',
    'Algunos comentarios se enfocaron en factores internacionales. @luisamhenao consideró que el apoyo de Colombia a Gaza pudo influir en la decisión, mientras que @maritza_serrano señaló que Estados Unidos no ha reducido su consumo interno y calificó la descertificación como una decisión política contra el presidente Gustavo Petro. @ClaO969 añadió que puede ser una oportunidad para desligarse de la dependencia con EE. UU.',
    'Hubo también señalamientos sobre vínculos financieros. @Antocortes2014 cuestionó la presencia de bases militares estadounidenses en Colombia, mientras que @Leonard80338296 preguntó por el dinero del narcotráfico que se lava en bancos extranjeros y el oro ilegal que entra a Estados Unidos. @diesco7 indicó que, siendo parte del problema, EE. UU. no tiene autoridad moral para sancionar y que debería intervenir un tribunal internacional.',
    'Algunos usuarios relacionaron la medida con actores internos. @AlbaCorts5 escribió que Colombia solo será certificada cuando se enfrenten estructuras vinculadas al narcotráfico en el país. En la misma línea, @edosp38 cuestionó la presencia de bases extranjeras, y @LuisaPoncas compartió cifras sobre el mercado global de la cocaína, estimado en entre 100 y 400 mil millones de dólares anuales, del cual Colombia recibe una fracción menor.',
    'Otros plantearon alternativas y oportunidades. @noroornforitems sugirió aprovechar la coyuntura para fortalecer la industria militar y de defensa nacional mediante acuerdos internacionales. Finalmente, @LordBacano contrastó la lucha antidrogas de Estados Unidos con la de Colombia, destacando la magnitud de las incautaciones en territorio colombiano.',
    'Las diversas reacciones reflejan un amplio debate público en torno a la descertificación, en el que se cruzan críticas a la política internacional antidrogas, cuestionamientos al papel de Estados Unidos y llamados a replantear la estrategia nacional.'
  ],
  etiquetas: ['colombia','estados unidos','politica','narcotrafico','ivan cepeda'],
  fuente: { nombre: 'Iván Cepeda Castro', url: 'https://twitter.com/IvanCepedaCast' },
  url_fuente: 'https://x.com/IvanCepedaCast/status/1967795029415510441',
  consecutivo_unico: '20250916-02'
},
{
id: 'acuerdo-comercial-eeuu-ue-2025-09-16',
fecha: '2025-09-16',
titulo: 'El nuevo marco comercial entre Estados Unidos y la Unión Europea: energía, defensa y escenarios',
pais: 'Internacional',
resumen: 'Estados Unidos y la Unión Europea anunciaron en julio-agosto de 2025 un marco de acuerdo comercial que fija aranceles recíprocos, amplía compromisos energéticos con proveedores estadounidenses y señala intenciones de cooperación en defensa. Aunque algunos lo interpretan como una presión política, fuentes europeas subrayan que no existen obligaciones legales de compra masiva de armas o energía, sino compromisos políticos y decisiones soberanas país por país.',
contenido: [
'El 27 y 28 de julio de 2025, Estados Unidos y la Unión Europea presentaron un marco de acuerdo que establece un arancel general del 15% a las exportaciones europeas hacia EE.UU. y mantiene tarifas más altas en sectores sensibles como acero y aluminio. La Comisión Europea lo describió como una medida para estabilizar las relaciones y evitar una escalada arancelaria, mientras que la Casa Blanca lo calificó de un acuerdo “recíproco, justo y equilibrado”.',

'Uno de los puntos más controvertidos es la energía. Según datos de Eurostat y la Agencia Internacional de Energía, en 2024 Estados Unidos suministró el 45% del gas natural licuado (GNL) importado por la UE, y en el primer trimestre de 2025 la cuota subió a 50,7%. La declaración conjunta menciona la intención europea de elevar las compras de energía estadounidense hasta 750.000 millones de dólares para 2028, pero especialistas como CEPS y Bruegel advierten que esa cifra es poco realista y dependerá de precios, infraestructura y objetivos climáticos.',

'En materia de defensa, el acuerdo no fija obligaciones de compra concretas. La OTAN había acordado previamente en su cumbre de La Haya de junio de 2025 que los aliados destinaran hasta un 5% del PIB a defensa hacia 2035. Países como Alemania, Italia y Países Bajos ya habían confirmado compras de aviones F-35, mientras Francia y España optaron por reforzar sus programas europeos como Rafale y Eurofighter. Polonia, por su parte, ha acelerado desde 2022 adquisiciones de Abrams, HIMARS y Patriot con fuerte participación estadounidense. Estas decisiones responden a políticas nacionales y compromisos OTAN, no al marco comercial.',

'El análisis por país muestra un panorama diverso: Alemania combina compras de F-35 con contratos energéticos de GNL; Francia mantiene autonomía industrial en defensa y contratos energéticos diversificados; Italia expande su programa F-35 y terminales de regasificación; Países Bajos aumentan su flota F-35 dentro de OTAN; España refuerza Eurofighter y es hub de regasificación; Polonia se rearma con fuerte presencia estadounidense en su arsenal. Ninguno de estos movimientos está directamente obligado por el acuerdo UE-EE.UU.',

'Organismos europeos como el Servicio Europeo de Acción Exterior (EEAS) y la Dirección General de Comercio (DG Trade) subrayan que el marco de julio-agosto de 2025 es político y requiere implementación conforme a los procedimientos internos de la UE y de los Estados miembros. Think tanks como el Consejo de Relaciones Exteriores (CFR), SIPRI y Bruegel señalan que más que una cesión de soberanía, se trata de un reacomodo estratégico para ganar previsibilidad en comercio, reforzar la seguridad energética y aumentar el gasto en defensa bajo parámetros de la OTAN.',

'Entre los escenarios posibles están: 1) una implementación parcial y flexible de los compromisos energéticos y comerciales; 2) litigios o tensiones si EE.UU. impone más aranceles unilaterales; y 3) una profundización selectiva en áreas digitales, cadenas críticas y control de inversiones. En todos los casos, las compras de armas y energía seguirán siendo negociadas caso por caso y sujetas a decisiones nacionales.',

'En conclusión, aunque el marco comercial ha sido interpretado como una negociación bajo presión, la evidencia oficial europea indica que no existen obligaciones jurídicas para compras masivas de armas o energía en EE.UU. Lo que sí existe es un contexto de mayor dependencia energética y un compromiso de elevar el gasto militar en Europa, donde cada país define su propio mix entre proveedores estadounidenses, europeos y otros aliados.'
],
etiquetas: ['economía','estados unidos','unión europea','energía','defensa','otan'],
fuente: 'Noticias Neutrales'
},
{
  id: 'moconomy-gmbh-produccion-documentales-2025-09-16',
  fecha: '2025-09-16',
  titulo: 'Moconomy GmbH: productora alemana de documentales con proyección internacional',
  pais: 'Alemania',
  resumen: 'Moconomy GmbH es una compañía alemana especializada en la producción y distribución de documentales y películas, con presencia en varias ciudades europeas. Sus contenidos se publican bajo licencia en plataformas digitales y canales propios, como parte de una estrategia que combina acceso global y distribución regulada.',
  contenido: [
    'Moconomy GmbH tiene su base en Alemania y desarrolla contenidos audiovisuales centrados en documentales y películas de corte social, económico y cultural. La empresa opera a través de un modelo de producción descentralizado, con equipos y colaboradores en distintas ciudades de Europa.',
    'Los documentales de Moconomy se distribuyen principalmente mediante su canal en YouTube y otras plataformas digitales, donde alcanzan audiencias internacionales. Este enfoque combina la gratuidad para el público con un esquema de licencias que garantiza la propiedad intelectual de los creadores.',
    'La compañía ha consolidado una reputación como proveedor de contenidos de alta calidad en temas relacionados con economía, negocios, tecnología y sociedad. Sus producciones buscan acercar historias complejas a una audiencia global, utilizando un lenguaje audiovisual accesible.',
    'Aunque su actividad se concentra en Europa, la empresa no cuenta aún con presencia directa en Latinoamérica, lo que abre posibilidades de colaboración futura con medios, portales de información y proyectos culturales en la región.'
  ],
  etiquetas: ['medios','documentales','alemania','moconomy gmbh'],
  fuente: { nombre: 'Moconomy GmbH', url: 'https://www.moconomy.tv/' },
  url_fuente: 'https://www.moconomy.tv/',
  consecutivo_unico: '20250916-01'
},
{
  id: 'suiza-millonarios-desigualdad-2025-09-16',
  fecha: '2025-09-16',
  titulo: 'Suiza: alta densidad de millonarios y desigualdad de ingresos moderada',
  pais: 'Suiza',
  resumen: 'Informes recientes confirman que Suiza es el país con mayor densidad de millonarios por adulto, aunque el índice de Gini de ingresos se mantiene en niveles moderados y la pobreza afecta a una minoría de la población.',
  contenido: [
    'El informe Global Wealth Report 2025 de UBS confirma que Suiza figura —junto con Luxemburgo— como el país con mayor densidad de millonarios en dólares entre los 56 mercados analizados. El documento señala explícitamente que la mayor proporción de millonarios por adulto está “una vez más” en Suiza y Luxemburgo. En 2024, Suiza volvió a quedar ligeramente por delante de Luxemburgo en esa métrica. Ahora bien, “un millonario por cada cinco habitantes” no es lo que muestran las fuentes serias. UBS y medios financieros que resumen el informe hablan de “más de uno de cada siete adultos” como umbral de referencia para Suiza (es decir, algo superior al 14% de los adultos, no 20% de la población total). Es una proporción muy elevada, pero menor que “uno de cada cinco habitantes” y, además, la comparación correcta es por adultos (no por toda la población).',
    'En materia de ingreso disponible equivalente, la Oficina Federal de Estadística (FSO) reporta que el índice de Gini de Suiza fue 31,5 en 2023 (sin renta imputada de la vivienda). Este nivel sitúa a Suiza en la banda de desigualdad moderada dentro de la OCDE. Además, la misma estadística oficial muestra que el 10% de los residentes tenía en 2023 un ingreso disponible equivalente inferior a 26.086 francos suizos al año, lo que ayuda a dimensionar la base de ingresos bajos en el país pese a los altos promedios.',
    'Según la FSO, la tasa de pobreza por ingresos fue del 8,1% en 2023 (renta 2022), equivalente a unas 708.000 personas. La pobreza afecta con mayor frecuencia a hogares monoparentales, personas sin empleo y con menor cualificación. En paralelo, Suiza mantiene niveles de ingreso mediano elevados en comparación europea: la FSO estima para 2023 una mediana de ingreso disponible equivalente de 28.247 francos suizos (metodología armonizada), dato que robustece el diagnóstico de nivel de vida alto para la mayoría, aunque persisten bolsillos de vulnerabilidad. Medios públicos suizos sintetizan estas tendencias: país muy rico, pobreza estable en torno al 8%, y fuertes diferencias entre grupos sociodemográficos.',
    'Varios pilares de política pública y estructura económica ayudan a explicar el fenómeno: el sistema de pensiones de tres pilares (AVS/AHV estatal, previsión profesional obligatoria y ahorro privado). Los dos primeros son obligatorios y buscan asegurar primero la subsistencia y luego mantener el nivel de vida en la vejez. Este andamiaje estabiliza ingresos a lo largo del ciclo vital y reduce desigualdades en la vejez. Además, la formación profesional dual y fuerte vinculación educación-empleo facilitan transiciones rápidas al empleo cualificado y salarios relativamente altos desde edades tempranas. A ello se suma una economía abierta, especializada y diversificada (finanzas, farmacéutica, maquinaria de precisión, bienes de lujo), con altas remuneraciones y productividad, que elevan el ingreso disponible medio y sostienen una base fiscal capaz de financiar redes de protección social.',
    'La alta densidad de millonarios convive con desigualdad de ingresos contenida para estándares internacionales. Esto sugiere que, aunque la riqueza patrimonial esté muy concentrada, la distribución del ingreso anual disponible —que es lo que define el estilo de vida cotidiano— se mantiene relativamente cohesiva tras impuestos y transferencias. El contraste entre concentración de riqueza y Gini de ingresos moderado es una pauta que también reconoce la literatura internacional: la desigualdad de riqueza suele ser bastante mayor que la de ingresos.',
    'En conclusión, la frase “un millonario por cada cinco habitantes” no se ajusta a las cifras más recientes y fiables: la referencia correcta es “más de uno de cada siete adultos” con patrimonio igual o superior a un millón de dólares; aun así, Suiza sigue siendo el líder mundial en densidad de millonarios. En términos de ingresos, Suiza presenta desigualdad moderada (Gini 31,5 en 2023), tasas de pobreza bajas a escala internacional (8,1%) y medianas de ingreso elevadas, consistentes con un estilo de vida digno para la mayoría, aunque persisten grupos vulnerables. Entre los factores estructurales destacan el sistema de pensiones obligatorio de tres pilares, la formación profesional dual y un tejido productivo de alta productividad y salarios, que en conjunto contienen la desigualdad de ingresos y elevan el piso de bienestar.',
    'Fuentes citadas:',
    'UBS – Global Wealth Report 2025: https://www.ubs.com/global/en/family-office-uhnw/reports/global-wealth-report.html',
    'Oficina Federal de Estadística de Suiza (FSO) – Estadísticas de ingresos y pobreza: https://www.bfs.admin.ch/bfs/en/home/statistics/economic-social-situation-population/income-consumption-wealth/income-equivalence-equivalent.html'
  ],
  etiquetas: ['economía','suiza','desigualdad','millonarios'],
  fuente: 'LedeLab',
  consecutivo_unico: '20250916-01'
},
{
  id: 'haier-compra-ge-appliances-2016',
  fecha: '2025-09-16',
  titulo: 'Cómo Haier compró la división de electrodomésticos de General Electric',
  pais: 'China',
  resumen: 'El documental relata cómo Haier pasó de ser una fábrica china al borde del colapso en los años 80 a adquirir en 2016, por 5.600 millones de dólares, el histórico negocio de electrodomésticos de General Electric, apoyándose en una transformación cultural hacia la calidad, microempresas internas y el Internet de las Cosas.',
  contenido: [
    'En 2016, Haier adquirió por 5.600 millones de dólares la unidad de electrodomésticos de General Electric (GE Appliances), una marca con más de un siglo en los hogares estadounidenses. La operación llegó después del intento fallido de venta a Electrolux en 2014 por objeciones de competencia, en un momento en que GE priorizaba negocios como el financiero y el aeroespacial.',
    'La transformación de Haier se remonta a los años 80 bajo el liderazgo de Zhang Ruimin, quien vinculó remuneración con desempeño y estableció una cultura de calidad. Un hecho simbólico fue la destrucción de 76 refrigeradores defectuosos, con el mensaje de tolerancia cero a las fallas. A partir de 2005, la compañía dividió a más de 60.000 empleados en más de 1.000 microempresas (modelo Rendanheyi), con autonomía y responsabilidad directa frente al cliente.',
    'Esta movida audaz de Zhang Ruimin al crear microempresas internas buscaba combatir la burocracia y conectar a cada trabajador directamente con el mercado. Bajo el modelo Rendanheyi, todos los empleados debían actuar como emprendedores, lo que permitió acelerar la innovación y dar lugar a proyectos como plataformas de pedidos electrónicos o nuevas líneas de electrodomésticos.',
    'Zhang Ruimin señaló que el modelo Rendanheyi sería aceptado porque se basa en respetar al individuo: colocar a la persona en primer lugar y ofrecerle la oportunidad de emprender libera su potencial y favorece una innovación sostenible dentro de la organización.',
    'GE Appliances, heredera de innovaciones como el refrigerador “Monitor Top” de 1927, había perdido prioridad estratégica dentro del conglomerado desde los años 80. Para Haier, la compra ofrecía una marca con arraigo y una red de distribución consolidada en Estados Unidos, mercado en el que, pese a ingresar en 1999, mantenía una baja participación.',
    'Tras el cierre, GE Appliances conservó autonomía y comenzó a adoptar microempresas internas. La unidad de lavandería, por ejemplo, pasó de pérdidas a ganancias en un año. En paralelo, Haier impulsó la apuesta por IoT en electrodomésticos conectados y la innovación abierta a través de FirstBuild, donde surgió el Kitchen Hub, galardonado como producto innovador en el CES 2018.',
    'El desafío posterior fue convertir a GE Appliances en una marca verdaderamente global —tradicionalmente enfocada en Estados Unidos—, fortalecer la relación directa con usuarios y competir en el ecosistema del hogar conectado frente a actores tecnológicos como Apple, Google y Amazon, manteniendo al tiempo el enfoque en calidad y cercanía al mercado.'
  ],
  etiquetas: ['economía', 'tecnología', 'estados unidos','China'],
  fuente: { nombre: 'Moconomy TV (Moconomy GMBH)' },
  url_fuente: 'https://www.youtube.com/watch?v=xL1DCv4iSSw'
},
{
  id: 'tribunal-suspende-nombramiento-juan-carlos-florian-ministra-igualdad-2025-09-15',
  fecha: '2025-09-16',
  titulo: 'Tribunal suspende nombramiento de Juan Carlos Florián como ministra de Igualdad',
  pais: 'Colombia',
  resumen: 'El Tribunal Administrativo de Cundinamarca suspendió de manera provisional el nombramiento de Juan Carlos Florián como ministra de Igualdad y Equidad, en medio de cuestionamientos legales y del debate sobre su identidad de género fluido.',
  contenido: [
    'El Tribunal Administrativo de Cundinamarca ordenó la suspensión provisional del nombramiento de Juan Carlos Florián como ministra de Igualdad y Equidad. La medida responde a una demanda que alega posibles inhabilidades en su designación como jefe de cartera.',
    'Florián, representante a la Cámara por el departamento del Meta, fue nombrado recientemente al frente del Ministerio de Igualdad. Su designación generó debate público y acciones judiciales por presunto incumplimiento de la Ley de Cuotas que regula la participación de mujeres en altos cargos del Ejecutivo.',
    'En su defensa, Florián se identificó como persona de género fluido y pidió ser tratado en femenino, solicitando que se le llame ministra. Argumentó que no se le puede clasificar dentro del esquema binario hombre-mujer para efectos de la cuota de género, lo que forma parte central de su estrategia jurídica ante el tribunal.',
    'Como parte de las pruebas, el funcionario presentó mensajes personales en los que se refiere a sí mismo en femenino y manifestó que su identidad no se ajusta a las categorías tradicionales. El caso abre un debate sobre la manera en que las normas de paridad de género se aplican frente a identidades trans y no binarias en la administración pública.',
    'La suspensión es una medida cautelar que no implica destitución definitiva, pero que congela los efectos de su nombramiento hasta que el tribunal decida de fondo sobre la legalidad del proceso.',
    'Fuente citada:',
    'https://elpais.com/america-colombia/2025-09-15/un-tribunal-suspende-el-nombramiento-de-juan-carlos-florian-en-el-ministerio-de-la-igualdad.html'
  ],
  etiquetas: ['colombia','ministerio de la igualdad','juan carlos florián','justicia','género'],
  fuente: { nombre: 'El País', url: 'https://elpais.com/america-colombia/2025-09-15/un-tribunal-suspende-el-nombramiento-de-juan-carlos-florian-en-el-ministerio-de-la-igualdad.html' },
  url_fuente: 'https://elpais.com/america-colombia/2025-09-15/un-tribunal-suspende-el-nombramiento-de-juan-carlos-florian-en-el-ministerio-de-la-igualdad.html'
},
{
  id: 'alocucion-petro-nueva-eps-2025-09-15',
  fecha: '2025-09-16',
  titulo: 'Alocución del presidente Gustavo Petro sobre la Nueva EPS',
  pais: 'Colombia',
  resumen: 'El presidente Gustavo Petro presentó una alocución sobre la crisis de la Nueva EPS, revelando hallazgos de la Contraloría y reafirmando que el Gobierno no destinará recursos extraordinarios para salvar a la entidad.',
  contenido: [
    'El presidente de la República, Gustavo Petro Urrego, dirigió un mensaje a la nación el 12 de septiembre de 2025 en el que abordó la situación de la Nueva EPS, tras los hallazgos de la Contraloría General sobre facturas no reportadas y deudas ocultas por cerca de 5 billones de pesos.',
    'Según Petro, la entidad presentó balances diferentes al Ministerio de Salud y a la Superintendencia Nacional de Salud, lo que impidió acciones oportunas de intervención. Los estados financieros maquillados ocultaban la magnitud de las obligaciones pendientes, mientras los costos se dispararon en 2023.',
    'El mandatario explicó que el Gobierno ha implementado el giro directo a hospitales y clínicas en las EPS intervenidas, evitando la intermediación que facilitó desvíos y retrasos en los pagos. También destacó que los recursos de aseguramiento han crecido de manera sostenida en 2023 y 2024, sin que esto haya evitado prácticas irregulares.',
    'Petro reiteró que el sistema de intermediación de recursos no funciona y debe ser reemplazado por un modelo en el que las IPS reciban directamente el dinero para la atención de pacientes. Además, subrayó que la política pública de salud ya está mostrando mejoras en indicadores de mortalidad infantil y materna.',
    'Finalmente, el presidente fue enfático en que su Gobierno no entregará más recursos a la Nueva EPS ni a otras entidades en crisis, más allá de lo que la ley ordena por concepto de la Unidad de Pago por Capitación (UPC) y rubros similares. Según sus palabras, destinar recursos extraordinarios para “salvar” a estas entidades no soluciona el problema estructural y pondría en riesgo el balance fiscal de la nación.'
  ],
  etiquetas: ['colombia','salud','gustavo petro','nueva eps'],
  fuente: 'Presidencia de la República',
  url_fuente: 'https://www.youtube.com/watch?v=2ru8no7kKCA'
},
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
  titulo: 'El Caminante: redescubriendo la ciudad a través de mis recorridos a pie',
  pais: 'colombia',
  resumen: 'El Caminante surge de mis caminatas por Barranquilla, con la intención de visibilizar los retos cotidianos que enfrentamos al andar y abrir una reflexión sobre movilidad, salud y convivencia urbana.',
  contenido: [
    'El Caminante es una nueva sección editorial impulsada por Noticias Neutrales que nace de mis recorridos reales por las calles de Barranquilla. En estas caminatas he encontrado obstáculos, contradicciones e incluso peligros que enfrentamos quienes decidimos desplazarnos a pie. A partir de estas experiencias personales quiero explorar, documentar y reflexionar sobre la ciudad vista desde el andén.',
    
    'Las preguntas que me acompañan en cada trayecto son simples pero reveladoras: ¿Cómo se transforma la ciudad cuando la recorremos a pie? ¿Qué tipo de aceras, sombras o señalización hacen que caminar sea una opción segura y digna? ¿Qué decisiones individuales y colectivas están detrás del abandono del espacio peatonal en favor del vehículo particular?', 

    'Una de las primeras reflexiones que inspiró esta sección fue observar cómo una obra de renovación vial, pensada quizás desde la estética o la accesibilidad vehicular, terminó generando un piso resbaladizo con la lluvia. Ese detalle, aparentemente menor, se convirtió en un riesgo real para el caminante. Situaciones similares se repiten en zonas residenciales y comerciales de muchas ciudades colombianas.',

    'Más allá de las quejas, mi propósito con El Caminante es generar un espacio de análisis constructivo y pedagógico. A través de notas breves, registros audiovisuales y conversaciones espontáneas, espero ir construyendo un archivo vivo del espacio urbano desde la perspectiva del peatón. También quiero abrir debates culturales: por ejemplo, la relación entre vestimenta formal y resistencia a caminar, o la dependencia del automóvil incluso para trayectos cortos.',

    'Caminar no debería ser solo una necesidad, sino también una posibilidad transformadora: saludable, económica, ecológica y profundamente humana. Esa es la invitación que quiero hacer con cada recorrido narrado en esta sección.',

    'El proyecto se desarrolla inicialmente en Barranquilla, pero mi aspiración es que pueda extenderse a otras ciudades de Colombia y América Latina. También está abierto a la colaboración: cualquier caminante que desee documentar su entorno, así como aportes desde arquitectura, urbanismo, salud pública o cultura ciudadana, tendrá un espacio en este ejercicio colectivo de mirar la ciudad desde los pies.'
  ],
  etiquetas: ['colombia', 'estilo de vida', 'movilidad', 'urbanismo', 'el caminante'],
  fuente: 'Noticias Neutrales',
  idioma_original: 'es'
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
  etiquetas: ['colombia', 'política', 'unión patriótica','ivan cepeda','pacto histórico'],
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
  etiquetas: ['colombia', 'política', 'elecciones', 'pacto histórico'],
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