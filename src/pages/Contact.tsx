import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, User, Sparkles, Send, MessageCircle, Globe, Shield, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    try {
      await emailjs.send(
        'service_haiglco',
        'template_ke3yga8',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'y7LSSUXkFTIwMPWPS'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${i % 2 === 0 ? '4' : '3'} h-${i % 2 === 0 ? '4' : '3'} bg-gradient-to-r ${i % 3 === 0 ? 'from-blue-400/20 to-purple-400/20' : i % 3 === 1 ? 'from-pink-400/20 to-orange-400/20' : 'from-green-400/20 to-teal-400/20'} rounded-full blur-sm`}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 150 - 75, 0],
              scale: [1, 1 + Math.random() * 0.5, 1],
              rotate: [0, 360 * (i % 2 === 0 ? 1 : -1), 0],
            }}
            transition={{
              duration: 15 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </motion.p>
        </motion.div>

        {/* Form and Contact Info Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24 items-start">
          {/* Column 1: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 group relative p-8 md:p-10 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-white/30"
          >
             <div className="relative z-10 flex-grow flex flex-col">
              <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mr-5 shadow-lg">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <label htmlFor="name" className="block text-base font-semibold text-slate-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-5 py-3 border-2 border-slate-200/80 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-[border-color,box-shadow] duration-200 bg-white/50 backdrop-blur-sm placeholder-slate-400 text-base" placeholder="Enter your full name" required />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <label htmlFor="email" className="block text-base font-semibold text-slate-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-5 py-3 border-2 border-slate-200/80 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-[border-color,box-shadow] duration-200 bg-white/50 backdrop-blur-sm placeholder-slate-400 text-base" placeholder="your.email@example.com" required />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex-grow flex flex-col">
                  <label htmlFor="message" className="block text-base font-semibold text-slate-700 mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-5 py-3 border-2 border-slate-200/80 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-[border-color,box-shadow] duration-200 bg-white/50 backdrop-blur-sm resize-y placeholder-slate-400 text-base flex-grow" placeholder="Please enter your message here." required ></textarea>
                </motion.div>
                <motion.button whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 shadow-lg text-lg flex items-center justify-center group mt-auto">
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                  Send Message
                </motion.button>
              </form>
              {status === 'success' && (
                <div className="text-green-600 text-center font-semibold mt-4">Your message has been sent successfully!</div>
              )}
              {status === 'error' && (
                <div className="text-red-600 text-center font-semibold mt-4">There was an error sending your message. Please try again.</div>
              )}
            </div>
          </motion.div>

          {/* Column 2: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 group relative p-8 md:p-10 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-white/30"
          >
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mr-5 shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Contact Details</h2>
              </div>
              <div className="space-y-4">
                {[
                  { icon: MapPin, title: 'Our Address', content: 'Mechinagar-12, Koshi Province, Nepal', link: 'https://maps.google.com/maps?q=Mechinagar-12,+Koshi+Province,+Nepal', type: 'address' },
                  { icon: Phone, title: 'Phone Number', content: '9844696963', link: 'tel:9844696963', type: 'phone' },
                  { icon: Mail, title: 'Email Address', content: 'info@school.edu', link: 'mailto:info@school.edu', type: 'email' },
                  { icon: Clock, title: 'Office Hours', content: 'Sun - Fri: 8:00 AM - 4:00 PM', link: null, type: 'hours' },
                ].map((item, index) => {
                  const CardContent = (
                    <div className={`p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors duration-200 border-l-4 border-green-500 flex items-center`}>
                      <div className={`p-3 bg-white rounded-lg mr-4 flex-shrink-0 shadow-sm`}>
                        <item.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-700 text-lg">{item.title}</h3>
                        <p className="text-slate-600 font-medium text-base">{item.content}</p>
                      </div>
                    </div>
                  );

                  if (item.link) {
                    return (
                      <motion.a 
                        key={index}
                        href={item.link} 
                        target={item.type === 'address' ? '_blank' : '_self'}
                        rel={item.type === 'address' ? 'noopener noreferrer' : ''}
                        className="block"
                        whileHover={{ scale: 1.03, x: 4 }}
                        transition={{type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        {CardContent}
                      </motion.a>
                    );
                  }
                  return <motion.div key={index}>{CardContent}</motion.div>;
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
        >
            <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Our Leadership</h2>
            <div className="max-w-sm mx-auto group relative p-8 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-white/30">
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 shadow-xl">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                            <User className="w-12 h-12 text-purple-500" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Mr. Bhoj Bahadur Karki</h3>
                    <p className="text-lg text-purple-600 font-semibold">Principal</p>
                </div>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
        >
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Our Location</h2>
            <motion.div
              className="group relative rounded-3xl shadow-2xl border border-white/30 bg-white/80 hover:shadow-xl transition-shadow duration-300 overflow-hidden h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 z-10 pointer-events-none"></div>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.6120044469592!2d88.04936545273489!3d26.6838073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5b0d5db45ebd5%3A0x6139baaf226ae3b9!2sDurga%20Aawashiya%20English%20School!5e0!3m2!1sen!2snp!4v1751130758953!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Google Maps Location"
                  className="rounded-3xl"
              ></iframe>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
