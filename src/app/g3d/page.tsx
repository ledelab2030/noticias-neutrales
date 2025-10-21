// app/g3d/page.tsx
import Image from "next/image";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "G3D — Renderización y Modelado 3D | Guillermo De la hoz",
  description:
    "Renderización arquitectónica, modelado 3D desde planos, recorridos virtuales y asesorías. Barranquilla, Colombia.",
  openGraph: {
    type: "website",
    url: "https://ledelab.co/g3d",
    title: "G3D — Renderización y Modelado 3D",
    description:
      "Imaginación y detalle en tres dimensiones. Visualizo tus ideas para que se conviertan en espacios reales.",
    images: ["/g3d/fachada-principal.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/g3d/fachada-principal.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function Page() {
  return (
    <div className="bg-[#0b0b0b] text-gray-100 font-sans">
      {/* HEADER PROPIO DE G3D */}
      <header
        id="g3d-header"
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
      >
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          {/* Ajusta el src si tu archivo tiene otro nombre (p.ej. /g3d/Logo%20personal.png) */}
          <Image
            src="/g3d/logo-g3d-cuadrado.png"
            alt="Logo G3D"
            width={120}
            height={120}
            priority
            className="h-[60px] md:h-[40px] w-auto object-contain"
          />
        </div>

        <nav className="flex justify-center md:justify-end space-x-4 text-sm text-gray-300">
          <a href="#servicios" className="hover:text-white transition">
            Servicios
          </a>
          <a href="#galeria" className="hover:text-white transition">
            Galería
          </a>
          <a href="#sobre-mi" className="hover:text-white transition">
            Sobre mí
          </a>
          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="py-16 border-b border-gray-800 bg-gradient-to-b from-black via-[#0b0b0b] to-black"
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
          <div>
            <span className="inline-block text-xs border border-gray-800 rounded-full px-3 py-1 bg-[#121212] text-gray-400">
              Renderización • Modelado 3D • Arquitectura
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
              Imaginación y detalle en{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22c55e] to-[#8c8c8c]">
                tres dimensiones
              </span>

            </h1>
            <p className="text-gray-400 mt-4 text-base md:text-lg">
              Visualizo tus ideas para que se conviertan en espacios reales.
              Renders interiores y exteriores, modelado desde planos y
              recorridos virtuales para presentar proyectos con claridad y
              emoción.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="#contacto"
                className="px-5 py-3 rounded-xl font-semibold text-black bg-teal-400 hover:bg-teal-500"
              >
                Solicitar cotización
              </a>
              <a
                href="#servicios"
                className="px-5 py-3 rounded-xl border border-gray-700 hover:border-gray-500"
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-inner">
            <Image
              src="/g3d/fachada-principal.jpg"
              alt="Render exterior: fachada principal"
              width={1280}
              height={720}
              priority
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">Servicios</h2>
          <p className="text-gray-400 mb-8">
            Soluciones para visualizar antes de construir.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              [
                "Visualización arquitectónica",
                "Renders interiores y exteriores con iluminación y materiales realistas.",
              ],
              [
                "Modelado 3D desde planos",
                "Transformación de planos 2D o bocetos en modelos 3D precisos.",
              ],
              [
                "Animaciones / Recorridos",
                "Clips con movimiento de cámara para mostrar el espacio con narrativa.",
              ],
              [
                "Postproducción",
                "Corrección de color, vegetación y efectos para mayor realismo.",
              ],
              [
                "Asesoría 1:1",
                "Acompañamiento para arquitectos y decoradores que deseen mejorar sus renders.",
              ],
              [
                "Paquetes por proyecto",
                "Básico (1–2 vistas), estándar (3–5 vistas) y premium (6+ vistas y clip).",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-[#151515] p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Galería</h2>
          <div className="grid grid-cols-12 gap-3">
            {[
              ["span-6", "/g3d/sala.jpg", 1200, 800, "Interiores — Sala"],
              ["span-6", "/g3d/fachada-principal.jpg", 1280, 720, "Exteriores — Fachada"],
              ["span-4", "/g3d/cocina_minusculas.jpg", 1200, 800, "Cocina"],
              ["span-4", "/g3d/dormitorio-principal.jpg", 1200, 800, "Dormitorio"],
              ["span-4", "/g3d/paisajismo.jpg", 1200, 800, "Paisajismo"],
            ].map(([span, src, w, h, caption]) => (
              <div
                key={caption as string}
                className={`tile ${span} relative rounded-xl overflow-hidden border border-gray-800 col-span-12 md:col-span-6 lg:col-span-4`}
              >
                <Image
                  src={src as string}
                  alt={caption as string}
                  width={w as number}
                  height={h as number}
                  className="w-full h-auto object-cover"
                />
                <span className="absolute bottom-2 left-2 text-xs bg-black/60 text-gray-200 px-2 py-1 rounded-md border border-white/10">
                  {caption as string}
                </span>
              </div>
            ))}

            {/* Video ancho */}
            <div className="tile span-8 col-span-12 md:col-span-12 lg:col-span-8 relative rounded-xl overflow-hidden border border-gray-800">
              <video
                src="/g3d/video-ecopanel-3c.mp4"
                controls
                muted
                loop
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 text-xs bg-black/60 text-gray-200 px-2 py-1 rounded-md border border-white/10">
                Recorrido — EcoPanel 3C
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/g3d/foto-guillermo.jpg"
              alt="Retrato de Guillermo De la hoz"
              width={640}
              height={640}
              loading="lazy"
              className="rounded-xl border border-gray-800 w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-3">Sobre mí</h2>
            <p className="text-gray-400">
              Soy <strong>Guillermo De la hoz</strong>, arquitecto (prom. 1977).
              Tras décadas entre docencia y obra, redescubrí en la visualización
              3D una forma de unir experiencia y creatividad digital. Desde
              Barranquilla, me enfoco en ayudar a profesionales y empresas a{" "}
              <em>visualizar antes de construir</em>.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <span className="px-3 py-2 bg-[#101010] rounded-lg border border-gray-800">
                SketchUp • Lumion • V-Ray
              </span>
              <span className="px-3 py-2 bg-[#101010] rounded-lg border border-gray-800">
                Renders fotorrealistas
              </span>
              <span className="px-3 py-2 bg-[#101010] rounded-lg border border-gray-800">
                Acompañamiento cercano
              </span>
            </div>
            <p className="text-gray-400 mt-4">
              Colaboración con <strong>LedeLab Group OÜ</strong> para integrar
              visualización 3D en proyectos educativos, de arquitectura y
              sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-[#151515] p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-2">¿Hablamos de tu proyecto?</h2>
            <p className="text-gray-400 mb-4">
              Cuéntame el tipo de espacio, número de vistas y plazo ideal. Te propongo el paquete que mejor se ajuste.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:gdelahozd@gmail.com"
                className="px-5 py-3 bg-teal-400 text-black rounded-xl font-semibold hover:bg-teal-500"
              >
                Escríbeme por correo
              </a>
              <a
                href="https://wa.me/573028496859"
                target="_blank"
                rel="noopener"
                className="px-5 py-3 border border-gray-700 rounded-xl hover:border-gray-500"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Ubicación con mapa embebido */}
          <div className="bg-[#151515] p-6 rounded-xl border border-gray-800 flex flex-col justify-center items-center text-gray-400">
            <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
            <p className="text-center mb-3">
              Barranquilla, Colombia — atención a todo el Caribe y proyectos remotos.
            </p>
            <div className="w-full h-44 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                title="Mapa de Barranquilla, Colombia"
                src="https://www.google.com/maps?q=Barranquilla%2C%20Colombia&z=12&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER PROPIO DE G3D */}
      <footer
        id="g3d-footer"
        className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} G3D — Guillermo De la hoz • Diseño & desarrollo: LedeLab + G3D
      </footer>
    </div>
  );
}
