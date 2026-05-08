import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Beaker, CheckCircle2, AlertCircle, TrendingUp, TrendingDown, Leaf } from 'lucide-react';

const SoilAdvisor = ({ lang }) => {
  const [soil, setSoil] = useState({ type: 'Loamy', n: '', p: '', k: '', ph: '' });
  const [result, setResult] = useState(null);

  const soilTypes = [
    { id: 'Clay', name: { en: 'Clay Soil', ta: 'களிமண்' } },
    { id: 'Sandy', name: { en: 'Sandy Soil', ta: 'மணல் மண்' } },
    { id: 'Loamy', name: { en: 'Loamy Soil', ta: 'களிமண் கலந்த மணல்' } },
    { id: 'Red', name: { en: 'Red Soil', ta: 'செம்மண்' } },
    { id: 'Black', name: { en: 'Black Soil', ta: 'கரிசல் மண்' } }
  ];

  const analyzeSoil = () => {
    let crops = '';
    let fertilizer = '';
    let yieldWithout = 0;
    let yieldWith = 0;

    switch (soil.type) {
      case 'Clay':
        crops = lang === 'en' ? 'Paddy, Wheat, Grams' : 'நெல், கோதுமை, பயறு வகைகள்';
        fertilizer = lang === 'en' ? 'Urea, SSP, Organic Compost' : 'யூரியா, எஸ்எஸ்பி, இயற்கை உரம்';
        yieldWithout = 40;
        yieldWith = 85;
        break;
      case 'Sandy':
        crops = lang === 'en' ? 'Groundnut, Melons, Potato' : 'நிலக்கடலை, தர்பூசணி, உருளைக்கிழங்கு';
        fertilizer = lang === 'en' ? 'Vermicompost, NPK (19-19-19)' : 'மண்புழு உரம், NPK (19-19-19)';
        yieldWithout = 20;
        yieldWith = 70;
        break;
      case 'Loamy':
        crops = lang === 'en' ? 'Cotton, Vegetables, Sugarcane' : 'பருத்தி, காய்கறிகள், கரும்பு';
        fertilizer = lang === 'en' ? 'DAP, Vermicompost' : 'டிஏபி, மண்புழு உரம்';
        yieldWithout = 55;
        yieldWith = 92;
        break;
      case 'Red':
        crops = lang === 'en' ? 'Millets, Pulses, Castor' : 'தினை, பருப்பு வகைகள், ஆமணக்கு';
        fertilizer = lang === 'en' ? 'Zinc Sulphate, Urea' : 'துத்தநாக சல்பேட், யூரியா';
        yieldWithout = 35;
        yieldWith = 80;
        break;
      case 'Black':
        crops = lang === 'en' ? 'Cotton, Sunflower, Chilli' : 'பருத்தி, சூரியகாந்தி, மிளகாய்';
        fertilizer = lang === 'en' ? 'NPK, MOP (Potash)' : 'NPK, MOP (பொட்டாஷ்)';
        yieldWithout = 60;
        yieldWith = 95;
        break;
      default:
        crops = lang === 'en' ? 'Mixed Crops' : 'கலப்பு பயிர்கள்';
        fertilizer = lang === 'en' ? 'Standard NPK' : 'நிலையான NPK';
        yieldWithout = 45;
        yieldWith = 85;
    }

    let status = 'Optimal';
    let advice = lang === 'en' ? 'Soil structure is suitable.' : 'மண்ணின் அமைப்பு ஏற்றது.';
    if (soil.ph < 6 || soil.ph > 7.5) {
      status = 'Adjustment Needed';
      advice = lang === 'en' ? 'pH level is outside the optimal range. Treat soil before sowing.' : 'pH அளவு உகந்த வரம்பிற்கு வெளியே உள்ளது. விதைப்பதற்கு முன் மண்ணை சரிசெய்யவும்.';
    }

    setResult({
      recommendation: crops,
      fertilizer: fertilizer,
      status: status,
      advice: advice,
      yieldWithout,
      yieldWith
    });
  };

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-12 border-emerald-500/30"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 bg-emerald-500 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Beaker className="text-dark" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white uppercase tracking-tighter futuristic-font">
                {lang === 'en' ? 'NEURAL SOIL ANALYZER' : 'நரம்பியல் மண் பகுப்பாய்வி'}
              </h1>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2">Precision Chemical Assessment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Soil Type Select */}
            <div className="space-y-3 md:col-span-2">
              <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{lang === 'en' ? 'Soil Type Classification' : 'மண் வகை'}</label>
              <div className="relative">
                <select 
                  value={soil.type}
                  onChange={(e) => setSoil({...soil, type: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-emerald-500/50 outline-none transition-all text-white font-bold appearance-none cursor-pointer"
                >
                  {soilTypes.map(type => (
                    <option key={type.id} value={type.id} className="bg-dark">{type.name[lang]}</option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-500">
                  ▼
                </div>
              </div>
            </div>

            {/* Chemical Inputs */}
            {[
              { id: 'n', label: 'Nitrogen (N)', unit: 'mg/kg' },
              { id: 'p', label: 'Phosphorus (P)', unit: 'mg/kg' },
              { id: 'k', label: 'Potassium (K)', unit: 'mg/kg' },
              { id: 'ph', label: 'pH Level', unit: '0-14' }
            ].map(field => (
              <div key={field.id} className="space-y-3">
                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{field.label}</label>
                <div className="relative">
                  <input 
                    type="number"
                    value={soil[field.id]}
                    onChange={(e) => setSoil({...soil, [field.id]: e.target.value})}
                    placeholder={`Enter ${field.id.toUpperCase()}`}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-emerald-500/50 outline-none transition-all text-white font-bold"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] text-slate-600 font-black">{field.unit}</span>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={analyzeSoil}
            className="btn-neon w-full py-6 text-sm flex justify-center items-center gap-4"
          >
            {lang === 'en' ? 'EXECUTE SOIL MAPPING' : 'மண் மேப்பிங்கை இயக்கவும்'}
          </button>

          {result && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-12 p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-[2.5rem] overflow-hidden"
            >
              <div className="flex items-start gap-6 mb-8">
                {result.status === 'Optimal' ? <CheckCircle2 className="text-emerald-400 mt-1" size={24} /> : <AlertCircle className="text-amber-400 mt-1" size={24} />}
                <div>
                  <h3 className="text-xl font-black text-white mb-2">{result.status}</h3>
                  <p className="text-slate-400 font-medium">{result.advice}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-dark rounded-3xl border border-white/5 shadow-inner">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="text-emerald-500" size={18} />
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{lang === 'en' ? 'Recommended Crops' : 'பரிந்துரைக்கப்படும் பயிர்கள்'}</p>
                  </div>
                  <p className="text-2xl font-black text-white italic">{result.recommendation}</p>
                </div>
                
                <div className="p-6 bg-dark rounded-3xl border border-white/5 shadow-inner">
                  <div className="flex items-center gap-3 mb-4">
                    <Beaker className="text-emerald-500" size={18} />
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{lang === 'en' ? 'Required Fertilizer' : 'தேவையான உரம்'}</p>
                  </div>
                  <p className="text-xl font-black text-white italic">{result.fertilizer}</p>
                </div>
                
                <div className="p-6 bg-red-500/10 rounded-3xl border border-red-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] text-red-400 font-black uppercase tracking-widest">{lang === 'en' ? 'Without Fertilizer' : 'உரம் இல்லாமல்'}</p>
                    <TrendingDown className="text-red-400" size={18} />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white tracking-tighter">{result.yieldWithout}</span>
                    <span className="text-xl font-bold text-slate-500">%</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Estimated Base Yield</p>
                </div>

                <div className="p-6 bg-emerald-500/20 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-2xl rounded-full"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">{lang === 'en' ? 'With Protocol' : 'உரத்துடன்'}</p>
                      <TrendingUp className="text-emerald-400" size={18} />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white tracking-tighter">{result.yieldWith}</span>
                      <span className="text-xl font-bold text-slate-500">%</span>
                    </div>
                    <p className="text-xs text-emerald-400/80 mt-2 font-medium">Projected Optimal Yield</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SoilAdvisor;
