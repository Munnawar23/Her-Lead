'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logoImg from '@/assets/images/logo.png'
import { useTransition } from '@/components/TransitionProvider'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const { transitionTo } = useTransition()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't show navbar on splash screen
  if (pathname === '/') return null;

  const navLinks = [
    { name: 'Services', path: '/home#services', hasDropdown: true },
    { name: 'About Us', path: '/about', hasDropdown: true },
    { name: 'Careers', path: '/careers', hasDropdown: false },
    { name: 'Contact', path: '/home#contact', hasDropdown: false },
  ]

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('#') || path.includes('#')) {
      if (!path.startsWith('#') && !window.location.pathname.includes(path.split('#')[0])) {
          e.preventDefault()
          transitionTo(path)
      }
      return
    }
    e.preventDefault()
    transitionTo(path)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5 transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Logo Only */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={(e) => handleNavClick(e, '/home')}
        >
          <div className="relative w-12 h-12 overflow-hidden transition-transform duration-500 group-hover:scale-110">
            <Image 
              src={logoImg} 
              alt="Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Center: Nav Items */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-[11px] uppercase tracking-[0.25em] font-heading font-black text-text hover:text-red-light transition-colors flex items-center gap-1.5"
              >
                {link.name}
                {link.hasDropdown && (
                  <svg className="w-2.5 h-2.5 opacity-50 text-primary group-hover:translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </a>
              <div className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={(e) => handleNavClick(e, '/careers')}
            className="hidden md:flex items-center gap-3 px-7 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-heading font-black border border-text/10 hover:border-red-light hover:text-red-light group transition-all duration-300"
          >
            I'm a Talent
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
          
          <button 
            onClick={(e) => handleNavClick(e, '/home#contact')}
            className="flex items-center gap-3 px-8 py-3.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-heading font-black text-white bg-red-light shadow-lg shadow-red-light/20 hover:shadow-red-light/40 hover:scale-[1.03] active:scale-[0.97] transition-all group"
          >
            Request a Quote
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
