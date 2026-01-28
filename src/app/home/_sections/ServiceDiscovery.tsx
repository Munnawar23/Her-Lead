"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { services } from '@/constants/serviceShowcase'
import { ArrowUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ServiceDiscovery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const router = useRouter()

  return (
    <section
      id="services"
      className="relative w-full bg-accent-orange mt-8 md:mt-12 pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden rounded-t-[1.5rem] md:rounded-t-[2.5rem]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Centered "I'm looking for" Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className='mb-8 md:mb-12 flex justify-center w-full'
        >
          <div className='inline-flex items-center justify-center gap-3 md:gap-6 w-max'>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "circOut" }}
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
              transition={{ duration: 0.6, ease: "circOut" }}
              className='w-8 md:w-20 h-[2px] bg-white origin-left'
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-start">

          {/* Left Column: Active Content */}
          <div className="hidden lg:block space-y-12">
            <div className="min-h-[400px] flex flex-col justify-start lg:pt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="space-y-8 flex flex-col items-start"
                >
                  {/* Circular Visual with White Border */}
                  <div className="w-[380px] aspect-square rounded-full overflow-hidden border-[10px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
                    <img
                      src={services[hoveredIndex].images[0]}
                      alt={services[hoveredIndex].name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="w-full max-w-lg">
                    <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-3">
                      {services[hoveredIndex].name}
                    </h3>
                    <p className="text-white/80 font-body text-sm md:text-base leading-relaxed font-bold uppercase tracking-widest opacity-80 line-clamp-5">
                      {services[hoveredIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Pill Buttons with "Liquid Fill" Background */}
          <div className="flex flex-col gap-3 lg:pt-4">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => router.push(`/services/${service.slug}`)}
                className="relative group cursor-pointer overflow-hidden rounded-full border-2 border-white/20 transition-all duration-300"
              >
                {/* Animated Background Layer */}
                <motion.div
                  initial={false}
                  animate={{
                    x: hoveredIndex === index ? "0%" : "-102%",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 18,
                    mass: 0.8
                  }}
                  className="absolute inset-0 bg-white z-0"
                />

                <div className="relative z-10 w-full flex items-center justify-between px-8 py-3.5">
                  <span className={`text-[10px] md:text-sm font-heading font-black uppercase tracking-widest transition-colors duration-500 ${hoveredIndex === index ? 'text-accent-orange' : 'text-white'}`}>
                    {service.name}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className={`transition-all duration-500 ${hoveredIndex === index ? 'text-accent-orange rotate-0 translate-x-1' : 'text-white group-hover:translate-x-1 group-hover:-translate-y-1 opacity-60'}`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServiceDiscovery
