"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import { testimonials } from '@/constants/testimonials'

gsap.registerPlugin(ScrollTrigger)

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".testimonial-pill", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    gsap.from(".testimonial-title", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    gsap.from(".testimonial-item", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className='relative w-full bg-[#FF1979] py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden rounded-t-4xl'
    >
      <div className='max-w-7xl mx-auto'>
        
        {/* Badge Pill */}
        <div className='testimonial-pill mb-8'>
          <span className='px-6 py-2 rounded-full border border-white/30 text-white text-sm font-heading font-bold lowercase tracking-wider'>
            Testimonials
          </span>
        </div>

        {/* Big Title */}
        <h2 className='testimonial-title text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-12 max-w-4xl'>
          What our clients <br className='hidden md:block' />
          love about us
        </h2>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16'>
          {testimonials.map((t) => (
            <div key={t.id} className='testimonial-item space-y-6'>
              {/* Quote Icon SVG */}
              <div className='text-white/40'>
                <svg width="32" height="24" viewBox="0 0 48 36" fill="currentColor">
                  <path d="M0 21.6001C0 14.4001 2.4 -5.72205e-05 14.4 -5.72205e-05V7.20002C9.6 7.20002 7.2 12 7.2 16.8001V21.6001H14.4V36H0V21.6001ZM26.4 21.6001C26.4 14.4001 28.8 -5.72205e-05 40.8 -5.72205e-05V7.20002C36 7.20002 33.6 12 33.6 16.8001V21.6001H40.8V36H26.4V21.6001Z" />
                </svg>
              </div>

              <p className='text-white text-base md:text-lg font-body font-medium leading-[1.6] opacity-95'>
                {t.quote}
              </p>

              <div className='pt-4'>
                <span className='text-white/60 font-heading font-black uppercase text-xs tracking-[0.2em]'>
                  {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
