"use client"
import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { services } from '@/constants/services'

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // High-end Unsplash images for each service
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
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-list",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    // Sticky image reveal
    gsap.from(".image-stage", {
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    })
  }, { scope: containerRef })

  return (
    <section id="services" ref={containerRef} className='min-h-screen w-full bg-background px-6 md:px-12 lg:px-20 pt-10 md:pt-20 pb-20 md:pb-40 flex flex-col items-center overflow-hidden'>
      <div className='mb-16 md:mb-24 text-center overflow-hidden'>
        <h2 className='reveal-text font-heading text-6xl md:text-7xl lg:text-[7vw] text-text leading-[0.8] tracking-tighter uppercase font-black'>
          Services<span className='text-primary'>.</span>
        </h2>
      </div>
      <div className='max-w-full mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20 lg:gap-32 items-start'>
        
        {/* Left Side - Image & Current Service Details */}
        <div className='image-stage lg:sticky lg:top-40 relative order-2 lg:order-1 max-w-sm lg:max-w-md w-full mx-auto lg:mx-0'>
          <div className='w-full aspect-square overflow-hidden rounded-sm bg-black/5 relative z-0'>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={imageSources[index]}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
          
          <div className='mt-6 md:mt-8 space-y-2 relative z-0'>
            <h4 className='font-heading text-sm md:text-base text-text font-black uppercase tracking-tight'>
              {services[hoveredIndex].category}
            </h4>
            <p className='font-body text-xs md:text-sm text-text/50 leading-relaxed'>
              {services[hoveredIndex].description}
            </p>
          </div>
        </div>

        {/* Right Side - Vertical List of Service Names */}
        <div className='services-list space-y-3 md:space-y-4 lg:space-y-6 order-1 lg:order-2 flex flex-col relative z-10'>
            {services.map((service, index) => (
              <div 
                key={service.id}
                className='service-item-row group cursor-pointer inline-block'
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <h3 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5vw] leading-[0.9] font-black tracking-tighter uppercase transition-all duration-500 ${hoveredIndex === index ? 'text-text translate-x-4' : 'text-text/10'}`}>
                  {service.name}
                </h3>
              </div>
            ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
