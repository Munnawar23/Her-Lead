'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const AboutPage = () => {
  const router = useRouter()

  const handleBackHome = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <main className="min-h-screen bg-background text-text font-body selection:bg-primary selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">

        {/* Main Hero Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-32 gap-6 overflow-hidden">
          <h1 className="text-6xl md:text-8xl lg:text-[9vw] font-heading font-black leading-[0.8] tracking-tighter uppercase relative">
            Her<span className="text-red-light">-</span>Lead
          </h1>
          <div className="text-5xl md:text-7xl font-heading font-black leading-[0.8] tracking-tighter flex items-center">
            2026<span className="text-[0.4em] ml-2 text-primary italic">©</span>
          </div>
        </div>

        {/* First Content Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 border-b border-text/10 pb-16 md:pb-24 mb-16 md:mb-24">

          {/* Left Column: Label */}
          <div className="md:col-span-4 overflow-hidden">
            <h2 className="text-xs font-heading font-black tracking-[0.4em] uppercase text-red-light">Who we are</h2>
          </div>

          {/* Right Column: Text and Image */}
          <div className="md:col-span-8 space-y-12">
            <div className="overflow-hidden">
              <p className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-[0.9] tracking-tighter text-text uppercase">
                An experienced team of in-house experts in <span className="text-primary italic">360° digital</span> elevation.
              </p>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg md:text-xl font-body font-bold leading-relaxed text-text">
                We have the talent and skills to ideate, organize, execute, publish, distribute and scale award winning content that results in impactful and measurable results for some of the world's biggest brands.
              </p>
            </div>

            {/* Image Container */}
            <div className="w-full relative overflow-hidden grayscale md:hover:grayscale-0 transition-all duration-1000 rounded-sm group aspect-16/9 bg-gray-100">
              <Image
                src="/images/about-editorial.png"
                alt="Our Team"
                layout="fill"
                objectFit="cover"
                className="scale-110 group-hover:scale-100 transition-transform duration-1000"
                priority
              />
            </div>
          </div>

        </div>

        {/* Second Content Section Grid: Public Relations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16 md:mb-32">

          {/* Left Column: Label */}
          <div className="md:col-span-4 overflow-hidden">
            <h2 className="text-xs font-heading font-black tracking-[0.4em] uppercase text-primary">Public Relations</h2>
          </div>

          {/* Right Column: Text */}
          <div className="md:col-span-8">
            <div className="max-w-2xl space-y-10">
              <div className="overflow-hidden">
                <p className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.1] tracking-tighter text-text uppercase">
                  Where PR meets strategy, <span className="text-red-light italic">your story</span> finds its audience
                </p>
              </div>
              <div className="space-y-8">
                <p className="text-lg md:text-xl font-body leading-relaxed text-text">
                  As a full-service public relations agency, bold storytelling and smart strategy are at the core of everything we do. The cherry on top? Media coverage that moves the needle and makes your brand newsworthy.
                </p>
                <p className="text-lg md:text-xl font-body leading-relaxed text-text">
                  Modern PR isn’t just about press releases and public image. It’s about shaping perception and turning any message into momentum. We’re a PR agency that blends traditional tactics with a digital-first approach to ensure your story stands out.
                </p>
                <p className="text-base md:text-lg font-body font-bold text-red-light uppercase tracking-widest">
                  Custom visibility, trust and growth.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Image Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Left Large Image */}
          <div className="md:col-span-5 flex flex-col items-center group">
            <div className="w-full aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-sm mb-6 bg-gray-100">
              <Image
                src="/images/post.png"
                alt="Post"
                layout="fill"
                objectFit="cover"
                className="scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="font-heading font-black text-xs md:text-sm uppercase tracking-[0.3em] transform group-hover:translate-y-[-5px] transition-all duration-300 text-center italic">
              Her mode on <span className="text-red-light">2026</span>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Right Smaller Image */}
          <div className="md:col-span-5 flex flex-col items-center md:mt-32 group">
            <div className="w-full aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-sm mb-6 bg-gray-100">
              <Image
                src="/images/lion.png"
                alt="Lion"
                layout="fill"
                objectFit="cover"
                className="scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="font-heading font-black text-xs md:text-sm uppercase tracking-[0.3em] transform group-hover:translate-y-[-5px] transition-all duration-300 text-center italic">
              Strength in unity <span className="text-primary">2026</span>
            </div>
          </div>

        </div>

        {/* Back to Home Button Footer */}
        <div className="mt-20 md:mt-40 border-t border-text/10 pt-20 flex justify-center">
          <button
            onClick={handleBackHome}
            className="group relative flex flex-col items-center gap-6 uppercase text-[10px] font-heading font-black tracking-[0.5em] text-text hover:text-red-light transition-all duration-500"
          >
            <div className="w-20 h-20 rounded-full border-2 border-text/10 flex items-center justify-center group-hover:bg-red-light group-hover:border-red-light group-hover:text-white transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
              <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </div>
            <span className="group-hover:tracking-[0.8em] transition-all duration-500">Return Home</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default AboutPage