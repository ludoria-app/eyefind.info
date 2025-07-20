# Eyefind.info

## Introducción

¡Bienvenido a **Eyefind.info** - un tributo a los sitios web que aparecen en el mundo de Grand Theft Auto V, ¡traídos a la vida en el mundo real! 🎮

Este proyecto es un esfuerzo honesto por recrear y mostrar los diversos sitios web que los jugadores encuentran a lo largo del universo de GTA V. Aunque puede no ser una réplica exacta, captura la esencia y el espíritu de estos sitios web ficticios, haciéndolos accesibles y funcionales en nuestra realidad.

### Acerca de Ludoria

Este proyecto está siendo desarrollado y mantenido por **[Ludoria](https://www.youtube.com/@ludoria-app)** - un equipo apasionado dedicado a dar vida a conceptos de videojuegos a través del contenido y desarrollo web innovador.

**¡Muestra tu apoyo!** 🎯
- 📺 **Canal de YouTube**: [Ludoria](https://www.youtube.com/@ludoria-app)
- 🎮 **Síguenos** para más proyectos y contenido inspirados en videojuegos
- 💬 **Únete a la comunidad** y comparte tu feedback

---

## Comenzando

Este es un proyecto [Next.js](https://nextjs.org) inicializado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Pre-requisitos

- Node.js (versión 18 o superior)
- npm, yarn, pnpm, o bun como gestor de paquetes

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/ludoria-app/eyefind.info.git
   cd eyefind.info
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

3. **Configura las variables de entorno**

   Crea un archivo `.env.local` en el directorio raíz y agrega lo siguiente:
   ```env
   NEXT_PUBLIC_WEATHER_API=https://api.open-meteo.com
   ```

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

5. **Abre tu navegador**

   Navega a [http://localhost:3000](http://localhost:3000) para ver el resultado.

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Turbopack
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige errores de ESLint automáticamente
- `npm run format` - Formatea el código con Prettier
- `npm run format:check` - Verifica el formato del código

### Variables de Entorno

| Variable | Descripción | Requerida | Por Defecto |
|----------|-------------|-----------|-------------|
| `NEXT_PUBLIC_WEATHER_API` | URL del endpoint de la API del clima | Sí | `https://api.open-meteo.com` |

---

## Aprende Más

Para aprender más sobre las tecnologías utilizadas en este proyecto:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js
- [Tailwind CSS](https://tailwindcss.com/docs) - framework CSS utility-first
- [React Query](https://tanstack.com/query/latest) - obtención y caché de datos

## Desplegar en Vercel

La forma más fácil de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Revisa nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

---

## Contribuir

¡Aceptamos contribuciones! No dudes en enviar un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

---

**Hecho con 💙 por [Ludoria](https://www.youtube.com/@ludoria-app)**
