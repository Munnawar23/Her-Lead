"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useTransition } from "@/components/TransitionProvider"
import Image from "next/image"

const Footer = () => {
  const { transitionTo } = useTransition()
  const [email, setEmail] = useState("")

  const ctaCards = [
    { title: "Request a quote", icon: "✨", bg: "bg-[#F0F9FF]", textColor: "text-blue-600" },
    { title: "General inquiries", icon: "📝", bg: "bg-[#FFFBEB]", textColor: "text-amber-600" },
    { title: "I'm an influencer", icon: "📱", bg: "bg-[#FDF2F8]", textColor: "text-pink-600" },
    { title: "Write for our blog", icon: "🖋️", bg: "bg-white", textColor: "text-gray-600" },
    { title: "Press inquiries", icon: "📢", bg: "bg-[#F5F3FF]", textColor: "text-violet-600" },
    { title: "Model with us", icon: "👤", bg: "bg-[#F0FDFA]", textColor: "text-teal-600" },
  ]

  const serviceAreas = ["Toronto", "Los Angeles", "Vancouver", "Las Vegas", "New York", "Montréal", "Chicago"]
  const moreLinks = ["About us", "Careers", "Sitemap", "Blog", "Link tree", "Onboarding"]

  return (
    <footer className="w-full bg-[#f4f4f4] text-[#1a1a1a] pt-16 md:pt-24 pb-8 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* TOP SECTION: CTA GRID & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.42fr] gap-8 mb-20">
          {/* CTA Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ctaCards.map((card, i) => (
              <div 
                key={i} 
                className={`${card.bg} group relative p-8 rounded-[2.5rem] border border-black/5 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[180px]`}
              >
                <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-sm border border-black/5 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black tracking-[ -0.05em] leading-[0.9] mt-4">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Newsletter Box */}
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-black/5 flex flex-col justify-between relative overflow-hidden h-full">
            <div className="relative z-10 w-full">
               <p className="text-sm font-bold text-text/60 mb-12 leading-relaxed max-w-[200px]">
                 tips, insights, and trends straight to their inbox.
               </p>
               <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-text/40">Your email</label>
                  <input 
                    type="email" 
                    placeholder="info@herlead.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-black/5 py-4 text-xl font-black placeholder:text-black/10 focus:outline-none focus:border-[#FF1178] transition-colors"
                  />
               </div>
            </div>
            
            <button className="mt-16 group relative w-full h-16 bg-linear-to-r from-[#FF1178] to-[#FFA500] rounded-full overflow-hidden shadow-2xl hover:scale-[1.03] active:scale-95 transition-all">
               <span className="relative z-10 text-white font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                 Join Our Mailing List 
                 <span className="text-2xl leading-none -mt-1">↗</span>
               </span>
            </button>

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>

        <div className="w-full h-px bg-black/5 mb-20" />

        {/* MIDDLE SECTION: AWARDS & PARTNERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Awards */}
          <div className="space-y-12 pr-12">
            <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-text/30">Our recognitions and awards</h4>
            <div className="flex flex-wrap items-center gap-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <div className="w-20 h-10 bg-black/10 rounded" />
              <div className="w-24 h-10 bg-black/10 rounded" />
              <div className="w-20 h-10 bg-black/10 rounded" />
              <div className="w-14 h-14 bg-black/10 rounded-full" />
              <div className="w-24 h-10 bg-black/10 rounded" />
              <div className="w-16 h-10 bg-black/10 rounded" />
            </div>
          </div>
          
          {/* Partners */}
          <div className="md:border-l border-black/10 md:pl-16 space-y-12">
             <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-text/30">Our partners</h4>
             <div className="flex flex-wrap items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
               <div className="font-black text-2xl italic tracking-tighter">Shopify <span className="text-xs non-italic font-bold opacity-60">Partners</span></div>
               <div className="font-black text-xl border-4 border-black px-3 py-1 scale-90">Ad Club</div>
               <div className="font-black text-lg tracking-tight bg-black text-white px-3 py-1">Certified Partner</div>
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-black/10" />
                   <span className="font-black text-xs">blue ant studios</span>
                </div>
             </div>
          </div>
        </div>

        <div className="w-full h-px bg-black/5 mb-20" />

        {/* BOTTOM SECTION: LINKS & PROMO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr] gap-12 mb-24">
          
          {/* Contact */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-text/30">Contact</h4>
            <div className="space-y-8">
               <div className="flex gap-5">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary text-lg border border-black/5">📍</div>
                  <p className="text-base font-black text-text/80 leading-snug">
                    213 Sterling Rd. Unit 214<br />
                    Toronto, ON M6R 2B2, Canada
                  </p>
               </div>
               <div className="flex gap-5">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary text-lg border border-black/5">📞</div>
                  <p className="text-base font-black text-text/90 tracking-tight">416.254.2944</p>
               </div>
               <div className="flex gap-5 items-center">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary text-lg border border-black/5">✉️</div>
                  <p className="text-base font-black text-text/70 hover:text-primary cursor-pointer transition-colors tracking-tight">info@herlead.com</p>
               </div>
            </div>
          </div>

          {/* More Links */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-text/30">More</h4>
            <div className="grid grid-cols-2 gap-y-5 gap-x-12">
               {moreLinks.map((link, i) => (
                 <a key={i} className="text-base font-black text-text/70 hover:text-primary transition-colors cursor-pointer tracking-tight">{link}</a>
               ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-text/30">Service areas</h4>
            <div className="grid grid-cols-2 gap-y-5 gap-x-12">
               {serviceAreas.map((area, i) => (
                 <a key={i} className="text-base font-black text-text/70 hover:text-primary transition-colors cursor-pointer tracking-tight">{area}</a>
               ))}
            </div>
          </div>

          {/* Promo Card */}
          <div className="relative group overflow-hidden rounded-[3rem] bg-black p-10 flex flex-col justify-between min-h-[250px] shadow-2xl border border-white/5">
             <div className="absolute inset-0 opacity-60">
               <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:blur-sm" 
                alt="Promo"
               />
             </div>
             <div className="relative z-10 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-black text-white leading-[1.1] tracking-tighter">
                  I'm interested in Influence Marketing
                </h3>
                <div className="mt-8 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-[#FF1178] group-hover:border-[#FF1178] transition-all duration-500">
                  <span className="text-2xl">↗</span>
                </div>
             </div>
             <div className="absolute inset-0 bg-linear-to-tr from-black via-black/20 to-transparent pointer-events-none" />
          </div>

        </div>

        {/* COPYRIGHT & FOOTER DETAILS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-black/10">
           <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-text/40">
              <span>© 2026 Her Lead Studio</span>
              <span className="opacity-30">•</span>
              <span>All Rights Reserved</span>
              <span className="opacity-30">•</span>
              <span className="hover:text-primary cursor-pointer transition-colors text-text/60">Privacy Policy</span>
           </div>
           <p className="text-[9px] font-bold text-text/20 uppercase tracking-[0.5em]">Udaipur • India • Global</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
