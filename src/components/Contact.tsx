'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const socials = [
  {
    name: 'LinkedIn',
    handle: 'shrivas-vm',
    href: 'https://www.linkedin.com/in/shrivas-vm-612540250/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: '#0a66c2',
  },
  {
    name: 'GitHub',
    handle: 'Shrivas29',
    href: 'https://github.com/Shrivas29',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    color: '#f0f6fc',
  },
  {
    name: 'Instagram',
    handle: '@shrivas_66',
    href: 'https://www.instagram.com/shrivas_66/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    color: '#e1306c',
  },
  {
    name: 'Email',
    handle: 'shrivasvm@gmail.com',
    href: 'mailto:shrivasvm@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#6366f1',
  },
]

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [formState, setFormState] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    await new Promise((r) => setTimeout(r, 1400))
    setFormState('sent')
  }

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl font-body text-sm outline-none transition-all duration-200'
  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#f1f5f9',
    fontSize: '0.9rem',
  }

  return (
    <section id="contact" className="relative" style={{ padding: 'clamp(80px,12vw,140px) 0 80px' }}>
      <div
        className="orb w-[600px] h-[500px] left-1/2 -translate-x-1/2 top-0 opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16 text-center"
        >
          <p className="section-label mb-4">Get in Touch</p>
          <h2
            className="font-display text-foreground mx-auto mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: '700px' }}
          >
            Let&apos;s build something{' '}
            <span className="gradient-text italic">remarkable together</span>.
          </h2>
          <p className="font-body max-w-lg mx-auto" style={{ color: '#64748b', lineHeight: 1.75 }}>
            Open to freelance projects, full-time roles, and exciting collaborations. Drop a message — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-5"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 cursor-pointer no-underline"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${social.color}18`, color: social.color }}
                >
                  {social.icon}
                </div>
                <div>
                  <p className="text-xs font-body font-semibold tracking-widest uppercase" style={{ color: '#475569' }}>
                    {social.name}
                  </p>
                  <p className="text-sm font-body font-medium mt-0.5" style={{ color: '#cbd5e1' }}>
                    {social.handle}
                  </p>
                </div>
                <div className="ml-auto opacity-40">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-5 sm:p-8">
              {formState === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl mb-2" style={{ color: '#f1f5f9' }}>
                    Message Sent!
                  </h3>
                  <p className="font-body text-sm" style={{ color: '#64748b' }}>
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold font-body tracking-widest uppercase mb-2" style={{ color: '#475569' }}>
                        Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.5)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.04)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold font-body tracking-widest uppercase mb-2" style={{ color: '#475569' }}>
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.5)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.04)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold font-body tracking-widest uppercase mb-2" style={{ color: '#475569' }}>
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.5)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.04)' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold font-body tracking-widest uppercase mb-2" style={{ color: '#475569' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={inputClass}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.5)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.04)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="cta-primary w-full justify-center mt-2"
                    style={{ opacity: formState === 'sending' ? 0.7 : 1 }}
                  >
                    {formState === 'sending' ? (
                      <>
                        <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
