import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import TopicCard from './TopicCard'
import type { Topic } from '../data/topics'

/**
 * Section: renderiza una sección temática a partir del objeto `topic`.
 * Usa IntersectionObserver para disparar la animación del bloque
 * cuando entra parcialmente en el viewport.
 */
export default function Section({ topic }: { topic: Topic }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id={topic.id} ref={ref} className="scroll-mt-24">
      <motion.div
        className="card-glass p-6 md:p-10"
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : { }}
        transition={{ type: 'spring', stiffness: 80, damping: 14 }}
      >
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold">{topic.title}</h2>
            <p className="mt-3 text-slate-300">{topic.summary}</p>
            {topic.badges?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {topic.badges.map(b => (
                  <span key={b} className="px-2 py-1 text-xs rounded bg-white/10 border border-white/10">{b}</span>
                ))}
              </div>
            ) : null}
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
            {topic.cards.map((c, i) => (
              <TopicCard key={i} card={c} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}


