import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Droplets, FlaskConical, Map, Info, Activity, Zap } from 'lucide-react';

const FarmingGuide = ({ lang, selectedCrop }) => {
  if (!selectedCrop) return null;

  const guideItems = [
    { 
      icon: <Calendar className="text-emerald-400" />, 
      label: lang === 'en' ? 'Optimal Season' : 'உகந்த பருவம்', 
      value: selectedCrop.guide.season[lang],
      sub: lang === 'en' ? 'Growth Cycle Start' : 'வளர்ச்சி சுழற்சி ஆரம்பம்'
    },
    { 
      icon: <Map className="text-emerald-400" />, 
      label: lang === 'en' ? 'Soil Architecture' : 'மண் கட்டமைப்பு', 
      value: selectedCrop.guide.soil[lang],
      sub: lang === 'en' ? 'Texture & Type' : 'மண் அமைப்பு மற்றும் வகை'
    },
    { 
      icon: <Droplets className="text-emerald-400" />, 
      label: lang === 'en' ? 'Hydration Profile' : 'நீரேற்ற விவரம்', 
      value: selectedCrop.guide.water[lang],
      sub: lang === 'en' ? 'H2O Requirement' : 'நீர் தேவை'
    },
    { 
      icon: <FlaskConical className="text-emerald-400" />, 
      label: lang === 'en' ? 'Nutrient Matrix' : 'ஊட்டச்சத்து மேட்ரிக்ஸ்', 
      value: selectedCrop.guide.fertilizer[lang],
      sub: lang === 'en' ? 'NPK Parameters' : 'NPK அளவுருக்கள்'
    }
  ];

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <Info size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
              {lang === 'en' ? 'Technical Datasheet' : 'தொழில்நுட்ப தரவுத்தாள்'}
            </h2>
            <div className="text-[10px] text-emerald-500/60 font-black uppercase tracking-[0.3em]">CROP_ID: {selectedCrop.id.toUpperCase()}</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
           <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Efficiency Rating</span>
              <span className="text-xl font-black text-white">94.8%</span>
           </div>
           <div className="w-12 h-1.5 bg-emerald-500/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '94.8%' }}
                className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
              ></motion.div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {guideItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, backgroundColor: 'rgba(16,185,129,0.03)' }}
            className="glass-card p-8 border-white/5 relative group transition-all"
          >
            {/* Visual Accents */}
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
              <Activity size={40} className="text-emerald-500" />
            </div>
            
            <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-dark transition-all shadow-xl">
              {item.icon}
            </div>
            
            <div className="space-y-1">
              <p className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.2em]">{item.label}</p>
              <h4 className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-emerald-400 transition-colors">
                {item.value}
              </h4>
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest pt-4 border-t border-white/5 mt-4">
                {item.sub}
              </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-emerald-500/20 rounded-br-2xl group-hover:border-emerald-500 transition-colors"></div>
          </motion.div>
        ))}
      </div>

      {/* Summary Protocol */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 p-10 glass-card border-emerald-500/10 bg-gradient-to-r from-emerald-500/5 to-transparent flex flex-col md:flex-row items-center gap-10"
      >
        <div className="w-20 h-20 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center animate-[spin_10s_linear_infinite] shrink-0">
          <Zap size={32} className="text-emerald-400 -rotate-45" />
        </div>
        <div className="flex-1">
          <h5 className="text-sm font-black text-white uppercase tracking-widest mb-2 flex items-center gap-2">
            <Activity size={16} className="text-emerald-400" />
            {lang === 'en' ? 'Growth Optimization Protocol' : 'வளர்ச்சி மேம்பாட்டு நெறிமுறை'}
          </h5>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            {lang === 'en' 
              ? `Real-time monitoring suggests maintaining ${selectedCrop.guide.water.en} irrigation levels. Soil pH should be optimized for ${selectedCrop.guide.soil.en} structure to achieve maximum biological efficiency during the ${selectedCrop.guide.season.en} cycle.` 
              : `உண்மையான நேரக் கண்காணிப்பு ${selectedCrop.guide.water.ta} நீர்ப்பாசன நிலைகளைப் பராமரிக்க பரிந்துரைக்கிறது. ${selectedCrop.guide.season.ta} சுழற்சியின் போது அதிகபட்ச உயிரியல் செயல்திறனை அடைய ${selectedCrop.guide.soil.ta} கட்டமைப்பிற்கு மண் pH உகந்ததாக இருக்க வேண்டும்.`}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Link Status</span>
           <div className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-black border border-emerald-500/30">ENCRYPTED</div>
        </div>
      </motion.div>
    </div>
  );
};

export default FarmingGuide;
