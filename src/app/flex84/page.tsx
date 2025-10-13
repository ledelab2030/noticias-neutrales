// app/flex84/page.tsx
import Image from "next/image"
import flex84Gallery from "@/data/flex84.gallery"
import F84GalleryClient from "@/components/F84GalleryClient"

export const metadata = {
  title: "Flex 84 | LedeLab Group OÜ",
  description:
    "Espacio de experimentación y prototipado de LedeLab Group OÜ. En Flex 84 convergen diseño, arte, tecnología y materiales sostenibles.",
}

export default function Page() {
  return (
    <main className="bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100">
      {/* HERO */}
      <section className="py-20 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50 to-white dark:from-[#111] dark:to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
            <span>Prototipado • Materiales • Innovación</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Flex 84
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Laboratorio y espacio de creación donde convergen diseño, arte,
            tecnología y sostenibilidad. Un entorno flexible para imaginar,
            construir y experimentar con materiales, ideas y futuros posibles.
          </p>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">Qué es Flex 84</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Flex 84 nació como una extensión creativa de{" "}
              <strong>LedeLab Group OÜ</strong>, ubicada en Barranquilla,
              Colombia. Es un espacio interdisciplinario para el desarrollo de
              prototipos, ensayos de materiales, procesos de fabricación
              artesanal y experimentación tecnológica.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Aquí se integran diseño, ingeniería y educación aplicada para
              promover la innovación local y el aprendizaje activo.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0a0a0a]">
            <Image
              src="/flex84-img/10-sala-coworking-tc-f84-img_20221104_150134.jpg"
              alt="Vista general de la sala coworking"
              width={1280}
              height={864}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ÁREAS DE TRABAJO */}
      <section className="py-16 bg-gray-50 dark:bg-[#111] border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Áreas de trabajo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Prototipado y modelado", desc: "Fabricación y validación de ideas mediante procesos manuales y digitales." },
              { title: "Materiales sostenibles", desc: "Investigación y ensayo con compuestos naturales, resinas, madera y polímeros reciclados." },
              { title: "Diseño experimental", desc: "Exploración de formas, estructuras y procesos creativos interdisciplinarios." },
              { title: "Arte y tecnología", desc: "Convergencia entre expresión artística y procesos técnicos o algorítmicos." },
              { title: "Educación aplicada", desc: "Talleres, mentorías y experiencias de aprendizaje basadas en la práctica." },
              { title: "Colaboraciones abiertas", desc: "Proyectos compartidos entre LedeLab, empresas, academia y comunidad." },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:border-teal-400 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2 group-hover:text-teal-400">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA (interactiva: filtros + lightbox) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Galería</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Muestras del espacio, procesos, comunidad y conceptos desarrollados en Flex 84.
          </p>
          <F84GalleryClient items={flex84Gallery} />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres colaborar?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Flex 84 está abierto a colaboraciones con artistas, diseñadores,
            ingenieros, investigadores y estudiantes interesados en innovación
            sostenible y procesos experimentales.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:leonardo@ledelab.group?subject=Colaboración%20en%20Flex%2084"
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold hover:opacity-90 transition"
            >
              Escribir por correo
            </a>
            <a
              href="https://wa.me/573054045990"
              target="_blank"
              rel="noopener"
              className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-teal-400 transition text-gray-700 dark:text-gray-300"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
