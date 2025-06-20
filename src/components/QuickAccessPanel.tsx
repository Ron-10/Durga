import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickAccessPanel = () => {
  const quickLinks = [
    {
      title: 'Notice Board',
      icon: Bell,
      link: '/notices',
      color: 'bg-red-500',
      items: [
        { text: 'Admission Open for 2081 BS', date: '2024-03-15' },
        { text: 'SEE Examination Schedule', date: '2024-03-20' }
      ]
    },
    {
      title: 'School Calendar',
      icon: Calendar,
      link: '/calendar',
      color: 'bg-blue-500',
      items: [
        { text: 'First Term Examination', date: '2024-04-01' },
        { text: 'Parent-Teacher Meeting', date: '2024-04-15' }
      ]
    },
    {
      title: 'Results & Routine',
      icon: BookOpen,
      link: '/results',
      color: 'bg-green-500',
      items: [
        { text: 'SEE Results 2080', date: '2024-03-25' },
        { text: 'New Class Routine', date: '2024-04-01' }
      ]
    },
    {
      title: 'School Hours',
      icon: Clock,
      link: '/schedule',
      color: 'bg-purple-500',
      items: [
        { text: 'Regular Hours: 10:00 AM - 4:00 PM', date: '' },
        { text: 'Office Hours: 9:00 AM - 5:00 PM', date: '' }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest information about school activities and schedules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${section.color} p-4`}>
                <div className="flex items-center justify-between">
                  <section.icon className="w-6 h-6 text-white" />
                  <Link
                    to={section.link}
                    className="text-white text-sm font-medium hover:text-white/80 transition-colors"
                  >
                    View All
                    <ChevronRight className="w-4 h-4 inline-block ml-1" />
                  </Link>
                </div>
                <h3 className="text-white font-semibold mt-2">{section.title}</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 mr-2"></span>
                      <div>
                        <p className="text-gray-800 text-sm">{item.text}</p>
                        {item.date && (
                          <p className="text-gray-500 text-xs mt-1">
                            {new Date(item.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAccessPanel; 