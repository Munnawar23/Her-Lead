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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const magneticRef = useRef<HTMLButtonElement>(null)

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    transitionTo(path)
  }

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
    .fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 },
      '-=1'
    )

    // Magnetic effect for menu button
    const moveMagnetic = (e: MouseEvent) => {
      const btn = magneticRef.current
      if (!btn) return
      
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    const resetMagnetic = () => {
      gsap.to(magneticRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      })
    }

    magneticRef.current?.addEventListener('mousemove', moveMagnetic)
    magneticRef.current?.addEventListener('mouseleave', resetMagnetic)

    return () => {
      magneticRef.current?.removeEventListener('mousemove', moveMagnetic)
      magneticRef.current?.removeEventListener('mouseleave', resetMagnetic)
    }
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Navigation Menu Overlay */}
      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {/* Top Navigation */}
      <div ref={navRef} className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 z-30">
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="group cursor-pointer"
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-black tracking-tighter uppercase transition-all duration-500">
              <span className="text-text group-hover:text-primary transition-colors duration-500">Her</span>
              <span className="text-primary group-hover:text-text transition-colors duration-500">Lead</span>
            </h1>
            <div className="ml-1 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" />
          </div>
          <div className="h-px w-0 group-hover:w-full bg-linear-to-r from-primary to-transparent transition-all duration-700 mt-1" />
        </a>

        <button 
          ref={magneticRef}
          onClick={() => setIsMenuOpen(true)}
          className="text-text text-lg font-semibold tracking-wide cursor-pointer group flex items-center hover:text-primary transition-all duration-300 px-4 py-2"
        >
          <span className="relative overflow-hidden inline-block">
            <span className="block group-hover:-translate-y-full transition-transform duration-500 font-heading text-xs uppercase tracking-[0.3em]">Menu</span>
            <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500 font-heading text-xs uppercase tracking-[0.3em] text-primary">Open</span>
          </span>
          <div className="ml-4 flex flex-col gap-1">
            <div className="w-6 h-px bg-text group-hover:bg-primary transition-colors duration-300" />
            <div className="w-4 h-px bg-text group-hover:w-6 group-hover:bg-primary transition-all duration-300" />
          </div>
        </button>
      </div>

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

      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-6 md:px-12">
        <div ref={logoRef} className="w-72 md:w-md lg:w-xl aspect-video relative mb-8 drop-shadow-[0_0_50px_rgba(0,0,0,0.05)]">
          <Image 
            src={logoImg} 
            alt="Her Lead Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
        
        <div className="space-y-6">
          <p ref={taglineRef} className="text-white/80 text-xs md:text-sm font-bold tracking-[0.8em] uppercase italic">
            Empowering the next generation
          </p>
          <div className="w-12 h-px bg-primary mx-auto opacity-50" />
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
