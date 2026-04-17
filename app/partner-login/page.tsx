import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';

export default function PartnerLogin() {
  return (
    <AuthLayout rightBgColor="bg-[#f8f9fc]">
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-300">Sign in to account</h1>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors duration-300">Enter your Email & password to login</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-4 py-3 rounded-lg bg-[#f0f4ff]/50 dark:bg-slate-800 border border-transparent dark:border-slate-700 focus:bg-white dark:focus:bg-slate-900 focus:border-[#6b58fd] focus:ring-2 focus:ring-[#6b58fd]/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">Password</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="********" 
              className="w-full px-4 py-3 rounded-lg bg-[#f0f4ff]/50 dark:bg-slate-800 border border-transparent dark:border-slate-700 focus:bg-white dark:focus:bg-slate-900 focus:border-[#6b58fd] focus:ring-2 focus:ring-[#6b58fd]/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100 text-sm pr-16"
            />
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-xs md:text-sm text-[#6b58fd] dark:text-[#a59bff] font-semibold hover:text-[#523de3] dark:hover:text-[#c4beff] transition-colors">
              show
            </button>
          </div>
        </div>

        <div className="flex items-center pt-2">
          <input 
            type="checkbox" 
            id="remember" 
            className="w-4 h-4 rounded border-gray-300 dark:border-slate-600 dark:bg-slate-800 text-[#6b58fd] focus:ring-[#6b58fd] cursor-pointer"
          />
          <label htmlFor="remember" className="ml-2.5 text-sm text-slate-500 dark:text-slate-400 font-medium cursor-pointer select-none transition-colors">
            Remember password
          </label>
        </div>

        <div className="pt-3">
          <button 
            type="button" 
            className="w-full bg-[#7562ff] hover:bg-[#604dec] text-white py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-[#7562ff]/25 dark:shadow-none active:scale-[0.98]"
          >
            Sign in
          </button>
        </div>
      </form>

      <div className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors">
        Lost Your Password? <Link href="#" className="text-[#6b58fd] dark:text-[#a59bff] hover:underline hover:text-[#523de3] dark:hover:text-[#c4beff] ml-1 transition-colors">Forgot Password</Link>
      </div>
    </AuthLayout>
  );
}
