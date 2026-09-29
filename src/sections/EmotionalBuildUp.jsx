import React from 'react';
import { motion } from 'framer-motion';
import { proposalData } from '../data/proposalData';

const EmotionalBuildUp = ({ onNext }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-24 px-6 relative z-10">
      <div className="max-w-3xl w-full mx-auto space-y-32 md:space-y-48">
        {proposalData.emotionalMessages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%", amount: "some" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center min-h-[30vh] flex items-center justify-center"
          >
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-slate-700 leading-relaxed font-light tracking-wide">
              {message}
            </h2>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center min-h-[30vh] flex flex-col items-center justify-center gap-8"
        >
          <button
            onClick={onNext}
            className="px-8 py-4 bg-blush-500 text-white font-medium text-lg rounded-full shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:bg-blush-600 transition-all duration-300 animate-glow-pulse"
          >
            Continue ❤️
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default EmotionalBuildUp;
