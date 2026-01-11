import React from 'react'
import HeroSection from './_sections/HeroSection'
import AboutSection from './_sections/AboutSection'
import ServicesSection from './_sections/ServicesSection'
import PRSection from './_sections/PRSection'
import TestimonialSection from './_sections/TestimonialSection'
import ContactSection from './_sections/ContactSection'

const HomePage = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PRSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
