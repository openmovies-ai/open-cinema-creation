import React from 'react';

export const Logo = ({ className = "", size = 40 }: { className?: string; size?: number }) => {
  return (
    <img 
      src="/lovable-uploads/070d0a2a-3d64-436a-bf47-a3b5112e102b.png"
      width={size}
      height={size}
      alt="OpenMovies AI Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};