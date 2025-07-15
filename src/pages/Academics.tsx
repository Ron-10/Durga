import React, { useState } from 'react';
import { BookOpen, Award, Users, Clock, Calendar, GraduationCap, Atom, Palette, Music, Dribbble, Sparkles, ChevronRight, Star, Target, Zap, Brain, Microscope, Globe, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Type definitions
interface Program {
  title: string;
  grades: string;
  image: string;
  description: string;
  subjects: string[];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  stats: { teachers: string; ratio: string };
}

interface Activity {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  items: string[];
  context: string;
  events: number;
}

interface ImportantDate {
  date: string;
  event: string;
  context: string;
  type: 'exam' | 'notice' | 'event';
}

interface SchoolTiming {
  day: string;
  time: string;
  type: 'regular' | 'extra' | 'facility' | 'half';
}

interface ProgramCardProps {
  program: Program;
  [key: string]: any;
}

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

  // Data for academic programs
  const programsData: Program[] = [
    {
      title: 'Preprimary Level',
      grades: 'Nursery, LKG, UKG',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
      description: 'Our preprimary program provides a nurturing and stimulating environment for our youngest learners. Through play-based activities, music, art, and foundational skills, we foster curiosity, social development, and a love for learning.',
      subjects: ['Play & Exploration', 'Music & Movement', 'Art & Craft', 'Storytelling', 'Foundational Literacy', 'Foundational Numeracy'],
      gradient: 'from-yellow-400 to-pink-400',
      icon: Sparkles,
      stats: { teachers: '8', ratio: '15:1' }
    },
    {
      title: 'Primary Level',
      grades: 'Grades 1-5',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      description: 'Our foundational years focus on nurturing curiosity and building core competencies in literacy and numeracy. We create a supportive environment for holistic development through play-based learning, storytelling, and creative arts.',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Languages', 'Arts & Crafts'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: BookOpen,
      stats: { teachers: '18', ratio: '25:1' }
    },
    {
      title: 'Middle Level',
      grades: 'Grades 6-8',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      description: 'We offer an intermediate education that encourages critical thinking and exploration, with a broader range of subjects and co-curricular activities to foster diverse interests and prepare students for advanced learning.',
      subjects: ['Advanced Mathematics', 'Integrated Science', 'Computer Science', 'Literature', 'History', 'Geography'],
      gradient: 'from-purple-500 to-pink-500',
      icon: Target,
      stats: { teachers: '15', ratio: '25:1' }
    },
    {
      title: 'Secondary Level',
      grades: 'Grades 9-10',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      description: 'Our curriculum is designed for in-depth knowledge and preparation for board examinations, with specialized subject tracks to help students pursue their academic goals and career aspirations.',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Advanced Mathematics', 'Computer Science', 'Economics'],
      gradient: 'from-green-500 to-emerald-500',
      icon: GraduationCap,
      stats: { teachers: '16', ratio: '20:1' }
    },
  ];

  const mainPrograms = programsData.slice(0, 3);
  const secondaryProgram = programsData[3];

  const ProgramCard: React.FC<ProgramCardProps> = ({ program, ...props }) => (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
      // OPTIMIZED: Replaced 'transition-all' with specific properties for smoother fallback transitions.
      className="group relative rounded-3xl shadow-2xl border border-white/30 bg-white/80 hover:shadow-3xl transition-[box-shadow] duration-300 overflow-hidden transform-gpu perspective-1000 h-full flex flex-col"
      {...props}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
      <div className="relative h-48 overflow-hidden">
        <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${program.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
          <program.icon className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-3xl font-bold mb-2 text-gray-800">{program.title}</h3>
        <p className={`text-xl font-semibold mb-6 bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>{program.grades}</p>
        <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{program.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center p-3 bg-white/50 rounded-xl">
            <div className="text-2xl font-bold text-gray-800">{program.stats.teachers}</div>
            <div className="text-xs text-gray-600">Teachers</div>
          </div>
          <div className="text-center p-3 bg-white/50 rounded-xl">
            <div className="text-2xl font-bold text-gray-800">{program.stats.ratio}</div>
            <div className="text-xs text-gray-600">Ratio</div>
          </div>
        </div>
        
        <div className="mt-auto">
            <h4 className="font-bold mb-4 text-gray-800 text-lg">Key Subjects:</h4>
            <div className="grid grid-cols-2 gap-3">
              {program.subjects.map((subject: string, idx: number) => (
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
      </div>
    </motion.div>
  );

  const activitiesData: Activity[] = [
    {
      title: 'Sports',
      icon: Dribbble,
      gradient: 'from-green-500 to-emerald-500',
      items: ['Football', 'Basketball', 'Athletics', 'Swimming', 'Table Tennis'],
      context: 'Sports programs focus on teamwork, discipline, and sportsmanship while promoting physical fitness and healthy competition.',
      events: 18
    },
    {
      title: 'Music & Dance',
      icon: Music,
      gradient: 'from-orange-500 to-red-500',
      items: ['Drama', 'Vocal Training', 'Modern Dance', 'Folk Dance', 'Instrumental Music'],
      context: 'Our performing arts program nurtures creativity, builds confidence, and provides platforms for artistic expression and cultural appreciation.',
      events: 15
    },
  ];

  const importantDates: ImportantDate[] = [
    { date: '2025-06-15', event: 'Unit Test Starts', context: 'The first unit tests of the new session will commence.', type: 'exam' },
    { date: '2025-06-24', event: 'First Terminal Exam Routine Published', context: 'The detailed schedule for the first terminal exams is now available.', type: 'notice' },
    { date: '2025-06-29', event: 'First Terminal Exam Starts', context: 'The main terminal examinations begin. Best of luck to all students.', type: 'exam' },
  ];

  const adToBsMap: Record<string, string> = {
    '2025-06-15': '१ असार २०८२',
    '2025-06-24': '१० असार २०८२',
    '2025-06-29': '१५ असार २०८२',
  };

  const schoolTimings: SchoolTiming[] = [
      { day: 'Sunday - Friday', time: '8:00 AM - 3:00 PM', type: 'regular' },
      { day: 'Extra Classes', time: '3:00 PM - 4:30 PM', type: 'extra' },
      { day: 'Library Hours', time: '8:00 AM - 4:00 PM', type: 'facility' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
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
              { id: 'activities', label: 'Activities', icon: Zap, gradient: 'from-orange-500 to-red-500' },
              { id: 'calendar', label: 'Calendar', icon: Calendar, gradient: 'from-indigo-500 to-purple-500' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                // OPTIMIZED: Replaced 'transition-all' with specific properties.
                className={`flex items-center px-8 py-4 rounded-2xl font-semibold transition-[background-color,color,box-shadow] duration-300 relative overflow-hidden ${
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
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {mainPrograms.map((program) => (
                    <ProgramCard key={program.title} program={program} />
                  ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <div className="w-full lg:w-2/5">
                      <ProgramCard program={secondaryProgram} />
                    </div>
                </div>
              </motion.div>
            </motion.div>
          )}

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
                   // OPTIMIZED: Replaced 'transition-all' with specific properties.
                   className="backdrop-blur-xl bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-colors duration-300 relative overflow-hidden"
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
                         { title: 'Student-Centric Learning', description: 'Interactive classrooms designed to foster discussion, curiosity, and active participation with real-life examples.', icon: '🎯' },
                         { title: 'Project-Based Learning', description: 'Students engage in science experiments, art projects, and group presentations with annual exhibitions.', icon: '🔬' },
                         { title: 'Continuous Assessment', description: 'Comprehensive evaluation through quizzes, assignments, and peer reviews with constructive feedback.', icon: '📊' },
                         { title: 'Personalized Attention', description: 'Small class sizes and regular one-on-one sessions ensure every student receives individual guidance.', icon: '👥' },
                         { title: 'Technology Integration', description: 'Interactive whiteboards, educational apps, and coding from early age for digital literacy.', icon: '💻' }
                       ].map((method, index) => (
                         <motion.div 
                           key={index}
                           initial={{ opacity: 0, x: -30 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                           whileHover={{ scale: 1.02, x: 10 }}
                           // OPTIMIZED: Replaced 'transition-all' with specific properties.
                           className="flex items-start p-4 bg-white/30 rounded-2xl hover:bg-white/50 transition-colors duration-300"
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
                   // OPTIMIZED: Replaced 'transition-all' with specific properties.
                   className="backdrop-blur-xl bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-colors duration-300 relative overflow-hidden"
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
                         { title: 'Continuous Evaluation (CCE)', description: 'Comprehensive assessment process throughout the academic year', percentage: 90 },
                         { title: 'Formative Assessments', description: 'Regular quizzes, assignments, and interactive evaluations', percentage: 85 },
                         { title: 'Summative Assessments', description: 'Term-end examinations and comprehensive evaluations', percentage: 95 },
                         { title: 'Practical Evaluations', description: 'Hands-on project work and laboratory assessments', percentage: 88 },
                         { title: 'Parent-Teacher Meetings', description: 'Regular discussions about student progress and development', percentage: 92 }
                       ].map((item, index) => (
                         <motion.div 
                           key={index}
                           initial={{ opacity: 0, x: 30 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                           // OPTIMIZED: Replaced 'transition-all' with specific properties.
                           className="p-4 bg-white/30 rounded-2xl hover:bg-white/50 transition-colors duration-300"
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
                className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
              >
                {activitiesData.map((activity) => (
                  <motion.div 
                    key={activity.title}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                    // OPTIMIZED: Replaced 'transition-all' with specific properties.
                    className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-colors duration-300 overflow-hidden transform-gpu perspective-1000"
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
                      
                      <div className="text-center p-3 bg-white/50 rounded-xl mb-6">
                          <div className="text-2xl font-bold text-gray-800">{activity.events}+</div>
                          <div className="text-xs text-gray-600">Events/Year</div>
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
                      <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Important Dates for 2081/82</h3>
                      <div className="space-y-6">
                        {importantDates.map((item, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            // OPTIMIZED: Replaced 'transition-all' with specific properties.
                            className="p-6 bg-white/50 rounded-2xl hover:bg-white/70 transition-colors duration-300 border-l-4 border-blue-500"
                          >
                            <div className="flex items-start">
                              <Calendar className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <span className="font-bold text-gray-800 text-lg">{item.event}</span>
                                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    item.type === 'exam' ? 'bg-red-100 text-red-800' :
                                    item.type === 'event' ? 'bg-green-100 text-green-800' :
                                    item.type === 'notice' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-blue-100 text-blue-800'
                                  }`}>
                                    {item.type.toUpperCase()}
                                  </span>
                                </div>
                                <div className="text-blue-600 font-medium mb-2">
                                  {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} ({adToBsMap[item.date]})
                                </div>
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
                        {schoolTimings.map((item, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.02, x: -10 }}
                            // OPTIMIZED: Replaced 'transition-all' with specific properties.
                            className="p-6 bg-white/50 rounded-2xl hover:bg-white/70 transition-colors duration-300 border-l-4 border-green-500"
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
