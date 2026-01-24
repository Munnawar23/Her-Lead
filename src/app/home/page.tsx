import HeroSection from './_sections/HeroSection'
import AboutSection from './_sections/AboutSection'
import ServicesSection from './_sections/ServicesSection'
import ServiceCardsSection from './_sections/ServiceCardsSection'
import ProcessSection from './_sections/ProcessSection'
import TestimonialSection from './_sections/TestimonialSection'
import ContentShowcaseSection from './_sections/ContentShowcaseSection'
import AwardsPartnersSection from './_sections/AwardsPartnersSection'
import Footer from '@/components/ui/Footer'

const HomePage = () => {
  return (
    <div className='w-full'>
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
  )
}

export default HomePage
