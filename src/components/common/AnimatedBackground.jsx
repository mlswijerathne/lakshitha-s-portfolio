import React from 'react';
import { isMobileDevice } from '../../utils/helpers';

const AnimatedBackground = () => {
  const isMobile = isMobileDevice();
  
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/[0.04] rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-slate-400/[0.04] rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
  );
};

export default AnimatedBackground;
