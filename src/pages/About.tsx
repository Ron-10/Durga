import React, { useEffect, useState } from 'react';
import { BookOpen, Target, Award, Users, ChevronRight, Video, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
            backgroundImage: 'url("https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
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
              About Our School
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Shaping minds, building futures, and creating leaders of tomorrow
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision with Glassmorphism */}
        <motion.div 
          {...fadeInUp}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To provide a transformative, high-quality education that empowers students with critical thinking skills, knowledge, and core values. We are dedicated to fostering an environment where students can excel in their chosen paths and make meaningful contributions to a global society.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a leading and forward-thinking educational institution recognized for its innovation in teaching and learning. We aim to nurture creative thinking, promote academic excellence, and develop compassionate, responsible, and resilient global citizens prepared for the challenges of the future.
            </p>
          </motion.div>
        </motion.div>

        {/* History Section with Modern Timeline */}
        <motion.div 
          {...fadeInUp}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Journey</h2>
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-[2px] h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            
            {[
              {
                year: '1998',
                title: 'Foundation',
                description: 'Established with 50 students and a vision for excellence',
                align: 'right',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                year: '2005',
                title: 'Expansion',
                description: 'Added new facilities and expanded academic programs',
                align: 'left',
                color: 'from-purple-500 to-pink-500'
              },
              {
                year: '2010',
                title: 'Recognition',
                description: 'Received multiple awards for academic excellence',
                align: 'right',
                color: 'from-green-500 to-emerald-500'
              },
              {
                year: '2015',
                title: 'Innovation',
                description: 'Implemented modern teaching methodologies and technology',
                align: 'left',
                color: 'from-orange-500 to-red-500'
              },
              {
                year: '2023',
                title: 'Today',
                description: 'Serving over 1,200 students with state-of-the-art facilities',
                align: 'right',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: milestone.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex mb-16 last:mb-0"
              >
                {milestone.align === 'left' && (
                  <div className="w-[45%] pr-12 text-right">
                    <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>{milestone.year}</div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                )}
                
                <div className={`absolute left-1/2 top-2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                {milestone.align === 'right' && (
                  <div className="w-[45%] ml-auto pl-12">
                    <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>{milestone.year}</div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values with Modern Cards */}
        <motion.div 
          {...fadeInUp}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'Striving for the highest standards in everything we do',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Fostering a supportive and inclusive learning environment',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Embracing new ideas and approaches to education',
                gradient: 'from-purple-400 to-pink-500'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white hover:shadow-3xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-blue-500 to-purple-600"></div>
                <div className="relative p-8">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.gradient} p-4 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Principal's Message with Modern Design */}
        <motion.div 
          {...fadeInUp}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Principal's Message</h2>
          <div className="backdrop-blur-lg bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              <div className="flex-1">
                <div className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "Welcome to Durga Aawashiya English School, a place where curiosity is ignited and futures are forged. Our institution stands as a beacon
                  of academic excellence and holistic character development. We firmly believe in nurturing not
                  just brilliant minds that can solve complex problems, but also compassionate hearts that will lead our society
                  with empathy and integrity tomorrow."
                </div>
                <div className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "Our dedicated and passionate faculty, state-of-the-art facilities, and a comprehensive, forward-looking
                  curriculum are all meticulously designed to provide our students with an unparalleled learning
                  experience. We are committed to focusing on holistic development, seamlessly combining academic rigor with a rich tapestry of
                  extra-curricular activities that foster creativity, collaboration, and leadership."
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
                  <div className="text-xl font-bold">Dr. Rajesh Kumar</div>
                  <div className="text-blue-100">Principal, DAES</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leadership Team with Modern Cards */}
        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Alisha Verma',
                role: 'Vice Principal',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
                bio: 'A passionate educator with over 15 years of experience in academic administration and curriculum development.',
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                name: 'Mr. Sameer Shah',
                role: 'Head of Academics',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
                bio: 'Dedicated to fostering a culture of academic excellence and innovation among students and faculty.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Mrs. Priya Singh',
                role: 'Student Affairs Coordinator',
                image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80',
                bio: 'Committed to ensuring a supportive and enriching environment for all students on campus.',
                gradient: 'from-purple-500 to-indigo-500'
              },
            ].map((leader, index) => (
              <motion.div 
                key={leader.name}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-blue-500 to-purple-600"></div>
                <div className="relative p-8 text-center">
                  <div className="relative mb-6">
                    <img src={leader.image} alt={leader.name} className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl ring-4 ring-white" />
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${leader.gradient} flex items-center justify-center`}>
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className={`text-transparent bg-clip-text bg-gradient-to-r ${leader.gradient} font-semibold mb-4`}>{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Virtual Tour CTA with Modern Design */}
        <motion.div {...fadeInUp} className="mb-20">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative p-16 text-center text-white">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Video className="w-20 h-20 text-white" />
              </motion.div>
              <h2 className="text-4xl font-bold mb-6">Explore Our Campus from Anywhere</h2>
              <p className="max-w-2xl mx-auto mb-10 text-xl text-blue-100">
                Take a virtual tour to experience our state-of-the-art facilities, vibrant classrooms, and beautiful campus grounds.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-xl text-lg"
              >
                Start Virtual Tour
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Accreditation & Affiliations with Modern Design */}
        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Accreditation & Affiliations</h2>
          <div className="backdrop-blur-lg bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30">
            <div className="flex justify-center items-center flex-wrap gap-12">
              {[
                { name: 'National Board of Education', icon: ShieldCheck },
                { name: 'International School Association', icon: ShieldCheck },
                { name: 'Regional Accreditation Body', icon: ShieldCheck },
              ].map((item) => (
                <motion.div 
                  key={item.name} 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-gray-700 bg-white/50 p-6 rounded-2xl shadow-lg"
                >
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mr-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-semibold text-lg">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements with Modern Swiper */}
        <motion.div 
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Achievements</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {[
              {
                year: '2023',
                title: 'Best School Award',
                description: 'Recognized as the best school in the region for academic excellence',
                icon: '🏆',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                year: '2022',
                title: 'Sports Championship',
                description: 'Won the inter-school sports championship for the third consecutive year',
                icon: '⚽',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                year: '2021',
                title: 'Environmental Initiative',
                description: 'Awarded for outstanding contribution to environmental conservation',
                icon: '🌱',
                gradient: 'from-teal-400 to-cyan-500'
              },
              {
                year: '2020',
                title: 'Academic Excellence',
                description: '100% success rate in board examinations with multiple distinctions',
                icon: '📚',
                gradient: 'from-blue-400 to-indigo-500'
              },
            ].map((achievement, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500 h-full"
                >
                  <div className={`text-6xl mb-6 w-20 h-20 rounded-2xl bg-gradient-to-r ${achievement.gradient} flex items-center justify-center shadow-lg`}>
                    {achievement.icon}
                  </div>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${achievement.gradient} font-bold text-xl mb-3`}>{achievement.year}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
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