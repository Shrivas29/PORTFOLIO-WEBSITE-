import { SpiderCursor } from '@/components/ui/spider-cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import OrbitalJourney from '@/components/OrbitalJourney'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Subtle radial vignette on the whole page */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Spider cursor overlay — screen blend makes black transparent, only white webs show */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ mixBlendMode: 'screen', opacity: 0.25 }}
      >
        <SpiderCursor />
      </div>

      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
      </div>

      <About />

      <OrbitalJourney />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
      </div>

      <Skills />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
      </div>

      <Projects />

      <Achievements />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
      </div>

      <Services />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
      </div>

      <Contact />
      <Footer />
    </main>
  )
}
