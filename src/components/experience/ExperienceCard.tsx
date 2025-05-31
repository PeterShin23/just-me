'use client'

import { motion } from 'framer-motion'
import Tilt from '@/components/common/TiltWrapper'
import { useRef } from 'react'

type ExperienceCardProps = {
  id: string
  title: string
  company: string
  date: string
  description: string
}

export default function ExperienceCard({
  // id,
  title,
  company,
  date,
  description,
}: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current?.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current?.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div className="flex w-full justify-center">
    <Tilt className="flex justify-center w-11/12 sm:w-[300px]">
      <motion.div
        ref={cardRef}
        // layoutId={`card-${id}`}
        onMouseMove={handleMouseMove}
        className="relative bg-white/90 backdrop-blur-sm group rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="text-xs text-gray-500">{date}</div>
        <div className="mt-1 font-semibold text-lg text-indigo-600">{title}</div>
        <div className="text-sm text-gray-700">{company}</div>
        <div className="mt-2 text-sm text-gray-500">{description}</div>

        {/* Custom radial glow */}
        <div className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_var(--mouse-x,_var(--mouse-y)),_rgba(99,102,241,0.25),_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </Tilt>
    </div>

  )
}
