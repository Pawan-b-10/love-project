import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MemoryCard = ({ memory, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      <div className="aspect-square w-full relative overflow-hidden bg-blush-100 flex items-center justify-center">
        {!imageError ? (
          <img 
            src={memory.image} 
            alt={memory.date}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blush-50 to-blush-200 text-blush-400">
            <span className="text-4xl mb-2">📸</span>
            <span className="text-sm font-medium font-serif italic">{memory.date}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 md:p-6 bg-white/80">
        <h3 className="font-serif text-lg md:text-xl font-medium text-slate-800 mb-2">{memory.date}</h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans">{memory.caption}</p>
      </div>
    </motion.div>
  );
};

export default MemoryCard;
