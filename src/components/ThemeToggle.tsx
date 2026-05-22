'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center rounded-full',
        'text-ink-muted hover:text-ink hover:bg-muted',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
    >
      <Sun
        className="absolute h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <Moon
        className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
    </button>
  )
}
