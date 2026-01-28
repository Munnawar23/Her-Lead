"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { services } from '@/constants/serviceShowcase'
import { ArrowUpRight, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react'
import { useRouter } from 'next/navigation'

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
)

const ServiceDiscovery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const router = useRouter()

  return (
    <section
      id="services"
      className="relative w-full bg-accent-orange mt-12 md:mt-20 pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden rounded-t-[1.5rem] md:rounded-t-[2.5rem]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Centered "I'm looking for" Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className='mb-10 md:mb-16 flex justify-center w-full'
        >
          <div className='inline-flex items-center justify-center gap-3 md:gap-6 w-max'>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className='w-8 md:w-20 h-[2px] bg-white origin-right'
            />
            <h2
              className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-white text-center'
            >
              I'm looking for
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className='w-8 md:w-20 h-[2px] bg-white origin-left'
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-start">

          {/* Left Column: Active Content */}
          <div className="hidden lg:block space-y-12">

            <div className="min-h-[400px] flex flex-col justify-start lg:pt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="w-full max-w-[550px] aspect-[4/3] rounded-sm overflow-hidden border-2 border-white/20">
                    <img
                      src={services[hoveredIndex].images[0]}
                      alt={services[hoveredIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-2">
                      {services[hoveredIndex].name}
                    </h3>
                    <p className="text-white/80 font-body text-sm md:text-lg leading-relaxed font-medium line-clamp-3">
                      {services[hoveredIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Pill Buttons */}
          <div className="flex flex-col gap-3 lg:pt-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => router.push(`/services/${service.slug}`)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex items-center justify-between px-6 py-3.5 rounded-full border-2 transition-all duration-300 cursor-pointer
                  ${hoveredIndex === index
                    ? 'bg-white text-accent-orange border-white'
                    : 'bg-transparent text-white border-white/20 hover:border-white'
                  }`}
              >
                <span className="text-xs md:text-sm font-heading font-black uppercase tracking-widest text-left">
                  {service.name}
                </span>
                <ArrowUpRight
                  size={16}
                  className={`transition-transform duration-300 ${hoveredIndex === index ? 'rotate-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1 opacity-60'}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDiscovery
