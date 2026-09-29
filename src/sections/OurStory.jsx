import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';
import { proposalData } from '../data/proposalData';

const OurStory = ({ onNext }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-24 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mb-4 font-medium">Kuch baatein jo mujhe aapki sabse achi lagti hain...</h2>
        <p className="text-slate-500 font-sans italic text-lg max-w-xl mx-auto">
          "You are beautiful inside and out."
        </p>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto px-4 md:px-12">
        {proposalData.storyItems.map((item, index) => (
          <TimelineItem 
            key={index} 
            item={item} 
            index={index} 
            isLast={index === proposalData.storyItems.length - 1}
          />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-20"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-full bg-white text-blush-600 font-medium shadow-md border border-blush-100 hover:bg-blush-50 hover:shadow-lg transition-all animate-glow-pulse"
        >
          See our memories ❤️
        </button>
      </motion.div>
    </div>
  );
};

export default OurStory;
