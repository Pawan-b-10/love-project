import React from 'react';
import { motion } from 'framer-motion';

const SectionIndicator = ({ activeSection, scrollTo, unlockedLevel }) => {
  const sections = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'letter', label: 'Letter' },
    { id: 'story', label: 'Story' },
    { id: 'memories', label: 'Memories' },
    { id: 'proposal', label: 'Question' }
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((section, index) => {
        const isActive = activeSection === section.id || 
          (section.id === 'proposal' && activeSection === 'emotional');
        
        // Map indicator index to actual level
        const levelRequired = index === 4 ? 5 : index;
        const isUnlocked = unlockedLevel >= levelRequired;

        return (
          <button
            key={section.id}
            onClick={() => {
              if (isUnlocked) {
                scrollTo(section.id === 'proposal' && activeSection !== 'emotional' ? 'emotional' : section.id);
              }
            }}
            disabled={!isUnlocked}
            className={`group relative flex items-center ${!isUnlocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            aria-label={`Scroll to ${section.label}`}
          >
            <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              isActive 
                ? 'bg-blush-500 scale-125 shadow-[0_0_8px_rgba(236,72,153,0.5)]' 
                : isUnlocked ? 'bg-blush-200 hover:bg-blush-300' : 'bg-blush-100 opacity-50'
            }`} />
            <span className={`absolute left-6 text-xs font-medium tracking-wider transition-all duration-300 uppercase ${
              isActive
                ? 'opacity-100 translate-x-0 text-blush-700'
                : isUnlocked ? 'opacity-0 -translate-x-2 text-blush-400 group-hover:opacity-100 group-hover:translate-x-0' : 'opacity-0'
            }`}>
              {section.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default SectionIndicator;
