"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Animating the Hero Statement
    gsap.from(".reveal-text", {
      yPercent: 100,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".reveal-text",
        start: "top 100%",
        toggleActions: "play none none reverse"
      }
    })

    // Animating the content blocks
    gsap.from(".reveal-content", {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".reveal-content-trigger",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className='min-h-screen w-full bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32 overflow-hidden'>
      <div className='max-w-full mx-auto space-y-20'>
        
        {/* Hero Statement */}
        <div className='space-y-8 overflow-hidden'>
          <h2 className='reveal-text font-heading text-4xl md:text-5xl lg:text-6xl text-text leading-tight'>
            We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.{' '}
            <span className='inline-block relative'>
              Explore our services
              <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary'></span>
            </span>
          </h2>
        </div>

        {/* Divider */}
        <div className='border-t border-text/10'></div>

        {/* Two Column Content */}
        <div className='reveal-content-trigger grid grid-cols-[0.8fr_1.2fr] md:grid-cols-2 gap-4 md:gap-16'>
          
          {/* Left Column - Tagline */}
          <div className='overflow-hidden'>
            <div className='reveal-content'>
              <h3 className='font-heading font-semibold text-sm md:text-2xl lg:text-3xl text-text'>
                PR that's built for the digital era
              </h3>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className='space-y-4 md:space-y-6'>
            <div className='overflow-hidden'>
              <p className='reveal-content font-heading text-[12px] sm:text-xs md:text-lg text-text leading-relaxed'>
                Modern PR isn't just about press releases and public image. It's about shaping perception and turning any message into momentum. We're a PR agency that blends traditional tactics with a digital-first approach to ensure your story stands out to consumers.
              </p>
            </div>
            <div className='overflow-hidden'>
              <p className='reveal-content font-heading text-[12px] sm:text-xs md:text-lg text-text leading-relaxed'>
                Whether you're a startup or a national brand, we offer custom public relations services that drive media visibility, trust and growth.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutSection
