"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'
import aboutImg from '@/assets/images/about.png'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = useTransition()

  useGSAP(() => {
    gsap.from(imageContainerRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 80%",
      }
    })

    const revealTexts = containerRef.current?.querySelectorAll('.reveal-text')
    revealTexts?.forEach((text) => {
      gsap.from(text, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
        }
      })
    })

    gsap.from(".stat-item", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 85%",
      }
    })

    gsap.to(".floating-circle", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    })
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className='relative w-full bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32 overflow-hidden'
      id="about"
    >
      <div className='absolute top-20 right-[10%] w-64 h-64 bg-red-light/20 rounded-full blur-3xl floating-circle' />
      <div className='absolute bottom-20 left-[5%] w-96 h-96 bg-red-light/10 rounded-full blur-[100px] floating-circle' />

      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
          
          {/* Image */}
          <div className='lg:col-span-6 relative order-2 lg:order-1'>
            <div 
              ref={imageContainerRef}
              className='relative aspect-4/5 w-full overflow-hidden rounded-sm shadow-2xl bg-gray-100'
            >
              <div ref={imageRef} className='absolute inset-0'>
                <Image 
                  src={aboutImg} 
                  alt="About Us" 
                  fill 
                  className="object-contain"
                  placeholder="blur"
                />
              </div>
              <div className='absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-40' />
            </div>

            <div className='absolute -bottom-6 -right-6 md:-right-12 bg-red-light px-8 py-10 text-background hidden md:block'>
              <span className='text-4xl md:text-5xl font-heading font-black block leading-none'>01</span>
              <span className='text-[10px] uppercase tracking-[0.4em] font-heading font-black mt-2 block'>Who We Are</span>
            </div>
          </div>

          {/* Content */}
          <div className='lg:col-span-6 space-y-8 lg:space-y-12 order-1 lg:order-2'>
            <div className='space-y-6'>
              <div className='inline-flex items-center gap-4'>
                <div className='w-12 h-[2px] bg-red-light' />
                <span className='text-xs font-heading font-black uppercase tracking-[0.5em] text-red-light'>About Us</span>
              </div>
              
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[0.9] tracking-tighter text-text'>
                <div className='overflow-hidden'>
                  <span className='reveal-text inline-block'>BUILDING</span>
                </div>
                <div className='overflow-hidden'>
                  <span className='reveal-text inline-block text-red-light'>DIGITAL</span>
                </div>
                <div className='overflow-hidden'>
                  <span className='reveal-text inline-block text-primary'>IMPACT.</span>
                </div>
              </h2>
            </div>

            <div className='max-w-xl space-y-6'>
              <p className='text-lg md:text-xl font-body font-bold text-text leading-relaxed'>
                We are an experienced team of in-house experts delivering complete 360° digital solutions.
              </p>
              
              <p className='text-base font-body text-text leading-relaxed'>
                From ideation to execution, we plan, create, publish, distribute, and scale content that drives real and measurable results. We work closely with brands to build visibility, trust, and long-term growth through thoughtful strategy and strong creative execution.
              </p>

              <div className='stats-grid grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-text/10'>
                {[
                  { label: 'Experience', value: '10+' },
                  { label: 'Brands', value: '50+' },
                  { label: 'Results', value: '100%' }
                ].map((stat, i) => (
                  <div key={i} className='stat-item space-y-1'>
                    <span className='block text-[10px] uppercase tracking-[0.3em] font-heading font-black text-primary'>{stat.label}</span>
                    <span className='text-3xl font-black font-heading text-text'>{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className='pt-6'>
                <button 
                  onClick={() => transitionTo('/about')}
                  className='group relative flex items-center gap-6'
                >
                  <div className='relative w-16 h-16 rounded-full border-2 border-text/20 flex items-center justify-center group-hover:border-primary transition-all duration-500'>
                    <div className='absolute inset-0 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-500' />
                    <svg className="relative z-10 w-6 h-6 text-text group-hover:text-background transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-[10px] uppercase tracking-[0.4em] font-heading font-black text-text group-hover:text-red-light transition-colors duration-500'>Read More</span>
                    <span className='text-[10px] uppercase tracking-[0.4em] font-heading font-bold text-text mb-0'>Discover Our Vision</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute -right-20 top-1/2 -translate-y-1/2 rotate-90 hidden xl:block'>
        <span className='text-[12vh] font-black font-heading text-text/5 select-none whitespace-nowrap uppercase tracking-widest'>
          DIGITAL ELEVATION
        </span>
      </div>
    </section>
  )
}

export default AboutSection
