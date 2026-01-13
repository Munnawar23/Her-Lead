import React from 'react'
import HeroSection from './_sections/HeroSection'
import AboutSection from './_sections/AboutSection'
import VisionSection from './_sections/VisionSection'
import ProcessSection from './_sections/ProcessSection'
import ServicesSection from './_sections/ServicesSection'
import PRSection from './_sections/PRSection'
import TestimonialSection from './_sections/TestimonialSection'
import ContactSection from './_sections/ContactSection'
import Footer from '@/components/Footer'

const HomePage = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <ProcessSection />
      <PRSection />
      <Footer />
    </div>
  )
}

export default HomePage
