"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/components/TransitionProvider'

gsap.registerPlugin(ScrollTrigger)

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
  }
]

const BlogSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = useTransition()

  useGSAP(() => {
    // Infinite Marquee logic
    const marquee = marqueeRef.current
    if (marquee) {
      const totalWidth = marquee.scrollWidth / 2
      gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,
        repeat: -1,
        ease: "none"
      })
    }

    // Scroll reveal for cards
    gsap.utils.toArray('.funky-blog-card').forEach((card: any) => {
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
    gsap.to(".blog-blob", {
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
    <section ref={containerRef} className='relative w-full bg-background overflow-hidden pb-24 md:pb-40'>
      
      {/* ANIMATED MARQUEE HEADER */}
      <div className='relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-primary mb-20 md:mb-32'>
        <div className='absolute inset-0 opacity-10 pointer-events-none'>
           <div className='w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[40px_40px]' />
        </div>

        {/* Giant Marquee Background */}
        <div className='absolute top-1/2 -translate-y-1/2 whitespace-nowrap opacity-20'>
          <div ref={marqueeRef} className='flex gap-10 text-[15vw] md:text-[20vw] font-black uppercase text-text leading-none italic select-none'>
            <span>THE JOURNAL THE JOURNAL THE JOURNAL THE JOURNAL &nbsp;</span>
            <span>THE JOURNAL THE JOURNAL THE JOURNAL THE JOURNAL &nbsp;</span>
          </div>
        </div>

        <div className='relative z-10 text-center'>
            <div className='mb-6 bg-white text-text px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.5em] inline-block shadow-2xl'>
               Her Lead Insights
            </div>
            <h2 className='text-6xl md:text-9xl font-black text-text leading-[0.8] tracking-tighter uppercase drop-shadow-2xl'>
              Lately<span className='text-white'>.</span>
            </h2>
        </div>

        {/* Floating "Stickers" */}
        <div className='absolute top-20 right-[15%] w-24 h-24 bg-white rounded-full hidden md:flex items-center justify-center -rotate-12 shadow-xl animate-bounce'>
           <span className='text-[10px] font-black text-text text-center px-4 leading-tight'>NEW DROP EVERY WEEK</span>
        </div>
        <div className='absolute bottom-20 left-[10%] w-32 h-32 bg-text rounded-lg border-4 border-white hidden md:flex items-center justify-center rotate-12 shadow-2xl skew-x-12'>
           <span className='text-lg font-black text-white italic'>FUNKY!</span>
        </div>
      </div>

      {/* Animated Background Blobs */}
      <div className='blog-blob absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none' />
      <div className='blog-blob absolute top-[60%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none' />
`
      <div className='max-w-7xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-24 md:gap-y-32'>
         {blogPosts.map((post, index) => (
           <div 
             key={post.id}
             className={`funky-blog-card group relative cursor-pointer`}
             style={{ 
               width: post.size === 'large' ? '100%' : post.size === 'medium' ? '500px' : '400px',
               maxWidth: '100%'
             }}
             data-rotate={post.rotation}
             onClick={() => transitionTo('/blog')}
           >
              {/* Image Stage */}
               <div className='relative w-full aspect-square md:aspect-video rounded-[3rem] overflow-hidden bg-black shadow-[15px_15px_0px] shadow-primary group-hover:shadow-none transition-all duration-500 mb-10'>
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
                 <div className='absolute -top-16 left-0 text-[10vw] font-black text-black/5 pointer-events-none italic uppercase'>
                    0{index + 1}
                 </div>
                 <h3 className='text-3xl md:text-5xl font-black text-text leading-[0.9] tracking-tighter uppercase group-hover:text-primary transition-colors'>
                    {post.title}
                 </h3>
                 <p className='mt-5 text-sm md:text-base text-text/50 font-bold max-w-md leading-relaxed'>
                    {post.description}
                 </p>
              </div>
           </div>
         ))}
      </div>

      {/* SECTION FOOTER */}
      <div className='mt-24 md:mt-40 text-center'>
         <button 
           onClick={() => transitionTo('/blog')}
           className='group relative px-12 py-5 bg-text text-background rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-primary transition-all shadow-2xl overflow-hidden'
         >
           <span className='relative z-10'>View All Stories</span>
           <div className='absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500' />
         </button>
      </div>
    </section>
  )
}

export default BlogSection
