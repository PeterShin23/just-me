'use client'
import { useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiPaperclip } from 'react-icons/fi'
import clsx from 'clsx';
import { Tags } from './Tags'
import { CurrentStatus } from './CurrentStatus'

const buttons = [
  {
    icon: <FiPaperclip />,
    label: 'resume',
    href: '/resume.pdf',
    color: 'bg-orange-500',
  },
  {
    icon: <FaLinkedin />,
    label: 'linkedin',
    href: 'https://linkedin.com/in/petershin23',
    color: 'bg-blue-600',
  },
  {
    icon: <FaInstagram />,
    label: 'instagram',
    href: 'https://instagram.com/peter.shin',
    color: 'bg-pink-600',
  },
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="me" className="flex flex-col md:flex-row justify-between items-center gap-12 min-h-screen">
      <div className="flex-1 space-y-6 px-16 md:pl-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          <p>{"hi, i'm Peter."}</p>
          <br />
          <p className="text-lg">{">2 YOE as SWE. BS in computer science."}</p>
          <p className="text-lg">learning everday. blessed always.</p>
          <br />
          <CurrentStatus />
        </motion.h1>
        <Tags />
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
        
        <div className="flex justify-center items-center h-16 relative">
          {/* Reserve space for the widest possible state */}
          <div className="relative flex items-center justify-center" style={{ width: '180px', height: '48px' }}>
            
            {/* Background morphing container */}
            <div
              className={clsx(
                'absolute rounded-3xl transition-all duration-500 ease-out pointer-events-none',
                activeIndex !== null 
                  ? `${buttons[activeIndex].color} shadow-lg`
                  : 'bg-transparent'
              )}
              style={{
                width: activeIndex !== null ? '160px' : '0px',
                height: '48px',
                left: activeIndex !== null ? '10px' : '90px',
                top: '0px'
              }}
            />

            {/* Stable hover zones - these never move */}
            {buttons.map((btn, i) => {
              const isActive = activeIndex === i
              
              return (
                <a
                  key={`hover-${btn.label}`}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute cursor-pointer"
                  style={{
                    left: `${12 + (i * 54)}px`, // Fixed positions that never change
                    top: '0px',
                    width: isActive ? '160px' : '48px', // Expand click area when active
                    height: '48px',
                    zIndex: 30 // Above everything else
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Invisible hover/click area */}
                  <div className="w-full h-full" />
                </a>
              )
            })}

            {/* Visual elements - these animate but don't handle mouse events */}
            {buttons.map((btn, i) => {
              const isActive = activeIndex === i
              const isInactive = activeIndex !== null && !isActive
              
              return (
                <div
                  key={`visual-${btn.label}`}
                  className="absolute transition-all duration-500 ease-out pointer-events-none"
                  style={{
                    left: isActive ? '10px' : `${12 + (i * 54)}px`,
                    top: '0px',
                    width: isActive ? '160px' : '48px',
                    height: '48px',
                    opacity: isInactive ? 0 : 1,
                    transform: isInactive ? 'scale(0.8) translateY(8px)' : 'scale(1) translateY(0px)',
                    zIndex: isActive ? 20 : 10
                  }}
                >
                  {/* Individual button background for default state */}
                  <div
                    className={clsx(
                      'absolute rounded-full transition-all duration-500 ease-out',
                      activeIndex === null 
                        ? 'bg-white shadow-md border border-gray-200 scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                    )}
                    style={{
                      left: '0px',
                      top: '0px',
                      width: '48px',
                      height: '48px'
                    }}
                  />
                  
                  {/* Button content */}
                  <div
                    className={clsx(
                      'absolute flex items-center h-full rounded-xl transition-all duration-500 ease-out pointer-events-none',
                      isActive ? 'text-white justify-start pl-4' : 'text-gray-700 justify-center'
                    )}
                    style={{
                      left: '0px',
                      top: '0px',
                      width: isActive ? '160px' : '48px',
                      height: '48px'
                    }}
                  >
                    <span className={clsx(
                      'text-lg transition-all duration-300 ease-out flex-shrink-0',
                      !isActive && 'hover:scale-110'
                    )}>
                      {btn.icon}
                    </span>
                    
                    {/* Text label */}
                    {isActive && (
                      <span className="ml-3 text-sm font-medium whitespace-nowrap transition-all duration-300 delay-200 animate-in slide-in-from-right-2 fade-in">
                        {btn.label}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;