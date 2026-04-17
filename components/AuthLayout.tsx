import Image from "next/image";
import TaxSafarLogo from "./TaxSafarLogo";

interface AuthLayoutProps {
  children: React.ReactNode;
  rightBgColor?: string;
}

export default function AuthLayout({ children, rightBgColor = "bg-[#ecf7f1]" }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex w-full font-sans">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-[#f6f2fe] dark:bg-slate-900 items-center justify-center relative overflow-hidden transition-colors">
        {/* Decorative background leaf outlines matching the aesthetic */}
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('/auth-illustration.png')", backgroundSize: '250%', backgroundPosition: 'center', filter: 'blur(40px) brightness(1.2)' }}></div>
        
        <div className="w-full max-w-[600px] aspect-square relative z-10 transition-transform duration-700 hover:scale-105">
          <Image 
            src="/auth-illustration.png" 
            alt="Authentication Illustration" 
            fill
            className="object-contain drop-shadow-2xl saturate-110"
            priority
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className={`w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 ${rightBgColor} dark:!bg-slate-950 transition-colors duration-500`}>
        <div className="w-full max-w-[460px] bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none p-8 sm:p-14 relative z-10 border border-slate-50 dark:border-slate-800 transition-all duration-300 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform hover:-translate-y-1">
          <div className="flex justify-center mb-8">
             <TaxSafarLogo />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
