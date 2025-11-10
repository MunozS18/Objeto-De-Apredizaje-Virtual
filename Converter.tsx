import { useMemo, useState } from 'react'

/** Convierte un número decimal (>=0) a binario como string. */
function toBinary(n: number) {
  if (!Number.isFinite(n) || n < 0) return ''
  return n.toString(2)
}

/** Convierte un string binario válido a número decimal. */
function toDecimal(bin: string) {
  if (!/^[01]+$/.test(bin)) return NaN
  return parseInt(bin, 2)
}

/**
 * Converter: laboratorio interactivo para practicar conversión
 * Decimal ↔ Binario. Valida entradas y calcula en tiempo real
 * usando useMemo para evitar cómputo innecesario al escribir.
 */
export default function Converter() {
  const [decimal, setDecimal] = useState<string>('13')
  const [binary, setBinary] = useState<string>('1101')

  const convertedBinary = useMemo(() => {
    const n = Number(decimal)
    return Number.isFinite(n) && n >= 0 ? toBinary(n) : ''
  }, [decimal])

  const convertedDecimal = useMemo(() => {
    return /^[01]+$/.test(binary) ? String(toDecimal(binary)) : ''
  }, [binary])

  return (
    <section id="lab-binario" className="scroll-mt-24">
      <div className="card-glass p-6 md:p-10">
        <h2 className="text-3xl font-bold">Laboratorio: Conversión Decimal ↔ Binario</h2>
        <p className="text-slate-300 mt-2">Convierte números en tiempo real y aprende el proceso.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card-glass p-4">
            <div className="text-brand-300 font-semibold mb-2">Decimal → Binario</div>
            <input
              className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 outline-none"
              placeholder="Ingresa un número decimal (>=0)"
              value={decimal}
              onChange={(e) => setDecimal(e.target.value.replace(/[^0-9]/g, ''))}
            />
            <div className="mt-3 text-sm text-slate-300">Resultado: <span className="font-mono">{convertedBinary}</span></div>
          </div>

          <div className="card-glass p-4">
            <div className="text-brand-300 font-semibold mb-2">Binario → Decimal</div>
            <input
              className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 outline-none"
              placeholder="Ingresa un número binario (solo 0 y 1)"
              value={binary}
              onChange={(e) => setBinary(e.target.value.replace(/[^01]/g, ''))}
            />
            <div className="mt-3 text-sm text-slate-300">Resultado: <span className="font-mono">{convertedDecimal}</span></div>
          </div>
        </div>

        <details className="mt-6 card-glass p-4">
          <summary className="cursor-pointer font-semibold">Ver explicación de la conversión</summary>
          <ul className="list-disc pl-6 mt-3 text-sm text-slate-300 space-y-1">
            <li>Decimal → Binario: divide por 2, toma el resto, repite hasta 0, lee restos al revés.</li>
            <li>Binario → Decimal: suma de potencias de 2 donde hay 1 (ej. 1101₂ = 8+4+0+1).</li>
          </ul>
        </details>
      </div>
    </section>
  )
}


