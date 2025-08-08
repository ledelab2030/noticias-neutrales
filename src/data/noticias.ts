export interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  fecha: string; // ISO string, e.g. "2025-08-08"
  pais: string;
}

export const noticias: Noticia[] = [
  {
    id: "1",
    titulo: "Colombia actualiza políticas de salud pública",
    resumen: "El Ministerio de Salud anunció nuevas medidas...",
    contenido: "El Ministerio de Salud anunció nuevas medidas para mejorar la atención primaria...",
    fecha: "2025-08-08",
    pais: "Colombia",
  },
  {
    id: "2",
    titulo: "Estados Unidos lanza programa de innovación tecnológica",
    resumen: "El gobierno estadounidense presentó un fondo para startups...",
    contenido: "Con un fondo de 500 millones de dólares, el gobierno busca incentivar la innovación tecnológica...",
    fecha: "2025-08-07",
    pais: "Estados Unidos",
  },
  // Puedes agregar más noticias aquí...
];
