import { cn } from '@/lib/utils'

const ITEMS = [
  'Envelope Budgeting',
  'Truth Number',
  'Debt Escape Plan',
  'Flexible Pay Cycles',
  'Goals Tracker',
  'Multiple Income Sources',
  'Offline Mode',
  'Export Reports',
  'Budget Templates',
  'Recurring Transactions',
]

const DOT = (
  <span
    className="inline-block w-1.5 h-1.5 rounded-full bg-primary mx-6 align-middle opacity-60 shrink-0"
    aria-hidden="true"
  />
)

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className="flex items-center whitespace-nowrap"
      style={{
        animation: `marquee-scroll ${reverse ? '22s' : '28s'} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        willChange: 'transform',
      }}
    >
      {[0, 1].map((copy) => (
        <span key={copy} className="flex items-center">
          {ITEMS.map((item, i) => (
            <span key={`${copy}-${i}`} className="inline-flex items-center">
              <span className="text-sm font-medium text-ink-subtle">{item}</span>
              {DOT}
            </span>
          ))}
        </span>
      ))}
    </div>
  )
}

interface MarqueeProps {
  className?: string
}

export function Marquee({ className }: MarqueeProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden py-5 border-y border-border bg-background',
        className
      )}
      aria-hidden="true"
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--background), transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--background), transparent)' }} />

      <MarqueeTrack />
    </div>
  )
}
