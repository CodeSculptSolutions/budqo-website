'use client'

import Link from 'next/link'
import { Apple, Smartphone } from 'lucide-react'
import { FadeInUp } from '@/components/AnimatedSection'
import { ctaSection } from '@data/cta'

export function DownloadCTA() {
  return (
    <section
      id="waitlist"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#1B3A2D' }}
      aria-label="Download or join waitlist"
    >
      {/* Decorative blobs — matches mobile HeroCard style */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <FadeInUp>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(74,222,128,0.12)',
              color: '#4ADE80',
              border: '1px solid rgba(74,222,128,0.2)',
            }}
          >
            {ctaSection.eyebrow}
          </span>
        </FadeInUp>

        {/* Headline */}
        <FadeInUp delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5"
            style={{
              fontFamily: '"General Sans", var(--font-manrope, ui-sans-serif)',
              color: '#FFFFFF',
            }}
          >
            {ctaSection.headline}
          </h2>
        </FadeInUp>

        {/* Subheadline */}
        <FadeInUp delay={0.15}>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            {ctaSection.subheadline}
          </p>
        </FadeInUp>

        {/* Primary CTA */}
        <FadeInUp delay={0.2}>
          <Link
            href={ctaSection.waitlistCta.href}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold transition-all duration-150 mb-8"
            style={{
              background: '#4ADE80',
              color: '#0A1A0A',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#6EF09A' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#4ADE80' }}
          >
            {ctaSection.waitlistCta.label}
          </Link>
        </FadeInUp>

        {/* Store badges — pre-launch state */}
        <FadeInUp delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <StoreBadge
              icon={<Apple size={20} aria-hidden="true" />}
              line1="Download on the"
              line2="App Store"
              available={ctaSection.appStore.available}
              href={ctaSection.appStore.href}
            />
            <StoreBadge
              icon={<Smartphone size={20} aria-hidden="true" />}
              line1="Get it on"
              line2="Google Play"
              available={ctaSection.playStore.available}
              href={ctaSection.playStore.href}
            />
          </div>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            {ctaSection.badge}
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}

function StoreBadge({
  icon,
  line1,
  line2,
  available,
  href,
}: {
  icon: React.ReactNode
  line1: string
  line2: string
  available: boolean
  href: string
}) {
  return (
    <a
      href={available ? href : '#waitlist'}
      aria-label={`${line1} ${line2}${!available ? ' (coming soon)' : ''}`}
      className="relative flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all duration-150"
      style={{
        border: '1px solid rgba(255,255,255,0.15)',
        background: 'rgba(255,255,255,0.06)',
        color: '#fff',
        minWidth: '170px',
        opacity: available ? 1 : 0.6,
      }}
    >
      {icon}
      <div className="text-left">
        <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', lineHeight: 1 }}>{line1}</p>
        <p style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.3, marginTop: '2px' }}>{line2}</p>
      </div>
      {!available && (
        <span
          className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase"
          style={{ background: 'rgba(74,222,128,0.15)', color: '#4ADE80', letterSpacing: '0.05em' }}
        >
          Soon
        </span>
      )}
    </a>
  )
}
