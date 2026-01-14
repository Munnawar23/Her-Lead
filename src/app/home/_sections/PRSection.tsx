"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'

gsap.registerPlugin(ScrollTrigger)

const socialPosts = [
  {
    id: 1,
    user: "herlead_agency",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    likes: "12.4k",
    rotation: -6
  },
  {
    id: 2,
    user: "herlead_agency",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    likes: "8.9k",
    rotation: 6
  }
]

const PRSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = useTransition()

  useGSAP(() => {
    // Reveal articles
    gsap.from(".article-reveal", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".articles-trigger",
        start: "top 80%",
      }
    });

    // Social card float
    gsap.to(".social-card-inner", {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3
    });
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className='w-full bg-background overflow-hidden pb-20'>
      
      {/* SECTION 1: HEADER & OVERLAPPING ARTICLES */}
      <div className='articles-trigger relative w-full mb-20'>
        {/* Magenta Header */}
        <div className='w-full bg-[#FF1178] px-6 md:px-12 lg:px-24 pt-16 pb-32 md:pt-20 md:pb-40 rounded-b-4xl md:rounded-b-5xl relative overflow-hidden'>
           <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-full blur-3xl pointer-events-none" />
           <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              <div className="max-w-2xl">
                <span className='block text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-4'>PR Releases</span>
                <h2 className='text-3xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter uppercase'>
                  You can read our <br /> reputation, right?
                </h2>
                <div className="mt-8">
                  <button className="px-8 py-3.5 border border-white/20 rounded-full text-[10px] font-black uppercase text-white tracking-widest hover:bg-white hover:text-[#FF1178] transition-all">
                    Take me there →
                  </button>
                </div>
              </div>
           </div>
        </div>

        {/* Overlapping Articles */}
         <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24 -mt-20 md:-mt-24 relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Card 1 */}
            <div className="article-reveal group bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-black/5">
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 relative">
                <img src="https://images.unsplash.com/photo-1542744094-6a195a7baf2f?q=80&w=1200" className="w-full h-full object-cover" alt="Article" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-black uppercase tracking-wider text-black">Digital Marketing</span>
                </div>
              </div>
               <h4 className="text-xl md:text-2xl font-black text-text mb-3 leading-tight tracking-tighter">
                 Increase Online Visibility with SEO, Storytelling, & Social Media
               </h4>
               <p className="text-xs md:text-sm text-text/50 font-medium mb-6 line-clamp-2">Learn to enhance your brand's online visibility by leveraging organic search and storytelling.</p>
            </div>

           {/* Card 2 - Offset/Overlapping */}
            <div className="article-reveal md:mt-16 group bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-black/5">
               <h4 className="text-xl md:text-2xl font-black text-text mb-4 leading-tight tracking-tighter">
                 Chronically Online: From Pins to Pints to "I Do's"
               </h4>
               <p className="text-xs md:text-sm text-text/50 font-medium mb-8">How brands closed out the year online through culture-led storytelling.</p>
               <button 
                 onClick={() => transitionTo('/blog')}
                 className="px-6 py-3 bg-linear-to-r from-orange-500 to-pink-500 rounded-full text-[10px] font-black text-white uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
               >
                 Read article ↗
               </button>
           </div>
        </div>
      </div>

      {/* SECTION 2: SOCIALS FEED */}
      <div className='w-full py-16 md:py-24 flex flex-col items-center'>
         {/* Tilted IG Cards */}
         <div className='w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6 mb-16'>
            {socialPosts.map((post) => (
              <div 
                key={post.id}
                className="social-card w-[85vw] md:w-[320px]"
                style={{ transform: `rotate(${post.rotation}deg)` }}
              >
                <div className="social-card-inner bg-white rounded-3xl p-4 shadow-xl border border-black/5">
                   <div className="flex items-center gap-3 mb-4 px-2">
                      <div className="w-8 h-8 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-px">
                         <div className="w-full h-full rounded-full bg-white p-px">
                           <div className="w-full h-full rounded-full bg-black/5" />
                         </div>
                      </div>
                      <span className="text-[10px] font-black text-text">herlead_agency</span>
                      <div className="ml-auto flex gap-1">
                         <div className="w-1 h-1 rounded-full bg-text/20" />
                         <div className="w-1 h-1 rounded-full bg-text/20" />
                      </div>
                   </div>
                   <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
                      <img src={post.image} className="w-full h-full object-cover" alt="Social Post" />
                   </div>
                   <div className="flex gap-4 px-2">
                      <div className="w-5 h-5 text-pink-500"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                      <div className="w-5 h-5 text-gray-300"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98 1 4.28L2 22l5.72-1c1.3.64 2.74 1 4.28 1 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg></div>
                   </div>
                </div>
              </div>
            ))}
         </div>

         {/* Social Footer Details */}
         <div className='flex flex-col items-center text-center'>
            <div className='px-6 py-2 border border-black/10 rounded-full mb-6'>
               <span className='text-[10px] font-bold text-text/40 tracking-widest uppercase italic'>@herlead_agency — everywhere</span>
            </div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-black text-text tracking-tighter uppercase mb-10'>
              And obviously, <br /> you follow our socials
            </h3>
            
            {/* Social Icon Row */}
            <div className='flex items-center gap-4 md:gap-6'>
               {[
                 { icon: 'ig', color: '#E1306C' },
                 { icon: 'tt', color: '#000000' },
                 { icon: 'li', color: '#0077B5' },
                 { icon: 'x', color: '#000000' },
                 { icon: 'fb', color: '#1877F2' },
                 { icon: 'yt', color: '#FF0000' }
               ].map((social, i) => (
                 <div 
                   key={i} 
                   className='w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-black/5 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all'
                   style={{ backgroundColor: `${social.color}10` }}
                 >
                    <div className='w-4 h-4 md:w-5 md:h-5 rounded-sm' style={{ backgroundColor: social.color }} />
                 </div>
               ))}
            </div>
         </div>
      </div>

    </section>
  );
};

export default PRSection;