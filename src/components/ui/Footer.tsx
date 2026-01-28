"use client"
import { Instagram, Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
)

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "X", href: "#", icon: XIcon },
]

const buttons = [
  { label: "Request a Quote", bg: "bg-primary", path: "/request-quote" },
  { label: "General Inquiries", bg: "bg-secondary", path: "mailto:info@herlead.com" },
  { label: "I'm an Influencer", bg: "bg-accent-orange", path: "/i-am-influencer" },
  { label: "I Am a Talent", bg: "bg-secondary", path: "/i-am-talent" },
  { label: "I Need a Talent", bg: "bg-accent-blue", path: "/hire-talent" }
]

const Footer = () => {
  const router = useRouter()

  return (
    <footer className="w-full bg-bg-light border-t border-text/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Global CTA Buttons */}
        <div className="w-full pt-16 pb-8 border-b border-text/5">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {buttons.map((btn, i) => (
              <button
                key={i}
                onClick={() => {
                  if (btn.path.startsWith('mailto')) {
                    window.open(btn.path, '_blank');
                  } else {
                    router.push(btn.path);
                  }
                }}
                className={`w-full md:w-auto px-8 py-4 ${btn.bg} text-white rounded-full font-heading font-black text-xs uppercase tracking-[0.15em] hover:scale-105 hover:brightness-110 active:scale-95 transition-all text-center group relative overflow-hidden`}
              >
                <span className="relative z-10">{btn.label}</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Left Column - CTA */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-heading font-black text-text leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                Let's <span className="text-primary italic">Create</span><br />
                Something <span className="text-secondary italic">Great</span>
              </h2>
              <p className="text-sm md:text-body-custom font-body text-text max-w-md leading-relaxed font-bold">
                Ready to elevate your brand? Get in touch and let's start building your digital presence together.
              </p>
              <button
                onClick={() => window.location.href = 'mailto:munawwarh48@gmail.com'}
                className="group px-8 py-4 bg-secondary text-white rounded-full font-heading font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all inline-flex items-center gap-3"
              >
                Get In Touch
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-heading font-black uppercase tracking-wider text-text/40 mb-4 italic">Contact</h3>
                <div className="space-y-3">
                  <p className="text-sm md:text-body-custom font-body font-bold text-text">
                    213 Sterling Rd. Unit 214<br />
                    Toronto, ON M6R 2B2, Canada
                  </p>
                  <p className="text-sm md:text-body-custom font-body font-bold text-text">
                    <a href="tel:4162542944" className="hover:text-primary transition-colors">416.254.2944</a>
                  </p>
                  <p className="text-sm md:text-body-custom font-body font-bold text-text">
                    <a href="mailto:info@herlead.com" className="hover:text-primary transition-colors">info@herlead.com</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-heading font-black uppercase tracking-wider text-text/40 mb-4 italic">Follow</h3>
                <div className="flex flex-wrap gap-4">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-12 h-12 rounded-full border border-text/10 flex items-center justify-center text-text hover:text-primary hover:border-primary transition-all duration-300 bg-white/5"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
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
            <div className="flex items-center gap-4 text-[10px] md:text-xs font-body font-bold text-text uppercase tracking-widest">
              <span>© 2026 Her Lead</span>
              <span className="text-primary italic">•</span>
              <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
              <span className="text-primary italic">•</span>
              <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
