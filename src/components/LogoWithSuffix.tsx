/* eslint-disable @next/next/no-img-element */
// src/components/LogoWithSuffix.tsx
"use client"

type Size = "sm" | "md" | "lg"

type Props = {
  suffix: string
  size?: Size
}

const SIZES: Record<Size, { logoH: number; fontSize: number; gap: string; y: number }> = {
  sm: { logoH: 24, fontSize: 14, gap: "gap-2", y: 2 },
  md: { logoH: 28, fontSize: 16, gap: "gap-3", y: 2 },
  lg: { logoH: 34, fontSize: 18, gap: "gap-3", y: 2 },
}

export default function LogoWithSuffix({ suffix, size = "md" }: Props) {
  const s = SIZES[size]

  return (
    <div className={`flex items-center ${s.gap} shrink-0`} aria-label={`LedeLab ${suffix}`}>
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/ledelab/Color logo - no background.svg"
          alt="LedeLab"
          style={{ height: `${s.logoH}px`, width: "auto" }}
          className="block dark:hidden select-none"
          draggable={false}
        />
        <img
          src="/ledelab/White logo - no background.svg"
          alt="LedeLab"
          style={{ height: `${s.logoH}px`, width: "auto" }}
          className="hidden dark:block select-none"
          draggable={false}
        />
      </div>

      {/* Separador delgado, altura igual al logo */}
      <div
        style={{ width: "1px", height: `${s.logoH}px`, backgroundColor: "currentColor", opacity: 0.4 }}
        className="text-gray-400 dark:text-gray-500"
      />

      {/* Sufijo: minúsculas, más sutil, bajado un poco */}
      <span
        className="font-montserrat text-gray-600 dark:text-gray-300"
        style={{ fontSize: `${s.fontSize}px`, lineHeight: 1, textTransform: "lowercase", transform: `translateY(${s.y}px)` }}
      >
        {suffix}
      </span>
    </div>
  )
}
