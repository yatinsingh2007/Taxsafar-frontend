import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import Footer from "@/components/Footer";
import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <ServiceGrid />

        {/* CTA Section */}
        <section className="py-20 bg-accent/30 dark:bg-slate-900/10 relative overflow-hidden transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="bg-primary rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-primary/20">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-white outfit mb-6 leading-tight">
                  Need Expert Guidance? <br />
                  <span className="text-secondary">Request a Call Back</span> Today.
                </h2>
                <p className="text-white/80 text-lg font-medium mb-8">
                  Our financial experts are ready to help you navigate through tax, compliance, and growth strategies. Let's build your success together.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white text-sm font-bold">
                    <PhoneCall size={18} /> +91 97848 18899
                  </div>
                </div>
              </div>

              <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-transparent dark:border-slate-800 transition-colors duration-300">
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 block">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium dark:text-white" />
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 block">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium dark:text-white" />
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 block">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium appearance-none dark:text-white">
                      <option>Select a service</option>
                      <option>Return Filing</option>
                      <option>GST Registration</option>
                      <option>Virtual Accounting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-primary/20 dark:shadow-none transition-all active:scale-95 mt-2">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-3">Why TaxSafar</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white outfit">
                Built on Trust & <span className="text-secondary text-gradient">Expertise</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Expert Led", desc: "Our team consists of seasoned CAs and financial advisors with decades of combined experience.", icon: "👨‍💼" },
                { title: "Digitally Secure", desc: "We use bank-grade encryption to ensure your sensitive financial data is always protected.", icon: "🔐" },
                { title: "Client First", desc: "We tailor our services to your specific business needs, ensuring maximum value and minimal stress.", icon: "🤝" }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-accent/20 dark:hover:bg-slate-900 transition-colors">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 outfit">{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

