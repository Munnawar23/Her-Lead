"use client"

import { serviceCards } from "@/constants"
import ServiceCard from "../components/ServiceCard"
import { motion } from "motion/react"

const ServicesSection = () => {
  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 pt-24 pb-8 md:pb-12 bg-bg-light"
    >
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className='inline-flex items-center justify-center gap-3 md:gap-6'>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
              className='w-12 md:w-20 h-[2px] bg-secondary origin-right'
            />
            <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-secondary'>
              HerLead Legacy
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
              className='w-12 md:w-20 h-[2px] bg-secondary origin-left'
            />
          </div>
          <p className="mt-4 font-body text-sm md:text-body-custom font-bold text-text uppercase tracking-widest max-w-2xl mx-auto opacity-60">
            Comprehensive solutions for digital dominance and professional growth.
          </p>
        </motion.div>

        {serviceCards.map((group, idx) => (
          <ServiceCard key={idx} group={group} />
        ))}

      </div>
    </section>
  )
}

export default ServicesSection
