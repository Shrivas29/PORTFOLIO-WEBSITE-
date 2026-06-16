'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', padding: '48px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm font-body">
              S
            </div>
            <span className="font-display text-lg font-medium" style={{ color: '#f1f5f9', letterSpacing: '-0.01em' }}>
              Shrivas <span className="gradient-text">VM</span>
            </span>
          </div>

          <p className="text-xs font-body text-center" style={{ color: '#334155' }}>
            © {new Date().getFullYear()} Shrivas V.M. — Crafted with precision.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)', color: '#6366f1' }}
            aria-label="Scroll to top"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
