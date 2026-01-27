"use client"
import React, { useRef, useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { services } from '@/constants/serviceShowcase'
import { motion, useScroll, useTransform, useSpring, useVelocity, useMotionValue, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { ArrowLeft, ChevronRight, Search, User, Target, Send, ArrowRight, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

// --- AWWWARDS COMPONENTS ---

/**
 * Magnetic effect for buttons
 */
const Magnetic = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const mouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const { width, height, left, top } = ref.current!.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        setPosition({ x: x * 0.4, y: y * 0.4 })
    }

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position
    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    )
}

/**
 * Text Reveal component for words
 */
const RevealText = ({ text, className }: { text: string, className?: string }) => {
    const words = text.split(" ")
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1 mr-[0.2em]">
                    <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}

/**
 * FAQ Item Component
 */
const FAQItem = ({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-text/10"
        >
            <button
                onClick={onClick}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <span className="text-xl md:text-2xl font-heading font-black text-text uppercase tracking-tight group-hover:text-secondary transition-colors pr-8">
                    {question}
                </span>
                <span className={`flex items-center justify-center w-8 h-8 md:w-12 md:h-12 border border-text/10 rounded-full transition-all duration-500 ${isOpen ? 'bg-secondary border-secondary text-white rotate-180' : 'group-hover:bg-text group-hover:text-white'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-lg font-body text-text/70 leading-relaxed max-w-3xl font-medium">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const ServiceDetail = () => {
    const { slug } = useParams()
    const router = useRouter()
    const { scrollY } = useScroll()
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    const service = services.find(s => s.slug === slug)

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg-light">
                <div className="text-center space-y-6">
                    <h1 className="text-5xl font-heading font-black text-text uppercase tracking-tighter italic">Lost in Strategy?</h1>
                    <button onClick={() => router.push('/')} className="px-10 py-4 bg-secondary text-white rounded-full font-heading font-black uppercase tracking-widest transition-transform">Return Home</button>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-bg-light overflow-x-hidden selection:bg-secondary selection:text-white pt-24 md:pt-32">

            {/* Simple Typographic Hero */}
            <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16 md:mb-20">
                <div className="space-y-12 md:space-y-16 max-w-4xl">
                    <Magnetic>
                        <Link
                            href="/#services"
                            className="group inline-flex items-center gap-4 text-text/40 hover:text-text transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full border border-text/10 flex items-center justify-center group-hover:bg-text group-hover:text-white transition-all">
                                <ArrowLeft size={20} />
                            </div>
                            <span className="font-heading font-black uppercase tracking-[0.4em] text-[10px]">Back to Ecosystem</span>
                        </Link>
                    </Magnetic>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 80 }}
                            className="h-1.5 bg-secondary"
                        />
                        <h1 className="text-6xl md:text-7xl lg:text-9xl font-heading font-black text-text uppercase tracking-tighter leading-[0.9] selection:bg-secondary selection:text-white">
                            <RevealText text={service.name} />
                        </h1>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-secondary font-heading font-black uppercase tracking-[0.6em] text-[12px]">The Mission</h3>
                        <h2 className="text-2xl md:text-4xl font-heading font-black text-text uppercase tracking-tighter leading-tight max-w-2xl">
                            Define. <span className="text-text/20">Dominate.</span> <br />
                            <span className="text-secondary italic">Deliver.</span>
                        </h2>
                    </div>
                </div>
            </section>



            {/* Strategic Content Section - Redesigned */}
            <section className="w-full px-6 md:px-12 lg:px-20 mb-32 md:mb-40">
                <div className="max-w-7xl mx-auto">
                    <div className="w-full h-px bg-text/10 mb-16" />

                    <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr] gap-16 lg:gap-24 items-start">
                        {/* Sticky Section Label */}
                        <div className="hidden lg:block sticky top-32">
                            <span className="block font-heading font-black text-xs uppercase tracking-[0.4em] text-secondary mb-4">Phase One</span>
                            <h2 className="text-4xl font-heading font-black text-text uppercase tracking-tighter leading-none">
                                The <br /> Strategy
                            </h2>
                            <div className="w-12 h-1.5 bg-text mt-6" />
                        </div>

                        {/* Main Content Area */}
                        <div className="space-y-16">
                            {/* Mobile Label */}
                            <div className="lg:hidden">
                                <span className="block font-heading font-black text-xs uppercase tracking-[0.4em] text-secondary mb-2">The Strategy</span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                {/* Decorative Quote Mark */}
                                <span className="absolute -top-8 -left-8 text-8xl font-serif text-text/5 select-none">“</span>

                                <p className="relative text-xl md:text-2xl font-medium text-text/80 leading-relaxed tracking-wide">
                                    <span className="float-left text-6xl md:text-7xl font-heading font-black text-text mr-4 mt-[-6px] leading-[0.8]">
                                        {service.description.charAt(0)}
                                    </span>
                                    {service.description.slice(1)}
                                </p>
                            </motion.div>

                            {/* Stylized Specs Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Protocol", val: "Alpha Standard" },
                                    { label: "Output", val: "High Impact" },
                                    { label: "Support", val: "24/7 Priority" },
                                    { label: "Timeline", val: "Accelerated" }
                                ].map((stat, i) => (
                                    <div key={i} className="group border border-text/10 p-6 hover:bg-black hover:border-black transition-colors duration-500">
                                        <span className="block font-heading font-black text-[10px] uppercase tracking-[0.3em] text-secondary mb-3 group-hover:text-white/60 transition-colors">{stat.label}</span>
                                        <span className="text-xl md:text-2xl font-heading font-black text-text uppercase group-hover:text-white transition-colors">{stat.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards with Hover Scale */}
            <section className="bg-bg-light py-12 md:py-20 border-y border-text/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-16 lg:gap-32">
                        {[
                            {
                                icon: <Search size={48} />,
                                title: "Hyper Discovery",
                                desc: "Dominate search results with AI-native SEO strategies."
                            },
                            {
                                icon: <User size={48} />,
                                title: "Human Centric",
                                desc: "Forging deep emotional connections with your core audience."
                            },
                            {
                                icon: <Target size={48} />,
                                title: "Strategic Precision",
                                desc: "Minimalist execution with maximalist results."
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1 }}
                                className="flex flex-col items-center text-center space-y-10 group cursor-default"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    className="text-secondary/80 transition-colors group-hover:text-secondary"
                                >
                                    {card.icon}
                                </motion.div>
                                <div className="space-y-6">
                                    <h3 className="text-3xl lg:text-4xl font-heading font-black uppercase tracking-tighter text-text leading-none">
                                        {card.title}
                                    </h3>
                                    <div className="w-12 h-1.5 bg-secondary mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
                                    <p className="text-text/60 font-body text-lg leading-relaxed max-w-[300px] mx-auto">
                                        {card.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW FAQ SECTION */}
            <section className="py-24 md:py-32 bg-white border-b border-text/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="mb-20 space-y-6">
                        <span className="text-secondary font-heading font-black uppercase tracking-[0.4em] text-xs">Clarity First</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-black text-text uppercase tracking-tighter leading-none">
                            Common <span className="text-text/20">Questions</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl">
                        {(service.faqs || []).map((faq, i) => (
                            <FAQItem
                                key={i}
                                index={i}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openFAQ === i}
                                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form with Magnetic Submit */}
            <section className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20 lg:gap-32 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 60 }}
                                    viewport={{ once: true }}
                                    className="h-1 bg-secondary"
                                />
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-text uppercase tracking-tighter leading-[0.85] selection:bg-secondary selection:text-white">
                                    COMMAND <br /> YOUR <br /> <span className="text-secondary italic">SPACE.</span>
                                </h2>
                            </div>
                            <p className="text-2xl font-body text-text/70 leading-relaxed max-w-lg font-medium">
                                We don’t just build brands; we establish dominance. Reach out to start your trajectory.
                            </p>

                            <div className="flex flex-col gap-10 pt-8">
                                <Magnetic>
                                    <div className="flex items-center gap-6 group cursor-pointer">
                                        <div className="w-16 h-16 rounded-full bg-bg-light flex items-center justify-center group-hover:bg-text group-hover:text-white transition-all shadow-lg shadow-black/5">
                                            <Send size={24} />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] font-heading font-black uppercase tracking-[0.4em] text-text/40">Nexus Direct</span>
                                            <span className="text-xl font-heading font-black text-text">HELLO@HERLEAD.COM</span>
                                        </div>
                                    </div>
                                </Magnetic>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-bg-light p-8 md:p-10 lg:p-12 rounded-[3.5rem] shadow-2xl space-y-8 border border-text/5 w-full"
                        >
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 gap-8">
                                    <div className="group space-y-2">
                                        <label className="text-text text-[10px] font-heading font-black uppercase tracking-[0.3em] ml-2">Full Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-text/20 px-4 py-3 text-text text-lg focus:border-secondary focus:outline-none transition-all placeholder:text-text/20 font-black" placeholder="Your Name" />
                                    </div>
                                    <div className="group space-y-2">
                                        <label className="text-text text-[10px] font-heading font-black uppercase tracking-[0.3em] ml-2">Email</label>
                                        <input type="email" className="w-full bg-transparent border-b border-text/20 px-4 py-3 text-text text-lg focus:border-secondary focus:outline-none transition-all placeholder:text-text/20 font-black" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div className="group space-y-2">
                                    <label className="text-text text-[10px] font-heading font-black uppercase tracking-[0.3em] ml-2">Message</label>
                                    <textarea rows={4} className="w-full bg-transparent border border-text/20 rounded-[2rem] px-6 py-6 text-text text-lg focus:border-secondary focus:outline-none transition-all placeholder:text-text/20 resize-none font-black" placeholder="How can we help?"></textarea>
                                </div>

                                <Magnetic>
                                    <button className="w-full group/btn relative bg-secondary text-white py-6 rounded-full font-heading font-black uppercase tracking-[0.4em] overflow-hidden transition-all shadow-xl shadow-secondary/20 hover:scale-[1.02]">
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            Execute
                                            <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
                                        </span>
                                    </button>
                                </Magnetic>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Seamless Footer CTA - Light Version */}
            <section className="bg-white py-32 md:py-40 text-center border-t border-text/5 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        <span className="text-secondary font-heading font-black uppercase tracking-[0.5em] text-[10px]">What's Next</span>
                        <Link href="/#services" className="group block space-y-6">
                            <h2 className="text-6xl md:text-8xl lg:text-[11vw] font-heading font-black text-text uppercase tracking-tighter leading-none group-hover:text-secondary transition-all">
                                EXPLORE <br /> THE <span className="italic">FULL</span> <br /> LEGACY.
                            </h2>
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-text/10 flex items-center justify-center mx-auto group-hover:bg-text group-hover:text-white transition-all scale-75 group-hover:scale-100">
                                <ArrowRight size={48} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

const ArrowUpRight = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
)

export default ServiceDetail 
