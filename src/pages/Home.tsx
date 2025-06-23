import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
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
  GraduationCap,
  ArrowUp,
  Check
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import GalleryPreview from '../components/Gallery';
import ContactPreview from '../components/Contact';
import CalendarWidget from '../components/CalendarWidget';
import VirtualTour from '../components/VirtualTour';
import SocialFeed from '../components/SocialFeed';
// import Newsletter from '../components/Newsletter';
import EmergencyBanner from '../components/EmergencyBanner';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      number: '500+', 
      label: 'Students', 
      icon: Users,
      description: 'Nurturing young minds for academic success',
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
      description: 'Cutting-edge programs integrating STEAM, critical thinking, and local perspectives',
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
      text: 'This school didn\'t just prepare me for university; it prepared me for life. The critical thinking skills and ethical foundation I gained here continue to guide my success at Harvard.',
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
      text: 'The values-based education I received here shaped my worldview. The school\'s commitment to developing ethical leaders is evident in everything they do.',
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
      achievement: 'National Art Competition Winner'
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
      description: 'Inter-house competition featuring athletics, swimming, and team sports with national standards',
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
      title: 'Annual Cultural Festival',
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
      title: 'School Achieves National Accreditation Excellence',
      date: 'April 10, 2024',
      excerpt: 'Our institution has been recognized with the highest education standards, ranking #1 in the district for the third consecutive year.',
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
      title: 'Students Win National Robotics Championship',
      date: 'February 28, 2024',
      excerpt: 'Our robotics team secured first place at the National Youth Robotics Competition, competing against 200+ teams nationwide.',
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
      achievements: 'National Science Fair Winners'
    },
    {
      title: 'Leadership Development',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Developing ethical leaders through service learning and community engagement',
      programs: ['Debate Team', 'Community Service', 'Student Government', 'Peer Mentoring'],
      achievements: 'National Leadership Awards'
    }
  ];

  const quickStats = [
    { label: 'Academic Excellence', value: '95%', icon: Award },
    { label: 'Sports Championships', value: '15+', icon: Trophy },
    { label: 'Arts Recognition', value: '10+', icon: Star },
    { label: 'Community Service', value: '20+', icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Enhanced Hero Section */}
      <div className="relative">
        <Hero />
      </div>

      {/* Welcome to Durga Aawashiya English School Section */}
      <section className="py-10 bg-white relative overflow-hidden">
        <AnimatedBackground pattern="dots" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                <GraduationCap className="w-4 h-4 mr-2" />
                Established 1998
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Durga Aawashiya English School
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We are committed to providing exceptional education that nurtures the whole child - academically, socially, emotionally, and physically. Our innovative approach combines traditional values with modern teaching methodologies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Holistic Development</h4>
                    <p className="text-gray-600">Comprehensive education focusing on academic excellence and character building</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Faculty</h4>
                    <p className="text-gray-600">Experienced educators dedicated to inspiring and mentoring every student</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Modern Facilities</h4>
                    <p className="text-gray-600">State-of-the-art infrastructure designed to enhance learning and creativity</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Take a Virtual Tour
                  <Camera className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="School Building"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">25+</div>
                        <div className="text-sm text-gray-600">Years</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">500+</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">85</div>
                        <div className="text-sm text-gray-600">Teachers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <AnimatedBackground pattern="dots" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100 shadow-md bg-white">
              <img
                src="/public/icons/logo.png"
                alt="Principal Bhoj Bahadur Karki"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2 flex items-center">
                Message from the Principal
                <span className="ml-3 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"></span>
              </h3>
              <p className="text-gray-600 mb-6 text-lg md:text-xl text-justify leading-relaxed">
                Welcome to Durga Aawashiya English School! Our mission is to inspire every student to reach their highest potential through a nurturing, innovative, and inclusive environment. We believe in holistic education that fosters academic excellence, character, and lifelong learning. Thank you for being part of our vibrant community.
              </p>
              <div className="mt-4">
                <span className="block text-xl font-bold text-blue-700" style={{ fontFamily: 'cursive' }}>
                  Bhoj Bahadur Karki
                </span>
                <span className="block text-gray-500 text-sm mt-1">Principal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-10  relative overflow-hidden">
        <AnimatedBackground pattern="dots" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <AboutPreview />
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-10  relative overflow-hidden">
        <AnimatedBackground pattern="dots" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Achievements at a Glance
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the numbers that reflect our commitment to excellence and student success
            </p>
          </motion.div>
          
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {quickStats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="text-2xl font-bold text-gray-900 mb-1 relative z-10">{stat.value}</div>
                  <div className="text-sm text-gray-600 relative z-10">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Learning Experience Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-10 bg-white relative overflow-hidden"
      >
        <AnimatedBackground pattern="grid" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Innovative Learning
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Interactive Learning Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our cutting-edge facilities and innovative programs that make learning engaging and effective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Connections",
                description: "Connect with students worldwide through our international exchange programs",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Technology Integration",
                description: "State-of-the-art technology in every classroom for enhanced learning",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Heart,
                title: "Wellness Programs",
                description: "Comprehensive health and wellness initiatives for student development",
                color: "from-green-500 to-teal-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full relative overflow-hidden">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced School at a Glance Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-10 bg-white relative overflow-hidden"
      >
        <AnimatedBackground pattern="grid" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              Excellence in Numbers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Excellence in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to educational excellence is reflected in these achievements and the success of our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
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
      <section className="py-10  relative overflow-hidden">
        <AnimatedBackground pattern="waves" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              <Camera className="w-4 h-4 mr-2" />
              Explore Our Campus
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Take a Virtual Tour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience our world-class facilities and vibrant campus life from anywhere in the world.
            </p>
          </motion.div>
          <VirtualTour />
        </div>
      </section>

      {/* Enhanced News, Events & Calendar Section */}
      <section className="py-10 bg-white relative overflow-hidden">
        <AnimatedBackground pattern="dots" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Stay Updated
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Stay Connected & Informed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the latest news, upcoming events, and important dates in our vibrant school community.
            </p>
          </motion.div>

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
      <section className="py-10 bg-white relative overflow-hidden">
        <AnimatedBackground pattern="waves" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              What Sets Us Apart
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the unique advantages that make our educational approach transformative and our community exceptional.
            </p>
          </motion.div>
          
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
      <section className="py-10 bg-white relative overflow-hidden">
        <AnimatedBackground pattern="grid" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Student Life
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Vibrant Student Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond academics, our students thrive in a rich ecosystem of activities, competitions, and opportunities for personal growth.
            </p>
          </motion.div>

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

      {/* Enhanced Testimonials Section */}
      <section className="py-10 bg-white relative overflow-hidden">
        <AnimatedBackground pattern="waves" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Voices of Success
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Voices of Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our community members about their transformative experiences and remarkable achievements.
            </p>
          </motion.div>
          
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
    </div>
  );
};

export default Home;