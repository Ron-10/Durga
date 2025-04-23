import React, { useState } from 'react';
import { LogIn, Book, Calendar, FileText, Award, Users, ChevronRight, Lock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#007BFF] py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Portal</h1>
            <p className="text-xl text-blue-100">Access your academic information and resources</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Login Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <LogIn className="w-8 h-8 text-[#007BFF]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Login to Your Account</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition-colors"
                  placeholder="Enter your student ID"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition-colors"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#007BFF] text-white py-3 px-4 rounded-lg hover:bg-[#0056b3] transition-colors duration-200 flex items-center justify-center"
            >
              <span>Login</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        </motion.div>

        {/* Quick Access Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Academic Records',
              icon: Book,
              description: 'View your grades and academic progress',
              color: 'bg-blue-100 text-blue-600'
            },
            {
              title: 'Class Schedule',
              icon: Calendar,
              description: 'Check your daily class schedule',
              color: 'bg-green-100 text-green-600'
            },
            {
              title: 'Assignments',
              icon: FileText,
              description: 'View and submit assignments',
              color: 'bg-purple-100 text-purple-600'
            },
            {
              title: 'Results',
              icon: Award,
              description: 'Check your examination results',
              color: 'bg-yellow-100 text-yellow-600'
            },
            {
              title: 'Teachers',
              icon: Users,
              description: 'View teacher contact information',
              color: 'bg-red-100 text-red-600'
            },
            {
              title: 'Library',
              icon: Book,
              description: 'Access library resources',
              color: 'bg-indigo-100 text-indigo-600'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#007BFF] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentPortal; 