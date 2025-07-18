import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingNavbar from './components/FloatingNavbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Notices = lazy(() => import('./pages/Notices'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Events = lazy(() => import('./pages/Events'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Academics = lazy(() => import('./pages/Academics'));

function App() {
  const { scaleX } = useSmoothScroll();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#007BFF] origin-left z-50"
          style={{ scaleX }}
        />
        
        <FloatingNavbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex justify-center items-center min-h-[200px]">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/notices" element={<Notices />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/academics" element={<Academics />} />
              
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;