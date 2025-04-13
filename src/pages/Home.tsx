import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hero from '../components/Hero';
import QuickNotice from '../components/QuickNotice';
import AboutPreview from '../components/AboutPreview';
import GalleryPreview from '../components/Gallery';
import ContactPreview from '../components/Contact';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: '🏆' },
    { number: '1000+', label: 'Students', icon: '👨‍🎓' },
    { number: '50+', label: 'Expert Teachers', icon: '👨‍🏫' },
    { number: '95%', label: 'Success Rate', icon: '📈' },
  ];

  const features = [
    {
      icon: '/icons/graduation-cap.svg',
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed for excellence'
    },
    {
      icon: '/icons/trophy.svg',
      title: 'Academic Excellence',
      description: 'Consistently high academic performance'
    },
    {
      icon: '/icons/teacher.svg',
      title: 'Expert Faculty',
      description: 'Experienced and dedicated teaching staff'
    },
    {
      icon: '/icons/microscope.svg',
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure and resources'
    }
  ];

  const testimonials = [
    {
      name: 'John Doe',
      role: 'Parent',
      text: 'The school has provided an excellent learning environment for my child.'
    },
    {
      name: 'Jane Smith',
      role: 'Alumni',
      text: 'My years at this school shaped my future success.'
    },
    {
      name: 'Mike Johnson',
      role: 'Parent',
      text: 'The teachers are dedicated and the facilities are outstanding.'
    }
  ];

  const upcomingEvents = [
    {
      date: 'May 15, 2024',
      title: 'Annual Sports Day',
      description: 'Join us for our annual sports competition featuring various athletic events.'
    },
    {
      date: 'June 5, 2024',
      title: 'Science Exhibition',
      description: 'Students showcase their innovative science projects and experiments.'
    },
    {
      date: 'July 10, 2024',
      title: 'Parent-Teacher Meeting',
      description: 'Quarterly meeting to discuss student progress and school developments.'
    }
  ];

  const newsItems = [
    {
      title: 'School Ranked #1 in District',
      date: 'April 10, 2024',
      excerpt: 'Our school has been recognized as the top educational institution in the district.'
    },
    {
      title: 'New Computer Lab Inauguration',
      date: 'March 25, 2024',
      excerpt: 'State-of-the-art computer lab with latest technology inaugurated for students.'
    },
    {
      title: 'Scholarship Program Announced',
      date: 'March 15, 2024',
      excerpt: 'New scholarship program for meritorious students from underprivileged backgrounds.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <Hero />

      {/* Quick Notice Section */}
      <QuickNotice />

      {/* Statistics Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">School at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 mx-auto">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg">
              At Durga Aawashiya English School, we believe in nurturing not just academic
              excellence, but developing well-rounded individuals ready for tomorrow's
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Excellence in Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/classroom.jpg"
                alt="Excellence in Education"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Excellence in Education</h2>
              <p className="text-gray-600 text-lg">
                Our commitment to academic excellence is matched by our dedication to character
                building and personal development. We provide a nurturing environment where
                students can discover their potential and pursue their passions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="text-sm text-blue-600 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-blue-600 font-medium flex items-center"
                >
                  Read More <span className="ml-1">→</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-sm text-blue-600 mb-2">{event.date}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue-600 font-medium flex items-center"
                >
                  Learn More <span className="ml-1">→</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AboutPreview />

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            <GalleryPreview />
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="text-4xl mb-4 text-yellow-400">★★★★★</div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Preview with CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8">Take the first step towards excellence in education</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us Now
          </motion.button>
        </div>
      </section>

      <ContactPreview />
    </div>
  );
};

export default Home;