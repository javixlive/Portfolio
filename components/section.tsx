'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export default function Section({
  children,
  delay = 0
}: {
  children: ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      style={{ marginBottom: '1.5rem' }}
    >
      {children}
    </motion.div>
  )
}
