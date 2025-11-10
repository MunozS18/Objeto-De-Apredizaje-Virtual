# Manual Técnico

Este documento describe arquitectura, componentes, datos, estilos y configuración del proyecto AOV-OVL.

## Arquitectura general

- SPA basada en React + TypeScript, empaquetada con Vite.
- Estilos con Tailwind CSS y utilidades personalizadas en `src/index.css`.
- Animaciones con Framer Motion.
- Enrutamiento con `react-router-dom` (uso de `BrowserRouter`).
- Contenido temático externo en `src/data/topics.ts`.

## Estructura de carpetas

- `index.html`: contenedor raíz (`<div id="root"/>`).
- `src/main.tsx`: arranque de React y Router.
- `src/App.tsx`: composición de la página y navegación por anclas.
- `src/components/`: UI modular (Navbar, Hero, Timeline, Section, TopicCard, Converter, Quiz, HowItWorks, Footer).
- `src/data/topics.ts`: definición de tipos y datos de temas.
- `src/index.css`: Tailwind y clases personalizadas (gradient, glass, etc.).

## Flujo de render principal

- `main.tsx` monta `<App/>` dentro de `<BrowserRouter/>` y `<StrictMode/>`.
- `App.tsx` incluye `ScrollToTop` para manejar hashes y scroll suave:
  - Si hay `hash`, hace `element.scrollIntoView({ behavior: 'smooth' })`.
  - Si no hay `hash`, hace `window.scrollTo({ top: 0, behavior: 'smooth' })`.
- El layout incluye Navbar fijo, secciones temáticas mapeadas desde `topics`, laboratorio, quiz, etc.

## Componentes clave

- `Navbar`: navegación sticky, menú responsive con `AnimatePresence`/`motion`.
- `Hero`: encabezado con blobs animados y CTAs.
- `Timeline`: hitos con animación secuencial por índice.
- `Section`: observación de visibilidad con `IntersectionObserver` para revelar contenido.
- `TopicCard`: tarjetas animadas para cada concepto.
- `Converter`: lógica de conversión Decimal↔Binario con validación y `useMemo`.
- `Quiz`: banco de preguntas, estado de progreso y puntuación, reinicio.
- `HowItWorks`: resumen visual del stack y organización.
- `Footer`: marca y año dinámico.

## Datos y tipos (`src/data/topics.ts`)

- Tipos `TopicCard` y `Topic` para tipar contenido.
- `export const topics: Topic[]` agrupa secciones y tarjetas.
- Separación contenido/presentación para facilitar ampliaciones.

## Estilos

- Tailwind habilitado vía `@tailwind base/components/utilities`.
- Clases personalizadas:
  - `.section-gradient`: gradientes radiales para fondo.
  - `.card-glass`: efecto glass (blur, opacidad, borde tenue).
- Configuración en `tailwind.config.js` con paths de purge y tema base.

## Configuración y scripts

- `vite.config.ts`: plugin React y ajustes de build/preview.
- `postcss.config.js`: Tailwind + Autoprefixer.
- `tsconfig.json` y `tsconfig.node.json`: strict, libs DOM/ES2020, JSX automático.
- `package.json` scripts:
  - `dev`: desarrollo con Vite.
  - `build`: construcción de producción.
  - `preview`: servidor local para `dist/`.

## Buenas prácticas aplicadas

- Componentes puros y estado local limitado.
- Cálculos derivados con `useMemo` para evitar recomputaciones.
- Observación de visibilidad para animaciones condicionadas al viewport.
- Contenido desacoplado del render.

## Extensibilidad

- Añadir tema: incorporar objeto en `topics` (tipado guía la edición).
- Añadir componente: crear en `src/components/`, agregar ancla en `Navbar` y referenciar en `App.tsx`.
- Personalización visual: modificar utilidades en `src/index.css` o tema en `tailwind.config.js`.

## Pruebas y verificación manual

- Navegación por anclas y scroll suave.
- Validaciones del `Converter` (no permitir caracteres inválidos).
- Flujo completo del `Quiz` (selección, avance, puntuación, reinicio).

## Despliegue

- Build estático en `dist/` listo para hosting estático.
- Ver detalles en `docs/GUIA-INSTALACION-DESPLIEGUE.md`.
