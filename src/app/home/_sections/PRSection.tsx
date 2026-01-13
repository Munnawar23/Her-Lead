"use client"
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'

gsap.registerPlugin(ScrollTrigger)

const prServices = [
  {
    id: 'pr-1',
    name: 'Media Outreach & Monitoring',
    category: 'Media Relations',
    description: 'We build and maintain powerful relationships with key journalists, editors, and influencers to ensure your brand story reaches the right audience through credible channels.'
  },
  {
    id: 'pr-2',
    name: 'Influencer PR & Collaborations',
    category: 'Strategic Partnerships',
    description: 'We connect your brand with the right voices. From micro-influencers to industry leaders, we curate partnerships that align with your values and amplify your message.'
  },
  {
    id: 'pr-3',
    name: 'Event Publicity',
    category: 'Experience',
    description: 'Creating buzz around your high-impact events. From red carpet management to product launches, we ensure maximum visibility and engagement.'
  },
  {
    id: 'pr-4',
    name: 'Reputation & Crisis Management',
    category: 'Brand Protection',
    description: 'Protecting your brand’s integrity during challenging times. We provide rapid response strategy, internal comms, and external positioning to navigate complex narratives.'
  }
]

const PRSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = useTransition()

  const imageSources = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop", // Media Relations (Professional office/meeting)
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop", // Crisis Mgmt (Team collaboration/serious)
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop", // Executive Positioning (Leadership/Speaking)
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop", // Event PR (Gala/Event)
  ]

  useGSAP(() => {
    const cards = gsap.utils.toArray('.pr-card') as HTMLElement[]
    
    cards.forEach((card, index) => {
      if (index === cards.length - 1) return // Last card doesn't need to be covered

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      })

      // Optional: Add a slight scale down and darkening effect as the next card comes in
      gsap.to(card, {
        scale: 0.95,
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: cards[index + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      })
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="pr" className='relative bg-background'>
      {prServices.map((service, index) => (
        <div 
          key={service.id} 
          className="pr-card w-full h-screen relative flex items-center justify-center overflow-hidden bg-background"
          style={{ zIndex: index + 1 }}
        >
          {/* Main Layout Grid */}
          <div className="w-full max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center h-full">
             
             {/* LEFT: IMAGE CARD */}
             <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
                <img 
                   src={imageSources[index]} 
                   alt={service.name} 
                   className="w-full h-full object-cover"
                 />
                 {/* Image Overlay Texture */}
                 <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                 
                 {/* Number on Image */}
                 <span className="absolute bottom-6 left-6 font-heading text-8xl text-white/20 font-black italic">
                   0{index + 1}
                 </span>
             </div>

             {/* RIGHT: CONTENT */}
             <div className="space-y-10 order-1 md:order-2 flex flex-col justify-center">
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                     <span className="h-px w-12 bg-primary"></span>
                     <span className="font-heading text-primary text-xs uppercase tracking-[0.4em] font-black">
                       {service.category}
                     </span>
                   </div>
                   
                   <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl text-black font-black leading-[0.9] tracking-tighter uppercase italic">
                     {service.name}
                   </h3>
                </div>

                <p className="font-body text-text/80 text-lg md:text-xl max-w-lg leading-relaxed font-bold">
                   {service.description}
                </p>

                <div className="pt-4">
                  <button 
                   onClick={() => transitionTo('/services')}
                   className="group flex items-center gap-6 cursor-pointer"
                  >
                     <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-45 transition-transform duration-300">
                            <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </div>
                     <span className="font-heading text-xs uppercase tracking-[0.3em] text-black font-bold">
                       Explore Solution
                     </span>
                  </button>
                </div>
             </div>

          </div>
        </div>
      ))}
    </section>
  )
}

export default PRSection