'use client'

import * as React from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    id: "experience-1",
    title: 'Software Engineer',
    company: 'CoStar Group',
    date: '2023 – Present',
    description: 'Built full stack applications using React Typescript, C# .NET, Microsoft SQL Server, Elasticsearch, and more',
    details:
      'Led development of property intelligence platform, collaborated with data scientists to improve recommendation algorithms by 30%.',
  },
  {
    id: "experience-2",
    title: 'Software Engineer Intern',
    company: 'Amazon Web Services',
    date: '2022',
    description: 'Built a POC for AWS Diode to handle automatic file retrieval through cross-domain security regions',
    details:
      'Designed and deployed semantic engine for enterprise teams, enabling interactive RAG workflows with provenance.',
  },
  {
    id: "experience-3",
    title: 'ML Research Assistant',
    company: 'UVA Biocomplexity Institute',
    date: '2022',
    description: 'Investigated tagging methods of sets and algorithms for clustering method explainability',
    details:
      'Published internal benchmarks on model robustness to spatial perturbations and co-authored PyTorch experiments.',
  },
]

export default function Experience() {
  const [selected, setSelected] = React.useState<string | null>(null)
  const detailRef = React.useRef<HTMLDivElement>(null)

  const selectedExperience = experiences.find((exp) => exp.id === selected)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        detailRef.current &&
        !detailRef.current.contains(event.target as Node)
      ) {
        setSelected(null)
      }
    }

    if (selected) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selected])

  return (
    <section 
      id="experiences"
      className="py-20 relative z-10 px-6 sm:px-12 lg:px-24">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        experiences.
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.15,
              duration: 0.6,
              ease: 'easeOut',
            },
          },
        }}
      >
        {experiences
          .map((exp) => (
          <motion.div
            key={exp.id}
            layout
            layoutId={`card-${exp.id}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            animate={{
              opacity: selected && selected !== exp.id ? 0 : 1,
              scale: selected && selected !== exp.id ? 0.8 : 1,
              pointerEvents: selected && selected !== exp.id ? 'none' : 'auto',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              duration: 0.5,
            }}
            className="w-full sm:w-[300px] cursor-pointer"
            onClick={() => setSelected(exp.id)}
          >
            <ExperienceCard {...exp} />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence mode="sync">
        {selectedExperience && (
          <motion.div
            key="expanded-card"
            layoutId={`card-${selectedExperience.id}`}
            ref={detailRef}
            className="fixed top-24 left-0 right-0 mx-auto w-[90%] md:w-3/4 lg:w-2/3 bg-white rounded-xl shadow-xl p-6 z-50 flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-indigo-600">{selectedExperience.title}</h3>
              <p className="text-sm text-gray-500">
                {selectedExperience.company} &bull; {selectedExperience.date}
              </p>
              <div className="mt-4 text-sm text-gray-700 leading-relaxed">
                <Typewriter
                  words={[selectedExperience.details]}
                  typeSpeed={25}
                  deleteSpeed={0}
                  delaySpeed={1000000}
                  cursor
                  cursorStyle="_"
                />
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition text-xl"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
