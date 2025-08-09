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
  id:: 'uprimny-no-es-delito-menor-uribe-2025-08-09',
  titulo: '“No es un delito menor”: Rodrigo Uprimny sobre soborno de testigos y fraude procesal',
  resumen: 'El jurista Rodrigo Uprimny afirmó que los delitos imputados a Álvaro Uribe —soborno a testigos y fraude procesal— son graves por su impacto en la administración de justicia. Señaló que es debatible la detención inmediata o el cálculo de la pena, pero no la seriedad de las conductas ni el carácter probatorio del caso según las instancias.',
  contenido: `¿Qué pasó? El jurista y académico Rodrigo Uprimny sostuvo que el soborno de testigos y el fraude procesal no son conductas menores, pues buscan torcer la administración de justicia. En su más reciente análisis del caso, enfatizó que el expediente ha sido revisado por múltiples instancias y que, aunque la defensa puede apelar, el debate debe centrarse en los estándares probatorios y el respeto a las decisiones judiciales ya adoptadas.

¿Quién y cuándo? Uprimny, investigador de Dejusticia y columnista de El Espectador, publicó el 3 de agosto de 2025 una columna que contextualiza la condena de primera instancia contra Álvaro Uribe. En ella recuerda el recorrido del proceso por varias cortes y juzgados, y plantea que pueden discutirse aspectos como la ejecución inmediata de la pena o su cuantía, pero sin trivializar la gravedad de los delitos analizados.

¿Dónde y cómo? El comentario surge en el marco del juicio seguido en Bogotá, tras la sentencia de primera instancia de la jueza Sandra Heredia que impuso 12 años de prisión domiciliaria por soborno en actuación penal y fraude procesal. El caso está ahora en apelación ante el Tribunal Superior de Bogotá, conforme a los recursos previstos en la ley.

¿Por qué importa? Manipular testigos o inducir a error a la justicia afecta la igualdad ante la ley y la confianza pública en las instituciones. Uprimny argumenta que el escrutinio debe mantener la independencia judicial y evitar lecturas conspirativas del proceso, dado el control interinstitucional que ha tenido el expediente.

Fuentes:
- Columna de Rodrigo Uprimny en El Espectador (03/08/2025). https://www.elespectador.com/opinion/columnistas/rodrigo-uprimny/el-proceso-y-la-condena-de-alvaro-uribe-velez/
- Versión en Dejusticia (05/08/2025). https://www.dejusticia.org/column/el-proceso-y-la-condena-de-alvaro-uribe-velez/
- Contexto de la sentencia y apelación (El País, 01–05/08/2025). https://elpais.com/america-colombia/2025-08-01/lea-aqui-la-sentencia-condenatoria-contra-alvaro-uribe-por-manipulacion-de-testigos.html ; https://elpais.com/america-colombia/2025-08-05/el-tribunal-superior-de-bogota-mantiene-la-detencion-al-expresidente-alvaro-uribe.html`,
  fecha: '2025-08-09'
}
]
