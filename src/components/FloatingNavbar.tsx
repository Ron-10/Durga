import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingDock } from './ui/floating-dock';
import { Menu, X, ChevronDown, Home, Info, School, LogIn, BookOpen, Calendar, Contact, FileText, Users, GraduationCap, Trophy, Image } from 'lucide-react';
import {
  IconHome,
  IconInfoCircle,
  IconBook,
  IconSchool,
  IconCalendar,
  IconPhone,
  IconUsers,
} from '@tabler/icons-react';

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { 
      name: 'Academics',
      href: '#',
      icon: School,
      dropdown: [
        { name: 'Academic Programs', href: '/academics', icon: GraduationCap },
        { name: 'Results', href: '/results', icon: Trophy },
        { name: 'Staff', href: '/staff', icon: Users }
      ]
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      icon: LogIn,
    },
    { 
      name: 'Explore',
      href: '#',
      icon: BookOpen,
      dropdown: [
        { name: 'Facilities', href: '/facilities', icon: BookOpen },
        { name: 'Events', href: '/events', icon: Calendar },
        { name: 'Gallery', href: '/gallery', icon: Image }
      ]
    },
    { name: 'Notices', href: '/notices', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Contact },
  ];

  const floatingNavLinks = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white" />,
      href: "/",
    },
    {
      title: "About",
      icon: <IconInfoCircle className="h-full w-full text-white" />,
      href: "/about",
    },
    {
      title: "Academics",
      icon: <IconBook className="h-full w-full text-white" />,
      href: "/academics",
    },
    {
      title: "Admissions",
      icon: <IconSchool className="h-full w-full text-white" />,
      href: "/admissions",
    },
    {
      title: "Events",
      icon: <IconCalendar className="h-full w-full text-white" />,
      href: "/events",
    },
    {
      title: "Contact",
      icon: <IconPhone className="h-full w-full text-white" />,
      href: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-r from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-md shadow-2xl' 
            : 'bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex justify-between items-center h-20 w-full max-w-6xl">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <img src="/logo.png" alt="DAES Logo" className="h-12 w-auto drop-shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 "></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  DAES
                </span>
              </Link>
            </motion.div>

            {/* Desktop Dropdown Menu */}
            <div className="hidden md:block relative group" ref={dropdownRef}>
              <motion.button
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="w-5 h-5" />
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </motion.button>

              <div className="absolute top-full right-0 mt-2 w-72 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-3">
                  {navLinks.map((item, index) => (
                    <div
                      key={item.name}
                      className="group/item relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 ${
                          location.pathname === item.href ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30' : ''
                        }`}
                      >
                        <item.icon className="w-5 h-5 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                        <span className="font-medium">{item.name}</span>
                        {item.dropdown && (
                          <ChevronDown className="w-4 h-4 ml-auto text-gray-400 group-hover/item:text-gray-300 transition-colors" />
                        )}
                      </Link>
                      {item.dropdown && (
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.22, ease: 'easeOut' }}
                              className="w-full bg-gradient-to-br from-gray-800/95 to-gray-700/95 backdrop-blur-md rounded-b-2xl shadow-2xl border-t border-white/10 transition-all duration-300 z-50"
                            >
                              <div className="p-3">
                                {item.dropdown.map((child, childIndex) => (
                                  <div key={child.name}>
                                    <Link
                                      to={child.href}
                                      className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                                    >
                                      <child.icon className="w-4 h-4 text-blue-400 hover:text-blue-300 transition-colors" />
                                      <span className="text-sm font-medium">{child.name}</span>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-blue-300 transition-colors duration-300 p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md shadow-2xl border-t border-white/10"
            >
              <div className="container mx-auto px-4 flex justify-center">
                <div className="py-4 space-y-2 w-full max-w-6xl">
                  {navLinks.map((item, index) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 font-medium ${
                          location.pathname === item.href ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="w-5 h-5 text-blue-400" />
                        <span>{item.name}</span>
                      </Link>
                      {item.dropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-1 space-y-1"
                        >
                          {item.dropdown.map((child, childIndex) => (
                            <motion.div
                              key={child.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: childIndex * 0.05 }}
                            >
                              <Link
                                to={child.href}
                                className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                              >
                                <child.icon className="w-4 h-4 text-blue-400" />
                                <span className="text-sm">{child.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Floating Dock - Bottom Center */}
      <div className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={floatingNavLinks} />
      </div>

      {/* Mobile Floating Dock - Bottom Right */}
      <div className="md:hidden fixed bottom-8 right-8 z-50">
        <FloatingDock 
          items={floatingNavLinks} 
          mobileClassName="translate-y-0"
        />
      </div>
    </>
  );
};

export default FloatingNavbar;
