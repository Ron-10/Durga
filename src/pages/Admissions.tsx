import React, { useState } from 'react';
import { GraduationCap, FileText, DollarSign, Calendar, Users, ChevronDown, Download, Star, Sparkles, CheckCircle, Clock, Award, Heart, Shield, Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  icon: React.ElementType;
}

const FAQItem = ({ question, answer, icon: Icon }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-200/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        className="w-full flex justify-between items-center text-left py-6 hover:bg-white/30 rounded-2xl px-6 transition-all duration-300"
      >
        <div className="flex items-center">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-gray-800">{question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-blue-600" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-6">
              <p className="text-gray-600 leading-relaxed bg-white/30 p-4 rounded-xl">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    parentName: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[500px] mb-20 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/70 to-blue-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Animated Education Icons */}
        <div className="absolute inset-0">
          {[GraduationCap, FileText, Users, Award, Heart].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-white/20"
              animate={{
                y: [-20, -80, -20],
                x: [0, 40, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
              style={{
                left: `${15 + i * 18}%`,
                top: `${25 + i * 12}%`,
              }}
            >
              <Icon size={45} />
            </motion.div>
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-5xl mx-auto px-4"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <Sparkles className="w-20 h-20 text-yellow-400" />
                <motion.div
                  animate={{ scale: [0, 1.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 w-20 h-20 border-2 border-yellow-400/30 rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            >
              Admissions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            >
              Join our vibrant learning community. Discover all the information you need about our admission process, requirements, and important dates for a seamless enrollment experience.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Admission Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Admission Process</h2>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FileText,
                  title: '1. Online Application',
                  description: 'Complete and submit the comprehensive online application form with all required details and supporting documents.',
                  gradient: 'from-blue-500 to-cyan-500',
                  duration: '15 mins'
                },
                {
                  icon: GraduationCap,
                  title: '2. Entrance Assessment',
                  description: 'Eligible candidates will be scheduled for an entrance test to evaluate their academic readiness and potential.',
                  gradient: 'from-purple-500 to-pink-500',
                  duration: '2 hours'
                },
                {
                  icon: Users,
                  title: '3. Family Interaction',
                  description: 'A personal interaction with the student and their parents to understand their alignment with our school\'s values and culture.',
                  gradient: 'from-green-500 to-emerald-500',
                  duration: '30 mins'
                },
                {
                  icon: Award,
                  title: '4. Offer of Admission',
                  description: 'Successful candidates will receive an official offer of admission with detailed instructions for enrollment.',
                  gradient: 'from-orange-500 to-red-500',
                  duration: '1 week'
                },
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative rounded-3xl shadow-2xl border border-white/30 bg-white/80 hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden"
                >
                  <div className="backdrop-blur-xl bg-white/20 p-8 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-700 h-full">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-2xl`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.gradient} text-white text-sm font-semibold`}>
                      Duration: {step.duration}
                    </div>
                  </div>
                  
                  {index < 3 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-10"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Key Admission Dates */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Key Admission Dates</h2>
          
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            <div className="p-10">
              <div className="space-y-6">
                {[
                  { event: 'Application Period Opens', date: 'November 1, 2023', status: 'Open', description: 'Online application portal goes live with all forms and guidelines', color: 'green' },
                  { event: 'Application Deadline', date: 'January 31, 2024', status: 'Upcoming', description: 'Last date to submit completed applications with all documents', color: 'yellow' },
                  { event: 'Entrance Test Dates', date: 'February 10-12, 2024', status: 'Upcoming', description: 'Three-day assessment period for all eligible candidates', color: 'blue' },
                  { event: 'Results Announcement', date: 'February 28, 2024', status: 'Upcoming', description: 'Admission results published on school website and portal', color: 'purple' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="p-8 bg-white/50 rounded-3xl hover:bg-white/70 transition-all duration-500 border-l-4 border-blue-500"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start lg:items-center mb-4 lg:mb-0">
                        <Calendar className="w-8 h-8 text-blue-600 mr-6 mt-1 lg:mt-0 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-gray-800 text-xl mb-2">{item.event}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-gray-800 font-bold text-lg mb-2">{item.date}</div>
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                          item.status === 'Open' ? 'bg-green-100 text-green-800' : 
                          item.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.status}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Required Documents */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Required Documents</h2>
          
          <div className="backdrop-blur-xl bg-white/20 p-12 rounded-3xl shadow-2xl border border-white/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { doc: 'Birth Certificate', desc: 'Official birth certificate from government authority', icon: '📋' },
                { doc: 'Previous School Transfer Certificate', desc: 'TC from last attended educational institution', icon: '🏫' },
                { doc: 'Last 2 Years Academic Records', desc: 'Report cards and academic transcripts', icon: '📊' },
                { doc: 'Passport Size Photographs', desc: '6 recent passport-size colored photographs', icon: '📸' },
                { doc: 'Parents\' Identity Proof', desc: 'Aadhar card, passport, or driving license', icon: '🆔' },
                { doc: 'Residence Proof', desc: 'Utility bill or rental agreement', icon: '🏠' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-500 text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                    <h3 className="font-bold text-gray-800">{item.doc}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">What Parents Say</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                quote: "The admission process was incredibly smooth and transparent. The staff was helpful and guided us at every step. We are thrilled to be a part of this school community and couldn't be happier with our decision.",
                name: 'Anjali Sharma',
                relation: "Parent of a Grade 5 Student",
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
                rating: 5,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                quote: "A wonderful school with a focus on holistic development. My child is thriving here academically and socially. The teachers are caring, the facilities are top-notch, and the environment is nurturing. Highly recommended!",
                name: 'Vikram Patel',
                relation: "Parent of a Grade 8 Student",
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                rating: 5,
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.name} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative rounded-3xl shadow-2xl border border-white/30 bg-white/80 hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                      >
                        <Star fill="currentColor" className="w-6 h-6" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white shadow-lg"
                    />
                    <div className={`bg-gradient-to-r ${testimonial.gradient} p-4 rounded-2xl text-white flex-1`}>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-white/90">{testimonial.relation}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Download Prospectus */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="backdrop-blur-xl bg-white/20 p-16 rounded-3xl shadow-2xl border border-white/30 inline-block relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="inline-block mb-8"
              >
                <Download className="w-20 h-20 text-blue-600" />
              </motion.div>
              
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Download Our Prospectus</h2>
              <p className="text-gray-700 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
                Get comprehensive information about our curriculum, facilities, school culture, and admission procedures in our detailed prospectus.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-6 px-12 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl text-xl flex items-center mx-auto group"
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download Prospectus
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Enhanced FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          
          <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            <div className="p-10">
              <FAQItem
                question="What is the student-teacher ratio?"
                answer="We maintain a healthy student-teacher ratio of 25:1 to ensure personalized attention for every child. Our small class sizes allow teachers to focus on individual learning needs and provide customized support."
                icon={Users}
              />
              <FAQItem
                question="What are the school timings?"
                answer="School timings are from 8:00 AM to 3:00 PM, Monday to Friday. Saturday classes run from 8:00 AM to 12:00 PM. Optional extracurricular activities and additional support classes are held after regular school hours."
                icon={Clock}
              />
              <FAQItem
                question="Do you provide transportation?"
                answer="Yes, we have a fleet of GPS-enabled school buses covering all major routes in the city. Our buses are equipped with safety features and trained attendants. Please contact our transport department for route details and fees."
                icon={Shield}
              />
              <FAQItem
                question="What extracurricular activities are available?"
                answer="We offer a wide range of activities including sports (football, basketball, swimming), performing arts (music, dance, drama), academic clubs (science, math, debate), and community service programs. Students are encouraged to participate in multiple activities."
                icon={Zap}
              />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Admission Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Admission Inquiry</h2>
          
          <div className="backdrop-blur-xl bg-white/20 p-12 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Student's Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter student's full name"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Grade Applying For *
                    </label>
                    <select 
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                    </select>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Parent's Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter parent's full name"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter contact number"
                      required
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="md:col-span-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter email address"
                      required
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="md:col-span-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Tell us more about your inquiry, any specific questions, or additional information you'd like to share..."
                    ></textarea>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-16 py-6 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl text-xl relative overflow-hidden group"
                  >
                    <span className="relative z-10">Submit Inquiry</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;