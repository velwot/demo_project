import React from 'react';

export const KalamkariCorner: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scaleX(-1)';
      case 'bottom-left': return 'scaleY(-1)';
      case 'bottom-right': return 'scale(-1)';
      default: return 'none';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none z-10 text-[#9A3412] opacity-75 ${
        position.includes('top') ? 'top-1' : 'bottom-1'
      } ${position.includes('left') ? 'left-1' : 'right-1'}`}
      style={{ transform: getTransform() }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2,38 L2,10 C2,5.5 5.5,2 10,2 L38,2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6,38 L6,12 C6,8.7 8.7,6 12,6 L38,6" stroke="#D97706" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="3" fill="#9A3412" />
        <path d="M12,12 L22,12" stroke="#1E1B4B" strokeWidth="1" />
        <path d="M12,12 L12,22" stroke="#1E1B4B" strokeWidth="1" />
      </svg>
    </div>
  );
};
