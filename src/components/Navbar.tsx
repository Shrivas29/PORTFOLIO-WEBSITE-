'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
      >
        <motion.div
          animate={{
            background: scrolled ? 'rgba(5,5,10,0.8)' : 'rgba(5,5,10,0)',
            borderColor: scrolled ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0)',
            backdropFilter: scrolled ? 'blur(24px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center justify-between gap-8 px-6 py-3 rounded-full border"
          style={{ maxWidth: 720, width: '100%' }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
          >
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm font-body select-none">
              S
            </div>
            <span className="text-sm font-semibold text-white/90 font-body tracking-wide hidden sm:block">
              Shrivas<span className="text-primary"> VM</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200"
                style={{
                  color: activeSection === link.href.slice(1) ? '#f8fafc' : '#94a3b8',
                }}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'rgba(99,102,241,0.15)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleNav('#contact')}
            className="cta-primary hidden md:inline-flex !py-2 !px-5 !text-xs flex-shrink-0"
          >
            Hire Me
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="block w-5 h-0.5 bg-white/80 rounded-full origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              className="block w-5 h-0.5 bg-white/80 rounded-full"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="block w-5 h-0.5 bg-white/80 rounded-full origin-center"
            />
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-24 left-4 right-4 z-40 glass rounded-2xl p-4"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium rounded-xl cursor-pointer transition-colors duration-200"
                style={{ color: activeSection === link.href.slice(1) ? '#a5b4fc' : '#94a3b8' }}
              >
                {link.label}
              </motion.button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="cta-primary w-full mt-3 justify-center !text-sm"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
