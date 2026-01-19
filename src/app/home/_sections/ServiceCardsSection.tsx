"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const serviceGroups = [
  {
    title: "PUBLIC RELATIONS & MEDIA SERVICES",
    desc: "Shaping perception and building authority through strategic storytelling.",
    color: "bg-primary",
    textColor: "text-white",
    tags: [
      "Public Relations (PR)",
      "Media Outreach & Monitoring",
      "Influencer PR & Collaborations",
      "Event Publicity",
      "Press Release Writing & Distribution",
      "Reputation & Crisis Management"
    ],
    imageCollage: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600",
      "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=600",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600"
    ]
  },
  {
    title: "CORPORATE TRAINING & DEVELOPMENT",
    desc: "Empowering teams with leadership, productivity, and career-ready skills for the modern workplace.",
    color: "bg-red-light",
    textColor: "text-white",
    tags: [
      "Leadership & Communication Training",
      "Team Productivity & Culture Workshops",
      "Personal Branding for Professionals",
      "Recruitment Solutions",
      "Interview Preparation & Grooming",
      "Corporate Hiring Support"
    ],
    imageCollage: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600"
    ]
  },
  {
    title: "PAID ADS",
    desc: "Strategic ad placement across global platforms to maximize ROI and scale your brand visibility instantly.",
    color: "bg-black",
    textColor: "text-white",
    tags: [
      "Meta Ads",
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "LinkedIn Ads",
      "PPC Strategy"
    ],
    imageCollage: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
    ]
  }
]

const ServiceCardsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.utils.toArray(".service-card").forEach((card: any) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      })
    })
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      className="mt-32 md:mt-48 w-full bg-background px-6 md:px-12 lg:px-20 pt-20 pb-20 md:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-32">
            <div className='inline-flex items-center justify-center gap-6'>
              <div className='w-12 md:w-20 h-[2px] bg-red-light' />
              <span className='text-4xl md:text-6xl lg:text-6xl font-heading font-black uppercase tracking-[0.2em] text-red-light'>The Agency</span>
              <div className='w-12 md:w-20 h-[2px] bg-red-light' />
            </div>
            <p className="mt-4 font-body text-base md:text-lg font-bold text-text uppercase tracking-widest max-w-2xl mx-auto opacity-60">
                Comprehensive solutions for digital dominance and professional growth.
            </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {serviceGroups.map((group, idx) => {
            // Safety check for titles without '&'
            const hasAmpersand = group.title.includes('&');
            const titleParts = hasAmpersand ? group.title.split('&') : [group.title];

            return (
              <div 
                key={idx}
                className={`service-card group relative w-full ${group.color} ${group.textColor} rounded-[2rem] md:rounded-[3rem] overflow-hidden p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-2xl transition-transform duration-500 hover:scale-[1.01]`}
              >
                {/* Left Content */}
                <div className="space-y-8 md:space-y-10 relative z-10">
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[0.9] uppercase tracking-tighter">
                    {titleParts[0]} <br />
                    {hasAmpersand && titleParts[1] && (
                      <>
                        <span className="opacity-50">&</span> {titleParts[1]}
                      </>
                    )}
                  </h3>
                  
                  <p className="max-w-md font-body font-bold text-base md:text-lg leading-relaxed opacity-90">
                    {group.desc}
                  </p>
                  
                  <div className="space-y-4">
                    <span className="block text-[10px] md:text-xs font-heading font-black uppercase tracking-[0.2em] opacity-40">Services Included</span>
                    <div className="flex flex-wrap gap-3">
                      {group.tags.map((tag, tIdx) => (
                        <div 
                          key={tIdx}
                          className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-full group/tag hover:bg-white hover:text-black transition-all cursor-default"
                        >
                          <span className="text-[10px] md:text-xs font-heading font-black uppercase tracking-widest">{tag}</span>
                          <ArrowUpRight size={12} className="opacity-50 group-hover/tag:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Collage */}
                <div className="relative h-[300px] md:h-[500px] hidden md:flex items-center justify-center">
                   <div className="absolute w-[70%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-2 rotate-2 group-hover:rotate-0 transition-transform duration-700">
                      <img src={group.imageCollage[0]} alt="" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute top-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-1 -rotate-6 translate-x-10 translate-y-[-20px] group-hover:rotate-0 group-hover:translate-x-12 group-hover:translate-y-[-30px] transition-all duration-700">
                      <img src={group.imageCollage[1]} alt="" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute bottom-0 left-0 w-[45%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-3 rotate-12 -translate-x-10 translate-y-[20px] group-hover:rotate-0 group-hover:translate-x-[-12px] group-hover:translate-y-[30px] transition-all duration-700">
                      <img src={group.imageCollage[2]} alt="" className="w-full h-full object-cover" />
                   </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceCardsSection