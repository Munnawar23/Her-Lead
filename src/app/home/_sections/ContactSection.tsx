import React from 'react'

const ContactSection = () => {
  return (
    <div id="contact" className='flex flex-col justify-center items-center h-screen w-full bg-black px-10'>
      <div className='overflow-hidden mb-10'>
        <h2 className='font-heading text-7xl md:text-8xl lg:text-[12vw] text-white leading-[0.8] tracking-tighter uppercase font-bold text-center'>
          Get in <span className='text-primary'>Touch</span>
        </h2>
      </div>
      <p className='text-white/40 uppercase tracking-widest text-sm font-bold'>Let&apos;s build something great together</p>
    </div>
  )
}

export default ContactSection
