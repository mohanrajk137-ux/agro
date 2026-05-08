import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, Shield, Cpu, Zap, ChevronRight, Play, Beaker, Landmark, Calculator as CalcIcon, LayoutDashboard, MessageSquare, CloudSun, Droplet } from 'lucide-react';

import Navbar from './components/Navbar';
import WeatherMarket from './components/WeatherMarket';
import CategorySelection from './components/CategorySelection';
import CropList from './components/CropList';
import FarmingGuide from './components/FarmingGuide';
import DiseaseDetector from './components/DiseaseDetector';
import Community from './components/Community';
import VoiceAssistant from './components/VoiceAssistant';
import ChatBot from './components/ChatBot';
import SmartStats from './components/SmartStats';
import Footer from './components/Footer';
import SoilAdvisor from './components/SoilAdvisor';
import GovPortal from './components/GovPortal';
import AgriCalculator from './components/AgriCalculator';
import FertilizerInfo from './components/FertilizerInfo';
import CropCalendar from './components/CropCalendar';
import About from './components/About';
import Disclaimer from './components/Disclaimer';
import { CROPS } from './data/cropData';

// Wrapper for Page Transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// Back to Home Component
const BackButton = ({ lang }) => (
  <div className="max-w-7xl mx-auto px-6 pt-32">
    <Link to="/" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all font-black text-[10px] tracking-widest uppercase">
      <ChevronRight size={16} className="rotate-180" />
      {lang === 'en' ? 'BACK TO DASHBOARD' : 'டாஷ்போர்டுக்கு திரும்பு'}
    </Link>
  </div>
);

function AppContent() {
  const [lang, setLang] = useState(() => localStorage.getItem('agro_lang') || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem('agro_theme') || 'dark');
  const [activeCategory, setActiveCategory] = useState('grains');
  const [selectedCrop, setSelectedCrop] = useState(null);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('agro_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('agro_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400 font-jakarta">
      {/* Background System */}
      <div className="neon-bg"></div>
      <div className="mesh-overlay"></div>
      <div className="grid-line-overlay"></div>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="genetic-line opacity-20" style={{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%', animationDelay: Math.random() * 5 + 's', animationDuration: 5 + Math.random() * 10 + 's' }} />
        ))}
      </div>

      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* HOME / DASHBOARD */}
          <Route path="/" element={
            <PageWrapper>
              <section className="relative min-h-screen flex items-center pt-32 pb-40 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <motion.div className="stagger-in relative z-10">
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 shadow-[0_0_40px_rgba(16,185,129,0.1)] backdrop-blur-xl">
                      <Sparkles size={16} className="animate-pulse" />
                      {lang === 'en' ? 'NEURAL INTERFACE v5.0' : 'நரம்பியல் இடைமுகம் v5.0'}
                    </div>
                    <h2 className="text-[5rem] md:text-[8rem] font-black leading-[0.85] tracking-tighter mb-8 title-gradient uppercase">
                      <span className="gradient-heading block">FARMORA</span>
                    </h2>
                    <div className="flex flex-wrap gap-6 mt-12">
                      <Link to="/explore" className="px-12 py-6 rounded-2xl bg-emerald-500 text-dark font-black uppercase tracking-[0.2em] text-sm hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center w-full md:w-auto">
                        {lang === 'en' ? 'LAUNCH INTERFACE' : 'இடைமுகத்தைத் தொடங்கவும்'}
                      </Link>
                      <Link to="/fertilizer" className="px-10 py-6 rounded-2xl bg-dark/80 border-2 border-emerald-500/50 text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-emerald-500/20 hover:border-emerald-400 transition-all flex items-center gap-4 group backdrop-blur-3xl shadow-xl w-full md:w-auto justify-center">
                        <Droplet size={20} className="group-hover:scale-125 transition-transform text-emerald-400" />
                        {lang === 'en' ? 'FERTILIZERS' : 'உரங்கள்'}
                      </Link>
                      <Link to="/about" className="px-10 py-6 rounded-2xl bg-white/10 border-2 border-white/20 text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-4 group backdrop-blur-3xl shadow-xl w-full md:w-auto justify-center">
                        <Shield size={20} className="group-hover:scale-125 transition-transform text-slate-300" />
                        {lang === 'en' ? 'SITE DETAILS' : 'தள விவரங்கள்'}
                      </Link>
                    </div>

                    {/* Mobile Dashboard Grid (Visible only on small screens) */}
                    <div className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3">
                       <Link to="/market" className="p-4 bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                         <CloudSun className="text-emerald-400 mb-2" size={24} />
                         <span className="text-[10px] font-black uppercase tracking-widest text-white">Market</span>
                       </Link>
                       <Link to="/community" className="p-4 bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                         <MessageSquare className="text-emerald-400 mb-2" size={24} />
                         <span className="text-[10px] font-black uppercase tracking-widest text-white">Forum</span>
                       </Link>
                       <Link to="/gov" className="p-4 bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                         <Landmark className="text-emerald-400 mb-2" size={24} />
                         <span className="text-[10px] font-black uppercase tracking-widest text-white">Portal</span>
                       </Link>
                       <Link to="/soil" className="p-4 bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                         <Beaker className="text-emerald-400 mb-2" size={24} />
                         <span className="text-[10px] font-black uppercase tracking-widest text-white">Soil Lab</span>
                       </Link>
                       <Link to="/calculator" className="p-4 bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                         <CalcIcon className="text-emerald-400 mb-2" size={24} />
                         <span className="text-[10px] font-black uppercase tracking-widest text-white">Economics</span>
                       </Link>
                       <Link to="/calendar" className="p-4 bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                         <LayoutDashboard className="text-emerald-400 mb-2" size={24} />
                         <span className="text-[10px] font-black uppercase tracking-widest text-white">Calendar</span>
                       </Link>
                    </div>
                  </motion.div>
                  {/* Visual Side HUD */}
                  <div className="hidden lg:block relative perspective-1000">
                    <div className="glass-panel p-4 bg-white/5 border-white/10 shadow-[0_80px_160px_-30px_rgba(0,0,0,0.8)]">
                       <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-dark">
                         <div className="absolute inset-0 p-12 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <div className="space-y-4">
                                <div className="text-5xl font-black text-emerald-400 italic">DASHBOARD</div>
                                <div className="text-xs text-slate-500 font-black tracking-widest">SYSTEM STATUS: OPTIMAL</div>
                              </div>
                              <div className="w-20 h-20 rounded-full border-4 border-emerald-500/20 animate-spin-slow"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                               <Link to="/market" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                                 <CloudSun className="text-emerald-400 mb-2" size={20} />
                                 <span className="text-[9px] font-black uppercase tracking-widest">Market</span>
                               </Link>
                               <Link to="/community" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                                 <MessageSquare className="text-emerald-400 mb-2" size={20} />
                                 <span className="text-[9px] font-black uppercase tracking-widest">Forum</span>
                               </Link>
                               <Link to="/gov" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                                 <Landmark className="text-emerald-400 mb-2" size={20} />
                                 <span className="text-[9px] font-black uppercase tracking-widest">Portal</span>
                               </Link>
                               <Link to="/soil" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                                 <Beaker className="text-emerald-400 mb-2" size={20} />
                                 <span className="text-[9px] font-black uppercase tracking-widest">Soil Lab</span>
                               </Link>
                               <Link to="/calculator" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                                 <CalcIcon className="text-emerald-400 mb-2" size={20} />
                                 <span className="text-[9px] font-black uppercase tracking-widest">Economics</span>
                               </Link>
                               <Link to="/calendar" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center text-center">
                                 <LayoutDashboard className="text-emerald-400 mb-2" size={20} />
                                 <span className="text-[9px] font-black uppercase tracking-widest">Calendar</span>
                               </Link>
                            </div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="max-w-7xl mx-auto px-6 pb-20">
                <SmartStats lang={lang} />
              </div>
            </PageWrapper>
          } />

          {/* EXPLORE / CROP LIBRARY */}
          <Route path="/explore" element={
            <PageWrapper>
              <BackButton lang={lang} />
              <div className="max-w-7xl mx-auto px-6 pb-20">
                <CategorySelection lang={lang} activeCategory={activeCategory} setActiveCategory={(cat) => { setActiveCategory(cat); setSelectedCrop(null); }} />
                <CropList lang={lang} activeCategory={activeCategory} selectedCrop={selectedCrop} setSelectedCrop={setSelectedCrop} />
                <AnimatePresence mode="wait">
                  {selectedCrop && (
                    <motion.div key={selectedCrop.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} className="space-y-20 pt-20">
                      <div className="text-center">
                        <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">{selectedCrop.name[lang]}</h2>
                        <div className="flex justify-center items-center gap-4 text-emerald-400 font-black text-[10px] tracking-widest uppercase">
                          <span className="w-12 h-[1px] bg-emerald-500/50"></span>MISSION CONTROL INTEL<span className="w-12 h-[1px] bg-emerald-500/50"></span>
                        </div>
                      </div>
                      <DiseaseDetector lang={lang} selectedCrop={selectedCrop} />
                      <FarmingGuide lang={lang} selectedCrop={selectedCrop} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </PageWrapper>
          } />

          {/* STANDALONE FEATURES */}
          <Route path="/soil" element={<PageWrapper><BackButton lang={lang} /><SoilAdvisor lang={lang} /></PageWrapper>} />
          <Route path="/market" element={<PageWrapper><BackButton lang={lang} /><div className="max-w-7xl mx-auto px-6 pb-20"><WeatherMarket lang={lang} /></div></PageWrapper>} />
          <Route path="/community" element={<PageWrapper><BackButton lang={lang} /><div className="max-w-7xl mx-auto px-6 pb-20"><Community lang={lang} /></div></PageWrapper>} />
          <Route path="/gov" element={<PageWrapper><BackButton lang={lang} /><GovPortal lang={lang} /></PageWrapper>} />
          <Route path="/calculator" element={<PageWrapper><BackButton lang={lang} /><AgriCalculator lang={lang} /></PageWrapper>} />
          <Route path="/calendar" element={<PageWrapper><BackButton lang={lang} /><CropCalendar lang={lang} /></PageWrapper>} />
          <Route path="/fertilizer" element={<PageWrapper><FertilizerInfo lang={lang} /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><BackButton lang={lang} /><About lang={lang} /></PageWrapper>} />
        </Routes>
      </AnimatePresence>

      <Footer lang={lang} />
      <VoiceAssistant lang={lang} />
      <ChatBot lang={lang} />
      <Disclaimer lang={lang} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
