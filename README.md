Noticias Neutrales

Portal de noticias desarrollado con Next.js 15.4.6 y Tailwind CSS 4.1.11, desplegado en Vercel.
El objetivo es ofrecer información neutral, verificada y organizada para audiencias de Latinoamérica y otros países prioritarios.

------------------------------------------------------------
🚀 Inicio rápido

Ejecutar servidor de desarrollo:
  npm run dev
  # o yarn dev / pnpm dev / bun dev

Abrir http://localhost:3000

Build de producción:
  npm run build
  npm start

------------------------------------------------------------
📂 Estructura clave del proyecto

src/
 ├─ app/
 │   ├─ boletin/             # /boletin y /boletin/[id]
 │   ├─ noticias/            # /noticias y /noticias/[id]
 │   ├─ estilo-de-vida/      # /estilo-de-vida y dinámicas
 │   ├─ conversaciones/      # entrevistas y diálogos
 │   └─ api/                 # endpoints (si se usan)
 ├─ data/
 │   ├─ noticias.ts          # noticias (codnnv1)
 │   ├─ conversaciones.ts    # entrevistas (codconver)
 │   ├─ tags.ts              # catálogo de etiquetas
 │   └─ ...
 ├─ public/
 │   ├─ newsletters/         # boletines generados
 │   └─ og-default.jpg       # imagen por defecto OG/Twitter
 └─ scripts/
     └─ genera-newsletter.ts

------------------------------------------------------------
📰 Datos y codificación de contenido

Noticias (src/data/noticias.ts):
- Seguir instructivo codnnv1.
- Tipo base NoticiaRaw con campos: id, fecha, titulo, pais, resumen, contenido[], etiquetas[], fuente, url_fuente, consecutivo_unico, imagen.
- Export nombrado:
  export const noticias: NoticiaRaw[] = [ ... ]
  export default noticias
- Etiquetas deben provenir del catálogo TAGS (src/data/tags.ts).

Conversaciones/entrevistas (src/data/conversaciones.ts):
- Seguir instructivo codconver.
- Tipo base ConversacionRaw con: id, fecha, titulo, participantes[], dialogo[], etiquetas[], fuente.

------------------------------------------------------------
✍️ Manual editorial

Estilo de redacción:
1. Neutralidad: sin adjetivos valorativos ni especulación.
2. Claridad: párrafos de 2–5 líneas.
3. Fuentes verificables: siempre incluir fuente y url_fuente.
4. Citas: entre comillas y con atribución.
5. Enfoque: hechos ya ocurridos, no pronósticos ni rumores.

Etiquetas:
- Se normalizan automáticamente (sanitizeTags).
- Usar solo valores en src/data/tags.ts.

Países prioritarios:
- Principales: Colombia, Estados Unidos, Canadá, Estonia, Ecuador, Guatemala, Argentina, Perú, Panamá, Costa Rica.
- Adicionales: China, Alemania, Corea del Sur, Líbano, España, Portugal, Sudáfrica.

------------------------------------------------------------
📰 Generación de boletines

El script scripts/genera-newsletter.ts genera boletines en public/newsletters/.

Diario (fecha actual):
  npm run nl:diario

Semanal (últimos 7 días hasta hoy):
  npm run nl:semanal

Boletines de una fecha específica:
  # diario en fecha concreta
  npm run nl:diario -- --fecha=2025-09-09

  # semanal con rango exacto
  npm run nl:semanal -- --desde=2025-08-23 --hasta=2025-08-29

  # semanal indicando solo fecha de cierre
  npm run nl:semanal -- --hasta=2025-08-29

------------------------------------------------------------
🔑 Buenas prácticas para responsables

1. Agregar noticias siguiendo codnnv1.
2. Agregar entrevistas siguiendo codconver.
3. Etiquetas: usar solo las de tags.ts.
4. Boletines: ejecutar scripts diario y semanalmente, revisar en /boletin y /boletin/[id].
5. SEO/OG: todas las páginas usan /og-default.jpg como imagen por defecto.
6. Despliegue: Vercel build automático al hacer git push en rama main.

------------------------------------------------------------
☁️ Despliegue en Vercel

- Deploy automático al hacer git push main.
- Archivos estáticos (public/newsletters/*) se sirven directamente en la web.
- Verifica logs en Vercel si el build falla (npm run build local primero).

------------------------------------------------------------
📌 Resumen de comandos útiles

# desarrollo local
npm run dev

# build de producción
npm run build

# boletín diario (hoy)
npm run nl:diario

# boletín semanal (últimos 7 días)
npm run nl:semanal

# boletín diario de fecha específica
npm run nl:diario -- --fecha=YYYY-MM-DD

# boletín semanal rango exacto
npm run nl:semanal -- --desde=YYYY-MM-DD --hasta=YYYY-MM-DD
