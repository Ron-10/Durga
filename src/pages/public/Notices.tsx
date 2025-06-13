import React from 'react';
import { Bell, Calendar, Clock } from 'lucide-react';

const notices = [
  {
    id: '1',
    title: 'New Academic Session Begins',
    date: '2024-04-01',
    category: 'Academic',
    content: 'The new academic session for 2024-25 will begin from April 1st, 2024. All students are required to attend the orientation program.',
  },
  {
    id: '2',
    title: 'Annual Sports Meet Registration',
    date: '2024-03-25',
    category: 'Sports',
    content: 'Registration for the Annual Sports Meet is now open. Students interested in participating should register with their respective class teachers.',
  },
  {
    id: '3',
    title: 'Parent-Teacher Meeting Schedule',
    date: '2024-03-20',
    category: 'Meeting',
    content: 'Parent-Teacher meetings will be held on March 20th, 2024. The schedule for different classes will be shared via email.',
  },
  {
    id: '4',
    title: 'Science Exhibition',
    date: '2024-03-15',
    category: 'Event',
    content: 'Annual Science Exhibition will be held on March 15th, 2024. Students from grades 6-10 can participate by submitting their project proposals.',
  },
  {
    id: '5',
    title: 'Holiday Notice',
    date: '2024-03-10',
    category: 'Holiday',
    content: 'The school will remain closed on March 10th, 2024, on account of Holi festival. Classes will resume on March 11th, 2024.',
  },
];

const Notices = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">School Notices</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Search notices..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                <option value="">All Categories</option>
                <option value="academic">Academic</option>
                <option value="sports">Sports</option>
                <option value="event">Event</option>
                <option value="holiday">Holiday</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                <option value="">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notices Grid */}
        <div className="grid gap-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <Bell className="w-5 h-5 text-[#007BFF] mr-2" />
                  <h3 className="text-xl font-bold">{notice.title}</h3>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="inline-flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(notice.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="inline-flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(notice.date).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm">
                  {notice.category}
                </span>
              </div>
              <p className="text-gray-600">{notice.content}</p>
              <div className="mt-4">
                <button className="text-[#007BFF] hover:text-[#0056b3] font-medium transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 border rounded-md ${
                  page === 1
                    ? 'bg-[#007BFF] text-white border-[#007BFF]'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Notices;