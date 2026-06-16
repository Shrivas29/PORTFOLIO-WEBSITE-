'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function FigureScene({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [figureUrl, setFigureUrl] = useState<string | null>(null)

  // Mouse motion values
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 85, damping: 22 })
  const springY = useSpring(rawY, { stiffness: 85, damping: 22 })
  const rotateY = useTransform(springX, [-0.5, 0.5], [-16, 16])
  const rotateX = useTransform(springY, [-0.5, 0.5], [9, -9])

  // Remove white background via Canvas API
  useEffect(() => {
    const img = new window.Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2]
        const minC = Math.min(r, g, b)
        const sat = Math.max(r, g, b) - minC

        if (minC > 232 && sat < 18) {
          // Pure white → fully transparent
          data[i + 3] = 0
        } else if (minC > 210 && sat < 30) {
          // Anti-aliasing edge → partial alpha
          const ratio = (minC - 210) / 22
          data[i + 3] = Math.round(data[i + 3] * (1 - ratio * 0.9))
        }
      }

      const processed = document.createElement('canvas')
      processed.width = canvas.width
      processed.height = canvas.height
      const ctx2 = processed.getContext('2d')!
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx2.putImageData(imageData, 0, 0)
      setFigureUrl(processed.toDataURL('image/png'))
    }
    img.src = '/figure.png'
  }, [])

  // Global mouse tracking
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      rawX.set((e.clientX - rect.left) / rect.width - 0.5)
      rawY.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [rawX, rawY])

  return (
    <div ref={containerRef} className={className} style={{ perspective: '1100px' }}>
      {/* Reactive ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 55% 50%, rgba(99,102,241,0.14) 0%, transparent 70%)',
          rotateY,
          rotateX,
        }}
      />

      {/* 3D tilt container */}
      <motion.div
        style={{ rotateY, rotateX, transformStyle: 'preserve-3d' }}
        className="w-full h-full flex items-end justify-center"
      >
        {/* Floating idle animation */}
        <motion.div
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex flex-col items-center pb-16"
        >
          {/* Ground / shadow glow */}
          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full blur-2xl pointer-events-none"
            style={{ width: 220, height: 44, background: 'rgba(99,102,241,0.32)' }}
            animate={{ opacity: [0.4, 0.7, 0.4], scaleX: [0.9, 1.12, 0.9] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Figure — transparent bg after canvas processing */}
          {figureUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={figureUrl}
              alt="Shrivas V.M."
              style={{
                maxHeight: '82vh',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 0 40px rgba(99,102,241,0.25)) drop-shadow(0 20px 60px rgba(0,0,0,0.5))',
              }}
            />
          ) : (
            // Placeholder while canvas processes
            <div style={{ width: 440, height: 620 }} />
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
