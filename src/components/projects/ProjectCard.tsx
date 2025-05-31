'use client'

import { motion } from 'framer-motion'
import TiltWrapper from '@/components/common/TiltWrapper'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type Project = {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

export default function ProjectCard({ title, description, tags, liveUrl, repoUrl }: Project) {
  return (
    <TiltWrapper className="w-full sm:w-[320px]">
      <motion.div
        className="relative group bg-slate-700/50 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-md hover:shadow-xl transition duration-300 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="text-xl font-bold">{title}</div>
        <p className="text-sm text-gray-200">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/20 rounded-full px-2 py-0.5 text-white font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 text-lg">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaExternalLinkAlt />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaGithub />
            </a>
          )}
        </div>

        {/* Glow-on-hover effect */}
        <div className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_var(--mouse-x,_var(--mouse-y)),_rgba(139,92,246,0.2),_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </motion.div>
    </TiltWrapper>
  )
}
