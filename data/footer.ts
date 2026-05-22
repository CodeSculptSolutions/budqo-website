export type FooterLink = {
  label: string
  href: string
  external?: boolean
}

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export const footer = {
  logoText: 'Budqo',
  tagline: 'Personal finance, done your way.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'Built by CodeSculpt Solutions',
          href: 'https://codesculptsolutions.com/',
          external: true,
        },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ] satisfies FooterColumn[],
  social: [
    { platform: 'Twitter / X', href: '#', icon: 'Twitter' },
    { platform: 'Instagram', href: '#', icon: 'Instagram' },
  ],
  legal: {
    copyright: `© ${new Date().getFullYear()} Budqo. All rights reserved.`,
    builtBy: {
      label: 'Built by CodeSculpt Solutions',
      href: 'https://codesculptsolutions.com/',
    },
  },
}
