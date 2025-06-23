import React, { useState } from 'react';
import { Trophy, Search, Download, UserCheck, Sparkles, Medal, Award, Star, TrendingUp, Calendar, Filter, Eye, FileText, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Results = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');

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
            backgroundImage: 'url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
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
              Examination Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Access your academic performance records and celebrate achievements with our comprehensive results portal
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Search Section */}
        <motion.div 
          {...fadeInUp}
          className="mb-20"
        >
          <div className="backdrop-blur-lg bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mr-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Find Your Result</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:col-span-1"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-3">Examination</label>
                <select 
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                >
                  <option value="">Select Term</option>
                  <option value="final">Final Term 2024</option>
                  <option value="mid">Mid Term 2024</option>
                  <option value="first">First Term 2024</option>
                </select>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-1"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-3">Class</label>
                <select 
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                >
                  <option value="">Select Class</option>
                  <option value="10">Class 10</option>
                  <option value="9">Class 9</option>
                  <option value="8">Class 8</option>
                  <option value="7">Class 7</option>
                  <option value="6">Class 6</option>
                </select>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-span-1"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-3">Roll Number</label>
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:col-span-1"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl font-semibold"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Results
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Hall of Fame with Enhanced Design */}
        <motion.div 
          {...fadeInUp}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">🏆 Hall of Fame - Toppers 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Riya Sharma', class: 'Class 10', score: '98.5%', rank: 1, gradient: 'from-yellow-400 to-orange-500', medal: '🥇' },
              { name: 'Aarav Singh', class: 'Class 10', score: '97.8%', rank: 2, gradient: 'from-gray-300 to-gray-500', medal: '🥈' },
              { name: 'Sneha Verma', class: 'Class 10', score: '97.2%', rank: 3, gradient: 'from-amber-600 to-yellow-700', medal: '🥉' },
            ].map((topper, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="backdrop-blur-lg bg-white/20 p-8 rounded-3xl shadow-2xl border border-white/30 text-center hover:bg-white/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10 from-blue-500 to-purple-600"></div>
                <div className="relative">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${topper.gradient} flex items-center justify-center shadow-2xl text-3xl`}>
                    {topper.medal}
                  </div>
                  <div className="text-4xl mb-4">#{topper.rank}</div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{topper.name}</h3>
                  <p className="text-gray-600 mb-4">{topper.class}</p>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${topper.gradient} bg-clip-text text-transparent`}>
                    {topper.score}
                  </div>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Sample Result Card */}
        <motion.div 
          {...fadeInUp}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">📋 Sample Result Card</h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="backdrop-blur-lg bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mr-4">
                    <UserCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Final Term Result 2024</h3>
                    <p className="text-gray-600">Academic Session 2023-24</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Result Status</div>
                  <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    ✅ Published
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/50 p-6 rounded-2xl">
                  <div className="text-sm text-gray-600 mb-1">Student Name</div>
                  <div className="font-bold text-lg text-gray-800">John Doe</div>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl">
                  <div className="text-sm text-gray-600 mb-1">Roll Number</div>
                  <div className="font-bold text-lg text-gray-800">101</div>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl">
                  <div className="text-sm text-gray-600 mb-1">Class</div>
                  <div className="font-bold text-lg text-gray-800">10th Grade</div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white/50 rounded-2xl overflow-hidden">
                  <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">Subject</th>
                      <th className="p-4 text-center font-semibold">Full Marks</th>
                      <th className="p-4 text-center font-semibold">Obtained</th>
                      <th className="p-4 text-center font-semibold">Grade</th>
                      <th className="p-4 text-center font-semibold">GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { subject: 'English', full: 100, obtained: 95, grade: 'A+', gpa: 4.0 },
                      { subject: 'Mathematics', full: 100, obtained: 98, grade: 'A+', gpa: 4.0 },
                      { subject: 'Science', full: 100, obtained: 92, grade: 'A+', gpa: 4.0 },
                      { subject: 'Social Studies', full: 100, obtained: 89, grade: 'A', gpa: 3.75 },
                      { subject: 'Computer Science', full: 100, obtained: 96, grade: 'A+', gpa: 4.0 },
                    ].map((subject, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-white/30 transition-colors">
                        <td className="p-4 font-medium text-gray-800">{subject.subject}</td>
                        <td className="p-4 text-center text-gray-700">{subject.full}</td>
                        <td className="p-4 text-center font-bold text-blue-600">{subject.obtained}</td>
                        <td className="p-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            subject.grade === 'A+' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {subject.grade}
                          </span>
                        </td>
                        <td className="p-4 text-center font-semibold text-purple-600">{subject.gpa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl text-white text-center">
                  <div className="text-sm opacity-90 mb-1">Total Marks</div>
                  <div className="text-2xl font-bold">470/500</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6 rounded-2xl text-white text-center">
                  <div className="text-sm opacity-90 mb-1">Percentage</div>
                  <div className="text-2xl font-bold">94.0%</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-2xl text-white text-center">
                  <div className="text-sm opacity-90 mb-1">Overall Grade</div>
                  <div className="text-2xl font-bold">A+</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Download Section */}
        <motion.div 
          {...fadeInUp}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">📥 Download Result Sheets</h2>
          <div className="grid gap-6">
            {[
              {
                exam: 'Final Term Examination 2024',
                class: 'Class 10',
                date: '2024-03-15',
                status: 'Published',
                students: 150,
                avgScore: '87.5%',
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                exam: 'Mid Term Examination 2024',
                class: 'Class 9',
                date: '2024-02-20',
                status: 'Published',
                students: 145,
                avgScore: '85.2%',
                gradient: 'from-blue-500 to-cyan-600'
              },
              {
                exam: 'First Term Examination 2024',
                class: 'Class 8',
                date: '2024-01-25',
                status: 'Published',
                students: 140,
                avgScore: '83.8%',
                gradient: 'from-purple-500 to-pink-600'
              },
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-lg bg-white/20 p-8 rounded-3xl shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-4 bg-gradient-to-r ${result.gradient} rounded-2xl mr-6`}>
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{result.exam}</h3>
                      <div className="flex items-center gap-6 text-gray-600">
                        <span className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {result.class}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(result.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {result.students} Students
                        </span>
                        <span className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Avg: {result.avgScore}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center px-6 py-3 bg-gradient-to-r ${result.gradient} text-white rounded-2xl hover:shadow-lg transition-all duration-300`}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Guidelines */}
        <motion.div 
          {...fadeInUp}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">📋 Result Guidelines</h2>
          <div className="backdrop-blur-lg bg-white/20 p-10 rounded-3xl shadow-2xl border border-white/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: '🔍',
                  title: 'Search Instructions',
                  text: 'Enter your roll number exactly as it appears on your admit card'
                },
                {
                  icon: '⏰',
                  title: 'Publication Timeline',
                  text: 'Results are typically published within 2 weeks of examination'
                },
                {
                  icon: '📞',
                  title: 'Discrepancy Reporting',
                  text: 'For any discrepancies, contact the examination department within 7 days'
                },
                {
                  icon: '💾',
                  title: 'Record Keeping',
                  text: 'Keep a copy of your result for future reference and applications'
                },
                {
                  icon: '🔒',
                  title: 'Privacy & Security',
                  text: 'Your results are confidential and accessible only with valid credentials'
                },
                {
                  icon: '📱',
                  title: 'Mobile Access',
                  text: 'Results can be accessed from any device with internet connectivity'
                },
              ].map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex items-start p-6 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300"
                >
                  <div className="text-3xl mr-4 flex-shrink-0">{guideline.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{guideline.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{guideline.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          {...fadeInUp}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">📊 Academic Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Students', value: '1,250', icon: Users, gradient: 'from-blue-500 to-cyan-500' },
              { label: 'Pass Percentage', value: '98.5%', icon: TrendingUp, gradient: 'from-green-500 to-emerald-500' },
              { label: 'A+ Grades', value: '425', icon: Award, gradient: 'from-yellow-500 to-orange-500' },
              { label: 'Perfect Scores', value: '28', icon: Star, gradient: 'from-purple-500 to-pink-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-lg bg-white/20 p-8 rounded-3xl shadow-2xl border border-white/30 text-center hover:bg-white/30 transition-all duration-500"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.gradient} p-4 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;