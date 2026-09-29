import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Sparkles = () => {
  const [sparkles, setSparkles] = useState([]);
  
  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-white"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
