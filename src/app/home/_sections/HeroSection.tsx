'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import logoImg from '@/assets/images/logo.png'
import { useTransition } from '@/components/TransitionProvider'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const { transitionTo } = useTransition()
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 1.8 } })

    // Curtain reveal animation
    tl.to(".reveal-curtain", {
      height: 0,
      stagger: 0.1,
    })
    .from(".hero-content", {
      opacity: 0,
      y: 40,
      duration: 1.5,
    }, "-=1")
    .from(".floating-thumbnail", {
      opacity: 0,
      scale: 0.8,
      y: 100,
      stagger: 0.2,
      rotate: (index) => (index === 0 ? -15 : 15),
      duration: 2,
      ease: "expo.out"
    }, "-=1.5")

    // Removal of floating animation to keep images stable
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Initials */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[40vw] font-black text-white/3 select-none leading-none">HL</span>
      </div>

      {/* Reveal Curtains (Hidden until first load) */}
      <div className="absolute inset-0 z-50 flex pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="reveal-curtain flex-1 bg-red-light" />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="hero-content space-y-6">
           <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-red-light" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-red-light">Creative Agency</span>
           </div>
           
           <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight">
             Beyond <br /> 
             <span className="italic font-normal">the</span> <span className="text-primary italic">Lead</span>
           </h1>

           <p className="font-body text-sm md:text-lg text-white/50 max-w-md font-medium leading-relaxed uppercase tracking-widest">
             Helping bold brands find their voice and dominate the digital landscape through strategic storytelling.
           </p>

           <div className="pt-4">
              <button 
                onClick={() => transitionTo('/work')}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:border-red-light transition-all duration-500">
                  <div className="absolute inset-0 bg-red-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <ArrowRight className="relative z-10 text-white group-hover:-rotate-45 transition-transform duration-500" size={24} />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-light opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">Selected Projects</span>
                  <span className="text-lg font-display italic text-white group-hover:text-red-light transition-colors duration-500 underline decoration-white/20 group-hover:decoration-red-light underline-offset-8">Explore Our Work</span>
                </div>
              </button>
           </div>
        </div>

        {/* Floating Imagery Portfolio */}
        <div className="hidden lg:flex relative h-[600px] items-center justify-center">
          {/* Card 1 */}
          <div className="floating-thumbnail absolute top-0 right-0 w-[280px] aspect-3/4 rounded-lg overflow-hidden shadow-2xl border border-white/10 -rotate-6 z-20">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200" 
              className="w-full h-full object-cover" 
              alt="Fashion Editorial"
            />
          </div>
          {/* Card 2 */}
          <div className="floating-thumbnail absolute bottom-0 left-0 w-[240px] aspect-3/4 rounded-lg overflow-hidden shadow-2xl border border-white/10 rotate-12 z-10">
            <img 
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200" 
              className="w-full h-full object-cover grayscale" 
              alt="Digital Marketing"
            />
          </div>
          {/* Accent Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vh] h-[30vh] bg-primary/20 rounded-full blur-[100px] z-0 animate-pulse" />
        </div>
      </div>

    </section>
  )
}

export default HeroSection
