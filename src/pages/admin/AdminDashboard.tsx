import React from 'react';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  FileText, 
  Award, 
  Bell, 
  Settings, 
  BarChart2, 
  MessageSquare,
  ChevronRight,
  UserPlus,
  Book,
  Clock,
  DollarSign,
  Library
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Students', value: '1,234', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { title: 'Total Teachers', value: '45', icon: UserPlus, color: 'bg-green-100 text-green-600' },
    { title: 'Active Classes', value: '12', icon: Book, color: 'bg-purple-100 text-purple-600' },
    { title: 'Today\'s Attendance', value: '98%', icon: Clock, color: 'bg-yellow-100 text-yellow-600' },
  ];

  const quickActions = [
    {
      title: 'Student Management',
      icon: Users,
      description: 'Manage student records and profiles',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Teacher Management',
      icon: UserPlus,
      description: 'Manage teacher profiles and assignments',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Class Management',
      icon: BookOpen,
      description: 'Manage classes and schedules',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Attendance',
      icon: Calendar,
      description: 'Track and manage attendance',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Examinations',
      icon: Award,
      description: 'Manage exams and results',
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Fee Management',
      icon: DollarSign,
      description: 'Manage fees and payments',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: 'Library',
      icon: Library,
      description: 'Manage library resources',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'Communications',
      icon: MessageSquare,
      description: 'Manage announcements and messages',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      title: 'Reports',
      icon: BarChart2,
      description: 'View and generate reports',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Settings',
      icon: Settings,
      description: 'System settings and configuration',
      color: 'bg-gray-100 text-gray-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span className="text-gray-700">Admin</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New student registration</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-medium">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 