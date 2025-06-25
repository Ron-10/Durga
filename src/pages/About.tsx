import React, { useEffect, useState } from 'react';
import { BookOpen, Target, Award, Users, ChevronRight, Video, ShieldCheck, Sparkles, Heart, Globe, Lightbulb, Zap, Star, Crown, Rocket, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
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

      {/* Hero Section with Advanced Parallax */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[600px] mb-20 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/70 to-blue-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
              }}
            />
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-center max-w-5xl mx-auto px-4"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <Sparkles className="w-20 h-20 text-yellow-400" />
                <motion.div
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 w-20 h-20 border-2 border-yellow-400/50 rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            >
              About Our School
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="relative"
            >
              <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                Shaping minds, building futures, and creating leaders of tomorrow through innovation, excellence, and compassion
              </p>
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ delay: 1.2, duration: 1.5 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto max-w-md rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision with Advanced Glassmorphism */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -10, rotateY: 5 }}
            className="group relative rounded-3xl shadow-2xl border border-white/30 bg-white/80 hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden transform-gpu perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mr-6 shadow-lg"
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide a transformative, high-quality education that empowers students with critical thinking skills, knowledge, and core values. We are dedicated to fostering an environment where students can excel in their chosen paths and make meaningful contributions to a global society.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-6 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -10, rotateY: -5 }}
            className="group relative rounded-3xl shadow-2xl border border-white/30 bg-white/80 hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden transform-gpu perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-teal-600/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mr-6 shadow-lg"
                >
                  <BookOpen className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a leading and forward-thinking educational institution recognized for its innovation in teaching and learning. We aim to nurture creative thinking, promote academic excellence, and develop compassionate, responsible, and resilient global citizens prepared for the challenges of the future.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-green-500 to-teal-600 mt-6 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Timeline with 3D Effects */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Journey Through Time</h2>
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Enhanced Timeline line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-[3px] h-full w-2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            
            {[
              {
                year: '1994',
                title: 'Foundation',
                description: 'Established with 20 students and a vision for excellence in education',
                align: 'right',
                color: 'from-blue-500 to-cyan-500',
                icon: Rocket
              },
              {
                year: '2006',
                title: 'Expansion',
                description: 'Added new facilities and expanded academic programs to serve more students',
                align: 'left',
                color: 'from-purple-500 to-pink-500',
                icon: Globe
              },
              {
                year: '2010',
                title: 'Recognition',
                description: 'Received multiple awards for academic excellence and innovative teaching',
                align: 'right',
                color: 'from-green-500 to-emerald-500',
                icon: Crown
              },
              {
                year: '2015',
                title: 'Innovation',
                description: 'Implemented modern teaching methodologies and cutting-edge technology',
                align: 'left',
                color: 'from-orange-500 to-red-500',
                icon: Lightbulb
              },
              {
                year: '2023',
                title: 'Years of Academic Excellence',
                description: 'Serving over 400+ students with state-of-the-art facilities and world-class education',
                align: 'right',
                color: 'from-indigo-500 to-purple-500',
                icon: Zap
              },
              {
                year: '2025',
                title: 'Today and Beyond',
                description: 'Continually building on our legacy of world-class education and state-of-the-art and expand our reach, integrate cutting-edge learning technologies, and nurture future leaders',
                align: 'left',
                color: 'from-indigo-500 to-purple-500',
                icon: GraduationCap
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: milestone.align === 'left' ? -100 : 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex mb-20 last:mb-0"
              >
                {milestone.align === 'left' && (
                  <motion.div 
                    whileHover={{ scale: 1.05, x: -10 }}
                    className="w-[45%] pr-16 text-right"
                  >
                    <div className="backdrop-blur-lg bg-white/20 p-8 rounded-3xl shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-500">
                      <div className={`text-3xl font-bold mb-4 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>{milestone.year}</div>
                      <h4 className="text-2xl font-semibold mb-4 text-gray-800">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                )}
                
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute left-1/2 top-8 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-white shadow-2xl z-10 flex items-center justify-center`}
                >
                  <milestone.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {milestone.align === 'right' && (
                  <motion.div 
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="w-[45%] ml-auto pl-16"
                  >
                    <div className="backdrop-blur-lg bg-white/20 p-8 rounded-3xl shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-500">
                      <div className={`text-3xl font-bold mb-4 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>{milestone.year}</div>
                      <h4 className="text-2xl font-semibold mb-4 text-gray-800">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Core Values with 3D Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'Striving for the highest standards in everything we do, pushing boundaries and achieving greatness',
                gradient: 'from-yellow-400 to-orange-500',
                bgGradient: 'from-yellow-50 to-orange-50'
              },
              {
                icon: Heart,
                title: 'Community',
                description: 'Fostering a supportive and inclusive learning environment where everyone belongs and thrives',
                gradient: 'from-blue-400 to-cyan-500',
                bgGradient: 'from-blue-50 to-cyan-50'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Embracing new ideas and approaches to education, preparing students for tomorrow\'s challenges',
                gradient: 'from-purple-400 to-pink-500',
                bgGradient: 'from-purple-50 to-pink-50'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5
                }}
                className="group relative rounded-3xl shadow-2xl border border-white/30 bg-white/80 hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden transform-gpu perspective-1000"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm"></div>
                
                <div className="relative p-10 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-r ${value.gradient} p-5 shadow-2xl`}
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed text-lg">
                    {value.description}
                  </p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    className={`h-1 bg-gradient-to-r ${value.gradient} mt-8 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Principal's Message */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Principal's Message</h2>
          <div className="backdrop-blur-xl bg-white/10 p-12 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.6 }}
                className="relative flex-shrink-0"
              >
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-lg -z-10"
                />
              </motion.div>
              
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-2xl text-gray-700 mb-8 italic leading-relaxed font-light"
                >
                  "Welcome to Durga Aawashiya English School, a place where curiosity is ignited and futures are forged. Our institution stands as a beacon of academic excellence and holistic character development. We firmly believe in nurturing not just brilliant minds that can solve complex problems, but also compassionate hearts that will lead our society with empathy and integrity tomorrow."
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-lg text-gray-700 mb-8 leading-relaxed"
                >
                  "Our dedicated and passionate faculty, state-of-the-art facilities, and a comprehensive, forward-looking curriculum are all meticulously designed to provide our students with an unparalleled learning experience. We are committed to focusing on holistic development, seamlessly combining academic rigor with a rich tapestry of extra-curricular activities that foster creativity, collaboration, and leadership."
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white shadow-xl"
                >
                  <div className="text-2xl font-bold mb-2">Dr. Rajesh Kumar</div>
                  <div className="text-blue-100 text-lg">Principal, DAES</div>
                  <motion.div
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="h-1 bg-white/30 mt-4 rounded-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Leadership Team */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: 'Dr. Alisha Verma',
                role: 'Vice Principal',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
                bio: 'A passionate educator with over 15 years of experience in academic administration and curriculum development.',
                gradient: 'from-pink-500 to-rose-500',
                expertise: ['Curriculum Design', 'Academic Leadership', 'Student Development']
              },
              {
                name: 'Mr. Sameer Shah',
                role: 'Head of Academics',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
                bio: 'Dedicated to fostering a culture of academic excellence and innovation among students and faculty.',
                gradient: 'from-blue-500 to-cyan-500',
                expertise: ['Academic Excellence', 'Innovation', 'Faculty Development']
              },
              {
                name: 'Mrs. Priya Singh',
                role: 'Student Affairs Coordinator',
                image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80',
                bio: 'Committed to ensuring a supportive and enriching environment for all students on campus.',
                gradient: 'from-purple-500 to-indigo-500',
                expertise: ['Student Support', 'Campus Life', 'Counseling']
              },
            ].map((leader, index) => (
              <motion.div 
                key={leader.name}
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.03, rotateY: 5 }}
                className="group relative rounded-3xl shadow-2xl border border-white/30 bg-white/80 hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden transform-gpu perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700 from-blue-500 to-purple-600"></div>
                
                <div className="relative p-10 text-center z-10">
                  <div className="relative mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative"
                    >
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-40 h-40 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-white" 
                      />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r ${leader.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <Sparkles className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className={`text-transparent bg-clip-text bg-gradient-to-r ${leader.gradient} font-semibold mb-4 text-lg`}>{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{leader.bio}</p>
                  
                  <div className="space-y-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * skillIndex, duration: 0.5 }}
                        className={`inline-block px-3 py-1 mx-1 rounded-full text-xs font-medium bg-gradient-to-r ${leader.gradient} text-white`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Achievements Carousel */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Achievements</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="pb-16"
          >
            {[
              {
                year: '2025',
                title: 'Best School Award In Mechinagar',
                description: 'Recognized as the best school in the region for academic excellence in the SEE examination and innovative teaching methodologies',
                icon: '🏆',
                gradient: 'from-yellow-400 to-orange-500',
                stats: '100% Success Rate'
              },
              {
                year: '2022',
                title: 'Sports Championship',
                description: 'Won the inter-school sports championship for the third consecutive year with outstanding performance',
                icon: '⚽',
                gradient: 'from-green-400 to-emerald-500',
                stats: '15 Gold Medals'
              },
              {
                year: '2021',
                title: 'Environmental Initiative',
                description: 'Awarded for outstanding contribution to environmental conservation and sustainable practices',
                icon: '🌱',
                gradient: 'from-teal-400 to-cyan-500',
                stats: '50% Carbon Reduction'
              },
              {
                year: '2022',
                title: 'Academic Excellence',
                description: '100% success rate in board examinations with multiple distinctions and top rankings',
                icon: '📚',
                gradient: 'from-blue-400 to-indigo-500',
                stats: '100% Pass Rate'
              },
            ].map((achievement, index) => (
              <SwiperSlide key={index} className="w-96">
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="backdrop-blur-xl bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-700 h-full relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5`}></div>
                  
                  <div className="relative z-10">
                    <div className={`text-8xl mb-8 w-24 h-24 rounded-3xl bg-gradient-to-r ${achievement.gradient} flex items-center justify-center shadow-2xl mx-auto`}>
                      {achievement.icon}
                    </div>
                    
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${achievement.gradient} font-bold text-2xl mb-4 text-center`}>
                      {achievement.year}
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-center mb-6">{achievement.description}</p>
                    
                    <div className={`text-center py-3 px-6 rounded-full bg-gradient-to-r ${achievement.gradient} text-white font-semibold`}>
                      {achievement.stats}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default About;