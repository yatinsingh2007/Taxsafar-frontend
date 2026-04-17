import React from 'react';

export default function ContentPageLayout({ title, description, icon: Icon, children }: { title: string, description: string, icon?: any, children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafcfa] dark:bg-slate-950 pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors">
          {/* Decorative subtle background circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 relative z-10">
            {Icon && (
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-inner">
                <Icon size={32} />
              </div>
            )}
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tight leading-tight transition-colors">{title}</h1>
            </div>
          </div>
          
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium mb-12 leading-relaxed border-b border-slate-100 dark:border-slate-800 pb-12 relative z-10 transition-colors">{description}</p>
          
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary relative z-10 transition-colors">
            {children || (
              <div className="py-24 flex flex-col items-center justify-center text-center bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 transition-colors">
                <div className="inline-block px-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-slate-500 dark:text-slate-400 font-black text-xs tracking-widest uppercase mb-6 shadow-sm transition-colors">Coming Soon</div>
                <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 transition-colors">Content Under Development</h3>
                <p className="text-slate-500 mt-2 max-w-md">Our team is actively crafting the details for this section. Please check back shortly for comprehensive information.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
