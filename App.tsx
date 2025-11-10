import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Timeline from './components/Timeline'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import Converter from './components/Converter'
import Quiz from './components/Quiz'
import { topics } from './data/topics'

/**
 * Componente auxiliar que desplaza la ventana al top o al ancla
 * cuando cambia la ruta/hash. Mejora UX con scroll suave.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])
  return null
}

/**
 * App: Layout principal del OVA. Renderiza el `Navbar`, el hero,
 * la línea de tiempo, cada sección mapeada desde `topics`, el
 * laboratorio (Converter), el quiz y la explicación final.
 */
export default function App() {
  return (
    <div className="min-h-screen section-gradient">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-20">
                <Timeline />
                {topics.map((t) => (
                  <Section key={t.id} topic={t} />
                ))}
                <Converter />
                <Quiz />
                <HowItWorks />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  )
}


