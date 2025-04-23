import React from 'react';
import { motion } from 'framer-motion';

const OnboardingSection: React.FC = () => {
  const features = [
    {
      title: "Stunning Collections",
      description: "Explore our curated collections of breathtaking images from around the world.",
      image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    },
    {
      title: "Easy Navigation",
      description: "Find exactly what you're looking for with our intuitive search and filter system.",
      image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    },
    {
      title: "High Quality",
      description: "Every image in our gallery is carefully selected for its quality and impact.",
      image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover the Perfect Image
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our gallery offers a unique collection of high-quality images for every occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-white/90"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
            Start Exploring
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingSection; 