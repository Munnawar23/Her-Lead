"use client"
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const magneticRef = useRef<HTMLButtonElement>(null)
  const { transitionTo } = useTransition()

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

    // Magnetic effect for the button
    const handleMouseMove = (e: MouseEvent) => {
      if (!magneticRef.current) return
      
      const bounds = magneticRef.current.getBoundingClientRect()
      const centerX = bounds.left + bounds.width / 2
      const centerY = bounds.top + bounds.height / 2
      
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      
      // Distance threshold
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      if (distance < 150) {
        gsap.to(magneticRef.current, {
          x: deltaX * 0.4,
          y: deltaY * 0.4,
          duration: 0.5,
          ease: "power2.out"
        })
        gsap.to(magneticRef.current.querySelector('.inner-text'), {
          x: deltaX * 0.2,
          y: deltaY * 0.2,
          duration: 0.5,
          ease: "power2.out"
        })
      } else {
        gsap.to(magneticRef.current, { x: 0, y: 0, duration: 0.5, ease: "power2.out" })
        gsap.to(magneticRef.current.querySelector('.inner-text'), { x: 0, y: 0, duration: 0.5, ease: "power2.out" })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className='min-h-screen w-full bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32 overflow-hidden flex flex-col justify-center'>
      <div className='max-w-full mx-auto space-y-24'>
        
        {/* Hero Statement */}
        <div className='space-y-8 overflow-hidden relative'>
          <h2 className='reveal-text font-heading text-4xl md:text-6xl lg:text-6xl text-text leading-[0.9] tracking-tighter'>
            Experience experts in <span className='text-primary italic px-2'>360° digital</span> elevation. We ideate, execute, and scale <span className='underline underline-offset-12 decoration-primary/30'>award winning</span> content.
          </h2>
        </div>

        {/* Triple Column Content & Magnetic Portal */}
        <div className='reveal-content-trigger grid grid-cols-1 md:grid-cols-10 gap-12 items-start'>
          
          {/* Left: Label */}
          <div className='md:col-span-2 overflow-hidden'>
            <div className='reveal-content'>
              <p className='font-heading text-xs text-text/40 uppercase tracking-[0.3em] font-bold'>
                Overview
              </p>
            </div>
          </div>

          {/* Middle: Content */}
          <div className='md:col-span-5 space-y-12 shrink-0'>
            <div className='overflow-hidden'>
              <p className='reveal-content font-heading text-xl md:text-2xl text-text leading-tight tracking-tight font-medium'>
                Our approach starts with in-depth discovery and research to gain a thorough understanding of what makes our client’s business unique. We then propose a strategy and select influencers that fit perfectly with your brand’s target key-demographic.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className='overflow-hidden max-w-sm'>
                <p className='reveal-content text-sm text-text/60 leading-relaxed font-medium'>
                  Whether you’re a startup or a global brand, we blend traditional public relations with a digital-first approach to ensure your story stands out, shaping perceptions and turning messages into real momentum.
                </p>
              </div>

              {/* THE CREATIVE BUTTON: A Magnetic "Portal" */}
              <div className="reveal-content pt-8 md:pt-0 pl-0 md:pl-12">
                <button 
                  ref={magneticRef}
                  onClick={() => transitionTo('/about')}
                  className='relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-primary/20 group hover:border-primary transition-colors duration-500'
                >
                  {/* Rotating Border Text or Background */}
                  <div className='absolute inset-0 bg-primary scale-0 group-hover:scale-100 rounded-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]' />
                  
                  <div className='inner-text relative z-10 flex flex-col items-center justify-center text-center'>
                    <span className='text-[10px] uppercase tracking-[0.2em] font-bold text-text group-hover:text-white transition-colors duration-300'>
                      Discover
                    </span>
                    <span className='text-[10px] uppercase tracking-[0.2em] font-extrabold text-primary group-hover:text-white transition-colors duration-300'>
                      Our Story
                    </span>
                    <span className='text-lg mt-1 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 antialiased'>
                      →
                    </span>
                  </div>

                  {/* Decorative rotating circle */}
                  <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-20 transition-opacity duration-500" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Social/Stats */}
          <div className='md:col-span-3 flex flex-col md:items-end space-y-8'>
            <div className='overflow-hidden text-left md:text-right'>
              <p className='reveal-content font-heading text-xs text-text/40 uppercase tracking-[0.3em] mb-4 font-bold'>Connect</p>
              <div className='flex flex-col space-y-2'>
                {['Instagram', 'Facebook', 'Linkedin'].map((link) => (
                  <a 
                    key={link}
                    href={`#${link.toLowerCase()}`} 
                    className='reveal-content font-heading text-lg text-text hover:text-primary transition-all duration-300 hover:tracking-widest flex items-center md:justify-end gap-2'
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutSection
