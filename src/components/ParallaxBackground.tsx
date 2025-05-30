'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export default function ParallaxBackground() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, -200])

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-[200vh] bg-cover bg-center z-0"
      style={{
        backgroundImage: "url('/rain-on-window.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm" />
    </motion.div>
  )
}