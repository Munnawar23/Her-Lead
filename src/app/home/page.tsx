import HeroSection from './_sections/HeroSection'
import AboutSection from './_sections/AboutSection'
import ProcessSection from './_sections/ProcessSection'
import ServicesSection from './_sections/ServicesSection'
import TestimonialSection from './_sections/TestimonialSection'
import ContentShowcaseSection from './_sections/ContentShowcaseSection'
import Footer from '@/components/Footer'

const HomePage = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <ContentShowcaseSection />
      <Footer />
    </div>
  )
}

export default HomePage
