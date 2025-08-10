// src/data/estilo-de-vida.ts
export type Nota = {
  id: string
  titulo: string
  resumen: string
  contenido: string
  fecha: string        // ISO YYYY-MM-DD
  temas: string[]
  fuente: { nombre: string; url: string }
}

export const estiloDeVida: Nota[] = [
  {
    id: "fructosa-procesada-inflamacion-2025-08-08",
    titulo: "Fructosa procesada: el azúcar que alimenta la inflamación",
    resumen:
      "La fructosa libre en azúcares refinados y jarabes industriales se asocia a inflamación crónica, mientras que la fructosa natural de frutas enteras es beneficiosa.",
    contenido:
      "La fructosa libre presente en azúcares refinados y jarabes como el de maíz alto en fructosa se ha vinculado con respuestas inflamatorias. Priorizar frutas enteras, agua y alimentos mínimamente procesados ayuda a reducir esa carga.",
    fecha: "2025-08-08",
    temas: ["Nutrición", "Prevención", "Alimentación consciente"],
    fuente: {
      nombre: "Food & Wine",
      url: "https://www.foodandwine.com/does-fructose-cause-inflammation-11785966",
    },
  },
  {
    id: "dieta-mediterranea-inflamacion-2025-08-04",
    titulo: "Dieta mediterránea: un aliado efectivo contra la inflamación",
    resumen:
      "Patrón rico en frutas, vegetales, aceite de oliva y pescado con omega-3 que ayuda a reducir la inflamación crónica y protege frente a múltiples enfermedades.",
    contenido:
      "Aceite de oliva virgen extra, legumbres, frutos rojos y pescados grasos son ejes de este patrón alimentario asociado a marcadores inflamatorios más bajos.",
    fecha: "2025-08-04",
    temas: ["Nutrición", "Bienestar", "Prevención"],
    fuente: {
      nombre: "The Washington Post",
      url: "https://www.washingtonpost.com/wellness/2025/08/04/mediterranean-diet-benefits-inflammation/",
    },
  },
  {
    id: "inflamacion-silenciosa-2025-07-26",
    titulo: "Inflamación silenciosa: más allá de un término de moda",
    resumen:
      "La inflamación crónica impacta energía, sueño y piel; un enfoque integral combina nutrición, descanso y movimiento suave.",
    contenido:
      "Programas integrales combinan evaluación clínica, nutrición antiinflamatoria, manejo del estrés y actividad física moderada para abordar causas de base.",
    fecha: "2025-07-26",
    temas: ["Nutrición", "Estrés", "Sueño", "Bienestar"],
    fuente: {
      nombre: "Condé Nast Traveler",
      url: "https://www.cntraveler.com/story/inflammation-is-the-latest-wellness-buzzword",
    },
  },
]
