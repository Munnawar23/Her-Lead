'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const partners = [
    { name: "Duolingo", logo: "https://svgl.app/library/duolingo.svg" },
    { name: "Strava", logo: "https://svgl.app/library/strava.svg" },
    { name: "Loom", logo: "https://svgl.app/library/loom.svg" },
    { name: "Notion", logo: "https://svgl.app/library/notion.svg" },
    { name: "Vercel", logo: "https://svgl.app/library/vercel.svg" },
    { name: "Figma", logo: "https://svgl.app/library/figma.svg" },
    { name: "Zoom", logo: "https://svgl.app/library/zoom.svg" },
    { name: "Spline", logo: "https://svgl.app/library/spline.svg" },
]

const PartnersSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const marqueeRef = useRef<HTMLDivElement>(null)
    const lineLeftRef = useRef<HTMLDivElement>(null)
    const lineRightRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })

        // Header Entrance
        tl.from(lineLeftRef.current, { scaleX: 0, duration: 1, ease: "power3.out" })
            .from(lineRightRef.current, { scaleX: 0, duration: 1, ease: "power3.out" }, "<")
            .from(titleRef.current, { opacity: 0, y: 30, duration: 1, ease: "power3.out" }, "-=0.8")

        // Manual Infinite Marquee
        if (marqueeRef.current) {
            const content = marqueeRef.current.children[0]
            const totalWidth = content.scrollWidth
            const duration = 40 // Adjust speed (seconds)

            gsap.to(content, {
                x: `-=${totalWidth / 3}`, // Move only 1/3 of total length since we triplicated
                duration: duration,
                ease: "none",
                repeat: -1
            })
        }
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="w-full bg-bg-light pt-12 md:pt-24 pb-8 md:pb-24 border-t border-text/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Section Header: OUR PARTNERS (Centered) */}
                <div className="text-center mb-10 md:mb-24">
                    <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
                        <div
                            ref={lineLeftRef}
                            className='w-12 md:w-20 h-[2px] bg-secondary origin-right'
                        />
                        <h2 ref={titleRef} className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-secondary'>
                            Our Partners
                        </h2>
                        <div
                            ref={lineRightRef}
                            className='w-12 md:w-20 h-[2px] bg-secondary origin-left'
                        />
                    </div>
                </div>

                {/* Bottom: Brands Marquee */}
                <div className="w-full mb-12 md:mb-32">
                    <div ref={marqueeRef} className="relative flex overflow-hidden mask-linear-gradient">
                        <div className="flex items-center gap-24 md:gap-32 whitespace-nowrap will-change-transform">
                            {[...partners, ...partners, ...partners].map((partner, i) => (
                                <div
                                    key={i}
                                    className="shrink-0 flex items-center justify-center transition-all duration-700 hover:scale-110 cursor-pointer"
                                >
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="h-10 md:h-16 min-w-[140px] md:min-w-[200px] w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersSection
