"use client";

import { motion } from "framer-motion";
import { HandCoins, PieChart, Briefcase, Calculator, FileText, ShieldAlert, ClipboardCheck, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Loan Assistance & Documentation",
    description: "Expert help in choosing best loan offers and seamless documentation support for business, home, and personal loans.",
    icon: HandCoins,
    color: "bg-blue-500",
    link: "/services/loans"
  },
  {
    title: "Financial Planning & Investment Advisory",
    description: "Tax-efficient investment strategies and goal-based financial planning support from SEBI-registered advisors.",
    icon: PieChart,
    color: "bg-emerald-500",
    link: "/services/financial-planning"
  },
  {
    title: "Consultancy & Compliances",
    description: "Start-up registration, pitch-deck assistance, and ongoing compliance monitoring for sustainable business growth.",
    icon: Briefcase,
    color: "bg-amber-500",
    link: "/services/consultancy"
  },
  {
    title: "Virtual Accounting & Bookkeeping",
    description: "Real-time cloud-based bookkeeping systems with data protection and monthly reconciliation reporting.",
    icon: Calculator,
    color: "bg-indigo-500",
    link: "/services/accounting"
  },
  {
    title: "Return Filing",
    description: "Expert-led return filing across GST, Income Tax, TDS, and more for error-free and timely submissions.",
    icon: FileText,
    color: "bg-primary",
    link: "/services/tax-returns"
  },
  {
    title: "Assessment & Notice Resolution",
    description: "Professional handling of tax notices and dedicated support for scrutiny, assessments, and appeals.",
    icon: ShieldAlert,
    color: "bg-rose-500",
    link: "/services/assessment"
  },
  {
    title: "Registrations & Compliance",
    description: "Start-to-finish company incorporation, LLP, Trademark, MSME, and other essential business registrations.",
    icon: ClipboardCheck,
    color: "bg-cyan-500",
    link: "/services/registrations"
  },
  {
    title: "Virtual Office Facilities",
    description: "Professional address for registration purposes with Pan-India presence and virtual assistant options.",
    icon: Building2,
    color: "bg-violet-500",
    link: "/services/virtual-office"
  }
];

export default function ServiceGrid() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-3">What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white outfit transition-colors duration-300">
              Comprehensive <span className="text-secondary dark:text-secondary-light">Solutions</span> for Your Business Needs
            </h3>
          </div>
          <Link href="/services" className="text-lg font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-2 group">
            View All Services <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/20 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-start"
            >
              <div className={`p-4 rounded-2xl ${service.color} text-white mb-6 group-hover:scale-110 shadow-lg transition-transform`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 outfit leading-tight group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed font-medium transition-colors">
                {service.description}
              </p>
              <Link 
                href={service.link} 
                className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-slate-400 group-hover:text-primary transition-colors"
              >
                Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
