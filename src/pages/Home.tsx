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
  Check,
  ShieldCheck
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
// import Newsletter from '../components/Newsletter';
import EmergencyBanner from '../components/EmergencyBanner';
import AnimatedBackground from '../components/AnimatedBackground';

// NOTE: The hoverEffects and mobileStyles objects from your other file are assumed to be available
// or their principles are applied directly to the classNames below for optimization.

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
      number: '31+',
      label: 'Years of Excellence',
      icon: Award,
      description: 'Providing transformative education since 1994',
      achievement: 'Achieving 100% success rate in S.E.E. examinations annually',
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
      number: '35',
      label: 'Expert Educators',
      icon: BookOpen,
      description: 'Years of experience industry professionals',
      achievement: '25:1 student-teacher ratio',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '100%',
      label: 'Success Rate',
      icon: TrendingUp,
      description: 'Graduates achieving their goals',
      achievement: '100% college acceptance rate',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    {
      icon: '/icons/graduation-cap.svg',
      title: 'Innovative Curriculum',
      description: 'Cutting-edge programs integrating STEM, critical thinking, and local perspectives',
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

  const newsItems = [
    {
      title: 'Final Academic Result 2081',
      date: '2025-04-10', // Represents Chaitra 28, 2081
      excerpt: 'The final results for the academic year 2081 have been published. We congratulate all students on their hard work and success.',
      category: 'Academic',
      readTime: '1 min read',
    },
    {
      title: 'First Terminal Exam Routine Published',
      date: '2025-06-24', // Represents 10th Ashad 2082
      excerpt: 'The routine for the first terminal examination is now available. Students are advised to prepare accordingly.',
      category: 'Exams',
      readTime: '2 min read',
    }
  ];

  const upcomingEvents = [
    {
      date: '2025-04-20', // Represents 7th Baishakh 2082
      title: 'New Academic Session 2082 Begins',
      description: 'We are thrilled to welcome all our students to the new academic session of 2082. A fresh start full of learning and opportunities.',
      time: '9:00 AM',
      location: 'School Premises',
      category: 'Academic',
      featured: true,
    },
    {
      date: '2025-05-24', // Represents 10th Jestha 2082
      title: 'ECA Program Launch',
      description: 'Join us for the launch of this year\'s Extra-Curricular Activities (ECA) program. Discover a wide range of clubs and activities.',
      time: '11:00 AM - 1:00 PM',
      location: 'Auditorium',
      category: 'Activities',
      registrationOpen: true
    },
    {
      date: '2025-06-01', // Represents 18th Jestha 2082
      title: 'Inter-House Quiz Competition',
      description: 'A battle of brains! Don\'t miss the exciting inter-house quiz competition. All are welcome to cheer for their houses.',
      time: '1:00 PM',
      location: 'Assembly Hall',
      category: 'Competition'
    },
    {
      date: '2025-06-04', // Represents 21st Jestha 2082
      title: 'Parents Meeting',
      description: 'An important meeting for parents and guardians to discuss student progress and upcoming school plans.',
      time: '10:00 AM - 12:00 PM',
      location: 'Respective Classrooms',
      category: 'Meeting'
    },
    {
      date: '2025-06-15', // Represents 1st Ashad 2082
      title: 'Unit Test Starts',
      description: 'The first unit tests of the new session will commence. We wish all our students the very best.',
      time: 'During school hours',
      location: 'School Premises',
      category: 'Exams'
    },
    {
      date: '2025-06-29', // Represents 15th Ashad 2082
      title: 'First Terminal Exam Starts',
      description: 'The First Terminal Examinations are beginning today. Please see the published routine for the detailed schedule.',
      time: 'As per routine',
      location: 'Examination Hall',
      category: 'Exams',
      featured: true
    },
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
    { label: 'Academic Excellence', value: '100%', icon: Award },
    { label: 'Sports Championships', value: '20+', icon: Trophy },
    { label: 'Arts Recognition', value: '10+', icon: Star },
    { label: 'Excellent Years', value: '31+', icon: Heart }
  ];

  const adToBsMap = {
    '2025-04-10': '२८ चैत २०८१', // Final Academic Result 2081
    '2025-04-20': '७ बैशाख २०८२', // New Academic Session 2082 Begins
    '2025-05-24': '१० जेठ २०८२', // ECA Program Launch
    '2025-06-01': '१८ जेठ २०८२', // Inter-House Quiz Competition
    '2025-06-04': '२१ जेठ २०८२', // Parents Meeting
    '2025-06-15': '१ असार २०८२', // Unit Test Starts
    '2025-06-24': '१० असार २०८२', // First Terminal Exam Routine Published
    '2025-06-29': '१५ असार २०८२', // First Terminal Exam Starts
  };

  return (
    <div className="min-h-screen">
      <div className="relative">
        <Hero />
      </div>

      <section className="relative py-16 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 overflow-hidden">
        <AnimatedBackground pattern="waves" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 flex items-center justify-center gap-2">
              <span role="img" aria-label="star">🌟</span> Welcome to Durga Aawashiya English School
            </h1>
            <div className="text-lg md:text-xl text-blue-700 font-semibold mb-2">Mechinagar-12, Jhapa, Nepal | Established 1994</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="bg-white/90 rounded-2xl shadow-xl p-6 md:p-8 text-xl text-gray-700 leading-relaxed border-l-8 border-blue-300">
              At Durga Aawashiya English School, we believe education is more than books and classrooms — it's about shaping well-rounded individuals ready to thrive in life. Since 1994, we have proudly served the community by nurturing students in an environment that blends academic excellence, strong character development, and human values.
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.18 } }, hidden: {} }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {/* OPTIMIZED: Replaced 'transition-all duration-50' with specific, smoother transitions. Added a subtle scale effect on hover. */}
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-400 hover:shadow-2xl hover:scale-[1.03] will-change-transform transition-[box-shadow,transform] duration-300 ease-out">
              <Award className="w-8 h-8 text-blue-500 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-blue-900 mb-1">Academic Excellence</h4>
                <p className="text-gray-700">We provide a strong foundation in English-medium education, science, mathematics, and technology, helping students build the knowledge and skills they need for the future.</p>
              </div>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-400 hover:shadow-2xl hover:scale-[1.03] will-change-transform transition-[box-shadow,transform] duration-300 ease-out">
              <Heart className="w-8 h-8 text-green-500 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-green-900 mb-1">Character & Humanism</h4>
                <p className="text-gray-700">Our focus goes beyond academics — we instill honesty, respect, responsibility, and compassion, preparing students to contribute positively to society.</p>
              </div>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-400 hover:shadow-2xl hover:scale-[1.03] will-change-transform transition-[box-shadow,transform] duration-300 ease-out">
              <Trophy className="w-8 h-8 text-yellow-500 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-yellow-900 mb-1">Sports & Physical Education</h4>
                <p className="text-gray-700">From football and cricket to athletics and indoor games, we encourage every child to develop sportsmanship, teamwork, and a healthy lifestyle.</p>
              </div>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-400 hover:shadow-2xl hover:scale-[1.03] will-change-transform transition-[box-shadow,transform] duration-300 ease-out">
              <Music className="w-8 h-8 text-pink-500 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-pink-900 mb-1">Music, Dance, and the Arts</h4>
                <p className="text-gray-700">Our school promotes creativity through regular music classes, dance workshops, and art competitions, helping students express themselves confidently.</p>
              </div>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-400 hover:shadow-2xl hover:scale-[1.03] will-change-transform transition-[box-shadow,transform] duration-300 ease-out">
              <Star className="w-8 h-8 text-purple-500 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-purple-900 mb-1">Co-Curricular & Extra-Curricular Activities</h4>
                <p className="text-gray-700">We organize debates, quizzes, exhibitions, educational tours, and social service programs that broaden horizons and build leadership skills.</p>
              </div>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-cyan-400 hover:shadow-2xl hover:scale-[1.03] will-change-transform transition-[box-shadow,transform] duration-300 ease-out">
              <ShieldCheck className="w-8 h-8 text-cyan-500 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-cyan-900 mb-1">Safe and Supportive Environment</h4>
                <p className="text-gray-700">Our experienced teachers and staff create a nurturing space where every child is valued, supported, and encouraged to grow.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 relative overflow-hidden">
        <AnimatedBackground pattern="dots" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <AboutPreview />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
        <AnimatedBackground pattern="dots" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
              Our Achievements at a Glance
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the numbers that reflect our commitment to excellence and student success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-stretch"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.14, y: -18, rotateZ: 1.5 }}
                transition={{ type: 'spring', stiffness: 900, damping: 14, mass: 0.7 }}
                // OPTIMIZED: Replaced 'transition-all' with specific properties for smoother fallback transitions.
                className="group relative flex flex-col items-center justify-center p-8 rounded-2xl shadow-xl bg-white border border-gray-100 hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.25)] hover:ring-4 hover:ring-blue-400/40 hover:bg-gradient-to-br hover:from-blue-100 hover:to-purple-100 transition-[box-shadow,ring-color,background-color] duration-300 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:rotate-6 group-hover:scale-125 transition-transform duration-300" />
                <div className="text-5xl font-extrabold text-blue-900 mb-2 relative z-10 text-center">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 relative z-10 text-center leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <AnimatedBackground pattern="grid" />
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              A Legacy of SEE Success
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent md:leading-snug">
              Celebrating Consistent Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our students' performance in the Secondary Education Examination (SEE) is a cornerstone of our academic pride. We are committed to fostering an environment where every student can achieve their best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              // OPTIMIZED: Replaced 'transition-all' with a specific property.
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white hover:shadow-blue-400/50 transition-shadow duration-300"
            >
              <ShieldCheck className="w-20 h-20 mb-4 opacity-20 absolute -top-4 -left-4" />
              <h3 className="text-2xl font-bold mb-2 z-10">Unbroken Record of Success</h3>
              <div className="text-8xl font-black my-4 z-10">100%</div>
              <p className="text-2xl font-semibold mb-4 z-10">SEE Pass Rate</p>
              <p className="text-blue-100 leading-relaxed max-w-sm z-10">
                Since our very first SEE batch, we have maintained a perfect pass rate, a testament to our dedicated faculty, rigorous curriculum, and the hard work of our students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              // OPTIMIZED: Replaced 'transition-all' with a specific property.
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl shadow-2xl bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <Trophy className="w-20 h-20 mb-4 text-gray-100 absolute -top-4 -right-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2 z-10">Latest SEE Achievements</h3>
              <div className="text-8xl font-black my-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 z-10">3.91</div>
              <p className="text-2xl font-semibold text-gray-800 mb-4 z-10">Highest GPA Achieved</p>
              <p className="text-gray-600 leading-relaxed max-w-sm z-10">
                Our students continue to set new benchmarks. In the 2081 SEE results, we celebrated a top GPA of 3.91, with over 95% of students securing A or A+ grades.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:leading-snug">
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to educational excellence is reflected in these achievements and the success of our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -16, scale: 1.12 }}
                // OPTIMIZED: Replaced 'transition-all' with specific properties.
                className="group relative p-8 rounded-2xl shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-5xl font-extrabold text-blue-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {stat.number}
                </h3>
                <p className="text-xl font-semibold text-gray-800 mb-3 flex-grow leading-tight">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {stat.description}
                </p>
                <div className="text-center mt-auto">
                  <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${stat.color} text-white rounded-full text-xs font-semibold`}>
                    <Trophy className="w-3 h-3 mr-2" />
                    {stat.achievement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-10 bg-gray-50 relative overflow-hidden">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-8 flex flex-col h-full min-h-[540px]">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="flex items-center justify-between p-8 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Latest News & Events</h3>
                    <p className="text-gray-600">Stay updated with our school community</p>
                  </div>
                </div>

                <div className="relative p-8 flex-grow h-full">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                      prevEl: '.swiper-button-prev-custom',
                      nextEl: '.swiper-button-next-custom',
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
                    className="!pb-16 h-full"
                  >
                    {[...newsItems, ...upcomingEvents]
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((item, index) => (
                        <SwiperSlide key={index} className="h-full">
                          <motion.div
                            whileHover={{ y: -5 }}
                            // OPTIMIZED: Replaced 'transition-all' with a specific property.
                            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group flex flex-col h-full"
                          >
                            <div className="p-6 flex flex-col flex-grow">
                              <div className="flex items-center justify-between mb-4">
                                <span className="text-blue-600 text-sm font-medium flex items-baseline gap-2">
                                  {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                  <span className="text-xs text-gray-500 font-normal">({adToBsMap[item.date] || ''})</span>
                                </span>
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${('excerpt' in item)
                                    ? 'bg-blue-100 text-blue-800'
                                    : item.featured
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-green-100 text-green-800'
                                  }`}>
                                  {('excerpt' in item) ? 'NEWS' : item.featured ? 'FEATURED' : 'EVENT'}
                                </span>
                              </div>

                              <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </h4>

                              <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                                {('excerpt' in item) ? item.excerpt : item.description}
                              </p>

                              <div className="mt-auto">
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

                                {('readTime' in item) && (
                                  <div className="text-xs text-gray-500 mb-4">
                                    {item.readTime}
                                  </div>
                                )}

                                <div className="flex items-center justify-between">
                                  {/* OPTIMIZED: Replaced 'transition-all' with specific properties. */}
                                  <a href="#" className="flex items-center text-blue-600 text-sm font-medium hover:underline group-hover:text-blue-700 hover:bg-blue-600 hover:text-white hover:scale-105 will-change-transform transition-[color,background-color,transform] duration-200 ease-in-out">
                                    {('excerpt' in item) ? 'Read More' : 'Learn More'}
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                  </a>

                                  {('registrationOpen' in item) && item.registrationOpen && (
                                    // OPTIMIZED: Replaced 'transition-all' with specific properties.
                                    <button className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold hover:bg-green-600 hover:text-white hover:scale-105 will-change-transform transition-[color,background-color,transform] duration-200 ease-in-out">
                                      Register
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </SwiperSlide>
                      ))}
                  </Swiper>

                  {/* OPTIMIZED: Replaced 'transition-all' with specific properties. */}
                  <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl text-blue-600 will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:scale-110 group after:hidden">
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl text-blue-600 will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:scale-110 group after:hidden">
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col h-full min-h-[540px]">
              <div className="h-full flex flex-col">
                <CalendarWidget events={[...newsItems, ...upcomingEvents]} adToBsMap={adToBsMap} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
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
            <h2 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:leading-snug">
              Why Choose Durga Aawashiya?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the unique advantages that make our educational approach transformative and our community exceptional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.07 }}
                // OPTIMIZED: Replaced 'transition-all' with a specific property.
                className="group relative p-8 rounded-2xl shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-12 h-12 object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-center mb-6 leading-relaxed flex-grow min-h-[4rem]">
                  {feature.description}
                </p>
                <div className="space-y-3 mt-auto">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-base text-gray-700">
                      <div className={`w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 relative overflow-hidden">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {studentLife.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                // OPTIMIZED: Replaced 'transition-all' with a specific property.
                className="group relative rounded-3xl shadow-2xl bg-white hover:shadow-3xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-base font-semibold">
                      {activity.achievements}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base flex-grow min-h-[3rem]">
                    {activity.description}
                  </p>
                  <div className="space-y-3 mt-auto">
                    <h4 className="font-semibold text-gray-800 text-lg">Programs Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:leading-snug">
              What Our Community Says
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
            navigation={{
              prevEl: '.swiper-button-prev-testimonial',
              nextEl: '.swiper-button-next-testimonial',
            }}
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
            className="pb-16 relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  // OPTIMIZED: Replaced 'transition-all' with a specific property.
                  className="group relative p-8 rounded-2xl shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
                >
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-8 italic text-center leading-relaxed text-lg flex-grow min-h-[6rem]">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t border-gray-200 pt-6 mt-auto">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        // OPTIMIZED: Replaced 'transition-all' with a specific property.
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-200 group-hover:ring-blue-300 transition-shadow duration-300 shadow-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1.5 rounded-full text-xs font-semibold">
                          {testimonial.achievement}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
            {/* OPTIMIZED: Replaced 'transition-all' with specific properties. */}
            <button className="swiper-button-prev-testimonial absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10 hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-110 will-change-transform transition-[transform,box-shadow] duration-200 ease-out">
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button className="swiper-button-next-testimonial absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10 hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-110 will-change-transform transition-[transform,box-shadow] duration-200 ease-out">
              <ChevronRight className="w-7 h-7" />
            </button>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;
