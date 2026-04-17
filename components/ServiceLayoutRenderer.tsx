import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export type ServiceAction = {
  label: string;
  href?: string;
  type?: 'primary' | 'secondary';
};

export type ServiceCard = {
  title: string;
  description: string;
  listTitle?: string;
  listType?: 'numbered' | 'checklist';
  listItems: string[];
  primaryButton?: string;
  secondaryButton?: string;
};

export type HowItWorksStep = {
  step: string;
  title: string;
  desc: string;
};

export type ServiceData = {
  howItWorks: HowItWorksStep[];
  cards: ServiceCard[];
};

export default function ServiceLayoutRenderer({ data }: { data: ServiceData }) {
  return (
    <div className="py-8 bg-[#fafcfa] dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* How it Works Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white text-center mb-16 outfit tracking-tight transition-colors">How it's Work?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[28px] left-1/8 right-1/8 h-px bg-slate-200 dark:bg-slate-800 z-0 transition-colors"></div>

          {data.howItWorks.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-14 h-14 bg-[#00B85C] text-white rounded-lg flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-[#00B85C]/30 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 transition-colors">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed max-w-[250px] transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services List Section */}
      <div className="max-w-5xl mx-auto px-4 pb-24 space-y-12 mt-8">
        {data.cards.map((card, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 outfit tracking-tight leading-tight transition-colors">{card.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-3xl font-medium text-lg transition-colors">
              {card.description}
            </p>
            
            <div className="mb-10 flex flex-col items-center w-full">
              {card.listTitle && (
                <h3 className="font-bold text-[#009D4D] mb-4 uppercase tracking-widest text-sm">{card.listTitle}</h3>
              )}
              
              {card.listType === 'numbered' ? (
                <ul className="text-base text-[#009D4D] font-semibold space-y-2 flex flex-col items-center">
                  {card.listItems.map((item, i) => (
                    <li key={i}>{i + 1}. {item.replace(/^\d+\.\s*/, '')}</li>
                  ))}
                </ul>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-left w-full max-w-3xl border border-transparent">
                  {card.listItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 font-medium group transition-colors">
                      <CheckCircle2 size={20} className="text-[#00B85C] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="leading-snug">{item.replace(/^✅\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {(card.primaryButton || card.secondaryButton) && (
              <div className="flex flex-wrap justify-center gap-4 w-full mt-4">
                {card.primaryButton && (
                  <button className="bg-[#00B85C] hover:bg-[#009D4D] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-[#00B85C]/20 active:scale-95 w-full sm:w-auto">
                    {card.primaryButton}
                  </button>
                )}
                {card.secondaryButton && (
                  <button className="bg-white dark:bg-slate-800 border border-[#00B85C] text-[#00B85C] hover:bg-[#00B85C] hover:text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-sm active:scale-95 w-full sm:w-auto">
                    {card.secondaryButton}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
