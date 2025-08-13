export type Fuente = string | { nombre: string; url?: string }

// Campos requeridos
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
  id: 'lanzamiento-portal-noticias-neutrales-ledelab-group-ou-2025-08-13',
  fecha: '2025-08-13',
  titulo: 'LedeLab Group OU lanza portal de noticias neutrales',
  pais: 'Internacional',
  resumen: 'LedeLab Group OÜ presentó oficialmente su nuevo portal de Noticias Neutrales, una plataforma digital para difundir información verificada y libre de sesgos, con prioridad en la cobertura de países seleccionados.',
  contenido: [
    'LedeLab Group OÜ presentó oficialmente su nuevo portal de Noticias Neutrales, una plataforma digital diseñada para ofrecer información verificada y libre de sesgos. El proyecto busca recopilar y presentar hechos relevantes de actualidad, priorizando fuentes oficiales y medios reconocidos por su credibilidad.',
    'El portal organiza las noticias en orden cronológico y aplica un formato uniforme que responde a las preguntas clave de toda cobertura: qué, quién, cuándo, dónde, por qué y cómo. En su selección diaria, se dará prioridad a países como Colombia, Estados Unidos, Canadá, Estonia, Ecuador, Guatemala, Argentina, Perú, Panamá y Costa Rica, así como a otros de interés estratégico como China, Alemania, Corea del Sur, Líbano, España, Portugal y Sudáfrica.',
    'La iniciativa forma parte de la estrategia de LedeLab Group OU de promover el acceso a información precisa y estructurada, evitando titulares sensacionalistas y preservando la neutralidad editorial. El portal ya se encuentra disponible y se actualizará diariamente con noticias de alcance nacional e internacional.'
  ],
  etiquetas: ['Medios', 'Tecnología', 'Lanzamiento'],
  consecutivo_unico: '20250813-01'
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
  etiquetas: ['Política', 'Encuestas', 'Gustavo Petro', 'Colombia', 'Opinión Pública'],
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
  etiquetas: ['economía', 'consumo', 'indicadores', 'Colombia'],
  fuente: 'El Espectador',
  url_fuente: 'https://www.elespectador.com/economia/confianza-del-consumidor-en-colombia-sube-a-su-nivel-mas-alto-en-13-meses/',
  consecutivo_unico: '20250813-01'
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
  consecutivo_unico: '20250813-01'
}


];
