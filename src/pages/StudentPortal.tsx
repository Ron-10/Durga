import React from 'react';
import { LogIn, BookOpen, Calendar, FileText, Award, Users } from 'lucide-react';

const StudentPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Portal</h1>
          <p className="text-xl text-gray-600">Access your academic information and resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Login Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <LogIn className="w-6 h-6 text-[#007BFF] mr-2" />
              <h2 className="text-xl font-bold">Login</h2>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                />
              </div>
              <button className="w-full bg-[#007BFF] text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                Login
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <div className="space-y-3">
              {[
                { icon: BookOpen, text: 'Class Schedule', href: '#' },
                { icon: Calendar, text: 'Academic Calendar', href: '#' },
                { icon: FileText, text: 'Study Materials', href: '#' },
                { icon: Award, text: 'Results', href: '/results' },
                { icon: Users, text: 'Faculty Directory', href: '/staff' },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center p-3 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <link.icon className="w-5 h-5 text-[#007BFF] mr-3" />
                  <span className="text-gray-700">{link.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Announcements</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Mid-term Examination Schedule',
                  date: '2024-04-15',
                  category: 'Academic'
                },
                {
                  title: 'Science Fair Registration',
                  date: '2024-04-20',
                  category: 'Event'
                },
                {
                  title: 'Library Hours Update',
                  date: '2024-04-10',
                  category: 'Notice'
                }
              ].map((announcement, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span>{new Date(announcement.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{announcement.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal; 