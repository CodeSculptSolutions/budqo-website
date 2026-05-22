'use client'

import { useRef, useCallback } from 'react'
import {
  Target, Layers, CalendarDays, TrendingDown, Star, Banknote,
} from 'lucide-react'
import { MagneticCard } from '@/components/MagneticCard'
import { FadeInUp, StaggerChildren, StaggerItem } from '@/components/AnimatedSection'
import { features, howItWorks, type Feature } from '@data/features'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Target, Layers, CalendarDays, TrendingDown, Star, Banknote,
}

const accentMap: Record<Feature['accent'], { bg: string; icon: string }> = {
  green:  { bg: '#E8F2EC', icon: '#2A5E45' },
  blue:   { bg: '#EFF6FF', icon: '#2563EB' },
  purple: { bg: '#F5F3FF', icon: '#7C3AED' },
  red:    { bg: '#FEF2F2', icon: '#DC2626' },
  amber:  { bg: '#FFFBEB', icon: '#D97706' },
  teal:   { bg: '#ECFDF5', icon: '#059669' },
}

const darkAccentMap: Record<Feature['accent'], { bg: string; icon: string }> = {
  green:  { bg: 'rgba(42,94,69,0.15)',  icon: '#4ADE80' },
  blue:   { bg: 'rgba(37,99,235,0.12)', icon: '#93C5FD' },
  purple: { bg: 'rgba(124,58,237,0.12)',icon: '#C4B5FD' },
  red:    { bg: 'rgba(220,38,38,0.12)', icon: '#FCA5A5' },
  amber:  { bg: 'rgba(217,119,6,0.12)', icon: '#FCD34D' },
  teal:   { bg: 'rgba(5,150,105,0.12)', icon: '#6EE7B7' },
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = iconMap[feature.icon] ?? Target
  const light = accentMap[feature.accent]
  const dark = darkAccentMap[feature.accent]

  return (
    <MagneticCard>
      <div className="group bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/20 transition-colors duration-300">
        {/* Light mode icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 dark:hidden"
          style={{ background: light.bg }}
          aria-hidden="true"
        >
          <span style={{ color: light.icon }}><Icon size={20} /></span>
        </div>
        {/* Dark mode icon */}
        <div
          className="hidden dark:flex w-11 h-11 rounded-xl items-center justify-center mb-5"
          style={{ background: dark.bg }}
          aria-hidden="true"
        >
          <span style={{ color: dark.icon }}><Icon size={20} /></span>
        </div>

        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </MagneticCard>
  )
}

function SpotlightGrid({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current || !overlayRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    overlayRef.current.style.background = `radial-gradient(circle 480px at ${x}px ${y}px, rgba(42,94,69,0.06), transparent 70%)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!overlayRef.current) return
    overlayRef.current.style.background = 'none'
  }, [])

  return (
    <div ref={containerRef} className="relative" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div ref={overlayRef} className="absolute inset-0 pointer-events-none rounded-3xl transition-none" aria-hidden="true" />
      {children}
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="bg-card py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ink-subtle mb-4 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-ink-subtle opacity-60" aria-hidden="true" />
              Features
            </p>
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.05]"
              style={{ fontFamily: '"General Sans", var(--font-manrope, ui-sans-serif)' }}
            >
              Built for how you{' '}
              <span className="text-muted-foreground font-bold">actually spend.</span>
            </h2>
          </div>
        </FadeInUp>

        {/* Feature grid with cursor spotlight */}
        <SpotlightGrid>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <StaggerItem key={feature.id}>
                <FeatureCard feature={feature} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </SpotlightGrid>

        {/* How it works */}
        <div id="how-it-works" className="mt-28">
          <FadeInUp>
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ink-subtle mb-4 flex items-center gap-2">
                <span className="inline-block w-4 h-px bg-ink-subtle opacity-60" aria-hidden="true" />
                How It Works
              </p>
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.05]"
                style={{ fontFamily: '"General Sans", var(--font-manrope, ui-sans-serif)' }}
              >
                Up and running in minutes.
              </h2>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {howItWorks.map((step, idx) => (
              <StaggerItem key={step.step}>
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-5xl font-extrabold tracking-tight leading-none select-none"
                      style={{
                        fontFamily: 'var(--font-jakarta, ui-sans-serif)',
                        color: 'var(--color-primary)',
                        opacity: 0.2,
                      }}
                    >
                      {step.step}
                    </span>
                    {idx < howItWorks.length - 1 && (
                      <div className="hidden md:block flex-1 h-px border-t border-dashed border-border" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
