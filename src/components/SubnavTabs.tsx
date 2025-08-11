// src/components/SubnavTabs.tsx
"use client"

export type TabItem = {
  label: string
  href: string
  isActive?: boolean
}

export default function SubnavTabs({ items }: { items: TabItem[] }) {
  return (
    <nav className="relative -mx-2 overflow-x-auto">
      <ul className="flex min-w-max gap-1 px-2">
        {items.map((t) => (
          <li key={t.href}>
            <a
              href={t.href}
              className={[
                "inline-flex items-center rounded-full px-3 py-1.5 text-sm transition",
                t.isActive
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
              ].join(" ")}
            >
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
