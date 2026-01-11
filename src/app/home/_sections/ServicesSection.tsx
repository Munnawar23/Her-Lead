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
    <section ref={containerRef} className='min-h-screen w-full bg-background px-6 md:px-12 lg:px-20 py-20 md:py-40 flex items-start overflow-hidden'>
      <div className='max-w-full mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20 lg:gap-32 items-start'>
        
        {/* Left Side - Video & Current Service Details */}
        <div className='image-stage relative order-2 lg:order-1 max-w-sm lg:max-w-md'>
          <div className='w-full aspect-square overflow-hidden rounded-sm bg-black/5'>
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
          
          <div className='mt-8 space-y-2'>
            <h4 className='font-heading text-sm md:text-base text-text font-medium'>
              {services[hoveredIndex].category}
            </h4>
            <p className='font-body text-[12px] md:text-sm text-text/50 leading-relaxed'>
              {services[hoveredIndex].description}
            </p>
          </div>
        </div>

        {/* Right Side - Vertical List of Service Names */}
        <div className='services-list space-y-1 md:space-y-2 order-1 lg:order-2 flex flex-col'>
            {services.map((service, index) => (
              <div 
                key={service.id}
                className='service-item-row group cursor-pointer inline-block'
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <h3 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] transition-all duration-300 ${hoveredIndex === index ? 'text-text' : 'text-text/10'}`}>
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
