'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
}

export function MagneticCard({ children, className, maxTilt = 7 }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotX = useMotionValue(0)
  const rotY = useMotionValue(0)
  const springRotX = useSpring(rotX, { stiffness: 280, damping: 22 })
  const springRotY = useSpring(rotY, { stiffness: 280, damping: 22 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    rotX.set(((e.clientY - cy) / (rect.height / 2)) * -maxTilt)
    rotY.set(((e.clientX - cx) / (rect.width / 2)) * maxTilt)
  }

  const handleMouseLeave = () => {
    rotX.set(0)
    rotY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: springRotX,
        rotateY: springRotY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  )
}
