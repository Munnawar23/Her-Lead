'use client'

import React, { useState, useEffect } from 'react'
import { useTransition } from '@/components/TransitionProvider'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logoImg from '@/assets/images/logo.png'

const Navbar = () => {
  const { transitionTo } = useTransition()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if scrolled past threshold
      setScrolled(currentScrollY > 50)
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else if (currentScrollY < lastScrollY) {
        setHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Don't show navbar on splash screen
  if (pathname === '/') return null;

  const navLinks = [
    { name: 'Home', path: '/home', action: 'reload' },
    { name: 'About', path: '/about', action: 'transition' },
    { name: 'Services', path: '/home#services', action: 'scroll' },
  ]

  const handleNavClick = (e: React.MouseEvent, link: any) => {
    if (link.action === 'reload') {
      window.location.href = link.path;
      return;
    }
    
    if (link.action === 'scroll') {
      if (window.location.pathname === '/home') {
        e.preventDefault();
        const element = document.getElementById('services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }

    e.preventDefault()
    transitionTo(link.path)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg shadow-blue-500/10 transition-all duration-500 ${scrolled ? 'py-0.5' : 'py-1.5'} ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <div 
            className="w-20 cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-all z-50" 
            onClick={() => window.location.href = '/home'}
          >
            <Image 
              src={logoImg} 
              alt="Her Lead Logo" 
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="text-[11px] uppercase tracking-[0.2em] font-heading font-semibold text-text hover:text-red-light transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-light group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right: Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={(e) => handleNavClick(e, { path: '/careers', action: 'transition' })}
              className="flex items-center gap-2 px-6 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-heading font-bold border-2 border-text hover:border-red-light hover:text-red-light transition-all duration-300"
            >
              I'm a Talent
            </button>
            
            <button 
              onClick={(e) => handleNavClick(e, { path: '/careers', action: 'transition' })}
              className="flex items-center gap-2 px-6 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-heading font-bold text-white bg-red-light shadow-lg shadow-red-light/20 hover:shadow-red-light/40 hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              I'm an Influencer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {/* Mobile Nav Links */}
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-2xl uppercase tracking-[0.2em] font-heading font-bold text-text hover:text-red-light transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
            <button 
              onClick={(e) => handleNavClick(e, { path: '/careers', action: 'transition' })}
              className={`w-full px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] font-heading font-bold border-2 border-text hover:border-red-light hover:text-red-light transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: mobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms' }}
            >
              I'm a Talent
            </button>
            
            <button 
              onClick={(e) => handleNavClick(e, { path: '/careers', action: 'transition' })}
              className={`w-full px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] font-heading font-bold text-white bg-red-light hover:bg-red-light/90 transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: mobileMenuOpen ? `${(navLinks.length + 1) * 50}ms` : '0ms' }}
            >
              I'm an Influencer
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
