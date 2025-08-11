// src/components/SectionHeader.tsx
"use client"

import clsx from "clsx"
import { ReactNode } from "react"

type SectionHeaderProps = {
  overline?: string
  title: string
  /** Nuevo: soporta ambas variantes para compatibilidad */
  description?: string
  subtitle?: string
  actions?: ReactNode
  variant?: "standard" | "compact"
  className?: string
}

export default function SectionHeader({
  overline,
  title,
  description,
  subtitle,
  actions,
  variant = "standard",
  className,
}: SectionHeaderProps) {
  const desc = description ?? subtitle

  return (
    <header className={clsx("mb-6", variant === "compact" ? "pt-1" : "pt-2", className)}>
      {overline && (
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {overline}
        </p>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1
            className={clsx(
              "font-semibold tracking-tight",
              variant === "compact" ? "text-2xl" : "text-3xl",
              "text-gray-900 dark:text-white"
            )}
          >
            {title}
          </h1>

          {desc && (
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-3xl">
              {desc}
            </p>
          )}
        </div>

        {actions && <div className="shrink-0">{actions}</div>}
      </div>
    </header>
  )
}
