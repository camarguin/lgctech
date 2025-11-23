'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function ScrollAnimation({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const directionVariants = {
    up: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -40 },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
    },
  }

  const variants = directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={inView ? variants.animate : variants.initial}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
