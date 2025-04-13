import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+977 1234567890',
    link: 'tel:+9771234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@daes.edu.np',
    link: 'mailto:info@daes.edu.np',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Kathmandu, Nepal',
    link: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: 'Sun-Fri: 9:00 AM - 4:00 PM',
    link: null,
  },
];

const Contact = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            We're here to help and answer any questions you might have
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                <info.icon className="w-6 h-6 text-[#007BFF]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-[#007BFF] hover:text-[#0056b3] transition-colors duration-200"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-gray-600">{info.details}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2604419934!2d85.3103!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTgnMzcuMSJF!5e0!3m2!1sen!2snp!4v1635000000000!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;