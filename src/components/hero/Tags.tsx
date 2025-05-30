import { motion } from 'framer-motion'

const tags = [
  'Software Engineer', 
  'Full Stack Engineer', 
  'AI Engineer', 
  'Amazon Web Services', 
  'CoStar Group', 
  'UVA Alumni', 
  'Founder', 
  'Photographer - kinda sorta', 
  'Korean Immigrant', 
  'Proud Son'
];

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
    scale: 1.8,
    backgroundColor: '#6366f1', // Tailwind's indigo-500
    color: '#ffffff',
    transition: {
      duration: 0.2,
    },
  },
}

export const Tags = () => {
  return (
    <motion.div
          className="flex flex-wrap gap-2"
          style={{
            maxWidth: "550px"
          }}
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
                scale: 1.2,
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
  )
};
