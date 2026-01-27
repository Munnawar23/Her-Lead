import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'

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
    const router = useRouter()
    return (
        <section className="w-full bg-bg-light pt-12 md:pt-24 pb-8 md:pb-24 border-t border-text/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Section Header: OUR PARTNERS (Centered) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                    className="text-center mb-10 md:mb-24"
                >
                    <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                            className='w-12 md:w-20 h-[2px] bg-secondary origin-right'
                        />
                        <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-secondary'>
                            Our Partners
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                            className='w-12 md:w-20 h-[2px] bg-secondary origin-left'
                        />
                    </div>

                </motion.div>

                {/* Bottom: Brands Marquee */}
                <div className="w-full mb-12 md:mb-32">
                    {/* Infinite Marquee */}
                    <div className="relative flex overflow-hidden">
                        <motion.div
                            animate={{
                                x: ["0%", "-33.33%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30, // Slightly slower for more premium feel
                                    ease: "linear",
                                },
                            }}
                            className="flex items-center gap-24 md:gap-32 whitespace-nowrap will-change-transform"
                        >
                            {[...partners, ...partners, ...partners].map((partner, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 flex items-center justify-center transition-all duration-700 hover:scale-110"
                                >
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="h-10 md:h-16 min-w-[140px] md:min-w-[200px] w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>


                    </div>
                </div>

            </div>
        </section>
    )
}

export default PartnersSection
