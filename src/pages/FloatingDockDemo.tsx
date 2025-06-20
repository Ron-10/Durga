import React from 'react';
import FloatingDockDemo from '../components/ui/floating-dock-demo';

const FloatingDockDemoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
          Floating Dock Navigation
        </h1>
        <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-lg">
          This is a demonstration of the floating dock navigation component positioned at the top. 
          The dock uses the website's blue color scheme (#007BFF) and provides quick access to key pages.
        </p>
        
        {/* Demo floating dock positioned at top */}
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
          <FloatingDockDemo />
        </div>
        
        <div className="mt-32">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Top Positioned</h3>
              <p className="text-blue-100">Floating dock is now positioned at the top of the screen for better accessibility</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Website Colors</h3>
              <p className="text-blue-100">Uses the website's primary blue color (#007BFF) for consistency</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Responsive Design</h3>
              <p className="text-blue-100">Adapts to different screen sizes with mobile-optimized layout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingDockDemoPage; 