'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const timeline = [
  {
    year: '2022',
    title: 'The Curiosity',
    description: 'Stepped beyond the classroom and into the internet. Learned how websites, products, and digital experiences are actually built — not from textbooks, but by pulling things apart and putting them back together.',
  },
  {
    year: '2023',
    title: 'Expanding My Skillset',
    description: 'Went deep on web development, Python, digital marketing, and emerging AI tools. Stopped being a consumer of technology and started becoming a builder. Entrepreneurship stopped being a concept and started feeling inevitable.',
  },
  {
    year: '2024',
    title: 'Leadership & Professional Growth',
    description: 'Led as Air House Captain. Ran Technova as Event Head, managing hundreds of participants across a full-scale technical festival. Joined ERP Roots as a Digital Marketing Intern — learning how strategy, content, and brand actually drive business outcomes.',
  },
  {
    year: '2025',
    title: 'Building Products',
    description: 'Founded Ento. Launched NAVIGATE AI, Compass AI, and Orion AI — three platforms built around one belief: technology should make something meaningfully easier for someone. This year, that belief became product.',
  },
  {
    year: '2026',
    title: 'Scaling the Vision',
    description: 'Founded Ento AI with the vision of building intelligent AI-powered products at scale. Combining artificial intelligence, product thinking, and business strategy to create technologies that solve real problems — not just impressive ones.',
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeSlide = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function About() {
  const lineRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 75%',
              end: 'bottom 25%',
              scrub: 0.5,
            },
          }
        )
      }

      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.08,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative" style={{ padding: 'clamp(80px,12vw,140px) 0' }}>
      <div
        className="orb w-[400px] h-[400px] top-20 -right-20 opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-20"
        >
          <p className="section-label mb-4">About Me</p>
          <h2
            className="font-display text-foreground"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Not just a student.{' '}
            <span className="gradient-text italic">A founder</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            <motion.p variants={fadeSlide} className="font-body" style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.85 }}>
              I&apos;m Shrivas V.M. — founder, builder, and product thinker. I believe technology
              exists for one reason: to solve a problem worth solving. Everything I make starts there.
            </motion.p>
            <motion.p variants={fadeSlide} className="font-body" style={{ color: '#94a3b8', lineHeight: 1.85 }}>
              I built NAVIGATE AI, Compass AI, and Orion AI not to pad a résumé, but because
              each one represented a real gap I wanted to close. That same instinct led me to found
              Ento — a digital solutions agency — and to join ERP Roots as a Digital Marketing Intern,
              where strategy met execution in ways a classroom never could have taught me.
            </motion.p>
            <motion.p variants={fadeSlide} className="font-body" style={{ color: '#94a3b8', lineHeight: 1.85 }}>
              As Air House Captain and Event Head at Technova, I learned that leadership isn&apos;t a
              title — it&apos;s accountability. As a founder, I learned that a great idea without
              a shipped product is just a conversation. Both lessons live in everything I build.
            </motion.p>

            {/* Values */}
            <motion.div variants={fadeSlide} className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '◆', label: 'Ship, then iterate' },
                { icon: '◈', label: 'Always learning' },
                { icon: '◉', label: 'Problem-first' },
                { icon: '◇', label: 'Founder mindset' },
              ].map((v) => (
                <div key={v.label} className="flex items-center gap-3">
                  <span style={{ color: '#6366f1', fontSize: '0.6rem' }}>{v.icon}</span>
                  <span className="text-sm font-body font-medium" style={{ color: '#cbd5e1' }}>{v.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Ento highlight chip */}
            <motion.div variants={fadeSlide} className="pt-2">
              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
                style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm font-body flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff' }}
                >
                  E
                </div>
                <div>
                  <p className="text-xs font-body font-bold tracking-widest uppercase" style={{ color: '#6366f1' }}>Founder</p>
                  <p className="text-sm font-body font-medium" style={{ color: '#cbd5e1' }}>Ento — Digital Solutions & Web Development Agency</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: timeline */}
          <div className="relative pl-8">
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <div
                ref={lineRef}
                className="w-full h-full"
                style={{ background: 'linear-gradient(to bottom, #6366f1, #8b5cf6, transparent)', transformOrigin: 'top' }}
              />
            </div>

            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item relative">
                  <div
                    className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: '#6366f1', background: '#05050a', marginLeft: '-1px' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#6366f1' }} />
                  </div>

                  <p className="section-label mb-1.5" style={{ fontSize: '0.65rem' }}>{item.year}</p>
                  <h3 className="font-body font-semibold text-base mb-2" style={{ color: '#f1f5f9' }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm" style={{ color: '#64748b', lineHeight: 1.75 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
