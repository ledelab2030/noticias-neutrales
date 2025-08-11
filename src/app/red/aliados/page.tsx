// src/app/red/aliados/page.tsx
import type { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"

export const metadata: Metadata = {
  title: "Aliados",
  description: "Aliados estratégicos de LedeLab.",
}

export default function AliadosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeader
        title="Aliados"
        description="Listado en construcción. Si quieres colaborar, escríbenos."
      />
      <div className="rounded-xl border border-dashed border-gray-300 p-6 text-gray-600 dark:border-gray-700 dark:text-gray-300">
        Pronto añadiremos aliados y proyectos. Mientras tanto, contáctanos en{" "}
        <a className="text-blue-700 hover:underline dark:text-blue-300" href="mailto:hola@ledelab.group">
          hola@ledelab.group
        </a>.
      </div>
    </main>
  )
}
