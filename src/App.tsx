import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Notices from './pages/Notices';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Staff from './pages/Staff';
import Events from './pages/Events';
import Results from './pages/Results';
import Facilities from './pages/Facilities';
import Academics from './pages/Academics';
import StudentPortal from './pages/StudentPortal';
import ParentPortal from './pages/ParentPortal';

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
        
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/events" element={<Events />} />
            <Route path="/results" element={<Results />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/parent-portal" element={<ParentPortal />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;