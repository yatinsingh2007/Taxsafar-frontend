"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-accent/30 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-primary/20 shadow-sm self-start">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-primary-dark">Trusted by 10,000+ Clients</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 outfit tracking-tight">
            Simplify Your <span className="text-primary italic">Finances</span>, Amplify Your <span className="text-secondary">Growth</span>.
          </h1>

          <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
            From seamless tax filing to complex financial advisory, TaxSafar is your destination for excellence in compliance and business management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link 
              href="#services" 
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/20 active:scale-95"
            >
              Our Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/request-call" 
              className="flex items-center justify-center bg-white border-2 border-slate-100 hover:border-primary/50 px-8 py-4 rounded-2xl font-black text-lg transition-all active:scale-95"
            >
              Request a Call Back
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <CheckCircle2 size={18} className="text-primary" /> Expert Led
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <CheckCircle2 size={18} className="text-primary" /> 100% Secure
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <CheckCircle2 size={18} className="text-primary" /> Fast Processing
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Glass Card Representation */}
          <div className="w-full aspect-square bg-gradient-to-br from-white to-accent rounded-[3rem] shadow-2xl overflow-hidden border border-white/40 flex items-center justify-center relative">
            <div className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-[2.5rem]"></div>
            
            <div className="relative group cursor-pointer">
               <div className="text-[12rem] font-black tracking-tighter text-slate-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none group-hover:scale-110 transition-transform">TAX</div>
               <div className="text-6xl font-black text-secondary relative z-10 drop-shadow-sm">TAX<span className="text-primary">safar</span></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 h-24 w-24 bg-white/60 backdrop-blur shadow-xl rounded-2xl border border-white/40 flex items-center justify-center p-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="h-full w-full bg-primary/10 rounded-lg"></div>
            </div>
            <div className="absolute bottom-1/4 right-1/4 h-32 w-48 bg-white/60 backdrop-blur shadow-xl rounded-2xl border border-white/40 flex flex-col gap-2 p-4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="h-3 w-3/4 bg-secondary/10 rounded-full"></div>
                <div className="h-3 w-1/2 bg-primary/10 rounded-full"></div>
                <div className="h-3 w-full bg-slate-100 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
