'use client'

import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { IconWrapper } from '../common/TechIcons'

export const ExperienceTypeWriter = ({ details, stack }: { details: string, stack?: { icon: React.ComponentType, color?: string }[] }) => {
  const [, helper] = useTypewriter({
    words: [details],
    typeSpeed: 20,
    deleteSpeed: 0,
    delaySpeed: 1000000,
    loop: 1,
  })

  return (
    <>
      <div className="mt-4 text-sm text-gray-700 leading-relaxed">
        <Typewriter
          words={[details]}
          typeSpeed={20}
          deleteSpeed={0}
          delaySpeed={1000000}
          cursor
          cursorStyle="_"
        />
      </div>
      {helper.isDone && (
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
              className="w-12 h-12"
            >
              <IconWrapper Icon={icon} color={color} />
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}
