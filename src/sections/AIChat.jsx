import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

const BotIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M4 11v2a8 8 0 0 0 16 0v-2"/><rect width="16" height="12" x="4" y="8" rx="2"/></svg>;

const AIChat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Sucheta's AI assistant. Ask me anything about her work, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let responseText = "I'm not sure about that, but Sucheta is always open to chatting! You can contact her directly.";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('tech')) {
        responseText = "Sucheta is proficient in React, Tailwind CSS, Node.js, and Python. She loves building interactive UIs and scalable backends.";
      } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
        responseText = "She has worked on several exciting projects, including a Hotel Booking Platform and a College Predictor AI. Check out the Projects section above!";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire')) {
        responseText = "You can reach her at suchetamondal@gmail.com or use the contact form below. She's currently available for opportunities!";
      } else if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
        responseText = "Hello there! How can I help you today?";
      }

      setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="aichat" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
          
          {/* Header */}
          <div className="p-6 bg-white/5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                  <BotIcon className="text-white" size={24} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Assistant</h3>
                <p className="text-slate-400 text-sm">Powered by Custom Logic</p>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-950/50 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed
                  ${msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-white/10 text-slate-200 rounded-bl-none border border-white/5'}
                `}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-2xl rounded-bl-none flex gap-2 items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/5 border-t border-white/5">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my skills, projects, or contact info..."
                className="flex-1 bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <button 
                onClick={handleSend}
                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!input.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIChat;
