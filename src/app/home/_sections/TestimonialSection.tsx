"use client"
import React, { useRef } from 'react'
import { testimonials } from '@/constants/testimonials'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const TestimonialSection = () => {
  const containerRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const lineLeftRef = useRef<HTMLDivElement>(null)
  const lineRightRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Header Animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 90%",
      }
    });

    // Line Expansions
    gsap.from([lineLeftRef.current, lineRightRef.current], {
      scaleX: 0,
      duration: 0.6,
      ease: "circ.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 90%",
      }
    });

    // Testimonial Cards Animation
    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials-grid",
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className='relative w-full bg-accent-blue mt-12 md:mt-20 py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden rounded-t-3xl md:rounded-t-[2.5rem]'
    >
      <div className='max-w-7xl mx-auto'>

        {/* Header (Centered) */}
        <div
          ref={headerRef}
          className="text-center mb-12 md:mb-16"
        >
          <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
            <div
              ref={lineLeftRef}
              className='w-12 md:w-20 h-[2px] bg-white/30 origin-right scale-x-1'
            />
            <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.2em] text-white whitespace-nowrap'>
              Testimonials
            </h2>
            <div
              ref={lineRightRef}
              className='w-12 md:w-20 h-[2px] bg-white/30 origin-left scale-x-1'
            />
          </div>
          <div className='mt-8 md:mt-12'>
            <h3 className='text-4xl font-heading font-black text-white/90 leading-none tracking-tighter uppercase'>
              What our clients <br className='hidden md:block' />
              <span className="italic text-white">love about us</span>
            </h3>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className='testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16'>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className='testimonial-card space-y-6 flex flex-col'
            >
              {/* Quote Icon SVG */}
              <div className='text-white/60'>
                <svg width="32" height="24" viewBox="0 0 48 36" fill="currentColor">
                  <path d="M0 21.6001C0 14.4001 2.4 -5.72205e-05 14.4 -5.72205e-05V7.20002C9.6 7.20002 7.2 12 7.2 16.8001V21.6001H14.4V36H0V21.6001ZM26.4 21.6001C26.4 14.4001 28.8 -5.72205e-05 40.8 -5.72205e-05V7.20002C36 7.20002 33.6 12 33.6 16.8001V21.6001H40.8V36H26.4V21.6001Z" />
                </svg>
              </div>

              <p className='text-white text-sm md:text-body-custom font-body font-bold leading-[1.6] flex-1'>
                "{t.quote}"
              </p>

              <div className='pt-4 space-y-4'>
                {/* 5 Star Rating */}
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-primary)" className="text-primary" />
                  ))}
                </div>
                <div className='flex flex-col'>
                  <span className='text-white font-heading font-black uppercase text-sm tracking-[0.2em]'>
                    {t.company}
                  </span>
                  <span className='text-white/40 text-[10px] uppercase font-bold tracking-widest'>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
