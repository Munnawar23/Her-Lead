"use client"
import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '@/constants/serviceShowcase'
import { ArrowUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const ServiceDiscovery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const router = useRouter()

  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pillRefs = useRef<(HTMLDivElement | null)[]>([])

  // Initial Entry Animations
  useGSAP(() => {
    // Header Animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
      }
    })

    // Line Expansions
    gsap.from(pillRefs.current[0], { // Using a pill as trigger or container
      opacity: 0,
      duration: 0.8,
      ease: "circ.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
      }
    })
  }, { scope: containerRef })

  // Content Switching Animation
  useGSAP(() => {
    if (hoveredIndex === displayIndex) return;

    const tl = gsap.timeline({
      onComplete: () => setDisplayIndex(hoveredIndex)
    });

    // Exit phase
    tl.to(contentRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.25,
      ease: "power2.in"
    });

    // Hidden phase - update display happens via setDisplayIndex in onComplete
    // But to make it smoother, we can set it mid-way
    tl.add(() => setDisplayIndex(hoveredIndex));

    // Entry phase
    tl.fromTo(contentRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
    );

  }, { dependencies: [hoveredIndex], scope: containerRef })

  // Pill Background Animation
  useGSAP(() => {
    pillRefs.current.forEach((el, index) => {
      if (!el) return;
      const bg = el.querySelector('.pill-bg');
      if (bg) {
        gsap.to(bg, {
          x: hoveredIndex === index ? '0%' : '-105%',
          duration: 0.5,
          ease: "expo.out",
          overwrite: "auto"
        });
      }
    });
  }, { dependencies: [hoveredIndex], scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full bg-black pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Centered "I'm looking for" Label */}
        <div ref={headerRef} className='mb-8 md:mb-12 flex justify-center w-full service-header-content'>
          <div className='inline-flex items-center justify-center gap-3 md:gap-6 w-max'>
            <div className='header-line-left w-8 md:w-20 h-[2px] bg-white origin-right' />
            <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-widest md:tracking-[0.2em] text-white text-center'>
              I'm looking for
            </h2>
            <div className='header-line-right w-8 md:w-20 h-[2px] bg-white origin-left' />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-48 items-start">
          {/* Left Column: Active Content */}
          <div className="hidden lg:block space-y-12">
            <div className="min-h-[400px] flex flex-col justify-start lg:pt-4 lg:items-center">
              <div ref={contentRef} className="space-y-8 flex flex-col items-center">
                <div className="w-[380px] aspect-square rounded-full overflow-hidden border-10 border-white">
                  <img
                    src={services[displayIndex].images[0]}
                    alt={services[displayIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="w-full max-w-lg text-center">
                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-3">
                    {services[displayIndex].name}
                  </h3>
                  <p className="text-white font-body text-sm md:text-base leading-relaxed font-bold uppercase tracking-widest">
                    {services[displayIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pill Buttons */}
          <div className="flex flex-col gap-3 lg:pt-4 lg:items-start">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { pillRefs.current[index] = el; }}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => router.push(`/services/${service.slug}`)}
                className="relative group cursor-pointer overflow-hidden rounded-full border-2 border-white/20 transition-all duration-300 w-full lg:max-w-[340px]"
              >
                {/* Animated Background Layer */}
                <div
                  className="pill-bg absolute inset-0 bg-white z-0"
                  style={{ transform: 'translateX(-102%)' }}
                />

                <div className="relative z-10 w-full flex items-center justify-between px-8 py-4.5 md:py-3.5">
                  <span className={`text-sm md:text-sm font-heading font-black uppercase tracking-widest transition-colors duration-500 ${hoveredIndex === index ? 'text-black' : 'text-white'}`}>
                    {service.name}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className={`transition-all duration-500 ${hoveredIndex === index ? 'text-black rotate-0 translate-x-1' : 'text-white group-hover:translate-x-1 group-hover:-translate-y-1'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDiscovery

