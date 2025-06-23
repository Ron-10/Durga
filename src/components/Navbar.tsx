import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Download, LogIn, BookOpen, Calendar, Image, GraduationCap, Trophy, Users, FileText, Home, Info, School, Contact, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

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
    { 
      name: 'Portals', 
      href: '#',
      icon: LogIn,
      dropdown: [
        { name: 'Student Portal', href: '/student-portal', icon: LogIn },
        { name: 'Parent Portal', href: '/parent-portal', icon: LogIn }
      ]
    },
    { name: 'Contact', href: '/contact', icon: Contact },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed w-full z-50 transition-all duration-500 bg-transparent"
    >
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex justify-between items-center h-32 w-full max-w-6xl">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative p-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                <img src="/icons/logobg.png" alt="DAES Logo" className="h-24 w-24 rounded-full object-cover" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Dropdown Menu */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            <motion.button
              onClick={() => setActiveDropdown(activeDropdown === 'menu' ? null : 'menu')}
              className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full border border-white-300 text-gray-900 hover:bg-white-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Menu</span>
              <ChevronDown className={`w-4 h-4 text-blue-500 transition-transform duration-300 ${activeDropdown === 'menu' ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {activeDropdown === 'menu' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-white backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                >
                  <div className="p-2">
                    {navLinks.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-900 hover:bg-white transition-all duration-300 group ${
                            location.pathname === item.href ? 'bg-white' : ''
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <item.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                          <span className="font-medium">{item.name}</span>
                          {item.dropdown && (
                            <ChevronDown className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gray-300 transition-colors" />
                          )}
                        </Link>
                        
                        {item.dropdown && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-8 mt-1 space-y-1"
                          >
                            {item.dropdown.map((child, childIndex) => (
                              <motion.div
                                key={child.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: childIndex * 0.03 }}
                              >
                                <Link
                                  to={child.href}
                                  className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-300 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <child.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                  <span className="text-sm">{child.name}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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

          {/* Dark Mode Toggle Button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white hover:bg-blue-600/30 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
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
            className="md:hidden bg-white backdrop-blur-md shadow-2xl border-t border-white/10"
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
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-900 hover:bg-white transition-all duration-300 font-medium ${
                        location.pathname === item.href ? 'bg-white' : ''
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
                              className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-300"
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
  );
};

export default Navbar;