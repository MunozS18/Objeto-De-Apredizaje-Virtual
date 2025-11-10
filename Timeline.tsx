import { motion } from 'framer-motion'

/**
 * Timeline: muestra la evolución histórica del PC por generaciones.
 * Cada ítem entra con animación horizontal para reforzar la secuencia temporal.
 */
const items = [
  { year: '1ª Gen (1940s-1950s)', text: 'Válvulas de vacío, lenguaje máquina/ensamblador, ENIAC.' },
  { year: '2ª Gen (1950s-1960s)', text: 'Transistores, COBOL/Fortran, menor consumo y tamaño.' },
  { year: '3ª Gen (1960s-1970s)', text: 'Circuitos integrados, multiprogramación, UNIX.' },
  { year: '4ª Gen (1970s-1990s)', text: 'Microprocesadores, PCs, interfaces gráficas, C/C++.' },
  { year: '5ª Gen (1990s-Actualidad)', text: 'Paralelismo, IA, dispositivos móviles, la nube, Python/JavaScript.' }
]

export default function Timeline() {
  return (
    <section id="evolucion" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Evolución histórica del PC</h2>
        <p className="text-slate-300 mt-2">Generaciones de hardware/software y su impacto.</p>
      </div>
      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-2 md:left-4 top-0 bottom-0 w-[2px] bg-white/10" />
        <div className="space-y-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              <div className="absolute left-0 md:left-2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-500 shadow" />
              <div className="ml-4 md:ml-8 card-glass p-4">
                <div className="text-brand-300 font-semibold">{it.year}</div>
                <div className="text-sm text-slate-200">{it.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


