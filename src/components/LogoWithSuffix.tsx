// src/components/LogoWithSuffix.tsx
"use client"

import clsx from "clsx"

type Size = "sm" | "md" | "lg"

const SIZES: Record<Size, { logoH: number; fontSize: number; gap: string; y: number }> = {
  sm: { logoH: 24, fontSize: 14, gap: "gap-2", y: 2 },
  md: { logoH: 28, fontSize: 16, gap: "gap-3", y: 2 },
  lg: { logoH: 34, fontSize: 18, gap: "gap-3", y: 2 },
}

export default function LogoWithSuffix({
  suffix,
  size = "md",
}: {
  suffix?: string
  size?: Size
}) {
  const s = SIZES[size]

  return (
    <span className={clsx("inline-flex items-center font-semibold tracking-tight", s.gap)}>
      <img
        src="/ledelab/ledelab-logo-color.svg"
        alt="LedeLab"
        style={{ height: `${s.logoH}px`, width: "auto" }}
        className="block dark:hidden select-none"
        draggable={false}
      />
      <img
        src="/ledelab/ledelab-logo-white.svg"
        alt="LedeLab"
        style={{ height: `${s.logoH}px`, width: "auto" }}
        className="hidden dark:block select-none"
        draggable={false}
      />
      {suffix && (
        <span style={{ fontSize: `${s.fontSize}px`, transform: `translateY(${s.y}px)` }}>
          {suffix}
        </span>
      )}
    </span>
  )
}
