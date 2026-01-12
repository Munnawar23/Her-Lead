"use client"
import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { services } from '@/constants/services'

// Video paths from public folder
const digitalVideo = '/videos/digital.mp4'
const brandingVideo = '/videos/branding.mp4'

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = () => {
  const containerRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Map videos to services (since we have 2 videos for 6 services)
  const videoSources = [
    digitalVideo,   // PR
    digitalVideo,   // Digital
    brandingVideo,  // Branding
    brandingVideo,  // Training
    digitalVideo,   // Talent
    brandingVideo   // Digital Exp
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

  // Handle video playback on hover
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === hoveredIndex) {
          video.play().catch(err => console.log("Video play blocked:", err))
        } else {
          video.pause()
        }
      }
    })
  }, [hoveredIndex])

  return (
    <section id="services" ref={containerRef} className='min-h-screen w-full bg-background px-6 md:px-12 lg:px-20 pt-10 md:pt-20 pb-20 md:pb-40 flex flex-col items-center overflow-hidden'>
      <div className='mb-24 text-center overflow-hidden'>
        <h2 className='reveal-text font-heading text-7xl md:text-8xl lg:text-[8vw] text-text leading-[0.8] tracking-tighter uppercase font-bold'>
          Services<span className='text-primary'>.</span>
        </h2>
      </div>
      <div className='max-w-full mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20 lg:gap-32 items-start'>
        
        {/* Left Side - Video & Current Service Details */}
        <div className='image-stage lg:sticky lg:top-40 relative order-2 lg:order-1 max-w-sm lg:max-w-md w-full'>
          <div className='w-full aspect-square overflow-hidden rounded-sm bg-black/5 relative z-0'>
            {services.map((service, index) => (
              <video
                key={service.id}
                ref={(el) => { videoRefs.current[index] = el; }}
                src={videoSources[index]}
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
          
          <div className='mt-8 space-y-2 relative z-0'>
            <h4 className='font-heading text-sm md:text-base text-text font-medium'>
              {services[hoveredIndex].category}
            </h4>
            <p className='font-body text-[12px] md:text-sm text-text/50 leading-relaxed italic'>
              {services[hoveredIndex].description}
            </p>
          </div>
        </div>

        {/* Right Side - Vertical List of Service Names */}
        <div className='services-list space-y-4 md:space-y-6 order-1 lg:order-2 flex flex-col relative z-10'>
            {services.map((service, index) => (
              <div 
                key={service.id}
                className='service-item-row group cursor-pointer inline-block'
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <h3 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] transition-all duration-500 ${hoveredIndex === index ? 'text-text translate-x-4' : 'text-text/10'}`}>
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
