import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { proposalData } from '../data/proposalData';
import { Gift } from 'lucide-react';
import BoyHand from '../components/BoyHand';
import GirlHand from '../components/GirlHand';
import { saveProposalResponse } from "../services/proposalService";

const FinalProposal = () => {
  const [response, setResponse] = useState(null); // null, 'yes_ring', 'yes_hurray', 'yes_gift', 'yes_collage', 'think'
  const [ringOn, setRingOn] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const newX = Math.random() * 400 - 200;
    const newY = Math.random() * 400 - 200;
    setNoButtonPos({ x: newX, y: newY });
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f472b6', '#ec4899', '#db2777', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f472b6', '#ec4899', '#db2777', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  const handleYes = () => {
    saveProposalResponse("yes");
    setResponse("yes_ring");
  };

  const putRingOn = () => {
    setRingOn(true);
    setTimeout(() => {
      setResponse('yes_hurray');
      triggerConfetti();

      // Auto transition to gift box after hurray
      setTimeout(() => {
        setResponse('yes_gift');
      }, 4000);
    }, 1500); // Wait for ring animation to finish
  };

  const openGift = () => {
    setResponse('yes_collage');
  };

  const handleThink = () => {
    saveProposalResponse("think");
    setResponse("think");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 relative z-20 overflow-hidden">

      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blush-200/40 via-transparent to-transparent opacity-60 pointer-events-none" />

      <AnimatePresence mode="wait">
        {!response ? (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 1 }}
            className="w-full max-w-2xl flex flex-col items-center text-center relative z-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl text-slate-800 mb-8 md:mb-12"
            >
              {proposalData.herName},
            </motion.h2>

            <div className="space-y-6 mb-16 font-sans text-lg md:text-xl text-slate-600 font-light tracking-wide">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
                {proposalData.proposalMessage.part1}
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 2.5, duration: 0.8 }}>
                {proposalData.proposalMessage.part2}
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 4, duration: 0.8 }}>
                {proposalData.proposalMessage.part3}
              </motion.p>
            </div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 6, duration: 1.5, ease: "easeOut" }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-blush-600 font-medium mb-16 text-glow whitespace-pre-line leading-tight"
            >
              {proposalData.proposalMessage.finalQuestion}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 7.5, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center"
            >
              <button
                onClick={handleYes}
                className="w-full sm:w-auto px-12 py-4 bg-blush-500 text-white font-medium text-lg rounded-full shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:bg-blush-600 transition-all duration-300 animate-glow-pulse"
              >
                YES ❤️
              </button>

              <motion.button
                onClick={handleYes} // If they manage to click, it still says YES
                onHoverStart={moveNoButton}
                onTouchStart={moveNoButton}
                onPointerDown={moveNoButton}
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full sm:w-auto px-8 py-4 bg-white/70 backdrop-blur-sm text-slate-600 font-medium rounded-full shadow-sm hover:bg-white border border-white/80 transition-colors duration-300"
              >
                LET ME THINK 😊
              </motion.button>
            </motion.div>
          </motion.div>

        ) : response === 'yes_ring' ? (
          <motion.div
            key="ring"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full flex flex-col items-center justify-center z-10"
          >
            <h2 className="font-serif text-3xl text-blush-600 mb-16">Put the ring on her finger...</h2>

            <div className="relative w-full max-w-md h-64 flex items-center justify-between px-10">
              {/* Boy's Hand */}
              <motion.div
                className="relative z-10 flex items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <BoyHand className="w-32 md:w-40 h-auto drop-shadow-sm" />
                {/* The Ring */}
                <motion.div
                  className="absolute top-1/4 right-0 text-5xl"
                  animate={ringOn ? { x: 180, y: -20, rotate: 15 } : { x: 0, y: -30, rotate: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  💍
                </motion.div>
              </motion.div>

              {/* Girl's Hand */}
              <motion.div
                className="relative z-0 flex items-center"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <GirlHand className="w-32 md:w-40 h-auto drop-shadow-sm" />
              </motion.div>
            </div>

            {!ringOn && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                onClick={putRingOn}
                className="mt-12 px-8 py-3 bg-blush-500 text-white rounded-full font-medium hover:bg-blush-600 transition-colors shadow-lg animate-glow-pulse"
              >
                Tap to Slide Ring 💍
              </motion.button>
            )}
          </motion.div>

        ) : response === 'yes_hurray' ? (
          <motion.div
            key="hurray"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="w-full text-center z-10 space-y-8 relative"
          >
            {/* Flying Hearts Animation */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100, x: Math.random() * 400 - 200, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0], 
                  y: -400 - Math.random() * 300, 
                  x: (Math.random() * 400 - 200) * 1.5,
                  scale: Math.random() * 1.5 + 0.5,
                  rotate: Math.random() * 360 
                }}
                transition={{ 
                  duration: 2.5 + Math.random() * 2, 
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: Math.random() * 2
                }}
                className="absolute left-1/2 top-1/2 text-4xl pointer-events-none drop-shadow-md"
              >
                {['❤️', '💖', '💕', '🥰', '💘'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-handwriting text-7xl md:text-8xl text-blush-600 font-bold mb-4 drop-shadow-sm relative z-10"
            >
              I Love You ❤️
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-slate-700"
            >
              {proposalData.yesMessage.title}
            </motion.p>
          </motion.div>

        ) : response === 'yes_gift' ? (
          <motion.div
            key="gift"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="w-full flex flex-col items-center justify-center z-10 cursor-pointer group"
            onClick={openGift}
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-3xl text-slate-700 mb-12"
            >
              I have a little gift for you...
            </motion.h2>

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, -5, 5, -5, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-blush-400 to-blush-600 rounded-xl shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(244,114,182,0.6)] transition-all duration-300">
                {/* Ribbon Vertical */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-white/30 backdrop-blur-sm" />
                {/* Ribbon Horizontal */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-white/30 backdrop-blur-sm" />
                <Gift className="w-20 h-20 text-white relative z-10" />
              </div>
            </motion.div>

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-8 text-blush-600 font-medium tracking-widest uppercase text-sm"
            >
              Tap to Open
            </motion.p>
          </motion.div>

        ) : response === 'yes_collage' ? (
          <motion.div
            key="collage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-5xl mx-auto z-10"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-blush-600 mb-4">My most precious diamond collection...My love</h2>
              <p className="text-xl text-slate-600 italic font-serif">Here is to a lifetime of memories together.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="aspect-[3/4] bg-white rounded-xl shadow-lg p-2 transform transition-transform hover:scale-105 hover:rotate-1 hover:z-20"
                >
                  <div className="w-full h-full bg-blush-100 rounded-lg overflow-hidden relative group">
                    {proposalData.collageImages[i - 1] ? (
                      <img
                        src={proposalData.collageImages[i - 1]}
                        alt="Beautiful Moment"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center bg-blush-50" style={{ display: proposalData.collageImages[i - 1] ? 'none' : 'flex' }}>
                      <span className="text-4xl">📸</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center mt-16 pb-20"
            >
              <p className="text-3xl text-blush-600 font-serif mb-2">I love you</p>
              <p className="text-lg md:text-xl text-slate-500 italic font-sans mb-6">
                Ye story ka end nahi, ye toh humare pyar ki khubsoorat shuruaat hai... ❤️
              </p>
              <div className="text-4xl animate-pulse">♾️</div>
            </motion.div>
          </motion.div>

        ) : (
          <motion.div
            key="think"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl text-center space-y-8 z-10 glass-card p-12 rounded-3xl"
          >
            <h2 className="font-serif text-2xl md:text-4xl text-slate-700 mb-6">
              {proposalData.maybeMessage.title}
            </h2>
            <p className="text-xl text-slate-600 font-light mb-4">
              {proposalData.maybeMessage.part1}
            </p>
            <p className="text-lg text-slate-500 italic font-serif">
              {proposalData.maybeMessage.part2}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinalProposal;
