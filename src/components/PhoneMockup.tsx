'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PhoneMockupProps {
  src: string
  alt?: string
  className?: string
}

export function PhoneMockup({ src, alt = 'Budqo app screenshot', className }: PhoneMockupProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  // Mouse-follow 3D tilt
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 20 })
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5)
      rawY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  return (
    <div className={cn('relative mx-auto select-none', className)} style={{ perspective: '900px' }}>
      {/* Glow beneath phone */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-10 rounded-full blur-3xl opacity-50 dark:opacity-30"
        style={{ background: 'radial-gradient(ellipse, #2A5E45, transparent)' }}
        aria-hidden="true"
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        {/* Phone outer frame */}
        <div
          className="relative shadow-[0_32px_80px_rgba(0,0,0,0.32),0_8px_24px_rgba(0,0,0,0.20)]"
          style={{
            background: 'linear-gradient(145deg, #28282E, #16161A)',
            borderRadius: '44px',
            padding: '10px',
            width: '260px',
          }}
        >
          {/* Edge highlight */}
          <div
            className="absolute inset-0 rounded-[44px] pointer-events-none"
            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.3)' }}
            aria-hidden="true"
          />

          {/* Speaker pill */}
          {/* <div className="flex justify-center pt-2 pb-1">
            <div
              style={{ width: '72px', height: '9px', background: '#0A0A0E', borderRadius: '5px' }}
            />
          </div> */}

          {/* Screen */}
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: '32px', aspectRatio: '9/19.5', background: '#1B3A2D' }}
          >
            {/* App screenshot — add to /public/data/images/app-screenshot-1.png */}
            <Image
              src={src}
              alt={alt}
              fill
              className={cn(
                'object-cover object-top transition-opacity duration-500',
                imageLoaded ? 'opacity-100' : 'opacity-0'
              )}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
              sizes="260px"
              priority={false}
            />

            {!imageLoaded && <PhonePlaceholder />}

            {/* Home indicator */}
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2"
              style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.25)', borderRadius: '2px' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function PhonePlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
      {/* Mock hero card */}
      <div className="w-full rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.07)' }}>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', letterSpacing: '0.08em' }}>
          TRUTH NUMBER
        </p>
        <p style={{ color: '#fff', fontSize: '28px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginTop: '4px' }}>
          ₱2,450
        </p>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', marginTop: '2px' }}>
          free this period
        </p>
        <div className="mt-3 w-full rounded-full" style={{ height: '4px', background: 'rgba(255,255,255,0.1)' }}>
          <div className="h-full rounded-full" style={{ width: '62%', background: '#4ADE80' }} />
        </div>
      </div>

      {[
        { name: 'Groceries', amount: '₱1,500', pct: 45 },
        { name: 'Transport', amount: '₱800', pct: 70 },
        { name: 'Savings', amount: '₱2,000', pct: 30 },
      ].map((env) => (
        <div
          key={env.name}
          className="w-full flex items-center justify-between rounded-xl px-3 py-2.5"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="rounded-lg" style={{ width: 32, height: 32, background: 'rgba(74,222,128,0.15)' }} />
            <div>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 600 }}>{env.name}</p>
              <div className="mt-1 rounded-full" style={{ height: '2px', width: '60px', background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: `${env.pct}%`, background: '#4ADE80', opacity: 0.7 }} />
              </div>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', fontWeight: 600 }}>{env.amount}</p>
        </div>
      ))}

      <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '10px', letterSpacing: '0.06em', textAlign: 'center', marginTop: '8px' }}>
        DROP SCREENSHOT HERE
      </p>
    </div>
  )
}
