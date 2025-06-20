import React from 'react';
import { Play, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const tourSpots = [
  {
    id: 1,
    title: 'Main Building',
    image: '/images/tour/main-building.jpg',
    description: 'Our iconic main building houses administrative offices and primary classrooms.'
  },
  {
    id: 2,
    title: 'Science Labs',
    image: '/images/tour/science-lab.jpg',
    description: 'State-of-the-art laboratories for physics, chemistry, and biology.'
  },
  {
    id: 3,
    title: 'Sports Complex',
    image: '/images/tour/sports.jpg',
    description: 'Modern sports facilities including indoor and outdoor courts.'
  },
  {
    id: 4,
    title: 'Library',
    image: '/images/tour/library.jpg',
    description: 'Our extensive library with digital resources and study areas.'
  }
];

const VirtualTour = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 lg:max-w-7xl">
        <div className="text-center mb-12">
        
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mb-4"></div>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourSpots.map((spot) => (
            <motion.div
              key={spot.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-[#007BFF]"
                  >
                    <Play className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#007BFF] transition-colors">
                  {spot.title}
                </h3>
                <p className="text-gray-600 text-sm">{spot.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-[#007BFF] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            <Camera className="w-5 h-5 mr-2" />
            Start Full Campus Tour
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour; 