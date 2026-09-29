import React from 'react';

const GirlHand = ({ className }) => (
  <svg viewBox="0 0 200 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="softShadowGirl" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="-2" dy="5" stdDeviation="4" floodOpacity="0.08" floodColor="#9d174d" />
      </filter>
    </defs>
    <g filter="url(#softShadowGirl)">
      {/* Sleeve */}
      <path d="M 210 35 L 160 40 L 165 95 L 210 90 Z" fill="#fdf2f8" />
      {/* Wrist to Palm */}
      <path d="M 160 40 C 130 40, 100 50, 75 50 C 60 50, 45 60, 50 75 C 60 95, 105 100, 135 95 C 155 90, 165 95, 165 95 Z" fill="#fdf0df" stroke="#f0cbb5" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Fingers behind ring finger */}
      <path d="M 75 50 C 40 45, 30 50, 35 60 C 40 70, 65 70, 80 65" fill="#fdf0df" stroke="#f0cbb5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 80 60 C 35 55, 20 60, 25 70 C 30 80, 60 75, 75 72" fill="#fdf0df" stroke="#f0cbb5" strokeWidth="1.5" strokeLinecap="round" />
      {/* Ring Finger (Extended out) */}
      <path d="M 75 70 C 20 65, 5 70, 10 78 C 15 86, 50 82, 75 78" fill="#fdf0df" stroke="#f0cbb5" strokeWidth="1.5" strokeLinecap="round" />
      {/* Pinky */}
      <path d="M 75 78 C 50 78, 40 85, 45 92 C 50 100, 70 95, 80 90" fill="#fdf0df" stroke="#f0cbb5" strokeWidth="1.5" strokeLinecap="round" />
      {/* Thumb suggestion */}
      <path d="M 115 45 C 105 30, 90 25, 80 30" fill="none" stroke="#f0cbb5" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sleeve Detail */}
      <path d="M 160 40 L 165 95" stroke="#fbcfe8" strokeWidth="4" strokeLinecap="round" />
    </g>
  </svg>
);

export default GirlHand;
