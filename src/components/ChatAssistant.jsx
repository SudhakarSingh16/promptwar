import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import './ChatAssistant.css';

// Keyword-based AI logic
const getBotResponse = (input) => {
  const text = input.toLowerCase();
  
  if (text.includes("age") || text.includes("old")) {
    return "You must be at least 18 years old on the qualifying date (usually Jan 1st of the election year) to vote in India.";
  }
  if (text.includes("nri") || text.includes("overseas")) {
    return "Yes! NRIs can vote. You need to fill out Form 6A to register as an Overseas Elector. However, you must be physically present at your polling booth in India to cast your vote.";
  }
  if (text.includes("documents") || text.includes("proof")) {
    return "To register, you need a passport-size photo, Proof of Age (like Birth Certificate or PAN Card), and Proof of Address (like Aadhaar, Passport, or Electricity Bill).";
  }
  if (text.includes("lost") || text.includes("missing epic")) {
    return "If you lost your Voter ID (EPIC), you can apply for a duplicate one using Form 8 on the NVSP or Voters portal. You can also download an e-EPIC.";
  }
  if (text.includes("where") || text.includes("booth")) {
    return "You can find your polling booth on the official Voters Portal (voters.eci.gov.in) by searching your name or EPIC number under 'Know Your Polling Station'.";
  }
  if (text.includes("form 6") || text.includes("register")) {
    return "Form 6 is used for new voter registration. You can fill it out online at the Voters Portal (voters.eci.gov.in) or submit it offline to your Electoral Registration Officer (ERO).";
  }
  if (text.includes("hello") || text.includes("hi")) {
    return "Namaste! I am your Election Assistant. Ask me questions about voting eligibility, registration, or polling rules!";
  }
  
  return "I'm a simulated assistant so I don't know everything! But you can usually find the answer to specific queries on the official ECI portal: https://voters.eci.gov.in/";
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Namaste! 🇮🇳 I'm your Election Assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const botResponse = getBotResponse(userMsg.text);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  return (
    <div className="chat-widget-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <Bot size={20} /> Election Assistant
            </div>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none' }}>
              <X size={20} />
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.isBot ? 'bot' : 'user'}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-bubble bot typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              className="chat-input"
              placeholder="Ask about Form 6, Age, NRIs..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)}>
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
