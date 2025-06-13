import React from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  Award, 
  Bell, 
  MessageSquare,
  ChevronRight,
  Clock,
  CheckCircle,
  DollarSign,
  Settings,
  Book,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';

const ParentDashboard = () => {
  const stats = [
    { title: 'Child\'s GPA', value: '3.8', icon: Award, color: 'bg-blue-100 text-blue-600' },
    { title: 'Attendance', value: '95%', icon: CheckCircle, color: 'bg-green-100 text-green-600' },
    { title: 'Fee Status', value: 'Paid', icon: DollarSign, color: 'bg-purple-100 text-purple-600' },
    { title: 'Pending Notices', value: '2', icon: Bell, color: 'bg-yellow-100 text-yellow-600' },
  ];

  const quickActions = [
    {
      title: 'Child\'s Progress',
      icon: Award,
      description: 'View academic progress and grades',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Attendance',
      icon: Clock,
      description: 'View attendance records',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Fee Payment',
      icon: DollarSign,
      description: 'View and pay school fees',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Class Schedule',
      icon: Calendar,
      description: 'View child\'s class schedule',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Assignments',
      icon: FileText,
      description: 'View child\'s assignments',
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Teachers',
      icon: User,
      description: 'View teacher information',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: 'Messages',
      icon: MessageSquare,
      description: 'Communicate with teachers',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'Settings',
      icon: Settings,
      description: 'Manage your profile',
      color: 'bg-gray-100 text-gray-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span className="text-gray-700">Parent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors group"
              >
                <div className={`inline-flex p-3 rounded-lg mb-3 ${action.color}`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{action.description}</p>
                <button className="text-blue-600 text-sm font-medium flex items-center">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Child's Schedule */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Child's Schedule</h2>
          <div className="space-y-4">
            {[
              { time: '8:00 AM', subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 101' },
              { time: '9:30 AM', subject: 'Science', teacher: 'Ms. Johnson', room: 'Lab 2' },
              { time: '11:00 AM', subject: 'English', teacher: 'Mr. Brown', room: 'Room 103' },
              { time: '1:00 PM', subject: 'History', teacher: 'Ms. Davis', room: 'Room 104' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">{item.time}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.subject}</p>
                    <p className="text-xs text-gray-500">{item.teacher} • {item.room}</p>
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-medium">View Details</button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Notices */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Notices</h2>
          <div className="space-y-4">
            {[
              { title: 'Parent-Teacher Meeting', date: 'Tomorrow', type: 'Meeting' },
              { title: 'School Holiday Notice', date: 'Next Week', type: 'Announcement' },
              { title: 'Fee Payment Reminder', date: 'Due in 3 days', type: 'Reminder' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">Date: {item.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.type === 'Meeting' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'Announcement' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.type}
                  </span>
                  <button className="text-blue-600 text-sm font-medium">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard; 