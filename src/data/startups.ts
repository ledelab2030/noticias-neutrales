// src/data/startups.ts
export type EstadoStartup = 'Idea' | 'Prototipo' | 'MVP' | 'Tracción' | 'Escalamiento'

export interface Startup {
  id: string
  nombre: string
  pais: string
  estado: EstadoStartup
  url?: string
  descripcion: string
  etiquetas?: string[]      // verticales: energía, madera, químicos, smart cities...
}

export const startups: Startup[] = [
  // Plantillas de ejemplo:
  // {
  //   id: 'startup-ejemplo',
  //   nombre: 'Startup Ejemplo',
  //   pais: 'Colombia',
  //   estado: 'MVP',
  //   url: 'https://example.com',
  //   descripcion:
  //     'Solución de impacto para el sector de construcción sostenible.',
  //   etiquetas: ['Construcción', 'Sostenibilidad', 'Materiales'],
  // },
]
