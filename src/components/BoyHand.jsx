import React from 'react';

const BoyHand = ({ className }) => (
  <svg viewBox="0 0 200 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="softShadowBoy" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="5" stdDeviation="4" floodOpacity="0.08" floodColor="#9d174d" />
      </filter>
    </defs>
    <g filter="url(#softShadowBoy)">
      {/* Sleeve */}
      <path d="M -10 30 L 50 35 L 40 95 L -10 90 Z" fill="#1e293b" />
      {/* Wrist to Palm */}
      <path d="M 45 40 C 90 45, 115 45, 135 40 C 155 35, 175 45, 160 65 C 145 85, 110 95, 60 95 C 50 95, 45 90, 40 90 Z" fill="#fcdbb6" stroke="#eab696" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Thumb */}
      <path d="M 95 45 C 105 25, 125 15, 140 25 C 150 35, 135 50, 125 52" fill="#fcdbb6" stroke="#eab696" strokeWidth="1.5" strokeLinecap="round" />
      {/* Curled Fingers */}
      <path d="M 135 45 C 165 50, 180 65, 165 75 C 150 85, 130 80, 120 70" fill="#fcdbb6" stroke="#eab696" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 125 68 C 150 75, 155 85, 145 92 C 135 100, 115 90, 110 85" fill="#fcdbb6" stroke="#eab696" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sleeve Detail */}
      <path d="M 50 35 L 40 95" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
    </g>
  </svg>
);

export default BoyHand;
