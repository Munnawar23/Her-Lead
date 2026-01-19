"use client"
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    quote: "Her Lead transformed our digital presence from basic to world-class within months. Their strategic approach and creative execution exceeded all expectations.",
    author: "Sarah Jenkins",
    role: "CEO",
    company: "LuxBeauty",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    rating: 5
  },
  {
    id: 2,
    quote: "The most creative agency we've ever worked with. They don't just follow trends—they create them through culture-led design and authentic storytelling.",
    author: "Marcus Chen",
    role: "Founder",
    company: "TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    rating: 5
  },
  {
    id: 3,
    quote: "Their influencer marketing campaigns have soul. They find the perfect alignment between brands and creators, resulting in authentic partnerships that drive real results.",
    author: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Vogue Collective",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    rating: 5
  }
]

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useGSAP(() => {
    // Reveal animation for the section
    gsap.from(".testimonial-header", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    // Stagger animation for testimonial cards
    gsap.from(".testimonial-slide", {
      x: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".testimonials-container",
        start: "top 80%",
      }
    });
  }, { scope: containerRef })

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={containerRef} className='relative w-full min-h-screen bg-background flex items-center justify-center py-20 md:py-32 px-6 md:px-12 overflow-hidden'>
      
      {/* Decorative Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none'>
        <div className='absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary rounded-full blur-[150px]' />
        <div className='absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-primary rounded-full blur-[120px]' />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>
        
        {/* Header */}
        <div className='testimonial-header text-center mb-16 md:mb-24'>
          <h2 className='text-5xl md:text-7xl lg:text-6xl font-black text-text leading-[0.85] tracking-tighter uppercase mb-6'>
            What They're <br />
            <span className="text-red-light">Saying</span><span className="text-primary">.</span>
          </h2>
          <p className='text-base md:text-lg text-text max-w-2xl mx-auto font-bold'>
            Don't just take our word for it—hear from the brands we've helped transform.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className='testimonials-container relative'>
          <div className='relative overflow-hidden'>
            <div 
              className='flex transition-transform duration-700 ease-out'
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className='testimonial-slide min-w-full px-4'
                >
                  <div className='max-w-5xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center'>
                      
                      {/* Image Side */}
                      <div className='relative order-2 lg:order-1'>
                        <div className='aspect-square rounded-2xl overflow-hidden relative group'>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700'
                          />
                          <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent' />
                          
                          {/* Floating Badge */}
                          <div className='absolute top-6 right-6 bg-primary px-6 py-3 rounded-full'>
                            <div className='flex items-center gap-1'>
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className='text-white text-sm'>★</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className='order-1 lg:order-2 space-y-8'>
                        {/* Quote Icon */}
                        <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                          <span className='text-4xl text-primary font-serif'>"</span>
                        </div>

                        {/* Quote */}
                        <blockquote className='text-2xl md:text-3xl lg:text-4xl font-black text-text leading-[1.2] tracking-tight italic'>
                          {testimonial.quote}
                        </blockquote>

                        {/* Author Info */}
                        <div className='pt-6 border-t border-text/10'>
                          <h4 className='text-xl font-black text-text uppercase tracking-tight mb-1'>
                            {testimonial.author}
                          </h4>
                          <p className='text-sm font-bold text-red-light uppercase tracking-wider'>
                            {testimonial.role} • {testimonial.company}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className='flex items-center justify-center gap-6 mt-16'>
            <button
              onClick={prevTestimonial}
              className='w-14 h-14 rounded-full border-2 border-text/10 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all group'
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className='flex items-center gap-3'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-12 h-2 bg-primary rounded-full' 
                      : 'w-2 h-2 bg-text/20 rounded-full hover:bg-text/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className='w-14 h-14 rounded-full border-2 border-text/10 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all group'
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className='grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-text/5'>
          {[
            { label: 'Happy Clients', value: '50+' },
            { label: 'Success Rate', value: '98%' },
            { label: 'Projects Delivered', value: '200+' }
          ].map((stat, i) => (
            <div key={i} className='text-center'>
              <div className='text-3xl md:text-4xl font-black text-primary mb-2'>{stat.value}</div>
              <div className='text-xs font-bold uppercase tracking-wider text-text'>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialSection