'use client'

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

// pages or section component
const projects = [
  {
    id: 'project-1',
    title: 'Mindria AI',
    description: 'A local-first knowledge graph assistant that helps me think and remember better.',
    tags: ['AI', 'Graph', 'Neo4j', 'Next.js'],
    liveUrl: 'https://mindria.ai',
    repoUrl: 'https://github.com/pshin23/mindria-ai',
  },
  {
    id: 'project-2',
    title: 'Vision Chef',
    description: 'Scan ingredients with your camera and get personalized recipes using OpenAI.',
    tags: ['React Native', 'YOLOv8', 'OpenAI'],
    repoUrl: 'https://github.com/pshin23/vision-chef',
  },
  {
    id: 'project-3',
    title: 'Vision Chef 2',
    description: 'Scan ingredients with your camera and get personalized recipes using OpenAI.',
    tags: ['React Native', 'YOLOv8', 'OpenAI'],
    repoUrl: 'https://github.com/pshin23/vision-chef',
  },
  {
    id: 'project-4',
    title: 'Vision Chef 2',
    description: 'Scan ingredients with your camera and get personalized recipes using OpenAI.',
    tags: ['React Native', 'YOLOv8', 'OpenAI'],
    repoUrl: 'https://github.com/pshin23/vision-chef',
  },
  {
    id: 'project-5',
    title: 'Vision Chef 2',
    description: 'Scan ingredients with your camera and get personalized recipes using OpenAI.',
    tags: ['React Native', 'YOLOv8', 'OpenAI'],
    repoUrl: 'https://github.com/pshin23/vision-chef',
  },
  // more projects...
]

export default function Project() {
  return (
    <section className="my-8 relative z-10 px-6 sm:px-12 lg:px-24">
      <motion.h2
        className="text-3xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        projects.
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}