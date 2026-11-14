import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import type { ChatMessage } from '../types';
import { FAQ_DATABASE, QUICK_FAQ_QUESTIONS } from '../data/podlogicData';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial-greeting',
      text: 'Welcome to PodLogic! I am PodBot AI. How can I help you today with our back-office support services? Select a question or type below.',
      sender: 'bot',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const processBotResponse = (userQuery: string) => {
    const lowerQuery = userQuery.toLowerCase();
    let matchedAnswer =
      'Thank you for your question. For detailed operational requirements, please reach out directly at +44 7307276303 or hub@podlogic.info.';

    for (const item of FAQ_DATABASE) {
      if (item.keywords.some((kw) => lowerQuery.includes(kw))) {
        matchedAnswer = item.answer;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          text: matchedAnswer,
          sender: 'bot',
        },
      ]);
    }, 400);
  };

  const handleSendQuestion = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-user`,
        text: trimmed,
        sender: 'user',
      },
    ]);
    processBotResponse(trimmed);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleSendQuestion(inputValue);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* CHAT TOGGLE BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle AI FAQ Assistant"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 p-[2px] shadow-xl hover:scale-105 transition transform flex items-center justify-center group relative"
      >
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
          <Bot className="w-7 h-7 text-sky-600 group-hover:text-blue-700 transition" />
        </div>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
      </button>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[90vw] sm:w-[380px] h-[520px] bg-white border border-slate-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* HEADER */}
          <div className="bg-slate-900 px-4 py-3 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/40">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-none">PodBot AI Assistant</h4>
                <span className="text-[10px] text-emerald-400 font-mono">
                  Online • BPO &amp; Operations FAQ
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* MESSAGES CONTAINER */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 text-xs chat-scrollbar bg-slate-50">
            {messages.map((msg, index) => (
              <React.Fragment key={msg.id}>
                {msg.sender === 'user' ? (
                  <div className="flex items-start justify-end gap-2">
                    <div className="bg-sky-600 text-white p-2.5 rounded-2xl rounded-tr-none max-w-[85%] leading-relaxed shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none text-slate-700 max-w-[85%] leading-relaxed shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                )}

                {/* QUICK FAQ BUTTONS AFTER INITIAL GREETING */}
                {index === 0 && (
                  <div className="pl-8 space-y-1.5 pt-1">
                    {QUICK_FAQ_QUESTIONS.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => handleSendQuestion(question)}
                        className="block w-full text-left px-3 py-1.5 rounded-lg bg-white hover:bg-sky-50 text-sky-700 border border-slate-200 text-[11px] font-semibold transition shadow-sm"
                      >
                        • {question}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your FAQ question..."
              className="flex-grow bg-slate-100 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-600"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold hover:bg-sky-500 transition shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};