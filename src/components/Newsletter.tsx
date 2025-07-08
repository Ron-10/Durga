import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    try {
      await emailjs.send(
        'service_ty02s7h',
        'template_lv2ho2g',
        { user_email: email },
        'y7LSSUXkFTIwMPWPS'
      );
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-[#007BFF] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for the latest news, events, and updates from our school.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-l-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-white text-[#007BFF] rounded-r-lg font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </motion.button>
            </div>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-8 left-0 right-0 text-sm text-blue-100"
                >
                  Thank you for subscribing! 🎉
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-8 left-0 right-0 text-sm text-red-200"
                >
                  There was an error. Please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 