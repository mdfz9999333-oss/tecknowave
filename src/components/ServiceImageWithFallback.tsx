import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface ServiceImageWithFallbackProps {
  src: string;
  alt: string;
  title: string;
  numberBadge: string;
  iconNode?: React.ReactNode;
  className?: string;
  priority?: boolean;
  showOverlay?: boolean;
}

export const ServiceImageWithFallback: React.FC<ServiceImageWithFallbackProps> = ({
  src,
  alt,
  title,
  numberBadge,
  iconNode,
  className = "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]",
  priority = false,
  showOverlay = false
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div className="w-full h-full tecknowave-gradient-orange p-6 flex flex-col justify-between text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="flex items-center justify-between relative z-10">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white border border-white/30 shadow-md">
            {iconNode || <Zap className="w-5 h-5" />}
          </div>
          <div className="px-3 py-1 rounded-xl bg-slate-950/40 font-mono font-black text-xs text-amber-300 border border-white/20">
            DIV-{numberBadge}
          </div>
        </div>

        <div className="relative z-10 space-y-1 mt-auto">
          <div className="text-[10px] uppercase font-bold text-amber-200 tracking-widest">
            GG TECKNOWAVE DIVISION
          </div>
          <div className="text-sm sm:text-base font-black uppercase tracking-tight line-clamp-2 leading-tight">
            {title}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={() => setHasError(true)}
        className={className}
        referrerPolicy="no-referrer"
      />
      {showOverlay && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-slate-950/20"
        />
      )}
    </div>
  );
};
