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
    title: "Branding & Public Relations",
    desc: "Shaping perception and building authority through strategic storytelling.",
    color: "bg-primary",
    textColor: "text-white",
    tags: [
      "Public Relations (PR)",
      "Media Outreach",
      "Event Publicity",
      "Brand Identity",
      "Visual Branding",
      "Videography",
      "Influencer PR"
    ],
    imageCollage: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600",
      "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=600",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600"
    ]
  },
  {
    title: "Digital & Social Media",
    desc: "Data-driven marketing that captures attention and drives conversion.",
    color: "bg-red-light",
    textColor: "text-white",
    tags: [
      "Social Media Management",
      "Influencer Marketing",
      "Paid Ads (Meta, Google)",
      "SEO & Content",
      "Website Design & Dev",
      "UX/UI Strategy",
      "Branded Content"
    ],
    imageCollage: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=600"
    ]
  },
  {
    title: "Website & Digital Experience",
    desc: "Empowering teams and individuals with future-ready skills.",
    color: "bg-black",
    textColor: "text-white",
    tags: [
      "Website Designing",
      "Website Design & Dev",
      "UX/UI Strategy",
      "Website Content",
      "Paid Ads (Meta, Google)",
      "LinkedIn Ads",
      "Instagram Ads"
    ],
    imageCollage: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
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
      className="w-full bg-background py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <div className="mb-16 md:mb-24 text-center">
            <h2 className='font-heading text-5xl md:text-7xl font-black text-text leading-[0.8] tracking-tighter uppercase'>
                The Agency<span className='text-red-light'>.</span>
            </h2>
            <p className="mt-6 font-body text-base md:text-lg font-bold text-text uppercase tracking-widest max-w-2xl mx-auto">
                Comprehensive solutions for digital dominance and professional growth.
            </p>
        </div>

        {serviceGroups.map((group, idx) => (
          <div 
            key={idx}
            className={`service-card group relative w-full ${group.color} ${group.textColor} rounded-[2rem] md:rounded-[3rem] overflow-hidden p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-2xl transition-transform duration-500 hover:scale-[1.01]`}
          >
            {/* Left Content */}
            <div className="space-y-10 md:space-y-12 relative z-10">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-none uppercase tracking-tighter">
                {group.title.split('&')[0]} <br />
                <span className="opacity-50">&</span> {group.title.split('&')[1]}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {group.tags.map((tag, tIdx) => (
                  <div 
                    key={tIdx}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-full group/tag hover:bg-white hover:text-black transition-all cursor-default"
                  >
                    <span className="text-xs md:text-sm font-heading font-black uppercase tracking-wider">{tag}</span>
                    <ArrowUpRight size={14} className="opacity-50 group-hover/tag:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Collage */}
            <div className="relative h-[300px] md:h-[500px] hidden md:flex items-center justify-center">
               {/* Larger Central Image */}
               <div className="absolute w-[70%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-2 rotate-2 group-hover:rotate-0 transition-transform duration-700">
                  <img src={group.imageCollage[0]} alt="" className="w-full h-full object-cover" />
               </div>
               {/* Smaller Floating Images */}
               <div className="absolute top-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-1 -rotate-6 translate-x-10 translate-y-[-20px] group-hover:rotate-0 group-hover:translate-x-12 group-hover:translate-y-[-30px] transition-all duration-700">
                  <img src={group.imageCollage[1]} alt="" className="w-full h-full object-cover" />
               </div>
               <div className="absolute bottom-0 left-0 w-[45%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-3 rotate-12 -translate-x-10 translate-y-[20px] group-hover:rotate-0 group-hover:translate-x-[-12px] group-hover:translate-y-[30px] transition-all duration-700">
                  <img src={group.imageCollage[2]} alt="" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceCardsSection
