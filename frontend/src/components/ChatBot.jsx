import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, MessageSquare, Sparkles, User } from 'lucide-react';
import { CROPS } from '../data/cropData';

const ChatBot = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: lang === 'en' ? 'Hello! I am AgroBot. How can I help you with your crops today?' : 'வணக்கம்! நான் அக்ரோபாட். இன்று உங்கள் பயிர்களுக்கு நான் எவ்வாறு உதவ முடியும்?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Logic
    setTimeout(() => {
      const botResponse = generateResponse(input.toLowerCase());
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    // 1. Greetings
    if (lowerQuery.match(/\b(hi|hello|hey|வணக்கம்)\b/)) {
      return lang === 'en' 
        ? 'Hello! I can help you with crop diseases, fertilizers, market prices, and government subsidies. What do you need?'
        : 'வணக்கம்! பயிர் நோய்கள், உரங்கள், சந்தை விலை மற்றும் அரசு மானியங்கள் பற்றி நான் உதவ முடியும். உங்களுக்கு என்ன வேண்டும்?';
    }

    // 2. Fertilizers
    if (lowerQuery.match(/(fertilizer|urea|dap|npk|potash|ssp|உரம்|யூரியா)/)) {
      return lang === 'en'
        ? 'For optimal growth, use NPK for balanced nutrients, Urea for Nitrogen, and DAP for Phosphorus. You can check the "Fertilizer Hub" in the Explore menu for precise guidelines.'
        : 'சிறந்த வளர்ச்சிக்கு, NPK, யூரியா மற்றும் DAP ஐப் பயன்படுத்தவும். துல்லியமான வழிகாட்டுதல்களுக்கு "உர மையம்" பக்கத்தைப் பார்க்கவும்.';
    }

    // 3. Government Subsidies / Portal
    if (lowerQuery.match(/(scheme|subsidy|government|portal|pm kisan|மானியம்|திட்டம்)/)) {
      return lang === 'en'
        ? 'The Government provides various schemes like PM-Kisan (₹6000/year) and Sub-Mission on Agricultural Mechanization (up to 80% subsidy). Visit our "Gov Portal" section.'
        : 'அரசாங்கம் PM-Kisan (₹6000/வருடம்) மற்றும் வேளாண் இயந்திரமயமாக்கல் (80% வரை மானியம்) போன்ற திட்டங்களை வழங்குகிறது. "அரசு போர்டல்" பகுதியை பார்வையிடவும்.';
    }

    // 4. Market / Prices
    if (lowerQuery.match(/(price|market|sell|cost|விலை|சந்தை)/)) {
      return lang === 'en'
        ? 'Market prices fluctuate daily. Currently, Paddy is around ₹2,183/Qtl and Cotton is ₹7,020/Qtl. Check the "Market" tab for live updates.'
        : 'சந்தை விலைகள் தினமும் மாறுகின்றன. தற்போது நெல் ₹2,183/Qtl, பருத்தி ₹7,020/Qtl. நேரடி தகவலுக்கு "சந்தை" பகுதியை பார்க்கவும்.';
    }

    // 5. Soil
    if (lowerQuery.match(/(soil|ph|analyzer|மண்)/)) {
      return lang === 'en'
        ? 'Different crops need different soil. You can use our "Neural Soil Analyzer" to input your N, P, K, and pH levels to get crop recommendations!'
        : 'பல்வேறு பயிர்களுக்கு வெவ்வேறு மண் தேவை. உங்கள் மண்ணின் N,P,K மற்றும் pH அளவுகளை உள்ளிட்டு பரிந்துரைகளை பெற "மண் பகுப்பாய்வி" யைப் பயன்படுத்தவும்!';
    }

    // 6. Specific Crops
    const foundCrop = CROPS.find(c => lowerQuery.includes(c.name.en.toLowerCase()) || lowerQuery.includes(c.name.ta.toLowerCase()));
    if (foundCrop) {
      if (lowerQuery.match(/(disease|நோய்)/)) {
        return lang === 'en' 
          ? `Common diseases for ${foundCrop.name.en} are ${foundCrop.diseases.map(d => d.name.en).join(', ')}.`
          : `${foundCrop.name.ta} பயிருக்கு பொதுவான நோய்கள்: ${foundCrop.diseases.map(d => d.name.ta).join(', ')}.`;
      }
      return lang === 'en' 
        ? `${foundCrop.name.en} grows best in ${foundCrop.guide.soil.en} during ${foundCrop.guide.season.en}. Needs ${foundCrop.guide.water.en} watering.` 
        : `${foundCrop.name.ta} ${foundCrop.guide.soil.ta} மண்ணில் ${foundCrop.guide.season.ta} காலத்தில் சிறப்பாக வளரும். ${foundCrop.guide.water.ta} நீர் தேவை.`;
    }

    // Default
    return lang === 'en' 
      ? "I specialize in smart farming. Try asking about 'Fertilizers', 'Market Prices', 'Soil', or 'Crop Diseases'." 
      : "நான் விவசாயத் தகவல்களில் நிபுணர். 'உரங்கள்', 'சந்தை விலை', 'மண்', அல்லது 'பயிர் நோய்கள்' பற்றி கேளுங்கள்.";
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-50 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-emerald-400 shadow-2xl hover:bg-emerald-500 hover:text-white transition-colors group"
      >
        <Bot size={28} className="group-hover:animate-pulse" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-dark animate-bounce"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-[60] w-full max-w-[380px] h-[550px] glass-card shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border-emerald-500/30"
          >
            {/* Header */}
            <div className="p-5 primary-gradient flex justify-between items-center">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tighter">AgroBot AI</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest">{lang === 'en' ? 'Online' : 'ஆன்லைனில்'}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-dark/40"
            >
              {messages.map(msg => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${
                    msg.type === 'bot' 
                      ? 'bg-white/5 text-slate-300 rounded-tl-none border border-white/5' 
                      : 'bg-emerald-500 text-dark font-black rounded-tr-none shadow-lg'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></motion.div>
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></motion.div>
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></motion.div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-dark-accent border-t border-white/5">
              {/* Quick Suggestions */}
              <div className="flex gap-2 mb-3 overflow-x-auto custom-scrollbar pb-1">
                {(lang === 'en' 
                  ? ['Fertilizers', 'Crop Disease', 'Gov Subsidy', 'Market Prices'] 
                  : ['உரங்கள்', 'பயிர் நோய்', 'அரசு மானியம்', 'சந்தை விலை']
                ).map((sug, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      setInput(sug);
                      setTimeout(() => document.getElementById('chat-send-btn').click(), 100);
                    }}
                    className="whitespace-nowrap px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/30 transition-colors uppercase tracking-widest"
                  >
                    {sug}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={lang === 'en' ? 'Ask AgroBot...' : 'அக்ரோபாட்டிடம் கேளுங்கள்...'}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-emerald-500/50 transition-all font-medium"
                />
                <button 
                  id="chat-send-btn"
                  onClick={handleSend}
                  className="p-3 bg-emerald-500 text-dark rounded-xl hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
