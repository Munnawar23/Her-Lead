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
    // Parallax effect on the image
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Reveal animation for the image container
    gsap.from(imageContainerRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 80%",
      }
    });

    // Text Reveal Animation
    const revealTexts = containerRef.current?.querySelectorAll('.reveal-text');
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
      });
    });

    // Stats Reveal
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
    });

    // Floating animation for decorative elements
    gsap.to(".floating-circle", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className='relative w-full bg-background px-6 md:px-12 lg:px-24 py-24 md:pt-40 md:pb-16 overflow-hidden'
      id="about"
    >
      {/* Decorative Background Elements */}
      <div className='absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl floating-circle' />
      <div className='absolute bottom-20 left-[5%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] floating-circle' />

      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center'>
          
          {/* Left Column: Image with Parallax */}
          <div className='lg:col-span-5 relative order-2 lg:order-1'>
            <div 
              ref={imageContainerRef}
              className='relative aspect-3/4 w-full overflow-hidden rounded-sm shadow-2xl'
            >
              <div ref={imageRef} className='absolute inset-0 scale-110'>
                <Image 
                  src={aboutImg} 
                  alt="Her Lead Editorial" 
                  fill 
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60' />
            </div>
            
            {/* Visual Detail: Floating Tag */}
            <div className='absolute -bottom-6 -right-6 md:-right-12 bg-primary px-8 py-10 text-background hidden md:block'>
              <span className='text-4xl md:text-5xl font-black block leading-none'>01</span>
              <span className='text-[10px] uppercase tracking-[0.4em] font-bold mt-2 block'>Our Chapter</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className='lg:col-span-7 space-y-10 lg:space-y-16 order-1 lg:order-2'>
            <div className='space-y-6'>
              <div className='inline-flex items-center gap-4'>
                <div className='w-12 h-px bg-primary' />
                <span className='text-xs font-black uppercase tracking-[0.5em] text-primary'>Est. 2026</span>
              </div>
              
              <h2 className='text-5xl md:text-7xl xl:text-[6vw] font-heading font-black leading-[0.9] tracking-tighter text-text'>
                <div className='overflow-hidden'>
                  <span className='reveal-text inline-block'>CRAFTING</span>
                </div>
                <div className='overflow-hidden text-primary italic'>
                  <span className='reveal-text inline-block'>DIGITAL</span>
                </div>
                <div className='overflow-hidden'>
                  <span className='reveal-text inline-block'>LEGACIES.</span>
                </div>
              </h2>
            </div>

            <div className='max-w-xl space-y-8'>
              <p className='text-xl md:text-2xl font-medium text-text/90 leading-tight'>
                We are a boutique firm operating at the intersection of high-fashion aesthetics and technical excellence.
              </p>
              
              <p className='text-sm md:text-base text-text/60 leading-relaxed font-medium'>
                Her Lead was born from a vision to redefine how premium brands navigate the digital landscape. We combine cinematic storytelling with precision-engineered strategies to build ecosystems that don't just exist—they dominate.
              </p>

              {/* Stats Grid */}
              <div className='stats-grid grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-text/5'>
                {[
                  { label: 'Growth', value: '300%' },
                  { label: 'Partners', value: '50+' },
                  { label: 'Excellence', value: '100%' }
                ].map((stat, i) => (
                  <div key={i} className='stat-item space-y-1'>
                    <span className='block text-[10px] uppercase tracking-[0.3em] font-black text-primary'>{stat.label}</span>
                    <span className='text-2xl font-black text-text'>{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className='pt-6'>
                <button 
                  onClick={() => transitionTo('/about')}
                  className='group relative flex items-center gap-6'
                >
                  <div className='relative w-16 h-16 rounded-full border border-text/10 flex items-center justify-center group-hover:border-primary transition-all duration-500'>
                    <div className='absolute inset-0 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-500' />
                    <svg className="relative z-10 w-6 h-6 text-text group-hover:text-background transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-[10px] uppercase tracking-[0.4em] font-black text-text group-hover:text-primary transition-colors duration-500'>Read More</span>
                    <span className='text-[10px] uppercase tracking-[0.4em] font-bold text-text/30 italic'>Discover her lead</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Text Overlay */}
      <div className='absolute -right-20 top-1/2 -translate-y-1/2 rotate-90 hidden xl:block'>
        <span className='text-[12vh] font-black text-text/2 select-none whitespace-nowrap uppercase tracking-widest'>
          BEYOND DIGITAL
        </span>
      </div>
    </section>
  )
}

export default AboutSection
