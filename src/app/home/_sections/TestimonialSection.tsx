"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    quote: "Her Lead transformed our digital presence from basic to world-class within months.",
    author: "Sarah Jenkins",
    role: "CEO, LuxBeauty",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    award: "Best Digital Strategy"
  },
  {
    id: 2,
    quote: "The most creative agency we've ever worked with. They create trends through culture-led design.",
    author: "Marcus Chen",
    role: "Founder, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    award: "Innovation Excellence"
  },
  {
    id: 3,
    quote: "Their influencer marketing campaigns have a soul. They find the perfect alignment between brands.",
    author: "Elena Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    award: "Social Impact Award"
  }
]

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      opacity: 0,
      scale: 0.95,
      y: 20,
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className='w-full min-h-screen bg-background flex items-center justify-center py-12 px-6 md:px-12 lg:px-24 overflow-hidden relative'>
      {/* Subtle Background decoration for light theme */}
      <div className='absolute inset-0 opacity-10 pointer-events-none'>
         <div className='absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]' />
         <div className='absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#FF1178]/20 rounded-full blur-[120px]' />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>
        {/* Compact Header */}
        <div className='text-center mb-16 flex flex-col items-center'>
          <span className='px-4 py-1.5 bg-text/5 border border-text/10 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-text/40 mb-4'>Social Proof</span>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-black text-text leading-none tracking-tighter uppercase italic select-none'>
            The Wall <span className='text-primary'>of Fame.</span>
          </h2>
        </div>

        {/* Compact Grid with Light Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((t, i) => (
            <div 
              key={t.id} 
              className="testimonial-card group bg-white border border-black/5 rounded-[3rem] p-8 md:p-12 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 min-h-[420px]"
            >
               <div className='space-y-8'>
                  <div className='flex items-center gap-3'>
                     <span className='text-[10px] font-black uppercase tracking-widest text-[#FF1178] bg-[#FF1178]/10 px-4 py-1.5 rounded-full'>{t.award}</span>
                  </div>
                  <h3 className='text-xl md:text-2xl font-black text-text leading-tight tracking-tight italic'>
                    "{t.quote}"
                  </h3>
               </div>

               <div className='flex items-center gap-4 pt-10 border-t border-text/5 mt-auto'>
                  <div className='w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shrink-0 p-0.5'>
                     <img src={t.image} className='w-full h-full rounded-full object-cover' alt={t.author} />
                  </div>
                  <div>
                     <h4 className='text-base font-black text-text uppercase tracking-tighter'>{t.author}</h4>
                     <p className='text-[10px] font-bold text-text/30 uppercase tracking-[0.2em]'>{t.role}</p>
                  </div>
                  <div className='ml-auto hidden lg:block'>
                     <span className='text-xs text-primary tracking-tighter font-black italic'>PLATINUM REVIEW</span>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Subtle CTA Link */}
        <div className='testimonial-card mt-16 text-center'>
           <p className='text-[10px] font-black uppercase tracking-[0.5em] text-text/20 hover:text-text cursor-pointer transition-colors flex items-center justify-center gap-4'>
             <span className="w-10 h-px bg-text/10" />
             Want to see your name here? <span className='text-primary underline'>Let's talk →</span>
             <span className="w-10 h-px bg-text/10" />
           </p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection