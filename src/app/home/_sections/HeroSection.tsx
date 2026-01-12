'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logoImg from '@/assets/images/logo.png'
import { useTransition } from '@/components/TransitionProvider'
import NavigationMenu from '@/components/NavigationMenu'

const HeroSection = () => {
  const { transitionTo } = useTransition()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    transitionTo(path)
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Navigation Menu Overlay */}
      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 z-30">
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="text-2xl font-bold text-white tracking-widest uppercase cursor-pointer"
        >
          <span className="text-primary">Her</span>-Lead
        </a>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-white text-lg font-semibold tracking-wide cursor-pointer group flex items-center hover:text-primary transition-colors duration-300"
        >
          Menu
        </button>
      </div>

      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 w-full h-full flex flex-col justify-end items-center text-center px-6 md:px-12 pb-16 md:pb-24">
        <div className="w-64 md:w-96 lg:w-lg aspect-video relative mb-4">
          <Image 
            src={logoImg} 
            alt="Her Lead Logo" 
            fill 
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
        <p className="text-white/80 text-sm md:text-lg mt-2 font-medium tracking-widest uppercase">
          Empowering the next generation
        </p>
      </div>
    </section>
  )
}

export default HeroSection
