# Explicación línea por línea (guía detallada)

Nota: Esta guía explica exhaustivamente cada archivo relevante, indicando el propósito de cada instrucción/import/hook/JSX. El código original permanece igual; aquí solo documentamos.

---

## src/main.tsx

- `import React from 'react'`: importa React para usar JSX y el modo estricto.
- `import ReactDOM from 'react-dom/client'`: API moderna para crear el root.
- `import { BrowserRouter } from 'react-router-dom'`: enrutador basado en History API.
- `import App from './App'`: componente raíz de la aplicación.
- `import './index.css'`: estilos globales y utilidades Tailwind personalizadas.
- `ReactDOM.createRoot(document.getElementById('root')!).render(...)`: 
  - Obtiene el `<div id="root">` del `index.html`.
  - `createRoot` habilita concurrent rendering.
  - Renderiza dentro de `<React.StrictMode>` (detecta efectos secundarios y mejores prácticas en dev).
  - Envuelve con `<BrowserRouter>` para tener navegación SPA.
  - Inserta `<App />` como hijo.

---

## src/App.tsx

- Imports de React Router y componentes UI (Navbar, Hero, Section, etc.).
- `import { topics } from './data/topics'`: contenido de todas las secciones.
- `function ScrollToTop() { ... }`:
  - `useLocation()` obtiene `{ pathname, hash }`.
  - `useEffect(..., [pathname, hash])`: reacciona a cambios de ruta o ancla.
  - Si hay `hash`, busca el elemento con ese selector y hace `scrollIntoView` suave.
  - Si no hay `hash`, hace `window.scrollTo({ top: 0, behavior: 'smooth' })`.
  - Devuelve `null` porque no renderiza UI.
- `export default function App()`:
  - Estructura global con fondo (`section-gradient`).
  - `<Navbar />` persistente en el tope.
  - `<ScrollToTop />` para UX de navegación.
  - `<Routes>` con una sola `<Route path="/">` que renderiza la página completa.
  - Dentro: `<Hero />`, `<Timeline />`, las secciones mapeadas de `topics`, luego `<Converter />` y `<Quiz />`, más `<HowItWorks />` y `<Footer />`.
  - Contenedor central con `max-w-7xl` y espaciado vertical `space-y-20`.

---

## src/components/Navbar.tsx

- `useState` para controlar apertura del menú móvil (`open`).
- `links`: arreglo con `{ href, label }` para anclas internas.
- `export default function Navbar()`:
  - `<header>` fijo (`sticky top-0`) con `backdrop-blur` y borde sutil.
  - `<nav>` con logo/título y los links horizontales visibles en `md+`.
  - Botón hamburguesa en `md-` que alterna `open`.
  - `<AnimatePresence>`: anima la aparición/desaparición del panel móvil.
  - `<motion.div>` con animaciones de `height` y `opacity`.
  - En el panel, los links cierran el menú con `onClick={() => setOpen(false)}`.

---

## src/components/Hero.tsx

- `motion` para animaciones.
- Dos `<motion.div>` posicionados absolutamente que actúan como “blobs” animados (keyframes en `x` e `y`, repetidos infinito con `easeInOut`).
- Contenido central con título, descripción y dos botones de ancla.
- Animaciones de entrada para `h1`, `p` y el contenedor de botones (`initial` → `whileInView`).

---

## src/components/Timeline.tsx

- `items`: arreglo de hitos (generaciones) con `year` y `text`.
- `<section id="evolucion">` con título y subtítulo.
- Línea vertical decorativa como `absolute` y tarjetas (`card-glass`).
- Cada hito se envuelve en `<motion.div>` con animación `x` desde la izquierda y retraso incremental por índice.

---

## src/components/Section.tsx

- Props: `{ topic }` con tipo `Topic`.
- `useRef` para referenciar el nodo de la sección y `useState(visible)`.
- `useEffect` crea `IntersectionObserver` (threshold 0.2) que marca `visible` cuando la sección entra al viewport.
- `<motion.div>` usa `visible` para animar opacidad y `y` (reveal del bloque completo).
- Layout en dos columnas: info (título, resumen, badges) y grilla de tarjetas (`TopicCard`).

---

## src/components/TopicCard.tsx

- Props: `card` (título, contenido, icono) y `index` (para delay).
- `<motion.article>` con animación de aparición (`opacity`, `y`, `scale`).
- Cabecera con icono dentro de caja y el título.
- Párrafo con el contenido del concepto.

---

## src/components/Converter.tsx (Laboratorio Decimal ↔ Binario)

- `toBinary(n:number)`: valida que sea finito y `>=0`, retorna `n.toString(2)`.
- `toDecimal(bin:string)`: valida con regex `^[01]+$` y usa `parseInt(bin, 2)`.
- Estado local: `decimal` y `binary` con valores iniciales `13` y `1101`.
- `useMemo(convertedBinary)`: recalcula binario a partir de `decimal` si es válido.
- `useMemo(convertedDecimal)`: recalcula decimal a partir de `binary` si es válido.
- UI:
  - Caja 1: input decimal con sanitización `replace(/[^0-9]/g, '')`, muestra resultado binario.
  - Caja 2: input binario con sanitización `replace(/[^01]/g, '')`, muestra resultado decimal.
  - `<details>` con explicación de ambos métodos de conversión.

---

## src/components/Quiz.tsx

- Tipo `Question` con `q`, `options`, `answerIndex`.
- `QUESTIONS`: banco de 5 preguntas representativas.
- Estado:
  - `index`: índice de pregunta actual.
  - `selected`: opción elegida (o `null`).
  - `score`: número de aciertos.
  - `finished`: muestra resultado final cuando es `true`.
- `current = useMemo(() => QUESTIONS[index], [index])`: retorna pregunta actual.
- `submit()`:
  - Si no hay selección, retorna.
  - Compara con `answerIndex` y suma al `score` si acierta.
  - Avanza `index` y limpia `selected`, o marca `finished=true` si era la última.
- `reset()`: vuelve a estado inicial.
- Render:
  - Si no terminó: muestra número de pregunta, enunciado, opciones (botones que marcan `selected`), puntuación parcial y botón “Siguiente”.
  - Si terminó: muestra resultado `score/QUESTIONS.length` y botón “Reiniciar”.

---

## src/components/HowItWorks.tsx

- `steps`: arreglo con aspectos clave (Arquitectura, Estilos, etc.).
- Renderiza tarjetas con animación ligera para cada aspecto.
- Texto que enumera los componentes y el archivo de datos.

---

## src/components/Footer.tsx

- Muestra un texto sencillo con el año actual (evaluado en runtime) y la marca del OVA.

---

## src/data/topics.ts

- Tipos `TopicCard` y `Topic` para estructurar el contenido (id, título, resumen, badges, cards).
- `export const topics: Topic[] = [...]` define todas las secciones y sus tarjetas (texto e iconos emoji).
- Este archivo separa el contenido del rendering, facilitando mantenimiento y ampliaciones.

---

## index.html

- HTML mínimo de Vite con `<div id="root"></div>`.
- `<script type="module" src="/src/main.tsx">`: entrada principal (ESM).

---

## Estilos (src/index.css)

- `@tailwind base; @tailwind components; @tailwind utilities;`: activa Tailwind.
- `html, body, #root { height: 100% }`: ocupa alto completo para layout fluido.
- `html { scroll-behavior: smooth }`: scroll suave nativo.
- `body` aplica fondo oscuro y antialiasing.
- `.section-gradient`: dos gradientes radiales sutiles para profundidad.
- `.card-glass`: efecto glass (fondo translúcido, blur, borde tenue).

---

## Configuración (resumen)

- `vite.config.ts`: usa `@vitejs/plugin-react` para JSX, Fast Refresh y optimizaciones.
- `tailwind.config.js`: especifica rutas a archivos para purge + colores de marca.
- `postcss.config.js`: habilita Tailwind + Autoprefixer.
- `tsconfig*.json`: opciones de TypeScript (JSX react-jsx, strict, libs DOM/ES2020).
- `package.json`: scripts `dev`, `build`, `preview` y dependencias.

---

## Flujo de navegación

1. El usuario hace clic en un enlace del `Navbar` (ej. `#numeracion`).
2. El navegador añade el `hash` a la URL.
3. `ScrollToTop` detecta el cambio y busca el elemento con ese `id`.
4. Ejecuta `scrollIntoView` con comportamiento suave.
5. La sección entra en viewport y su animación se activa (IntersectionObserver/Framer Motion).

---

## Cómo extender

- Agregar un nuevo tema: añadir objeto en `src/data/topics.ts`. `App.tsx` lo renderizará automáticamente al mapear `topics`.
- Agregar interacción: crear un componente en `src/components`, añadir su ancla al `Navbar` y colocarlo en `App.tsx`.
- Personalizar estilos: modificar utilidades en `src/index.css` o theme en `tailwind.config.js`.
