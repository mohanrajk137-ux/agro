import React from 'react';
import { motion } from 'framer-motion';
import { Sun, TrendingUp, CloudRain, Wind, Droplets, MapPin, Activity, Globe } from 'lucide-react';
import { WEATHER_DATA, MARKET_PRICES } from '../data/cropData';

const WeatherMarket = ({ lang }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 relative">
      {/* Weather Satellite View */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-1 glass-card p-8 border-emerald-500/10 overflow-hidden relative group"
      >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Globe size={120} />
        </div>
        
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <MapPin size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Satellite Telemetry</span>
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">{lang === 'en' ? 'Live Weather' : 'வானிலை நிலவரம்'}</h3>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
            <Sun size={24} className="animate-spin-slow" />
          </div>
        </div>

        <div className="flex items-center gap-6 mb-10 relative z-10">
          <span className="text-6xl font-black text-white tracking-tighter">{WEATHER_DATA.temp}</span>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-emerald-400 uppercase tracking-tighter italic">{WEATHER_DATA.condition[lang]}</span>
            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{lang === 'en' ? 'UV Index: High' : 'UV குறியீடு: அதிகம்'}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
             <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Wind size={12} />
                <span className="text-[8px] font-black uppercase tracking-widest">Wind Speed</span>
             </div>
             <div className="text-sm font-black text-white">12.4 km/h</div>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
             <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Droplets size={12} />
                <span className="text-[8px] font-black uppercase tracking-widest">Humidity</span>
             </div>
             <div className="text-sm font-black text-white">45%</div>
          </div>
        </div>

        <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/20 relative overflow-hidden group/advice z-10">
          <Activity size={16} className="text-emerald-400 mb-3" />
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            <span className="text-emerald-400 font-black mr-2 uppercase tracking-widest">{lang === 'en' ? 'ADVICE:' : 'குறிப்பு:'}</span>
            {WEATHER_DATA.advice[lang]}
          </p>
        </div>
      </motion.div>

      {/* Market Ticker Interface */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2 glass-card p-8 border-emerald-500/10 overflow-hidden relative group"
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <TrendingUp size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Trading Ledger</span>
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">{lang === 'en' ? 'Market Terminal' : 'சந்தை நிலவரம்'}</h3>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-[10px] text-emerald-500/50 font-mono tracking-tighter">REF_ID: 982-A-2026</span>
             <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center px-1">
                <div className="w-4 h-4 bg-dark rounded-full"></div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {MARKET_PRICES.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, x: 4 }}
              className="p-6 bg-white/5 border border-white/5 rounded-3xl flex justify-between items-center group/item hover:border-emerald-500/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-dark border border-white/10 flex items-center justify-center text-slate-400 group-hover/item:bg-emerald-500 group-hover/item:text-dark transition-all shadow-xl font-black">
                  {item.item.en[0]}
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-tight">{item.item[lang]}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{item.unit[lang]}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-white tracking-tighter group-hover/item:text-emerald-400 transition-colors">{item.price}</div>
                <div className="text-[10px] text-emerald-500/60 font-black flex items-center justify-end gap-1">
                   <TrendingUp size={10} />
                   +1.2%
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-dark bg-emerald-500/20 flex items-center justify-center text-[10px] font-black text-emerald-400">U{i}</div>
                 ))}
              </div>
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest italic">1,240 Traders Monitoring Live</span>
           </div>
           <button className="px-6 py-3 rounded-xl bg-emerald-500 text-dark text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all">
              Export Analysis Log
           </button>
        </div>

        {/* Dynamic Scan Line Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none"></div>
      </motion.div>
    </div>
  );
};

export default WeatherMarket;
