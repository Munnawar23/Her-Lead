"use client"
import React, { useState } from 'react'
import { useTransition } from '@/components/TransitionProvider'
import { usePathname } from 'next/navigation'
import { Instagram, Twitter, Linkedin, Facebook, Youtube, Share2, X } from 'lucide-react'

const SocialBottomBar = () => {
  const { transitionTo } = useTransition()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Don't show on splash screen
  if (pathname === '/') return null

  const socialLinks = [
    { Icon: Instagram, url: '#', label: 'Instagram' },
    { Icon: Twitter, url: '#', label: 'Twitter' },
    { Icon: Linkedin, url: '#', label: 'LinkedIn' },
    { Icon: Facebook, url: '#', label: 'Facebook' },
    { Icon: Youtube, url: '#', label: 'YouTube' }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-90 flex flex-col items-end gap-3">
      {/* Social Links - Expand from bottom */}
      <div className={`flex flex-col gap-2 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {socialLinks.map((social, i) => {
          const Icon = social.Icon
          return (
            <a 
              key={i} 
              href={social.url}
              aria-label={social.label}
              className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white hover:text-primary transition-all hover:scale-110 border border-white/5"
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
            >
              <Icon size={18} strokeWidth={2.5} />
            </a>
          )
        })}
      </div>

      {/* Main Toggle Button */}
      <div className="flex items-center gap-3 group">
        {/* Text Label */}
        <span className={`text-[10px] font-heading font-black uppercase tracking-widest text-white bg-red-light px-4 py-2 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
          Stay Connected
        </span>
        
        {/* Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-red-light flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95"
        >
          {isOpen ? <X size={24} strokeWidth={3} /> : <Share2 size={24} strokeWidth={3} />}
        </button>
      </div>
    </div>
  )
}

export default SocialBottomBar
