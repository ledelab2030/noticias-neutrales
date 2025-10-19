// app/g3d/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  // El <title> y OG los define /app/g3d/page.tsx
};

export default function G3DLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fondo oscuro detrás de todo para /g3d */}
      <div className="fixed inset-0 -z-10 bg-[#0b0b0b]" aria-hidden="true" />

      {/* CSS global solo para /g3d (sin styled-jsx) */}
      <style>{`
        /* Oculta header y footer globales del sitio,
           pero deja visibles los de G3D por sus IDs */
        header:not(#g3d-header),
        footer:not(#g3d-footer) {
          display: none !important;
        }

        /* Asegura fondo oscuro aunque el layout raíz sea claro */
        html, body {
          background: #0b0b0b !important;
        }
      `}</style>

      <div className="w-full">{children}</div>
    </>
  );
}
