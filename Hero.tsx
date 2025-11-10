import { motion } from 'framer-motion'

/**
 * Hero: cabecera con blobs animados que dan profundidad.
 * Utiliza keyframes de Framer Motion para movimiento continuo.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-brand-600/30 blur-3xl"
          animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ x: [0, -20, 10, 0], y: [0, 10, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Objeto Virtual de Aprendizaje
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}
          className="mt-4 text-lg text-slate-300"
        >
          Explora la evolución del PC, sus clasificaciones, tecnologías clave y su impacto.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a href="#evolucion" className="px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 transition">Comenzar</a>
          <a href="#como-funciona" className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition">Cómo funciona</a>
        </motion.div>
      </div>
    </section>
  )
}


