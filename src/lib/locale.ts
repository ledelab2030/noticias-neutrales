// src/lib/locale.ts
export const SUPPORTED = ['es','en','de'] as const
export type Lang = typeof SUPPORTED[number]
export const DEFAULT_LANG: Lang = 'es'

export function normalizeToSupported(input?: string | null): Lang {
  const v = (input ?? '').toLowerCase()
  if (!v) return DEFAULT_LANG
  const base = v.split('-')[0]
  return (SUPPORTED as readonly string[]).includes(base as Lang) ? (base as Lang) : DEFAULT_LANG
}

export function pickFromAcceptLanguage(header: string | null): Lang {
  if (!header) return DEFAULT_LANG
  const first = header.split(',')[0]?.trim() ?? ''
  return normalizeToSupported(first)
}
