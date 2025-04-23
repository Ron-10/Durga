import React from 'react';
import HeroSection from '../components/HeroSection';
import OnboardingSection from '../components/OnboardingSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OnboardingSection />
    </div>
  );
};

export default HomePage; 