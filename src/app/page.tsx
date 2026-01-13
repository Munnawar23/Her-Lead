'use client'

import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const SplashScreen = () => {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLHeadingElement>(null)
  
  // State to force re-render for counter if needed, though GSAP handles innerText better usually
  // We will use a GSAP object to tween the value
  
  useGSAP(() => {
    const tl = gsap.timeline()
    const counterObj = { value: 0 }

    // 1. Counter Animation 0 -> 100
    tl.to(counterObj, {
      value: 100,
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: () => {
         if (counterRef.current) {
            counterRef.current.innerText = Math.round(counterObj.value) + '%'
         }
      }
    })

    // 2. Reveal Brand Name (simultaneously or slightly after)
    .to('.loading-bar', {
       width: '100%',
       duration: 2.5,
       ease: 'power2.out'
    }, 0)

    // 3. Text Reveal
    .to('.counter-container', {
       opacity: 0,
       duration: 0.5,
       ease: 'power2.inOut'
    })
    .fromTo('.brand-text span', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out' }
    )
    .fromTo('.tagline',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.5'
    )

    // 4. Exit Animation (Curtain Up)
    .to('.splash-curtain', {
       height: 0,
       duration: 1.2,
       ease: 'power4.inOut',
       delay: 0.5,
       onComplete: () => {
         router.push('/home')
       }
    })
  }, { scope: containerRef })

  return (
    <div 
      ref={containerRef}
      className='splash-curtain fixed inset-0 z-50 flex flex-col justify-between bg-black text-white px-6 py-8 overflow-hidden'
    >
      {/* Top Details */}
      <div className="flex justify-between items-start opacity-50 text-[10px] uppercase tracking-[0.2em] font-bold">
         <span>Est. 2026</span>
      </div>

      {/* Center Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
         {/* Brand Reveal (Hidden Initially) */}
         <div className="brand-reveal w-full overflow-hidden">
             <h1 className="brand-text text-[10vw] md:text-[6vw] font-black uppercase leading-none font-heading flex justify-center gap-[2vw]">
                <span className="inline-block">Her</span>
                <span className="inline-block text-primary">Lead</span>
             </h1>
             <p className="tagline mt-4 font-heading text-sm md:text-xl text-white/60 tracking-[0.5em] uppercase font-bold">
               Digital Elevation
             </p>
         </div>
      </div>

      {/* Bottom Loading Bar */}
      <div className="w-full flex flex-col justify-end">
         {/* Counter */}
         <div className="counter-container text-left mb-[-1vw]">
            <h1 ref={counterRef} className="text-[15vw] md:text-[10vw] font-black leading-none font-heading text-white tabular-nums">
               0%
            </h1>
         </div>

         <div className="w-full h-px bg-white/10 overflow-hidden relative mb-3">
            <div className="loading-bar absolute top-0 left-0 h-full w-0 bg-primary" />
         </div>
         
         <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
            <span>Loading Experience</span>
            <span>Please Wait</span>
         </div>
      </div>
    </div>
  )
}

export default SplashScreen
