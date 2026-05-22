'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export function FadeInUp({ children, delay = 0, className, once = true }: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export function FadeIn({ children, delay = 0, className, once = true }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerChildren({ children, className, staggerDelay = 0.08, once = true }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
