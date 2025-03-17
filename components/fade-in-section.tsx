"use client"

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  duration?: number
  id?: string
  className?: string
  threshold?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function FadeInSection({
  children,
  delay = 0,
  duration = 0.6,
  id,
  className = '',
  threshold = 0.2,
  direction = 'up'
}: FadeInSectionProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: false, 
    amount: threshold 
  })
  
  // Determine the initial position based on direction
  const getInitialPosition = () => {
    switch(direction) {
      case 'up': return { opacity: 0, y: 50 }
      case 'down': return { opacity: 0, y: -50 }
      case 'left': return { opacity: 0, x: 50 }
      case 'right': return { opacity: 0, x: -50 }
      case 'none': return { opacity: 0 }
      default: return { opacity: 0, y: 50 }
    }
  }
  
  // Determine the animation target
  const getAnimationTarget = () => {
    switch(direction) {
      case 'up': return { opacity: 1, y: 0 }
      case 'down': return { opacity: 1, y: 0 }
      case 'left': return { opacity: 1, x: 0 }
      case 'right': return { opacity: 1, x: 0 }
      case 'none': return { opacity: 1 }
      default: return { opacity: 1, y: 0 }
    }
  }
  
  useEffect(() => {
    if (isInView) {
      controls.start(getAnimationTarget())
    } else {
      // Reset to initial state when scrolling back
      controls.start(getInitialPosition())
    }
  }, [isInView, controls, direction])
  
  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={getInitialPosition()}
      animate={controls}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
} 