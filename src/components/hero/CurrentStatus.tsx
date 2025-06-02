'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const statuses = [
  'assessing start up viability.',
  'reading "ai engineering" by chip huyen.',
  'experimenting with rag applications.',
  'probably working rn. but reach out!'
]

export const CurrentStatus = () => {
  const [, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % statuses.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [])

  return (
    <p className="text-base sm:text-lg font-semibold leading-snug text-balance">
      <span className="text-gray-400 dark:text-gray-500">i am </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="animated-gradient"
      >
        <Typewriter
          words={statuses}
          loop={0}
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={4000}
        />
      </motion.span>
    </p>
  )
}