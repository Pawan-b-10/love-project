import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Envelope = ({ message, onContinue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowLetter(true);
    }, 600);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
      <AnimatePresence>
        {!showLetter && (
          <motion.div
            className="w-full aspect-[4/3] bg-white rounded-lg shadow-xl relative cursor-pointer group"
            onClick={handleOpen}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Envelope Back */}
            <div className="absolute inset-0 bg-blush-50 rounded-lg border border-blush-200 overflow-hidden">
              {/* Envelope Flap (Top) */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-white origin-top z-20 border-b border-blush-200 shadow-sm"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                animate={{ rotateX: isOpen ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              
              {/* Envelope Bottom */}
              <div 
                className="absolute bottom-0 left-0 w-full h-full bg-blush-50 z-10"
                style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }}
              />
              
              {/* Envelope Left/Right */}
              <div 
                className="absolute top-0 left-0 w-full h-full bg-blush-100/50 z-10"
                style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%, 100% 100%, 50% 50%, 100% 0)' }}
              />

              {/* Heart Seal */}
              <motion.div
                className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-blush-500 text-3xl drop-shadow-md"
                animate={{ 
                  scale: isOpen ? 0 : [1, 1.1, 1],
                  opacity: isOpen ? 0 : 1
                }}
                transition={{ 
                  scale: { repeat: isOpen ? 0 : Infinity, duration: 1.5 },
                  opacity: { duration: 0.2 }
                }}
              >
                ❤️
              </motion.div>
              
              <div className="absolute top-[60%] w-full text-center z-30">
                <p className="text-blush-800 font-serif italic text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                  {!isOpen ? "Tap to open" : ""}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-[#fcfaf5] p-8 md:p-12 rounded-xl shadow-2xl border border-blush-100 relative">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-4 rounded-full bg-blush-100/50" />
              
              <p className="font-handwriting text-2xl md:text-3xl leading-relaxed text-slate-700 whitespace-pre-wrap">
                {message}
              </p>
              
              <div className="mt-12 flex justify-center">
                <button
                  onClick={onContinue}
                  className="px-8 py-3 rounded-full bg-blush-500 text-white font-medium tracking-wide shadow-lg shadow-blush-500/30 hover:bg-blush-600 transition-colors animate-glow-pulse"
                >
                  Continue ❤️
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Envelope;
