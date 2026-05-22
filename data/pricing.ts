export type PricingFeature = {
  label: string
  included: boolean
}

export type PricingTier = {
  id: string
  name: string
  badge?: string
  description: string
  monthlyPrice: { amount: number; currency: string } | null
  annualPrice: { amount: number; currency: string; monthlyEquivalent: number } | null
  features: PricingFeature[]
  cta: { label: string; href: string }
  highlighted: boolean
}

export const pricing: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Everything you need to get started — no credit card required.',
    monthlyPrice: null,
    annualPrice: null,
    highlighted: false,
    cta: { label: 'Get Started Free', href: '#waitlist' },
    features: [
      { label: 'Up to 10 envelopes', included: true },
      { label: 'Light + dark mode', included: true },
      { label: 'Manual transactions', included: true },
      { label: 'Goals tracker', included: true },
      { label: 'Debt Escape Plan', included: true },
      { label: 'Basic spending insights', included: true },
      { label: 'Unlimited envelopes', included: false },
      { label: 'Color themes + fonts', included: false },
      { label: 'Export reports', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'Most popular',
    description: 'For serious budgeters who want the full experience.',
    monthlyPrice: { amount: 149, currency: '₱' },
    annualPrice: { amount: 1499, currency: '₱', monthlyEquivalent: 125 },
    highlighted: true,
    cta: { label: 'Start Free Trial', href: '#waitlist' },
    features: [
      { label: 'Unlimited envelopes', included: true },
      { label: 'All 5 color themes', included: true },
      { label: 'Font size controls', included: true },
      { label: 'Compact mode', included: true },
      { label: 'Offline mode', included: true },
      { label: 'Export PDF/CSV reports', included: true },
      { label: 'Budget templates', included: true },
      { label: 'Custom envelope icons', included: true },
      { label: 'Recurring transactions', included: true },
    ],
  },
  {
    id: 'couples',
    name: 'Couples',
    badge: 'Best for two',
    description: 'Budget together in real time. One plan, two people.',
    monthlyPrice: { amount: 199, currency: '₱' },
    annualPrice: { amount: 1899, currency: '₱', monthlyEquivalent: 158 },
    highlighted: false,
    cta: { label: 'Get Couples Plan', href: '#waitlist' },
    features: [
      { label: 'Everything in Premium', included: true },
      { label: 'Shared envelopes', included: true },
      { label: 'Real-time sync with partner', included: true },
      { label: 'Multi-currency support', included: true },
      { label: 'Joint financial goals', included: true },
      { label: '2 user accounts, 1 price', included: true },
    ],
  },
]
