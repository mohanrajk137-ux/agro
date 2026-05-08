import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Languages, LayoutDashboard, CloudSun, MessageSquare, ShieldCheck, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ lang, setLang, theme, setTheme }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: { en: 'DASHBOARD', ta: 'தகவல் பலகை' }, path: '/', icon: <LayoutDashboard size={18} /> },
    { name: { en: 'EXPLORE', ta: 'ஆராயுங்கள்' }, path: '/explore', icon: <Leaf size={18} /> },
    { name: { en: 'MARKET', ta: 'சந்தை' }, path: '/market', icon: <CloudSun size={18} /> },
    { name: { en: 'FORUM', ta: 'மன்றம்' }, path: '/community', icon: <MessageSquare size={18} /> },
    { name: { en: 'PORTAL', ta: 'போர்டல்' }, path: '/gov', icon: <ShieldCheck size={18} /> }
  ];

  return (
    <>
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-12 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[1400px]"
    >
      <div className="glass-panel px-10 py-5 flex justify-between items-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <Link to="/" className="flex items-center gap-6 group/logo cursor-pointer relative z-10">
          <div className="relative p-2.5 bg-emerald-500 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.5)] group-hover/logo:rotate-[20deg] transition-transform duration-700">
            <Leaf className="text-dark" size={24} strokeWidth={3} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-emerald-300 to-emerald-600 bg-clip-text text-transparent leading-none futuristic-font">
              FARMORA
            </h1>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`flex items-center gap-3 px-5 py-2.5 rounded-xl transition-all duration-500 font-black text-[10px] tracking-widest uppercase ${
                location.pathname === link.path 
                  ? 'bg-emerald-500 text-dark shadow-[0_10px_20px_rgba(16,185,129,0.3)]' 
                  : 'text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10'
              }`}
            >
              {link.icon}
              {link.name[lang]}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-6 relative z-10">
          {/* Theme Toggle */}
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-3 bg-white/[0.03] hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-500 border border-white/10 rounded-xl transition-all duration-500"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
            className="group flex items-center gap-3 px-6 py-2.5 bg-white/[0.03] hover:bg-white/10 text-slate-400 border border-white/10 rounded-xl transition-all duration-700"
          >
            <Languages size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              {lang === 'en' ? 'தமிழ்' : 'English'}
            </span>
          </button>
          
          <div className="hidden xl:flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-emerald-500/20 animate-ping rounded-xl"></div>
               <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
             </div>
          </div>
        </div>
      </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-dark/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex justify-between items-center pb-safe">
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path}
            className={`flex flex-col items-center gap-1 p-2 transition-colors ${
              location.pathname === link.path 
                ? 'text-emerald-400' 
                : 'text-slate-500 hover:text-emerald-400'
            }`}
          >
            {link.icon}
            <span className="text-[8px] font-black tracking-widest uppercase mt-1 hidden sm:block">{link.name[lang]}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
