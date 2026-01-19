"use client"
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { services } from '@/constants/services'

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState(0)

  // Human-friendly service names (UI only)
  const serviceDisplayNames = [
    "Public Relations",
    "Digital Marketing",
    "Brand Identity",
    "Corporate Training",
    "Talent & Careers",
    "Web & Digital Experience",
  ]

  const imageSources = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
  ]

  useGSAP(() => {
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
  <section
  id="services"
  ref={containerRef}
  // Added mt-32 md:mt-48 for external gap, kept pt-20 for internal top space
  className='mt-32 md:mt-48 min-h-screen w-full bg-background px-6 md:px-12 lg:px-20 pt-20 pb-20 md:pb-32 flex flex-col items-center overflow-hidden'
>
      <div className='mb-20 md:mb-32 text-center'>
        <div className='inline-flex items-center justify-center gap-6'>
          <div className='w-12 md:w-20 h-[2px] bg-red-light' />
          <span className='text-4xl md:text-6xl lg:text-6xl font-heading font-black uppercase tracking-[0.2em] text-red-light'>Services</span>
          <div className='w-12 md:w-20 h-[2px] bg-red-light' />
        </div>
      </div>

      <div className='max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-4 items-start'>
        
        {/* Left Image (Span 6) */}
        <div className='lg:col-span-6 image-stage lg:sticky lg:top-40 relative order-2 lg:order-1 max-w-md lg:max-w-none w-full mx-auto lg:mx-0'>
          <div className='w-full aspect-square overflow-hidden rounded-sm bg-black/5 relative'>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={imageSources[index]}
                  alt={serviceDisplayNames[index]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className='mt-8 space-y-4'>
            <h4 className='font-heading text-sm md:text-base text-red-light font-black uppercase tracking-widest'>
              {services[hoveredIndex].category}
            </h4>
            <p className='font-body text-sm md:text-base text-text/80 leading-relaxed max-w-sm'>
              {services[hoveredIndex].description}
            </p>
          </div>
        </div>

        {/* Right List (Span 6) */}
        <div className='lg:col-span-6 services-list space-y-2 md:space-y-3 lg:space-y-4 order-1 lg:order-2'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className='service-item-row cursor-pointer'
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <h3
                className={`font-body text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-normal tracking-tight uppercase transition-all duration-700 ${
                  hoveredIndex === index
                    ? 'text-text opacity-100'
                    : 'text-text/20 hover:text-text/40'
                }`}
              >
                {serviceDisplayNames[index]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
