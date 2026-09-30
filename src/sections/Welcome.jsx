import React from 'react';
import { motion } from 'framer-motion';
import { proposalData } from '../data/proposalData';
import { Heart } from 'lucide-react';

const Welcome = ({ onNext }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/60 mx-auto">
            <Heart className="w-10 h-10 text-blush-500 fill-current" />
          </div>
        </motion.div>

        <h1 className="font-serif text-4xl md:text-6xl text-slate-800 mb-6 font-medium">
          Hey {proposalData.herName} <span className="inline-block animate-pulse-slow">❤️</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light">
          {proposalData.welcomeMessage}
        </p>
        
        <p className="text-lg text-blush-700/80 mb-12 italic font-serif">
          {proposalData.welcomeQuestion}
        </p>

        <button
          onClick={() => {
            window.dispatchEvent(new Event('play-music'));
            onNext();
          }}
          className="group relative px-8 py-4 bg-white/80 backdrop-blur-md text-blush-700 font-medium rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:bg-white transition-all overflow-hidden flex items-center gap-3 animate-glow-pulse"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blush-100/0 via-blush-100/50 to-blush-100/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          <span className="relative z-10">Open My Letter</span>
          <svg className="w-5 h-5 relative z-10 text-blush-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Welcome;
