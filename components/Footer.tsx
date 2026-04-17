"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin, X, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-1 group">
              <span className="text-3xl font-black tracking-tighter text-white">TAX</span>
              <span className="text-3xl font-black tracking-tighter text-primary">safar</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              TaxSafar is your trusted digital partner for tax compliance, accounting, and business advisory services. We simplify the complex so you can focus on growth.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <X size={18} />
              </Link>
            </div>
          </div>


          <div>
            <h4 className="text-white font-bold mb-6 outfit text-lg">Services</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="/services/return-filing" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Return Filing</Link></li>
              <li><Link href="/services/registrations" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> GST Registration</Link></li>
              <li><Link href="/services/accounting" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Virtual Accounting</Link></li>
              <li><Link href="/services/consultancy" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Consultancy Services</Link></li>
              <li><Link href="/services/assessment" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Assessment Support</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-bold mb-6 outfit text-lg">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="/about-us" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Blogs</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Contact Us</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-bold mb-6 outfit text-lg">Contact Us</h4>
            <ul className="flex flex-col gap-5 text-sm font-medium text-slate-400">
              <li className="flex gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>123 Financial Hub, Business District, Jaipur, Rajasthan 302001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+91 97848 18899</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>support@taxsafar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          <p>© 2026 TaxSafar. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
