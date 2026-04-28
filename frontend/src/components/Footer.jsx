import React, { useState } from 'react';
import { Mail, Heart, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Inline SVGs for social icons to avoid lucide-react export issues
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = ({ lang }) => {
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback)
      });
      if (response.ok) {
        setStatus('success');
        setFeedback({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <footer className="bg-dark-accent border-t border-white/5 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Developer Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-black text-xl shadow-lg shadow-emerald-500/10">MK</div>
            <div>
              <h3 className="text-xl font-black text-white">Mohanraj K</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{lang === 'en' ? 'Full Stack Developer' : 'முழு அடுக்கு டெவலப்பர்'}</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-medium">
            {lang === 'en' 
              ? 'AGROSCAN AI is dedicated to empowering farmers with smart, accessible, and multilingual agricultural insights. Building a greener future together.' 
              : 'அக்ரோஸ்கேன் AI விவசாயிகளுக்கு ஸ்மார்ட், அணுகக்கூடிய மற்றும் பலமொழி விவசாயத் தகவல்களை வழங்க அர்ப்பணிக்கப்பட்டுள்ளது. பசுமையான எதிர்காலத்தை ஒன்றிணைந்து உருவாக்குவோம்.'}
          </p>
          <div className="flex gap-4 pt-4">
            <a href="mailto:mohanrajk137@gmail.com" className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500 transition-all group border border-white/5 shadow-lg">
              <Mail size={20} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500 transition-all group border border-white/5 shadow-lg">
              <GithubIcon size={20} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500 transition-all group border border-white/5 shadow-lg">
              <LinkedinIcon size={20} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="glass-card p-8 border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <MessageSquare size={100} />
          </div>
          
          <h4 className="font-black text-white mb-6 flex items-center gap-3 text-lg uppercase tracking-tight">
            <MessageSquare size={20} className="text-emerald-400" />
            {lang === 'en' ? 'Your Feedback Matters' : 'உங்கள் கருத்து முக்கியமானது'}
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder={lang === 'en' ? 'Full Name' : 'முழு பெயர்'}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-emerald-500/50 outline-none focus:bg-white/10 transition-all font-medium"
                value={feedback.name}
                onChange={(e) => setFeedback({...feedback, name: e.target.value})}
                required
              />
              <input 
                type="email" 
                placeholder={lang === 'en' ? 'Email Address' : 'மின்னஞ்சல் முகவரி'}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-emerald-500/50 outline-none focus:bg-white/10 transition-all font-medium"
                value={feedback.email}
                onChange={(e) => setFeedback({...feedback, email: e.target.value})}
                required
              />
            </div>
            <textarea 
              placeholder={lang === 'en' ? 'Tell us what you think...' : 'உங்கள் கருத்துக்களை எங்களிடம் கூறுங்கள்...'}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm h-32 focus:border-emerald-500/50 outline-none focus:bg-white/10 transition-all resize-none font-medium"
              value={feedback.message}
              onChange={(e) => setFeedback({...feedback, message: e.target.value})}
              required
            ></textarea>
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl primary-gradient text-white text-sm font-black uppercase tracking-widest hover:shadow-xl hover:shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {lang === 'en' ? 'Sending...' : 'அனுப்பப்படுகிறது...'}
                </>
              ) : (
                <>
                  <Send size={18} />
                  {lang === 'en' ? 'Submit Feedback' : 'கருத்தைச் சமர்ப்பிக்கவும்'}
                </>
              )}
            </button>
            {status === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 text-xs text-center font-bold">
                {lang === 'en' ? 'Thank you! Your feedback has been received.' : 'நன்றி! உங்கள் கருத்து பெறப்பட்டது.'}
              </motion.p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-xs text-center font-bold">
                {lang === 'en' ? 'Something went wrong. Please try again.' : 'ஏதோ தவறு நடந்துவிட்டது. மீண்டும் முயற்சிக்கவும்.'}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-white/5">
        <p className="text-[10px] text-slate-600 flex items-center justify-center gap-2 uppercase tracking-widest font-black">
          Made with <Heart size={12} className="text-red-500 fill-red-500" /> by Mohanraj K © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
