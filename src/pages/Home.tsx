import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
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
  ChevronRight,
  Star,
  Globe,
  Zap,
  Heart,
  Target,
  Trophy,
  Microscope,
  Palette,
  Music,
  Camera,
  MapPin,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Hero from '../components/Hero';
import QuickNotice from '../components/QuickNotice';
import AboutPreview from '../components/AboutPreview';
import GalleryPreview from '../components/Gallery';
import ContactPreview from '../components/Contact';
import CalendarWidget from '../components/CalendarWidget';
import VirtualTour from '../components/VirtualTour';
import SocialFeed from '../components/SocialFeed';
import Newsletter from '../components/Newsletter';
import EmergencyBanner from '../components/EmergencyBanner';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { 
      number: '25+', 
      label: 'Years of Excellence', 
      icon: Award,
      description: 'Providing transformative education since 1998',
      achievement: 'Consistently ranked in top 5% nationally',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      number: '1,200+', 
      label: 'Global Students', 
      icon: Users,
      description: 'Nurturing young minds from 45+ countries',
      achievement: '98% student satisfaction rate',
      color: 'from-green-500 to-green-600'
    },
    { 
      number: '85', 
      label: 'Expert Educators', 
      icon: BookOpen,
      description: 'PhD holders and industry professionals',
      achievement: '12:1 student-teacher ratio',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      number: '99.2%', 
      label: 'Success Rate', 
      icon: TrendingUp,
      description: 'Graduates achieving their goals',
      achievement: '95% college acceptance rate',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    {
      icon: '/icons/graduation-cap.svg',
      title: 'Innovative Curriculum',
      description: 'Cutting-edge programs integrating STEAM, critical thinking, and global perspectives',
      highlights: ['Project-based learning', 'Real-world applications', 'Industry partnerships'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '/icons/trophy.svg',
      title: 'Academic Excellence',
      description: 'Consistently outstanding performance with personalized learning pathways',
      highlights: ['Advanced placement courses', 'Honors programs', 'Academic competitions'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '/icons/teacher.svg',
      title: 'World-Class Faculty',
      description: 'Passionate educators committed to inspiring and mentoring every student',
      highlights: ['Continuous professional development', 'Research-based teaching', 'Mentorship programs'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '/icons/microscope.svg',
      title: 'State-of-the-Art Facilities',
      description: 'Modern infrastructure designed to enhance learning and creativity',
      highlights: ['Smart classrooms', 'Advanced laboratories', 'Maker spaces'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Parent & Medical Professional',
      text: 'The holistic approach to education here is extraordinary. My daughter has developed not just academically, but as a confident, compassionate leader. The teachers genuinely care about each child\'s unique potential.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Daughter accepted to MIT'
    },
    {
      name: 'Michael Chen',
      role: 'Alumni, Class of 2020',
      text: 'This school didn\'t just prepare me for university; it prepared me for life. The critical thinking skills, global perspective, and ethical foundation I gained here continue to guide my success at Harvard.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Harvard University Scholar'
    },
    {
      name: 'Priya Sharma',
      role: 'Current Senior & Student Council President',
      text: 'Every day brings new opportunities to grow, create, and make a difference. The supportive environment and innovative teaching methods make learning an adventure. I\'m excited about my future!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'National Science Fair Winner'
    },
    {
      name: 'David Thompson',
      role: 'Parent & Tech Executive',
      text: 'The school\'s emphasis on character development alongside academic excellence is remarkable. My son has grown into a thoughtful, innovative problem-solver with strong leadership skills.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Son leads robotics team'
    },
    {
      name: 'Emma Williams',
      role: 'Alumni & Rhodes Scholar',
      text: 'The values-based education and global perspective I received here shaped my worldview. The school\'s commitment to developing ethical leaders is evident in everything they do.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Rhodes Scholar at Oxford'
    },
    {
      name: 'Raj Patel',
      role: 'Parent & Entrepreneur',
      text: 'The communication and collaboration between school and families is exceptional. We feel like true partners in our children\'s educational journey. The results speak for themselves.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Both children honor students'
    },
    {
      name: 'Sophie Anderson',
      role: 'Current Junior & Arts Captain',
      text: 'The integration of technology and creativity in our learning is incredible. From AI projects to digital art, we\'re always exploring the intersection of innovation and imagination.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'International Art Competition Winner'
    },
    {
      name: 'James Wilson',
      role: 'Parent & University Professor',
      text: 'As an educator myself, I\'m impressed by the school\'s commitment to evidence-based teaching and continuous improvement. My children are thriving in this nurturing yet challenging environment.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Children excel in STEM'
    }
  ];

  const upcomingEvents = [
    {
      date: 'May 15, 2024',
      title: 'Annual Sports Championship',
      description: 'Inter-house competition featuring athletics, swimming, and team sports with international standards',
      time: '9:00 AM - 5:00 PM',
      location: 'Sports Complex',
      category: 'Sports',
      featured: true,
      registrationOpen: true
    },
    {
      date: 'June 5, 2024',
      title: 'Innovation & Science Expo',
      description: 'Student-led research presentations, robotics demonstrations, and STEM career fair',
      time: '10:00 AM - 4:00 PM',
      location: 'Science & Technology Center',
      category: 'Academic',
      featured: true,
      registrationOpen: true
    },
    {
      date: 'June 20, 2024',
      title: 'Global Cultural Festival',
      description: 'Celebrating our diverse community with performances, cuisine, and cultural exhibitions',
      time: '6:00 PM - 10:00 PM',
      location: 'Main Campus',
      category: 'Cultural',
      featured: false,
      registrationOpen: false
    },
    {
      date: 'July 10, 2024',
      title: 'Parent-Teacher Conference',
      description: 'Comprehensive progress discussions and academic planning sessions',
      time: '2:00 PM - 6:00 PM',
      location: 'Academic Building',
      category: 'Academic',
      featured: false,
      registrationOpen: true
    }
  ];

  const newsItems = [
    {
      title: 'School Achieves International Accreditation Excellence',
      date: 'April 10, 2024',
      excerpt: 'Our institution has been recognized with the highest international education standards, ranking #1 in the district for the third consecutive year.',
      category: 'Achievement',
      readTime: '3 min read',
      featured: true,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Revolutionary AI Learning Lab Opens',
      date: 'March 25, 2024',
      excerpt: 'State-of-the-art artificial intelligence and machine learning laboratory inaugurated, featuring cutting-edge technology and industry partnerships.',
      category: 'Technology',
      readTime: '4 min read',
      featured: true,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Comprehensive Scholarship Program Launched',
      date: 'March 15, 2024',
      excerpt: 'New merit and need-based scholarship initiative supporting exceptional students from diverse backgrounds, investing $2M annually.',
      category: 'Community',
      readTime: '2 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Students Win International Robotics Championship',
      date: 'February 28, 2024',
      excerpt: 'Our robotics team secured first place at the Global Youth Robotics Competition, competing against 200+ teams worldwide.',
      category: 'Achievement',
      readTime: '3 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const studentLife = [
    {
      title: 'Athletic Excellence',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Championship-level sports programs with Olympic-standard facilities and professional coaching',
      programs: ['Swimming', 'Basketball', 'Soccer', 'Tennis', 'Track & Field'],
      achievements: '15 State Championships'
    },
    {
      title: 'Creative Arts',
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Comprehensive arts education fostering creativity, expression, and cultural appreciation',
      programs: ['Theater', 'Visual Arts', 'Digital Media', 'Photography', 'Dance'],
      achievements: 'National Arts Recognition'
    },
    {
      title: 'STEM Innovation',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Cutting-edge science, technology, engineering, and mathematics programs with real-world applications',
      programs: ['Robotics', 'AI Research', 'Biotechnology', 'Engineering Design', 'Data Science'],
      achievements: 'International Science Fair Winners'
    },
    {
      title: 'Global Leadership',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Developing ethical leaders through service learning, Model UN, and community engagement',
      programs: ['Model UN', 'Debate Team', 'Community Service', 'Student Government', 'Peer Mentoring'],
      achievements: 'UN Youth Ambassador Program'
    }
  ];

  const quickStats = [
    { label: 'Countries Represented', value: '45+', icon: Globe },
    { label: 'Languages Spoken', value: '30+', icon: BookOpen },
    { label: 'University Partnerships', value: '50+', icon: GraduationCap },
    { label: 'Alumni Network', value: '5,000+', icon: Users }
  ];

  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Enhanced Hero Section */}
      <div className="relative">
        <Hero />
        
        {/* Live Stats Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-gray-600">Live: {currentTime.toLocaleTimeString()}</span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-gray-600">
                <span className="font-semibold text-blue-600">1,247</span> students online
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-gray-600">
                <span className="font-semibold text-green-600">98%</span> attendance today
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Notice Section with Enhanced Design */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <QuickNotice />
          
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced School at a Glance Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Excellence in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to educational excellence is reflected in these achievements and the success of our global community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full overflow-hidden group-hover:scale-105">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Main Number */}
                  <h3 className="text-4xl font-bold text-center mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {stat.number}
                  </h3>
                  
                  {/* Label */}
                  <p className="text-xl font-semibold text-center text-gray-800 mb-3">
                    {stat.label}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm text-center text-gray-600 mb-4 leading-relaxed">
                    {stat.description}
                  </p>
                  
                  {/* Achievement Badge */}
                  <div className="text-center">
                    <span className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${stat.color} text-white rounded-full text-xs font-semibold`}>
                      <Trophy className="w-3 h-3 mr-1" />
                      {stat.achievement}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Virtual Tour Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <VirtualTour />
        </div>
      </section>

      {/* Enhanced News, Events & Calendar Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Stay Connected & Informed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the latest news, upcoming events, and important dates in our vibrant school community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Enhanced News & Events Slider */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex items-center justify-between p-8 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Latest News & Events</h3>
                    <p className="text-gray-600">Stay updated with our school community</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 flex items-center group">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="relative p-8">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                    }}
                    pagination={{ 
                      clickable: true,
                      bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600',
                      bulletClass: 'swiper-pagination-bullet !bg-gray-300 !w-3 !h-3 !mx-1 !opacity-100'
                    }}
                    autoplay={{ 
                      delay: 4000,
                      disableOnInteraction: false
                    }}
                    speed={800}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2, spaceBetween: 24 },
                    }}
                    className="!pb-16 !overflow-hidden"
                  >
                    {[...newsItems, ...upcomingEvents]
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((item, index) => (
                        <SwiperSlide key={index}>
                          <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl overflow-hidden h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
                          >
                            {/* Image for news items */}
                            {('image' in item) && (
                              <div className="relative h-48 overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                  <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                                    {item.category}
                                  </span>
                                </div>
                              </div>
                            )}
                            
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <span className="text-blue-600 text-sm font-medium">
                                  {new Date(item.date).toLocaleDateString('en-US', { 
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </span>
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                  ('excerpt' in item) 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : item.featured 
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-green-100 text-green-800'
                                }`}>
                                  {('excerpt' in item) ? 'NEWS' : item.featured ? 'FEATURED' : 'EVENT'}
                                </span>
                              </div>
                              
                              <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </h4>
                              
                              <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                {('excerpt' in item) ? item.excerpt : item.description}
                              </p>
                              
                              {/* Additional info for events */}
                              {('time' in item) && (
                                <div className="space-y-2 mb-4 text-xs text-gray-500">
                                  <div className="flex items-center">
                                    <Clock className="w-3 h-3 mr-2" />
                                    {item.time}
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="w-3 h-3 mr-2" />
                                    {item.location}
                                  </div>
                                </div>
                              )}
                              
                              {/* Read time for news */}
                              {('readTime' in item) && (
                                <div className="text-xs text-gray-500 mb-4">
                                  {item.readTime}
                                </div>
                              )}
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center text-blue-600 text-sm font-medium hover:underline group-hover:text-blue-700">
                                  {('excerpt' in item) ? 'Read More' : 'Learn More'}
                                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                                
                                {('registrationOpen' in item) && item.registrationOpen && (
                                  <button className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold hover:bg-green-200 transition-colors">
                                    Register
                                  </button>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        </SwiperSlide>
                      ))}
                  </Swiper>

                  {/* Enhanced Navigation Buttons */}
                  <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl text-blue-600 transition-all duration-300 hover:scale-110 swiper-button-prev after:hidden group">
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl text-blue-600 transition-all duration-300 hover:scale-110 swiper-button-next after:hidden group">
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Calendar Widget */}
            <div className="lg:col-span-4">
              <CalendarWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the unique advantages that make our educational approach transformative and our community exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <img 
                        src={feature.icon} 
                        alt={feature.title}
                        className="w-10 h-10 object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-3 flex-shrink-0`}></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Student Life Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Vibrant Student Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond academics, our students thrive in a rich ecosystem of activities, competitions, and opportunities for personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentLife.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                        {activity.achievements}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {activity.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Programs Available:</h4>
                      <div className="flex flex-wrap gap-2">
                        {activity.programs.map((program, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <AboutPreview />
        </div>
      </section>

      {/* Enhanced Social Media Feed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <SocialFeed />
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Voices of Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our community members about their transformative experiences and remarkable achievements.
            </p>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600',
              bulletClass: 'swiper-pagination-bullet !bg-gray-300 !w-3 !h-3 !mx-1 !opacity-100'
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full group"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-8 italic text-center leading-relaxed text-lg">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {testimonial.achievement}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Home;