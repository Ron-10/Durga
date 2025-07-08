import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingDock } from './ui/floating-dock';
import { Menu, X, ChevronDown, Home, Info, School, LogIn, BookOpen, Calendar, Contact, FileText, Users, GraduationCap, Trophy, Image, ArrowUp } from 'lucide-react';
import {
  IconHome,
  IconInfoCircle,
  IconBook,
  IconSchool,
  IconCalendar,
  IconPhone,
} from '@tabler/icons-react';

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Your scroll logic here
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
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
      href: '/academics',
      icon: School,
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      icon: LogIn,
    },
    
    { name: 'Notices', href: '/notices', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Contact },
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
  ];

  const floatingNavLinks = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "/" },
    { title: "About", icon: <IconInfoCircle className="h-full w-full" />, href: "/about" },
    { title: "Academics", icon: <IconBook className="h-full w-full" />, href: "/academics" },
    { title: "Admissions", icon: <IconSchool className="h-full w-full" />, href: "/admissions" },
    { title: "Events", icon: <IconCalendar className="h-full w-full" />, href: "/events" },
    { title: "Contact", icon: <IconPhone className="h-full w-full" />, href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll-to-top handler
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href="#scroll-to-top"]')) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed w-full z-50 transition-all duration-500 bg-white shadow"
      >
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex justify-between items-center h-18 w-full max-w-7xl">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative p-1.5 rounded-full bg-whi/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                  <img src="/icons/logo.png" alt="DAES Logo" className="h-14 w-14 rounded-full object-cover scale-125" />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Dropdown Menu */}
            <div className="hidden md:block relative group" ref={dropdownRef}>
              <motion.button
                className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full border border-blue-300 text-blue-900 hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="w-5 h-5" />
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </motion.button>

              <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  {navLinks.map((item) => (
                    <div
                      key={item.name}
                      className="group/item relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-800 hover:bg-blue-50 transition-all duration-300 ${location.pathname === item.href ? 'bg-blue-100 text-blue-700' : ''}`}
                      >
                        <item.icon className="w-5 h-5 text-blue-500" />
                        <span className="font-medium text-sm">{item.name}</span>
                        {item.dropdown && (
                          <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
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
                              className="w-full pl-5"
                            >
                              <div className="py-2">
                                {item.dropdown.map((child) => (
                                  <div key={child.name}>
                                    <Link
                                      to={child.href}
                                      className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 transition-all duration-300 ${location.pathname === child.href ? 'bg-blue-100 text-blue-700' : ''}`}
                                    >
                                      <child.icon className="w-4 h-4 text-blue-500" />
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
              className="md:hidden text-gray-800 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full bg-white/50 border"
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
              className="md:hidden bg-white shadow-lg border-t border-gray-100"
            >
              <div className="container mx-auto px-4 flex justify-center">
                <div className="py-4 space-y-1 w-full max-w-7xl">
                  {navLinks.map((item, index) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-800 hover:bg-blue-50 transition-all duration-300 font-medium ${
                          location.pathname === item.href ? 'bg-blue-100 text-blue-700' : ''
                        }`}
                        onClick={() => {
                          if (!item.dropdown) setIsOpen(false);
                          else {
                            setOpenDropdown(openDropdown === item.name ? null : item.name);
                          }
                        }}
                      >
                        <item.icon className="w-5 h-5 text-blue-500" />
                        <span>{item.name}</span>
                      </Link>
                      {item.dropdown && openDropdown === item.name && (
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
                                className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-100 transition-all duration-300 ${location.pathname === child.href ? 'bg-blue-100 text-blue-600' : ''}`}
                                onClick={() => setIsOpen(false)}
                              >
                                <child.icon className="w-4 h-4 text-blue-500" />
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

      {/* Floating Dock Components */}
      <div className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={floatingNavLinks.map(link => ({...link, icon: React.cloneElement(link.icon, { className: 'h-full w-full text-white' }) }))} />
      </div>
      <div className="md:hidden fixed bottom-8 right-8 z-50">
        <FloatingDock 
          items={floatingNavLinks.map(link => ({...link, icon: React.cloneElement(link.icon, { className: 'h-full w-full text-white' }) }))} 
          mobileClassName="translate-y-0"
        />
      </div>
    </>
  );
};

export default FloatingNavbar;