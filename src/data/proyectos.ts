// src/data/proyectos.ts
export interface Proyecto {
  id: string
  nombre: string
  pais: string
  fecha: string
  descripcion: string
  colaboradores?: string[]
  url?: string
}

export const proyectos: Proyecto[] = [
  {
    id: 'impact-crash-course-ibesi-2023',
    nombre: 'Impact Crash Course & Hackathon IBESI (Estonia, Nov 2023)',
    pais: 'Estonia',
    fecha: '2023-11',
    descripcion:
      'Participación de LedeLab Group OÜ en el hackathon internacional organizado por Baltic Innovation Agency, Katalista Ventures y Reach for Change, como parte del proyecto europeo IBESI. El evento tuvo lugar en noviembre de 2023 en Estonia y reunió a 17 equipos de la región báltica y socios internacionales. LedeLab recibió mentoría de Social Enterprise Estonia y de Katalista Ventures, con un enfoque en fortalecer su propuesta de impacto social y sostenibilidad. La participación incluyó actividades de capacitación, sesiones 1-1 con mentores, desarrollo de un plan de marketing y ventas, y presentación final ante jurado.',
    colaboradores: [
      'Baltic Innovation Agency',
      'Katalista Ventures',
      'Reach for Change',
      'Social Enterprise Estonia',
    ],
    url: 'https://bia.ee/ibesi-replication-toolkit/',
  },
]
