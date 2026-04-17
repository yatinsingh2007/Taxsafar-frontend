"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, X, Mail, Phone, Menu, X as CloseIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
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
              <Instagram size={16} className="cursor-pointer hover:text-secondary transition-colors" />
              <Facebook size={16} className="cursor-pointer hover:text-secondary transition-colors" />
              <Linkedin size={16} className="cursor-pointer hover:text-secondary transition-colors" />
              <X size={16} className="cursor-pointer hover:text-secondary transition-colors" />
            </div>
          </div>
          <div className="flex items-center gap-6 mt-2 md:mt-0">
            <a href="mailto:support@taxsafar.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={16} /> support@taxsafar.com
            </a>
            <a href="tel:+919784818899" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={16} /> +91 97848 18899
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={cn(
        "transition-all duration-300 px-4 md:px-8 py-3",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg py-2" : "bg-white"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-3xl font-black tracking-tighter text-secondary group-hover:scale-105 transition-transform">TAX</span>
            <span className="text-3xl font-black tracking-tighter text-primary group-hover:scale-105 transition-transform">safar</span>
            <div className="h-1.5 w-full bg-gradient-to-r from-secondary to-primary absolute -bottom-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
          </Link>


          <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-700">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="px-5 py-2 hover:text-primary transition-colors font-bold">Login</Link>
            <Link href="/register" className="px-5 py-2 text-primary hover:bg-accent rounded-full border border-primary transition-all font-bold">Register Now</Link>
            <Link href="/partner-login" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full shadow-md shadow-primary/20 transition-all font-bold active:scale-95">
              Partner login
            </Link>
          </div>


          <button 
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      <div className={cn(
        "lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500",
        mobileMenuOpen ? "translate-y-0" : "translate-y-full"
      )}>
        <Link href="/" className="text-2xl font-bold" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="#services" className="text-2xl font-bold" onClick={() => setMobileMenuOpen(false)}>Services</Link>
        <Link href="#about" className="text-2xl font-bold" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        <Link href="#contact" className="text-2xl font-bold" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        <div className="flex flex-col gap-4 w-full px-12">
          <Link href="/login" className="text-center py-3 border border-slate-200 rounded-xl font-bold">Login</Link>
          <Link href="/partner-login" className="text-center py-3 bg-primary text-white rounded-xl font-bold">Partner login</Link>
        </div>
      </div>
    </nav>
  );
}
