import React from 'react';

export const Logo = ({ className = "", size = 80 }: { className?: string; size?: number }) => {
  return (
    <img 
      src="/lovable-uploads/070d0a2a-3d64-436a-bf47-a3b5112e102b.png"
      width={size}
      height={size}
      alt="OpenMovies AI Logo"
      className={`${className} animate-glow transition-transform duration-300 hover:scale-110 animate-fade-up`}
      style={{ objectFit: 'contain' }}
    />
  );
};