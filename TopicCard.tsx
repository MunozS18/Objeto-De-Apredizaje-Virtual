import { motion } from 'framer-motion'
import type { TopicCard as TCard } from '../data/topics'

/**
 * TopicCard: tarjeta individual con título y descripción.
 * Aplica animación reveal con leve retardo basado en `index`.
 */
export default function TopicCard({ card, index }: { card: TCard, index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: .98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.05 }}
      className="card-glass p-4 hover:bg-white/10 transition group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded bg-brand-600/30 grid place-items-center border border-white/10">
          {card.icon ?? '💡'}
        </div>
        <h3 className="font-semibold">{card.title}</h3>
      </div>
      <p className="text-sm text-slate-300">{card.content}</p>
    </motion.article>
  )
}


