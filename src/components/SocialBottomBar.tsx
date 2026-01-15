"use client"
import React from 'react'
import { useTransition } from '@/components/TransitionProvider'
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react'

const SocialBottomBar = () => {
  const { transitionTo } = useTransition()

  const socialLinks = [
    { Icon: Instagram, url: '#', label: 'Instagram' },
    { Icon: Twitter, url: '#', label: 'Twitter' },
    { Icon: Linkedin, url: '#', label: 'LinkedIn' },
    { Icon: Facebook, url: '#', label: 'Facebook' },
    { Icon: Youtube, url: '#', label: 'YouTube' }
  ]

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-90 w-full max-w-fit px-6">
      <div className="flex flex-col md:flex-row bg-[#1a1a1a]/95 backdrop-blur-xl shadow-2xl rounded-2xl md:rounded-full px-5 py-2.5 text-white items-center gap-6 border border-white/10 scale-90 md:scale-95 transition-all hover:scale-100">
        
        {/* Social Icons */}
        <div className="flex items-center gap-3 pr-0 md:pr-6 md:border-r border-white/10">
          {socialLinks.map((social, i) => {
            const Icon = social.Icon
            return (
              <a 
                key={i} 
                href={social.url}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-all"
              >
                <Icon size={16} strokeWidth={2.5} />
              </a>
            )
          })}
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:block text-[10px] font-black tracking-[0.2em] uppercase">
             Take me to: <span className="text-white/40 ml-1">Influencer Marketing</span>
          </div>
          <button 
            onClick={() => transitionTo('/contact')}
            className="bg-primary hover:bg-secondary px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap text-text"
          >
            Work with us →
          </button>
        </div>

        {/* Decoration */}
        <div className="hidden lg:block w-px h-5 bg-white/10 ml-1" />
        <div className="hidden lg:block text-[8px] font-bold text-white/20 uppercase tracking-widest pl-1">
          Global
        </div>
      </div>
    </div>
  )
}

export default SocialBottomBar
