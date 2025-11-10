# Guía de instalación y despliegue

Esta guía explica cómo instalar, ejecutar en desarrollo y construir para producción el proyecto AOV-OVL.

## Requisitos

- Node.js 18+ (recomendado 18 LTS o superior)
- npm 9+ (incluido con Node)
- Navegador moderno (Chrome/Edge/Firefox)

## Instalación

1. Abrir una terminal en el directorio del proyecto:
   - `aov-ovl/`
2. Instalar dependencias:
   ```bash
   npm install
   ```

## Ejecución en desarrollo

- Levantar el servidor de desarrollo (Vite):
  ```bash
  npm run dev
  ```
- La terminal mostrará una URL (por defecto `http://localhost:5173`). Ábrela en el navegador.
- Cualquier cambio en `src/` recargará la app automáticamente.

## Build de producción

- Generar artefactos optimizados:
  ```bash
  npm run build
  ```
- Previsualizar el build localmente:
  ```bash
  npm run preview
  ```
- Los archivos generados quedan en `dist/` listos para publicar en un hosting estático (Netlify, Vercel, GitHub Pages, Nginx, Apache).

## Despliegue estático (opciones)

- Publicar la carpeta `dist/` en:
  - Netlify: arrastrar y soltar `dist/` o usar `netlify-cli`.
  - Vercel: `vercel` apuntando a `dist/` (configurar como output estático).
  - GitHub Pages: subir el contenido de `dist/` a la rama `gh-pages`.
  - Servidor propio (Nginx/Apache): servir `dist/` como raíz del sitio.

## Variables y configuración

- No requiere variables de entorno para funcionar (SPA estática).
- Configuración relevante:
  - `vite.config.ts`: plugin React y opciones de build.
  - `tailwind.config.js`: paths de contenido y tema.
  - `postcss.config.js`: Tailwind + Autoprefixer.
  - `tsconfig*.json`: opciones de TypeScript.

## Estructura relevante

- `index.html`: punto de entrada HTML.
- `src/main.tsx`: arranque de React y Router.
- `src/App.tsx`: composición de la página principal.
- `src/components/`: componentes UI.
- `src/data/topics.ts`: contenido temático.
- `src/index.css`: estilos base y utilidades personalizadas.

## Solución de problemas

- Puerto ocupado: definir `PORT=5173` alternativo o dejar que Vite seleccione otro.
- Cache del navegador: forzar recarga dura o abrir en modo incógnito.
- Dependencias: ejecutar `rm -rf node_modules package-lock.json && npm install` si hay inconsistencias.
