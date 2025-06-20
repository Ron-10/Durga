import React from 'react';
import { BookOpen, LampDesk as Desktop, Dumbbell, FlaskRound as Flask, Library, Bus, Utensils, ChevronFirst as FirstAid } from 'lucide-react';

const facilities = [
  {
    icon: Library,
    title: 'Modern Library & Resource Center',
    description: 'Our extensive library offers a vast collection of books, academic journals, and digital resources to support research and reading for all age groups.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    icon: Desktop,
    title: 'State-of-the-Art Computer Labs',
    description: 'Equipped with the latest hardware and software, our computer labs provide students with the necessary tools to excel in a digital world.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    icon: Flask,
    title: 'Advanced Science Laboratories',
    description: 'We have well-equipped and spacious physics, chemistry, and biology labs that provide students with hands-on learning experiences.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    icon: Dumbbell,
    title: 'Comprehensive Sports Facilities',
    description: 'Our campus features multiple sports courts, a large playground, and indoor facilities to promote physical fitness and sportsmanship.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    icon: Bus,
    title: 'Safe & Secure Transportation',
    description: 'We offer a reliable and comfortable transportation service with a fleet of buses covering all major routes in the city.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    icon: Utensils,
    title: 'Hygienic School Cafeteria',
    description: 'Our on-campus cafeteria serves a variety of fresh, nutritious, and hygienically prepared meals and refreshments.',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
  },
  {
    icon: FirstAid,
    title: 'On-Campus Medical Room',
    description: 'A well-equipped medical room with a qualified nurse is available to provide first aid and attend to any medical needs.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1828&q=80',
  },
  {
    icon: BookOpen,
    title: 'Interactive Smart Classrooms',
    description: 'Our classrooms are equipped with interactive whiteboards and audio-visual aids to make learning more engaging and effective.',
    image: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
];

const Facilities = () => {
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
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold text-white">Our Facilities</h1>
            <p className="mt-2 text-lg text-gray-200 max-w-3xl mx-auto">
              Discover our state-of-the-art facilities, designed to provide a safe, comfortable, and stimulating environment for learning and growth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            World-Class Facilities for Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide state-of-the-art facilities to ensure our students have the best possible
            learning environment. Our infrastructure is designed to support both academic excellence
            and personal growth.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <facility.icon className="w-6 h-6 text-[#007BFF]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Facility Usage Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">General Rules</h4>
              <ul className="space-y-3">
                {[
                  'Facilities are available during school hours',
                  'Proper care of equipment is mandatory',
                  'Follow safety guidelines at all times',
                  'Report any damages immediately',
                ].map((rule, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Booking & Access</h4>
              <ul className="space-y-3">
                {[
                  'Book sports facilities in advance',
                  'Library cards are mandatory for borrowing',
                  'Computer lab usage requires scheduling',
                  'Cafeteria operates during designated hours',
                ].map((rule, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;