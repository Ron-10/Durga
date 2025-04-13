import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const events = [
  {
    id: '1',
    title: 'Annual Sports Day',
    date: '2024-04-15',
    time: '9:00 AM',
    location: 'School Ground',
    description: 'Join us for our annual sports day featuring various athletic competitions and team events.',
    imageUrl: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Sports',
  },
  {
    id: '2',
    title: 'Science Exhibition',
    date: '2024-04-20',
    time: '10:00 AM',
    location: 'School Auditorium',
    description: 'Students showcase their innovative science projects and experiments.',
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    category: 'Academic',
  },
  {
    id: '3',
    title: 'Cultural Program',
    date: '2024-05-01',
    time: '2:00 PM',
    location: 'School Hall',
    description: 'A celebration of diverse cultural performances by our talented students.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'Cultural',
  },
];

const Events = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">School Events</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Search events..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                <option value="">All Categories</option>
                <option value="sports">Sports</option>
                <option value="academic">Academic</option>
                <option value="cultural">Cultural</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                <option value="">All Time</option>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm">
                      {event.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-[#007BFF]" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-[#007BFF]" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#007BFF]" />
                      {event.location}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <button className="inline-flex items-center px-4 py-2 bg-[#007BFF] text-white rounded-full hover:bg-[#0056b3] transition-colors duration-200">
                      <Users className="w-4 h-4 mr-2" />
                      Register Now
                    </button>
                    <a
                      href={`/events/${event.id}`}
                      className="text-[#007BFF] hover:text-[#0056b3] font-medium"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
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

export default Events;