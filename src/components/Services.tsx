'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Website Development',
    description:
      'Premium, performant websites built with Next.js, React, and TypeScript. From pixel-perfect landing pages to complex web applications — fast, accessible, and built to scale.',
    features: ['Next.js / React', 'TypeScript + Tailwind', 'SEO-optimized', 'Mobile-first'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: '#6366f1',
    featured: true,
  },
  {
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies that grow audiences and convert. SEO, paid media, content strategy, and analytics — your brand, amplified with precision.',
    features: ['SEO & SEM Strategy', 'Social Media Growth', 'Paid Advertising', 'Analytics & Reporting'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    color: '#22d3ee',
    featured: false,
  },
  {
    title: 'Branding & Identity',
    description:
      'Crafting distinctive brand identities that resonate. Logo design, visual systems, brand voice, and guidelines — turning ideas into cohesive, memorable brands.',
    features: ['Logo & Visual Identity', 'Brand Guidelines', 'Typography Systems', 'Content Design'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="1.5" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    color: '#8b5cf6',
    featured: false,
  },
  {
    title: 'AI Solutions',
    description:
      'Integrating cutting-edge AI tools and automation into your workflow. From chatbots to AI-powered features, making your product smarter without the complexity.',
    features: ['AI Integration', 'Workflow Automation', 'Prompt Engineering', 'LLM Implementation'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    color: '#f59e0b',
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative" style={{ padding: 'clamp(80px,12vw,140px) 0' }}>
      <div
        className="orb w-[600px] h-[400px] -right-40 bottom-20 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16"
        >
          <p className="section-label mb-4">What I Offer</p>
          <h2
            className="font-display text-foreground"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: '640px' }}
          >
            Services built for{' '}
            <span className="gradient-text italic">real results</span>.
          </h2>
        </motion.div>

        {/* Ento Agency banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 100%)',
            border: '1px solid rgba(99,102,241,0.25)',
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-lg"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff' }}
            >
              E
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-body font-bold text-base" style={{ color: '#f1f5f9' }}>Ento</h3>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-semibold font-body"
                  style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)' }}
                >
                  Founder
                </span>
              </div>
              <p className="text-sm font-body" style={{ color: '#64748b' }}>
                Web Development Agency — building premium digital products for brands and startups.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="cta-primary flex-shrink-0 !py-2.5 !px-6 !text-sm"
          >
            Work with Ento
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-5 sm:p-8 flex flex-col gap-6 group"
              style={service.featured ? { border: '1px solid rgba(99,102,241,0.25)' } : {}}
            >
              {service.featured && (
                <div className="flex items-center gap-2">
                  <div
                    className="px-3 py-1 rounded-full text-xs font-semibold font-body"
                    style={{ background: 'rgba(99,102,241,0.15)', color: '#6366f1', border: '1px solid rgba(99,102,241,0.25)' }}
                  >
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}25`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  className="font-body font-semibold mb-3"
                  style={{ color: '#f1f5f9', fontSize: '1.15rem' }}
                >
                  {service.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#64748b', lineHeight: 1.75 }}>
                  {service.description}
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-2.5">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${service.color}15` }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm font-body" style={{ color: '#94a3b8' }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-sm font-semibold font-body transition-all duration-200 group-hover:gap-3"
                  style={{ color: service.color }}
                >
                  Get Started
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
