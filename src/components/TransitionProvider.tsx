'use client'

import React, { createContext, useContext, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const TransitionContext = createContext<{
  transitionTo: (href: string) => void
} | null>(null)

export const useTransition = () => {
  const context = useContext(TransitionContext)
  if (!context) throw new Error('useTransition must be used within TransitionProvider')
  return context
}

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  // This effect runs whenever the pathname changes (including browser back/forward)
  useGSAP(() => {
    if (!overlayRef.current) return

    // Ensure overlay starts at 0% (covering the screen)
    // and slides up to -100% to reveal the new page
    gsap.to(overlayRef.current, {
      y: '-100%',
      duration: 1.2,
      ease: 'power4.inOut',
    })
  }, { dependencies: [pathname] })

  const transitionTo = (href: string) => {
    if (!overlayRef.current) return

    // Check if it's an anchor on the current page
    const [pathPart, anchorPart] = href.split('#')
    const isSamePageAnchor = anchorPart && (pathPart === pathname || pathPart === '')

    if (href === pathname && !anchorPart) return

    const tl = gsap.timeline({
      onComplete: () => {
        if (isSamePageAnchor) {
          // Scroll to the element
          const element = document.getElementById(anchorPart)
          if (element) {
            element.scrollIntoView()
          }
          // Since pathname won't change, we manually trigger the reveal reveal
          gsap.to(overlayRef.current, {
            y: '-100%',
            duration: 1.2,
            ease: 'power4.inOut',
          })
        } else {
          router.push(href)
        }
      }
    })

    // Slide up from bottom to cover the screen
    tl.set(overlayRef.current, { y: '100%' })
    tl.to(overlayRef.current, {
      y: '0%',
      duration: 1.0,
      ease: 'power4.inOut'
    })
  }

  return (
    <TransitionContext.Provider value={{ transitionTo }}>
      {children}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black z-9999 pointer-events-none"
        style={{ transform: 'translateY(-100%)' }}
      />
    </TransitionContext.Provider>
  )
}
