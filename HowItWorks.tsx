import { motion } from 'framer-motion'

/**
 * HowItWorks: explica la arquitectura, decisiones de diseño y
 * buenas prácticas aplicadas en el OVA.
 */
export default function HowItWorks() {
  const steps = [
    { t: 'Arquitectura', d: 'React + Vite para rapidez; componentes modulares, datos separados.' },
    { t: 'Estilos', d: 'Tailwind CSS para un look moderno, modo glass y gradientes.' },
    { t: 'Animaciones', d: 'Framer Motion: transiciones suaves, reveal on scroll, timeline animada.' },
    { t: 'Rendimiento', d: 'IntersectionObserver evita animar fuera de pantalla; assets livianos.' },
    { t: 'Accesibilidad', d: 'Contrastes altos, navegación por teclado, scroll anclado.' }
  ]
  return (
    <section id="como-funciona" className="scroll-mt-24">
      <div className="card-glass p-6 md:p-10">
        <h2 className="text-3xl font-bold">Cómo funciona todo</h2>
        <p className="text-slate-300 mt-2">
          Este OVA usa una SPA con secciones ancladas. Las tarjetas se generan desde un archivo de datos para mantener contenido y vista desacoplados.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-glass p-4"
            >
              <div className="text-brand-300 font-semibold">{s.t}</div>
              <div className="text-sm text-slate-200">{s.d}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 text-sm text-slate-400">
          Código organizado por componentes: `Navbar`, `Hero`, `Timeline`, `Section`, `TopicCard`, `Converter`, `Quiz`, `HowItWorks`, `Footer`. Contenidos en `data/topics.ts`.
        </div>
      </div>
    </section>
  )
}


