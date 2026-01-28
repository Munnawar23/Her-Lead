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
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />

        {/* Subtle non-blurred accents */}
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-secondary/5 rounded-full" />

        {/* Grain Texture (Low impact) */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-0 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* --- LEFT SIDE: THE CONTENT --- */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <motion.div
            variants={slideIn}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-black rounded-lg transform lg:-rotate-1"
          >
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
            <span className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-white">Digital Elevation </span>
          </motion.div>

          <div className="space-y-0">
            <div className="overflow-hidden">
              <motion.h1
                variants={slideIn}
                className="text-6xl md:text-8xl lg:text-[7vw] font-heading font-black text-black leading-[0.9] tracking-tighter uppercase will-change-transform"
              >
                360°
              </motion.h1>
            </div>
            <div className="overflow-hidden relative">
              <motion.h1
                variants={slideIn}
                className="text-6xl md:text-8xl lg:text-[7vw] font-heading font-black text-primary leading-[0.9] tracking-tighter uppercase will-change-transform"
              >
                DIGITAL
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 md:h-2 bg-secondary/80 -z-10 origin-left skew-x-[-15deg]"
              />
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={slideIn}
                className="text-6xl md:text-8xl lg:text-[7vw] font-display font-black text-black leading-[0.9] tracking-tighter italic uppercase will-change-transform"
              >
                Impact<span className="text-secondary">.</span>
              </motion.h1>
            </div>
          </div>

          <motion.p
            variants={slideIn}
            className="mt-6 max-w-sm text-sm md:text-base font-body font-bold text-black/50 leading-tight uppercase tracking-widest border-l-4 border-primary pl-4 md:pl-6 text-center lg:text-left mx-auto lg:mx-0"
          >
            We set the digital pace for global brands.
          </motion.p>

          <motion.div
            variants={slideIn}
            className="mt-8 flex flex-col sm:flex-row items-center gap-8"
          >
            <button className="px-8 py-4 bg-black text-white text-[10px] font-heading font-black uppercase tracking-widest rounded-sm hover:translate-y-[-2px] transition-transform shadow-[6px_6px_0px_0px_rgba(212,175,55,0.4)]">
              Start Project
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[21, 22, 23].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-text/10 overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Client" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase opacity-40 tracking-wider">50+ Trust HerLead</span>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: COMPACT ART (No heavy filters) --- */}
        <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex items-center justify-center">
          <div className="relative w-full aspect-square flex items-center justify-center">

            {/* Simplified Logo Composition (No Blur Card) */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
              className="relative w-[70%] md:w-[60%] lg:w-[70%] z-10 will-change-transform"
            >
              <Image
                src="/images/logo.webp"
                alt="HerLead Hero"
                width={800}
                height={800}
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
                priority
              />
            </motion.div>

            {/* Lightweight Accent Elements */}

            {/* 2. Simple Sticker (Top Right) */}
            <motion.div
              animate={{ rotate: [12, 10, 12], y: [0, -5, 0] }}
              className="absolute top-[5%] right-[5%] bg-white border-2 border-black px-4 py-2 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20"
            >
              <span className="text-[10px] md:text-xs font-black uppercase whitespace-nowrap">Verified Collective</span>
            </motion.div>

            {/* 3. Global Reach Pill (Middle Left) */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-4 md:-left-12 bg-secondary text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 -rotate-90 origin-left"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Global Strategy</span>
            </motion.div>

            {/* 4. Top Agency Badge (Bottom Right - Outer) */}
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 -right-6 md:-right-10 bg-[#FFD700] text-black border-2 border-black px-4 py-3 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-30"
            >
              <div className="flex flex-col items-center">
                <span className="text-[14px] md:text-[18px]">🏆</span>
                <span className="text-[8px] font-black uppercase leading-none mt-1">Lead the</span>
                <span className="text-[10px] font-black uppercase">Impact</span>
              </div>
            </motion.div>

            {/* 5. Keyword Tags (Scattered) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              className="absolute top-[20%] right-[-5%] bg-primary text-white px-3 py-1 rounded-sm text-[8px] font-black uppercase tracking-tighter rotate-12 z-20 shadow-lg"
            >
              #CREATIVE
            </motion.div>

            {/* 6. Digital Pulse Seal (Bottom Center-ish) */}
            <div className="absolute bottom-4 right-4 md:bottom-10 md:right-[15%] z-20 scale-75 md:scale-90">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" as const }}
                className="relative w-32 h-32 md:w-36 md:h-36 border border-black/10 rounded-full flex items-center justify-center"
              >
                <svg className="absolute w-full h-full fill-black opacity-30 font-black uppercase tracking-tighter" viewBox="0 0 100 100">
                  <defs>
                    <path id="textPath" d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
                  </defs>
                  <text fontSize="8.5">
                    <textPath xlinkHref="#textPath">INFLUENCE • SCALE • LEAD • DESIGN • IMPACT • </textPath>
                  </text>
                </svg>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-xl font-black">★</span>
                </div>
              </motion.div>
            </div>

            {/* 7. Geometric Decor (Low impact) */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-1/4 right-[20%] text-2xl font-black text-primary">+</div>
              <div className="absolute bottom-1/3 left-0 text-2xl font-black text-secondary">×</div>
              <div className="absolute top-[10%] left-1/2 flex gap-1">
                <div className="w-1 h-1 bg-black rounded-full" />
                <div className="w-1 h-1 bg-black rounded-full" />
                <div className="w-1 h-1 bg-black rounded-full" />
              </div>
            </div>

            {/* 8. Performance Graphic (Bottom Left) */}
            <div className="absolute bottom-[5%] left-0 bg-secondary text-white px-6 py-5 rounded-[2rem] shadow-2xl rotate-[-8deg] hidden md:block z-20 border-2 border-white/20">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-heading font-black">250%</span>
                <span className="text-[9px] font-black uppercase tracking-widest opacity-90">Verified Results</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-[8px] font-black uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-8 bg-black animate-bounce" />
      </div>

    </motion.section>
  )
}

export default HeroSection
