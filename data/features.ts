export type Feature = {
  id: string
  icon: string
  title: string
  description: string
  accent: 'green' | 'blue' | 'purple' | 'red' | 'amber' | 'teal'
}

export const features: Feature[] = [
  {
    id: 'truth-number',
    icon: 'Target',
    title: 'Your Truth Number',
    description:
      'After every commitment, Budqo shows the one number that matters — how much you actually have left. No surprises, no guessing.',
    accent: 'green',
  },
  {
    id: 'envelopes',
    icon: 'Layers',
    title: 'Envelope Budgeting',
    description:
      'Allocate money into virtual envelopes per category — needs, wants, savings, debt. Spend from the envelope. When it\'s empty, it\'s empty.',
    accent: 'blue',
  },
  {
    id: 'pay-cycles',
    icon: 'CalendarDays',
    title: 'Flexible Pay Cycles',
    description:
      'Paid on the 15th and 30th? Weekly? Monthly? Budqo adapts to how you actually get paid — not how apps assume you do.',
    accent: 'purple',
  },
  {
    id: 'debt-escape',
    icon: 'TrendingDown',
    title: 'Debt Escape Plan',
    description:
      'Visualize your way out of debt with the avalanche method. See exactly when you\'ll be free and how much interest you\'ll save.',
    accent: 'red',
  },
  {
    id: 'goals',
    icon: 'Star',
    title: 'Goals That Stick',
    description:
      'Set savings goals for what actually matters — an emergency fund, a trip, a gadget — and optionally link them to your envelopes.',
    accent: 'amber',
  },
  {
    id: 'multi-income',
    icon: 'Banknote',
    title: 'Multiple Income Sources',
    description:
      'Two paydays with different amounts? Side gigs? Budqo handles irregular and multiple income sources as a first-class feature.',
    accent: 'teal',
  },
]

export const howItWorks = [
  {
    step: '01',
    title: 'Set your pay cycle',
    description:
      'Tell Budqo when and how often you get paid. Weekly, biweekly (15th & 30th), or monthly — even with different amounts per payday.',
  },
  {
    step: '02',
    title: 'Create your envelopes',
    description:
      'Build virtual money buckets for rent, groceries, savings, subscriptions — anything you spend on. Allocate your income across them.',
  },
  {
    step: '03',
    title: 'Track, adapt, grow',
    description:
      'Log transactions in seconds. Budqo shows your Truth Number — what you have left after all commitments — updated in real time.',
  },
]
