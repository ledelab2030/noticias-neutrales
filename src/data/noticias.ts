export type Noticia = {
  id: string
  titulo: string
  resumen: string
  contenido: string
  fecha: string // ISO YYYY-MM-DD
}

export const noticias: Noticia[] = [
  {
    id: 'prueba-filtrado-hoy-2025-08-08',
    titulo: 'Colombia actualiza políticas de salud pública',
    resumen: 'El Ministerio de Salud anunció medidas para fortalecer la atención primaria.',
    contenido: `El 8 de agosto de 2025 el Ministerio de Salud presentó un paquete de reformas orientadas a reforzar la atención primaria...`,
    fecha: '2025-08-08'
  },
  {
    id: 'prueba-filtrado-ayer-2025-08-07',
    titulo: 'Estonia impulsa programa nacional de ciberseguridad',
    resumen: 'El gobierno lanzó un plan estratégico para sectores críticos.',
    contenido: `El 7 de agosto de 2025 el Ministerio de Economía y Comunicaciones presentó su nuevo plan nacional de ciberseguridad...`,
    fecha: '2025-08-07'
  },
  {
  id: 'uprimny-no-es-delito-menor-uribe-2025-08-09',
  titulo: '“No es un delito menor”: Rodrigo Uprimny sobre el caso Álvaro Uribe',
  resumen: 'El jurista Rodrigo Uprimny afirmó que el soborno a testigos y el fraude procesal son delitos graves por su impacto en la justicia. Indicó que puede discutirse la detención inmediata o la duración de la pena, pero no calificarlos como menores ni afirmar que carecen de sustento probatorio.',
  contenido: `¿Qué dijo? Rodrigo Uprimny, investigador de Dejusticia, explicó que el soborno a testigos y el fraude procesal no son delitos menores porque buscan torcer la administración de justicia para perjudicar a un rival político o encubrir acusaciones graves. Destacó que el caso ha sido revisado por varias instancias y que el debate debe centrarse en estándares probatorios y respeto a las decisiones judiciales.

¿Cuándo y dónde? En análisis publicados entre el 3 y 5 de agosto de 2025, Uprimny contextualizó la condena de primera instancia dictada en Bogotá contra Álvaro Uribe. Señaló que la defensa puede apelar, pero la discusión debe diferenciar entre la ejecución inmediata o la cuantía de la pena y la gravedad de las conductas mismas.

¿Por qué importa? Manipular testigos o inducir a error a la justicia afecta la igualdad ante la ley y la confianza pública en las instituciones. Uprimny subrayó que la comparación con beneficios penales otorgados en procesos de paz no aplica, pues aquí se trata de justicia penal ordinaria y de hechos ajenos a la justicia transicional.

Fuentes:
- Rodrigo Uprimny, columna en El Espectador (03/08/2025).
- Rodrigo Uprimny, versión en Dejusticia (05/08/2025).
- Cobertura de prensa sobre sentencia y apelación (agosto de 2025).`,
  fecha: '2025-08-09'
}

]
