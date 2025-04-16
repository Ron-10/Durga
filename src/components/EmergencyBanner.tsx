import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner has been shown before
    const hasSeenBanner = localStorage.getItem('hasSeenEmergencyBanner');
    if (!hasSeenBanner) {
      setIsVisible(true);
      localStorage.setItem('hasSeenEmergencyBanner', 'true');
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-red-50 border-b border-red-200"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <div>
                  <h3 className="text-sm font-semibold text-red-800">Important Announcement</h3>
                  <p className="text-sm text-red-600">
                    School will remain closed tomorrow due to severe weather conditions. Stay safe!
                  </p>
                </div>
              </div>
              <button
                onClick={closeBanner}
                className="p-1 hover:bg-red-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmergencyBanner; 