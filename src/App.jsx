import React, { useState, useEffect } from 'react';
import Welcome from './sections/Welcome';
import Letter from './sections/Letter';
import OurStory from './sections/OurStory';
import Memories from './sections/Memories';
import EmotionalBuildUp from './sections/EmotionalBuildUp';
import FinalProposal from './sections/FinalProposal';
import FloatingHearts from './components/FloatingHearts';
import Sparkles from './components/Sparkles';
import MusicControl from './components/MusicControl';
import SectionIndicator from './components/SectionIndicator';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [unlockedLevel, setUnlockedLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'letter', 'story', 'memories', 'emotional', 'proposal'];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
        }
        return false;
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const unlockNext = (level) => {
    if (unlockedLevel < level) {
      setUnlockedLevel(level);
      setTimeout(() => {
        const sections = ['welcome', 'letter', 'story', 'memories', 'emotional', 'proposal'];
        scrollTo(sections[level]);
      }, 100);
    } else {
      const sections = ['welcome', 'letter', 'story', 'memories', 'emotional', 'proposal'];
      scrollTo(sections[level]);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blush-50 via-white to-blush-100 overflow-x-hidden font-sans pb-32">
      <FloatingHearts />
      <Sparkles />
      <MusicControl />
      
      <SectionIndicator activeSection={activeSection} scrollTo={scrollTo} unlockedLevel={unlockedLevel} />
      
      <main>
        <section id="welcome" className="min-h-screen relative z-10">
          <Welcome onNext={() => unlockNext(1)} />
        </section>
        
        {unlockedLevel >= 1 && (
          <section id="letter" className="min-h-screen relative z-10">
            <Letter onNext={() => unlockNext(2)} />
          </section>
        )}
        
        {unlockedLevel >= 2 && (
          <section id="story" className="min-h-screen relative z-10">
            <OurStory onNext={() => unlockNext(3)} />
          </section>
        )}
        
        {unlockedLevel >= 3 && (
          <section id="memories" className="min-h-screen relative z-10">
            <Memories onNext={() => unlockNext(4)} />
          </section>
        )}
        
        {unlockedLevel >= 4 && (
          <section id="emotional" className="min-h-screen relative z-10">
            <EmotionalBuildUp onNext={() => unlockNext(5)} />
          </section>
        )}
        
        {unlockedLevel >= 5 && (
          <section id="proposal" className="min-h-screen relative z-10">
            <FinalProposal />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
