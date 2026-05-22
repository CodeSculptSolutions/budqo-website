'use client'

import { useState } from 'react'
import { Check, X, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeInUp, StaggerChildren, StaggerItem } from '@/components/AnimatedSection'
import { pricing, type PricingTier } from '@data/pricing'

function PricingCard({ tier, annual }: { tier: PricingTier; annual: boolean }) {
  const price = annual ? tier.annualPrice : tier.monthlyPrice
  const monthlyEq = annual && tier.annualPrice ? tier.annualPrice.monthlyEquivalent : null
  const annualSaving = tier.monthlyPrice && tier.annualPrice
    ? Math.round((1 - tier.annualPrice.amount / (tier.monthlyPrice.amount * 12)) * 100)
    : null

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl p-7 border',
        tier.highlighted
          ? 'border-primary bg-card pricing-highlighted ring-1 ring-primary/20'
          : 'border-border bg-card hover:shadow-brand-md transition-shadow duration-300'
      )}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold',
              tier.highlighted
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground border border-border'
            )}
          >
            {tier.highlighted && <Sparkles size={11} aria-hidden="true" />}
            {tier.badge}
          </span>
        </div>
      )}

      {/* Plan name + description */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>
        <p className="text-sm text-muted-foreground">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mb-7">
        {price ? (
          <div>
            <div className="flex items-end gap-1">
              <span
                className="text-4xl font-extrabold tracking-tight text-foreground leading-none"
                style={{ fontFamily: 'var(--font-jakarta, ui-sans-serif)' }}
              >
                {price.currency}{annual && monthlyEq ? monthlyEq : price.amount}
              </span>
              <span className="text-sm text-muted-foreground mb-0.5">/mo</span>
            </div>
            {annual && price && (
              <p className="text-xs text-muted-foreground mt-1.5">
                Billed {price.currency}{tier.annualPrice?.amount}/year
                {annualSaving && (
                  <span className="ml-1.5 text-primary font-semibold">
                    · Save {annualSaving}%
                  </span>
                )}
              </p>
            )}
          </div>
        ) : (
          <div>
            <span
              className="text-4xl font-extrabold tracking-tight text-foreground leading-none"
              style={{ fontFamily: 'var(--font-jakarta, ui-sans-serif)' }}
            >
              Free
            </span>
            <p className="text-xs text-muted-foreground mt-1.5">Always free, no card needed</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <a
        href={tier.cta.href}
        className={cn(
          'flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          tier.highlighted
            ? 'bg-primary text-primary-foreground hover:bg-primary-light'
            : 'bg-secondary text-secondary-foreground hover:bg-muted border border-border'
        )}
      >
        {tier.cta.label}
      </a>

      {/* Divider */}
      <div className="my-7 border-t border-border" />

      {/* Feature list */}
      <ul className="flex flex-col gap-3">
        {tier.features.map((feat) => (
          <li key={feat.label} className="flex items-start gap-3">
            <span
              className={cn(
                'mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center',
                feat.included ? 'bg-primary-bg' : 'bg-muted'
              )}
            >
              {feat.included
                ? <Check size={10} className="text-primary" aria-hidden="true" />
                : <X size={10} className="text-muted-foreground opacity-50" aria-hidden="true" />
              }
            </span>
            <span
              className={cn(
                'text-sm leading-snug',
                feat.included ? 'text-foreground' : 'text-muted-foreground line-through'
              )}
            >
              {feat.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="bg-background py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ink-subtle mb-4">
              Pricing
            </p>
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4"
              style={{ fontFamily: '"General Sans", var(--font-manrope, ui-sans-serif)' }}
            >
              Simple, honest pricing.
            </h2>
            <p className="text-base text-muted-foreground max-w-md mx-auto">
              Start free, upgrade when you&apos;re ready. No hidden fees, no surprise charges.
            </p>
          </div>
        </FadeInUp>

        {/* Billing toggle */}
        <FadeInUp delay={0.1}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={cn('text-sm font-medium', !annual ? 'text-foreground' : 'text-muted-foreground')}>
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual(!annual)}
              className={cn(
                'relative w-12 h-6 rounded-full transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                annual ? 'bg-primary' : 'bg-muted border border-border'
              )}
            >
              <span
                className={cn(
                  'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200',
                  annual ? 'translate-x-6' : 'translate-x-0'
                )}
              />
              <span className="sr-only">Toggle annual billing</span>
            </button>
            <span className={cn('text-sm font-medium', annual ? 'text-foreground' : 'text-muted-foreground')}>
              Annual
              <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary-bg text-primary">
                Save up to 44%
              </span>
            </span>
          </div>
        </FadeInUp>

        {/* Cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {pricing.map((tier) => (
            <StaggerItem key={tier.id}>
              <PricingCard tier={tier} annual={annual} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Note */}
        <FadeInUp delay={0.2}>
          <p className="text-center text-xs text-muted-foreground mt-10">
            Prices shown in Philippine Pesos (₱). All plans include a free trial period at launch.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
