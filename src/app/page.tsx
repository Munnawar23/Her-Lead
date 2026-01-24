'use client'

import React from 'react'
import SplashScreen from '@/components/ui/SplashScreen'
import HeroSection from './home/_sections/HeroSection'
import AboutSection from './home/_sections/AboutSection'
import ServicesSection from './home/_sections/ServicesSection'
import ServiceCardsSection from './home/_sections/ServiceCardsSection'
import ProcessSection from './home/_sections/ProcessSection'
import TestimonialSection from './home/_sections/TestimonialSection'
import ContentShowcaseSection from './home/_sections/ContentShowcaseSection'
import AwardsPartnersSection from './home/_sections/AwardsPartnersSection'
import Footer from '@/components/ui/Footer'

const RootPage = () => {
  return (
    <main className="relative w-full overflow-hidden">
      <SplashScreen />

      <div className="w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ServiceCardsSection />
        <ProcessSection />
        <TestimonialSection />
        <ContentShowcaseSection />
        <AwardsPartnersSection />
        <Footer />
      </div>
    </main>
  );
};

export default RootPage;
