import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  
  // Create refs for each animated element
  const contentRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const buttonsRef = React.useRef(null);
  const scrollIndicatorRef = React.useRef(null);
  const imagesRef = React.useRef(null);
  
  // Check if elements are in view
  const contentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const descriptionInView = useInView(descriptionRef, { once: true, amount: 0.3 });
  const buttonsInView = useInView(buttonsRef, { once: true, amount: 0.3 });
  const scrollIndicatorInView = useInView(scrollIndicatorRef, { once: true, amount: 0.3 });
  const imagesInView = useInView(imagesRef, { once: true, amount: 0.3 });

  const images = [
    {
      src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
      alt: "Students studying",
      className: "absolute top-0 left-0 w-1/3 h-1/2 object-cover rounded-xl shadow-lg transform -rotate-6"
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      alt: "School building",
      className: "absolute top-1/4 right-0 w-1/3 h-1/2 object-cover rounded-xl shadow-lg transform rotate-6"
    },
    {
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      alt: "Students in library",
      className: "absolute bottom-0 left-1/4 w-1/3 h-1/2 object-cover rounded-xl shadow-lg transform -rotate-3"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Floating Images */}
      <motion.div
        ref={imagesRef}
        className="absolute inset-0 z-0 opacity-75"
        initial={{ opacity: 0 }}
        animate={imagesInView ? { opacity: 0.75 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
            initial={{ opacity: 0, y: 50 }}
            animate={imagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Durga Aawashiya English School
          </motion.h1>
          <motion.p
            ref={descriptionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Nurturing Minds, Building Futures
          </motion.p>
          <motion.div
            ref={buttonsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-white/90 transition-colors">
              Begin Your Journey
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              Explore More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        ref={scrollIndicatorRef}
        initial={{ opacity: 0 }}
        animate={scrollIndicatorInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection; 