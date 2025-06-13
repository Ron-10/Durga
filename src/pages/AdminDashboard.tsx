import React from 'react';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  FileText, 
  Settings, 
  BarChart2, 
  Bell, 
  MessageSquare,
  UserPlus,
  LogOut
} from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Bell className="w-5 h-5 mr-2" />
                <span>Notifications</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <LogOut className="w-5 h-5 mr-2" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Users, title: 'Total Students', value: '1,250', change: '+5%' },
            { icon: BookOpen, title: 'Active Courses', value: '25', change: '+2' },
            { icon: Calendar, title: 'Upcoming Events', value: '8', change: '+3' },
            { icon: FileText, title: 'Pending Tasks', value: '12', change: '-4' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <stat.icon className="w-8 h-8 text-[#007BFF] mr-4" />
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <span className="ml-2 text-green-500 text-sm">{stat.change}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: UserPlus, title: 'Add New Student', href: '#' },
                  { icon: BookOpen, title: 'Manage Courses', href: '#' },
                  { icon: Calendar, title: 'Schedule Event', href: '#' },
                  { icon: FileText, title: 'Upload Documents', href: '#' },
                  { icon: MessageSquare, title: 'Send Notifications', href: '#' },
                  { icon: Settings, title: 'System Settings', href: '#' },
                ].map((action, index) => (
                  <button
                    key={index}
                    className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#007BFF] hover:bg-blue-50 transition-colors"
                  >
                    <action.icon className="w-5 h-5 text-[#007BFF] mr-3" />
                    <span className="text-gray-700">{action.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'New Student Registration',
                    time: '2 hours ago',
                    type: 'registration'
                  },
                  {
                    title: 'Course Update',
                    time: '4 hours ago',
                    type: 'update'
                  },
                  {
                    title: 'Event Created',
                    time: '1 day ago',
                    type: 'event'
                  },
                  {
                    title: 'System Maintenance',
                    time: '2 days ago',
                    type: 'maintenance'
                  }
                ].map((activity, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 