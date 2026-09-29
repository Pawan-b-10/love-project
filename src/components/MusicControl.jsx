import React, { useState, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (hasError) return;
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Audio playback failed:", error);
            setHasError(true);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return null; // Gracefully hide if audio fails or is missing
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <audio 
        ref={audioRef} 
        src="/music/our-song.mp3" 
        loop 
        onError={handleError}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="glass-button w-12 h-12 rounded-full flex items-center justify-center text-blush-600 focus:outline-none focus:ring-2 focus:ring-blush-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause size={20} className="fill-current" />
        ) : (
          <div className="relative">
            <Play size={20} className="ml-1 fill-current" />
            <motion.div 
              className="absolute -top-1 -right-1"
              animate={{ opacity: [0, 1, 0], y: [0, -5, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Music size={10} />
            </motion.div>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default MusicControl;
