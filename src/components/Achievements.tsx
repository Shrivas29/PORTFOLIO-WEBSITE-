'use client'

import { motion } from 'framer-motion'

const achievements = [
  {
    number: '01',
    title: 'Air House Captain',
    category: 'Leadership',
    description:
      'Elected as Air House Captain — led a team of students across academic, cultural, and sports competitions. Mentored juniors, coordinated events, and fostered a culture of discipline and excellence within the house.',
    tags: ['Team Leadership', 'Mentorship', 'Strategy'],
    color: '#6366f1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Event Head — Technova',
    category: 'Event Management',
    description:
      'Served as Event Head for Technova, the college\'s flagship technical festival. Orchestrated logistics for hundreds of participants, coordinated with sponsors, managed a team of volunteers, and delivered a seamless large-scale experience.',
    tags: ['Event Strategy', 'Team Coordination', 'Execution'],
    color: '#8b5cf6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Competition Organizer',
    category: 'Entrepreneurial Initiative',
    description:
      'Independently designed, organized, and ran competitions at the college level — handling participant outreach, rule-setting, judging criteria, and prize management from end to end.',
    tags: ['Initiative', 'Organization', 'Leadership'],
    color: '#22d3ee',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Founder — Ento',
    category: 'Entrepreneurship',
    description:
      'Founded Ento, a web development and digital agency that builds premium web experiences for clients. Leading product strategy, client relations, and creative direction — building the future of digital presence from the ground up.',
    tags: ['Startup', 'Agency', 'Product Vision'],
    color: '#f97316',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative" style={{ padding: 'clamp(80px,12vw,140px) 0' }}>
      <div
        className="orb w-[500px] h-[500px] -left-40 top-1/3 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
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
            <p className="section-label mb-4">Recognition & Leadership</p>
            <h2
              className="font-display text-foreground"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Built to{' '}
              <span className="gradient-text italic">lead</span>,<br />
              built to ship.
            </h2>
          </div>
          <p className="text-sm font-body max-w-xs" style={{ color: '#64748b', lineHeight: 1.7 }}>
            From captaining teams to founding a company — each achievement represents a different dimension of the same drive.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-card p-5 sm:p-8 flex flex-col gap-5 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25`, color: item.color }}
                >
                  {item.icon}
                </div>
                <span
                  className="font-display font-bold text-5xl leading-none select-none"
                  style={{ color: `${item.color}12`, letterSpacing: '-0.04em' }}
                >
                  {item.number}
                </span>
              </div>

              {/* Title & category */}
              <div>
                <p className="text-xs font-body font-semibold tracking-widest uppercase mb-2" style={{ color: item.color }}>
                  {item.category}
                </p>
                <h3
                  className="font-body font-semibold"
                  style={{ color: '#f1f5f9', fontSize: '1.2rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-sm flex-1" style={{ color: '#64748b', lineHeight: 1.78 }}>
                {item.description}
              </p>

              {/* Tags + accent line */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium font-body px-3 py-1 rounded-full"
                      style={{
                        background: `${item.color}0d`,
                        border: `1px solid ${item.color}20`,
                        color: '#64748b',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, ${item.color}60, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
