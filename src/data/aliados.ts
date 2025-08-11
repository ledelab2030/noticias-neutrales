// src/data/aliados.ts
export type CategoriaAliado =
  | 'Instituciones académicas y de investigación'
  | 'Transferencia de tecnología'
  | 'Cámaras y asociaciones empresariales'
  | 'Aliados internacionales';

export interface Aliado {
  id: string;
  nombre: string;
  categoria: CategoriaAliado;
  pais: string;
  url?: string;
  descripcion: string;
  etiquetas?: string[];
}

export const aliados: Aliado[] = [
  {
    id: 'universidad-del-atlantico',
    nombre: 'Universidad del Atlántico',
    categoria: 'Instituciones académicas y de investigación',
    pais: 'Colombia',
    descripcion:
      'Servicios de análisis para control de calidad en producción e I+D, fortaleciendo procesos de innovación.',
    etiquetas: ['I+D', 'Control de calidad', 'Laboratorio'],
  },
  {
    id: 'cientech',
    nombre: 'Cientech (Oficina de transferencia)',
    categoria: 'Transferencia de tecnología',
    pais: 'Colombia',
    url: 'https://www.cientech.org/quienes-somos/',
    descripcion:
      'Apoyo a través del programa Retatech e invitación a un taller sobre redacción de patentes. De esta colaboración surgieron recursos del Estado colombiano con los que se aplicaron a cuatro patentes de los inventores Leonardo De la Hoz Borrego (Fundador de LedeLab Group) y Óscar Mauricio Vargas Bayona (Gerente de la filial I+DE SAS).',
    etiquetas: ['Retatech', 'Patentes', 'Transferencia'],
  },
  {
    id: 'camara-comercio-barranquilla',
    nombre: 'Cámara de Comercio de Barranquilla',
    categoria: 'Cámaras y asociaciones empresariales',
    pais: 'Colombia',
    descripcion:
      'Lidera el clúster de construcción sostenible “Espacios Habitables”. Coordinan programas de innovación en los que participamos desde 2019 a través de Protemad, LedeLab BIC S.A.S. e I+DE S.A.S.',
    etiquetas: ['Clúster', 'Innovación', 'Construcción sostenible'],
  },
  {
    id: 'cccs',
    nombre: 'Consejo Colombiano de Construcción Sostenible (CCCS)',
    categoria: 'Cámaras y asociaciones empresariales',
    pais: 'Colombia',
    descripcion:
      'Aliado indirecto a través del clúster “Espacios Habitables” y vínculo directo desde 2024. Nuestro fundador ingresó como miembro independiente y hace parte del Comité de Educación (enero 2024 – diciembre 2025).',
    etiquetas: ['Sostenibilidad', 'Educación', 'Arquitectura'],
  },

  // Plantilla para aliados internacionales (deja este bloque como guía)
  // {
  //   id: 'aliado-internacional-ejemplo',
  //   nombre: 'Nombre del aliado',
  //   categoria: 'Aliados internacionales',
  //   pais: 'Estonia',
  //   url: 'https://ejemplo.com',
  //   descripcion:
  //     'Descripción breve de la colaboración.',
  //   etiquetas: ['Etiqueta1', 'Etiqueta2'],
  // },
];
