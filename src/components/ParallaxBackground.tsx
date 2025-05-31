'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export default function ParallaxBackground() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 2500], [0, -250]) // slight upward motion

  return (
    <motion.div
      className="fixed top-24 left-0 w-full h-full z-0 overflow-hidden"
      style={{ y }}
    >
      <img
        src="/background-dark.png"
        alt="background"
        className="w-auto h-full mx-auto object-cover object-top pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[4px]" />
    </motion.div>
  )
}