import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Download, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      name: 'Admissions', 
      href: '/admissions',
    },
    { name: 'Notices', href: '/notices' },
    { name: 'Gallery', href: '/gallery' },
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex justify-between items-center h-16 w-full max-w-6xl">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="DAES Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-[#007BFF]">DAES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-gray-700 hover:text-[#007BFF] transition-colors duration-300 font-medium px-4 py-2 text-sm ${
                    location.pathname === item.href ? 'text-[#007BFF]' : ''
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="inline-block ml-1 w-3 h-3 transform group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-44 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-1">
                      {item.dropdown.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#007BFF] hover:bg-blue-50 transition-colors duration-300"
                        >
                          <child.icon className="w-4 h-4 mr-2" />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-[#007BFF] transition-colors duration-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", display: "block" },
          closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-lg"
      >
        <div className="container mx-auto px-4 flex justify-center">
          <div className="py-2 space-y-1 w-full max-w-6xl">
            {navLinks.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:text-[#007BFF] hover:bg-blue-50 transition-colors duration-300 font-medium ${
                    location.pathname === item.href ? 'text-[#007BFF] bg-blue-50' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      closed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    className="pl-4"
                  >
                    {item.dropdown.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-[#007BFF] hover:bg-blue-50 transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <child.icon className="w-4 h-4 mr-2" />
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;