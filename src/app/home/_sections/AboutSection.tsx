"use client"
import Image from 'next/image'
import { aboutContent } from '@/constants'
import { motion } from 'motion/react'

const AboutSection = () => {

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  const textRevealVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section
      className='relative w-full bg-bg-light px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-4 md:pb-8 overflow-hidden'
      id="about"
    >
      <div className='absolute top-20 right-[10%] w-64 h-64 bg-secondary/20 rounded-full blur-3xl' />
      <div className='absolute bottom-20 left-[5%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px]' />

      <div className='max-w-7xl mx-auto'>
        {/* Centered "Why Herlead" Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className='mb-16 md:mb-24 flex justify-center w-full'
        >
          <div className='inline-flex items-center justify-center gap-3 md:gap-6 w-max'>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className='w-8 md:w-20 h-[2px] bg-secondary origin-right'
            />
            <motion.span
              variants={fadeInVariants}
              className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.2em] text-secondary whitespace-nowrap'
            >
              Why Herlead
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className='w-8 md:w-20 h-[2px] bg-secondary origin-left'
            />
          </div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start'>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            className='lg:col-span-6 relative order-2 lg:order-1 flex justify-center lg:justify-start'
          >
            <div
              className='relative aspect-square w-full max-w-xl overflow-hidden rounded-sm bg-text/5'
            >
              <div className='absolute inset-0'>
                <Image
                  src="/images/about.webp"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className='absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-40' />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className='lg:col-span-6 space-y-8 lg:space-y-12 order-1 lg:order-2'
          >
            <div className='space-y-6'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter text-text uppercase'>
                <div className='relative'>
                  <motion.span variants={textRevealVariants} className='inline-block'>BUILDING</motion.span>
                </div>
                <div className='relative'>
                  <motion.span variants={textRevealVariants} className='inline-block text-secondary'>DIGITAL</motion.span>
                </div>
                <div className='relative'>
                  <motion.span variants={textRevealVariants} className='inline-block text-primary'>IMPACT.</motion.span>
                </div>
              </h2>
            </div>

            <div className='max-w-xl space-y-6'>
              <motion.p variants={fadeInVariants} className='text-lg md:text-body-custom font-body font-bold text-text leading-relaxed'>
                {aboutContent.intro}
              </motion.p>

              <motion.p variants={fadeInVariants} className='text-lg md:text-body-custom font-body text-text leading-relaxed'>
                {aboutContent.mainDescription}
              </motion.p>

              <motion.div variants={fadeInVariants} className='stats-grid grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-text/10'>
                {[
                  { label: 'Experience', value: '10+' },
                  { label: 'Brands', value: '50+' },
                  { label: 'Results', value: '100%' }
                ].map((stat, i) => (
                  <div key={i} className='space-y-1'>
                    <span className='block text-[10px] uppercase tracking-[0.3em] font-heading font-black text-primary'>{stat.label}</span>
                    <span className='text-3xl font-black font-heading text-text'>{stat.value}</span>
                  </div>
                ))}
              </motion.div>


            </div>
          </motion.div>
        </div>

        {/* Vision from the Founder */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center mt-20'>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className='w-full space-y-4'
          >
            <div className='space-y-3'>
              <motion.div variants={fadeInVariants} className='inline-flex items-center gap-3'>
                <div className='w-12 h-[2px] bg-secondary' />
                <span className='text-sm md:text-base font-heading font-black uppercase tracking-[0.3em] text-secondary'>Vision from the Founder</span>
              </motion.div>

              <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter text-text'>
                <div className='relative'>
                  <motion.span variants={textRevealVariants} className='inline-block'>EMPOWERING</motion.span>
                </div>
                <div className='relative'>
                  <motion.span variants={textRevealVariants} className='inline-block text-secondary'>BRANDS</motion.span>
                </div>
                <div className='relative'>
                  <motion.span variants={textRevealVariants} className='inline-block text-primary'>THROUGH STORY.</motion.span>
                </div>
              </h3>
            </div>

            <div className='w-full space-y-3'>
              {aboutContent.founderVision.map((paragraph, index) => (
                <motion.p key={index} variants={fadeInVariants} className='text-lg md:text-body-custom font-body text-text leading-relaxed w-full'>
                  {paragraph}
                </motion.p>
              ))}

              <motion.div variants={fadeInVariants} className='pt-2'>
                <div className='space-y-1'>
                  <p className='text-sm font-heading font-black text-text'>{aboutContent.founder.name}</p>
                  <p className='text-xs font-body text-text/70'>{aboutContent.founder.title}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
            className='relative flex justify-center lg:justify-end'
          >
            <div className='relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-sm bg-text/5'>
              <Image
                src="/images/founder.webp"
                alt="Founder"
                fill
                className="object-cover"
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent' />
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className='absolute -right-20 top-1/2 -translate-y-1/2 rotate-90 hidden xl:block'
      >
        <span className='text-[12vh] font-black font-heading text-text/5 select-none whitespace-nowrap uppercase tracking-widest'>
          DIGITAL ELEVATION
        </span>
      </motion.div>
    </section>
  )
}

export default AboutSection
