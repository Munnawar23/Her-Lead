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
      {/* Video Background with Light Vignette */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-60 grayscale-[0.5] contrast-125"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-black/20" />
      </div>

      <div className="relative z-20 w-full h-full flex flex-col justify-end items-center text-center px-6 md:px-12 pb-24">
        <div ref={logoRef} className="w-48 md:w-64 lg:w-80 aspect-video relative mb-6 drop-shadow-[0_0_40px_rgba(0,0,0,0.05)]">
          <Image 
            src={logoImg} 
            alt="Her Lead Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
        
        <div className="space-y-4">
          <p ref={taglineRef} className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase italic">
            Empowering the next generation
          </p>
          <div className="w-10 h-px bg-primary mx-auto opacity-50" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="relative w-px h-16 bg-white/20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[scroll-hint_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        .bg-radial-vignette {
          background: radial-gradient(circle, transparent 40%, black 150%);
        }
        @keyframes scroll-hint {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
