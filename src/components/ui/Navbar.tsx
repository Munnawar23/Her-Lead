'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Button from '@/components/common/Button'
import { motion, AnimatePresence } from 'motion/react'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: '-100%', opacity: 0 },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
  }

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={hidden && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${mobileMenuOpen ? 'bg-transparent shadow-none' : 'bg-white/90 backdrop-blur-lg shadow-lg shadow-text/5'} ${scrolled ? 'py-3' : 'py-5'}`}
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
              <motion.a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                whileHover={{ scale: 1.05 }}
                className="text-[13px] uppercase tracking-[0.2em] font-heading font-bold text-text hover:text-secondary transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </motion.a>
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
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: "var(--color-white)" } : { rotate: 0, y: 0, backgroundColor: "var(--color-black)" }}
              className="w-6 h-0.5"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "var(--color-black)" }}
              className="w-3 h-0.5 self-end mr-2"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: "var(--color-white)" } : { rotate: 0, y: 0, backgroundColor: "var(--color-black)" }}
              className="w-6 h-0.5"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-bg-dark z-40 lg:hidden"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-screen" />
            <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[100px]" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 flex flex-col items-center justify-center h-full gap-12 px-8"
            >
              {/* Mobile Nav Links */}
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.path}
                    variants={itemVariants}
                    onClick={(e) => {
                      handleNavClick(e, link);
                      setMobileMenuOpen(false);
                    }}
                    className="text-xl uppercase tracking-[0.4em] font-heading font-black text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div variants={itemVariants} className="flex items-center gap-3 opacity-40">
                <div className="w-8 h-[1px] bg-white" />
                <span className="text-[9px] uppercase tracking-[0.4em] font-black text-white whitespace-nowrap">Strategy • Creativity • Growth</span>
                <div className="w-8 h-[1px] bg-white" />
              </motion.div>

              {/* Mobile Buttons Grid */}
              <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                {[
                  { label: 'I Need a Talent', variant: 'cyan', href: '/hire-talent', isInternal: true },
                  { label: 'I Am a Talent', variant: 'red', href: '/i-am-talent', isInternal: true },
                  { label: 'I Am an Influencer', variant: 'orange', href: '/i-am-influencer', isInternal: true },
                  { label: 'Request for Quote', variant: 'yellow', href: '/request-quote', isInternal: true }
                ].map((btn, i) => (
                  <motion.div key={i} variants={itemVariants}>
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

