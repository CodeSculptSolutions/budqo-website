import type { Metadata, Viewport } from 'next'
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import './globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://budqo.com'),
  title: 'Budqo — Budget Your Way',
  description:
    'Personal finance built around your actual pay cycle — not some generic monthly reset. Envelopes, goals, debts — all in sync.',
  keywords: [
    'budgeting app',
    'personal finance',
    'envelope budgeting',
    'pay cycle',
    'debt tracker',
    'Philippines',
  ],
  authors: [{ name: 'CodeSculpt Solutions', url: 'https://codesculptsolutions.com' }],
  creator: 'CodeSculpt Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://budqo.com',
    siteName: 'Budqo',
    title: 'Budqo — Budget Your Way',
    description:
      'Personal finance built around your actual pay cycle — not some generic monthly reset.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Budqo — Personal Finance App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budqo — Budget Your Way',
    description: 'Personal finance built around your actual pay cycle.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F2EC' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0F0A' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jakartaSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700,800&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Film grain overlay — adds tactility, kills the AI-template look */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[9999]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
            opacity: 0.032,
            mixBlendMode: 'overlay',
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
