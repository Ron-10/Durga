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
          {/* Mission Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, y: -8 }}
            className="group relative rounded-3xl shadow-2xl border-2 border-blue-400 bg-white/90 hover:shadow-blue-300 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
            <div className="relative z-10 p-10 flex flex-col items-center">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 shadow-lg">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h2 className="text-3xl font-extrabold text-blue-700 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To provide a transformative, high-quality education that empowers students with critical thinking skills, knowledge, and core values. We are dedicated to fostering an environment where students can excel in their chosen paths and make meaningful contributions to a global society.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, y: -8 }}
            className="group relative rounded-3xl shadow-2xl border-2 border-green-400 bg-white/90 hover:shadow-green-300 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-400/20 rounded-full blur-2xl"></div>
            <div className="relative z-10 p-10 flex flex-col items-center">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 shadow-lg">
                  <BookOpen className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-extrabold text-green-700 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To be a leading and forward-thinking educational institution recognized for its innovation in teaching and learning. We aim to nurture creative thinking, promote academic excellence, and develop compassionate, responsible, and resilient global citizens prepared for the challenges of the future.
              </p>
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
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent md:leading-snug">Our Journey Through Time</h2>
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
                  <div className="text-2xl font-bold mb-2">Mr. Bhoj Bahadur Karki</div>
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
                  year: '2024',
                  title: 'Best School Award In Mechinagar',
                  description: 'Recognized as the top school in the region for outstanding academic excellence in the SEE examination and innovative teaching methodologies.',
                  icon: '🏆',
                  gradient: 'from-amber-400 to-yellow-500',
                  stats: 'District Topper'
                },
                {
                  year: '2025',
                  title: 'S.E.E. Toppers Felicitation',
                  description: 'Celebrated multiple students for achieving a perfect 3.91 GPA in the S.E.E. examinations, setting a new school record.',
                  icon: '🎓',
                  gradient: 'from-blue-500 to-indigo-600',
                  stats: '3.91 GPA Achievers'
                },
                {
                  year: '2023',
                  title: 'Municipal Karate Championship',
                  description: 'Our students secured top positions in the National Level Karate Tournament, showcasing exceptional discipline and skill.',
                  icon: '🥋',
                  gradient: 'from-red-500 to-gray-800',
                  stats: '5 Gold Medals'
                },
                {
                  year: '2015',
                  title: 'Inter-School Dance Trophy',
                  description: 'Crowned champions at the annual inter-school folk and modern dance competition for the second consecutive year.',
                  icon: '💃',
                  gradient: 'from-pink-500 to-rose-500',
                  stats: 'Best Choreography'
                },
                {
                  year: '2018',
                  title: 'Inter-School Dance Trophy',
                  description: 'Crowned champions at the annual inter-school folk and modern dance competition for the second consecutive year.',
                  icon: '💃',
                  gradient: 'from-pink-500 to-rose-500',
                  stats: 'Best Choreography'
                },
                {
                  year: '2021',
                  title: 'Inter-School Dance Trophy',
                  description: 'Crowned champions at the annual inter-school folk and modern dance competition for the second consecutive year.',
                  icon: '💃',
                  gradient: 'from-pink-500 to-rose-500',
                  stats: 'Best Choreography'
                },
                {
                  year: '2022',
                  title: 'Regional Sports Championship',
                  description: 'Won the regional inter-school sports championship with outstanding performance in football, cricket, and athletics.',
                  icon: '⚽',
                  gradient: 'from-lime-400 to-green-600',
                  stats: 'Overall Champions'
                },
                {
                  year: '2018',
                  title: 'Pabson Music Competitioin Winner',
                  description: 'Our student was awarded the \'Voice of the Region\' in the prestigious inter-school singing competition.',
                  icon: '🎤',
                  gradient: 'from-purple-500 to-indigo-500',
                  stats: 'Solo Singing Champion'
                },
                {
                  year: '2021',
                  title: 'Environmental Initiative Award',
                  description: 'Awarded for our "Green School" project, contributing to environmental conservation and sustainable practices.',
                  icon: '🌱',
                  gradient: 'from-teal-400 to-cyan-500',
                  stats: '50% Carbon Reduction'
                },
                {
                  year: '2025',
                  title: 'Decade of SEE Dominance',
                  description: 'Recognized for maintaining a 100% S.E.E. pass rate with a majority in A+ and A grades for over 10 consecutive years.',
                  icon: '🔟',
                  gradient: 'from-blue-600 to-cyan-400',
                  stats: '10+ Years of 100%'
                }
                            
            ].map((achievement, index) => (
              <SwiperSlide key={index} className="w-96">
                <motion.div
                  whileHover={{ scale: 1.05, y: -10, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
                  className="relative flex flex-col items-center justify-between p-10 rounded-3xl shadow-2xl border-2 bg-white/80 border-blue-200/30 backdrop-blur-lg transition-all duration-500 h-full overflow-hidden"
                  style={{ minHeight: 400 }}
                >
                  {/* Icon and Year Badge */}
                  <div className="flex flex-col items-center mb-6">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-2 shadow-lg bg-gradient-to-br ${achievement.gradient}`}>
                      {achievement.icon}
                    </div>
                    <div className={`text-lg font-bold px-4 py-1 rounded-full bg-gradient-to-r ${achievement.gradient} text-white shadow`}>
                      {achievement.year}
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{achievement.title}</h3>
                  {/* Description */}
                  <p className="text-gray-700 text-center mb-6">{achievement.description}</p>
                  {/* Stats */}
                  <div className={`text-lg font-semibold px-6 py-2 rounded-full bg-gradient-to-r ${achievement.gradient} text-white shadow`}>
                    {achievement.stats}
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