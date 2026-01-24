"use client"
import React from "react"
import { useTransition } from "@/context/TransitionProvider"
import { Instagram, Linkedin } from "lucide-react"

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
)

const Footer = () => {
  const { transitionTo } = useTransition()

  const socials = [
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "X", href: "#", icon: XIcon },
  ]

  return (
    <footer className="w-full bg-background border-t border-text/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* CTA Buttons */}
        <div className="py-16 md:py-20 border-b border-text/10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Request a Quote", bg: "bg-primary", text: "text-white" },
              { label: "General Inquiries", bg: "bg-red-light", text: "text-white" },
              { label: "I'm an Influencer", bg: "bg-[#0891B2]", text: "text-white" },
              { label: "I am Talent", bg: "bg-[#4F46E5]", text: "text-white" },
              { label: "I Need Talent", bg: "bg-[#FF8A65]", text: "text-white" }
            ].map((btn, i) => (
              <button
                key={i}
                className={`px-8 py-4 ${btn.bg} ${btn.text} rounded-full font-heading font-black text-xs uppercase tracking-[0.15em] hover:scale-105 hover:brightness-110 active:scale-95 transition-all shadow-xl`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Left Column - CTA */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text leading-[0.9] tracking-tighter uppercase">
                Let's <span className="text-primary">Create</span><br />
                Something <span className="text-red-light">Great</span>
              </h2>
              <p className="text-base md:text-lg font-body text-text max-w-md leading-relaxed font-bold">
                Ready to elevate your brand? Get in touch and let's start building your digital presence.
              </p>
              <button
                onClick={() => window.location.href = 'mailto:munawwarh48@gmail.com'}
                className="group px-8 py-4 bg-text text-background rounded-full font-heading font-black text-xs uppercase tracking-wider hover:bg-primary transition-all inline-flex items-center gap-3"
              >
                Get In Touch
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-heading font-black uppercase tracking-wider text-text/40 mb-4">Contact</h3>
                <div className="space-y-3">
                  <p className="text-base font-body font-bold text-text">
                    213 Sterling Rd. Unit 214<br />
                    Toronto, ON M6R 2B2, Canada
                  </p>
                  <p className="text-base font-body font-bold text-text">
                    <a href="tel:4162542944" className="hover:text-primary transition-colors">416.254.2944</a>
                  </p>
                  <p className="text-base font-body font-bold text-text">
                    <a href="mailto:info@herlead.com" className="hover:text-primary transition-colors">info@herlead.com</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-heading font-black uppercase tracking-wider text-text/40 mb-4">Follow</h3>
                <div className="flex flex-wrap gap-4">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-full border border-text/10 flex items-center justify-center text-text hover:text-primary hover:border-primary transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-text/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">


            {/* Copyright */}
            <div className="flex items-center gap-4 text-xs font-body font-bold text-text uppercase tracking-widest">
              <span>© 2026 Her Lead</span>
              <span className="text-primary">•</span>
              <a href="#" className="hover:text-red-light transition-colors">Privacy</a>
              <span className="text-primary">•</span>
              <a href="#" className="hover:text-red-light transition-colors">Terms</a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
