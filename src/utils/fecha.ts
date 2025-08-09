// src/utils/fecha.ts

/**
 * Verifica si la fecha pasada (YYYY-MM-DD) es igual a la fecha actual.
 * @param fecha - Fecha en formato YYYY-MM-DD
 * @returns true si la fecha es hoy, false en caso contrario
 */
export function esHoy(fecha: string): boolean {
  const hoy = new Date().toISOString().split('T')[0]
  return fecha === hoy
}

/**
 * Formatea una fecha en formato YYYY-MM-DD a un formato legible en español.
 * @param fecha - Fecha en formato YYYY-MM-DD
 * @returns Fecha formateada como "D de mes de YYYY"
 */
export function formatearFecha(fecha: string): string {
  const opciones: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(fecha).toLocaleDateString('es-ES', opciones)
}
