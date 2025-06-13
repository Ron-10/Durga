import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Globe
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import OnboardingSection from '../components/OnboardingSection';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const schoolHighlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Consistently ranked among the top 5% of schools nationwide with 98% college acceptance rate",
      stats: "98% College Acceptance",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "Students from 45+ countries creating a rich multicultural learning environment",
      stats: "45+ Nationalities",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Award-Winning Programs",
      description: "Recognized for innovation in STEM education and arts integration programs",
      stats: "25+ National Awards",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "Small class sizes with 12:1 student-teacher ratio ensuring individual attention",
      stats: "12:1 Student Ratio",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, fostering a culture of continuous improvement and achievement.",
      examples: ["Academic rigor", "Character development", "Leadership skills"]
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We cultivate empathy, kindness, and understanding, creating a supportive community where everyone feels valued.",
      examples: ["Peer mentoring", "Community service", "Inclusive environment"]
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and critical thinking, preparing students for an ever-changing world through cutting-edge education.",
      examples: ["STEAM programs", "Technology integration", "Project-based learning"]
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards, teaching students to be honest, responsible, and principled leaders.",
      examples: ["Honor code", "Ethical decision-making", "Accountability"]
    }
  ];

  const quickFacts = [
    { label: "Founded", value: "1998", icon: Calendar },
    { label: "Campus Size", value: "25 Acres", icon: MapPin },
    { label: "Students Enrolled", value: "1,200+", icon: Users },
    { label: "Faculty Members", value: "85", icon: BookOpen },
    { label: "Average Class Size", value: "18", icon: GraduationCap },
    { label: "Graduation Rate", value: "99.2%", icon: Award }
  ];

  const upcomingEvents = [
    {
      date: "2024-04-15",
      title: "Spring Open House",
      description: "Discover our campus, meet faculty, and learn about our programs",
      time: "10:00 AM - 2:00 PM",
      location: "Main Campus"
    },
    {
      date: "2024-04-22",
      title: "Science Fair Exhibition",
      description: "Student showcase of innovative research projects and experiments",
      time: "6:00 PM - 8:00 PM",
      location: "Science Building"
    },
    {
      date: "2024-05-01",
      title: "Arts & Culture Festival",
      description: "Celebrating creativity through music, dance, theater, and visual arts",
      time: "4:00 PM - 9:00 PM",
      location: "Performing Arts Center"
    }
  ];

  const testimonialHighlights = [
    {
      quote: "This school transformed my daughter's love for learning. The teachers don't just teach subjects; they inspire curiosity and critical thinking.",
      author: "Maria Rodriguez",
      role: "Parent of Class of 2023",
      rating: 5
    },
    {
      quote: "The personalized attention and innovative teaching methods prepared me exceptionally well for university. I felt ahead of my peers from day one.",
      author: "James Chen",
      role: "Alumni, Harvard University",
      rating: 5
    },
    {
      quote: "The diversity and inclusive environment here taught me as much about the world as any textbook could. It's truly a global community.",
      author: "Aisha Patel",
      role: "Current Senior",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <motion.div
        style={{ y: backgroundY }}
        className="relative"
      >
        <HeroSection />
        
        {/* Floating Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
            <div className="flex items-center space-x-8">
              {quickFacts.slice(0, 4).map((fact, index) => (
                <div key={index} className="text-center">
                  <fact.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{fact.value}</div>
                  <div className="text-sm text-gray-600">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* School Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why We're Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don't just educate students; we nurture future leaders, innovators, and compassionate global citizens 
              through our unique approach to holistic education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${highlight.color} text-white rounded-full text-sm font-semibold`}>
                    {highlight.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape the character of our students, 
              preparing them to make a positive impact in the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-start space-x-6 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {value.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-3">In Practice:</h4>
                      <div className="flex flex-wrap gap-2">
                        {value.examples.map((example, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {example}
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

      {/* Enhanced Onboarding Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <OnboardingSection />
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us for these exciting upcoming events and experience our vibrant school community firsthand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Voices from Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from parents, students, and alumni about their transformative experiences at our school.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards an exceptional educational journey. Schedule a campus visit or start your application today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group">
                Schedule a Visit
                <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center group">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;