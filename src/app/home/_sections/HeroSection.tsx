'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

interface HeroSectionProps {
  isSplashFinished?: boolean;
}

const HeroSection = ({ isSplashFinished = false }: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }
    }
  }

  return (
    <motion.section
      initial="hidden"
      animate={isSplashFinished ? "visible" : "hidden"}
      variants={containerVariants}
      className={`relative min-h-screen w-full flex items-center justify-center bg-bg-light overflow-hidden transition-opacity duration-1000 ${isSplashFinished ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* --- LIGHTWEIGHT PERFORMANCE BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Simple geometric accents instead of heavy blurs */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[40px_40px]" />

        {/* Subtle non-blurred accents */}
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-secondary/5 rounded-full" />

        {/* Grain Texture (Low impact) */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col items-center justify-center gap-0">

        {/* --- TOP SIDE: COMPACT ART (Logo) --- */}
        <div className="w-full max-w-[95vw] sm:max-w-[450px] md:max-w-[600px] flex items-center justify-center relative -mt-4 sm:-mt-8 md:-mt-16">
          <div className="relative w-full aspect-4/3 flex items-center justify-center">
            {/* Logo - Sized to fill mobile screen */}
            <div className="relative w-[95%] sm:w-[85%] z-10">
              <Image
                src="/images/brand/logo.webp"
                alt="HerLead Hero"
                width={1000}
                height={1000}
                className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
                priority
              />
            </div>

            {/* --- RESTORED BADGES & STICKERS --- */}


            {/* 2. Global Strategy Pill (Middle Left) */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[60%] -left-6 sm:-left-8 md:-left-12 bg-secondary text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg z-20 hidden md:flex items-center gap-1.5 sm:gap-2 -rotate-90 origin-left scale-110 sm:scale-100"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <span className="text-[8px] sm:text-[9px] font-heading font-black uppercase tracking-widest whitespace-nowrap">Global Strategy</span>
            </motion.div>

            {/* 3. Top Agency Badge (Bottom Right) */}
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[35%] -right-6 sm:-right-8 md:-right-12 bg-primary text-black border-2 border-black px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] z-30 hidden md:block scale-110 sm:scale-100"
            >
              <div className="flex flex-col items-center">
                <span className="text-[12px] sm:text-[14px] md:text-[16px]">🏆</span>
                <span className="text-[6px] sm:text-[8px] font-heading font-black uppercase leading-none mt-0.5 sm:mt-1">Lead the</span>
                <span className="text-[8px] sm:text-[10px] font-heading font-black uppercase">Impact</span>
              </div>
            </motion.div>

            {/* 4. Digital Pulse Seal (Bottom Center) */}
            <div className="absolute bottom-[-15%] right-0 sm:bottom-[0%] sm:right-[-5%] md:right-[-10%] z-20 scale-100 sm:scale-75 md:scale-90">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border border-black/10 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm"
              >
                <svg className="absolute w-full h-full fill-black opacity-30 font-black uppercase tracking-tighter" viewBox="0 0 100 100">
                  <defs>
                    <path id="textPath" d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
                  </defs>
                  <text fontSize="8.5" className="font-heading">
                    <textPath xlinkHref="#textPath">INFLUENCE • SCALE • LEAD • DESIGN • IMPACT • </textPath>
                  </text>
                </svg>
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center shadow-md sm:shadow-xl">
                  <span className="text-white text-base sm:text-xl font-black">★</span>
                </div>
              </motion.div>
            </div>

            {/* 5. Results Graphic (Bottom Left) */}
            <div className="absolute bottom-[10%] left-[-20%] md:left-[-30%] bg-secondary text-white px-4 py-3 rounded-2xl shadow-xl rotate-[-8deg] hidden md:block z-20 border-2 border-white/20">
              <div className="flex flex-col items-center">
                <span className="text-xl font-heading font-black">250%</span>
                <span className="text-[8px] font-heading font-black uppercase tracking-widest opacity-90">Results</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SIDE: THE CONTENT (Title) --- */}
        <div className="flex flex-col items-center text-center z-20 space-y-4 sm:space-y-6 mt-6 md:-mt-12">
          <motion.div
            variants={slideIn}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-lg"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-white">Digital Elevation</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              variants={slideIn}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[5vw] font-heading font-black text-black leading-none tracking-tighter uppercase whitespace-nowrap will-change-transform px-4"
            >
              360° DIGITAL IMPACT
            </motion.h1>
          </div>

          <motion.p
            variants={slideIn}
            className="max-w-xl text-xs sm:text-xs md:text-sm font-body font-bold text-black/40 leading-relaxed uppercase tracking-widest text-center"
          >
            We set the digital pace for global brands.
          </motion.p>

          <motion.div
            variants={slideIn}
            className="flex flex-col sm:flex-row items-center gap-8 pt-4 sm:pt-2"
          >
            <button className="px-8 py-4 sm:px-10 sm:py-5 bg-secondary text-white text-[11px] font-heading font-black uppercase tracking-[0.3em] rounded-sm hover:-translate-y-1 transition-all shadow-xl active:scale-95">
              Start Project
            </button>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[21, 22, 23].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-black/5 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-[9px] font-heading font-black uppercase opacity-30 tracking-widest pl-2">50+ Trust HerLead</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-[8px] font-black uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-px h-8 bg-black animate-bounce" />
      </div>

    </motion.section>
  )
}

export default HeroSection
