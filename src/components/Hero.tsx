'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

const tags = ['Software Engineer', 'Full Stack Engineer', 'AI Engineer', 'Amazon Web Services', 'CoStar Group', 'Founder', 'UVA', 'Photographer - kinda sorta', 'Korean Immigrant', 'Proud Son']

const tagVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  }),
  hover: {
    scale: 1.08,
    backgroundColor: '#6366f1', // Tailwind's indigo-500
    color: '#ffffff',
    transition: {
      duration: 0.3,
    },
  },
}

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-12 min-h-screen">
      <div className="flex-1 space-y-6 pl-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          <p>{"Hi, I'm Peter."}</p>
          <br />
          <p className="text-lg">BS in Computer Science. 2 YOE.</p>
          <p className="text-lg">Learning Everday. Blessed Always.</p>
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              variants={tagVariants}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                },
              }}
              whileHover={{
                scale: 1.08,
                backgroundColor: '#6366f1',
                color: '#ffffff',
                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              }}
              whileTap={{ scale: 0.95 }}
              custom={i}
              className="px-3 py-1 rounded-full text-sm font-medium cursor-default bg-indigo-100 text-indigo-700 transition-colors"
              >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* <div className="flex gap-4 text-xl text-gray-600">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div> */}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col items-center gap-4"
      >
        <Image
          src="/pfp.jpg"
          alt="Profile"
          width={350}
          height={350}
          className="rounded-full object-cover border-4 border-indigo-200"
        />
        <div className="flex gap-6 text-2xl text-gray-700">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FiDownload />
          </a>
          <a href="mailto:you@example.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;