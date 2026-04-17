import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';

export default function Login() {
  return (
    <AuthLayout rightBgColor="bg-[#eaf5ef]">
      <div className="text-center mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Login to Your Account</h1>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">Email or Mobile</label>
          <input 
            type="text" 
            placeholder="Enter email or mobile" 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#1d8f58] focus:ring-2 focus:ring-[#1d8f58]/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">Password</label>
          <input 
            type="password" 
            placeholder="Enter password" 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#1d8f58] focus:ring-2 focus:ring-[#1d8f58]/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100 text-sm"
          />
        </div>

        <div className="pt-2">
          <button 
            type="button" 
            className="w-full bg-[#1e8851] hover:bg-[#157148] text-white py-3.5 rounded-lg font-semibold transition-all shadow-md active:scale-[0.98]"
          >
            Login
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm font-medium text-slate-700 dark:text-slate-400 transition-colors">
        Don't have an account? <Link href="/register" className="text-[#004AAD] dark:text-[#60a5fa] hover:underline hover:text-[#003882] dark:hover:text-[#93c5fd] transition-colors">Register here</Link>
      </div>
    </AuthLayout>
  );
}
