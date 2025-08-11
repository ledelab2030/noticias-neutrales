# Noticias Neutrales

Este es un proyecto [Next.js](https://nextjs.org) inicializado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## 📌 Nota sobre esta versión (Backup)
Este backup corresponde a la versión estable previa al despliegue en **Vercel**, con integración de:
- **Next.js 15.4.6** y **Tailwind CSS v4.1.11** configurado y funcionando.
- Soporte de tema claro/oscuro.
- Implementación de **branding dinámico** con `LogoWithSuffix` y `AutoBrand`.
- Páginas estáticas y dinámicas para:
  - `/`
  - `/estilo-de-vida` y `/estilo-de-vida/[id]`
  - `/noticias` y `/noticias/[id]`
- Integración de **lista de países prioritarios** para la selección de noticias:contentReference[oaicite:0]{index=0}.
- Ajustes de diseño en `globals.css`, `layout.tsx` y `Header.tsx` para tipografía selectiva (Montserrat) y estructura general.
- Limpieza de configuración duplicada de Tailwind y PostCSS.
- Correcciones de tipado y eliminación de advertencias críticas para `next build`.

Este backup se guarda como **versión base de producción inicial** para futuras iteraciones.

---

## 🚀 Comenzar

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
Abre http://localhost:3000 en tu navegador para ver el resultado.

📚 Más información
Documentación de Next.js

Tutorial interactivo de Next.js

Repositorio oficial de Next.js en GitHub

☁️ Despliegue en Vercel
La forma más fácil de desplegar este proyecto es usar la Plataforma Vercel, creadores de Next.js.

Consulta la documentación de despliegue para más detalles.