import React, { useState } from 'react';
import { GraduationCap, FileText, DollarSign, Calendar, Users, ChevronDown, Download, Star, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6 hover:bg-gray-50 rounded-lg px-4 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 text-blue-600 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-6 px-4"
        >
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const Admissions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] mb-20 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-blue-900/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
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
              className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              Admissions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Join our vibrant learning community. Find all the information you need about our admission process, requirements, and important dates.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admission Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Admission Process</h2>
          <div className="relative">
            {/* Progress line: always visible, adapts to layout */}
            {/* Progress line removed */}
            <div className="relative flex flex-col md:flex-row justify-between items-stretch md:items-start z-10">
            {[
              {
                icon: FileText,
                title: '1. Online Application',
                description: 'Complete and submit the online application form with all required details and documents.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: GraduationCap,
                title: '2. Entrance Assessment',
                description: 'Eligible candidates will be scheduled for an entrance test to evaluate their academic readiness.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Users,
                title: '3. Family Interaction',
                description: `A personal interaction with the student and their parents to understand their alignment with our school's values.`,
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: FileText,
                title: '4. Offer of Admission',
                description: 'Successful candidates will receive an official offer of admission and further instructions.',
                gradient: 'from-orange-500 to-red-500'
              },
            ].map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full md:w-1/4 px-4 mb-16 md:mb-0 text-center flex flex-col items-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative mb-6 z-10"
                  >
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-2xl`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 z-10">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed z-10">{step.description}</p>
                </motion.div>
            ))}
            </div>
          </div>
        </motion.div>

        {/* Key Admission Dates */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Key Admission Dates</h2>
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            <div className="p-8">
              <ul className="space-y-4">
                {[
                  { event: 'Application Period Opens', date: 'November 1, 2023', status: 'Open' },
                  { event: 'Application Deadline', date: 'January 31, 2024', status: 'Upcoming' },
                  { event: 'Entrance Test Dates', date: 'February 10-12, 2024', status: 'Upcoming' },
                  { event: 'Results Announcement', date: 'February 28, 2024', status: 'Upcoming' },
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex justify-between items-center p-6 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <Calendar className="w-6 h-6 text-blue-600 mr-4" />
                      <span className="font-semibold text-gray-800 text-lg">{item.event}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-600 font-medium">{item.date}</span>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ml-2 ${
                        item.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Required Documents */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Required Documents</h2>
          <div className="backdrop-blur-lg bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Birth Certificate',
                'Previous School Transfer Certificate',
                'Last 2 Years Academic Records',
                'Passport Size Photographs',
                'Parents\' Identity Proof',
                'Residence Proof',
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{doc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The admission process was incredibly smooth and transparent. The staff was helpful and guided us at every step. We are thrilled to be a part of this school community.",
                name: 'Anjali Sharma',
                relation: "Parent of a Grade 5 Student"
              },
              {
                quote: "A wonderful school with a focus on holistic development. My child is thriving here. The teachers are caring and the facilities are top-notch. Highly recommended!",
                name: 'Vikram Patel',
                relation: "Parent of a Grade 8 Student"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.name} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="backdrop-blur-lg bg-white/20 p-8 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
                </div>
                <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl text-white">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-blue-100">{testimonial.relation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Prospectus */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="backdrop-blur-lg bg-white/20 p-12 rounded-3xl shadow-2xl border border-white/30 inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Download className="w-16 h-16 text-blue-600" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Download Our Prospectus</h2>
            <p className="text-gray-700 mb-8 text-lg max-w-md mx-auto">
              Get detailed information about our curriculum, facilities, and school culture.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-xl text-lg flex items-center mx-auto"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </motion.button>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            <div className="p-8">
              <FAQItem
                question="What is the student-teacher ratio?"
                answer="We maintain a healthy student-teacher ratio of 25:1 to ensure personalized attention for every child."
              />
              <FAQItem
                question="What are the school timings?"
                answer="School timings are from 8:00 AM to 3:00 PM, Monday to Friday. Optional extracurricular activities are held after school hours."
              />
              <FAQItem
                question="Do you provide transportation?"
                answer="Yes, we have a fleet of school buses covering all major routes in the city. Please contact the transport department for more details."
              />
          </div>
        </div>
        </motion.div>

        {/* Admission Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Admission Inquiry</h2>
          <div className="backdrop-blur-lg bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Student's Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter student's full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Grade Applying For
                  </label>
                  <select className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                    <option>Select Grade</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Parent's Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter parent's full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter contact number"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl text-lg"
                >
                  Submit Inquiry
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;