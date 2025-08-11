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
    url: 'https://grupoprotemad.com',
    descripcion:
      'Protección, tratamiento y mejora de la madera.',
    etiquetas: ['Madera', 'Tratamientos', 'Construcción'],
  },
]
