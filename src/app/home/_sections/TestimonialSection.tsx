"use client"
import { testimonials } from '@/constants'
import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const TestimonialSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    })
  }

  return (
    <section
      className='relative w-full bg-red-light py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden rounded-t-[4rem]'
    >
      <div className='max-w-7xl mx-auto'>

        {/* Header (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-20 md:mb-32"
        >
          <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
              className='w-12 md:w-20 h-[2px] bg-white/30 origin-right'
            />
            <span className='text-sm md:text-base font-heading font-black uppercase tracking-[0.3em] text-white'>Testimonials</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
              className='w-12 md:w-20 h-[2px] bg-white/30 origin-left'
            />
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-none tracking-tighter uppercase'>
            What our clients <br className='hidden md:block' />
            <span className="italic text-white">love about us</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16'>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className='space-y-6 flex flex-col'
            >
              {/* Quote Icon SVG */}
              <div className='text-white/60'>
                <svg width="32" height="24" viewBox="0 0 48 36" fill="currentColor">
                  <path d="M0 21.6001C0 14.4001 2.4 -5.72205e-05 14.4 -5.72205e-05V7.20002C9.6 7.20002 7.2 12 7.2 16.8001V21.6001H14.4V36H0V21.6001ZM26.4 21.6001C26.4 14.4001 28.8 -5.72205e-05 40.8 -5.72205e-05V7.20002C36 7.20002 33.6 12 33.6 16.8001V21.6001H40.8V36H26.4V21.6001Z" />
                </svg>
              </div>

              <p className='text-white text-base md:text-lg font-body font-bold leading-[1.6] flex-1'>
                "{t.quote}"
              </p>

              <div className='pt-4 space-y-4'>
                {/* 5 Star Rating */}
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="white" className="text-white" />
                  ))}
                </div>
                <div className='flex flex-col'>
                  <span className='text-white font-heading font-black uppercase text-sm tracking-[0.2em]'>
                    {t.company}
                  </span>
                  <span className='text-white/40 text-[10px] uppercase font-bold tracking-widest'>Verified Client</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
