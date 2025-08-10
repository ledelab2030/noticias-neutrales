// src/components/LogoWithSuffix.tsx
"use client"

type Props = {
  suffix: string                // "Health", "Estilo de Vida", etc.
  size?: "sm" | "md" | "lg"     // tamaño del lockup
  align?: "left" | "center"     // alineación
  className?: string
}

const sizes = {
  sm: { logoH: 28, gap: "gap-2", text: "text-lg" },
  md: { logoH: 36, gap: "gap-3", text: "text-2xl" },
  lg: { logoH: 44, gap: "gap-4", text: "text-3xl" },
}

export default function LogoWithSuffix({
  suffix,
  size = "md",
  align = "left",
  className = "",
}: Props) {
  const s = sizes[size]
  const hPx = `${s.logoH}px`

  return (
    <div
      className={[
        "flex items-center", s.gap, "shrink-0",
        align === "center" ? "justify-center" : "",
        className,
      ].join(" ")}
      aria-label={`LedeLab ${suffix}`}
    >
      {/* Logo: usar <img> para SVG con altura controlada */}
      <div className="relative shrink-0">
        {/* Light */}
        <img
          src="/ledelab/Color logo - no background.svg"
          alt="LedeLab"
          style={{ height: hPx, width: "auto" }}
          className="block dark:hidden select-none"
          draggable={false}
        />
        {/* Dark */}
        <img
          src="/ledelab/White logo - no background.svg"
          alt="LedeLab"
          style={{ height: hPx, width: "auto" }}
          className="hidden dark:block select-none"
          draggable={false}
        />
      </div>

      {/* Sufijo dinámico */}
      <span
        className={[
          s.text,
          "font-semibold tracking-tight",
          "text-[oklch(43%_0.12_250)]",
          "dark:text-white/90",
        ].join(" ")}
      >
        {suffix}
      </span>
    </div>
  )
}
