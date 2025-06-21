import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Image, Sparkles, Search, Filter, ChevronRight, Star, Heart, Share2, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
  attendees: number;
  featured: boolean;
  gallery?: string[];
}

const events: Event[] = [
  {
    id: '1',
    title: 'Annual Sports Day',
    date: '2024-04-15',
    time: '9:00 AM',
    location: 'School Ground',
    description: 'Join us for our annual sports day featuring various athletic competitions and team events.',
    imageUrl: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Sports',
    attendees: 450,
    featured: true
  },
  {
    id: '2',
    title: 'Science Exhibition',
    date: '2024-04-20',
    time: '10:00 AM',
    location: 'School Auditorium',
    description: 'Students showcase their innovative science projects and experiments.',
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    category: 'Academic',
    attendees: 320,
    featured: false
  },
  {
    id: '3',
    title: 'Cultural Program',
    date: '2024-05-01',
    time: '2:00 PM',
    location: 'School Hall',
    description: 'A celebration of diverse cultural performances by our talented students.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Cultural',
    attendees: 280,
    featured: false,
    gallery: [
      'https://images.unsplash.com/photo-1577896851231-70ef18881754',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d'
    ]
  },
  {
    id: '4',
    title: 'Art & Craft Exhibition',
    date: '2024-05-10',
    time: '11:00 AM',
    location: 'Art Gallery',
    description: 'Showcasing creative artworks and crafts created by our talented students.',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    category: 'Art',
    attendees: 180,
    featured: false
  },
  {
    id: '5',
    title: 'Mathematics Olympiad',
    date: '2024-05-15',
    time: '9:30 AM',
    location: 'Computer Lab',
    description: 'Annual mathematics competition to test problem-solving skills.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Academic',
    attendees: 120,
    featured: false
  }
];

const annualEvents = [
  { month: 'August', event: 'Independence Day Celebration', gradient: 'from-orange-500 to-red-500' },
  { month: 'September', event: 'Teachers Day Program', gradient: 'from-blue-500 to-purple-500' },
  { month: 'November', event: 'Annual Science Fair', gradient: 'from-green-500 to-emerald-500' },
  { month: 'December', event: 'Christmas Carnival', gradient: 'from-red-500 to-pink-500' },
  { month: 'January', event: 'Republic Day Parade', gradient: 'from-indigo-500 to-purple-500' },
  { month: 'February', event: 'Annual Sports Meet', gradient: 'from-yellow-500 to-orange-500' },
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const categories = ['All', 'Sports', 'Academic', 'Cultural', 'Art'];
  
  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              School Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Stay updated with our vibrant school life. Explore upcoming and past events that enrich our community and student experience.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        <motion.div 
          {...fadeInUp}
          className="mb-12"
        >
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 p-8">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                      : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/70 border border-white/30'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Event */}
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
            Featured Event
          </motion.h2>
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative">
              <img
                src={events[0].imageUrl}
                alt={events[0].title}
                className="h-64 w-full object-cover md:h-full"
              />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm self-start mb-4">
                {events[0].category}
              </span>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{events[0].title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{events[0].description}</p>
              <div className="flex items-center text-gray-600 mb-6">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                <span>{new Date(events[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    <span>{events[0].attendees} attendees</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-purple-600" />
                    <span>{events[0].time}</span>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl self-start"
                >
                <Users className="w-5 h-5 mr-2" />
                Register Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Annual Events Calendar */}
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
            Annual Events Calendar
          </motion.h2>
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 p-8">
          <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            {annualEvents.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="backdrop-blur-lg bg-white/30 p-6 rounded-2xl shadow-xl border border-white/30 hover:bg-white/40 transition-all duration-300"
                    >
                      <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.month}</div>
                      <p className="text-gray-700 font-medium">{item.event}</p>
                    </motion.div>
                </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-full border-4 border-white shadow-lg z-10`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Events List */}
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
            All Events
          </motion.h2>
        <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${searchTerm}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {filteredEvents.map((event, index) => (
                  <motion.div
              key={event.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden hover:bg-white/30 transition-all duration-500"
            >
              <div className="md:flex">
                      <div className="md:w-1/3 relative">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-48 w-full object-cover md:h-full"
                  />
                        {event.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                </div>
                      <div className="p-8 md:w-2/3">
                  <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">{event.title}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      {event.location}
                    </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 text-orange-600" />
                            {event.attendees} attendees
                          </div>
                  </div>
                        <div className="flex items-center justify-between">
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                          >
                      <Users className="w-4 h-4 mr-2" />
                      Register Now
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedEvent(event)}
                            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                          >
                            Learn More
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </motion.button>
                          </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold">
                    {selectedEvent.category}
                  </span>
                  {selectedEvent.featured && (
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedEvent.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedEvent.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{new Date(selectedEvent.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-purple-600" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-green-600" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-orange-600" />
                    <span>{selectedEvent.attendees} attendees</span>
              </div>
            </div>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Register Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Event
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

export default Events;