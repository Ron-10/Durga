import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our School</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a nurturing environment where academic excellence meets character development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="School campus"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Campus</h3>
              <p className="text-white/90">Modern facilities designed for optimal learning</p>
            </div>
          </motion.div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Legacy of Excellence</h3>
            <p className="text-gray-600 mb-6">
              Since our establishment, we have been committed to providing quality education that prepares students 
              for future success. Our approach combines traditional values with modern teaching methodologies.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Established in 1994',
                'Recognized for academic excellence',
                'Strong focus on holistic development',
                'State-of-the-art infrastructure',
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <span className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></span>
                  {item}
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              className="inline-flex items-center text-[#007BFF] font-semibold"
            >
              Learn More About Us <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Our Mission',
              description: 'To provide quality education that empowers students with knowledge and values.',
              image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
            },
            {
              title: 'Our Vision',
              description: 'To be a leading institution that nurtures future leaders and innovators.',
              image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
            },
            {
              title: 'Our Values',
              description: 'Excellence, integrity, innovation, and respect form our core values.',
              image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;