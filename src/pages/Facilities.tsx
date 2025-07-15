import React, { useState } from 'react';
import { BookOpen, Library, Bus, Utensils, Sparkles, MapPin, Clock, Users, Star, ChevronRight, Eye, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom icons for better visual distinction
const DesktopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);
const FlaskIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31"></path><path d="M14 9.31V2"></path><path d="M14 9.31h-4"></path><path d="M4 14a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V9H4v5Z"></path><path d="M6 22h12"></path>
    </svg>
);
const DumbbellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.4 14.4 9.6 9.6"></path><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.828l4.243-4.242a2 2 0 1 1 2.828 2.828l-1.768 1.768a2 2 0 1 1 2.828 2.829z"></path><path d="m21.5 21.5-1.4-1.4"></path><path d="M5.343 2.515a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.828L8.498 9.657a2 2 0 1 1-2.828-2.828l1.768-1.768a2 2 0 1 1-2.829-2.828z"></path><path d="m2.5 2.5 1.4 1.4"></path>
    </svg>
);
const FirstAidIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8Z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path>
    </svg>
);


interface Facility {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  category: 'Academic' | 'Technology' | 'Sports' | 'Health' | 'Transport' | 'Other';
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
    category: 'Academic',
    capacity: '200+ students',
    hours: '8:00 AM - 6:00 PM',
    features: ['Digital Resources', 'Study Rooms', 'Research Support', 'Reading Programs'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DesktopIcon,
    title: 'State-of-the-Art Computer Labs',
    description: 'Equipped with the latest hardware and software, our computer labs provide students with the necessary tools to excel in a digital world.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Technology',
    capacity: '50 workstations',
    hours: '9:00 AM - 4:00 PM',
    features: ['Latest Software', 'High-Speed Internet', '3D Printing', 'Coding Classes'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: FlaskIcon,
    title: 'Advanced Science Laboratories',
    description: 'We have well-equipped and spacious physics, chemistry, and biology labs that provide students with hands-on learning experiences.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Academic',
    capacity: '30 students per lab',
    hours: '8:30 AM - 3:30 PM',
    features: ['Modern Equipment', 'Safety Protocols', 'Experiments', 'Research Projects'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: DumbbellIcon,
    title: 'Comprehensive Sports Facilities',
    description: 'Our campus features multiple sports courts, a large playground, and indoor facilities to promote physical fitness and sportsmanship.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Sports',
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
    category: 'Transport',
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
    category: 'Health',
    capacity: '300+ students',
    hours: '8:00 AM - 3:00 PM',
    features: ['Healthy Meals', 'Vegetarian Options', 'Hygienic Kitchen', 'Nutritional Guidance'],
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FirstAidIcon,
    title: 'On-Campus Medical Room',
    description: 'A well-equipped medical room with a qualified nurse is available to provide first aid and attend to any medical needs.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1828&q=80',
    category: 'Health',
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
    category: 'Academic',
    capacity: '25-30 students',
    hours: '8:00 AM - 3:00 PM',
    features: ['Smart Boards', 'Audio-Visual Aids', 'Climate Control', 'Ergonomic Furniture'],
    gradient: 'from-teal-500 to-cyan-500'
  },
];

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Academic', 'Technology', 'Sports', 'Health', 'Transport'];

  const filteredFacilities = activeCategory === 'All' 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[500px] mb-20 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-blue-900/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
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
              className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              Our Facilities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Discover our state-of-the-art facilities, designed to provide a safe, comfortable, and stimulating environment for learning and growth.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            World-Class Infrastructure for Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We provide state-of-the-art facilities to ensure our students have the best possible learning environment, supporting both academic and personal growth.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-3 rounded-2xl bg-white/50 backdrop-blur-md shadow-lg border border-slate-200/80 max-w-3xl mx-auto">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`flex-1 md:flex-none px-4 py-3 rounded-xl font-semibold transition-[background-color,color,box-shadow] duration-300 text-sm md:text-base relative ${
                  activeCategory === category
                    ? 'text-white'
                    : 'bg-white/50 text-slate-600 hover:bg-white/80'
                }`}
              >
                 {activeCategory === category && (
                  <motion.div
                    layoutId="activeFacilityTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence>
            {filteredFacilities.map((facility, index) => (
              <motion.div
                layout
                key={facility.title}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ type: 'spring', duration: 0.5, delay: index * 0.05 }}
                className="group relative rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-white/30 hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedFacility(facility)}
              >
                <div className="relative h-56">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${facility.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <facility.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">{facility.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed text-sm mb-4 h-20">{facility.description}</p>
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                     <span className="flex items-center gap-1.5">
                       <Users className="w-4 h-4" />
                       {facility.capacity}
                     </span>
                     <span className="flex items-center gap-1.5">
                       <Clock className="w-4 h-4" />
                       {facility.hours}
                     </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Facility Usage Guidelines
          </h2>
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">General Rules</h4>
                <ul className="space-y-3">
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
                      className="flex items-center text-slate-700 p-3 bg-white/50 rounded-xl hover:bg-white/70 hover:text-slate-900 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      {rule}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Booking & Access</h4>
                <ul className="space-y-3">
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
                      className="flex items-center text-slate-700 p-3 bg-white/50 rounded-xl hover:bg-white/70 hover:text-slate-900 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {rule}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

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
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="relative max-w-4xl max-h-[90vh] bg-slate-50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedFacility.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                    <selectedFacility.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{selectedFacility.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-600 mb-6">
                   <span className="flex items-center gap-2">
                     <Users className="w-5 h-5 text-blue-500" />
                     {selectedFacility.capacity}
                   </span>
                   <span className="flex items-center gap-2">
                     <Clock className="w-5 h-5 text-blue-500" />
                     {selectedFacility.hours}
                   </span>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{selectedFacility.description}</p>
                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-3 text-slate-800">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedFacility.features?.map((feature, index) => (
                      <div key={index} className="flex items-center p-2 bg-slate-100 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFacility(null)}
                    className="w-full mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Close
                  </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Facilities;
