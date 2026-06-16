'use client'

import { motion } from 'framer-motion'
import { Zap, Code, Star, Calendar, Cpu, Compass } from 'lucide-react'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'

const journeyData = [
  {
    id: 1,
    title: 'The Spark',
    date: '2022',
    content:
      'Discovered the power of code and design. Built first websites and fell in love with creating things on the internet.',
    category: 'Learning',
    icon: Zap,
    relatedIds: [2, 3],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'Air House Captain',
    date: '2023',
    content:
      'Led the Air House team — coordinating competitions, fostering team spirit, and mentoring juniors to excel academically and on the field.',
    category: 'Leadership',
    icon: Star,
    relatedIds: [1, 3],
    status: 'completed' as const,
    energy: 90,
  },
  {
    id: 3,
    title: 'Technova Event Head',
    date: '2023',
    content:
      'Orchestrated Technova, a major technical festival. Managed logistics for hundreds of participants and delivered a seamless experience.',
    category: 'Event',
    icon: Calendar,
    relatedIds: [2, 4],
    status: 'completed' as const,
    energy: 88,
  },
  {
    id: 4,
    title: 'NAVIGATE AI',
    date: '2024',
    content:
      'Launched an AI-powered tourism platform delivering personalized travel itineraries and real-time destination guidance.',
    category: 'Project',
    icon: Code,
    relatedIds: [3, 5],
    status: 'completed' as const,
    energy: 95,
  },
  {
    id: 5,
    title: 'Compass AI',
    date: '2024',
    content:
      'Built Compass AI — an AI-powered study abroad and higher education guidance platform. Acts as a personalized AI mentor helping students discover universities, find scholarships, optimize their CVs, and navigate the entire international education journey with confidence.',
    category: 'EdTech',
    icon: Compass,
    relatedIds: [4, 6],
    status: 'in-progress' as const,
    energy: 78,
  },
  {
    id: 6,
    title: 'Orion AI',
    date: '2025',
    content:
      'Developing Orion AI — a power management and optimization AI platform that intelligently monitors, predicts, and optimizes energy consumption across systems in real time.',
    category: 'Innovation',
    icon: Cpu,
    relatedIds: [5, 1],
    status: 'in-progress' as const,
    energy: 65,
  },
]

export default function OrbitalJourney() {
  return (
    <section id="journey" className="relative" style={{ height: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 sm:top-16 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none w-full px-4"
      >
        <p className="section-label mb-3">Interactive Journey</p>
        <h2
          className="font-display text-foreground"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
        >
          Click any node to{' '}
          <span className="gradient-text italic">explore</span>.
        </h2>
      </motion.div>

      <RadialOrbitalTimeline timelineData={journeyData} />
    </section>
  )
}
