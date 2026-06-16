'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'

const headlineWords = ['Crafting', 'Digital', 'Experiences', 'That Matter.']

const wordVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const fadeUp = (delay: number) => ({
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const } },
})

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background orbs */}
      <motion.div
        className="orb w-[700px] h-[700px] -top-40 -left-40"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)' }}
        animate={{ x: [0, 60, -30, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb w-[500px] h-[500px] top-1/3 right-1/3"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)' }}
        animate={{ x: [0, -40, 20, 0], y: [0, 40, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      <motion.div
        className="orb w-[400px] h-[400px] bottom-20 left-1/4"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)' }}
        animate={{ x: [0, 30, -50, 0], y: [0, -30, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at 30% 50%, black 20%, transparent 75%)',
        }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center min-h-screen">

        {/* LEFT — text content */}
        <motion.div
          style={{ y: yParallax, opacity }}
          className="w-full lg:flex-1 pt-28 pb-8 lg:py-0 lg:pr-8 text-center lg:text-left"
        >
          {/* Badges */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
          >
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))',
                border: '1px solid rgba(99,102,241,0.35)',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </svg>
              <span className="text-xs font-semibold tracking-widest uppercase font-body" style={{ color: '#a5b4fc' }}>
                Founder · Ento Agency
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-muted tracking-widest uppercase font-body">Available</span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="mb-8">
            <h1
              className="font-display leading-none"
              style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)', letterSpacing: '-0.025em' }}
            >
              {headlineWords.map((word, i) => (
                <span key={word} className="inline-block mr-3 lg:mr-4 overflow-hidden align-bottom">
                  <motion.span
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block ${i === 2 ? 'gradient-text' : 'text-foreground'}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp(1.0)}
            initial="hidden"
            animate="visible"
            className="font-body mb-12 mx-auto lg:mx-0"
            style={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '480px', color: '#94a3b8' }}
          >
            Developer · Marketer · AI Builder — founder of{' '}
            <span style={{ color: '#a5b4fc', fontWeight: 600 }}>Ento</span>
            , building products at the intersection of{' '}
            <span style={{ color: '#a5b4fc' }}>design and technology</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(1.2)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-16"
          >
            <a href="#projects" className="cta-primary">
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a href="#contact" className="cta-secondary">Get in Touch</a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp(1.4)}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center lg:justify-start gap-10 flex-wrap"
          >
            {[
              { value: '10+', label: 'Projects Built' },
              { value: '6', label: 'Skill Domains' },
              { value: '3+', label: 'Years Building' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center lg:text-left">
                {i > 0 && <div className="hidden lg:block absolute w-px h-8 bg-white/10" style={{ marginLeft: '-20px', marginTop: '-4px' }} />}
                <p className="font-display gradient-text font-bold" style={{ fontSize: '2.2rem', lineHeight: 1 }}>
                  {stat.value}
                </p>
                <p className="text-xs font-body tracking-widest uppercase mt-1" style={{ color: '#475569' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Spline robot */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full h-64 sm:h-80 md:h-96 lg:flex-1 lg:h-auto lg:self-stretch relative mb-8 lg:mb-0"
        >
          {/* Left-edge fade so robot dissolves into text side */}
          <div
            className="absolute left-0 top-0 bottom-0 w-40 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, #05050a, transparent)' }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to bottom, transparent, #05050a)' }}
          />
          {/* Top fade */}
          <div
            className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to bottom, #05050a, transparent)' }}
          />
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeUp(2)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-subtle tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-12 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <motion.div
            className="w-full h-full rounded-full"
            style={{ background: 'linear-gradient(to bottom, #6366f1, transparent)' }}
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
