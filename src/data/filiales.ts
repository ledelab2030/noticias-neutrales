// src/data/filiales.ts
export interface Filial {
  id: string
  nombre: string
  pais: string
  url?: string
  descripcion: string
  etiquetas?: string[]
}

export const filiales: Filial[] = [
  {
    id: 'imasde',
    nombre: 'I+DE SAS',
    pais: 'Colombia',
    url: 'https://imasde.co',
    descripcion:
      'Aditivos y recubrimientos sostenibles. Investigación y desarrollo.',
    etiquetas: ['I+D', 'Materiales', 'Sostenibilidad'],
  },
  {
    id: 'protemad',
    nombre: 'Grupo Protemad',
    pais: 'Colombia',
    url: 'https://www.grupoprotemad.com',
    descripcion:
      'Protección, tratamiento y mejora de la madera.',
    etiquetas: ['Madera', 'Tratamientos', 'Construcción'],
  },
  {
    id: 'petrocaribe-ingenieria',
    nombre: 'Petrocaribe Ingeniería',
    pais: 'Colombia',
    url: 'https://www.ledelab.co/petrocaribe-ingenieria',
    descripcion:
      'Aditivos químicos para la industria petrolera. Ofrece soluciones en fluidos de control de pozos, estimulación, inyección de agua y recobro mejorado (EOR).',
    etiquetas: ['Energía', 'Estimulación de Pozos', 'Petróleo y Gas','Químicos'],
  },
]
