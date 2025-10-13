// src/data/flex84.gallery.ts

export type F84Categoria =
  | "espacio"
  | "procesos"
  | "reuniones"
  | "acondicionamiento"
  | "concepto"

export type F84Foto = {
  id: string
  file: string
  categoria: F84Categoria
  titulo: string
  alt: string
  date?: string
  personas?: string[]
  tags?: string[]
}

export const flex84Gallery: F84Foto[] = [
  {
    id: "f84-00",
    file: "/flex84-img/0-flex-84-pantalla-img_20221104_150109.jpg",
    categoria: "espacio",
    titulo: "Pantalla de bienvenida Flex 84",
    alt: "Sala principal con televisor mostrando el logo de Flex 84",
    date: "2022-11-04",
    tags: ["pantalla", "espacio"]
  },
  {
    id: "f84-01",
    file: "/flex84-img/1-jose-presentando-con-guillo-img_20221105_093613.jpg",
    categoria: "procesos",
    titulo: "Revisión de planos",
    alt: "Presentación técnica con planos en pantalla",
    date: "2022-11-05",
    personas: ["José", "Guillermo"],
    tags: ["presentación", "planos"]
  },
  {
    id: "f84-02",
    file: "/flex84-img/2-mesa-con-mi-laptop.jpg",
    categoria: "espacio",
    titulo: "Mesa de trabajo en uso",
    alt: "Portátil abierto y taza sobre la mesa de madera",
    tags: ["cotidiano", "workspace"]
  },
  {
    id: "f84-03",
    file: "/flex84-img/3-img_20220922_100248.jpg",
    categoria: "espacio",
    titulo: "Detalle de ventana y reja",
    alt: "Reja metálica y texturas del muro exterior",
    date: "2022-09-22",
    tags: ["detalle", "materiales"]
  },
  {
    id: "f84-04",
    file: "/flex84-img/4-guillo-medida-puerta-cocina-img_20221020_092821.jpg",
    categoria: "acondicionamiento",
    titulo: "Medición de vano",
    alt: "Persona tomando medidas con cinta métrica en pasillo",
    date: "2022-10-20",
    personas: ["Guillermo"],
    tags: ["mejoras", "medición"]
  },
  {
    id: "f84-05",
    file: "/flex84-img/5-juan-pucini-nova-energy-img_20221021_101257.jpg",
    categoria: "procesos",
    titulo: "Demo de termostato inteligente",
    alt: "Expositor mostrando termostato inteligente en pantalla",
    date: "2022-10-21",
    personas: ["Juan Pucini"],
    tags: ["iot", "energía"]
  },
  {
    id: "f84-06",
    file: "/flex84-img/6-guillo-presenta-hija-y-mirna.jpg",
    categoria: "procesos",
    titulo: "Propuesta espacial en 3D",
    alt: "Render arquitectónico mostrado al equipo",
    tags: ["render", "arquitectura"]
  },
  {
    id: "f84-07",
    file: "/flex84-img/7-july-guillo-coworking-img_20221027_084236.jpg",
    categoria: "procesos",
    titulo: "Briefing de proyecto",
    alt: "Equipo reunido frente a la pantalla durante presentación",
    date: "2022-10-27",
    tags: ["proyecto", "colaboración"]
  },
  {
    id: "f84-08",
    file: "/flex84-img/8-grupo-cluster-ultima-reu-halloweenimg_20221031_155042.jpg",
    categoria: "reuniones",
    titulo: "Reunión del clúster (Halloween)",
    alt: "Foto grupal alrededor de la mesa en ambiente informal",
    date: "2022-10-31",
    tags: ["comunidad", "cluster"]
  },
  {
    id: "f84-09",
    file: "/flex84-img/9-yo-tv-fachada-f84-img_20221104_142659.jpg",
    categoria: "espacio",
    titulo: "Operación diaria en sala",
    alt: "Trabajo individual con portátil y pantalla al fondo",
    date: "2022-11-04",
    tags: ["cotidiano", "sala"]
  },
  {
    id: "f84-10",
    file: "/flex84-img/10-sala-coworking-tc-f84-img_20221104_150134.jpg",
    categoria: "espacio",
    titulo: "Vista general de sala coworking",
    alt: "Vista completa de la sala con televisor al fondo y alfombra",
    date: "2022-11-04",
    tags: ["coworking", "espacio"]
  },
  {
    id: "f84-11",
    file: "/flex84-img/11-moho-callejon-img_20220922_100228.jpg",
    categoria: "acondicionamiento",
    titulo: "Condición de muro exterior",
    alt: "Textura de muro con presencia de humedad en el callejón",
    date: "2022-09-22",
    tags: ["mantenimiento", "humedad"]
  },
  {
    id: "f84-12",
    file: "/flex84-img/12-jose-guillo-en-coworking.jpg",
    categoria: "procesos",
    titulo: "Trabajo conjunto en coworking",
    alt: "Dos personas trabajando con laptops en la mesa principal",
    tags: ["coworking", "colaboración"]
  },
  {
    id: "f84-13",
    file: "/flex84-img/13-render-f84-tv-vista-no-4.png",
    categoria: "concepto",
    titulo: "Render de propuesta interior",
    alt: "Visualización digital del área de café con logo Flex 84",
    tags: ["render", "proyección"]
  },
  {
    id: "f84-14",
    file: "/flex84-img/14-bosquejo-tablero-f84-img_20221012_112814.jpg",
    categoria: "concepto",
    titulo: "Croquis en tablero",
    alt: "Plano a mano alzada del coworking/showroom en tablero acrílico",
    date: "2022-10-12",
    tags: ["bosquejo", "planificación"]
  },
]

export default flex84Gallery
