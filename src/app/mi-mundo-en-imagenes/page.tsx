// /src/app/mi-mundo-en-imagenes/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mi mundo en imágenes | Noticias Neutrales",
  description: "Fotografías y relatos visuales de Leonardo de la Hoz Borrego — una mirada tranquila al mundo cotidiano.",
};

export default function MiMundoEnImagenes() {
  const fotos = [
    {
      id: "eibsee-2018",
      titulo: "Eibsee, Alemania",
      descripcion:
        "Primavera en los Alpes Bávaros. Calma, reflejos y la primera luz de la mañana.",
      imagen: "/noticias/eibsee.jpg",
      enlace: "https://unsplash.com/es/fotos/2-personas-sentadas-en-el-campo-de-hierba-cerca-del-lago-durante-el-dia-CM8tZvtFZZI",
      etiquetas: ["naturaleza", "viajes", "neutralidad"],
    },
    {
      id: "tagurpidi-2025",
      titulo: "Casa invertida, Estonia",
      descripcion:
        "Una casa al revés que recuerda cómo el mundo puede girar sin perder el sentido.",
      imagen: "/noticias/tagurpidi.jpg",
      enlace: "https://unsplash.com/es/fotos/qy32PBQv-c8",
      etiquetas: ["arquitectura", "reflexión", "percepción"],
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-semibold mb-3">Mi mundo en imágenes</h1>
      <p className="text-lg text-neutral-600 mb-10">
        Una bitácora visual sobre la calma, la curiosidad y lo que persiste más allá de las palabras. 
        Cada fotografía es una extensión de la filosofía de Noticias Neutrales: observar sin imponer, 
        buscar sentido en lo cotidiano y conservar la serenidad en medio del ruido.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fotos.map((foto) => (
          <Link
            key={foto.id}
            href={foto.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={foto.imagen}
                alt={foto.titulo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-medium">{foto.titulo}</h2>
              <p className="text-neutral-500 text-sm">{foto.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-sm text-neutral-500">
        Todas las fotografías están disponibles en mi galería de{" "}
        <a
          href="https://unsplash.com/@leonardodb"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-700"
        >
          Unsplash
        </a>{" "}
        bajo licencia abierta.
      </p>
    </main>
  );
}
