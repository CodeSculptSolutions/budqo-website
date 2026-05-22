'use client'

import Link from 'next/link'
import { ArrowRight, TrendingDown, Target, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { PhoneMockup } from '@/components/PhoneMockup'
import { cn } from '@/lib/utils'
import { hero } from '@data/hero'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: delay + i * 0.09, ease: EASE }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}

function FloatChip({
  children,
  delay,
  className,
}: {
  children: React.ReactNode
  delay: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.55, ease: EASE }}
      className={cn(
        'absolute z-10 bg-card border border-border rounded-2xl shadow-brand-md',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

/* Floating card shape — reusable decorative rect */
function FloatRect({
  width,
  height,
  rotate,
  x,
  y,
  delay,
  floatY = 10,
  floatDuration = 5,
  opacity = 0.06,
  filled = false,
}: {
  width: number
  height: number
  rotate: number
  x: string
  y: string
  delay: number
  floatY?: number
  floatDuration?: number
  opacity?: number
  filled?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className="absolute pointer-events-none"
      style={{ top: y, left: x }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, -floatY, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut', delay }}
        style={{
          width,
          height,
          borderRadius: 14,
          transform: `rotate(${rotate}deg)`,
          background: filled ? `rgba(42,94,69,${opacity})` : 'transparent',
          border: filled ? 'none' : `1.5px solid rgba(42,94,69,${opacity * 3})`,
        }}
      />
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(42,94,69,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5,
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Background shapes ── */}

      {/* Fan of cards — top left */}
      <FloatRect width={120} height={76}  rotate={20}  x="2%"   y="8%"   delay={0.4} floatY={8}  floatDuration={6}   opacity={0.055} filled />
      <FloatRect width={120} height={76}  rotate={10}  x="3.5%" y="10%"  delay={0.5} floatY={8}  floatDuration={6}   opacity={0.04}  filled />
      <FloatRect width={120} height={76}  rotate={2}   x="5%"   y="12%"  delay={0.6} floatY={8}  floatDuration={6}   opacity={0.025} filled />

      {/* Outlined rect — bottom left */}
      <FloatRect width={90}  height={56}  rotate={-14} x="6%"   y="72%"  delay={0.7} floatY={12} floatDuration={7.5} opacity={0.08} />
      <FloatRect width={60}  height={38}  rotate={-6}  x="9%"   y="78%"  delay={0.9} floatY={10} floatDuration={8}   opacity={0.05} />

      {/* Small square — mid right edge */}
      <FloatRect width={52}  height={52}  rotate={18}  x="91%"  y="18%"  delay={0.6} floatY={14} floatDuration={6.5} opacity={0.06} />
      <FloatRect width={34}  height={34}  rotate={32}  x="88%"  y="26%"  delay={0.8} floatY={10} floatDuration={5.5} opacity={0.04} />

      {/* Large soft blob — center right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: '10%', right: '-5%',
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(42,94,69,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Top-right arc rings */}
      <div
        className="absolute -top-40 -right-40 w-[580px] h-[580px] rounded-full border border-primary/[0.06] pointer-events-none hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border border-primary/[0.04] pointer-events-none hidden lg:block"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div className="max-w-lg">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-xs font-semibold tracking-[0.14em] uppercase text-ink-subtle mb-5 flex items-center gap-2"
            >
              <span className="inline-block w-4 h-px bg-ink-subtle opacity-60" aria-hidden="true" />
              {hero.eyebrow}
            </motion.p>

            {/* Headline */}
            <h1
              className="font-extrabold leading-[0.9] tracking-[-0.045em] text-foreground mb-6"
              style={{
                fontFamily: '"General Sans", var(--font-manrope, ui-sans-serif)',
                fontSize: 'clamp(3.4rem, 9.5vw, 6rem)',
              }}
            >
              <WordReveal text={hero.headlinePart1} delay={0.08} />
              <br />
              <span className="text-primary">
                <WordReveal text={hero.headlinePart2} delay={0.2} />
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.46, ease: EASE }}
              className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-[400px] mb-8"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.56, ease: EASE }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Link
                href={hero.cta.primary.href}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-light transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {hero.cta.primary.label}
              </Link>
              <Link
                href={hero.cta.secondary.href}
                className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 rounded-full text-sm font-semibold text-ink-muted hover:text-ink hover:bg-muted transition-colors duration-150"
              >
                {hero.cta.secondary.label}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.72 }}
              className="flex flex-wrap gap-2"
            >
              {['Free tier always', 'No bank connect needed', 'iOS & Android'].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-ink-subtle border border-border bg-card"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-70 shrink-0" aria-hidden="true" />
                  {pill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: phone + decoration */}
          <div className="relative flex items-center justify-center min-h-[520px]">

            {/* Glow orb behind phone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(42,94,69,0.13), transparent 70%)',
              }}
              aria-hidden="true"
            />

            {/* Concentric rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="absolute w-[300px] h-[300px] rounded-full border border-primary/10 pointer-events-none"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute w-[430px] h-[430px] rounded-full border border-dashed border-primary/[0.07] pointer-events-none"
              aria-hidden="true"
            />

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
              className="relative z-[1]"
            >
              {/* <PhoneMockup src={hero.screenshots[0]} /> */}
              <PhoneMockup src="/image.png" />
            </motion.div>

            {/* Chip 1 — top-left: saved amount */}
            <FloatChip delay={0.95} className="-left-2 lg:-left-10 top-16 px-4 py-3 min-w-[152px]">
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(42,94,69,0.12)' }}
                >
                  <TrendingDown size={12} style={{ color: 'var(--color-primary)' }} />
                </span>
                <span className="text-[11px] text-ink-subtle font-medium">Free this period</span>
              </div>
              <p
                className="text-2xl font-extrabold tracking-tight leading-none"
                style={{ fontFamily: 'var(--font-jakarta, ui-sans-serif)', color: 'var(--color-primary)' }}
              >
                {hero.floatingStats[0].value}
              </p>
            </FloatChip>

            {/* Chip 2 — bottom-right: debt-free countdown */}
            <FloatChip delay={1.1} className="-right-2 lg:-right-8 bottom-20 px-4 py-3 min-w-[144px]">
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(37,99,235,0.1)' }}
                >
                  <Target size={12} style={{ color: '#2563EB' }} />
                </span>
                <span className="text-[11px] text-ink-subtle font-medium">Debt-free in</span>
              </div>
              <p
                className="text-2xl font-extrabold tracking-tight leading-none"
                style={{ fontFamily: 'var(--font-jakarta, ui-sans-serif)', color: '#2563EB' }}
              >
                {hero.floatingStats[1].value}
              </p>
            </FloatChip>

            {/* Chip 3 — top-right: streak */}
            <FloatChip delay={1.22} className="right-0 lg:right-4 top-10 px-3.5 py-2">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-5 h-5 rounded-md flex items-center justify-center"
                  style={{ background: 'rgba(217,119,6,0.12)' }}
                >
                  <Zap size={10} style={{ color: '#D97706' }} />
                </span>
                <span className="text-xs font-semibold text-foreground">5-day streak</span>
              </div>
            </FloatChip>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--background))' }}
        aria-hidden="true"
      />
    </section>
  )
}
