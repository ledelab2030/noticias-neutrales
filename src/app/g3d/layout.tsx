// app/g3d/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  // No sobreescribimos <title> aquí; lo define page.tsx de /g3d
};

export default function G3DLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fondo oscuro a pantalla completa detrás del main global */}
      <div className="fixed inset-0 -z-10 bg-[#0b0b0b]" aria-hidden="true" />
      {/* Wrapper para permitir secciones de ancho controlado dentro del main global */}
      <div className="w-full">{children}</div>
    </>
  );
}
