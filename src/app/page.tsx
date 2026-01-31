'use client'

import React, { useState } from 'react'
import SplashScreen from '@/components/ui/SplashScreen'
import HeroSection from './home/_sections/HeroSection'
import AboutSection from './home/_sections/AboutSection'
import ServiceDiscovery from './home/_sections/ServiceDiscovery'
import ServicesSection from './home/_sections/ServicesSection'
import ProcessSection from './home/_sections/ProcessSection'
import TestimonialSection from './home/_sections/TestimonialSection'
import BlogsSection from './home/_sections/BlogsSection'
import PartnersSection from './home/_sections/PartnersSection'

const RootPage = () => {
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  return (
    <main className="relative w-full overflow-hidden">
      <SplashScreen onComplete={() => setIsSplashFinished(true)} />

      <div className="w-full">
        <HeroSection isSplashFinished={isSplashFinished} />
        <AboutSection />
        <ServiceDiscovery />
        <ServicesSection />
        <TestimonialSection />
        <ProcessSection />
        <BlogsSection />
        <PartnersSection />
      </div>
    </main>
  );
};

export default RootPage;
