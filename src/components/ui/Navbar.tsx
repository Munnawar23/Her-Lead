'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Button from '@/components/common/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)

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

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useGSAP(() => {
    if (hidden && !mobileMenuOpen) {
      gsap.to(navRef.current, { y: '-100%', opacity: 0, duration: 0.6, ease: "power2.inOut" });
    } else {
      gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" });
    }
  }, { dependencies: [hidden, mobileMenuOpen] });

  useGSAP(() => {
    if (mobileMenuOpen) {
      gsap.set(menuRef.current, { display: 'block', x: '100%' });
      gsap.to(menuRef.current, { x: 0, duration: 0.7, ease: "power3.out" });

      // Stagger child elements
      const elements = menuContentRef.current?.querySelectorAll('.menu-item');
      if (elements) {
        gsap.fromTo(elements,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" }
        );
      }
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => { gsap.set(menuRef.current, { display: 'none' }); }
      });
    }
  }, { dependencies: [mobileMenuOpen] });

  const navLinks = [
    { name: 'Home', path: '/', action: 'reload' },
    { name: 'About', path: '/#about', action: 'scroll' },
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
        const targetId = link.path.split('#')[1];
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
        return;
      }
    }

    e.preventDefault()
    router.push(link.path)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${mobileMenuOpen ? 'bg-transparent' : 'bg-white/95'} ${scrolled ? 'py-3' : 'py-5'}`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Mobile Action Button */}
          <div className={`lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <Button
              onClick={() => router.push('/request-quote')}
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
              onClick={() => router.push('/hire-talent')}
              variant="cyan"
              size="sm"
              className="px-5 py-2.5 text-[11px]"
            >
              I Need a Talent
            </Button>

            <Button
              onClick={() => router.push('/i-am-talent')}
              variant="red"
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
                className="text-[13px] uppercase tracking-[0.2em] font-heading font-bold text-text hover:text-secondary transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right: Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              onClick={() => router.push('/i-am-influencer')}
              variant="orange"
              size="sm"
              className="px-5 py-2.5 text-[11px]"
            >
              I Am an Influencer
            </Button>

            <Button
              onClick={() => router.push('/request-quote')}
              variant="yellow"
              size="sm"
              className="px-5 py-2.5 text-[11px]"
            >
              Request for Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-black'}`}
            />
            <span
              className={`w-3 h-0.5 self-end mr-2 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'bg-black'}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-black'}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-bg-dark z-40 lg:hidden hidden"
        style={{ transform: 'translateX(100%)' }}
      >

        <div
          ref={menuContentRef}
          className="relative z-10 flex flex-col items-center justify-center h-full gap-12 px-8"
        >
          {/* Mobile Nav Links */}
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  handleNavClick(e, link);
                  setMobileMenuOpen(false);
                }}
                className="menu-item text-xl uppercase tracking-[0.4em] font-heading font-black text-white hover:text-primary transition-colors opacity-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="menu-item flex items-center gap-3 opacity-0">
            <div className="w-8 h-px bg-white" />
            <span className="text-[9px] uppercase tracking-[0.4em] font-black text-white whitespace-nowrap">Strategy • Creativity • Growth</span>
            <div className="w-8 h-px bg-white" />
          </div>

          {/* Mobile Buttons Grid */}
          <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
            {[
              { label: 'I Need a Talent', variant: 'cyan', href: '/hire-talent', isInternal: true },
              { label: 'I Am a Talent', variant: 'red', href: '/i-am-talent', isInternal: true },
              { label: 'I Am an Influencer', variant: 'orange', href: '/i-am-influencer', isInternal: true },
              { label: 'Request for Quote', variant: 'yellow', href: '/request-quote', isInternal: true }
            ].map((btn, i) => (
              <div key={i} className="menu-item opacity-0">
                <Button
                  onClick={() => {
                    if (btn.isInternal) {
                      router.push(btn.href);
                      setMobileMenuOpen(false);
                    } else {
                      window.open(btn.href, '_blank');
                    }
                  }}
                  variant={btn.variant as any}
                  size="md"
                  fullWidth
                  className="py-4 text-[10px]"
                >
                  {btn.label}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
