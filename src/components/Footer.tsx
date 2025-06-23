import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Clock, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/icons/logobg.png" alt="DAES Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DAES</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing quality education since 1998. We nurture young minds for academic excellence and character development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-gray-600 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                About Us
              </a></li>
              <li><a href="/academics" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                Academics
              </a></li>
              <li><a href="/admissions" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                Admissions
              </a></li>
              <li><a href="/facilities" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                Facilities
              </a></li>
              <li><a href="/events" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                Events
              </a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                Gallery
              </a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span>123 School Street, City, State 12345</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>info@daes.edu</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>Mon-Fri: 8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Globe className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>www.daes.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex justify-center">
          <div className="max-w-md w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <form className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900 bg-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-r-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DAES. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;