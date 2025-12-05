import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, ChevronRight, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string | React.ReactNode;
  sender: 'bot' | 'user';
  options?: ChatOption[];
}

interface ChatOption {
  label: string;
  value: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  const initChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hei! 👋 Velkommen til Lillestrøm Øyeklinikk. Jeg er din digitale assistent. Hva kan jeg hjelpe deg med?",
        sender: 'bot',
        options: [
          { label: "📅 Hvordan bestille time?", value: "booking" },
          { label: "🕒 Åpningstider", value: "hours" },
          { label: "📍 Hvor holder dere til?", value: "location" },
          { label: "📞 Kontakt oss", value: "contact" }
        ]
      }
    ]);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initChat();
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOptionClick = (option: ChatOption) => {
    // Add user message
    const userMsg: Message = {
      id: Date.now(),
      text: option.label,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMsg]);

    // Simulate bot thinking delay
    setTimeout(() => {
      let botResponse: Message = {
        id: Date.now() + 1,
        text: "",
        sender: 'bot',
        options: [
           { label: "📅 Hvordan bestille time?", value: "booking" },
           { label: "Hjem", value: "restart" } 
        ]
      };

      switch (option.value) {
        case 'booking':
          botResponse.text = (
            <div>
              <p className="font-bold mb-2">Timebestilling:</p>
              <p className="mb-2">Vi er avtalespesialist, så du trenger <strong>henvisning</strong> fra lege eller optiker først.</p>
              <p className="mb-2">Har du henvisning? Bestill via SMS:</p>
              <div className="bg-slate-100 p-2 rounded text-sm mb-2 border border-slate-200">
                Send <strong>LØYE</strong> + din melding til <strong>2097</strong>.
              </div>
              <p className="text-sm italic text-slate-500">Eksempel: "LØYE Jeg ønsker time..."</p>
            </div>
          );
          break;
        case 'hours':
          botResponse.text = (
            <div>
              <p className="font-bold mb-2">Våre åpningstider på telefon:</p>
              <ul className="text-sm space-y-1 mb-2">
                <li>Man-Tors: 08:30-09:30 & 14:00-14:30</li>
                <li>Fredag: 08:30-09:30</li>
              </ul>
              <p className="text-xs text-slate-500">Klinikken stenger kl 13:00 på fredager.</p>
            </div>
          );
          break;
        case 'location':
          botResponse.text = (
            <div>
              <p className="font-bold mb-2">Du finner oss her:</p>
              <p className="mb-2">Vestbygata 55, 2003 Lillestrøm.</p>
              <a 
                href="https://maps.google.com/?q=Vestbygata+55,+2003+Lillestrøm" 
                target="_blank" 
                rel="noreferrer"
                className="text-brand-600 hover:underline text-sm flex items-center"
              >
                Åpne i Google Maps <ChevronRight size={14} />
              </a>
            </div>
          );
          break;
        case 'contact':
          botResponse.text = (
            <div>
              <p className="font-bold mb-2">Kontaktinformasjon:</p>
              <p className="mb-1">📞 Tlf: <a href="tel:+4733994090" className="text-brand-600">33 99 40 90</a></p>
              <p className="text-sm text-slate-500">Vi svarer så raskt vi kan!</p>
            </div>
          );
          break;
        case 'restart':
            initChat();
            return; // Exit early to reset
        default:
          botResponse.text = "Beklager, jeg forstod ikke det. Prøv et av alternativene nedenfor.";
      }

      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden border border-slate-200 animate-slideUp mb-4 h-[500px] max-h-[80vh]">
          {/* Header */}
          <div className="bg-brand-600 p-4 flex justify-between items-center text-white shrink-0 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Kundeservice</h3>
                <p className="text-xs text-brand-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online nå
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-brand-700 rounded-full p-1.5 transition-colors"
              aria-label="Lukk chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-grow bg-slate-50 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl p-3.5 text-sm shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Options (Only show for the last message if it's from bot) */}
            {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].options && (
              <div className="flex flex-wrap gap-2 mt-2">
                {messages[messages.length - 1].options!.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className="bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold py-2 px-3 rounded-full transition-colors border border-brand-200"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer (Visual only for this simple bot) */}
          <div className="bg-white border-t border-slate-100 p-3">
             <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 opacity-50 cursor-not-allowed">
                <span className="text-xs text-slate-500">Velg et alternativ ovenfor...</span>
                <Send size={16} className="ml-auto text-slate-400" />
             </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-105"
          aria-label="Åpne chat"
        >
          <span className="hidden group-hover:block text-sm font-semibold pr-2 animate-fadeIn">Spør oss</span>
          <MessageSquare size={28} />
          {/* Notification dot */}
          <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 border-2 border-brand-600 rounded-full"></span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;