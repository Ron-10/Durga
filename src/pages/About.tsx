import React, { useEffect, useState } from 'react';
import { BookOpen, Target, Award, Users, ChevronRight } from 'lucide-react';
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
    <div className="py-16 bg-gray-50">
      {/* Hero Section with Parallax */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] mb-16 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold text-white text-center"
          >
            About Our School
          </motion.h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision with Hover Effects */}
        <motion.div 
          {...fadeInUp}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-[#007BFF] mr-3" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To provide quality education that empowers students with knowledge, skills, and values
              necessary to excel in their chosen paths and contribute meaningfully to society.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-[#007BFF] mr-3" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To be a leading educational institution that nurtures creative thinking, promotes
              academic excellence, and develops responsible global citizens.
            </p>
          </motion.div>
        </motion.div>

        {/* History Section with Timeline */}
        <motion.div 
          {...fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {[
              {
                year: '1998',
                title: 'Foundation',
                description: 'Established with 50 students and a vision for excellence'
              },
              {
                year: '2005',
                title: 'Expansion',
                description: 'Added new facilities and expanded academic programs'
              },
              {
                year: '2010',
                title: 'Recognition',
                description: 'Received multiple awards for academic excellence'
              },
              {
                year: '2015',
                title: 'Innovation',
                description: 'Implemented modern teaching methodologies and technology'
              },
              {
                year: '2023',
                title: 'Today',
                description: 'Serving over 1,200 students with state-of-the-art facilities'
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  )}
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values with Interactive Cards */}
        <motion.div 
          {...fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'Striving for the highest standards in everything we do',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Fostering a supportive and inclusive learning environment',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Embracing new ideas and approaches to education',
                color: 'from-purple-500 to-purple-600'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative p-6 bg-white">
                  <value.icon className="w-12 h-12 text-[#007BFF] mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
                  <h3 className="text-xl font-bold mb-2 text-center group-hover:text-white transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600 text-center group-hover:text-white/90 transition-colors duration-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Principal's Message with Enhanced UI */}
        <motion.div 
          {...fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Principal's Message</h2>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Principal"
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <div>
                <p className="text-gray-600 mb-6 italic">
                  "Welcome to Durga Aawashiya English School. Our institution stands as a beacon
                  of academic excellence and character development. We believe in nurturing not
                  just brilliant minds, but compassionate hearts that will lead our society
                  tomorrow."
                </p>
                <p className="text-gray-600 mb-4">
                  "Our dedicated faculty, state-of-the-art facilities, and comprehensive
                  curriculum are designed to provide students with the best possible learning
                  experience. We focus on holistic development, combining academic rigor with
                  extra-curricular activities."
                </p>
                <div className="text-gray-900 font-semibold">
                  Dr. Rajesh Kumar
                  <span className="block text-sm text-gray-600">Principal, DAES</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements with Interactive Timeline */}
        <motion.div 
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
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
          >
            {[
              {
                year: '2023',
                title: 'Best School Award',
                description: 'Recognized as the best school in the region for academic excellence',
                icon: '🏆'
              },
              {
                year: '2022',
                title: 'Sports Championship',
                description: 'Won the inter-school sports championship for the third consecutive year',
                icon: '⚽'
              },
              {
                year: '2021',
                title: 'Environmental Initiative',
                description: 'Awarded for outstanding contribution to environmental conservation',
                icon: '🌱'
              },
              {
                year: '2020',
                title: 'Academic Excellence',
                description: '100% success rate in board examinations with multiple distinctions',
                icon: '📚'
              },
            ].map((achievement, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <div className="text-[#007BFF] font-bold mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
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