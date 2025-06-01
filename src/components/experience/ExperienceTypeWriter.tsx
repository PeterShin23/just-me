'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { IconWrapper } from '../common/TechIcons'

const TYPE_SPEED = 10

export const ExperienceTypeWriter = ({ details, stack }: { details: string, stack?: { icon: React.ComponentType, color?: string }[] }) => {
  const [isFinishedTyping, setIsFinishedTyping] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [iconWidth, setIconWidth] = useState<number>(48)

  const [,] = useTypewriter({
    words: [details],
    typeSpeed: TYPE_SPEED,
    deleteSpeed: 0,
    delaySpeed: 1000000,
    loop: 1,
    onLoopDone: () => setIsFinishedTyping(true),
  })

  const calculateIconSize = () => {
    if (!wrapperRef.current) return;

    if (!stack?.length) return;

    const { width } = wrapperRef.current.getBoundingClientRect()
    const totalGap = 16 * (stack.length - 1) // gap-x-6 = 24px
    const availableWidth = width - totalGap
    const size = Math.floor(availableWidth / stack.length)

    const iconW = Math.min(size, 48)  // cap at 8

    setIconWidth(iconW)
  }

  useLayoutEffect(() => {
    if (!wrapperRef.current) return
  
    const observer = new ResizeObserver(() => {
      calculateIconSize()
    })
  
    observer.observe(wrapperRef.current)
  
    return () => observer.disconnect()
  }, [stack?.length])
  

  return (
    <div ref={wrapperRef}>
      <div className="mt-4 text-sm text-gray-700 leading-relaxed">
        <Typewriter
          words={[details]}
          typeSpeed={TYPE_SPEED}
          deleteSpeed={0}
          delaySpeed={1000000}
          cursor
          cursorStyle="_"
        />
      </div>
      {isFinishedTyping && (
        <div className="flex flex-row gap-x-4 mt-4">
          {stack?.map(({ icon, color }, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20,
                delay: i * 0.2,
              }}
              style={{
                width: iconWidth,
                height: iconWidth,
              }}
            >
              <IconWrapper Icon={icon} color={color} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
