'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import logoImg from '@/assets/images/logo.png'
import { useTransition } from '@/components/TransitionProvider'
import NavigationMenu from '@/components/NavigationMenu'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HeroSection = () => {
  const { transitionTo } = useTransition()
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    tl.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0, y: 40 },
      { scale: 1, opacity: 1, y: 0, duration: 2, delay: 0.5 }
    )
    .fromTo(
      taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5 },
      '-=1.2'
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/soon.mp4" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-black/20" />
      </div>

      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-6 md:px-12">
        <div className="max-w-4xl space-y-6">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase">
            Elevate Your <br />
            Digital <span className="text-red-light">Impact</span><span className="text-primary">.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white max-w-2xl mx-auto font-medium leading-relaxed">
            We build bold brands through strategic storytelling, <br className="hidden md:block" />
            creative digital experiences, and cultural influence.
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => transitionTo('/services')}
              className="px-8 py-4 bg-red-light text-white rounded-full font-heading font-black text-xs uppercase tracking-wider hover:bg-white hover:text-red-light transition-all shadow-xl"
            >
              Our Services
            </button>
            <button 
              onClick={() => transitionTo('/contact')}
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-full font-heading font-black text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-all shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
        <span className="text-white text-[10px] uppercase tracking-[0.4em] font-black font-heading">Explore</span>
        <div className="relative w-[2px] h-16 bg-white/30 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[scroll-hint_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-hint {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
