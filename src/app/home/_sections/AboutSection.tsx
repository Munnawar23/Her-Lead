"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = useTransition()

  useGSAP(() => {
    // Reveal main heading words
    const headingWords = containerRef.current?.querySelectorAll('.heading-word');
    if (headingWords) {
      gsap.from(headingWords, {
        y: 60,
        opacity: 0,
        rotateX: -45,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }

    // Reveal sub-content and lines
    gsap.from(".reveal-item", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".reveal-item-trigger",
        start: "top 80%",
      }
    });

    // Reveal decorative line
    gsap.from(".header-line", {
      width: 0,
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className='relative w-full bg-background px-6 md:px-12 lg:px-24 pt-16 md:pt-24 pb-10 md:pb-12 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto'>
        
        {/* Section Header */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8'>
          <div className='space-y-4'>
            <span className='block text-xs font-black uppercase tracking-[0.4em] text-primary'>Our Philosophy</span>
            <div className='header-line h-px bg-text/10 w-32 md:w-64' />
          </div>
          <p className='text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-text/30'>
             Innovation • Impact • Integrity
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16'>
          
          {/* Left Column: Bold Typography */}
          <div className='lg:col-span-8 space-y-8'>
            <h2 className='text-4xl md:text-6xl lg:text-[5vw] font-black leading-[1.05] tracking-tighter text-text'>
              { "Elevating brands through cinematic storytelling and strategic digital precision.".split(' ').map((word, i) => (
                <span key={i} className='inline-block overflow-hidden mr-2 md:mr-2.5 py-1'>
                  <span className='heading-word inline-block'>{word}</span>
                </span>
              ))}
            </h2>
          </div>

          {/* Right Column: Detailed Copy & CTA */}
          <div className='lg:col-span-4 lg:pt-0 reveal-item-trigger'>
            <div className='space-y-8 reveal-item'>
              <p className='text-lg md:text-xl font-medium text-text/80 leading-snug'>
                We are a boutique agency of in-house specialists dedicated to 360° digital evolution. 
              </p>
              
              <p className='text-sm md:text-base text-text/50 leading-relaxed font-medium'>
                Our process begins with exhaustive research and discovery, identifying the core dna that makes your business unique. We don't just create content; we build digital ecosystems that drive visibility and trust.
              </p>

              <div className='pt-4'>
                <button 
                  onClick={() => transitionTo('/about')}
                  className='group relative flex items-center gap-6'
                >
                  <div className='w-14 h-14 rounded-full border border-text/10 flex items-center justify-center group-hover:bg-text group-hover:border-text transition-all duration-500'>
                    <svg className="w-5 h-5 text-text group-hover:text-background transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-[10px] uppercase tracking-[0.3em] font-black text-text'>Learn More</span>
                    <span className='text-[10px] uppercase tracking-[0.3em] font-bold text-primary'>Our Full Story</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Details */}
        <div className='mt-20 md:mt-24 pt-10 border-t border-text/5 flex flex-wrap gap-x-16 gap-y-8'>
           {[
             { label: 'Founded', value: '2026' },
             { label: 'Services', value: '360° Digital' },
             { label: 'Focus', value: 'Global Reach' }
           ].map((stat, i) => (
             <div key={i} className='reveal-item'>
                <span className='block text-[9px] uppercase tracking-[0.3em] font-black text-text/30 mb-2'>{stat.label}</span>
                <span className='text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-text'>{stat.value}</span>
             </div>
           ))}
        </div>

      </div>
    </section>
  )
}

export default AboutSection
