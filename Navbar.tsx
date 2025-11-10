import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Lista de enlaces del navbar. Cada `href` apunta a un id de sección
 * dentro de la misma página para navegación mediante anclas.
 */
const links = [
  { href: '#evolucion', label: 'Evolución' },
  { href: '#clasificacion', label: 'Clasificación' },
  { href: '#hardware-software', label: 'Hardware/Software' },
  { href: '#numeracion', label: 'Numeración' },
  { href: '#expertos', label: 'Sist. Expertos' },
  { href: '#biotec', label: 'Biotecnología' },
  { href: '#control', label: 'Control' },
  { href: '#robotica', label: 'Robótica' },
  { href: '#comunicaciones', label: 'Redes' },
  { href: '#ingenieria', label: 'Ing. Software' },
  { href: '#lab-binario', label: 'Laboratorio' },
  { href: '#quiz', label: 'Quiz' },
  { href: '#como-funciona', label: 'Cómo funciona' }
]

/**
 * Navbar: cabecera fija con navegación por anclas y menú móvil.
 * - En desktop muestra links horizontales.
 * - En móvil despliega un panel animado (AnimatePresence + motion.div).
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-wide">
          OVA Computación
        </a>
        <div className="hidden md:flex gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-slate-200 hover:text-brand-300 transition">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden p-2 rounded border border-white/10" onClick={() => setOpen(v => !v)}>
          ☰
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-4 py-3 flex flex-col gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} className="py-2" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


