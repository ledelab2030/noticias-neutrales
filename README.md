# Noticias Neutrales

Proyecto web basado en [Next.js](https://nextjs.org) que sigue las reglas editoriales de neutralidad, precisión y verificación de fuentes. Este proyecto hace parte del ecosistema **LedeLab Group OÜ**.

## 🚀 Iniciar en desarrollo

Desde la raíz del proyecto:

```bash
npm install
npm run dev
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

El contenido se gestiona en la carpeta `/src/data/` y las páginas en `/src/app/`.

---

## 📜 Reglas editoriales

* Cada noticia debe tener **mínimo 2 párrafos** (idealmente entre 2 y 5).
* Debe responder claramente: **Qué, Quién, Cuándo, Dónde, Por qué, Cómo**.
* **Fuentes**:

  * Solo enlaces a medios oficiales y verificados (gobiernos, organismos internacionales, medios confiables).
  * Si no hay fuente sólida, se redacta con hechos confirmados públicamente, sin enlace.
* **Estilo**:

  * Neutral, sin opinión ni especulación.
  * Basado en hechos ocurridos o en curso.
  * Sin titulares sensacionalistas.
  * Evitar medios no confiables como Semana.com, RCN, Caracol, Fox, etc.
* **Formato**:

  * Igual al de `src/data/noticias.ts`.
  * Orden cronológico descendente.

---

## 🌎 Lista de países prioritarios

Estos países se priorizan para la selección diaria de noticias:

**Principales:**

* Colombia
* Estados Unidos
* Canadá
* Estonia
* Ecuador
* Guatemala
* Argentina
* Perú
* Panamá
* Costa Rica

**Adicionales:**

* China
* Alemania
* Corea del Sur
* Líbano
* España
* Portugal
* Sudáfrica

---

## 🛠 Tecnologías y configuración

* **Next.js 15** con App Router.
* **Tailwind CSS v4** con PostCSS.
* **Google Fonts (Montserrat)** para elementos de marca.
* Estructura modular de componentes (`/src/components`).
* Dataset por sección en `/src/data`.

**PostCSS config:**

```js
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

---

## 📦 Despliegue

La forma más sencilla de desplegar este proyecto es en [Vercel](https://vercel.com/new?utm_source=create-next-app).

Más información: [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying).
