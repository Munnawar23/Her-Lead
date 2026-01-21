"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "lucide-react"
import { serviceCards } from "@/constants/serviceCards"

gsap.registerPlugin(ScrollTrigger)


const ServiceCardsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.utils.toArray(".service-card").forEach((card: any) => {
      gsap.from(card, {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%"
        }
      })
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="w-full px-6 md:px-12 lg:px-20 pt-24 pb-8 md:pb-12 bg-background"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className='inline-flex items-center justify-center gap-6'>
            <div className='w-12 md:w-20 h-[2px] bg-red-light' />
            <span className='text-4xl md:text-6xl lg:text-5xl font-heading font-black uppercase tracking-[0.2em] text-red-light'>HerLead Legacy</span>
            <div className='w-12 md:w-20 h-[2px] bg-red-light' />
          </div>
          <p className="mt-4 font-body text-sm md:text-base font-bold text-text uppercase tracking-widest max-w-2xl mx-auto opacity-60">
            Comprehensive solutions for digital dominance and professional growth.
          </p>
        </div>

        {serviceCards.map((group, idx) => (
          <div
            key={idx}
            className={`service-card relative w-full 
              min-h-[500px] md:h-[560px] lg:h-[600px]
              ${group.color} ${group.textColor} 
              rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] flex-1">

              {/* LEFT CONTENT */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-md text-sm md:text-lg font-semibold opacity-80 leading-relaxed">
                  {group.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 max-w-lg">
                  {group.tags.map((tag, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-1.5 px-3 py-1.5 md:px-5 md:py-2 rounded-full
                      bg-black/5 backdrop-blur-sm border border-current opacity-70
                      text-[10px] md:text-xs font-bold uppercase tracking-wider`}
                    >
                      {tag}
                      <ArrowUpRight size={12} className="md:w-[14px] md:h-[14px]" />
                    </div>
                  ))}
                </div>

                <button className={`mt-8 w-fit flex items-center gap-2 px-7 py-3
                  rounded-full border-2 border-white hover:bg-white hover:text-black transition-all group/btn`}>
                  <span className="text-xs font-black uppercase tracking-wider">
                    Learn more
                  </span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {/* RIGHT VISUAL STACK */}
              <div className="hidden lg:flex relative h-full items-center justify-end pr-12">
                {group.video ? (
                  <div className="relative w-[300px] h-[500px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-black/10">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    >
                      <source src={group.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="relative w-[260px] h-[420px]">
                    {group.images.map((img, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-full rounded-3xl overflow-hidden
                        border-4 border-white shadow-2xl"
                        style={{
                          top: i * 28,
                          right: i * 28,
                          zIndex: 10 - i
                        }}
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default ServiceCardsSection
