import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Download, LogIn, BookOpen, Calendar, Image, GraduationCap, Trophy, Users, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Academics',
      href: '#',
      dropdown: [
        { name: 'Academic Programs', href: '/academics', icon: GraduationCap },
        { name: 'Results', href: '/results', icon: Trophy },
        { name: 'Staff', href: '/staff', icon: Users }
      ]
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
    },
    { 
      name: 'Explore',
      href: '#',
      dropdown: [
        { name: 'Facilities', href: '/facilities', icon: BookOpen },
        { name: 'Events', href: '/events', icon: Calendar },
        { name: 'Gallery', href: '/gallery', icon: Image }
      ]
    },
    { name: 'Notices', href: '/notices' },
    { 
      name: 'Portals', 
      href: '#',
      dropdown: [
        { name: 'Student Portal', href: '/student-portal', icon: LogIn },
        { name: 'Parent Portal', href: '/parent-portal', icon: LogIn }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed w-full z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex justify-between items-center h-16 w-full max-w-6xl">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="DAES Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white hover:text-blue-200 transition-colors duration-300">DAES</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`transition-all duration-300 font-medium px-4 py-2 text-sm relative ${
                    location.pathname === item.href 
                      ? 'text-[#007BFF]' 
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="inline-block ml-1 w-3 h-3 transform group-hover:rotate-180 transition-transform duration-300" />
                  )}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                {item.dropdown && (
                  <motion.div 
                    className="absolute top-full left-0 w-44 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-1">
                      {item.dropdown.map((child) => (
                        <motion.div
                          key={child.name}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Link
                            to={child.href}
                            className="flex items-center px-4 py-2 text-sm text-white hover:text-blue-200 hover:bg-white/10 transition-colors duration-300"
                          >
                            <child.icon className="w-4 h-4 mr-2" />
                            {child.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-blue-200 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="md:hidden bg-black/80 backdrop-blur-sm shadow-lg"
          >
            <div className="container mx-auto px-4 flex justify-center">
              <div className="py-2 space-y-1 w-full max-w-6xl">
                {navLinks.map((item, index) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`block px-4 py-2 text-sm text-white hover:text-blue-200 hover:bg-white/10 transition-colors duration-300 font-medium ${
                        location.pathname === item.href ? 'text-[#007BFF] bg-white/10' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4"
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
                              className="flex items-center px-4 py-2 text-sm text-white hover:text-blue-200 hover:bg-white/10 transition-colors duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              <child.icon className="w-4 h-4 mr-2" />
                              {child.name}
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