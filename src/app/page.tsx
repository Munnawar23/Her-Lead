'use client'

import React from 'react'
import SplashScreen from '@/components/ui/SplashScreen'
import HeroSection from './home/_sections/HeroSection'
import AboutSection from './home/_sections/AboutSection'
import ServiceDiscovery from './home/_sections/ServiceDiscovery'
import ServicesSection from './home/_sections/ServicesSection'
import ProcessSection from './home/_sections/ProcessSection'
import TestimonialSection from './home/_sections/TestimonialSection'
import BlogsSection from './home/_sections/BlogsSection'
import PartnersSection from './home/_sections/PartnersSection'
import Footer from '@/components/ui/Footer'

const RootPage = () => {
  return (
    <main className="relative w-full overflow-hidden">
      <SplashScreen />

      <div className="w-full">
        <HeroSection />
        <AboutSection />
        <ServiceDiscovery />
        <ServicesSection />
        <ProcessSection />
        <TestimonialSection />
        <BlogsSection />
        <PartnersSection />
        <Footer />
      </div>
    </main>
  );
};

export default RootPage;
