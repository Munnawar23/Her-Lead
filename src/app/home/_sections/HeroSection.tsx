'use client'

import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[95vh] w-full overflow-hidden bg-background flex flex-col items-center justify-center pt-24 pb-12"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Abstract Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] floating-accent-1" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-red-light/10 rounded-full blur-[120px] floating-accent-2" />

        {/* Subtle Grid Accent */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#242424_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Logo with Glow Aura */}
        <div className="hero-logo relative w-[55vw] md:w-[25vw] max-w-lg mx-auto mb-8 md:mb-16 group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 -z-10" />
          <Image
            src="/images/logo.webp"
            alt="HerLead Logo"
            width={800}
            height={400}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Heading with Sophisticated Typography */}
        <div className="space-y-6">
          <h1 className="hero-heading flex flex-col items-center justify-center">
            <span className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-text leading-none tracking-tighter uppercase inline-block overflow-hidden">
              360° <span className="text-red-light italic">DIGITAL</span>
            </span>
            <span className="relative text-3xl md:text-5xl lg:text-7xl font-heading font-black text-primary leading-none tracking-[0.1em] md:tracking-[0.2em] uppercase mt-2">
              ELEVATION
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[2px] md:h-1 bg-primary/30" />
            </span>
          </h1>

          <div className="hero-subheading flex items-center justify-center gap-2 md:gap-4 pt-6 md:pt-10">
            <div className="h-[1px] w-4 md:w-8 bg-text/20" />
            <p className="text-[9px] md:text-sm font-body font-black text-text uppercase tracking-[0.2em] md:tracking-[0.5em] whitespace-nowrap">
              Strategy <span className="text-primary">•</span> Creativity <span className="text-primary">•</span> Growth
            </p>
            <div className="h-[1px] w-4 md:w-8 bg-text/20" />
          </div>
        </div>
      </div>

      {/* Decorative Floating Accents (Geometric) */}
      <div className="floating-accent absolute top-1/4 left-10 md:left-20 w-12 h-12 border border-primary/20 rounded-full hidden lg:block floating-accent-1" />
      <div className="floating-accent absolute bottom-1/4 right-10 md:right-20 w-16 h-16 border border-red-light/20 rotate-45 hidden lg:block floating-accent-2" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 lg:hidden">
        <span className="text-[10px] font-bold text-text/40 uppercase tracking-[0.3em] rotate-0 md:rotate-0">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-scroll-indicator" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
