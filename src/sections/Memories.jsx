import React from 'react';
import { motion } from 'framer-motion';
import MemoryCard from '../components/MemoryCard';
import { proposalData } from '../data/proposalData';

const Memories = ({ onNext }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-24 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mb-4 font-medium">Little Moments <span className="text-blush-500">❤️</span></h2>
        <p className="text-slate-500 font-sans italic text-lg max-w-xl mx-auto">
          "Some memories deserve their own little place."
        </p>
      </motion.div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {proposalData.memories.map((memory, index) => (
          <MemoryCard key={index} memory={memory} index={index} />
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
          className="px-8 py-3 rounded-full bg-blush-500 text-white font-medium shadow-lg shadow-blush-500/30 hover:bg-blush-600 transition-all animate-glow-pulse"
        >
          Continue ❤️
        </button>
      </motion.div>
    </div>
  );
};

export default Memories;
