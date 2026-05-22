import Link from 'next/link'
import { BudqoLogo } from '@/components/Logo'
import { footer } from '@data/footer'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <BudqoLogo textClass="text-foreground" className="mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Nav columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-ink-subtle mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {footer.legal.copyright}
          </p>
          <a
            href={footer.legal.builtBy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-150"
          >
            {footer.legal.builtBy.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
