'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    id: 'web',
    label: 'Web Development',
    description: 'Building fast, modern, and accessible web experiences end-to-end.',
    color: '#6366f1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'HTML & CSS', 'Git'],
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    description: 'Data-driven strategies that grow audiences and convert at scale.',
    color: '#22d3ee',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    skills: ['SEO & SEM', 'Google Ads', 'Meta Ads', 'Social Media', 'Content Strategy', 'Analytics', 'Email Marketing'],
  },
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    description: 'Harnessing AI to build smarter products and automated workflows.',
    color: '#8b5cf6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    skills: ['LLMs & Prompting', 'ChatGPT', 'Claude', 'Midjourney', 'AI Automation', 'RAG Systems', 'Workflow AI'],
  },
  {
    id: 'python',
    label: 'Python',
    description: 'Scripting, automation, data processing and backend logic.',
    color: '#f59e0b',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    skills: ['Python 3', 'Automation Scripts', 'Data Processing', 'API Integration', 'Web Scraping', 'Libraries & Frameworks'],
  },
  {
    id: 'speaking',
    label: 'Public Speaking',
    description: 'Commanding stages, hosting events, and inspiring audiences.',
    color: '#10b981',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    skills: ['Stage Presence', 'Storytelling', 'Event Hosting', 'Debate', 'Presentations', 'Team Leadership', 'Mentoring'],
  },
  {
    id: 'startup',
    label: 'Startup Development',
    description: 'Building products, teams, and companies from the ground up.',
    color: '#f97316',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    skills: ['Product Strategy', 'Brand Building', 'Team Leadership', 'Pitching', 'MVP Development', 'Go-to-Market', 'Client Relations'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative" style={{ padding: 'clamp(80px,12vw,140px) 0' }}>
      <div
        className="orb w-[500px] h-[500px] -left-40 top-1/2 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <p className="section-label mb-4">Skills & Expertise</p>
            <h2
              className="font-display text-foreground"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Built across{' '}
              <span className="gradient-text italic">six disciplines</span>.
            </h2>
          </div>
          <p className="text-sm font-body max-w-xs" style={{ color: '#64748b', lineHeight: 1.7 }}>
            From code to campaigns, AI to entrepreneurship — every domain in service of the product.
          </p>
        </motion.div>

        {/* 3×2 skill grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-card p-5 sm:p-7 flex flex-col gap-5"
            >
              {/* Icon + label */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}25`, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-body font-semibold mb-1" style={{ color: '#f1f5f9', fontSize: '0.975rem', lineHeight: 1.3 }}>
                    {cat.label}
                  </h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: '#475569', lineHeight: 1.6 }}>
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body"
                    style={{
                      background: `${cat.color}0d`,
                      border: `1px solid ${cat.color}20`,
                      color: '#64748b',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Accent line */}
              <div
                className="h-px rounded-full mt-auto"
                style={{ background: `linear-gradient(90deg, ${cat.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
