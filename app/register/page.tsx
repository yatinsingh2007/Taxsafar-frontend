import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';

export default function Register() {
  return (
    <AuthLayout rightBgColor="bg-[#eaf5ef]">
      <div className="text-center mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Create New Account</h1>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#1d8f58] focus:ring-2 focus:ring-[#1d8f58]/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100 text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">Mobile</label>
          <input 
            type="tel" 
            placeholder="Mobile Number" 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#1d8f58] focus:ring-2 focus:ring-[#1d8f58]/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">Email</label>
          <input 
            type="email" 
            placeholder="email@example.com" 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#1d8f58] focus:ring-2 focus:ring-[#1d8f58]/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">Password</label>
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#1d8f58] focus:ring-2 focus:ring-[#1d8f58]/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100 text-sm"
          />
        </div>

        <div className="pt-2">
          <button 
            type="button" 
            className="w-full bg-[#1e8851] hover:bg-[#157148] text-white py-3.5 rounded-lg font-semibold transition-all shadow-md active:scale-[0.98]"
          >
            Send OTP
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm font-medium text-slate-700 dark:text-slate-400 transition-colors">
        Already have an account? <Link href="/login" className="text-[#004AAD] dark:text-[#60a5fa] hover:underline hover:text-[#003882] dark:hover:text-[#93c5fd] transition-colors">Login here</Link>
      </div>
    </AuthLayout>
  );
}
