"use client"
import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'
import { services } from '@/constants/services'

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const portalRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = useTransition()

  // Curated high-end Unsplash images for each service
  const imageSources = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop", // PR & Media
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", // Digital Marketing
    "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=1200&auto=format&fit=crop", // Branding (Fixed)
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop", // Corp Training
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop", // Talent
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop", // Digital Exp
  ]

  useGSAP(() => {
    if (!containerRef.current) return

    // Entrance animation for titles using fromTo for absolute control
    gsap.fromTo(".service-title", 
      { 
        y: 100, 
        opacity: 0,
        rotateX: -15
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        clearProps: "transform,rotateX,opacity",
        scrollTrigger: {
          trigger: ".services-wrapper",
          start: "top 95%",
          toggleActions: "play none none none"
        }
      }
    )

    // Force a layout refresh
    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(timer);
  }, { scope: containerRef })

  // Floating Portal Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useGSAP(() => {
    if (portalRef.current) {
      gsap.to(portalRef.current, {
        x: mousePos.x,
        y: mousePos.y,
        duration: 0.8,
        ease: "power3.out"
      })
    }
  }, [mousePos])

  return (
    <section 
      ref={containerRef} 
      id="services" 
      className='min-h-screen w-full bg-background py-40 flex flex-col items-center justify-center relative overflow-hidden'
    >
      {/* Cinematic Noise Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background Section Title */}
      <div className="absolute top-20 left-12 overflow-hidden">
        <h4 className="font-heading text-primary text-xs uppercase tracking-[0.6em] font-bold italic">Our Services</h4>
      </div>

      {/* Brand Background Watermark */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
        <h2 className="font-heading text-[30vw] font-black text-text/5 uppercase tracking-tighter select-none">Impact.</h2>
      </div>

      <div className="services-wrapper w-full max-w-[90vw] flex flex-col items-center relative z-10">
        {services.map((service, index) => (
          <div 
            key={service.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => transitionTo('/services')}
            className="group relative w-full h-[12vh] md:h-[18vh] flex items-center justify-center cursor-pointer border-b border-text/10 last:border-b-0"
          >
            <span className="absolute left-0 font-heading text-xs md:text-sm text-text/40 font-bold italic group-hover:text-primary transition-colors duration-500">
              0{index + 1}
            </span>

            <h3 className="service-title font-heading text-[8vw] md:text-[6.5vw] leading-none font-black tracking-tighter uppercase text-text/20 group-hover:text-text transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:italic group-hover:scale-110 z-10">
              {service.name}
            </h3>

            <div className="absolute right-0 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-700 hidden lg:block">
              <p className="font-heading text-xs text-primary uppercase tracking-[0.4em] font-bold">Discover +</p>
            </div>
          </div>
        ))}
      </div>

      {/* THE FLOATING MEDIA PORTAL */}
      <div 
        ref={portalRef}
        className={`fixed top-0 left-0 w-[400px] h-[550px] pointer-events-none overflow-hidden z-20 -translate-x-1/2 -translate-y-1/2 shadow-[0_50px_100px_rgba(0,0,0,0.1)] transition-opacity duration-500 scale-0 origin-center ${hoveredIndex !== null ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
      >
        <div className="w-full h-full relative p-4 bg-background border border-text/10 rounded-xl overflow-hidden">
           <div className="absolute inset-0 z-20 bg-linear-to-b from-transparent via-text/5 to-transparent bg-size-[100%_4px] pointer-events-none opacity-20" />
           
           <div className="w-full h-full overflow-hidden relative rounded-lg">
            {services.map((service, index) => (
              <img
                key={service.id}
                src={imageSources[index]}
                alt={service.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              />
            ))}
           </div>

           <div className="absolute inset-0 z-30 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
           
           <div className="absolute bottom-8 left-8 right-8 z-40">
              <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-1">Focus Sector</p>
              <h5 className="font-heading text-lg text-white font-black leading-tight uppercase italic tracking-tighter">
                {hoveredIndex !== null ? services[hoveredIndex].category : ''}
              </h5>
           </div>
        </div>
      </div>

      {/* Background Interactive Text */}
      <div className="absolute bottom-10 right-12 text-right opacity-20 hidden md:block">
        <p className="font-heading text-[8px] uppercase tracking-[1em] text-text font-bold">Scroll horizontally to navigate</p>
      </div>
    </section>
  )
}

export default ServicesSection
