'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    label: 'Featured Project',
    title: 'NAVIGATE AI',
    subtitle: 'AI-Powered Tourism Platform',
    description:
      'An intelligent tourism platform leveraging AI to deliver hyper-personalized travel itineraries, real-time local recommendations, and contextual destination guidance — making travel effortless and memorable.',
    tags: ['AI', 'Next.js', 'Python', 'Travel Tech'],
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.22) 0%, rgba(139,92,246,0.14) 50%, rgba(34,211,238,0.08) 100%)',
    accentColor: '#6366f1',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    size: 'large',
    href: 'https://navigate-b77da9e5.base44.app',
  },
  {
    id: 2,
    label: 'EdTech · AI Mentorship',
    title: 'Compass AI',
    subtitle: 'AI-Powered Study Abroad Guidance Platform',
    description:
      'A personalized AI mentor that guides students through their entire international education journey — from discovering the right universities and scholarships to optimizing CVs, building stronger applications, and navigating the study-abroad process with confidence.',
    tags: ['AI', 'EdTech', 'University Matching', 'Scholarship Discovery', 'CV Optimization'],
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.22) 0%, rgba(99,102,241,0.12) 100%)',
    accentColor: '#8b5cf6',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    size: 'regular',
    href: 'https://compass.org.in',
  },
  {
    id: 3,
    label: 'AI Innovation',
    title: 'Orion AI',
    subtitle: 'Power Management & Optimization Platform',
    description:
      'A next-generation AI platform that intelligently monitors, predicts, and optimizes energy consumption across systems in real time — built for efficiency at scale.',
    tags: ['AI', 'Optimization', 'Energy Tech', 'Real-time'],
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.18) 0%, rgba(99,102,241,0.12) 100%)',
    accentColor: '#22d3ee',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    size: 'regular',
    href: 'https://power-guardian-ai-1b10b951.base44.app',
  },
  {
    id: 4,
    label: 'Web Design',
    title: 'Technova Website',
    subtitle: 'Official Tech Festival Platform',
    description:
      'Designed and built the official website for Technova — the college\'s flagship technical festival. A fast, visually striking platform handling registrations, event schedules, and real-time updates for hundreds of participants.',
    tags: ['Next.js', 'Tailwind CSS', 'UI/UX Design', 'Event Tech'],
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.16) 0%, rgba(34,211,238,0.1) 100%)',
    accentColor: '#6366f1',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    size: 'regular',
    href: 'https://shrivasvm.wixstudio.com/technova',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className={`glass-card overflow-hidden group cursor-pointer block ${project.size === 'large' ? 'lg:col-span-2' : ''}`}
    >
      {/* Visual header */}
      <div
        className="relative p-6 sm:p-10 flex items-end"
        style={{
          background: project.gradient,
          minHeight: project.size === 'large' ? 180 : 140,
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${project.accentColor}22 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}22 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="absolute top-8 left-10 p-3.5 rounded-2xl"
          style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}28`, color: project.accentColor }}
        >
          {project.icon}
        </div>
        <div
          className="absolute top-8 right-8 w-9 h-9 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          style={{ background: `${project.accentColor}20`, border: `1px solid ${project.accentColor}40`, color: project.accentColor }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-7">
        <p className="section-label mb-2" style={{ fontSize: '0.62rem' }}>{project.label}</p>
        <h3
          className="font-display font-semibold mb-1.5 group-hover:text-white transition-colors duration-200"
          style={{ fontSize: '1.5rem', color: '#f1f5f9', letterSpacing: '-0.01em', lineHeight: 1.2 }}
        >
          {project.title}
        </h3>
        <p className="text-xs font-body mb-4 font-semibold tracking-wide" style={{ color: project.accentColor }}>{project.subtitle}</p>
        <p className="text-sm font-body mb-6" style={{ color: '#64748b', lineHeight: 1.75 }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag" style={{ borderColor: `${project.accentColor}22`, color: '#64748b' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative" style={{ padding: 'clamp(80px,12vw,140px) 0' }}>
      <div
        className="orb w-[500px] h-[500px] -right-40 top-20 opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <p className="section-label mb-4">Selected Work</p>
            <h2
              className="font-display text-foreground"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Products built at the{' '}
              <span className="gradient-text italic">frontier</span>.
            </h2>
          </div>
          <p className="text-sm font-body max-w-xs" style={{ color: '#64748b', lineHeight: 1.7 }}>
            AI platforms, EdTech, event technology, and agency work — each project tells a story of ambition and craft.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
