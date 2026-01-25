'use client'

import React, { useState, useEffect } from 'react'
import { useTransition } from '@/context/TransitionProvider'
import { usePathname } from 'next/navigation'
import Button from '@/components/common/Button'
import Image from 'next/image'

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
  // Ensure navbar starts hidden if necessary, or just remove the early return
  // since we want it on the Home page (which is now '/')
  // if (pathname === '/') return null; 

  const navLinks = [
    { name: 'Home', path: '/', action: 'reload' },
    { name: 'About', path: '/about', action: 'transition' },
    { name: 'Services', path: '/#services', action: 'scroll' },
  ]

  const handleNavClick = (e: React.MouseEvent, link: any) => {
    if (link.action === 'reload') {
      window.location.href = link.path;
      return;
    }

    if (link.action === 'scroll') {
      if (window.location.pathname === '/') {
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
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${mobileMenuOpen ? 'bg-transparent shadow-none' : 'bg-white/90 backdrop-blur-lg shadow-lg shadow-blue-500/5'} ${scrolled ? 'py-3' : 'py-5'} ${hidden && !mobileMenuOpen ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Mobile Action Button (Visible only on mobile/tablet) */}
          <div className="lg:hidden">
            <Button
              onClick={() => window.open('https://docs.google.com/forms/d/1JSJtoIYYg8itgB_-HIdJreCENebvQP9pMOBIWgsooUY/edit', '_blank')}
              variant="yellow"
              size="sm"
              className="px-4 py-2 text-[10px]"
            >
              Request for Quote
            </Button>
          </div>

          {/* Left: Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              onClick={() => window.open('https://forms.gle/7dS3TUEwf2tEDTvj8', '_blank')}
              variant="orange"
              size="sm"
              className="px-5 py-2.5 text-[11px]"
            >
              I Need a Talent
            </Button>

            <Button
              onClick={() => window.open('https://forms.gle/3Su19gcu6wWBBAsb7', '_blank')}
              variant="purple"
              size="sm"
              className="px-5 py-2.5 text-[11px]"
            >
              I Am a Talent
            </Button>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="text-[13px] uppercase tracking-[0.2em] font-heading font-bold text-text hover:text-red-light transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-light group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right: Buttons with Background */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              onClick={() => window.open('https://docs.google.com/forms/d/1SIP8XCJ7QZI9x_xbT6wdX5Ri9wiVPlEjlwsDRTFd3Gs/edit', '_blank')}
              variant="cyan"
              size="sm"
              className="px-5 py-2.5 text-[11px]"
            >
              I Am an Influencer
            </Button>

            <Button
              onClick={() => window.open('https://docs.google.com/forms/d/1JSJtoIYYg8itgB_-HIdJreCENebvQP9pMOBIWgsooUY/edit', '_blank')}
              variant="yellow"
              size="sm"
              className="px-5 py-2.5 text-[11px]"
            >
              Request for Quote
            </Button>
          </div>

          {/* Mobile Menu Button with Animated Hamburguer */}
          <button
            className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2 !bg-white' : ''}`} />
            <span className={`w-3 h-0.5 bg-text self-end mr-2 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2 !bg-white' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Premium Dark Version */}
      <div className={`fixed inset-0 bg-black z-45 lg:hidden transition-all duration-700 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Decorative background for mobile menu */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-screen" />
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-12 px-8">

          {/* Mobile Nav Links */}
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  handleNavClick(e, link);
                  setMobileMenuOpen(false);
                }}
                className={`text-3xl uppercase tracking-[0.3em] font-heading font-black text-white hover:text-red-light transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 100 + 200}ms` : '0ms' }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social / Tag line in menu */}
          <div className={`flex items-center gap-3 transition-all duration-700 delay-500 ${mobileMenuOpen ? 'opacity-40 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="w-8 h-[1px] bg-white" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white whitespace-nowrap">Strategy • Creativity • Growth</span>
            <div className="w-8 h-[1px] bg-white" />
          </div>

          {/* Mobile Buttons Grid */}
          <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
            {[
              { label: 'I Need a Talent', variant: 'orange', href: 'https://forms.gle/7dS3TUEwf2tEDTvj8', delay: 400 },
              { label: 'I Am a Talent', variant: 'purple', href: 'https://forms.gle/3Su19gcu6wWBBAsb7', delay: 500 },
              { label: 'I Am an Influencer', variant: 'cyan', href: 'https://docs.google.com/forms/d/1SIP8XCJ7QZI9x_xbT6wdX5Ri9wiVPlEjlwsDRTFd3Gs/edit', delay: 600 }
            ].map((btn, i) => (
              <Button
                key={i}
                onClick={() => window.open(btn.href, '_blank')}
                variant={btn.variant as any}
                size="lg"
                fullWidth
                className={`transition-all duration-700 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: mobileMenuOpen ? `${btn.delay}ms` : '0ms' }}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
