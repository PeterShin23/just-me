'use client'

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

// pages or section component
const projects = [
  {
    id: 'project-1',
    title: 'Mindria AI - Founder',
    description: 'Retrival Verification Platform for LLM-Driven Applications. Brings verifiability and auditability in LLM workflows in a docker-ready container for private instances. Provides backend API, background jobs, SDK, Dashboard UI.',
    tags: ['StartUp', 'AI', 'RAG', 'LangChain', 'Observability', 'Python', 'NextJS'],
    repoUrl: 'https://github.com/mindria-ai',
    customTitleStyle: "animated-gradient"
  },
  {
    id: 'project-2',
    title: 'No Meal Plan',
    finishedDate: 'April 2025',
    description: 'Scan ingredients with your camera and get personalized recipes using OpenAI. Trained ML model using YOLOv8 and public computer vision ready datasets. Stores to locally hosted DB to track recipes and scores.',
    tags: ['ReactNative', 'YOLOv8', 'OpenAI', 'Python', 'FastAPI'],
    repoUrl: 'https://github.com/PeterShin23/food-vision',
  },
  {
    id: 'project-3',
    title: 'Instagram Portfolio ✨',
    finishedDate: 'December 2024 - loading...',
    description: "Creates a personalized photography portfolio using an Instagram user's media. Previously serviced 12 paying users. Working on refactoring to allow more customizability and Stripe integrations.",
    tags: ['React', 'Python', 'DynamoDB', 'S3', 'APIGateway', 'Go', 'Meta'],
    liveUrl: 'https://tinyurl.com/yf6hvufm',
  },
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