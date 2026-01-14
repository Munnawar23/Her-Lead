"use client"
import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { services } from '@/constants/services'
import { useTransition } from '@/components/TransitionProvider'

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const { transitionTo } = useTransition()

  // High-end Unsplash images for each service (Used as fallback/primary if videos missing)
  const imageSources = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop", // PR & Media
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", // Digital Marketing
    "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=1200&auto=format&fit=crop", // Branding
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop", // Corp Training
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop", // Talent
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop", // Digital Exp
  ]

  useGSAP(() => {
    // Reveal project items on scroll
    gsap.from(".service-item-row", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".services-list",
        start: "top 80%",
      }
    })

    // Sticky image reveal
    gsap.from(".image-stage", {
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    })
  }, { scope: containerRef })

  return (
    <section id="services" ref={containerRef} className='min-h-screen w-full bg-background px-6 md:px-12 lg:px-24 pt-10 md:pt-16 pb-20 md:pb-40 flex flex-col items-center overflow-hidden'>
      <div className='w-full mb-16'>
        <span className='block text-xs font-black uppercase tracking-[0.4em] text-primary mb-4'>Our Expertise</span>
        <h2 className='font-heading text-5xl md:text-7xl lg:text-[7vw] text-text leading-[0.8] tracking-tighter uppercase font-black'>
          Services<span className='text-primary'>.</span>
        </h2>
      </div>

      <div className='max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-32 items-start'>
        
        {/* Left Side - Sticky Media Stage */}
        <div className='image-stage lg:sticky lg:top-32 relative order-2 lg:order-1 w-full'>
          <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden transition-all duration-700 ease-out">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-expo ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
              >
                <img
                  src={imageSources[index]}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
              </div>
            ))}
          </div>
          
          <div className='mt-8 space-y-3'>
             <div className="flex items-center gap-4">
                <span className="text-primary font-black text-xs uppercase tracking-widest">0{hoveredIndex + 1}</span>
                <div className="h-px w-8 bg-primary/30" />
                <h4 className='font-heading text-base text-text font-black uppercase tracking-tighter'>
                  {services[hoveredIndex].category}
                </h4>
             </div>
            <p className='text-xs md:text-sm text-text/50 leading-relaxed font-medium max-w-sm'>
              {services[hoveredIndex].description}
            </p>
          </div>
        </div>

        {/* Right Side - Vertical List of Service Names */}
        <div className='services-list space-y-1 md:space-y-2 order-1 lg:order-2 flex flex-col'>
            {services.map((service, index) => (
              <div 
                key={service.id}
                className='service-item-row group cursor-pointer border-b border-text/5 py-4 lg:py-6'
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => transitionTo('/services')}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] leading-none font-black transition-all duration-700 tracking-tighter uppercase ${hoveredIndex === index ? 'text-text translate-x-6 italic' : 'text-text/10'}`}>
                    {service.name}
                  </h3>
                  <div className={`transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
