'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    })
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/soon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure it looks cinematic or to darken if needed */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}

export default HeroSection

