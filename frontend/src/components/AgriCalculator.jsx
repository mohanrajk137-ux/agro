import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Coins, TrendingUp, IndianRupee } from 'lucide-react';

const AgriCalculator = ({ lang }) => {
  const [land, setLand] = useState('');
  const [seedCost, setSeedCost] = useState('');
  const [laborCost, setLaborCost] = useState('');
  const [marketPrice, setMarketPrice] = useState('');
  const [expectedYield, setExpectedYield] = useState('');
  const [result, setResult] = useState(null);

  const calculateEconomics = () => {
    const acres = parseFloat(land) || 0;
    const seed = parseFloat(seedCost) || 0;
    const labor = parseFloat(laborCost) || 0;
    const price = parseFloat(marketPrice) || 0;
    const yieldPerAcre = parseFloat(expectedYield) || 0;

    const totalInvestment = (seed + labor) * acres;
    const totalYield = yieldPerAcre * acres;
    const projectedRevenue = totalYield * price;
    const profit = projectedRevenue - totalInvestment;

    setResult({
      investment: totalInvestment,
      revenue: projectedRevenue,
      profit: profit,
      margin: totalInvestment > 0 ? ((profit / totalInvestment) * 100).toFixed(1) : 0
    });
  };

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-12 border-emerald-500/30"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 bg-emerald-500 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <CalcIcon className="text-dark" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white uppercase tracking-tighter futuristic-font">
                {lang === 'en' ? 'FARM ECONOMICS SIMULATOR' : 'பண்ணை பொருளாதார சிமுலேட்டர்'}
              </h1>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2">Profit & Loss Prediction Matrix</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-3">
              <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Land Size (Acres)</label>
              <input type="number" value={land} onChange={(e) => setLand(e.target.value)} placeholder="e.g., 5" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-emerald-500/50 outline-none transition-all text-white font-bold" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Seed & Fert Cost per Acre (₹)</label>
              <input type="number" value={seedCost} onChange={(e) => setSeedCost(e.target.value)} placeholder="e.g., 15000" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-emerald-500/50 outline-none transition-all text-white font-bold" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Labor Cost per Acre (₹)</label>
              <input type="number" value={laborCost} onChange={(e) => setLaborCost(e.target.value)} placeholder="e.g., 8000" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-emerald-500/50 outline-none transition-all text-white font-bold" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Expected Yield per Acre (Qtl)</label>
              <input type="number" value={expectedYield} onChange={(e) => setExpectedYield(e.target.value)} placeholder="e.g., 20" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-emerald-500/50 outline-none transition-all text-white font-bold" />
            </div>
            <div className="space-y-3 md:col-span-2">
              <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Current Market Price per Qtl (₹)</label>
              <input type="number" value={marketPrice} onChange={(e) => setMarketPrice(e.target.value)} placeholder="e.g., 2200" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-emerald-500/50 outline-none transition-all text-white font-bold" />
            </div>
          </div>

          <button onClick={calculateEconomics} className="btn-neon w-full py-6 text-sm flex justify-center items-center gap-3">
            <Coins size={20} /> {lang === 'en' ? 'EXECUTE FINANCIAL PROJECTION' : 'கணக்கீட்டைத் தொடங்கு'}
          </button>

          {result && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 bg-dark border border-white/5 rounded-3xl text-center">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-4">Total Investment</p>
                  <p className="text-3xl font-black text-white flex justify-center items-center gap-1"><IndianRupee size={24}/> {result.investment.toLocaleString()}</p>
                </div>
                <div className="p-8 bg-dark border border-white/5 rounded-3xl text-center">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-4">Projected Revenue</p>
                  <p className="text-3xl font-black text-white flex justify-center items-center gap-1"><IndianRupee size={24}/> {result.revenue.toLocaleString()}</p>
                </div>
                <div className={`p-8 rounded-3xl border text-center relative overflow-hidden ${result.profit >= 0 ? 'bg-emerald-500/20 border-emerald-500/40' : 'bg-red-500/20 border-red-500/40'}`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-2xl rounded-full ${result.profit >= 0 ? 'bg-emerald-500/30' : 'bg-red-500/30'}`}></div>
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-4 ${result.profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>Net Profit / Loss</p>
                  <p className="text-4xl font-black text-white relative z-10 flex justify-center items-center gap-1"><IndianRupee size={28}/> {Math.abs(result.profit).toLocaleString()}</p>
                  <p className={`text-xs font-bold mt-2 relative z-10 flex items-center justify-center gap-1 ${result.profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    <TrendingUp size={14} className={result.profit < 0 ? 'rotate-180' : ''}/> {result.margin}% ROI
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AgriCalculator;
