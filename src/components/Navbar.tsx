'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BudqoLogo } from '@/components/Logo'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'
import { navbar } from '@data/navbar'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-brand'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" aria-label="Budqo home" onClick={() => setMobileOpen(false)}>
            <BudqoLogo textClass="text-foreground" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navbar.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink rounded-lg hover:bg-muted transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={navbar.cta.href}
              className={cn(
                'hidden sm:inline-flex items-center justify-center',
                'px-5 py-2.5 rounded-full text-sm font-semibold',
                'bg-primary text-primary-foreground',
                'hover:bg-primary-light transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              )}
            >
              {navbar.cta.label}
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-16"
          >
            <nav className="flex flex-col gap-1 px-5 pt-6 pb-4">
              {navbar.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-lg font-medium text-ink hover:text-primary rounded-xl hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-5 pb-8 mt-auto">
              <Link
                href={navbar.cta.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full px-5 py-4 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-primary-light transition-colors"
              >
                {navbar.cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
