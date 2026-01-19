"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'
import aboutImg from '@/assets/images/about.png'
import founderImg from '@/assets/images/about-me.png'

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
  // Change pb-60 md:pb-96 to pb-20 md:pb-32
  className='relative w-full bg-background px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden'
  id="about"
>
      <div className='absolute top-20 right-[10%] w-64 h-64 bg-red-light/20 rounded-full blur-3xl floating-circle' />
      <div className='absolute bottom-20 left-[5%] w-96 h-96 bg-red-light/10 rounded-full blur-[100px] floating-circle' />

      <div className='max-w-7xl mx-auto'>
        {/* Centered "About Us" Label */}
        <div className='mb-16 md:mb-24 text-center'>
          <div className='inline-flex items-center justify-center gap-6'>
            <div className='w-12 md:w-20 h-[2px] bg-red-light' />
            <span className='text-4xl md:text-6xl lg:text-6xl font-heading font-black uppercase tracking-[0.2em] text-red-light'>About Us</span>
            <div className='w-12 md:w-20 h-[2px] bg-red-light' />
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
          
          {/* Image */}
          <div className='lg:col-span-6 relative order-2 lg:order-1 flex justify-center lg:justify-start'>
            <div 
              ref={imageContainerRef}
              className='relative aspect-square w-full max-w-lg overflow-hidden rounded-sm shadow-2xl bg-gray-100'
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
          </div>

          {/* Content */}
          <div className='lg:col-span-6 space-y-8 lg:space-y-12 order-1 lg:order-2'>
            <div className='space-y-6'>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[0.9] tracking-tighter text-text uppercase'>
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
              
              <p className='text-base font-body font-bold text-text leading-relaxed'>
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

        {/* Vision from the Founder */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-20'>
          
          {/* Content */}
          <div className='space-y-4'>
            <div className='space-y-3'>
              <div className='inline-flex items-center gap-3'>
                <div className='w-8 h-[2px] bg-primary' />
                <span className='text-[10px] font-heading font-black uppercase tracking-[0.4em] text-primary'>Vision from the Founder</span>
              </div>
              
              <h3 className='text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[0.9] tracking-tighter text-text'>
                <div className='overflow-hidden'>
                  <span className='reveal-text inline-block'>EMPOWERING</span>
                </div>
                <div className='overflow-hidden'>
                  <span className='reveal-text inline-block text-red-light'>BRANDS</span>
                </div>
                <div className='overflow-hidden'>
                  <span className='reveal-text inline-block text-primary'>THROUGH STORY.</span>
                </div>
              </h3>
            </div>

            <div className='space-y-4'>
              <p className='text-lg font-body font-bold text-text leading-relaxed italic border-l-4 border-primary pl-4'>
                "Our mission is to create meaningful connections between brands and their audiences."
              </p>
              
              <p className='text-base font-body font-bold text-text leading-relaxed'>
                With over a decade of experience in digital marketing, I founded Her Lead to help brands thrive in the digital landscape.
              </p>

              <div className='pt-2'>
                <div className='space-y-1'>
                  <p className='text-sm font-heading font-black text-text'>Founder Name</p>
                  <p className='text-xs font-body text-text/70'>Founder & CEO, Her Lead</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Image */}
          <div className='relative flex justify-center lg:justify-end'>
            <div className='relative aspect-square w-full max-w-md overflow-hidden rounded-sm shadow-xl bg-gray-100'>
              <Image 
                src={founderImg} 
                alt="Founder" 
                fill 
                className="object-contain"
                placeholder="blur"
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent' />
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
