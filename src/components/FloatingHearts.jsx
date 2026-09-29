import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);
  
  useEffect(() => {
    // Generate static hearts that will be animated by CSS
    // to avoid excessive React renders
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 15}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.3 + 0.1
    }));
    
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px] text-blush-300"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: ['0px', `${Math.random() * 100 - 50}px`, '0px'],
            rotate: [0, Math.random() * 90 - 45, 0]
          }}
          transition={{
            duration: parseFloat(heart.animationDuration),
            delay: parseFloat(heart.delay),
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
