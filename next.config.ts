// next.config.ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Antiguas rutas anidadas → rutas planas
      { source: "/nosotros/red", destination: "/red", permanent: true },
      { source: "/nosotros/red/aliados", destination: "/aliados", permanent: true },
      { source: "/nosotros/red/filiales", destination: "/filiales", permanent: true },
      { source: "/nosotros/red/mentores", destination: "/mentores", permanent: true },
      { source: "/nosotros/red/proyectos", destination: "/proyectos", permanent: true },
      { source: "/nosotros/red/startups", destination: "/startups", permanent: true },

      // Si existían /red/<sub>
      { source: "/red/aliados", destination: "/aliados", permanent: true },
      { source: "/red/filiales", destination: "/filiales", permanent: true },
      { source: "/red/mentores", destination: "/mentores", permanent: true },
      { source: "/red/proyectos", destination: "/proyectos", permanent: true },
      { source: "/red/startups", destination: "/startups", permanent: true },

      // Detalles antiguos de EV → ruta canónica
      { source: "/estilo-de-vida/:id", destination: "/noticias/:id", permanent: true },
    ]
  },
}

export default nextConfig
