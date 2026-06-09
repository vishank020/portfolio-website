import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { m, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSend = () => {
    const phone = "7304207818";
    const text = msg || "Hi Vishank, I saw your portfolio and wanted to connect.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <button
        type="button"
        className="fixed bottom-8 right-8 bg-[#25d366] text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer whatsapp-float border-none outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 z-50 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat Widget"
      >
        <FaWhatsapp size={30} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 glass-card p-4 w-72 z-50 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-800 dark:text-white font-bold">Direct Message</span>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close" className="text-gray-400 hover:text-gray-600 dark:hover:text-white">✕</button>
            </div>
            <textarea
              className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-gray-800 dark:text-white focus:outline-none focus:border-[#25d366]"
              rows="3"
              placeholder="Type your message..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              aria-label="WhatsApp Message Text"
            />
            <button
              type="button"
              onClick={handleSend}
              className="w-full mt-2 bg-[#25d366] hover:bg-green-700 text-white py-2 rounded text-sm font-bold transition-colors"
            >
              Start Chat
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;