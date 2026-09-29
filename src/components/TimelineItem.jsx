import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-start md:items-center justify-center w-full mb-12 md:mb-24 last:mb-0">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute top-10 left-6 md:left-1/2 w-[2px] h-[calc(100%+3rem)] md:h-[calc(100%+6rem)] bg-blush-200 -translate-x-1/2 md:translate-x-[-50%] z-0" />
      )}

      <div className={`w-full flex flex-col md:flex-row items-start md:items-center relative z-10 ${isEven ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Content Side */}
        <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-card p-6 md:p-8 rounded-2xl"
          >
            <h3 className="font-serif text-xl md:text-2xl text-blush-800 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.description}</p>
          </motion.div>
        </div>

        {/* Center Dot */}
        <div className="absolute left-6 md:left-1/2 top-6 md:top-auto -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-4 h-4 rounded-full bg-blush-400 shadow-[0_0_15px_rgba(244,114,182,0.6)] border-4 border-white"
          />
        </div>
        
        {/* Empty Space for Desktop Alignment */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </div>
  );
};

export default TimelineItem;
