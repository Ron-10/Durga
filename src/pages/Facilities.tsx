import React, { useState } from 'react';
import { BookOpen, LampDesk as Desktop, Dumbbell, FlaskRound as Flask, Library, Bus, Utensils, ChevronFirst as FirstAid, Sparkles, MapPin, Clock, Users, Star, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Facility {
  icon: any;
  title: string;
  description: string;
  image: string;
  capacity?: string;
  hours?: string;
  features?: string[];
  gradient: string;
}

const facilities: Facility[] = [
  {
    icon: Library,
    title: 'Modern Library & Resource Center',
    description: 'Our extensive library offers a vast collection of books, academic journals, and digital resources to support research and reading for all age groups.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    capacity: '200+ students',
    hours: '8:00 AM - 6:00 PM',
    features: ['Digital Resources', 'Study Rooms', 'Research Support', 'Reading Programs'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Desktop,
    title: 'State-of-the-Art Computer Labs',
    description: 'Equipped with the latest hardware and software, our computer labs provide students with the necessary tools to excel in a digital world.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    capacity: '50 workstations',
    hours: '9:00 AM - 4:00 PM',
    features: ['Latest Software', 'High-Speed Internet', '3D Printing', 'Coding Classes'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Flask,
    title: 'Advanced Science Laboratories',
    description: 'We have well-equipped and spacious physics, chemistry, and biology labs that provide students with hands-on learning experiences.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    capacity: '30 students per lab',
    hours: '8:30 AM - 3:30 PM',
    features: ['Modern Equipment', 'Safety Protocols', 'Experiments', 'Research Projects'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Dumbbell,
    title: 'Comprehensive Sports Facilities',
    description: 'Our campus features multiple sports courts, a large playground, and indoor facilities to promote physical fitness and sportsmanship.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    capacity: 'Multiple courts',
    hours: '7:00 AM - 7:00 PM',
    features: ['Basketball Court', 'Football Field', 'Indoor Gym', 'Swimming Pool'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Bus,
    title: 'Safe & Secure Transportation',
    description: 'We offer a reliable and comfortable transportation service with a fleet of buses covering all major routes in the city.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    capacity: '15 buses',
    hours: '6:30 AM - 5:30 PM',
    features: ['GPS Tracking', 'Safety Cameras', 'Experienced Drivers', 'Multiple Routes'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Utensils,
    title: 'Hygienic School Cafeteria',
    description: 'Our on-campus cafeteria serves a variety of fresh, nutritious, and hygienically prepared meals and refreshments.',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    capacity: '300+ students',
    hours: '8:00 AM - 3:00 PM',
    features: ['Healthy Meals', 'Vegetarian Options', 'Hygienic Kitchen', 'Nutritional Guidance'],
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FirstAid,
    title: 'On-Campus Medical Room',
    description: 'A well-equipped medical room with a qualified nurse is available to provide first aid and attend to any medical needs.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1828&q=80',
    capacity: 'Emergency care',
    hours: '8:00 AM - 4:00 PM',
    features: ['First Aid', 'Health Checkups', 'Emergency Response', 'Medical Records'],
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: BookOpen,
    title: 'Interactive Smart Classrooms',
    description: 'Our classrooms are equipped with interactive whiteboards and audio-visual aids to make learning more engaging and effective.',
    image: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    capacity: '25-30 students',
    hours: '8:00 AM - 3:00 PM',
    features: ['Smart Boards', 'Audio-Visual Aids', 'Climate Control', 'Ergonomic Furniture'],
    gradient: 'from-teal-500 to-cyan-500'
  },
];

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Academic', 'Sports', 'Technology', 'Health', 'Transport'];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section with Parallax */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[500px] mb-20 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-blue-900/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-yellow-400" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              Our Facilities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Discover our state-of-the-art facilities, designed to provide a safe, comfortable, and stimulating environment for learning and growth.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div 
          {...fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            World-Class Facilities for Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide state-of-the-art facilities to ensure our students have the best possible
            learning environment. Our infrastructure is designed to support both academic excellence
            and personal growth.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                    : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/70 border border-white/30'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden hover:bg-white/30 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedFacility(facility)}
              >
                <div className="relative h-64">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${facility.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <facility.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {facility.capacity}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {facility.hours}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{facility.description}</p>
                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </motion.button>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Facility Guidelines */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
          >
            Facility Usage Guidelines
          </motion.h2>
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-bold text-xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">General Rules</h4>
                <ul className="space-y-4">
                  {[
                    'Facilities are available during school hours',
                    'Proper care of equipment is mandatory',
                    'Follow safety guidelines at all times',
                    'Report any damages immediately',
                  ].map((rule, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center text-gray-700 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
                      {rule}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-bold text-xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Booking & Access</h4>
                <ul className="space-y-4">
                  {[
                    'Book sports facilities in advance',
                    'Library cards are mandatory for borrowing',
                    'Computer lab usage requires scheduling',
                    'Cafeteria operates during designated hours',
                  ].map((rule, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center text-gray-700 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-4"></div>
                      {rule}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Facility Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFacility(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedFacility.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-xl`}>
                    <selectedFacility.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{selectedFacility.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        {selectedFacility.capacity}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        {selectedFacility.hours}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{selectedFacility.description}</p>
                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-4 text-gray-800">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedFacility.features?.map((feature, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl">
                        <Star className="w-4 h-4 text-yellow-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Book Facility
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View Location
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Facilities;