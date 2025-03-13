"use client"

import { ReactNode } from "react"
import { motion, Variant, Variants, TargetAndTransition } from "framer-motion"

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1, 
    y: 0,
    transition: { 
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: (custom: number) => ({
    opacity: 1, 
    x: 0,
    transition: { 
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
}

export const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom: number) => ({
    opacity: 1, 
    x: 0,
    transition: { 
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { 
      delay: custom * 0.2,
      duration: 0.8
    }
  })
}

type AnimationVariant = {
  hidden: TargetAndTransition;
  visible: (custom: number) => TargetAndTransition;
}

type AnimateInViewProps = {
  children: ReactNode
  /** Animation delay order (multiplied by 0.2s) */
  delay?: number
  /** Animation variants to use */
  variants?: AnimationVariant
  /** Only animate once when scrolled into view */
  once?: boolean
  /** Fraction of element that needs to be visible to trigger animation */
  amount?: number
  /** Additional CSS classes */
  className?: string
}

export function AnimateInView({
  children,
  delay = 0,
  variants = fadeInUp,
  once = true,
  amount = 0.2,
  className = "",
}: AnimateInViewProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={delay}
      variants={variants as any} // Type assertion to handle the custom function variant
      className={className}
    >
      {children}
    </motion.div>
  )
} 