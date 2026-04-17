"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, X, Mail, Phone, Menu, X as CloseIcon, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={cn(
        "bg-primary text-white py-2 px-4 transition-all duration-300",
        isScrolled ? "h-0 py-0 overflow-hidden opacity-0" : "h-auto opacity-100"
      )}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-4">
            <span>Follow us:</span>
            <div className="flex gap-3">
              <Instagram size={16} className="cursor-pointer hover:text-secondary dark:hover:text-slate-200 transition-colors" />
              <Facebook size={16} className="cursor-pointer hover:text-secondary dark:hover:text-slate-200 transition-colors" />
              <Linkedin size={16} className="cursor-pointer hover:text-secondary dark:hover:text-slate-200 transition-colors" />
              <X size={16} className="cursor-pointer hover:text-secondary dark:hover:text-slate-200 transition-colors" />
            </div>
          </div>
          <div className="flex items-center gap-6 mt-2 md:mt-0">
            <a href="mailto:support@taxsafar.com" className="flex items-center gap-2 hover:text-secondary dark:hover:text-slate-200 transition-colors">
              <Mail size={16} /> support@taxsafar.com
            </a>
            <a href="tel:+919784818899" className="flex items-center gap-2 hover:text-secondary dark:hover:text-slate-200 transition-colors">
              <Phone size={16} /> +91 97848 18899
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={cn(
        "transition-all duration-300 px-4 md:px-8 py-3 relative border-b border-transparent",
        isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-2 dark:border-slate-800" : "bg-white dark:bg-slate-950"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-3xl font-black tracking-tighter text-secondary dark:text-white group-hover:scale-105 transition-transform">TAX</span>
            <span className="text-3xl font-black tracking-tighter text-primary group-hover:scale-105 transition-transform">safar</span>
            <div className="h-1.5 w-full bg-gradient-to-r from-secondary to-primary absolute -bottom-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
          </Link>


          <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-700 dark:text-slate-300">
            <Link href="/" className="hover:text-primary dark:hover:text-primary-dark transition-colors py-4">Home</Link>
            
            <div className="relative group/nav">
              <div className="hover:text-primary dark:hover:text-primary-dark transition-colors flex items-center gap-1 py-4 cursor-pointer">Services</div>
              <div className="absolute top-[80%] -left-8 pt-2 w-[340px] opacity-0 translate-y-3 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 p-2 text-sm flex flex-col relative overflow-hidden backdrop-blur-xl">
                  {[
                    { name: "Return Filing (GST, ITR, TDS, FSSAI)", href: "/services/return-filing" },
                    { name: "Assessment & Notice Resolution", href: "/services/assessment" },
                    { name: "Registrations & Compliance", href: "/services/registrations" },
                    { name: "Virtual Office Facilities", href: "/services/virtual-office" },
                    { name: "Consultancy & Compliances", href: "/services/consultancy" },
                    { name: "Virtual Accounting & Bookkeeping", href: "/services/accounting" },
                    { name: "Loan Assistance & Documentation", href: "/services/loan-assistance" },
                    { name: "Financial Planning & Investment Advisory", href: "/services/financial-planning" }
                  ].map((service, idx) => (
                    <Link key={idx} href={service.href} className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:text-slate-300 dark:hover:text-primary-dark rounded-xl transition-all duration-200 text-slate-700 font-medium tracking-tight relative z-10">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about-us" className="hover:text-primary dark:hover:text-primary-dark transition-colors py-4">About Us</Link>
            <Link href="/contact" className="hover:text-primary dark:hover:text-primary-dark transition-colors py-4">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            
            <Link href="/login" className="px-5 py-2 hover:text-primary dark:hover:text-primary-dark transition-colors font-bold dark:text-slate-300">Login</Link>
            <Link href="/register" className="px-5 py-2 text-primary dark:text-primary-dark hover:bg-accent dark:hover:bg-slate-800 rounded-full border border-primary dark:border-primary-dark transition-all font-bold">Register Now</Link>
            <Link href="/partner-login" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full shadow-md shadow-primary/20 dark:shadow-none transition-all font-bold active:scale-95">
              Partner login
            </Link>
          </div>


          <button 
            className="lg:hidden p-2 text-slate-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      <div className={cn(
        "lg:hidden fixed inset-0 bg-white dark:bg-slate-950 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500",
        mobileMenuOpen ? "translate-y-0" : "translate-y-full"
      )}>
        <Link href="/" className="text-2xl font-bold dark:text-slate-200" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/services" className="text-2xl font-bold dark:text-slate-200" onClick={() => setMobileMenuOpen(false)}>Services</Link>
        <Link href="/about-us" className="text-2xl font-bold dark:text-slate-200" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        <Link href="/contact" className="text-2xl font-bold dark:text-slate-200" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        <div className="flex flex-col gap-4 w-full px-12 mt-4">
          <Link href="/login" className="text-center py-3 border border-slate-200 dark:border-slate-800 dark:text-slate-200 rounded-xl font-bold">Login</Link>
          <Link href="/partner-login" className="text-center py-3 bg-primary text-white rounded-xl font-bold">Partner login</Link>
        </div>
      </div>
    </nav>
  );
}
