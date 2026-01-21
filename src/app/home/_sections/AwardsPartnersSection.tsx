"use client"
import React from 'react'
import Image from 'next/image'

const AwardsPartnersSection = () => {
  return (
    <section className="w-full bg-background pt-20 pb-16 border-t border-text/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">
          
          {/* Recognitions */}
          <div className="lg:pr-16">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-text mb-12">
              Our recognitions and awards
            </h4>
            <div className="flex flex-wrap items-center gap-8 md:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              
              {/* Award Items */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 border-2 border-text/20 rounded-lg flex flex-col items-center justify-center p-2 group-hover:border-primary transition-colors">
                   <span className="text-[7px] font-black text-center leading-tight uppercase">The Career Directory</span>
                   <span className="text-[10px] font-black text-primary">2023</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 border-2 border-text/20 rounded-lg flex flex-col items-center justify-center p-2 group-hover:border-red-light transition-colors">
                   <span className="text-[7px] font-black text-center leading-tight uppercase">The Career Directory</span>
                   <span className="text-[10px] font-black text-red-light">2024</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 border-2 border-text/20 rounded-lg flex flex-col items-center justify-center p-2 group-hover:border-primary transition-colors">
                   <span className="text-[7px] font-black text-center leading-tight uppercase">The Career Directory</span>
                   <span className="text-[10px] font-black text-primary">2025</span>
                </div>
              </div>

              {/* Awwwards Style */}
              <div className="flex items-center gap-2 group">
                <div className="w-10 h-10 border-2 border-text flex items-center justify-center font-black text-xl italic rounded-sm">W</div>
                <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase tracking-tighter">CSSW STAR</span>
                    <span className="text-[6px] font-bold opacity-60">HONORS 2024</span>
                </div>
              </div>

              {/* SIA Style */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-text rounded-full flex flex-col items-center justify-center">
                    <span className="text-[8px] font-black">SIA</span>
                    <div className="w-6 h-[1px] bg-text" />
                    <span className="text-[6px] font-bold">WINNER</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="lg:pl-16 lg:border-l-2 border-text/10">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-text mb-12">
              Our partners
            </h4>
            <div className="flex flex-wrap items-center gap-10 md:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
              
              {/* Meta */}
              <div className="group flex items-center gap-4">
                <div className="relative w-8 h-8 md:w-10 md:h-10">
                   <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta_Platforms_Inc._logo.svg" 
                    alt="Meta" 
                    fill 
                    className="object-contain"
                   />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-black tracking-tighter">Meta</span>
                  <span className="text-[8px] md:text-[9px] font-bold opacity-60 uppercase tracking-widest">Business Partner</span>
                </div>
              </div>

              {/* Google */}
              <div className="group flex flex-col items-start gap-1">
                <div className="relative w-24 h-8 md:w-28 md:h-10">
                   <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                    alt="Google" 
                    fill 
                    className="object-contain"
                   />
                </div>
                <span className="text-[8px] font-black border border-text px-2 py-0.5 rounded-sm uppercase tracking-tighter">Google Partner Premier 2025</span>
              </div>

              {/* Shopify */}
              <div className="relative w-28 h-8 md:w-32 md:h-10">
                 <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" 
                  alt="Shopify" 
                  fill 
                  className="object-contain"
                 />
              </div>

              {/* Mailchimp */}
              <div className="relative w-28 h-8 md:w-32 md:h-10">
                 <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/36/Mailchimp_logo.svg" 
                  alt="Mailchimp" 
                  fill 
                  className="object-contain"
                 />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AwardsPartnersSection
