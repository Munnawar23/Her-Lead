'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface HeroSectionProps {
  isSplashFinished?: boolean;
}

const HeroSection = ({ isSplashFinished = false }: HeroSectionProps) => {
  const [showVideo, setShowVideo] = useState(true)
  const containerRef = useRef<HTMLElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const logoContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Ensure video starts when splash is finished
  useEffect(() => {
    if (isSplashFinished && showVideo && videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play()
        } catch (error) {
          console.log("Video auto-play failed:", error)
        }
      }
      playVideo()
    }
  }, [isSplashFinished, showVideo])

  const handleVideoEnd = () => {
    setShowVideo(false)
    setTimeout(() => {
      setShowVideo(true)
    }, 6000)
  }

  useGSAP(() => {
    if (showVideo) {
      // Show Video, Hide Logo
      gsap.to(containerRef.current, { backgroundColor: "#121212", duration: 0.8 });
      gsap.to(videoContainerRef.current, { opacity: 1, duration: 0.8, ease: "power2.inOut", display: "block" });
      gsap.to(logoContainerRef.current, { opacity: 0, scale: 1.1, duration: 0.8, ease: "power2.inOut", display: "none" });
    } else {
      // Show Logo, Hide Video
      gsap.to(containerRef.current, { backgroundColor: "#fffefc", duration: 0.8 });
      gsap.to(videoContainerRef.current, { opacity: 0, duration: 0.8, ease: "power2.inOut", display: "none" });
      gsap.to(logoContainerRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        display: "flex",
        onStart: () => {
          gsap.set(logoContainerRef.current, { scale: 0.9 })
        }
      });
    }
  }, { dependencies: [showVideo], scope: containerRef });

  return (
    <section ref={containerRef} className={`relative h-screen w-full overflow-hidden bg-bg-dark flex items-center justify-center transition-opacity duration-1000 ${isSplashFinished ? 'opacity-100' : 'opacity-0'}`}>

      {/* Video Content Container */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Premium Overlay Gradient - No Blur */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Logo Content Container */}
      <div
        ref={logoContainerRef}
        className="relative z-10 flex flex-col items-center justify-center p-8 opacity-0"
      >
        <Image
          src="/images/brand/logo.webp"
          alt="HerLead Logo"
          width={900}
          height={900}
          className="w-[280px] md:w-[500px] lg:w-[700px] h-auto relative z-10"
          priority
        />
        <h2 className="mt-8 md:mt-12 text-sm md:text-xl lg:text-3xl font-heading font-black uppercase tracking-[0.4em] text-black text-center max-w-2xl leading-relaxed">
          360° DIGITAL IMPACT
        </h2>
      </div>

      {/* Scroll indicator removed */}
    </section>
  )
}

export default HeroSection
