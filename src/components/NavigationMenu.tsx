'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'
import Image from 'next/image'

// Import images for menu items
import aboutImg from '@/assets/images/about.png'
import lionImg from '@/assets/images/lion.png'
import postImg from '@/assets/images/post.png'
import logoImg from '@/assets/images/logo.png'

interface NavigationMenuProps {
  isOpen: boolean
  onClose: () => void
}

const NavigationMenu = ({ isOpen, onClose }: NavigationMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const socialsRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = useTransition()

  const menuItems = [
    { name: 'Home', path: '/home', img: aboutImg },
    { name: 'About', path: '/about', img: lionImg },
    { name: 'Services', path: '/services', img: postImg },
    { name: 'Projects', path: '/projects', img: logoImg },
  ]

  useGSAP(() => {
    if (isOpen) {
      const tl = gsap.timeline()
      
      tl.to(containerRef.current, {
        left: 0,
        duration: 0.8,
        ease: 'expo.inOut',
      })

      tl.fromTo(
        menuItemsRef.current,
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'expo.out' 
        },
        '-=0.4'
      )

      tl.fromTo(
        socialsRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: 'expo.out' 
        },
        '-=0.6'
      )
    } else {
      gsap.to(containerRef.current, {
        left: '-100%',
        duration: 0.6,
        ease: 'expo.inOut',
      })
    }
  }, [isOpen])

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    onClose()
    setTimeout(() => {
      transitionTo(path)
    }, 600)
  }

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 -left-full w-full h-screen bg-white z-100 overflow-hidden flex flex-col justify-center"
    >
      <div 
        onClick={onClose}
        className="absolute top-0 right-0 p-10 text-xl font-bold uppercase cursor-pointer text-black hover:text-primary transition-colors"
      >
        Close
      </div>

      <div 
        ref={socialsRef}
        className="absolute bottom-0 left-0 m-10 md:mx-24 flex gap-8 socials text-black"
      >
        <span className="uppercase tracking-widest text-sm font-bold cursor-pointer hover:text-primary">Facebook</span>
        <span className="uppercase tracking-widest text-sm font-bold cursor-pointer hover:text-primary">Instagram</span>
      </div>

      <nav className="flex flex-col py-20">
        {menuItems.map((item, index) => (
          <div 
            key={item.name}
            ref={(el) => { menuItemsRef.current[index] = el }}
            className="group relative px-[6vw] overflow-visible h-[12vh] flex items-center"
          >
            <a 
              href={item.path}
              onClick={(e) => handleLinkClick(e, item.path)}
              className="relative z-10 text-[7vw] leading-none font-bold tracking-tighter text-black transition-opacity duration-300 group-hover:opacity-0 cursor-pointer italic"
            >
              {item.name}
            </a>

            <div className="absolute left-[8%] top-[10%] z-20 pointer-events-none opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 w-[20vw] aspect-video">
              <Image 
                src={item.img} 
                alt={item.name}
                className="object-cover w-full h-full rounded-lg shadow-2xl"
              />
            </div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none flex items-center">
              <div className="flex whitespace-nowrap opacity-0 translate-x-[60px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                {[...Array(6)].map((_, i) => (
                  <span 
                    key={i}
                    className="text-[7vw] leading-none font-bold tracking-tighter text-[#d6d6d6] italic px-4"
                  >
                    {item.name} —
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default NavigationMenu
