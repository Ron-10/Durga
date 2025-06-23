import React, { useState } from 'react';
import { BookOpen, Award, Users, Clock, Calendar, GraduationCap, Atom, Palette, Music, Dribbble, Sparkles, ChevronRight, Star, Target, Zap, Brain, Microscope, Globe, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('programs');

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
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
            animate={{
              x: [0, 150, 0],
              y: [0, -120, 0],
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 15 + i * 3,
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/70 to-blue-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Animated Academic Icons */}
        <div className="absolute inset-0">
          {[BookOpen, Brain, Microscope, Globe, Calculator].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-white/20"
              animate={{
                y: [-20, -80, -20],
                x: [0, 30, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            >
              <Icon size={40} />
            </motion.div>
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
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <Sparkles className="w-20 h-20 text-yellow-400" />
                <motion.div
                  animate={{ scale: [0, 1.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 w-20 h-20 border-2 border-yellow-400/30 rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            >
              Academics
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            >
              Explore our comprehensive academic programs, innovative curriculum, and the dedicated faculty that drive our mission of educational excellence and student success
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Navigation Tabs */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { id: 'programs', label: 'Academic Programs', icon: BookOpen, gradient: 'from-blue-500 to-cyan-500' },
              { id: 'curriculum', label: 'Curriculum', icon: Target, gradient: 'from-green-500 to-emerald-500' },
              { id: 'departments', label: 'Departments', icon: Users, gradient: 'from-purple-500 to-pink-500' },
              { id: 'activities', label: 'Activities', icon: Zap, gradient: 'from-orange-500 to-red-500' },
              { id: 'calendar', label: 'Calendar', icon: Calendar, gradient: 'from-indigo-500 to-purple-500' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-500 relative overflow-hidden ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-2xl`
                    : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/70 border border-white/30'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon className="w-6 h-6 mr-3" />
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Academic Programs */}
          {activeTab === 'programs' && (
            <motion.div 
              key="programs"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                Our Academic Programs
              </motion.h2>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 lg:grid-cols-3 gap-10"
              >
                {[
                  {
                    title: 'Primary Level',
                    grades: 'Grades 1-5',
                    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
                    description: 'Our foundational years focus on nurturing curiosity and building core competencies in literacy and numeracy. We create a supportive environment for holistic development through play-based learning, storytelling, and creative arts.',
                    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Languages', 'Arts & Crafts'],
                    gradient: 'from-blue-500 to-cyan-500',
                    icon: BookOpen,
                    stats: { students: '450', teachers: '18', ratio: '25:1' }
                  },
                  {
                    title: 'Middle Level',
                    grades: 'Grades 6-8',
                    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
                    description: 'We offer an intermediate education that encourages critical thinking and exploration, with a broader range of subjects and co-curricular activities to foster diverse interests and prepare students for advanced learning.',
                    subjects: ['Advanced Mathematics', 'Integrated Science', 'Computer Science', 'Literature', 'History', 'Geography'],
                    gradient: 'from-purple-500 to-pink-500',
                    icon: Target,
                    stats: { students: '380', teachers: '15', ratio: '25:1' }
                  },
                  {
                    title: 'Secondary Level',
                    grades: 'Grades 9-10',
                    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
                    description: 'Our curriculum is designed for in-depth knowledge and preparation for board examinations, with specialized subject tracks to help students pursue their academic goals and career aspirations.',
                    subjects: ['Physics', 'Chemistry', 'Biology', 'Advanced Mathematics', 'Computer Science', 'Economics'],
                    gradient: 'from-green-500 to-emerald-500',
                    icon: GraduationCap,
                    stats: { students: '320', teachers: '16', ratio: '20:1' }
                  },
                ].map((program, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                    className="group backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-700 overflow-hidden transform-gpu perspective-1000"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${program.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-3xl font-bold mb-2 text-gray-800">{program.title}</h3>
                      <p className={`text-xl font-semibold mb-6 bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>{program.grades}</p>
                      
                      <p className="text-gray-600 mb-8 leading-relaxed">{program.description}</p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-3 bg-white/50 rounded-xl">
                          <div className="text-2xl font-bold text-gray-800">{program.stats.students}</div>
                          <div className="text-xs text-gray-600">Students</div>
                        </div>
                        <div className="text-center p-3 bg-white/50 rounded-xl">
                          <div className="text-2xl font-bold text-gray-800">{program.stats.teachers}</div>
                          <div className="text-xs text-gray-600">Teachers</div>
                        </div>
                        <div className="text-center p-3 bg-white/50 rounded-xl">
                          <div className="text-2xl font-bold text-gray-800">{program.stats.ratio}</div>
                          <div className="text-xs text-gray-600">Ratio</div>
                        </div>
                      </div>
                      
                      <h4 className="font-bold mb-4 text-gray-800 text-lg">Key Subjects:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {program.subjects.map((subject, idx) => (
                          <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-center text-gray-700 p-2 bg-white/30 rounded-lg"
                          >
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium">{subject}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Curriculum Highlights */}
          {activeTab === 'curriculum' && (
            <motion.div 
              key="curriculum"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                Curriculum & Pedagogy
              </motion.h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.02, y: -5, rotateY: 5 }}
                  className="backdrop-blur-xl bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-700 relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mr-6 shadow-lg"
                      >
                        <BookOpen className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Teaching Methodology</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: 'Student-Centric Learning',
                          description: 'Interactive classrooms designed to foster discussion, curiosity, and active participation with real-life examples.',
                          icon: '🎯'
                        },
                        {
                          title: 'Project-Based Learning',
                          description: 'Students engage in science experiments, art projects, and group presentations with annual exhibitions.',
                          icon: '🔬'
                        },
                        {
                          title: 'Continuous Assessment',
                          description: 'Comprehensive evaluation through quizzes, assignments, and peer reviews with constructive feedback.',
                          icon: '📊'
                        },
                        {
                          title: 'Personalized Attention',
                          description: 'Small class sizes and regular one-on-one sessions ensure every student receives individual guidance.',
                          icon: '👥'
                        },
                        {
                          title: 'Technology Integration',
                          description: 'Interactive whiteboards, educational apps, and coding from early age for digital literacy.',
                          icon: '💻'
                        },
                      ].map((method, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 10 }}
                          className="flex items-start p-4 bg-white/30 rounded-2xl hover:bg-white/50 transition-all duration-300"
                        >
                          <div className="text-3xl mr-4 flex-shrink-0">{method.icon}</div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">{method.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02, y: -5, rotateY: -5 }}
                  className="backdrop-blur-xl bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-700 relative overflow-hidden"
                >
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mr-6 shadow-lg"
                      >
                        <Award className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Assessment & Evaluation</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: 'Continuous Evaluation (CCE)',
                          description: 'Comprehensive assessment process throughout the academic year',
                          percentage: 90
                        },
                        {
                          title: 'Formative Assessments',
                          description: 'Regular quizzes, assignments, and interactive evaluations',
                          percentage: 85
                        },
                        {
                          title: 'Summative Assessments',
                          description: 'Term-end examinations and comprehensive evaluations',
                          percentage: 95
                        },
                        {
                          title: 'Practical Evaluations',
                          description: 'Hands-on project work and laboratory assessments',
                          percentage: 88
                        },
                        {
                          title: 'Parent-Teacher Meetings',
                          description: 'Regular discussions about student progress and development',
                          percentage: 92
                        },
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          className="p-4 bg-white/30 rounded-2xl hover:bg-white/50 transition-all duration-300"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-gray-800">{item.title}</h4>
                            <span className="text-green-600 font-bold">{item.percentage}%</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percentage}%` }}
                              transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Academic Departments */}
          {activeTab === 'departments' && (
            <motion.div 
              key="departments"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                Our Academic Departments
              </motion.h2>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {[
                  { 
                    name: 'Science', 
                    icon: Atom, 
                    gradient: 'from-blue-500 to-cyan-500', 
                    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', 
                    description: 'Exploring the wonders of the natural world through experiments, research, and discovery.',
                    faculty: 8,
                    labs: 3
                  },
                  { 
                    name: 'Mathematics', 
                    icon: Calculator, 
                    gradient: 'from-green-500 to-emerald-500', 
                    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=800&q=80', 
                    description: 'Building logical thinking and problem-solving skills through innovative teaching methods.',
                    faculty: 6,
                    labs: 2
                  },
                  { 
                    name: 'Humanities', 
                    icon: Globe, 
                    gradient: 'from-purple-500 to-pink-500', 
                    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', 
                    description: 'Understanding human culture, society, and history through comprehensive study.',
                    faculty: 7,
                    labs: 1
                  },
                  { 
                    name: 'Arts & Music', 
                    icon: Palette, 
                    gradient: 'from-orange-500 to-red-500', 
                    image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80', 
                    description: 'Fostering creativity and artistic expression through various mediums and performances.',
                    faculty: 5,
                    labs: 4
                  },
                ].map((dept, index) => (
                  <motion.div 
                    key={dept.name}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -15, rotateY: 10 }}
                    className="group backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 text-center hover:bg-white/30 transition-all duration-700 overflow-hidden transform-gpu perspective-1000"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    <div className="p-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 bg-gradient-to-r ${dept.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl -mt-16 relative z-10`}
                      >
                        <dept.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{dept.name}</h3>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{dept.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white/50 rounded-xl">
                          <div className="text-xl font-bold text-gray-800">{dept.faculty}</div>
                          <div className="text-xs text-gray-600">Faculty</div>
                        </div>
                        <div className="p-3 bg-white/50 rounded-xl">
                          <div className="text-xl font-bold text-gray-800">{dept.labs}</div>
                          <div className="text-xs text-gray-600">Labs</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Extracurricular Activities */}
          {activeTab === 'activities' && (
            <motion.div 
              key="activities"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                Extracurricular Activities
              </motion.h2>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                {[
                  {
                    title: 'Clubs & Societies',
                    icon: Users,
                    gradient: 'from-blue-500 to-purple-500',
                    items: ['Debate Club', 'Science Club', 'Literary Society', 'Math Club', 'Environmental Club'],
                    context: 'Our clubs provide platforms for students to pursue passions, develop leadership skills, and engage in meaningful community service projects.',
                    members: 450,
                    events: 24
                  },
                  {
                    title: 'Sports',
                    icon: Dribbble,
                    gradient: 'from-green-500 to-emerald-500',
                    items: ['Football', 'Basketball', 'Athletics', 'Swimming', 'Table Tennis'],
                    context: 'Sports programs focus on teamwork, discipline, and sportsmanship while promoting physical fitness and healthy competition.',
                    members: 380,
                    events: 18
                  },
                  {
                    title: 'Performing Arts',
                    icon: Music,
                    gradient: 'from-orange-500 to-red-500',
                    items: ['Drama', 'Music', 'Dance', 'Choir', 'Orchestra'],
                    context: 'Our performing arts program nurtures creativity, builds confidence, and provides platforms for artistic expression and cultural appreciation.',
                    members: 320,
                    events: 15
                  },
                ].map((activity, index) => (
                  <motion.div 
                    key={activity.title}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                    className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-700 overflow-hidden transform-gpu perspective-1000"
                  >
                    <div className="p-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 bg-gradient-to-r ${activity.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-2xl mx-auto`}
                      >
                        <activity.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">{activity.title}</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-white/50 rounded-xl">
                          <div className="text-2xl font-bold text-gray-800">{activity.members}</div>
                          <div className="text-xs text-gray-600">Members</div>
                        </div>
                        <div className="text-center p-3 bg-white/50 rounded-xl">
                          <div className="text-2xl font-bold text-gray-800">{activity.events}</div>
                          <div className="text-xs text-gray-600">Events/Year</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {activity.items.map((item, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-center text-gray-700 p-2 bg-white/30 rounded-lg hover:bg-white/50 transition-colors"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-3" />
                            <span className="font-medium">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">{activity.context}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Academic Calendar */}
          {activeTab === 'calendar' && (
            <motion.div 
              key="calendar"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                Academic Calendar
              </motion.h2>
              
              <div className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
                <div className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Important Dates</h3>
                      <div className="space-y-6">
                        {[
                          { 
                            date: 'April 1, 2024', 
                            event: 'New Academic Session Begins', 
                            context: 'Welcome assembly, orientation for new students, and introduction to clubs and activities.',
                            type: 'session'
                          },
                          { 
                            date: 'July 15, 2024', 
                            event: 'First Term Examinations', 
                            context: 'Students are assessed on their progress. Study workshops and counseling sessions are available.',
                            type: 'exam'
                          },
                          { 
                            date: 'December 1, 2024', 
                            event: 'Final Term Examinations', 
                            context: 'End-of-year exams followed by parent-teacher meetings and feedback sessions.',
                            type: 'exam'
                          },
                          { 
                            date: 'March 15, 2025', 
                            event: 'Annual Day Celebration', 
                            context: 'A grand event with performances, awards, and exhibitions showcasing student achievements.',
                            type: 'event'
                          },
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="p-6 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300 border-l-4 border-blue-500"
                          >
                            <div className="flex items-start">
                              <Calendar className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <span className="font-bold text-gray-800 text-lg">{item.event}</span>
                                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    item.type === 'exam' ? 'bg-red-100 text-red-800' :
                                    item.type === 'event' ? 'bg-green-100 text-green-800' :
                                    'bg-blue-100 text-blue-800'
                                  }`}>
                                    {item.type.toUpperCase()}
                                  </span>
                                </div>
                                <div className="text-blue-600 font-medium mb-2">{item.date}</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.context}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">School Timings</h3>
                      <div className="space-y-6">
                        {[
                          { day: 'Monday - Friday', time: '8:00 AM - 3:00 PM', type: 'regular' },
                          { day: 'Saturday', time: '8:00 AM - 12:00 PM', type: 'half' },
                          { day: 'Extra Classes', time: '3:00 PM - 4:30 PM', type: 'extra' },
                          { day: 'Library Hours', time: '8:00 AM - 4:00 PM', type: 'facility' },
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.02, x: -10 }}
                            className="p-6 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300 border-l-4 border-green-500"
                          >
                            <div className="flex items-center">
                              <Clock className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                              <div className="flex-1">
                                <div className="flex justify-between items-center">
                                  <span className="font-bold text-gray-800 text-lg">{item.day}</span>
                                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    item.type === 'regular' ? 'bg-blue-100 text-blue-800' :
                                    item.type === 'half' ? 'bg-yellow-100 text-yellow-800' :
                                    item.type === 'extra' ? 'bg-purple-100 text-purple-800' :
                                    'bg-green-100 text-green-800'
                                  }`}>
                                    {item.type.toUpperCase()}
                                  </span>
                                </div>
                                <div className="text-green-600 font-medium mt-1">{item.time}</div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Academics;