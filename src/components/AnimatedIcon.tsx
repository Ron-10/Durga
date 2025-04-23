import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  icon, 
  title, 
  description, 
  color = '#007BFF' 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-12 h-12 mb-4"
        style={{ color }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-blue-100"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

export default AnimatedIcon; 