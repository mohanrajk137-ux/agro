import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, CheckCircle2, Circle } from 'lucide-react';
import { CROPS } from '../data/cropData';

const CropCalendar = ({ lang }) => {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [plantingDate, setPlantingDate] = useState('');
  const [schedule, setSchedule] = useState(null);

  const [yieldPrediction, setYieldPrediction] = useState(null);

  const cropSpecificData = {
    paddy: { duration: 120, yield: { en: '4-5 tonnes/hectare', ta: '4-5 டன்கள்/ஹெக்டேர்' } },
    maize: { duration: 100, yield: { en: '5-6 tonnes/hectare', ta: '5-6 டன்கள்/ஹெக்டேர்' } },
    wheat: { duration: 130, yield: { en: '3-4 tonnes/hectare', ta: '3-4 டன்கள்/ஹெக்டேர்' } },
    tomato: { duration: 90, yield: { en: '25-30 tonnes/hectare', ta: '25-30 டன்கள்/ஹெக்டேர்' } },
    brinjal: { duration: 110, yield: { en: '20-25 tonnes/hectare', ta: '20-25 டன்கள்/ஹெக்டேர்' } },
    onion: { duration: 100, yield: { en: '15-20 tonnes/hectare', ta: '15-20 டன்கள்/ஹெக்டேர்' } },
    banana: { duration: 300, yield: { en: '30-40 tonnes/hectare', ta: '30-40 டன்கள்/ஹெக்டேர்' } },
    mango: { duration: 150, yield: { en: '8-10 tonnes/hectare (Mature)', ta: '8-10 டன்கள்/ஹெக்டேர்' } },
    default: { duration: 120, yield: { en: 'Variable based on variety', ta: 'ரகத்தைப் பொறுத்து மாறுபடும்' } }
  };

  const generateSchedule = () => {
    if (!selectedCrop || !plantingDate) return;

    const cropData = CROPS.find(c => c.id === selectedCrop);
    if (!cropData) return;

    const specificData = cropSpecificData[selectedCrop] || cropSpecificData.default;
    const durationMultiplier = specificData.duration / 120; // Base timeline is 120 days

    setYieldPrediction(specificData.yield[lang]);

    const baseDate = new Date(plantingDate);
    const baseTimeline = [
      { dayOffset: 0, task: { en: 'Sowing/Planting seeds', ta: 'விதைகளை விதைத்தல்/நடவு' } },
      { dayOffset: 15, task: { en: 'First irrigation and weed removal', ta: 'முதல் நீர்ப்பாசனம் மற்றும் களை எடுத்தல்' } },
      { dayOffset: 30, task: { en: 'Apply base fertilizer (Urea/DAP)', ta: 'அடிப்படை உரம் (யூரியா/DAP) இடுதல்' } },
      { dayOffset: 45, task: { en: 'Pest monitoring & bio-pesticide spray', ta: 'பூச்சி கண்காணிப்பு & உயிரி பூச்சிக்கொல்லி' } },
      { dayOffset: 60, task: { en: 'Flowering/Vegetative stage boost', ta: 'வளர்ச்சி/பூக்கும் பருவம் ஊக்கமூட்டி' } },
      { dayOffset: 90, task: { en: 'Pre-harvest inspection & watering stop', ta: 'அறுவடைக்கு முந்தைய ஆய்வு' } },
      { dayOffset: 120, task: { en: 'Harvest window begins', ta: 'அறுவடை தொடங்குகிறது' } }
    ];

    const generated = baseTimeline.map(item => {
      const taskDate = new Date(baseDate);
      const actualOffset = Math.round(item.dayOffset * durationMultiplier);
      taskDate.setDate(taskDate.getDate() + actualOffset);
      return {
        date: taskDate.toLocaleDateString(),
        task: item.task[lang],
        isPast: taskDate < new Date()
      };
    });

    setSchedule(generated);
  };

  return (
    <div className="pt-32 px-6 pb-20 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-12 border-emerald-500/30"
      >
        <div className="flex items-center gap-6 mb-12">
          <div className="p-4 bg-emerald-500 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <CalendarIcon className="text-dark" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter futuristic-font">
              {lang === 'en' ? 'SMART CROP CALENDAR' : 'ஸ்மார்ட் பயிர் நாட்காட்டி'}
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2">Lifecycle Tracking System</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-3">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{lang === 'en' ? 'Select Crop' : 'பயிரைத் தேர்ந்தெடுக்கவும்'}</label>
            <div className="relative">
              <select 
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-emerald-500/50 outline-none transition-all text-white font-bold appearance-none cursor-pointer"
              >
                <option value="" disabled>{lang === 'en' ? 'Choose...' : 'தேர்ந்தெடு...'}</option>
                {CROPS.map(c => <option key={c.id} value={c.id} className="bg-dark">{c.name[lang]}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{lang === 'en' ? 'Planting Date' : 'விதைக்கும் தேதி'}</label>
            <input 
              type="date"
              value={plantingDate}
              onChange={(e) => setPlantingDate(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-emerald-500/50 outline-none transition-all text-white font-bold"
              style={{ colorScheme: 'dark' }}
            />
          </div>
        </div>

        <button onClick={generateSchedule} className="btn-neon w-full py-6 text-sm flex justify-center items-center gap-3">
          <CalendarIcon size={20} /> {lang === 'en' ? 'GENERATE TIMELINE' : 'நாட்காட்டியை உருவாக்கு'}
        </button>

        {schedule && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-16">
            {yieldPrediction && (
              <div className="mb-12 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest">{lang === 'en' ? 'Projected Yield' : 'எதிர்பார்க்கப்படும் மகசூல்'}</h3>
                  <p className="text-2xl font-black text-white mt-1">{yieldPrediction}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
                  <span className="text-emerald-400 font-black">📈</span>
                </div>
              </div>
            )}

            <div className="relative pl-6 border-l-2 border-white/10 space-y-12">
              {schedule.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[35px] top-1 bg-dark rounded-full p-1 ${step.isPast ? 'text-emerald-500' : 'text-slate-600'}`}>
                     {step.isPast ? <CheckCircle2 size={20} className="fill-emerald-500/20" /> : <Circle size={20} />}
                  </div>
                  <div>
                     <span className={`text-[10px] font-black uppercase tracking-widest ${step.isPast ? 'text-emerald-400' : 'text-slate-500'}`}>{step.date}</span>
                     <p className={`text-xl font-black mt-2 ${step.isPast ? 'text-slate-300' : 'text-white'}`}>{step.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CropCalendar;
