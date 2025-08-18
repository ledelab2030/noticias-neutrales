// src/components/ClockLocal.tsx
"use client"

import { useEffect, useState } from "react"

type Props = {
  showSeconds?: boolean
  className?: string
  dateStyle?: "short" | "medium" | "long"
}

export default function ClockLocal({
  showSeconds = true,
  className = "",
  dateStyle = "long",
}: Props) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const tick = () => setNow(new Date())
    tick() // primera marca solo en cliente
    const id = setInterval(tick, showSeconds ? 1000 : 15000)
    return () => clearInterval(id)
  }, [showSeconds])

  // Mientras hidrata, no renderizamos tiempo para evitar mismatch
  if (!now) return <span className={className} />

  const date = new Intl.DateTimeFormat(undefined, { dateStyle }).format(now)
  const time = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: showSeconds ? "2-digit" : undefined,
  }).format(now)

  return (
    <time
      suppressHydrationWarning
      dateTime={now.toISOString()}
      title={`${date} ${time}`}
      className={`tabular-nums text-sm text-gray-600 dark:text-gray-300 ${className}`}
    >
      <span className="hidden sm:inline">{date} · </span>
      <span>{time}</span>
    </time>
  )
}
