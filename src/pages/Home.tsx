import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Award, 
  BookOpen,
  Calendar,
  Download,
  LogIn,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hero from '../components/Hero';
import QuickNotice from '../components/QuickNotice';
import AboutPreview from '../components/AboutPreview';
import GalleryPreview from '../components/Gallery';
import ContactPreview from '../components/Contact';
import CalendarWidget from '../components/CalendarWidget';
import EmergencyBanner from '../components/EmergencyBanner';
import VirtualTour from '../components/VirtualTour';
import SocialFeed from '../components/SocialFeed';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { 
      number: '25+', 
      label: 'Years of Excellence', 
      icon: Award,
      description: 'Providing quality education since 1998'
    },
    { 
      number: '1000+', 
      label: 'Students', 
      icon: Users,
      description: 'Nurturing young minds every year'
    },
    { 
      number: '50+', 
      label: 'Expert Teachers', 
      icon: BookOpen,
      description: 'Dedicated and experienced faculty'
    },
    { 
      number: '95%', 
      label: 'Success Rate', 
      icon: TrendingUp,
      description: 'Consistent academic excellence'
    }
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
      name: 'Sarah Johnson',
      role: 'Parent',
      text: 'The dedication of teachers and staff is exceptional. My daughter has shown remarkable growth in both academics and extracurricular activities.'
    },
    {
      name: 'Michael Chen',
      role: 'Alumni',
      text: 'My years at this school shaped my future. The values and knowledge I gained here continue to guide me in my professional life.'
    },
    {
      name: 'Priya Sharma',
      role: 'Current Student',
      text: 'I love the interactive learning environment. The teachers are supportive and the facilities are amazing. Every day is a new opportunity to learn and grow.'
    },
    {
      name: 'David Thompson',
      role: 'Parent',
      text: 'The school\'s focus on holistic development is impressive. My son has developed not just academically, but also in sports and leadership skills.'
    },
    {
      name: 'Emma Williams',
      role: 'Alumni',
      text: 'The school\'s emphasis on character building and moral values has helped me become a better person. The memories and friendships I made here are priceless.'
    },
    {
      name: 'Raj Patel',
      role: 'Parent',
      text: 'The communication between teachers and parents is excellent. We feel involved in our child\'s education journey every step of the way.'
    },
    {
      name: 'Sophie Anderson',
      role: 'Current Student',
      text: 'The modern facilities and technology integration make learning exciting. I especially enjoy the science labs and sports facilities.'
    },
    {
      name: 'James Wilson',
      role: 'Parent',
      text: 'The school\'s commitment to maintaining high academic standards while fostering creativity is commendable. My children love coming to school every day.'
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

  const importantDates = [
    {
      date: 'April 15, 2024',
      event: 'Admission Open for New Session',
      type: 'Admission'
    },
    {
      date: 'April 20, 2024',
      event: 'Annual Sports Meet',
      type: 'Event'
    },
    {
      date: 'May 1, 2024',
      event: 'New Academic Session Begins',
      type: 'Academic'
    },
    {
      date: 'May 5, 2024',
      event: 'Parent-Teacher Meeting',
      type: 'Meeting'
    }
  ];

  const studentLife = [
    {
      title: 'Sports Activities',
      image: '/images/sports.jpg',
      description: 'Comprehensive sports program including indoor and outdoor activities'
    },
    {
      title: 'Cultural Events',
      image: '/images/cultural.jpg',
      description: 'Regular cultural programs to nurture artistic talents'
    },
    {
      title: 'Science Club',
      image: '/images/science.jpg',
      description: 'Hands-on learning through experiments and projects'
    },
    {
      title: 'Music & Arts',
      image: '/images/arts.jpg',
      description: 'Creative expression through music, dance, and visual arts'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Hero Section */}
      <Hero />

      {/* Quick Notice Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <QuickNotice />
        </div>
      </section>

      {/* School at a Glance Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">School at a Glance</h2>
            <div className="w-20 h-1 bg-[#007BFF] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div className="flex items-center justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-[#007BFF] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-2 text-gray-900 group-hover:text-[#007BFF] transition-colors">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold text-center text-gray-800 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-center text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Virtual Tour Section */}
      <VirtualTour />

      {/* News, Events & Calendar Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
            <div className="w-20 h-1 bg-[#007BFF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* News & Events Slider */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-lg">
                <div className="flex items-center justify-between p-6 border-b">
                  <h3 className="text-xl font-bold text-gray-800">News & Events</h3>
                  <button className="text-sm text-[#007BFF] hover:text-blue-700 font-medium flex items-center">
                    View All
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>

                <div className="relative p-6">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                    }}
                    pagination={{ 
                      clickable: true,
                      bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#007BFF]',
                      bulletClass: 'swiper-pagination-bullet !bg-gray-300 !w-2 !h-2 !mx-1 !opacity-100'
                    }}
                    autoplay={{ 
                      delay: 3000,
                      disableOnInteraction: false
                    }}
                    speed={800}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2, spaceBetween: 20 },
                    }}
                    className="!pb-12 !overflow-hidden"
                  >
                    {[...newsItems, ...upcomingEvents]
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="bg-gray-50 rounded-lg p-4 h-full hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[#007BFF] text-sm font-medium">
                                {new Date(item.date).toLocaleDateString('en-US', { 
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </span>
                              <span className="text-xs font-semibold px-2 py-1 rounded-full 
                                {'excerpt' in item 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-green-100 text-green-800'
                                }"
                              >
                                {'excerpt' in item ? 'NEWS' : 'EVENT'}
                              </span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {('excerpt' in item) ? item.excerpt : item.description}
                            </p>
                            <div className="flex items-center text-[#007BFF] text-sm font-medium hover:underline">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>

                  {/* Navigation Buttons */}
                  <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md hover:shadow-lg text-[#007BFF] transition-all duration-300 hover:scale-110 swiper-button-prev after:hidden">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md hover:shadow-lg text-[#007BFF] transition-all duration-300 hover:scale-110 swiper-button-next after:hidden">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="lg:col-span-4">
              <CalendarWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-[#007BFF] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 mb-4 mx-auto relative">
                  <div className="absolute inset-0 bg-blue-50 rounded-full transform -rotate-6 transition-transform group-hover:rotate-6"></div>
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 group-hover:text-[#007BFF] transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <AboutPreview />
        </div>
      </section>

      {/* Social Media Feed Section */}
      <SocialFeed />

      {/* What People Say Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What People Say</h2>
            <div className="w-20 h-1 bg-[#007BFF] mx-auto"></div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ 
              delay: 4000,
              disableOnInteraction: false
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 text-yellow-400 text-center">★★★★★</div>
                  <p className="text-gray-600 mb-6 italic text-center">"{testimonial.text}"</p>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#007BFF] transition-colors">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Home;