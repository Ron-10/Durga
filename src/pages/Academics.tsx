import React, { useState } from 'react';
import { BookOpen, Award, Users, Clock, Calendar, GraduationCap, Atom, Palette, Music, Dribbble, Sparkles, ChevronRight, Star, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('programs');

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
            backgroundImage: 'url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
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
              Academics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Explore our comprehensive academic programs, innovative curriculum, and the dedicated faculty that drive our mission of educational excellence.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <motion.div 
          {...fadeInUp}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'programs', label: 'Academic Programs', icon: BookOpen },
              { id: 'curriculum', label: 'Curriculum', icon: Target },
              { id: 'departments', label: 'Departments', icon: Users },
              { id: 'activities', label: 'Activities', icon: Zap },
              { id: 'calendar', label: 'Calendar', icon: Calendar }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                    : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/70 border border-white/30'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Academic Programs */}
        {activeTab === 'programs' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Our Academic Programs
            </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Primary Level',
                grades: 'Grades 1-5',
                  image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
                  description: 'Our foundational years focus on nurturing curiosity and building core competencies in literacy and numeracy. We create a supportive environment for holistic development.\n\nStudents are encouraged to ask questions, explore their interests, and participate in hands-on activities. The curriculum integrates play-based learning, storytelling, and creative arts to make education enjoyable and memorable. Teachers work closely with parents to ensure every child receives personalized attention and support.',
                subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Languages', 'Arts & Crafts'],
                  gradient: 'from-blue-500 to-cyan-500',
                  icon: BookOpen
              },
              {
                title: 'Middle Level',
                grades: 'Grades 6-8',
                  image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
                  description: 'We offer an intermediate education that encourages critical thinking and exploration, with a broader range of subjects and co-curricular activities to foster diverse interests.\n\nStudents participate in science fairs, debates, and field trips to connect classroom learning with the real world. Project-based assignments and group work help develop collaboration and leadership skills. Our faculty guides students through the transition from foundational to advanced concepts, preparing them for future academic challenges.',
                subjects: ['Advanced Mathematics', 'Integrated Science', 'Computer Science', 'Literature', 'History', 'Geography'],
                  gradient: 'from-purple-500 to-pink-500',
                  icon: Target
              },
              {
                title: 'Secondary Level',
                grades: 'Grades 9-10',
                  image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
                  description: 'Our curriculum is designed for in-depth knowledge and preparation for board examinations, with specialized subject tracks to help students pursue their academic goals.\n\nStudents can choose electives based on their interests, such as advanced sciences, commerce, or humanities. We offer career counseling, exam preparation workshops, and mentorship programs. Alumni often return to share their experiences, inspiring current students to aim high and achieve their dreams.',
                subjects: ['Physics', 'Chemistry', 'Biology', 'Advanced Mathematics', 'Computer Science', 'Economics'],
                  gradient: 'from-green-500 to-emerald-500',
                  icon: GraduationCap
              },
            ].map((program, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500"
                >
                  <img src={program.image} alt={program.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{program.title}</h3>
                  <p className={`text-lg font-semibold mb-4 bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>{program.grades}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <h4 className="font-bold mb-4 text-gray-800">Key Subjects:</h4>
                  <div className="grid grid-cols-2 gap-2">
                  {program.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{subject}</span>
              </div>
            ))}
          </div>
                </motion.div>
              ))}
        </div>
          </motion.div>
        )}

        {/* Curriculum Highlights */}
        {activeTab === 'curriculum' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Curriculum & Pedagogy
            </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Teaching Methodology</h3>
                </div>
              <ul className="space-y-4">
                {[
                    'Student-centric, interactive learning environment: Our classrooms are designed to foster discussion, curiosity, and active participation. Teachers use real-life examples and encourage students to relate lessons to their own experiences.',
                    'Emphasis on project-based and experiential learning: Students regularly engage in science experiments, art projects, and group presentations. Annual exhibitions and fairs provide platforms to showcase their work.',
                    'Continuous and comprehensive assessments with constructive feedback: We use quizzes, assignments, and peer reviews to help students understand their strengths and areas for improvement. Feedback is always supportive and growth-oriented.',
                    'Personalized attention to cater to individual learning styles: Small class sizes and regular one-on-one sessions ensure every student receives the guidance they need.',
                    'Seamless integration of modern technology in the classroom: Interactive whiteboards, educational apps, and online resources are part of daily learning. Coding and digital literacy are introduced from an early age.',
                ].map((method, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start text-gray-700"
                    >
                      <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    <span>{method}</span>
                    </motion.li>
                ))}
              </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mr-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Assessment & Evaluation</h3>
            </div>
              <ul className="space-y-4">
                {[
                  'A continuous and comprehensive evaluation (CCE) process',
                  'Formative assessments including quizzes, and assignments',
                  'Summative assessments through term-end examinations',
                  'Practical and project work evaluation for hands-on skills',
                  'Regular parent-teacher meetings to discuss student progress',
                ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-start text-gray-700"
                    >
                      <div className="p-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    <span>{item}</span>
                    </motion.li>
                ))}
              </ul>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Academic Departments */}
        {activeTab === 'departments' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Our Academic Departments
            </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { name: 'Science', icon: Atom, gradient: 'from-blue-500 to-cyan-500', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', description: 'Exploring the wonders of the natural world. Students participate in lab experiments, science fairs, and environmental projects. Our science club organizes guest lectures and field visits to research centers.' },
                { name: 'Mathematics', icon: GraduationCap, gradient: 'from-green-500 to-emerald-500', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=800&q=80', description: 'Building logical thinking and problem-solving skills. Math Olympiads, puzzle contests, and math labs make learning engaging and practical.' },
                { name: 'Humanities', icon: Users, gradient: 'from-purple-500 to-pink-500', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', description: 'Understanding human culture and society. Students explore history, geography, and civics through debates, model UNs, and heritage walks.' },
                { name: 'Arts & Music', icon: Palette, gradient: 'from-orange-500 to-red-500', image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80', description: 'Fostering creativity and artistic expression. Our students participate in art exhibitions, music recitals, and drama productions. Visiting artists and musicians conduct workshops throughout the year.' },
              ].map((dept, index) => (
                <motion.div 
                  key={dept.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="backdrop-blur-lg bg-white/20 rounded-2xl shadow-2xl border border-white/30 p-8 text-center hover:bg-white/30 transition-all duration-500"
                >
                  <img src={dept.image} alt={dept.name} className="w-full h-32 object-cover rounded-xl mb-4" />
                  <div className={`w-20 h-20 bg-gradient-to-r ${dept.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                    <dept.icon className="w-10 h-10 text-white" />
              </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{dept.name}</h3>
                  <p className="text-gray-600 text-sm">{dept.description}</p>
                </motion.div>
            ))}
          </div>
          </motion.div>
        )}

        {/* Extracurricular Activities */}
        {activeTab === 'activities' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Extracurricular Activities
            </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Clubs & Societies',
                  icon: Users,
                  gradient: 'from-blue-500 to-purple-500',
                  items: ['Debate Club', 'Science Club', 'Literary Society', 'Math Club', 'Environmental Club'],
                  context: 'Our clubs and societies provide students with opportunities to pursue their passions, develop leadership skills, and collaborate with peers. Each club hosts regular meetings, competitions, and community service projects.'
                },
                {
                  title: 'Sports',
                  icon: Dribbble,
                  gradient: 'from-green-500 to-emerald-500',
                  items: ['Football', 'Basketball', 'Athletics', 'Swimming', 'Table Tennis'],
                  context: 'Sports are an integral part of our curriculum. We encourage participation at all levels, from friendly matches to inter-school tournaments. Our coaches focus on teamwork, discipline, and sportsmanship.'
                },
                {
                  title: 'Performing Arts',
                  icon: Music,
                  gradient: 'from-orange-500 to-red-500',
                  items: ['Drama', 'Music', 'Dance', 'Choir', 'Orchestra'],
                  context: 'The performing arts program nurtures talent and confidence. Students perform at school events, local festivals, and competitions. Workshops with professional artists inspire creativity and self-expression.'
                },
              ].map((activity, index) => (
                <motion.div 
                  key={activity.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="backdrop-blur-lg bg-white/20 rounded-2xl shadow-2xl border border-white/30 p-8 hover:bg-white/30 transition-all duration-500"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${activity.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                    <activity.icon className="w-8 h-8 text-white" />
            </div>
                  <h3 className="text-xl font-bold mb-6 text-gray-800">{activity.title}</h3>
                  <ul className="space-y-3">
                    {activity.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-3" />
                        {item}
                      </li>
                    ))}
              </ul>
                  <div className="mt-4 text-gray-600 text-sm">{activity.context}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Academic Calendar */}
        {activeTab === 'calendar' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Academic Calendar
            </motion.h2>
            <div className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
              <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Important Dates</h3>
                  <ul className="space-y-4">
                    {[
                        { date: 'April 1, 2024', event: 'New Academic Session Begins', context: 'Welcome assembly, orientation for new students, and introduction to clubs and activities.' },
                        { date: 'July 15, 2024', event: 'First Term Examinations', context: 'Students are assessed on their progress. Study workshops and counseling sessions are available.' },
                        { date: 'December 1, 2024', event: 'Final Term Examinations', context: 'End-of-year exams followed by parent-teacher meetings and feedback sessions.' },
                        { date: 'March 15, 2025', event: 'Annual Day Celebration', context: 'A grand event with performances, awards, and exhibitions showcasing student achievements.' },
                    ].map((item, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          className="flex flex-col md:flex-row md:items-center p-4 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300"
                        >
                          <Calendar className="w-6 h-6 text-blue-600 mr-4" />
                          <div>
                            <span className="font-semibold text-gray-800">{item.date}:</span>
                            <span className="text-gray-600 ml-2">{item.event}</span>
                            <div className="text-gray-500 text-xs mt-1">{item.context}</div>
                          </div>
                        </motion.li>
                    ))}
                  </ul>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">School Timings</h3>
                  <ul className="space-y-4">
                    {[
                      { day: 'Monday - Friday', time: '8:00 AM - 3:00 PM' },
                      { day: 'Saturday', time: '8:00 AM - 12:00 PM' },
                      { day: 'Extra Classes', time: '3:00 PM - 4:30 PM' },
                      { day: 'Library Hours', time: '8:00 AM - 4:00 PM' },
                    ].map((item, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="flex items-center p-4 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300"
                        >
                          <Clock className="w-6 h-6 text-green-600 mr-4" />
                          <div>
                            <span className="font-semibold text-gray-800">{item.day}:</span>
                            <span className="text-gray-600 ml-2">{item.time}</span>
                          </div>
                        </motion.li>
                    ))}
                  </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Academics;