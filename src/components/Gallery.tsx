import React from 'react';
import { Camera, ArrowRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

// Data for the gallery preview
const images = [
  {
    url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    title: 'Science Exhibition',
    description: 'Students showcasing innovative projects and experiments.',
    date: '2025-03-15',
  },
  {
    url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Annual Sports Day',
    description: 'A day of thrilling athletic competition and sportsmanship.',
    date: '2025-02-20',
  },
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Cultural Program',
    description: 'Celebrating diversity through music, dance, and drama.',
    date: '2024-12-10',
  },
];

const Gallery = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Moments from Our Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A glimpse into the vibrant life at our school, capturing moments of learning, creativity, and community.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  className="group-hover:opacity-100 group-hover:y-0 transition-all duration-300"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    animate: { y: 0, opacity: 1 }
                  }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <p className="text-sm text-slate-300 mb-1">{image.date}</p>
                  <h3 className="text-2xl font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">{image.title}</h3>
                  <p className="text-slate-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">
                    {image.description}
                  </p>
                </motion.div>
              </div>

              {/* View Icon on Hover */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                <Plus className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/gallery"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-[box-shadow,transform] duration-300"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
