import React from 'react';
import { Leaf, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ lang, setLang }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-white/5 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-emerald-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
            <Leaf className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent leading-none">
              AGROSCAN AI
            </h1>
            <span className="text-[10px] text-slate-600 font-bold tracking-widest mt-1">SMART FARMING</span>
          </div>
        </div>
        
        <button 
          onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
          className="group flex items-center gap-2 px-5 py-2.5 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 rounded-2xl transition-all duration-300"
        >
          <Languages size={18} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span className="text-sm font-bold text-slate-200">
            {lang === 'en' ? 'தமிழ்' : 'English'}
          </span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
