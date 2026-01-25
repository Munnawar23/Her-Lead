'use client'

import React, { createContext, useContext, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

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

  useEffect(() => {
    if (!overlayRef.current) return

    // Reveal the page
    overlayRef.current.style.transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)'
    overlayRef.current.style.transform = 'translateY(-100%)'
  }, [pathname])

  const transitionTo = (href: string) => {
    if (!overlayRef.current) return

    const [pathPart, anchorPart] = href.split('#')
    const isSamePageAnchor = anchorPart && (pathPart === pathname || pathPart === '')

    if (href === pathname && !anchorPart) return

    overlayRef.current.style.transition = 'none'
    overlayRef.current.style.transform = 'translateY(100%)'

    // Force reflow
    overlayRef.current.offsetHeight

    overlayRef.current.style.transition = 'transform 1.0s cubic-bezier(0.77, 0, 0.175, 1)'
    overlayRef.current.style.transform = 'translateY(0%)'

    setTimeout(() => {
      if (isSamePageAnchor) {
        const element = document.getElementById(anchorPart)
        if (element) {
          element.scrollIntoView()
        }
        if (overlayRef.current) {
          overlayRef.current.style.transform = 'translateY(-100%)'
        }
      } else {
        router.push(href)
      }
    }, 1000)
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
