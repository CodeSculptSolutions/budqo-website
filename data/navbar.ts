export type NavLink = {
  label: string
  href: string
}

export const navbar = {
  logoText: 'Budqo',
  links: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ] satisfies NavLink[],
  cta: {
    label: 'Join the Waitlist',
    href: '#waitlist',
  },
}
