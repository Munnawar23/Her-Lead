import { motion } from 'motion/react'

const partners = [
    { name: "Meta", logo: "https://svgl.app/library/meta.svg" },
    { name: "Google", logo: "https://svgl.app/library/google.svg" },
    { name: "Shopify", logo: "https://svgl.app/library/shopify.svg" },
    { name: "Mailchimp", logo: "https://svgl.app/library/mailchimp.svg" },
    { name: "Amazon", logo: "https://svgl.app/library/amazon.svg" },
    { name: "Microsoft", logo: "https://svgl.app/library/microsoft.svg" },
    { name: "Adobe", logo: "https://svgl.app/library/adobe.svg" },
    { name: "Slack", logo: "https://svgl.app/library/slack.svg" },
]

const PartnersSection = () => {
    return (
        <section className="w-full bg-background pt-24 pb-24 border-t border-text/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Section Header: OUR PARTNERS (Centered) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                            className='w-12 md:w-20 h-[2px] bg-red-light origin-right'
                        />
                        <span className='text-sm md:text-base lg:text-5xl font-heading font-black uppercase tracking-[0.3em] text-red-light'>Our Partners</span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                            className='w-12 md:w-20 h-[2px] bg-red-light origin-left'
                        />
                    </div>

                </motion.div>

                {/* Bottom: Brands Marquee */}
                <div className="w-full mb-32">
                    {/* Infinite Marquee */}
                    <div className="relative flex overflow-hidden">
                        <motion.div
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                            className="flex items-center gap-24 md:gap-32 whitespace-nowrap"
                        >
                            {[...partners, ...partners].map((partner, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-center transition-all duration-700 hover:scale-110"
                                >
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="h-10 md:h-16 min-w-[140px] md:min-w-[200px] w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>

                        {/* Fades for smooth edges */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
                    </div>
                </div>

                {/* CTA Buttons - Relocated to Bottom, No Heading */}
                <div className="w-full pt-12 border-t border-text/5">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        {[
                            { label: "Request a Quote", bg: "bg-primary", href: "https://docs.google.com/forms/d/1JSJtoIYYg8itgB_-HIdJreCENebvQP9pMOBIWgsooUY/edit" },
                            { label: "General Inquiries", bg: "bg-red-light", href: "mailto:info@herlead.com" },
                            { label: "I'm an Influencer", bg: "bg-[#0891B2]", href: "https://docs.google.com/forms/d/1SIP8XCJ7QZI9x_xbT6wdX5Ri9wiVPlEjlwsDRTFd3Gs/edit" },
                            { label: "I Am a Talent", bg: "bg-[#4F46E5]", href: "https://forms.gle/3Su19gcu6wWBBAsb7" },
                            { label: "I Need a Talent", bg: "bg-[#FF8A65]", href: "https://forms.gle/7dS3TUEwf2tEDTvj8" }
                        ].map((btn, i) => (
                            <motion.button
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => window.open(btn.href, '_blank')}
                                className={`w-full md:w-auto px-8 py-4 ${btn.bg} text-white rounded-full font-heading font-black text-xs uppercase tracking-[0.15em] hover:scale-105 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-black/5 text-center`}
                            >
                                {btn.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PartnersSection
