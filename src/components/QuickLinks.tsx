import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  FileText, 
  Calendar, 
  Bus, 
  Book, 
  Users, 
  Phone,
  Mail
} from 'lucide-react';

const quickLinks = [
  {
    title: 'Admission Form',
    icon: Download,
    href: '/downloads/admission-form',
    color: 'text-green-500'
  },
  {
    title: 'Fee Structure',
    icon: FileText,
    href: '/downloads/fee-structure',
    color: 'text-blue-500'
  },
  {
    title: 'Academic Calendar',
    icon: Calendar,
    href: '/academic-calendar',
    color: 'text-purple-500'
  },
  {
    title: 'Transport Routes',
    icon: Bus,
    href: '/transport',
    color: 'text-yellow-500'
  },
  {
    title: 'Library',
    icon: Book,
    href: '/library',
    color: 'text-red-500'
  },
  {
    title: 'Faculty',
    icon: Users,
    href: '/faculty',
    color: 'text-indigo-500'
  }
];

const contactInfo = [
  {
    icon: Phone,
    text: '+1 234 567 890',
    href: 'tel:+1234567890'
  },
  {
    icon: Mail,
    text: 'info@daes.edu',
    href: 'mailto:info@daes.edu'
  }
];

const QuickLinks = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Links</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {quickLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
          >
            <div className={`p-3 rounded-full bg-gray-100 group-hover:scale-110 transition-transform duration-300 ${link.color}`}>
              <link.icon size={20} />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-[#007BFF] text-center">
              {link.title}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-500 mb-4">Quick Contact</h3>
        <div className="space-y-3">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="flex items-center text-gray-600 hover:text-[#007BFF] transition-colors duration-300"
            >
              <info.icon size={16} className="mr-2" />
              <span className="text-sm">{info.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks; 