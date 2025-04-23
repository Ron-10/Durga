import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatsCardProps {
  number: number;
  label: string;
  icon: React.ReactNode;
  color?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  number, 
  label, 
  icon, 
  color = '#007BFF' 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full" 
           style={{ backgroundColor: `${color}20` }}>
        <div style={{ color }} className="w-8 h-8">
          {icon}
        </div>
      </div>
      <motion.h3 
        className="text-3xl font-bold mb-2"
        style={{ color }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {number}
      </motion.h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

export default StatsCard; 