'use client'

import * as React from "react";
import { motion, AnimatePresence } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { TechIcons } from "../common/TechIcons";
import { MemoizedExpandedExperienceCard } from "./ExpandedExperienceCard";

const experiences = [
  {
    id: "experience-1",
    title: 'Software Engineer',
    company: 'CoStar Group',
    date: '2023 – Present',
    description: 'Built full stack applications using React Typescript, C# .NET, Microsoft SQL Server, Elasticsearch, and more',
    details:
      'Led backend and frontend development across critical Homes.com initiatives, including an event-driven mediator service and ETL SDK in .NET with AWS SQS, driving 80%+ resource savings and powering $40M+ in feature revenue. Delivered a public scheduling UI in React and a REST API proxy for Elasticsearch adopted by 30+ teams, reducing query latency by 75%.',
    stack: [
      { icon: TechIcons.ReactOriginal },
      { icon: TechIcons.TypescriptPlain },
      { icon: TechIcons.CsharpOriginal },
      { icon: TechIcons.MicrosoftsqlserverOriginal },
      { icon: TechIcons.PythonOriginal },
      { icon: TechIcons.AmazonwebservicesOriginalWordmark },
      { icon: TechIcons.ElasticsearchOriginal },
      { icon: TechIcons.ApachekafkaOriginalWordmark },
      { icon: TechIcons.OpenapiOriginalWordmark },
      { icon: TechIcons.SiOpenai, color: "#000" },
    ]
  },
  {
    id: "experience-2",
    title: 'Software Engineer Intern',
    company: 'Amazon Web Services',
    date: '2022',
    description: 'Built a POC for AWS Diode to handle automatic file retrieval through cross-domain security regions',
    details:
      'Built and demonstrated a secure AWS-based POC addressing cross-domain file sourcing, leveraging S3, Lambda, and API Gateway. Modeled infrastructure in Python and TypeScript, authored reusable XML schemas to streamline client onboarding, and solved a critical enterprise security need.',
    stack: [
      { icon: TechIcons.TypescriptPlain },
      { icon: TechIcons.PythonOriginal },
      { icon: TechIcons.AmazonwebservicesOriginalWordmark },
    ]
  },
  {
    id: "experience-3",
    title: 'ML Research Assistant',
    company: 'UVA Biocomplexity Institute',
    date: '2022',
    description: 'Investigated tagging methods of sets and algorithms for clustering method explainability',
    details:
      'Researched clustering algorithm explainability and developed tagging strategies for grouped data. Optimized integer linear programs using the Gurobi solver in Python to enhance clustering insights.',
    stack: [
      { icon: TechIcons.PythonOriginal },
    ]
  },
]

export default function Experience() {
  const [selected, setSelected] = React.useState<string | null>(null)
  const detailRef = React.useRef<HTMLDivElement>(null)

  const selectedExperience = experiences.find((exp) => exp.id === selected);
  
  const handleCardClick = async (cardId: string) => {
    if (selected) return; // Don't do anything if clicking the same card
    
    setSelected(cardId)
  }

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Element
      
      // Check if click is outside the detail card
      if (detailRef.current && !detailRef.current.contains(target)) {
        // Check if click is on a card (to prevent closing when clicking another card)
        const isClickOnCard = target.closest('[data-experience-card]')
        
        if (isClickOnCard) {
          return;
        }

        setSelected(null)
      }
    }

    if (selected) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selected])

  return (
    <section 
      id="experiences"
      className="pb-20 pt-10 relative z-20 px-6 sm:px-12 lg:px-24">
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
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            layoutId={`card-${exp.id}`}
            data-experience-card
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            animate={{
              opacity: selected && selected !== exp.id ? 0.3 : 1,
              scale: selected && selected !== exp.id ? 0.95 : 1,
              pointerEvents: selected ? 'none' : 'auto',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              duration: 0.4,
            }}
            className="w-full sm:w-[300px] experience-card"
            onClick={() => handleCardClick(exp.id)}
            style={{
              opacity: !selected || selected === exp.id ? 0.3 : 1,
              cursor: !selected || selected === exp.id ? 'pointer' : 'default',
              pointerEvents: selected && selected !== exp.id ? 'none' : 'auto',
              willChange: 'transform, opacity',
            }}
          >
            <ExperienceCard {...exp} />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedExperience && (
          <MemoizedExpandedExperienceCard 
            setSelected={setSelected}
            detailRef={detailRef}
            selectedExperience={selectedExperience}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
