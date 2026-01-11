'use client'

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const SplashScreen = () => {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLHeadingElement>(null)
  const line2Ref = useRef<HTMLParagraphElement>(null)
  const line3Ref = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    const timeline = gsap.timeline()

    // Animate text lines from right to left with opacity
    timeline
      .fromTo(
        line1Ref.current,
        { 
          opacity: 0, 
          x: 100 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.2,
          ease: 'power3.out'
        }
      )
      .fromTo(
        line2Ref.current,
        { 
          opacity: 0, 
          x: 100 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.2,
          ease: 'power3.out'
        },
        '-=0.4' // Start slightly before previous animation ends
      )
      .fromTo(
        line3Ref.current,
        { 
          opacity: 0, 
          x: 100 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.2,
          ease: 'power3.out'
        },
        '-=0.4'
      )
      // Wait for 1 second after all text animations
      .to({}, { duration: 1 })
      // Slide the entire page up
      .to(
        containerRef.current,
        {
          y: '-100%',
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete: () => {
            router.push('/home')
          }
        }
      )
  }, { scope: containerRef })

  return (
    <div 
      ref={containerRef}
      className='flex flex-col justify-center items-center h-screen w-full bg-black overflow-hidden'
    >
      <div className='flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4 max-w-4xl text-center'>
        <h1 
          ref={line1Ref}
          className='text-lg sm:text-2xl md:text-3xl font-bold text-yellow-500 opacity-0'
        >
          Her Lead
        </h1>
        <p 
          ref={line2Ref}
          className='text-lg sm:text-2xl md:text-3xl text-white opacity-0'
        >
          A 360° Digital Elevation Agency
        </p>
        <p 
          ref={line3Ref}
          className='text-lg sm:text-2xl md:text-3xl text-white opacity-0'
        >
          Creating Impactful & Measurable Results
        </p>
      </div>
    </div>
  )
}

export default SplashScreen
