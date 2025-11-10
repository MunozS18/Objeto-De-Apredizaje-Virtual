# OVA – Computación y Tecnologías

Objeto Virtual de Aprendizaje interactivo con contenidos de evolución del PC, clasificación, hardware/software, numeración decimal y binaria, sistemas expertos, biotecnología (minería de datos), control de procesos, robótica, comunicaciones y redes, e ingeniería de software. Incluye laboratorio de conversión y mini‑quiz.

## Stack
- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- React Router

## Instalación

PowerShell (comandos en líneas separadas):

```powershell
cd C:\Users\munoz\OneDrive\Documentos\Aplicaciones\AOV\aov-ovl
npm install
npm run dev
```

Build y preview:

```powershell
npm run build
npm run preview
```

## Estructura

```text
aov-ovl/
├─ index.html
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
├─ tsconfig.node.json
├─ package.json
├─ src/
│  ├─ index.css
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ data/
│  │  └─ topics.ts
│  └─ components/
│     ├─ Navbar.tsx
│     ├─ Hero.tsx
│     ├─ Timeline.tsx
│     ├─ Section.tsx
│     ├─ TopicCard.tsx
│     ├─ Converter.tsx
│     ├─ Quiz.tsx
│     ├─ HowItWorks.tsx
│     └─ Footer.tsx
```

## Cómo funciona
- SPA con anclas: `Navbar` enlaza a secciones dentro de la misma página.
- `App.tsx` ensambla: Hero, Timeline, Section (mapea `topics.ts`), Converter, Quiz, HowItWorks y Footer.
- Contenido desacoplado en `src/data/topics.ts`.
- Animaciones con Framer Motion; aparición con IntersectionObserver en `Section.tsx`.
- Estilos con Tailwind y utilidades `.section-gradient` y `.card-glass` definidas en `index.css`.

## Módulos interactivos
- Conversor decimal↔binario (`Converter.tsx`)
  - Decimal → Binario: `n.toString(2)` (valida `>=0`).
  - Binario → Decimal: `parseInt(bin, 2)` (valida `^[01]+$`).
- Mini‑Quiz (`Quiz.tsx`)
  - Estado: `index`, `selected`, `score`, `finished`.
  - Flujo: seleccionar → siguiente → resultado → reiniciar.

## Solución de problemas
- 404 en `localhost`: ejecutar los comandos dentro de `aov-ovl`.
- Puerto ocupado: Vite mostrará otro puerto (usa la URL impresa).
- Falta `@vitejs/plugin-react`: `npm i -D @vitejs/plugin-react`.
- En PowerShell evita `&&`. Ejecuta cada comando por separado.

## Extensión
- Añade temas editando `src/data/topics.ts`.
- Crea nuevos componentes en `src/components` y ancla desde `Navbar`.
