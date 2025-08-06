import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaTimes, FaBook, FaDollarSign, FaUsers, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import chatbotImage from '../assets/chatbot.webp'; // Import the custom chatbot image

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hey there! 🎉 Welcome to Creditor Academy—your gateway to financial freedom! How can I assist you today?', 
      showSuggestions: true,
      id: Date.now()
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const botResponses = {
    courses: `📚 **Course Catalog** ✨\n\n` +
      `▸ Sovereignty 101 - Master legal identity foundations\n` +
      `▸ Private Merchant - Setup payment processing\n` +
      `▸ Operate in Private - Trust/business management\n` +
      `▸ Build in Credit™ - Unlimited funding strategies\n` +
      `▸ Masterclass - Advanced financial tactics\n\n` +
      `Which one intrigues you? 😊`,
    pricing: `💰 **Membership Tiers** 💎\n\n` +
      `◈ Freshman - $9/mo\n` +
      `◈ Master Class - $69/mo (includes private ID)\n` +
      `◈ "Remedy Now" - $399 (50% OFF)\n` +
      `◈ Cadillac Website - $499 down + $49/mo\n\n` +
      `Want me to explain any option?`,
    'talk to team': `👥 **Connect With Us** 📞\n\n` +
      `• Email: sales@creditoracademy.com\n` +
      `• Platform: Message via member dashboard\n` +
      `• VIP Support: Available for Master Class members\n\n` +
      `We'll respond within 24 hours!`,
    default: `🤖 **Pro Tip**: Try these quick options 👇`
  };

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    // Add user message with typing animation
    setMessages(prev => [...prev, { 
      sender: 'user', 
      text: message,
      id: Date.now() 
    }]);

    setTimeout(() => {
      const responseKey = message.toLowerCase().includes('course') ? 'courses' :
                          message.toLowerCase().includes('pric') ? 'pricing' :
                          message.toLowerCase().includes('team') ? 'talk to team' : 
                          'default';
      
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: botResponses[responseKey],
        showSuggestions: responseKey === 'default',
        id: Date.now() + 1
      }]);
    }, 800);

    setInput('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Small bounce animation when opening
      const chatWindow = document.querySelector('.chat-window');
      if (chatWindow) {
        chatWindow.style.transform = 'translateY(10px)';
        setTimeout(() => {
          chatWindow.style.transform = 'translateY(0)';
        }, 100);
      }
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      }
    }
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200
      }
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="chatbot-button"
        initial={false}
        animate={{
          scale: isOpen ? 0.9 : 1,
          rotate: isOpen ? 10 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
      >
        <img src={chatbotImage} alt="Chatbot" className="chatbot-icon" />
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="pulse-dot"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="header-left">
                <motion.div 
                  className="bot-avatar"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2 
                  }}
                >
                  <img src={chatbotImage} alt="CreditorBot Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                </motion.div>
                <div className="header-text">
                  <h3>CreditorBot</h3>
                  <span className="status">Online</span>
                </div>
              </div>
              <motion.button
                className="close-btn"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
              >
                <FaTimes size={18} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="messages-container">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  className={`message ${msg.sender}`}
                >
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  
                  {msg.showSuggestions && (
                    <motion.div 
                      className="suggestions"
                      variants={popIn}
                    >
                      {['Courses', 'Pricing', 'Talk to Team'].map((item) => (
                        <motion.button
                          key={item}
                          className="suggestion-btn"
                          whileHover={{ x: 5, scale: 1.02 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSendMessage(item)}
                        >
                          <div className="suggestion-icon">
                            {item === 'Courses' && <FaBook />}
                            {item === 'Pricing' && <FaDollarSign />}
                            {item === 'Talk to Team' && <FaUsers />}
                          </div>
                          <span>{item}</span>
                          <FaChevronRight size={12} />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <motion.div 
              className="input-area"
              layout
            >
              <div className="input-wrapper">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                  placeholder="Type your question..."
                  className="chat-input"
                />
                <motion.button
                  className="send-btn"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSendMessage(input)}
                  disabled={!input.trim()}
                >
                  <FaPaperPlane />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Styles */}
      <style jsx>{`
        .chatbot-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 62px;
          height: 62px;
          background: linear-gradient(135deg, #15235e, #1e3a8a);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 15px 35px rgba(21, 35, 94, 0.4);
          z-index: 1000;
          border: 3px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .chatbot-icon {
            width: 40px;
            height: 40px;
            object-fit: contain;
        }

        .chatbot-button:hover {
          box-shadow: 0 20px 40px rgba(21, 35, 94, 0.6);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .pulse-dot {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          border-radius: 50%;
          border: 3px solid white;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        .chat-window {
          position: fixed;
          bottom: 110px;
          right: 30px;
          width: 380px;
          height: 550px;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
          border-radius: 25px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 999;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20px);
        }

        .chat-header {
          padding: 20px 25px;
          background: linear-gradient(135deg, #15235e, #1e3a8a);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .bot-avatar {
          background: rgba(255, 255, 255, 0.2);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 2px;
          box-sizing: border-box;
        }

        .header-text h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .status {
          font-size: 12px;
          opacity: 0.8;
          margin-top: 2px;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .messages-container {
          flex: 1;
          padding: 25px;
          overflow-y: auto;
          background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
          scrollbar-width: thin;
          scrollbar-color: rgba(21, 35, 94, 0.3) transparent;
        }

        .messages-container::-webkit-scrollbar {
          width: 6px;
        }

        .messages-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .messages-container::-webkit-scrollbar-thumb {
          background: rgba(21, 35, 94, 0.3);
          border-radius: 3px;
        }

        .message {
          max-width: 85%;
          padding: 15px 20px;
          margin-bottom: 20px;
          border-radius: 20px;
          line-height: 1.5;
          font-size: 14px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .message p {
            margin: 0;
        }

        .message.bot {
          background: white;
          color: #2d3748;
          border-bottom-left-radius: 8px;
          margin-right: auto;
          border: 1px solid rgba(21, 35, 94, 0.1);
        }

        .message.user {
          background: linear-gradient(135deg, #15235e, #1e3a8a);
          color: white;
          border-bottom-right-radius: 8px;
          margin-left: auto;
          box-shadow: 0 4px 15px rgba(21, 35, 94, 0.3);
        }

        .suggestions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .suggestion-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
          border: 2px solid rgba(21, 35, 94, 0.1);
          border-radius: 15px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #4a5568;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          text-align: left;
        }

        .suggestion-btn:hover {
          background: linear-gradient(135deg, #15235e, #1e3a8a);
          color: white;
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateX(8px);
          box-shadow: 0 8px 25px rgba(21, 35, 94, 0.3);
        }

        .suggestion-btn span {
            flex-grow: 1;
        }

        .suggestion-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          background: rgba(21, 35, 94, 0.1);
          border-radius: 50%;
          color: #15235e;
          flex-shrink: 0;
        }

        .suggestion-btn:hover .suggestion-icon {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .input-area {
          padding: 20px 25px;
          background: white;
          border-top: 1px solid rgba(21, 35, 94, 0.1);
        }

        .input-wrapper {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .chat-input {
          flex: 1;
          padding: 15px 20px;
          border: 2px solid rgba(21, 35, 94, 0.1);
          border-radius: 25px;
          outline: none;
          font-size: 14px;
          background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
          transition: all 0.3s ease;
        }

        .chat-input:focus {
          border-color: #15235e;
          box-shadow: 0 0 0 3px rgba(21, 35, 94, 0.1);
        }

        .send-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #15235e, #1e3a8a);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(21, 35, 94, 0.3);
          transition: all 0.3s ease;
        }

        .send-btn:hover {
          box-shadow: 0 6px 20px rgba(21, 35, 94, 0.4);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          box-shadow: none;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .chatbot-button {
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
          }

          .chatbot-icon {
              width: 38px;
              height: 38px;
          }

          .chat-window {
            bottom: 90px;
            right: 20px;
            left: 20px;
            width: auto;
            height: 70vh;
            max-height: 500px;
            border-radius: 20px;
          }

          .chat-header {
            padding: 15px 20px;
          }

          .header-text h3 {
            font-size: 16px;
          }

          .status {
            font-size: 11px;
          }

          .messages-container {
            padding: 20px;
          }

          .message {
            max-width: 90%;
            padding: 12px 16px;
            font-size: 13px;
            margin-bottom: 15px;
          }

          .suggestions {
            gap: 10px;
            margin-top: 15px;
          }

          .suggestion-btn {
            padding: 10px 15px;
            font-size: 13px;
            gap: 10px;
          }

          .suggestion-icon {
            width: 25px;
            height: 25px;
          }

          .input-area {
            padding: 15px 20px;
          }

          .chat-input {
            padding: 12px 16px;
            font-size: 13px;
          }

          .send-btn {
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 480px) {
          .chatbot-button {
            bottom: 15px;
            right: 15px;
            width: 55px;
            height: 55px;
          }
          
          .chatbot-icon {
            width: 35px;
            height: 35px;
          }

          .chat-window {
            bottom: 80px;
            right: 15px;
            left: 15px;
            height: 65vh;
            max-height: 450px;
            border-radius: 18px;
          }

          .chat-header {
            padding: 12px 15px;
          }

          .bot-avatar {
            width: 40px;
            height: 40px;
          }

          .header-text h3 {
            font-size: 15px;
          }

          .messages-container {
            padding: 15px;
          }

          .message {
            max-width: 95%;
            padding: 10px 14px;
            font-size: 12px;
            margin-bottom: 12px;
          }

          .suggestion-btn {
            padding: 8px 12px;
            font-size: 12px;
            gap: 8px;
          }

          .suggestion-icon {
            width: 22px;
            height: 22px;
          }

          .input-area {
            padding: 12px 15px;
          }

          .chat-input {
            padding: 10px 14px;
            font-size: 12px;
          }

          .send-btn {
            width: 40px;
            height: 40px;
          }
        }

        /* Touch-friendly improvements for mobile */
        @media (hover: none) and (pointer: coarse) {
          .chatbot-button:hover {
            transform: none;
          }

          .suggestion-btn:hover {
            transform: none;
          }

          .send-btn:hover {
            transform: none;
          }

          .close-btn:hover {
            transform: none;
          }

          /* Increase touch targets */
          .suggestion-btn {
            min-height: 44px;
          }

          .send-btn {
            min-width: 44px;
            min-height: 44px;
          }

          .close-btn {
            min-width: 44px;
            min-height: 44px;
          }
        }
      `}</style>
    </>
  );
};

export default Chatbot;