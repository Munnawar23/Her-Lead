"use client"
import React, { useRef, useState, useEffect } from 'react'
import { useTransition } from '@/components/TransitionProvider'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Footer = () => {
  const { transitionTo } = useTransition()
  const magneticRef = useRef<HTMLButtonElement>(null)
  
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true, 
        timeZone: 'Asia/Kolkata' 
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    const moveMagnetic = (e: MouseEvent) => {
      const btn = magneticRef.current
      if (!btn) return
      
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(btn, {
        x: x * 0.5,
        y: y * 0.5,
        duration: 0.8,
        ease: 'power3.out'
      })
      gsap.to(btn.querySelector('.btn-text'), {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.8,
        ease: 'power3.out'
      })
    }

    const resetMagnetic = () => {
      gsap.to(magneticRef.current, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' })
      const btnText = magneticRef.current?.querySelector('.btn-text')
      if (btnText) {
        gsap.to(btnText, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' })
      }
    }

    magneticRef.current?.addEventListener('mousemove', moveMagnetic)
    magneticRef.current?.addEventListener('mouseleave', resetMagnetic)

    return () => {
      magneticRef.current?.removeEventListener('mousemove', moveMagnetic)
      magneticRef.current?.removeEventListener('mouseleave', resetMagnetic)
    }
  }, { scope: magneticRef })

  const socials = [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
  ]

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden pt-20 md:pt-32 pb-10 px-6 md:px-12 rounded-t-[3rem] -mt-10 z-10 shadow-2xl border-t border-white/10">
      
      <div className="max-w-[1600px] mx-auto flex flex-col justify-between min-h-[80vh]">
         {/* HEADER SECTION */}
         <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
            <div className="space-y-4">
               <h2 className="font-heading text-[12vw] leading-[0.8] tracking-tighter uppercase font-black text-white mix-blend-difference">
                 Let's <br /> Talk
               </h2>
            </div>
            
            {/* MAGNETIC CTA BUTTON */}
            <div className="relative pt-4 md:pt-20 md:pr-20">
               <button 
                ref={magneticRef}
                onClick={() => window.location.href = 'mailto:hello@her-lead.com'}
                className="group relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary flex items-center justify-center cursor-pointer overflow-hidden transition-colors duration-300"
               >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                  <span className="btn-text relative z-10 font-heading text-sm md:text-base uppercase tracking-widest font-bold text-black group-hover:text-black transition-colors duration-300">
                    Get in <br /> Touch
                  </span>
               </button>
            </div>
         </div>

         {/* SUB FOOTER DETAILS */}
         <div className="space-y-12 mb-12 mt-20 md:mt-0">
             <div className="w-full h-px bg-white/20" />
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 font-body text-sm md:text-base">
                
                {/* SOCIALS */}
                <div className="space-y-6">
                   <h4 className="font-heading text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Socials</h4>
                   <div className="flex flex-col gap-2">
                      {socials.map(s => (
                        <a key={s.name} href={s.url} className="group flex items-center gap-2 text-white hover:text-primary transition-colors">
                           <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                           {s.name}
                        </a>
                      ))}
                   </div>
                </div>

                {/* LOCATIONS */}
                <div className="space-y-6">
                   <h4 className="font-heading text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Location</h4>
                   <p className="text-white">
                      Udaipur, India <br />
                      Rajasthan 313001
                   </p>
                </div>

                 {/* TIME */}
                 <div className="space-y-6">
                   <h4 className="font-heading text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Local Time</h4>
                   <p className="text-white font-mono uppercase">
                      {time} IST
                   </p>
                </div>

                {/* LEGAL */}
                 <div className="space-y-6 md:text-right">
                   <h4 className="font-heading text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Legal</h4>
                   <div className="flex flex-col md:items-end gap-2">
                      <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                      <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
                   </div>
                </div>

             </div>
         </div>

         {/* BIG FOOTER BOTTOM */}
         <div className="flex justify-between items-end">
             <h1 className="font-heading text-[8vw] md:text-[14vw] leading-none font-black text-white/5 uppercase tracking-tighter select-none pointer-events-none">
               HerLead
             </h1>
             <p className="mb-4 md:mb-10 font-heading text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold hidden md:block">
               © 2026
             </p>
         </div>
      </div>
    </footer>
  )
}

export default Footer
