'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { Tags } from './Tags'


const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-12 min-h-screen">
      <div className="flex-1 space-y-6 px-16 md:pl-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          <p>{"Hi, I'm Peter."}</p>
          <br />
          <p className="text-lg">{">2 YOE as SWE. BS in Computer Science."}</p>
          <p className="text-lg">Learning Everday. Blessed Always.</p>
        </motion.h1>

        <Tags />

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
        className="flex-1 flex flex-col items-center gap-4 md:mr-8 lg:mr-16"
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