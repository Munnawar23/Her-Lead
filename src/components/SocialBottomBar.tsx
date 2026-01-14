"use client"
import React from 'react'
import { useTransition } from '@/components/TransitionProvider'

const SocialBottomBar = () => {
  const { transitionTo } = useTransition()

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-90 w-full max-w-fit px-6">
      <div className="flex flex-col md:flex-row bg-[#1a1a1a]/95 backdrop-blur-xl shadow-2xl rounded-2xl md:rounded-full px-5 py-2.5 text-white items-center gap-6 border border-white/10 scale-90 md:scale-95 transition-all hover:scale-100">
        
        {/* Social Icons */}
        <div className="flex items-center gap-3 pr-0 md:pr-6 md:border-r border-white/10">
          {[
            { tag: 'ig', url: '#' },
            { tag: 'tt', url: '#' },
            { tag: 'li', url: '#' },
            { tag: 'x', url: '#' },
            { tag: 'fb', url: '#' },
            { tag: 'yt', url: '#' }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.url}
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-all text-[9.5px] font-black uppercase"
            >
              {social.tag}
            </a>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:block text-[10px] font-black tracking-[0.2em] uppercase">
             Take me to: <span className="text-white/40 ml-1">Influencer Marketing</span>
          </div>
          <button 
            onClick={() => transitionTo('/contact')}
            className="bg-linear-to-r from-primary to-orange-500 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
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
