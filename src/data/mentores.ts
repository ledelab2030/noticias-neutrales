// src/data/mentores.ts
export interface Mentor {
  id: string
  nombre: string
  rol: string
  organizacion?: string
  pais?: string
  expertise: string[]        // áreas: I+D, sostenibilidad, negocio, etc.
  bio?: string
  url?: string               // perfil público o LinkedIn
  foto?: string              // /images/mentores/...
}

export const mentores: Mentor[] = [
  // Ejemplos de plantilla (rellenar cuando tengas nombres):
  // {
  //   id: 'nombre-apellido',
  //   nombre: 'Nombre Apellido',
  //   rol: 'Consejero I+D',
  //   organizacion: 'Universidad / Empresa',
  //   pais: 'Colombia',
  //   expertise: ['I+D', 'Materiales', 'Innovación'],
  //   bio: 'Breve descripción (2–3 líneas) del enfoque y aporte del mentor.',
  //   url: 'https://linkedin.com/in/usuario',
  //   foto: '/images/mentores/nombre-apellido.jpg',
  // },
]
