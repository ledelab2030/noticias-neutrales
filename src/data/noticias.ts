export type Noticia = {
  id: string
  fecha: string
  pais?: string
  titulo: string
  resumen: string
  contenido: string[]
  etiquetas?: string[]
  fuente?: string
  url_fuente?: string
}

export const noticias: Noticia[] = [
  {
    id: "gaza-bombardeos-israel-2025-08-12",
    fecha: "2025-08-12",
    pais: "Palestina",
    titulo:
      "Israel intensifica bombardeos sobre Gaza; decenas de muertos en 24 horas",
    resumen:
      "Las Fuerzas de Defensa de Israel intensificaron ataques aéreos y de artillería sobre Gaza, causando decenas de muertes en un día, en el marco de la ofensiva en curso.",
    contenido: [
      "¿Qué pasó? El 12 de agosto de 2025, Israel incrementó los bombardeos aéreos y de artillería en múltiples zonas de la Franja de Gaza, dejando decenas de víctimas mortales y numerosos heridos, según reportes oficiales y fuentes médicas locales.",
      "¿Quién y dónde? Las operaciones fueron ejecutadas por las Fuerzas de Defensa de Israel, con objetivos en zonas densamente pobladas, afectando infraestructura civil y residencial. El Ministerio de Salud de Gaza, administrado por Hamas, confirmó la magnitud de las bajas.",
      "¿Por qué importa? El recrudecimiento de la ofensiva se produce en medio de negociaciones estancadas y crecientes denuncias de organismos internacionales sobre el impacto humanitario y posibles violaciones al derecho internacional.",
      "¿Cómo sigue? Israel afirmó que continuará las operaciones hasta neutralizar a Hamas y otros grupos armados, mientras organismos humanitarios solicitan un alto el fuego inmediato."
    ],
    etiquetas: ["Gaza", "Israel", "conflicto", "bombardeos"],
    fuente: "The Guardian",
    url_fuente:
      "https://www.theguardian.com/world/2025/aug/12/israel-intensifies-bombing-of-gaza-dozens-killed-in-24-hours"
  },
  {
    id: "colombia-dialogo-catar-clan-golfo-2025-08-12",
    fecha: "2025-08-12",
    pais: "Colombia",
    titulo: "Catar sería sede de diálogo Gobierno Petro - Clan del Golfo",
    resumen:
      "Fuentes oficiales y diplomáticas indican que Catar podría acoger las conversaciones exploratorias entre el Gobierno colombiano y el Clan del Golfo para un eventual sometimiento colectivo.",
    contenido: [
      "¿Qué pasó? El 12 de agosto de 2025, medios nacionales informaron que Catar es el país escogido para albergar las primeras reuniones entre delegados del Gobierno de Gustavo Petro y representantes del Clan del Golfo.",
      "¿Quién y dónde? La iniciativa es liderada por la Oficina del Alto Comisionado para la Paz y cuenta con acompañamiento internacional. Las reuniones se realizarían en Doha, capital catarí.",
      "¿Por qué importa? El Clan del Golfo es considerado la principal estructura criminal del país, con operaciones en varias regiones. El proceso busca su desmantelamiento y una reducción significativa de la violencia armada.",
      "¿Cómo sigue? El Gobierno prevé formalizar la agenda y los protocolos de negociación en las próximas semanas, condicionados al cese de hostilidades por parte del grupo armado."
    ],
    etiquetas: ["Colombia", "paz", "Clan del Golfo", "Catar"],
    fuente: "El Espectador",
    url_fuente:
      "https://www.elespectador.com/colombia-20/paz-y-memoria/catar-seria-el-pais-donde-gobierno-petro-adelantaria-el-dialogo-con-clan-del-golfo/"
  },
  {
    id: "colombia-leyva-retractacion-petro-2025-08-12",
    fecha: "2025-08-12",
    pais: "Colombia",
    titulo: "Leyva se retracta en diligencia judicial de acusaciones contra Petro",
    resumen:
      "El excanciller Álvaro Leyva se retractó formalmente de declaraciones previas en las que había hecho señalamientos contra el presidente Gustavo Petro.",
    contenido: [
      "¿Qué pasó? En una diligencia judicial celebrada el 12 de agosto de 2025, Álvaro Leyva reconoció que sus declaraciones públicas previas contra el presidente Gustavo Petro carecían de sustento y procedió a retractarse.",
      "¿Quién y dónde? La diligencia se realizó ante autoridad judicial competente en Colombia, como parte de un proceso legal por injuria y calumnia.",
      "¿Por qué importa? La retractación cierra un episodio que había generado tensiones políticas y mediáticas, y podría sentar precedente sobre la responsabilidad de figuras públicas en sus pronunciamientos.",
      "¿Cómo sigue? No se descarta que la retractación facilite acercamientos políticos y disminuya confrontaciones en torno a este caso."
    ],
    etiquetas: ["Colombia", "Álvaro Leyva", "Gustavo Petro", "política"],
    fuente: "La Nueva Prensa",
    url_fuente:
      "https://www.lanuevaprensa.com.co/component/k2/leyva-se-retracto-en-diligencia-judicial-de-sus-acusaciones-publicas-contra-el-presidente-petro"
  },
  {
    id: "colombia-partido-unitario-consulta-2025-08-12",
    fecha: "2025-08-12",
    pais: "Colombia",
    titulo: "Columna: la tarea del momento, partido unitario y consulta popular",
    resumen:
      "Análisis de la coyuntura política en torno a la propuesta de un partido unitario y la consulta popular impulsada por el Gobierno.",
    contenido: [
      "¿Qué pasó? El 12 de agosto de 2025, una columna de opinión en La Nueva Prensa analizó la propuesta de conformar un partido unitario que respalde las reformas sociales promovidas por el presidente Gustavo Petro y la consulta popular prevista.",
      "¿Quién y dónde? El texto fue publicado en La Nueva Prensa, medio digital colombiano, y dirigido al debate político nacional.",
      "¿Por qué importa? La iniciativa de un partido unitario busca consolidar fuerzas políticas en torno a un programa común, mientras la consulta popular se perfila como un instrumento clave para legitimar reformas estructurales.",
      "¿Cómo sigue? El artículo plantea que el éxito de ambas estrategias dependerá de la articulación de liderazgos y la capacidad de movilización ciudadana."
    ],
    etiquetas: ["Colombia", "partido unitario", "consulta popular", "política"],
    fuente: "La Nueva Prensa",
    url_fuente:
      "https://www.lanuevaprensa.com.co/component/k2/la-tarea-del-momento-el-parto-unitario-y-la-consulta-popular"
  },
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
    etiquetas: ["tenis", "ATP Masters 1000", "Cincinnati", "Jannik Sinner", "Gabriel Diallo"],
    fuente: "ATP Tour",
    url_fuente:
      "https://www.atptour.com/es/news/cincinnati-2025-lunes-sinner-diallo"
  }
]
