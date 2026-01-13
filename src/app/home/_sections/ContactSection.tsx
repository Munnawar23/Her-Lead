import React from 'react'

const ContactSection = () => {
  return (
    <div id="contact" className='relative min-h-[80vh] flex flex-col justify-center items-center w-full bg-black px-10 overflow-hidden border-t border-white/10'>
      {/* Background Aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className='relative z-10 text-center space-y-8'>
        <div className='overflow-hidden'>
          <h4 className="font-heading text-primary text-xs uppercase tracking-[0.5em] font-bold mb-6 italic animate-pulse">Available for Projects</h4>
          <h2 className='font-heading text-6xl md:text-8xl lg:text-[10vw] text-white leading-[0.8] tracking-tighter uppercase font-bold drop-shadow-2xl'>
            Let&apos;s Build <br /> <span className='text-primary italic'>Something</span> <br /> Great.
          </h2>
        </div>
        
        <div className="pt-12">
          <a 
            href="mailto:hello@her-lead.com"
            className="group relative inline-flex items-center justify-center px-12 py-6 border border-white/20 rounded-full overflow-hidden transition-all duration-500 hover:border-primary hover:px-16"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 font-heading text-xs uppercase tracking-[0.3em] font-bold text-white group-hover:text-black transition-colors duration-500">
              Start a Conversation
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 w-full flex justify-between px-12 opacity-30 text-[10px] uppercase font-bold tracking-widest text-white">
        <span>© 2026 Her Lead Agency</span>
        <div className="flex gap-8">
          <span className="hover:text-primary cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Twitter</span>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
