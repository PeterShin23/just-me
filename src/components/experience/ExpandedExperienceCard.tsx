'use client'

import * as React from 'react';
import { motion } from 'framer-motion';
import { ExperienceTypeWriter } from './ExperienceTypeWriter';

type ExpandedExperienceCardProps = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  selectedExperience: any;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  detailRef: any;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  setSelected: (exp: any) => void;
};

const ExpandedExperienceCard: React.FC<ExpandedExperienceCardProps> = ({ selectedExperience, detailRef, setSelected }) => {
  
  return (
    <motion.div
      key={`expanded-${selectedExperience.id}`}
      layoutId={`card-${selectedExperience.id}`}
      ref={detailRef}
      className="fixed top-24 left-0 right-0 mx-auto w-[90%] md:w-3/4 lg:w-2/3 bg-white rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-6 z-[200]"
      style={{
        transformOrigin: 'center',
        willChange: 'transform, opacity',
      }}
    >
      <div className="flex-1">
        <h3 className="text-xl font-bold text-indigo-600">{selectedExperience.title}</h3>
        <p className="text-sm text-gray-500">
          {selectedExperience.company} &bull; {selectedExperience.date}
        </p>
        <ExperienceTypeWriter details={selectedExperience.details} stack={selectedExperience.stack} />
      </div>
      <button
        onClick={() => setSelected(null)}
        className="absolute top-4 right-4 text-gray-400 hover:text-black transition text-xl"
      >
        &times;
      </button>
    </motion.div>
  )
}

export const MemoizedExpandedExperienceCard = React.memo(ExpandedExperienceCard);