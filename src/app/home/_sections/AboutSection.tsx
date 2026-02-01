"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { aboutContent } from '@/constants/about'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Function to split text for stagger effect
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="showcase-char inline-block whitespace-pre">{char}</span>
    ));
  };

  useGSAP(() => {
    const section = containerRef.current
    if (!section) return

    // 1. Reveal "Why Herlead" Label
    gsap.from('.section-label-inner', {
      scrollTrigger: {
        trigger: '.section-label-container',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.section-line', {
      scrollTrigger: {
        trigger: '.section-label-container',
        start: 'top 85%',
      },
      scaleX: 0,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.2
    })

    // 2. Image Animation
    gsap.from('.about-image-container', {
      scrollTrigger: {
        trigger: '.about-grid',
        start: 'top 80%',
      },
      x: -60,
      opacity: 0,
      scale: 0.95,
      duration: 1.5,
      ease: 'power3.out'
    })

    // 3. Text & Heading reveal
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
      }
    })

    titleTl.from('.reveal-text span', {
      y: '100%',
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.out'
    })
      .from('.about-paragraph', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.stat-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.6')

    // 4. Background Decorative Side Text
    gsap.from('.side-text', {
      scrollTrigger: {
        trigger: section,
        start: 'top 50%',
      },
      x: 100,
      opacity: 0,
      duration: 2,
      ease: 'power4.out'
    })

    // --- NEW SHOWCASE EFFECT ANIMATIONS ---
    const scTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".showcase-visual-wrapper",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.set(".showcase-char", { yPercent: 100, opacity: 0 });
    gsap.set(".showcase-img-reveal", { scale: 1.2, autoAlpha: 0 });
    gsap.set(".showcase-img-wrapper", { clipPath: "inset(20% 20% 20% 20%)" });

    scTl
      .to(".showcase-img-reveal", { autoAlpha: 1, duration: 0.1 })
      .to(".showcase-img-wrapper", {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "expo.inOut"
      })
      .to(".showcase-img-reveal", {
        scale: 1,
        duration: 1.5,
        ease: "expo.inOut"
      }, "<")
      .to(".showcase-char", {
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1.0,
        ease: "power4.out"
      }, "-=1.0");

    // Marquee
    if (marqueeRef.current) {
      const inner = marqueeRef.current.querySelector('.marquee-inner');
      gsap.to(inner, {
        xPercent: -50,
        repeat: -1,
        duration: 5, // Much faster speed
        ease: "none",
      });
    }

    // Scroll Parallax for Showcase Titles
    gsap.to(".showcase-title-top", {
      yPercent: -50,
      scrollTrigger: {
        trigger: ".showcase-visual-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".showcase-title-bottom", {
      yPercent: 30,
      scrollTrigger: {
        trigger: ".showcase-visual-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef })

  const marqueeWords = [
    { text: "ELEVATING AUTHORITY", font: "font-heading font-black uppercase" },
    { text: "DIGITAL IMPACT", font: "font-heading font-black uppercase" },
    { text: "STRATEGIC GROWTH", font: "font-heading font-black uppercase" },
    { text: "MODERN BRANDING", font: "font-heading font-black uppercase" },
    { text: "CREATIVE EXCELLENCE", font: "font-heading font-black uppercase" },
    { text: "VISUAL IDENTITY", font: "font-heading font-black uppercase" },
    { text: "NEXT-GEN SOLUTIONS", font: "font-heading font-black uppercase" },
    { text: "PREMIUM DESIGN", font: "font-heading font-black uppercase" }
  ];

  return (
    <section
      ref={containerRef}
      className='relative w-full bg-[#FDFDFD] px-6 md:px-12 lg:px-20 pt-10 md:pt-32 pb-0 overflow-hidden'
      id="about"
    >
      {/* Background Decor - Removed Blurs for performance */}

      <div className='max-w-7xl mx-auto'>
        {/* Centered Label */}
        <div className='section-label-container mb-6 md:mb-28 flex justify-center w-full overflow-hidden'>
          <div className='inline-flex items-center justify-center gap-6 w-max'>
            <div className='section-line w-12 md:w-24 h-px bg-secondary/30 origin-right' />
            <div className='section-label-inner'>
              <span className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.2em] text-secondary whitespace-nowrap'>
                Why Herlead
              </span>
            </div>
            <div className='section-line w-12 md:w-24 h-px bg-secondary/30 origin-left' />
          </div>
        </div>

        <div className='about-grid grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start'>

          {/* Image */}
          <div className='about-image-container lg:col-span-6 relative order-1 lg:order-1'>
            <div className='relative aspect-square w-full max-w-xl overflow-hidden rounded-sm bg-neutral-100'>
              <Image
                src="/images/general/about.webp"
                alt="About HerLead"
                fill
                className="object-cover transition-all duration-700"
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/20 via-transparent' />
            </div>
          </div>

          {/* Content */}
          <div className='about-content lg:col-span-6 space-y-12 order-2 lg:order-2'>
            <div className='space-y-6'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter text-text uppercase'>
                <div className='reveal-text overflow-hidden'>
                  <span className='inline-block'>BUILDING</span>
                </div>
                <div className='reveal-text overflow-hidden'>
                  <span className='inline-block text-secondary'>DIGITAL</span>
                </div>
                <div className='reveal-text overflow-hidden'>
                  <span className='inline-block text-secondary'>IMPACT.</span>
                </div>
              </h2>
            </div>

            <div className='max-w-xl space-y-8'>
              <p className='about-paragraph text-lg md:text-body-custom font-body font-bold text-text leading-relaxed'>
                {aboutContent.intro}
              </p>

              <p
                className='about-paragraph text-lg md:text-body-custom font-body text-text leading-relaxed whitespace-pre-line'
                dangerouslySetInnerHTML={{ __html: aboutContent.mainDescription }}
              />

              <div className='grid grid-cols-2 md:grid-cols-3 gap-10 pt-10 border-t border-black/5'>
                {[
                  { label: 'Experience', value: '10+' },
                  { label: 'Brands', value: '50+' },
                  { label: 'Results', value: '100%' }
                ].map((stat, i) => (
                  <div key={i} className='stat-item space-y-1'>
                    <span className='block text-xs uppercase tracking-[0.3em] font-heading font-black text-secondary'>{stat.label}</span>
                    <span className='text-4xl md:text-5xl font-black font-heading text-text'>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- NEW SHOWCASE EFFECT SECTION (Full Bleed Breakout) --- */}
      <div className="showcase-visual-wrapper relative w-screen left-1/2 -translate-x-1/2 h-screen md:h-[130vh] bg-bg-light flex flex-col items-center justify-center overflow-hidden mt-0 md:mb-0">
        {/* --- CENTRAL VISUAL --- */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[60vh] md:w-[45vw] md:h-[70vh] z-10 flex items-center justify-center pointer-events-none">
          <div className="showcase-img-wrapper w-full h-full overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
              alt="Hero Focal Point"
              fill
              className="showcase-img-reveal object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>

        {/* --- TYPOGRAPHY LAYERS --- */}
        <div className="absolute top-[13%] md:top-[15%] left-1/2 -translate-x-1/2 z-20 w-full text-center mix-blend-difference text-white pointer-events-none">
          <div className="showcase-title-top font-display font-bold text-[22vw] md:text-[10vw] leading-none uppercase tracking-tighter">
            {splitText("Modern")}
          </div>
        </div>

        <div className="absolute bottom-[23%] md:bottom-[23%] left-1/2 -translate-x-1/2 z-20 w-full text-center mix-blend-difference text-white pointer-events-none">
          <div className="showcase-title-bottom font-heading font-black text-[22vw] md:text-[10vw] leading-none uppercase tracking-tighter">
            {splitText("Brand")}
          </div>
        </div>

        {/* --- META DATA (Corners) --- */}
        <div className="absolute top-12 left-8 md:top-16 md:left-12 z-30 flex flex-col gap-2">
          <span className="font-heading font-black text-[10px] uppercase tracking-widest text-black">Est. 2024</span>
          <div className="w-10 h-px bg-black/20"></div>
        </div>

        <div className="absolute top-12 right-8 md:top-16 md:right-12 z-30 flex flex-col items-end gap-2">
          <span className="font-heading font-black text-[10px] uppercase tracking-widest text-right text-black">Global Reach</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
          </div>
        </div>



        {/* --- MARQUEE --- */}
        <div ref={marqueeRef} className="absolute bottom-0 w-full bg-secondary text-white py-10 md:py-14 z-50 overflow-hidden border-t border-white/5 mt-10">
          <div className="marquee-inner flex whitespace-nowrap will-change-transform">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
                {marqueeWords.map((word, idx) => (
                  <React.Fragment key={idx}>
                    <span className={`text-2xl md:text-5xl tracking-widest text-white ${word.font}`}>
                      {word.text}
                    </span>
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutSection
