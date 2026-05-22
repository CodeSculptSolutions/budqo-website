export type FAQItem = {
  id: string
  question: string
  answer: string
}

export const faq: FAQItem[] = [
  {
    id: 'what-is-budqo',
    question: 'What is Budqo?',
    answer:
      'Budqo is a personal finance app built around how you actually get paid. Instead of forcing you into a monthly reset, it syncs to your pay cycle — weekly, biweekly (15th and 30th), or monthly. Use envelopes to allocate your income, track your spending, chase goals, and get out of debt — all in one place.',
  },
  {
    id: 'different-from-others',
    question: 'How is Budqo different from other budgeting apps?',
    answer:
      'Most apps assume you get paid once a month and reset on the 1st. Budqo doesn\'t. It\'s built from the ground up for flexible pay cycles and multiple income sources — common in the Philippines where biweekly paydays are the norm. Add the Truth Number (your real available balance after all commitments), envelope budgeting, and a debt escape plan, and you get a tool that works for your actual life.',
  },
  {
    id: 'envelope-budgeting',
    question: 'What is envelope budgeting?',
    answer:
      'Envelope budgeting is a method where you divide your income into categories — food, rent, transport, savings, etc. — and allocate a set amount to each. Once an envelope is empty, you\'re done spending in that category until the next payday. Budqo makes this digital and connects it to your actual pay schedule.',
  },
  {
    id: 'pay-cycles',
    question: 'What pay cycles does Budqo support?',
    answer:
      'Budqo supports weekly, biweekly (paid on the 15th and 30th each month), and monthly pay cycles. For biweekly users, you can even set different income amounts for each payday — perfect if your 15th and 30th amounts differ.',
  },
  {
    id: 'free-tier',
    question: 'Is there a free tier?',
    answer:
      'Yes. The free tier includes up to 10 envelopes, manual transaction tracking, goals, and the Debt Escape Plan. No credit card required to sign up. When you outgrow the free tier, Premium unlocks unlimited envelopes, all themes, offline mode, export reports, and more for ₱149/month or ₱1,499/year.',
  },
  {
    id: 'bank-connect',
    question: 'Do I need to connect my bank account?',
    answer:
      'No. Budqo is intentionally manual — you log transactions yourself, which keeps you engaged with where your money actually goes. Bank sync (via Brankas) is coming as an optional feature for users who want it, but it will never be required.',
  },
  {
    id: 'data-safety',
    question: 'Is my financial data safe?',
    answer:
      'Your data is stored securely and never sold to third parties. Budqo stores only the numbers you enter — not your actual bank credentials or real account data. Full privacy policy details will be available at launch.',
  },
  {
    id: 'when-launch',
    question: 'When is Budqo launching?',
    answer:
      'We\'re putting the finishing touches on the app now. Join the waitlist to get early access and be the first to know when we launch on iOS and Android. Waitlist members get priority access.',
  },
]
