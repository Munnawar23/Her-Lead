"use client"
import React, { useState } from 'react'
import { services } from '@/constants'

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  const serviceDisplayNames = [
    "PR & Media Services",
    "Influencer Marketing",
    "Brand Creation",
    "Search Engine Optimization",
    "Paid Ads",
    "Corporate Training & Development",
    "Career Confidence & Interview Mastery",
    "Web Design & Development",
    "Social Media Management",
    "Find the Talent",
  ]

  const imageSources = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
  ]

  return (
    <section
      id="services"
      className="mt-4 md:mt-8 w-full bg-background px-6 md:px-12 lg:px-20 pt-20 pb-4 md:pb-8 overflow-hidden"
    >
      {/* Header */}
      <div className='mb-16 md:mb-20 text-center'>
        <div className='inline-flex items-center justify-center gap-6'>
          <div className='w-12 md:w-20 h-[2px] bg-red-light' />
          <span className='text-4xl md:text-6xl lg:text-5xl font-heading font-black uppercase tracking-[0.2em] text-red-light'>I am looking for</span>
          <div className='w-12 md:w-20 h-[2px] bg-red-light' />
        </div>
      </div>

      {/* Main Content - Doze Studio Style */}
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start'>

          {/* Left: Image + Description */}
          <div className='w-full lg:w-auto lg:shrink-0'>
            <div className='lg:sticky lg:top-32 space-y-6'>
              {/* Square Image */}
              <div className='w-full lg:w-[320px] xl:w-[380px] aspect-square overflow-hidden rounded-sm bg-black/5 relative'>
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <img
                      src={imageSources[index]}
                      alt={serviceDisplayNames[index]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              {/* Category & Description */}
              <div className='space-y-3 max-w-[380px] min-h-[280px] md:min-h-[320px]'>
                <h4 className='font-heading text-xs md:text-sm text-red-light font-black uppercase tracking-wider'>
                  {services[hoveredIndex].category}
                </h4>
                <p className='font-body text-sm md:text-base text-text font-bold leading-relaxed'>
                  {services[hoveredIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Service Names List */}
          <div className='flex-1 space-y-1 md:space-y-2'>
            {services.map((service, index) => (
              <div
                key={service.id}
                className='cursor-pointer py-1'
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <h3
                  className={`font-heading text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight font-black uppercase tracking-widest transition-all duration-700 ${hoveredIndex === index
                    ? 'text-red-light'
                    : 'text-text'
                    }`}
                >
                  {serviceDisplayNames[index]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
