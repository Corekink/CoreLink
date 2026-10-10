import React, { useState, useRef, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { ChatMessage, LanguageCode } from '../types';
import { BRANDING } from '../data/branding';

interface FloatingAssistantProps {
  currentLang?: LanguageCode;
  onSelectService?: (serviceName: string) => void;
}

export const FloatingAssistant: React.FC<FloatingAssistantProps> = ({ currentLang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Welcome messages localized
  const welcomeTexts: Record<LanguageCode, { greeting: string; placeholder: string; thinkingMsg: string; quickPills: string[] }> = {
    en: {
      greeting: `👋 Welcome to CORE LINK Executive Concierge. How may our team assist with your UAE visa, business setup, or government document clearance today? You can also reach our Ajman office at ${BRANDING.landlineFormatted} or WhatsApp at ${BRANDING.mobileFormatted}.`,
      placeholder: 'Ask about Golden visa, trade license, Emirates ID, Amer...',
      thinkingMsg: '⚡ Generating executive response...',
      quickPills: ['Golden Visa Requirements', 'Family Visa Cost', 'Trade License Setup 24h', 'Salem Medical Location'],
    },
    ar: {
      greeting: `👋 مرحباً بك في المساعد الذكي لـ CORE LINK. كيف يمكننا مساعدتك في معاملات التأشيرات أو تأسيس الشركات في الإمارات؟ هاتف المكتب: ${BRANDING.landlineFormatted} أو واتساب: ${BRANDING.mobileFormatted}.`,
      placeholder: 'اسأل عن الإقامة الذهبية، تكلفة الهوية، آمر...',
      thinkingMsg: '⚡ جاري تجهيز الرد الفوري...',
      quickPills: ['شروط الإقامة الذهبية', 'كفالة الزوجة والأبناء', 'تأسيس رخصة تجارية', 'حجز فحص طبي VIP'],
    },
    ur: {
      greeting: `👋 کور لنک ایگزیکٹو میں خوش آمدید۔ آپ براہ راست عجمان آفس ${BRANDING.landlineFormatted} یا واٹس ایپ ${BRANDING.mobileFormatted} پر بھی رابطہ کر سکتے ہیں۔`,
      placeholder: 'گولڈن ویزا، ایمریٹس آئی ڈی کے بارے میں پوچھیں...',
      thinkingMsg: '⚡ فوری جواب تیار کیا جا رہا ہے...',
      quickPills: ['گولڈن ویزا کی معلومات', 'فیملی ویزا خرچہ', 'تجارتی لائسنس', 'میڈیکل ٹائپنگ'],
    },
    ru: {
      greeting: `👋 Добро пожаловать в CORE LINK Executive Concierge. Офис в Аджмане: ${BRANDING.landlineFormatted}, WhatsApp: ${BRANDING.mobileFormatted}. Чем мы можем помочь вам сегодня?`,
      placeholder: 'Спросите про Золотую визу, Emirates ID...',
      thinkingMsg: '⚡ Подготовка ответа...',
      quickPills: ['Требования на Golden Visa', 'Семейная виза в ОАЭ', 'Открытие бизнеса в Дубае', 'Медицинский тест'],
    },
    zh: {
      greeting: `👋 欢迎访问 CORE LINK 智能礼宾部。阿治曼总部电话：${BRANDING.landlineFormatted}，WhatsApp专线：${BRANDING.mobileFormatted}。请问今天有什么可以帮您办理？`,
      placeholder: '询问黄金签证、阿联酋身份证费用...',
      thinkingMsg: '⚡ 正在极速检索并生成解答...',
      quickPills: ['黄金签证条件', '家属签证担保', '24小时公司注册', '体检预约中心'],
    },
  };

  const activeLang = welcomeTexts[currentLang] ? currentLang : 'en';
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // Set initial greeting when language changes or on load
    setMessages([
      {
        id: 'welcome-1',
        role: 'assistant',
        text: welcomeTexts[activeLang].greeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, [activeLang]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const sendMessage = async (textToSend?: string) => {
    const msg = textToSend || inputMsg;
    if (!msg.trim() || isLoading) return;

    const userMsgObj: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: msg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMsgObj];
    setMessages(newHistory);
    if (!textToSend) setInputMsg('');
    setIsLoading(true);

    // Add temporary thinking indicator
    const thinkingId = 'thinking-' + Date.now();
    setMessages((prev) => [
      ...prev,
      {
        id: thinkingId,
        role: 'assistant',
        text: welcomeTexts[activeLang].thinkingMsg,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isThinking: true,
      },
    ]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: msg,
          language: activeLang,
          history: messages.slice(-10).map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const data = await response.json();

      setMessages((prev) => {
        const filtered = prev.filter((m) => m.id !== thinkingId);
        return [
          ...filtered,
          {
            id: Date.now().toString(),
            role: 'assistant',
            text:
              data.reply ||
              data.fallbackReply ||
              `Thank you for your inquiry. Please call ${BRANDING.landlineFormatted} or connect on WhatsApp (+971 56 805 5093) for direct PRO assistance.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ];
      });
    } catch (err) {
      console.error('[Chat Error]', err);
      setMessages((prev) => {
        const filtered = prev.filter((m) => m.id !== thinkingId);
        return [
          ...filtered,
          {
            id: Date.now().toString(),
            role: 'assistant',
            text: `Our AI concierge server is temporarily unavailable. Please call our Ajman office directly at ${BRANDING.landlineFormatted} or WhatsApp us at ${BRANDING.mobileFormatted} for immediate personal support.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating AI Concierge Launcher Button */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
        {/* Pulsing Hint Bubble */}
        {!isOpen && (
          <div
            className="hidden sm:flex bg-[#0E1420]/95 border border-[#D4AF37]/50 text-white px-3 py-1.5 rounded-full shadow-2xl items-center gap-2 cursor-pointer hover:border-[#D4AF37] transition-colors backdrop-blur-md"
            onClick={() => setIsOpen(true)}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[11px] font-bold text-[#D4AF37]">AI Assistant</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B1528] hover:bg-[#12203D] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#D4AF37] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Toggle AI Concierge"
          title="CORE LINK AI Assistant"
        >
          {isOpen ? (
            <Icons.X className="w-5 h-5 text-white" strokeWidth={2.2} />
          ) : (
            <Icons.Sparkles className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
          )}
        </button>
      </div>

      {/* Floating Chat Modal Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[550px] max-h-[80vh] bg-[#0A0E17]/95 border border-[#D4AF37]/40 rounded-3xl shadow-2xl backdrop-blur-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0E1420] via-[#161F30] to-[#0E1420] border-b border-[#D4AF37]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#080B11] border border-[#D4AF37]/40 p-0.5 flex items-center justify-center">
                <img src={BRANDING.logoUrl} alt="CORE LINK" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white tracking-tight">CORE LINK Concierge</h3>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 rounded">
                    FAST AI
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Ajman HQ: 06 805 5093
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a href="tel:+97168055093" title="Call Ajman Office" className="p-2 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-colors">
                <Icons.Phone className="w-4 h-4" />
              </a>
              <a href={BRANDING.whatsappUrl} target="_blank" rel="noreferrer" title="WhatsApp" className="p-2 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors">
                <Icons.MessageSquare className="w-4 h-4" />
              </a>
              <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer">
                <Icons.Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] text-[#050B14] font-bold rounded-br-none'
                      : m.isThinking
                        ? 'bg-[#162033] border border-[#D4AF37]/30 text-amber-200 animate-pulse rounded-bl-none font-mono text-xs'
                        : 'bg-[#121A29] border border-slate-700/80 text-slate-100 rounded-bl-none space-y-2'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{m.text}</div>
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1 font-mono">{m.timestamp}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Pill Suggestions */}
          <div className="px-4 py-2 bg-[#080B11]/80 border-t border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-mono text-[#D4AF37] shrink-0 font-bold uppercase">Quick Ask:</span>
            {welcomeTexts[activeLang].quickPills.map((pill, i) => (
              <button
                key={i}
                onClick={() => sendMessage(pill)}
                disabled={isLoading}
                className="px-3 py-1 rounded-full bg-slate-900 hover:bg-[#D4AF37]/20 border border-slate-700 hover:border-[#D4AF37] text-[11px] text-slate-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer"
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#0E1420] border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder={welcomeTexts[activeLang].placeholder}
              disabled={isLoading}
              maxLength={1000}
              className="flex-1 px-4 py-2.5 bg-[#080B11] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button
              onClick={() => sendMessage()}
              disabled={isLoading || !inputMsg.trim()}
              className="p-2.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] text-[#050B14] rounded-xl font-bold hover:scale-105 active:scale-95 disabled:opacity-40 transition-transform shadow-md shadow-[#D4AF37]/20 cursor-pointer"
            >
              <Icons.Send className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Contact Bar */}
          <div className="py-1.5 px-4 bg-[#06090F] text-center flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Icons.Shield className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-[9px] text-slate-400 font-mono">
                Official PRO Liaison Assistant
              </span>
            </div>
            <a href="tel:+97168055093" className="text-[9px] font-mono text-[#D4AF37] hover:underline font-bold">
              Ajman HQ: 06 805 5093
            </a>
          </div>
        </div>
      )}
    </>
  );
};
