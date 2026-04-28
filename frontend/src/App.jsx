import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, Shield, Cpu, Zap, ChevronRight, Play } from 'lucide-react';
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
import { CROPS } from './data/cropData';

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('agro_lang') || 'en');
  const [activeCategory, setActiveCategory] = useState('grains');
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    localStorage.setItem('agro_lang', lang);
  }, [lang]);

  const filteredCropsBySearch = searchQuery.trim() 
    ? CROPS.filter(c => 
        c.name.en.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.name.ta.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSelect = (crop) => {
    setSelectedCrop(crop);
    setActiveCategory(crop.category);
    setSearchQuery('');
    setShowSearch(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-400">
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      <Navbar lang={lang} setLang={setLang} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Sparkles size={12} className="animate-pulse" />
              {lang === 'en' ? 'The Future of Farming is Here' : 'விவசாயத்தின் எதிர்காலம் இங்கே'}
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              {lang === 'en' ? 'EVOLVE YOUR' : 'உங்கள்'}<br/>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-600 bg-clip-text text-transparent italic">
                {lang === 'en' ? 'HARVEST' : 'அறுவடையை மேம்படுத்துங்கள்'}
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed font-medium">
              {lang === 'en' 
                ? 'Harness the power of AI to diagnose diseases, optimize yields, and connect with a global community of modern farmers.' 
                : 'நோய்களைக் கண்டறியவும், மகசூலை மேம்படுத்தவும், நவீன விவசாயிகளின் சமூகத்துடன் இணையவும் AI-இன் ஆற்றலைப் பயன்படுத்துங்கள்.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('explore').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-2xl primary-gradient text-dark font-black uppercase text-sm tracking-widest shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:shadow-[0_25px_50px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
              >
                {lang === 'en' ? 'Get Started' : 'தொடங்குங்கள்'}
                <ChevronRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase text-sm tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
                <Play size={18} className="fill-white" />
                {lang === 'en' ? 'Watch Demo' : 'டெமோ பார்க்க'}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:block"
          >
            {/* Visual Element: Futuristic Scanner UI */}
            <div className="relative z-10 w-full aspect-square glass-card border-white/10 p-1 bg-gradient-to-br from-emerald-500/20 to-transparent">
              <div className="w-full h-full bg-dark rounded-[inherit] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000" 
                  alt="Futuristic Farming" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
                {/* Scanner Line */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.8)] z-20"
                ></motion.div>
                {/* UI Overlays */}
                <div className="absolute top-8 left-8 space-y-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-dark/80 backdrop-blur border border-emerald-500/50 rounded-lg">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Live Analysis</span>
                  </div>
                  <div className="text-4xl font-black text-white">98.4%</div>
                </div>
              </div>
            </div>
            {/* Floating Badges */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-6 -right-6 p-6 glass-card border-emerald-500/30 shadow-2xl z-20">
              <Cpu size={32} className="text-emerald-400" />
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -bottom-6 -left-6 p-6 glass-card border-emerald-500/30 shadow-2xl z-20">
              <Zap size={32} className="text-emerald-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <SmartStats lang={lang} />
        
        {/* Search Bar - Repositioned & Enhanced */}
        <div className="mb-20">
          <div className="relative group max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors" size={20} />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search crops (e.g., Tomato, Paddy)...' : 'பயிர்களைத் தேடுங்கள் (எ.கா. தக்காளி, நெல்)...'}
              className="w-full bg-white/5 border-2 border-white/5 rounded-3xl py-6 pl-16 pr-6 focus:outline-none focus:border-emerald-500/30 focus:bg-white/10 transition-all text-lg shadow-2xl font-medium"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearch(true);
              }}
            />
            <AnimatePresence>
              {showSearch && filteredCropsBySearch.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-4 bg-[#0a1120] border border-white/10 rounded-3xl p-4 shadow-3xl z-40 max-h-80 overflow-y-auto backdrop-blur-2xl"
                >
                  {filteredCropsBySearch.map(crop => (
                    <button
                      key={crop.id}
                      onClick={() => handleSearchSelect(crop)}
                      className="w-full text-left p-4 hover:bg-emerald-500/10 rounded-2xl transition-all flex justify-between items-center group"
                    >
                      <div>
                        <div className="font-bold text-white group-hover:text-emerald-400">{crop.name[lang]}</div>
                        <div className="text-xs text-slate-500 uppercase font-black">{crop.category}</div>
                      </div>
                      <ChevronRight size={16} className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <WeatherMarket lang={lang} />
        
        <div id="explore" className="scroll-mt-24">
          <CategorySelection 
            lang={lang} 
            activeCategory={activeCategory} 
            setActiveCategory={(cat) => {
              setActiveCategory(cat);
              setSelectedCrop(null);
            }} 
          />

          <CropList 
            lang={lang} 
            activeCategory={activeCategory} 
            selectedCrop={selectedCrop} 
            setSelectedCrop={setSelectedCrop} 
          />
        </div>

        <AnimatePresence mode="wait">
          {selectedCrop && (
            <motion.div
              key={selectedCrop.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-20 pt-10"
            >
              <div className="text-center mb-10">
                <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">
                  {selectedCrop.name[lang]}
                </h2>
                <div className="flex justify-center items-center gap-4 text-emerald-400 font-black uppercase text-xs tracking-widest">
                  <span className="w-12 h-[1px] bg-emerald-500/50"></span>
                  {lang === 'en' ? 'Smart Intelligence' : 'ஸ்மார்ட் நுண்ணறிவு'}
                  <span className="w-12 h-[1px] bg-emerald-500/50"></span>
                </div>
              </div>

              <section>
                <DiseaseDetector lang={lang} selectedCrop={selectedCrop} />
              </section>

              <section>
                <FarmingGuide lang={lang} selectedCrop={selectedCrop} />
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="mt-32">
          <Community lang={lang} />
        </section>
      </main>

      <Footer lang={lang} />
      <VoiceAssistant lang={lang} />
      <ChatBot lang={lang} />
    </div>
  );
}

export default App;
