// src/components/LogoWithSuffix.tsx
"use client"

import clsx from "clsx"

type Size = "sm" | "md" | "lg"
type Tone = "auto" | "onLight" | "onDark"

const SIZES: Record<Size, { logoH: number; fontSize: number; gap: string; y: number }> = {
  sm: { logoH: 24, fontSize: 14, gap: "gap-2", y: 2 },
  md: { logoH: 28, fontSize: 16, gap: "gap-3", y: 2 },
  lg: { logoH: 34, fontSize: 18, gap: "gap-3", y: 2 },
}

export default function LogoWithSuffix({
  suffix,
  size = "md",
  tone = "auto",
}: {
  suffix?: string
  size?: Size
  tone?: Tone
}) {
  const s = SIZES[size]

  const colorClasses = clsx(
    "select-none",
    tone === "auto" ? "block dark:hidden" : "block"
  )
  const whiteClasses = clsx(
    "select-none",
    tone === "auto" ? "hidden dark:block" : "block"
  )

  return (
    <span className={clsx("inline-flex items-center font-semibold tracking-tight", s.gap)}>
      {/* Logo a color (uso en fondos claros) */}
      {(tone === "auto" || tone === "onLight") && (
        <img
          src="/ledelab/ledelab-logo-color.svg"
          alt="LedeLab"
          style={{ height: `${s.logoH}px`, width: "auto" }}
          className={colorClasses}
          draggable={false}
        />
      )}

      {/* Logo blanco (uso en fondos oscuros) */}
      {(tone === "auto" || tone === "onDark") && (
        <img
          src="/ledelab/ledelab-logo-white.svg"
          alt="LedeLab"
          style={{ height: `${s.logoH}px`, width: "auto" }}
          className={whiteClasses}
          draggable={false}
        />
      )}

      {suffix && (
        <span style={{ fontSize: `${s.fontSize}px`, transform: `translateY(${s.y}px)` }}>
          {suffix}
        </span>
      )}
    </span>
  )
}
