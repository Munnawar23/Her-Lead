"use client"
import React, { useRef } from 'react'
import { serviceCards } from "@/constants/services"
import ServiceCard from "../components/ServiceCard"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const lineLeftRef = useRef<HTMLDivElement>(null)
  const lineRightRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Header Animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 90%",
      }
    });

    // Line Expansions
    gsap.from([lineLeftRef.current, lineRightRef.current], {
      scaleX: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 90%",
      }
    });

    const cards = gsap.utils.toArray<HTMLElement>('.service-card-wrapper');
    const totalCards = cards.length;

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        endTrigger: containerRef.current,
        end: "bottom bottom",
        anticipatePin: 1,
        id: `card-pin-${i}`,
      });
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-bg-light"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-24 pb-4 md:pb-8">
        <div ref={headerRef} className="services-header-content flex flex-col items-center text-center">
          <div className='inline-flex items-center justify-center gap-4 md:gap-8 mb-3 md:mb-4'>
            <div ref={lineLeftRef} className='header-line-left w-10 md:w-24 h-[1.5px] md:h-[2px] bg-black/10 origin-right' />
            <span className="text-secondary font-heading font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm">
              Our Capabilities
            </span>
            <div ref={lineRightRef} className='header-line-right w-10 md:w-24 h-[1.5px] md:h-[2px] bg-black/10 origin-left' />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-0 text-secondary">
            HerLead Legacy
          </h2>
        </div>
      </div>

      <div className="relative">
        {serviceCards.map((group, idx) => (
          <div
            key={idx}
            className="service-card-wrapper w-full h-[85vh] md:h-screen flex items-center justify-center p-3 md:p-8 lg:p-12 overflow-hidden will-change-transform"
          >
            <ServiceCard group={group} />
          </div>
        ))}
      </div>

      {/* Footer Spacer */}
      <div className="h-0 md:h-[30vh]" />
    </section>
  )
}

export default ServicesSection

