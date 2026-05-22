'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const lines = [
  { words: ['Most', 'apps', 'assume'], muted: true },
  { words: ['you', 'get', 'paid', 'on', 'the', '1st.'], muted: false },
  { words: ["You", "don't."], accent: true },
]

const payCycles = [
  { id: 'weekly',    label: 'Weekly',       detail: 'Resets every Monday' },
  { id: 'biweekly',  label: '15th & 30th',  detail: 'Resets twice a month' },
  { id: 'monthly',   label: 'Monthly',      detail: 'Resets on your payday' },
]

function WordReveal({
  words,
  color,
  baseDelay,
}: {
  words: string[]
  color: string
  baseDelay: number
}) {
  return (
    <span>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.22em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '80%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: baseDelay + i * 0.07, ease: EASE }}
            style={{ color }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function BigStatement() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [active, setActive] = useState('biweekly')

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY   = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const cardY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 sm:py-36"
      style={{ background: '#1B3A2D' }}
      aria-label="Budqo difference"
    >
      {/* Parallax blob — top right */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.07), transparent 70%)' }} />
      </motion.div>

      {/* Parallax blob — bottom left */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.025), transparent 70%)' }} />
      </motion.div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Floating card shapes — right side, parallax */}
      <motion.div
        style={{ y: cardY }}
        className="absolute top-8 right-6 lg:right-20 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        {[
          { rotate: -20, top: 0,   right: 80,  w: 160, h: 100, delay: 0,   floatY: 10, dur: 5.5 },
          { rotate: -8,  top: 24,  right: 40,  w: 160, h: 100, delay: 0.1, floatY: 8,  dur: 6.5 },
          { rotate: 3,   top: 48,  right: 0,   w: 160, h: 100, delay: 0.2, floatY: 12, dur: 7   },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: c.delay + 0.3, ease: EASE }}
            style={{ position: 'absolute', top: c.top, right: c.right }}
          >
            <motion.div
              animate={{ y: [0, -c.floatY, 0] }}
              transition={{ duration: c.dur, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
              style={{
                width: c.w, height: c.h,
                borderRadius: 18,
                border: '1.5px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                transform: `rotate(${c.rotate}deg)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Small squares — left edge decoration */}
      {[
        { size: 36, rotate: 22,  top: '15%', left: '2%',  delay: 0.5, floatY: 8,  dur: 6 },
        { size: 22, rotate: 45,  top: '55%', left: '4%',  delay: 0.7, floatY: 12, dur: 8 },
        { size: 28, rotate: -12, top: '80%', left: '1.5%',delay: 0.9, floatY: 6,  dur: 5 },
      ].map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: s.delay }}
          className="absolute pointer-events-none hidden lg:block"
          style={{ top: s.top, left: s.left }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, -s.floatY, 0], rotate: [s.rotate, s.rotate + 4, s.rotate] }}
            transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: s.size, height: s.size,
              borderRadius: 6,
              border: '1.5px solid rgba(74,222,128,0.15)',
            }}
          />
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">

          {/* Big text — word by word */}
          <div>
            {lines.map((line, li) => (
              <p
                key={li}
                className="font-extrabold leading-[1.05] tracking-tight"
                style={{
                  fontFamily: '"General Sans", var(--font-manrope, ui-sans-serif)',
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  marginBottom: li === 1 ? '0.4em' : '0',
                }}
              >
                {isInView && (
                  <WordReveal
                    words={line.words}
                    color={
                      line.accent
                        ? '#4ADE80'
                        : line.muted
                        ? 'rgba(255,255,255,0.30)'
                        : '#FFFFFF'
                    }
                    baseDelay={li * 0.22}
                  />
                )}
              </p>
            ))}
          </div>

          {/* Body + link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.72, ease: EASE }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-5"
          >
            <p style={{ color: 'rgba(255,255,255,0.50)', maxWidth: '30rem', fontSize: '1rem', lineHeight: 1.7 }}>
              Budqo syncs to your actual pay schedule — weekly, biweekly on the 15th &amp; 30th, or monthly. Your budget resets when you get paid. Not before.
            </p>
            <Link
              href="#features"
              className="flex items-center gap-2 shrink-0 text-sm font-semibold mt-1 transition-opacity hover:opacity-75"
              style={{ color: '#4ADE80' }}
            >
              See how it works
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Interactive pay cycle picker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.88, ease: EASE }}
            className="mt-10"
          >
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Your pay cycle
            </p>
            <div className="flex flex-wrap gap-2">
              {payCycles.map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setActive(cycle.id)}
                  className="relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-150 focus-visible:outline-none"
                  style={{
                    background: active === cycle.id ? 'rgba(74,222,128,0.15)' : 'rgba(255,255,255,0.06)',
                    color: active === cycle.id ? '#4ADE80' : 'rgba(255,255,255,0.45)',
                    border: `1px solid ${active === cycle.id ? 'rgba(74,222,128,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  {active === cycle.id && (
                    <motion.span
                      layoutId="cycle-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.28)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{cycle.label}</span>
                </button>
              ))}
            </div>

            {/* Detail line */}
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 text-sm"
              style={{ color: 'rgba(74,222,128,0.7)' }}
            >
              ✓ {payCycles.find(c => c.id === active)?.detail}
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
