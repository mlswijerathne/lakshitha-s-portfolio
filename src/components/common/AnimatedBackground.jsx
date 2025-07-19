import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/5 rounded-full animate-float"></div>
      <div 
        className="absolute top-40 right-20 w-32 h-32 bg-purple-500/5 rounded-full animate-float"
      ></div>
      <div 
        className="absolute bottom-40 left-20 w-16 h-16 bg-pink-500/5 rounded-full animate-float"
      ></div>
      <div 
        className="absolute bottom-20 right-40 w-24 h-24 bg-green-500/5 rounded-full animate-float"
      ></div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse-slow"
      ></div>
    </div>
  );
};

export default AnimatedBackground;
