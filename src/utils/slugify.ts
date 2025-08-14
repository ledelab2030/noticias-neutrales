// src/utils/slugify.ts
export function slugify(str: string) {
  return str
    .normalize("NFD") // separa letras de tildes
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // reemplaza cualquier no-alfanumérico por guion
    .replace(/(^-|-$)/g, ""); // quita guiones al inicio o fin
}

export function unslug(slug: string) {
  return slug.replace(/-/g, " ");
}
