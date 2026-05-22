import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: number
}

export function BudqoLogoMark({ className, size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Card 1 — back, tilted left */}
      <rect
        x="12" y="21" width="40" height="27" rx="5"
        fill="rgba(255,255,255,0.20)"
        transform="rotate(-16 32 50)"
      />
      {/* Card 2 — middle, slight tilt */}
      <rect
        x="12" y="21" width="40" height="27" rx="5"
        fill="rgba(255,255,255,0.50)"
        transform="rotate(-6 32 50)"
      />
      {/* Card 3 — front, upright */}
      <rect
        x="12" y="21" width="40" height="27" rx="5"
        fill="rgba(255,255,255,0.97)"
      />
      {/* Chip line */}
      <line
        x1="17" y1="30" x2="47" y2="30"
        stroke="rgba(0,0,0,0.13)" strokeWidth="1.5" strokeLinecap="round"
      />
      {/* Secondary detail line */}
      <line
        x1="17" y1="36" x2="38" y2="36"
        stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" strokeLinecap="round"
      />
      {/* Accent dot */}
      <circle cx="44" cy="26" r="3.5" fill="#2A5E45" opacity="0.7" />
    </svg>
  )
}

interface FullLogoProps {
  className?: string
  textClass?: string
  iconSize?: number
}

export function BudqoLogo({ className, textClass, iconSize = 28 }: FullLogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div
        className="flex items-center justify-center rounded-[10px] bg-brand shrink-0"
        style={{ width: iconSize + 10, height: iconSize + 10 }}
      >
        <BudqoLogoMark size={iconSize} />
      </div>
      <span
        className={cn(
          'text-xl font-bold leading-none tracking-tight',
          textClass
        )}
        style={{ fontFamily: '"General Sans", var(--font-manrope, ui-sans-serif)' }}
      >
        Budqo
      </span>
    </div>
  )
}
