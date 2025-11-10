import { useMemo, useState } from 'react'

type Question = {
  q: string
  options: string[]
  answerIndex: number
}

/**
 * Banco de preguntas del mini‑quiz. Se mantiene en memoria y
 * puede ampliarse fácilmente agregando elementos al arreglo.
 */
const QUESTIONS: Question[] = [
  { q: '¿Qué componente realiza operaciones aritméticas y lógicas?', options: ['RAM', 'CPU', 'SSD', 'GPU'], answerIndex: 1 },
  { q: '¿Qué base usa el sistema binario?', options: ['Base 8', 'Base 10', 'Base 2', 'Base 16'], answerIndex: 2 },
  { q: 'Un sistema experto se compone de…', options: ['Base de conocimientos y motor de inferencias', 'Solo una red neuronal', 'Una base de datos', 'Un PLC'], answerIndex: 0 },
  { q: '¿Qué protocolo cifra la comunicación web?', options: ['HTTP', 'DNS', 'TLS', 'BGP'], answerIndex: 2 },
  { q: 'El control PID significa…', options: ['Proporcional–Integral–Derivativo', 'Paralelo–Interfaz–Discreto', 'Periférico–Entrada–Datos', 'Proceso–Interfaz–Digital'], answerIndex: 0 }
]

/**
 * Quiz: componente de evaluación rápida. Controla el estado de
 * la pregunta actual, selección del usuario, puntaje y fin del quiz.
 */
export default function Quiz() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const current = useMemo(() => QUESTIONS[index], [index])

  /** Avanza a la siguiente pregunta y suma puntaje si corresponde. */
  function submit() {
    if (selected === null) return
    if (selected === current.answerIndex) setScore(s => s + 1)
    if (index + 1 < QUESTIONS.length) {
      setIndex(i => i + 1)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }

  /** Reinicia el quiz a su estado inicial. */
  function reset() {
    setIndex(0); setSelected(null); setScore(0); setFinished(false)
  }

  return (
    <section id="quiz" className="scroll-mt-24">
      <div className="card-glass p-6 md:p-10">
        <h2 className="text-3xl font-bold">Mini-Quiz</h2>
        <p className="text-slate-300 mt-2">Pon a prueba tus conocimientos. 5 preguntas.</p>

        {!finished ? (
          <div className="mt-6">
            <div className="text-sm text-slate-400">Pregunta {index + 1} de {QUESTIONS.length}</div>
            <div className="mt-2 text-lg">{current.q}</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {current.options.map((opt, i) => {
                const isSelected = selected === i
                return (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`text-left px-4 py-3 rounded border transition ${isSelected ? 'bg-brand-600 border-brand-500' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-slate-400">Puntuación: {score}</div>
              <button onClick={submit} className="px-6 py-2 rounded bg-brand-600 hover:bg-brand-500 transition" disabled={selected === null}>Siguiente</button>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <div className="text-2xl font-semibold">Resultado: {score} / {QUESTIONS.length}</div>
            <div className="text-slate-300 mt-2">{score >= 4 ? '¡Excelente! Dominio sólido.' : score >= 2 ? 'Vas bien, repasa algunas secciones.' : 'Buen intento, vuelve a explorar el OVA.'}</div>
            <button onClick={reset} className="mt-6 px-6 py-2 rounded border border-white/10 hover:bg-white/10 transition">Reiniciar</button>
          </div>
        )}
      </div>
    </section>
  )
}


