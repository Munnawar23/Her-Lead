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
      className='min-h-screen w-full bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32 flex flex-col items-center overflow-hidden'
    >
      <div className='mb-16 md:mb-20 text-center overflow-hidden'>
        <h2 className='reveal-text font-heading text-5xl md:text-6xl font-black text-text leading-[0.8] tracking-tighter uppercase'>
          Our Services<span className='text-red-light'>.</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4" />
      </div>

      <div className='max-w-full mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 md:gap-16 lg:gap-20 items-start'>
        
        {/* Left Image */}
        <div className='image-stage lg:sticky lg:top-40 relative order-2 lg:order-1 max-w-sm lg:max-w-lg w-full mx-auto lg:mx-0'>
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

          <div className='mt-6 md:mt-8 space-y-2'>
            <h4 className='font-heading text-base md:text-lg text-red-light font-black uppercase tracking-tight'>
              {services[hoveredIndex].category}
            </h4>
            <p className='font-body text-sm md:text-base text-text leading-relaxed font-bold'>
              {services[hoveredIndex].description}
            </p>
          </div>
        </div>

        {/* Right List */}
        <div className='services-list space-y-4 md:space-y-5 lg:space-y-6 order-1 lg:order-2'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className='service-item-row cursor-pointer'
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <h3
                className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[0.9] font-black tracking-tighter uppercase transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'text-primary translate-x-4'
                    : 'text-text/20'
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
