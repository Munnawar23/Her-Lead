"use client"
import React from "react"
import { useTransition } from "@/components/TransitionProvider"

const Footer = () => {
  const { transitionTo } = useTransition()

  const links = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ]

  const socials = [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Facebook", href: "#" },
  ]

  return (
    <footer className="w-full bg-background border-t border-text/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* CTA Cards */}
        <div className="py-16 md:py-20 border-b border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 border border-text/20 rounded-2xl hover:border-primary/50 transition-all cursor-pointer">
              <div className="text-3xl mb-4 text-primary">✨</div>
              <h3 className="text-xl font-heading font-black text-text">Request a quote</h3>
            </div>
            <div className="group p-8 border border-text/20 rounded-2xl hover:border-red-light/50 transition-all cursor-pointer">
              <div className="text-3xl mb-4 text-red-light">📝</div>
              <h3 className="text-xl font-heading font-black text-text">General inquiries</h3>
            </div>
            <div className="group p-8 border border-text/20 rounded-2xl hover:border-primary/50 transition-all cursor-pointer">
              <div className="text-3xl mb-4 text-primary">📱</div>
              <h3 className="text-xl font-heading font-black text-text">I'm an influencer</h3>
            </div>
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
                onClick={() => transitionTo('/contact')}
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
                  <p className="text-base font-body text-text">
                    213 Sterling Rd. Unit 214<br />
                    Toronto, ON M6R 2B2, Canada
                  </p>
                  <p className="text-base font-body text-text">
                    <a href="tel:4162542944" className="hover:text-primary transition-colors">416.254.2944</a>
                  </p>
                  <p className="text-base font-body text-text">
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
                      className="text-sm font-body font-medium text-text hover:text-primary transition-colors"
                    >
                      {social.label}
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
            
            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {links.map((link, i) => (
                <button
                  key={i}
                  onClick={() => transitionTo(link.href)}
                  className="text-sm font-body font-black text-text hover:text-red-light transition-colors uppercase tracking-widest"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-4 text-xs font-body text-text font-black uppercase tracking-widest">
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
