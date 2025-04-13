import React from 'react';
import { Bell } from 'lucide-react';

const notices = [
  {
    id: '1',
    title: 'New Academic Session Begins',
    date: '2024-04-01',
  },
  {
    id: '2',
    title: 'Annual Sports Meet Registration',
    date: '2024-03-25',
  },
  {
    id: '3',
    title: 'Parent-Teacher Meeting Schedule',
    date: '2024-03-20',
  },
];

const QuickNotice = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Notices</h2>
          <a
            href="/notices"
            className="text-[#007BFF] hover:text-[#0056b3] font-medium"
          >
            View All
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start">
                <Bell className="text-[#007BFF] mr-4" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {new Date(notice.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickNotice;