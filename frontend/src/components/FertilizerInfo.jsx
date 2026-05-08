import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FertilizerInfo = ({ lang }) => {
  const fertilizers = [
    {
      id: 1,
      name: { en: 'Urea (46-0-0)', ta: 'யூரியா (46-0-0)' },
      desc: { en: 'Primary source of Nitrogen. Promotes rapid vegetative growth and deep green foliage.', ta: 'நைட்ரஜனின் முக்கிய ஆதாரம். வேகமான வளர்ச்சி மற்றும் அடர் பச்சை இலைகளை ஊக்குவிக்கிறது.' },
      usage: { en: 'Apply 50kg per acre for cereal crops. Best applied in split doses.', ta: 'தானியப் பயிர்களுக்கு ஏக்கருக்கு 50 கிலோ பயன்படுத்தவும். பிரித்து பயன்படுத்துவது சிறந்தது.' },
      precaution: { en: 'Avoid excessive use as it may cause leaf burn.', ta: 'அதிகப்படியான பயன்பாட்டைத் தவிர்க்கவும், இது இலை கருகலை ஏற்படுத்தக்கூடும்.' }
    },
    {
      id: 2,
      name: { en: 'DAP (18-46-0)', ta: 'டிஏபி (18-46-0)' },
      desc: { en: 'Rich in Phosphorus and Nitrogen. Essential for root development and flowering.', ta: 'பாஸ்பரஸ் மற்றும் நைட்ரஜன் நிறைந்தது. வேர் வளர்ச்சி மற்றும் பூப்பதற்கு அவசியம்.' },
      usage: { en: 'Apply 25-40kg per acre during sowing or transplanting.', ta: 'விதைக்கும் போது அல்லது நடவு செய்யும் போது ஏக்கருக்கு 25-40 கிலோ பயன்படுத்தவும்.' },
      precaution: { en: 'Incorporate into soil for better efficiency.', ta: 'சிறந்த செயல்திறனுக்காக மண்ணுடன் சேர்த்துப் பயன்படுத்தவும்.' }
    },
    {
      id: 3,
      name: { en: 'MOP (Potash)', ta: 'எம்ஓபி (பொட்டாஷ்)' },
      desc: { en: 'High Potassium content. Increases disease resistance and fruit quality.', ta: 'அதிக பொட்டாசியம் உள்ளடக்கம். நோய் எதிர்ப்பு சக்தி மற்றும் பழத்தின் தரத்தை அதிகரிக்கிறது.' },
      usage: { en: 'Apply 20-30kg per acre during fruit development stage.', ta: 'பழங்கள் உருவாகும் நிலையில் ஏக்கருக்கு 20-30 கிலோ பயன்படுத்தவும்.' },
      precaution: { en: 'Maintain adequate soil moisture during application.', ta: 'பயன்படுத்தும் போது போதுமான மண் ஈரப்பதத்தை பராமரிக்கவும்.' }
    },
    {
      id: 4,
      name: { en: 'SSP (Single Super Phosphate)', ta: 'எஸ்எஸ்பி (சிங்கிள் சூப்பர் பாஸ்பேட்)' },
      desc: { en: 'Excellent source of Phosphorus, Calcium, and Sulphur. Improves root establishment and seed formation.', ta: 'பாஸ்பரஸ், கால்சியம் மற்றும் கந்தகத்தின் சிறந்த ஆதாரம். வேர் உருவாக்கம் மற்றும் விதை உருவாக்கத்தை மேம்படுத்துகிறது.' },
      usage: { en: 'Apply 50-100kg per acre as a basal dose before sowing.', ta: 'விதைப்பதற்கு முன் அடிப்படை உரமாக ஏக்கருக்கு 50-100 கிலோ பயன்படுத்தவும்.' },
      precaution: { en: 'Do not mix with Urea directly; apply separately.', ta: 'யூரியாவுடன் நேரடியாக கலக்க வேண்டாம்; தனித்தனியாக பயன்படுத்தவும்.' }
    },
    {
      id: 5,
      name: { en: 'NPK (19-19-19)', ta: 'என்.பி.கே (19-19-19)' },
      desc: { en: 'Balanced complex fertilizer providing equal ratios of Nitrogen, Phosphorus, and Potassium. Ideal for foliar spray.', ta: 'நைட்ரஜன், பாஸ்பரஸ் மற்றும் பொட்டாசியம் ஆகியவற்றை சம விகிதத்தில் வழங்கும் சீரான கலவை உரம். இலை வழி தெளிப்புக்கு சிறந்தது.' },
      usage: { en: 'Spray 5-10g per liter of water during active growth phases.', ta: 'சுறுசுறுப்பான வளர்ச்சி கட்டங்களில் ஒரு லிட்டர் தண்ணீருக்கு 5-10 கிராம் வீதம் தெளிக்கவும்.' },
      precaution: { en: 'Spray during early morning or late evening to prevent leaf scorch.', ta: 'இலைகள் கருகாமல் இருக்க அதிகாலை அல்லது மாலை வேளையில் தெளிக்கவும்.' }
    },
    {
      id: 6,
      name: { en: 'Zinc Sulphate', ta: 'துத்தநாக சல்பேட் (Zinc Sulphate)' },
      desc: { en: 'Crucial micronutrient for enzyme function and chlorophyll production. Cures zinc deficiency (Khaira disease in rice).', ta: 'நொதி செயல்பாடு மற்றும் குளோரோபில் உற்பத்திக்கு முக்கியமான நுண்ணூட்டச்சத்து. துத்தநாக குறைபாட்டை குணப்படுத்துகிறது (நெல்லில் கைரா நோய்).' },
      usage: { en: 'Apply 10kg per acre to the soil or 5g/liter as a foliar spray.', ta: 'ஏக்கருக்கு 10 கிலோ வீதம் மண்ணில் அல்லது ஒரு லிட்டருக்கு 5 கிராம் வீதம் இலையில் தெளிக்கவும்.' },
      precaution: { en: 'Never mix with Phosphorus-rich fertilizers like DAP or SSP.', ta: 'டிஏபி அல்லது எஸ்எஸ்பி போன்ற பாஸ்பரஸ் அதிகம் உள்ள உரங்களுடன் கலக்கக் கூடாது.' }
    },
    {
      id: 7,
      name: { en: 'Vermicompost', ta: 'மண்புழு உரம் (Vermicompost)' },
      desc: { en: 'Premium organic fertilizer rich in humus, micronutrients, and beneficial microbes. Enhances soil structure and water retention.', ta: 'மட்கிய, நுண்ணூட்டச்சத்துக்கள் மற்றும் நன்மை பயக்கும் நுண்ணுயிரிகள் நிறைந்த பிரீமியம் இயற்கை உரம். மண்ணின் அமைப்பு மற்றும் நீர் தேக்கத்தை மேம்படுத்துகிறது.' },
      usage: { en: 'Apply 1-2 tons per acre during land preparation.', ta: 'நிலம் தயாரிக்கும் போது ஏக்கருக்கு 1-2 டன் பயன்படுத்தவும்.' },
      precaution: { en: 'Keep moist and store in shade to protect live microbial activity.', ta: 'உயிருள்ள நுண்ணுயிரிகளைப் பாதுகாக்க ஈரப்பதமாக வைத்து நிழலில் சேமிக்கவும்.' }
    },
    {
      id: 8,
      name: { en: 'Neem Cake', ta: 'வேப்பம் புண்ணாக்கு (Neem Cake)' },
      desc: { en: 'Organic manure with pest-repellent properties. Acts as a slow-release nitrogen source and controls soil nematodes.', ta: 'பூச்சி விரட்டி பண்புகளைக் கொண்ட இயற்கை உரம். மெதுவாக நைட்ரஜனை வெளியிடும் ஆதாரமாக செயல்படுகிறது மற்றும் மண்ணில் உள்ள நூற்புழுக்களை கட்டுப்படுத்துகிறது.' },
      usage: { en: 'Apply 100-250kg per acre mixed with other organic or chemical fertilizers.', ta: 'மற்ற இயற்கை அல்லது ரசாயன உரங்களுடன் கலந்து ஏக்கருக்கு 100-250 கிலோ பயன்படுத்தவும்.' },
      precaution: { en: 'Apply 15 days before sowing for optimal nematode control.', ta: 'நூற்புழுக்களைக் கட்டுப்படுத்த விதைப்பதற்கு 15 நாட்களுக்கு முன் பயன்படுத்தவும்.' }
    }
  ];

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-emerald-500 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Droplet className="text-dark" size={32} />
            </div>
            <div>
              <h1 className="text-5xl font-black text-white uppercase tracking-tighter futuristic-font">
                {lang === 'en' ? 'FERTILIZER HUB' : 'உர மையம்'}
              </h1>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2">Nutritional Optimization Protocols</p>
            </div>
          </div>
          <Link to="/" className="btn-neon text-[9px] px-8 py-3 rounded-xl border border-white/10 hover:border-emerald-500/50">
            {lang === 'en' ? 'BACK TO DASHBOARD' : 'டாஷ்போர்டுக்கு திரும்பு'}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {fertilizers.map((f, idx) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-10 border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.02] blur-[80px] rounded-full"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 space-y-6">
                  <h3 className="text-3xl font-black text-white italic">{f.name[lang]}</h3>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                    <CheckCircle size={14} /> ACTIVE FORMULA
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] flex items-center gap-3">
                      <Info size={14} className="text-emerald-500" /> {lang === 'en' ? 'BIO-CHEMICAL PROFILE' : 'விவரக்குறிப்பு'}
                    </p>
                    <p className="text-slate-400 font-medium leading-relaxed italic">{f.desc[lang]}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                      <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mb-3">{lang === 'en' ? 'APPLICATION GUIDE' : 'பயன்பாட்டு வழிகாட்டி'}</p>
                      <p className="text-white font-bold leading-tight">{f.usage[lang]}</p>
                    </div>
                    <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl">
                      <p className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                        <AlertTriangle size={12} /> {lang === 'en' ? 'SENSORY ALERT' : 'எச்சரிக்கை'}
                      </p>
                      <p className="text-slate-400 text-sm font-medium leading-tight">{f.precaution[lang]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FertilizerInfo;
