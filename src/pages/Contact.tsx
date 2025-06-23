import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Twitter, Facebook, Instagram, Sparkles, Send, MessageCircle, Globe, Shield, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
            animate={{
              x: [0, 120, 0],
              y: [0, -80, 0],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pt-20"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
          >
            Contact Us
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We're here to help and answer any questions you might have. We look forward to hearing from you and connecting with our school community.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Enhanced Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 p-12 relative overflow-hidden"
          >
            
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mr-6 shadow-lg"
                >
                  <MessageCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</h2>
              </div>
              
              <form className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Please enter your message here. We'd love to hear from you!"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl text-lg flex items-center justify-center group"
                >
                  <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 p-12 relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-10">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mr-6 shadow-lg"
                  >
                    <MapPin className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Contact Information</h2>
                </div>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: MapPin,
                      title: 'Our Address',
                      content: '123 School Street, Education District, Cityville, State 12345',
                      gradient: 'from-blue-500 to-cyan-600',
                      description: 'Located in the heart of the education district'
                    },
                    {
                      icon: Phone,
                      title: 'Phone Number',
                      content: '+1 (555) 123-4567',
                      gradient: 'from-green-500 to-emerald-600',
                      description: 'Available Monday to Friday, 8 AM - 5 PM'
                    },
                    {
                      icon: Mail,
                      title: 'Email Address',
                      content: 'info@school.edu',
                      gradient: 'from-purple-500 to-pink-600',
                      description: 'We respond within 24 hours'
                    },
                    {
                      icon: Clock,
                      title: 'Office Hours',
                      content: 'Monday - Friday: 8:00 AM - 4:00 PM',
                      gradient: 'from-orange-500 to-red-600',
                      description: 'Saturday: 9:00 AM - 1:00 PM'
                    },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="p-6 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-500 border-l-4 border-blue-500"
                    >
                      <div className="flex items-start">
                        <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-xl mr-6 flex-shrink-0`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-800 font-medium mb-1">{item.content}</p>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Map */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden h-80 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 z-10 pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225578399999!2d-122.4194156846813!3d37.77492957975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e2b3ce9%3A0x2e6f21257475ee60!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1618393524623!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-3xl"
              ></iframe>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced Department Contacts */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Department Contacts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                name: 'Admissions Office', 
                description: 'For all admission-related queries, application process, and enrollment information',
                email: 'admissions@school.edu',
                phone: '+1 (555) 123-4567',
                gradient: 'from-blue-500 to-cyan-500',
                icon: Globe,
                hours: '8 AM - 5 PM'
              },
              { 
                name: 'General Office', 
                description: 'For general information, inquiries, and administrative support',
                email: 'info@school.edu',
                phone: '+1 (555) 123-4568',
                gradient: 'from-green-500 to-emerald-500',
                icon: Shield,
                hours: '8 AM - 4 PM'
              },
              { 
                name: 'Accounts Department', 
                description: 'For fee-related questions, payment issues, and financial assistance',
                email: 'accounts@school.edu',
                phone: '+1 (555) 123-4569',
                gradient: 'from-purple-500 to-pink-500',
                icon: Heart,
                hours: '9 AM - 4 PM'
              },
            ].map((dept, index) => (
              <motion.div 
                key={dept.name} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="backdrop-blur-xl bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30 text-center hover:bg-white/30 transition-all duration-700 relative overflow-hidden group"
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${dept.gradient} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-r ${dept.gradient} p-5 shadow-2xl`}
                  >
                    <dept.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{dept.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="p-3 bg-white/50 rounded-xl">
                      <p className={`text-transparent bg-clip-text bg-gradient-to-r ${dept.gradient} font-semibold`}>{dept.email}</p>
                    </div>
                    <div className="p-3 bg-white/50 rounded-xl">
                      <p className="text-gray-700 font-medium">{dept.phone}</p>
                    </div>
                    <div className="p-3 bg-white/50 rounded-xl">
                      <p className="text-gray-600 text-sm">{dept.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Social Media */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Follow Us</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Stay connected with our school community and get the latest updates on events, achievements, and news.
          </p>
          
          <div className="flex justify-center space-x-8">
            {[
              { icon: Twitter, href: '#', color: 'from-blue-400 to-blue-600', name: 'Twitter', followers: '2.5K' },
              { icon: Facebook, href: '#', color: 'from-blue-600 to-blue-800', name: 'Facebook', followers: '5.2K' },
              { icon: Instagram, href: '#', color: 'from-purple-400 to-pink-600', name: 'Instagram', followers: '3.8K' },
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -10 }}
                className={`group relative p-6 rounded-3xl bg-gradient-to-r ${social.color} text-white shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <social.icon size={40} className="mx-auto mb-3" />
                  <div className="font-bold text-lg">{social.name}</div>
                  <div className="text-sm opacity-90">{social.followers} followers</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="backdrop-blur-xl bg-white/20 p-16 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Ready to Join Our Community?</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Take the first step towards an exceptional educational journey. Contact us today to learn more about our programs and admission process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl text-lg"
                >
                  Schedule a Visit
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/50 backdrop-blur-sm text-gray-800 font-bold py-4 px-8 rounded-full hover:bg-white/70 transition-all duration-300 shadow-xl text-lg border border-white/30"
                >
                  Download Brochure
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;