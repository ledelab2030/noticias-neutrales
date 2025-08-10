// src/components/LogoWithSuffix.tsx
"use client"

type Props = {
  suffix: string
}

export default function LogoWithSuffix({ suffix }: Props) {
  const logoHeight = 28 // px (altura de la "l" del logo)

  return (
    <div className="flex items-center gap-3 shrink-0" aria-label={`LedeLab ${suffix}`}>
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/ledelab/Color logo - no background.svg"
          alt="LedeLab"
          style={{ height: `${logoHeight}px`, width: "auto" }}
          className="block dark:hidden select-none"
          draggable={false}
        />
        <img
          src="/ledelab/White logo - no background.svg"
          alt="LedeLab"
          style={{ height: `${logoHeight}px`, width: "auto" }}
          className="hidden dark:block select-none"
          draggable={false}
        />
      </div>

      {/* Separador delgado, altura igual al logo */}
      <div
        style={{ width: "1px", height: `${logoHeight}px`, backgroundColor: "currentColor", opacity: 0.4 }}
        className="text-gray-400 dark:text-gray-500"
      />

      {/* Sufijo: minúsculas, más sutil, alineado hacia abajo 2px */}
      <span
        className="font-montserrat text-gray-600 dark:text-gray-300"
        style={{ fontSize: "16px", lineHeight: 1, textTransform: "lowercase", transform: "translateY(2px)" }}
      >
        {suffix}
      </span>
    </div>
  )
}

