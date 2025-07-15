import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Image, Sparkles, Search, Filter, ChevronRight, Star, Heart, Share2, Eye, Frown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Type definitions
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

// Data for events
const events: Event[] = [
  {
    id: 'daes-session-2082',
    title: 'New Academic Session 2082 Begins',
    date: '2025-04-14', // Corresponds to 1st Baishakh 2082
    time: '9:00 AM',
    location: 'School Campus',
    description: 'A fresh start! We are thrilled to welcome all our students, new and returning, to the academic session of 2082. Let\'s embark on a new journey of learning and growth together.',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Academic',
    attendees: 500,
    featured: true,
  },
  {
    id: 'daes-result-2081',
    title: 'Final Academic Result 2081',
    date: '2025-04-10', // Corresponds to 28th Chaitra 2081
    time: '12:00 PM',
    location: 'Online & School Office',
    description: 'The results for the academic year 2081 are now available. We congratulate our students on their dedication and hard work throughout the year.',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Academic',
    attendees: 500,
    featured: false,
  },
  {
    id: 'daes-eca-2082',
    title: 'ECA Program Launch',
    date: '2025-05-24', // Corresponds to 10th Jestha 2082
    time: '11:00 AM',
    location: 'School Auditorium',
    description: 'Discover a world beyond textbooks! Join us for the launch of this year\'s exciting Extra-Curricular Activities (ECA) program, featuring clubs for sports, arts, and technology.',
    imageUrl: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Activities',
    attendees: 350,
    featured: false,
  },
  {
    id: 'daes-quiz-2082',
    title: 'Inter-House Quiz Competition',
    date: '2025-06-01', // Corresponds to 18th Jestha 2082
    time: '1:00 PM',
    location: 'Assembly Hall',
    description: 'A battle of wits! Cheer for your house teams as they compete for the coveted annual quiz championship trophy. All are welcome!',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Competition',
    attendees: 400,
    featured: false,
  },
  {
    id: 'daes-parents-2082',
    title: 'Parents-Teacher Community Meeting',
    date: '2025-06-04', // Corresponds to 21st Jestha 2082
    time: '10:00 AM',
    location: 'School Auditorium',
    description: 'A collaborative meeting for parents and guardians to discuss student progress, curriculum updates, and upcoming school initiatives. Your feedback is valuable.',
    imageUrl: 'https://images.unsplash.com/photo-1591115765322-c432a52648d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Community',
    attendees: 250,
    featured: false,
  },
  {
    id: 'daes-unittest-2082',
    title: 'Unit Test Starts',
    date: '2025-06-15', // Corresponds to 1st Ashad 2082
    time: 'During School Hours',
    location: 'Respective Classrooms',
    description: 'The first unit tests of the session will commence. We wish all our students the very best.',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80',
    category: 'Academic',
    attendees: 500,
    featured: false,
  },
  {
    id: 'daes-terminal-routine-2082',
    title: 'First Terminal Exam Routine Published',
    date: '2025-06-25', // Corresponds to 11th Ashad 2082
    time: 'All Day',
    location: 'Notice Board & Online',
    description: 'The schedule for the first terminal examinations has been published. Students are advised to check the notice board and school website for details.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    category: 'Academic',
    attendees: 500,
    featured: false,
  },
  {
    id: 'daes-terminal-exam-2082',
    title: 'First Terminal Examinations Begin',
    date: '2025-06-30', // Corresponds to 16th Ashad 2082
    time: '9:30 AM',
    location: 'Examination Halls',
    description: 'The First Terminal Examinations for the academic session 2082 will commence. We wish all our students the very best.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Academic',
    attendees: 500,
    featured: false,
  },
];

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const categories = ['All', 'Academic', 'Activities', 'Competition', 'Community'];
  
  const adToBsMap = {
    '2025-04-10': '२८ चैत २०८१',
    '2025-04-14': '१ बैशाख २०८२',
    '2025-05-24': '११ जेठ २०८२',
    '2025-06-01': '१९ जेठ २०८२',
    '2025-06-04': '२२ जेठ २०८२',
    '2025-06-15': '१ असार २०८२',
    '2025-06-25': '११ असार २०८२',
    '2025-06-30': '१६ असार २०८२',
  };

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEvent = events.find(event => event.featured === true);
  const showFeatured = selectedCategory === 'All' && searchTerm === '';

  let eventsTitle = 'All Events';
  if (searchTerm) {
    eventsTitle = 'Search Results';
  } else if (selectedCategory !== 'All') {
    eventsTitle = `${selectedCategory} Events`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <motion.div 
        className="relative h-[500px] mb-20 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2070&q=80")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-blue-900/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center p-4">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              School Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Stay updated with our vibrant school life. Explore upcoming and past events that enrich our community and student experience.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-12">
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 p-6 md:p-8">
            <div className="relative max-w-md mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-[border-color,box-shadow] duration-300"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-xl font-semibold transition-[background-color,color,box-shadow] duration-300 text-sm md:text-base ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/70 border border-white/30'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {showFeatured && featuredEvent && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Featured Event
              </h2>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden cursor-pointer"
                onClick={() => setSelectedEvent(featuredEvent)}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredEvent.imageUrl}
                      alt={featuredEvent.title}
                      className="h-64 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">{featuredEvent.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4 gap-2">
                        <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{new Date(featuredEvent.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                          <div className="text-xs text-gray-500">({adToBsMap[featuredEvent.date as keyof typeof adToBsMap] || ''})</div>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredEvent.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {eventsTitle}
          </h2>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <motion.div
                      layout
                      key={event.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', duration: 0.4 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="flex flex-col backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden hover:bg-white/30 transition-colors duration-300 cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                  >
                      <img src={event.imageUrl} alt={event.title} className="h-48 w-full object-cover"/>
                      <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold mb-3 text-gray-800">{event.title}</h3>
                          <div className="flex items-center text-sm text-gray-600 mb-4 gap-2">
                              <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                              <div>
                                  <div className="font-medium">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</div>
                                  <div className="text-xs text-gray-500">({adToBsMap[event.date as keyof typeof adToBsMap] || ''})</div>
                              </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-sm flex-grow">{event.description.substring(0, 90)}...</p>
                      </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="lg:col-span-3 text-center py-16"
                >
                  <Frown className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-700">No Events Found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

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
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                className="bg-slate-50 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 right-0 p-2 z-10">
                    <button 
                      onClick={() => setSelectedEvent(null)} 
                      className="absolute top-4 right-4 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
                <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-72 object-cover" />
                <div className="p-8">
                  <h2 className="text-4xl font-bold mb-4 text-gray-900">{selectedEvent.title}</h2>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-600"/>
                        <span>{new Date(selectedEvent.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} ({adToBsMap[selectedEvent.date as keyof typeof adToBsMap] || ''})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600"/>
                        <span>{selectedEvent.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600"/>
                        <span>{selectedEvent.location}</span>
                      </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{selectedEvent.description}</p>
                  
                  <div className="flex justify-between items-center border-t pt-4 mt-6 border-gray-200">
                      <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-gray-600">
                              <Users className="w-5 h-5"/>
                              <span>{selectedEvent.attendees}+ Attendees</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                              <Heart className="w-5 h-5 text-red-500"/>
                              <span>{Math.floor(Math.random() * 500)} Likes</span>
                          </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                          <Share2 className="w-4 h-4"/>
                          Share
                      </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsPage;
