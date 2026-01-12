'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTransition } from '@/components/TransitionProvider'

import aboutImg from '@/assets/images/about.png'
import postImg from '@/assets/images/post.png'
import lionImg from '@/assets/images/lion.png'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = useTransition()

  const handleBackHome = (e: React.MouseEvent) => {
    e.preventDefault()
    transitionTo('/home')
  }

  useGSAP(() => {
    // Reveal animations for text and split sections
    gsap.from(".reveal-text", {
      yPercent: 100,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".reveal-trigger",
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(".reveal-item", {
       y: 50,
       opacity: 0,
       duration: 1.2,
       ease: "power3.out",
       scrollTrigger: {
         trigger: ".reveal-trigger",
         start: "top 80%",
         toggleActions: "play none none reverse"
       }
    })
  }, { scope: containerRef })

  return (
    <main ref={containerRef} className="min-h-screen bg-[#EBEBEB] text-black font-sans selection:bg-primary selection:text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-12 md:pb-20 reveal-trigger">
        
        {/* Main Hero Header - Stylized like home */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-12 md:mb-20 gap-4 sm:gap-0 overflow-hidden">
          <h1 className="reveal-text text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.8] tracking-tighter uppercase relative">
            Her-Lead
          </h1>
          <div className="reveal-text text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.8] tracking-tighter flex items-center">
            2026<span className="text-[0.4em] ml-2 text-primary italic font-black">©</span>
          </div>
        </div>

        {/* First Content Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-20 border-b border-black/5 pb-10 md:pb-16 mb-10 md:mb-16">
          
          {/* Left Column: Label */}
          <div className="md:col-span-4 lg:col-span-5 overflow-hidden">
            <h2 className="reveal-text text-xs font-bold tracking-[0.3em] uppercase text-black/40">Who we are</h2>
          </div>

          {/* Right Column: Text and Image */}
          <div className="md:col-span-6 lg:col-span-5 space-y-10 md:space-y-12">
            <div className="max-w-2xl overflow-hidden">
              <p className="reveal-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tighter text-black">
                Experienced team of in-house experts in <span className="text-primary italic">360° digital</span> elevation.
              </p>
            </div>

            <div className="max-w-2xl reveal-item">
              <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight text-black/60">
                With talent and skills to ideate, organize, execute, publish, distribute and scale award winning content that results in impactful and measurable results for some of the world's biggest brands.
              </p>
            </div>

            {/* Image Container */}
            <div className="reveal-item w-full relative overflow-hidden grayscale md:hover:grayscale-0 transition-all duration-1000 rounded-sm group">
               <Image 
                src={aboutImg} 
                alt="Our Team"
                className="w-full h-auto scale-110 group-hover:scale-100 transition-transform duration-1000"
                priority
               />
            </div>
          </div>

        </div>

        {/* Second Content Section Grid: Public Relations */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-20 mb-4 md:mb-8">
          
          {/* Left Column: Label */}
          <div className="md:col-span-4 lg:col-span-5 overflow-hidden">
            <h2 className="reveal-text text-xs font-bold tracking-[0.3em] uppercase text-black/40">Public Relations</h2>
          </div>

          {/* Right Column: Text */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="max-w-2xl space-y-8">
              <div className="overflow-hidden">
                <p className="reveal-text text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-black uppercase">
                  Bold storytelling. <br/> Smart strategy. <br/> <span className="text-primary italic">Momentum.</span>
                </p>
              </div>
              <div className="reveal-item space-y-8">
                <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight text-black/80">
                  As a full-service public relations agency, bold storytelling and smart strategy are at the core of everything we do. Media coverage that moves the needle and makes your brand newsworthy.
                </p>
                <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight text-black/80">
                  We blend traditional tactics with a digital-first approach to ensure your story stands out, shaping perception and turning any message into momentum for startups and national brands alike.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Image Gallery Section */}
        <div className="grid grid-cols-2 md:grid-cols-10 gap-x-10 gap-y-12 items-start reveal-item">
          
          {/* Left Large Image */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-center group">
            <div className="w-full aspect-2/3 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-sm mb-6">
              <Image 
                src={postImg} 
                alt="Post" 
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="font-bold text-xs md:text-sm uppercase tracking-[0.2em] transform group-hover:translate-y-[-5px] transition-all duration-300 text-center italic">
              Her mode on <br />
              <span className="opacity-30 not-italic uppercase tracking-widest text-[10px]">2026</span>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-3"></div>

          {/* Right Smaller Image */}
          <div className="col-span-2 md:col-span-3 flex flex-col items-center md:mt-40 group">
            <div className="w-full aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-sm mb-6">
              <Image 
                src={lionImg} 
                alt="Lion" 
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="font-bold text-xs md:text-sm uppercase tracking-[0.2em] transform group-hover:translate-y-[-5px] transition-all duration-300 text-center italic">
              Strength in unity <br />
              <span className="opacity-30 not-italic uppercase tracking-widest text-[10px]">2026</span>
            </div>
          </div>

        </div>

        {/* Back to Home Button Footer */}
        <div className="mt-12 md:mt-20 border-t border-black/10 pt-12 flex justify-center reveal-item">
          <button 
            onClick={handleBackHome}
            className="group relative flex flex-col items-center gap-6 uppercase text-[10px] font-black tracking-[0.4em] text-black/40 hover:text-black transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
              <span className="text-lg transform group-hover:translate-y-[-2px] transition-transform">↑</span>
            </div>
            <span className="group-hover:tracking-[0.6em] transition-all duration-500">Return Home</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default AboutPage