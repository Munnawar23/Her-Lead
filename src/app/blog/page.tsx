"use client"
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'
import Navbar from '@/components/Navbar'

gsap.registerPlugin(ScrollTrigger, Draggable)

const blogPosts = [
  {
    id: 1,
    tag: "High Fashion",
    title: "Why Minimal isn't enough anymore",
    description: "The shift towards maximalist digital storytelling.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
    size: "large",
    rotation: -2
  },
  {
    id: 2,
    tag: "Marketing",
    title: "Viral by Design",
    description: "Crafting social moments that stick.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200",
    size: "medium",
    rotation: 4
  },
  {
    id: 3,
    tag: "Tech",
    title: "GSAP is the New Flash",
    description: "The return of the interactive web.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
    size: "small",
    rotation: -10
  },
  {
    id: 4,
    tag: "Agency Life",
    title: "Coffee & Commits",
    description: "The secret sauce behindHer Lead.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200",
    size: "medium",
    rotation: 3
  }
]

const BlogPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = useTransition()

  useGSAP(() => {
    // Infinite Marquee logic
    const marquee = marqueeRef.current
    if (marquee) {
      const items = marquee.children
      const totalWidth = marquee.scrollWidth / 2
      gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,
        repeat: -1,
        ease: "none"
      })
    }

    // Scroll reveal for cards
    gsap.utils.toArray('.funky-card').forEach((card: any) => {
      gsap.from(card, {
        scale: 0.8,
        opacity: 0,
        y: 100,
        rotate: card.dataset.rotate || 0,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 60%",
          scrub: 1
        }
      })
    })

    // Background Blob Animation
    gsap.to(".blob", {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    })
  }, { scope: containerRef })

  return (
    <main ref={containerRef} className='bg-background min-h-screen overflow-hidden selection:bg-primary selection:text-white'>
      <Navbar />

      {/* Hero Section: The Marquee Madhouse */}
      <section className='relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-[#FF1178]'>
        <div className='absolute inset-0 opacity-10 pointer-events-none'>
           <div className='w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[40px_40px]' />
        </div>

        {/* Giant Marquee Background */}
        <div className='absolute top-1/2 -translate-y-1/2 whitespace-nowrap opacity-20'>
          <div ref={marqueeRef} className='flex gap-10 text-[15vw] md:text-[20vw] font-black uppercase text-white leading-none italic select-none'>
            <span>THE JOURNAL THE JOURNAL THE JOURNAL THE JOURNAL &nbsp;</span>
            <span>THE JOURNAL THE JOURNAL THE JOURNAL THE JOURNAL &nbsp;</span>
          </div>
        </div>

        <div className='relative z-10 text-center'>
            <div className='mb-6 bg-white text-[#FF1178] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.5em] inline-block shadow-2xl'>
               Her Lead Insights
            </div>
            <h1 className='text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase drop-shadow-2xl'>
              Lately<span className='text-black'>.</span>
            </h1>
        </div>

        {/* Floating "Stickers" */}
        <div className='absolute top-20 right-[15%] w-24 h-24 bg-yellow-400 rounded-full hidden md:flex items-center justify-center -rotate-12 shadow-xl animate-bounce'>
           <span className='text-[10px] font-black text-black text-center px-4 leading-tight'>NEW DROP EVERY WEEK</span>
        </div>
        <div className='absolute bottom-20 left-[10%] w-32 h-32 bg-primary rounded-lg border-4 border-white hidden md:flex items-center justify-center rotate-12 shadow-2xl skew-x-12'>
           <span className='text-lg font-black text-white italic'>FUNKY!</span>
        </div>
      </section>

      {/* Main Content: The Chaos Grid */}
      <section className='relative px-6 md:px-24 py-32'>
        {/* Animated Background Blobs */}
        <div className='blob absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none' />
        <div className='blob absolute top-[60%] right-[-5%] w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none' />

        <div className='max-w-7xl mx-auto flex flex-wrap justify-center gap-x-16 gap-y-32'>
           {blogPosts.map((post, index) => (
             <div 
               key={post.id}
               className={`funky-card group relative`}
               style={{ 
                 width: post.size === 'large' ? '100%' : post.size === 'medium' ? '450px' : '300px',
                 maxWidth: '90vw'
               }}
               data-rotate={post.rotation}
             >
                {/* Image Stage */}
                <div className='relative w-full aspect-square md:aspect-video rounded-[3rem] overflow-hidden bg-black shadow-[20px_20px_0px_rgba(255,17,120,1)] group-hover:shadow-[0px_0px_0px_rgba(255,17,120,1)] transition-all duration-500 mb-10'>
                   <img 
                    src={post.image} 
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000' 
                    alt={post.title} 
                   />
                   <div className='absolute top-6 left-6 px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest skew-x-[-10deg] rounded-sm'>
                      {post.tag}
                   </div>
                </div>

                {/* Content */}
                <div className='relative'>
                   <div className='absolute -top-16 left-0 text-[10vw] font-black text-white/5 pointer-events-none italic uppercase'>
                      0{index + 1}
                   </div>
                   <h3 className='text-4xl md:text-5xl font-black text-text leading-[0.9] tracking-tighter uppercase group-hover:text-primary transition-colors'>
                      {post.title}
                   </h3>
                   <p className='mt-4 text-sm md:text-base text-text/50 font-medium max-w-md leading-relaxed'>
                      {post.description}
                   </p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Funky Footer CTA */}
      <section className='w-full py-40 bg-black overflow-hidden relative'>
         <div className='absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none'>
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000" className='w-full h-full object-cover grayscale' alt="CTA bg" />
         </div>
         
         <div className='relative z-10 text-center px-6'>
            <h2 className='text-[12vw] font-black text-[#FF1178] leading-none tracking-tighter uppercase italic select-none'>
               STAY <br /> WEIRD
            </h2>
            <div className='mt-16 flex flex-col items-center'>
               <p className='text-white text-lg font-bold mb-10 max-w-sm'>Subscribe to our chaotic newsletter for weekly digital gems.</p>
               <div className='flex flex-col md:flex-row gap-4 w-full max-w-md'>
                  <input 
                    type="email" 
                    placeholder="HELLOYOU@COOL.COM" 
                    className='flex-1 bg-white/10 border border-white/20 px-8 py-5 rounded-full text-white font-black text-xs uppercase tracking-widest placeholder:text-white/30 focus:outline-none focus:bg-white/20 transition-all'
                  />
                  <button className='bg-primary text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:scale-110 active:scale-95 transition-all shadow-2xl'>
                    Join us
                  </button>
               </div>
            </div>
         </div>
      </section>
    </main>
  )
}

export default BlogPage
