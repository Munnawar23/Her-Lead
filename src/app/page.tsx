'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

import { useTransition } from '@/context/TransitionProvider'

const SplashScreen = () => {
  const { transitionTo } = useTransition()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // Initial State
    gsap.set('.word-cycle-item', { y: 20, opacity: 0 })
    gsap.set('.brand-logo', { filter: 'blur(20px)', opacity: 0, scale: 1.1 })

    // Loading Bar
    tl.to('.loading-bar', {
      width: '100%',
      duration: 3,
      ease: 'none'
    })

    // Word Cycle
    const cycleWords = ['.word-1', '.word-2', '.word-3']
    cycleWords.forEach((word, i) => {
      tl.to(word, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, i * 0.7)
        .to(word, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        }, (i * 0.7) + 0.5)
    })

    // Logo Reveal
    tl.to('.loading-section', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    }, '-=0.2')
      .to('.brand-logo', {
        filter: 'blur(0px)',
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'expo.out'
      })
      .fromTo('.tagline',
        { opacity: 0, letterSpacing: '1em' },
        { opacity: 1, letterSpacing: '0.5em', duration: 1.5, ease: 'power3.out' },
        '-=1'
      )
      .to('.splash-curtain', {
        yPercent: -100,
        duration: 1.2,
        ease: 'expo.inOut',
        delay: 0.8,
        onComplete: () => transitionTo('/home')
      })
  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      className='splash-curtain fixed inset-0 z-50 flex flex-col justify-between bg-background text-text px-10 py-12 overflow-hidden'
    >
      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-60 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

      {/* Top Section */}
      <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-black text-text">
        <div className="flex items-center gap-4">
          <span className="w-10 h-[2px] bg-text" />
          <span>Digital Elevation</span>
        </div>
        <span>Est. 2026</span>
      </div>

      {/* Center Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10">
        <div className="relative h-20 flex items-center justify-center">
          <h2 className="word-cycle-item word-1 absolute text-[6vw] md:text-[3vw] font-black tracking-[0.2em] uppercase text-text">
            Strategy
          </h2>
          <h2 className="word-cycle-item word-2 absolute text-[6vw] md:text-[3vw] font-black tracking-[0.2em] uppercase text-text">
            Creativity
          </h2>
          <h2 className="word-cycle-item word-3 absolute text-[6vw] md:text-[3vw] font-black tracking-[0.2em] uppercase text-text">
            Growth
          </h2>
        </div>

        {/* Logo */}
        <div className="brand-reveal w-full flex flex-col items-center">
          <div className="brand-logo w-[50vw] md:w-[22vw] max-w-sm">
            <Image
              src="/images/logo.png"
              alt="Brand Logo"
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.05)]"
              priority
            />
          </div>
          <p className="tagline mt-10 font-heading text-xs md:text-sm text-text tracking-[0.5em] uppercase font-black">
            360° Digital Elevation
          </p>
        </div>
      </div>

      {/* Bottom Loading */}
      <div className="loading-section w-full flex flex-col z-10 max-w-xs">
        <div className="flex justify-between text-[9px] uppercase tracking-[0.3em] font-black text-text mb-3">
          <span>Preparing Experience</span>
          <span>Launching</span>
        </div>
        <div className="w-full h-[2px] bg-text/10 overflow-hidden relative">
          <div className="loading-bar absolute top-0 left-0 h-full w-0 bg-primary" />
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
