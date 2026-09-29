import React from 'react';
import { motion } from 'framer-motion';
import Envelope from '../components/Envelope';
import { proposalData } from '../data/proposalData';

const Letter = ({ onNext }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl flex flex-col items-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mb-2 font-medium">A little letter for you...</h2>
        <div className="w-16 h-0.5 bg-blush-300 rounded-full mb-12" />
        
        <Envelope message={proposalData.letterMessage} onContinue={onNext} />
      </motion.div>
    </div>
  );
};

export default Letter;
