import React from 'react';

export default function TaxSafarLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-baseline">
        <span className="text-[#004AAD] dark:text-secondary-light font-black tracking-tight text-5xl transition-colors duration-300">TAX</span>
        <span className="text-slate-900 dark:text-white font-bold tracking-tight text-3xl ml-0.5 transition-colors duration-300">safar</span>
      </div>
      <div className="w-full relative h-4 overflow-visible">
        <svg className="absolute top-0 right-0 w-36 translate-x-2 -translate-y-3" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5,12 Q45,28 95,8" stroke="#004AAD" strokeWidth="4" fill="transparent" strokeLinecap="round" />
            <path d="M85,1 L97,7 L85,15" stroke="#004AAD" strokeWidth="4" fill="transparent" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
