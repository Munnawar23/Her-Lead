"use client"

import React, { useRef, useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { services } from '@/constants/serviceShowcase'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Plus, Minus, Send, CheckCircle2, Search, TrendingUp, Infinity } from 'lucide-react'
import Link from 'next/link'

// --- REFINED COMPONENTS ---

/**
 * Premium Magnetic Button
 */
const Magnetic = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const mouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        const x = clientX - (rect.left + rect.width / 2)
        const y = clientY - (rect.top + rect.height / 2)
        setPosition({ x: x * 0.3, y: y * 0.3 })
    }

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * Smooth Text Reveal
 */
const RevealText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    return (
        <span className="inline-block overflow-hidden pb-2">
            <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
            >
                {text}
            </motion.span>
        </span>
    )
}

/**
 * Redesigned FAQ Item
 */
const FAQItem = ({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`group border-b border-black/5 transition-colors duration-500 ${isOpen ? 'bg-black/[0.02]' : 'hover:bg-black/[0.01]'}`}
        >
            <button
                onClick={onClick}
                className="w-full py-6 md:py-8 px-4 md:px-6 flex items-center justify-between text-left"
            >
                <div className="flex gap-4 md:gap-6 items-start">
                    <span className="text-[10px] md:text-xs font-heading font-black text-secondary/40 mt-1">0{index + 1}</span>
                    <span className="text-lg md:text-2xl font-heading font-black text-text uppercase tracking-tight transition-colors">
                        {question}
                    </span>
                </div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-black/10 transition-all duration-500 ${isOpen ? 'bg-secondary border-secondary text-white' : 'group-hover:border-black/30'}`}>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </motion.div>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-10 pl-10 md:pl-20 pr-6 md:pr-12">
                            <p className="text-base md:text-lg font-body text-text/60 leading-relaxed max-w-2xl font-medium">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const ServiceDetail = () => {
    const { slug } = useParams()
    const router = useRouter()
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const service = services.find(s => s.slug === slug)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-bg-light p-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-heading font-black text-text uppercase italic mb-8"
                >
                    Lost Connectivity
                </motion.h1>
                <Magnetic>
                    <button
                        onClick={() => router.push('/')}
                        className="px-8 py-4 bg-secondary text-white rounded-full font-heading font-black uppercase tracking-widest text-xs"
                    >
                        Return Home
                    </button>
                </Magnetic>
            </div>
        )
    }

    return (
        <main ref={containerRef} className="bg-bg-light selection:bg-secondary selection:text-white">

            {/* --- HERO SECTION: FULL IMMERSIVE --- */}
            <section className="relative h-[90vh] md:h-screen w-full flex flex-col overflow-hidden bg-black">
                {/* Background Visual */}
                <motion.div
                    style={{ scale }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
                    <Image
                        src={service.images[0]}
                        alt={service.name}
                        fill
                        className="object-cover opacity-60 grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                        priority
                    />
                </motion.div>

                {/* Content Overlay */}
                <div className="relative z-20 flex-1 flex flex-col justify-end p-6 md:p-12 lg:p-20">
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-12"
                        >
                            <Link href="/#services" className="group inline-flex items-center gap-4 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all hover:bg-white/20">
                                <ArrowLeft size={16} />
                                <span className="font-heading font-black uppercase tracking-[0.2em] text-[10px]">Back to Legacy</span>
                            </Link>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="block text-secondary font-heading font-black uppercase tracking-[0.6em] text-xs md:text-sm"
                            >
                                {service.category}
                            </motion.span>
                            <h1 className="text-[10vw] sm:text-[9vw] md:text-[6.5vw] lg:text-[5.5vw] font-heading font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                                <RevealText text={service.name} delay={0.3} />
                            </h1>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8 md:mt-12 border-t border-white/10 pt-8 md:pt-12">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-base sm:text-lg md:text-2xl text-white/70 font-medium max-w-2xl leading-relaxed"
                            >
                                {service.description.split('.')[0]}.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 }}
                                className="flex-shrink-0"
                            >
                                <Magnetic>
                                    <button
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary text-white flex items-center justify-center font-heading font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-white hover:text-secondary transition-colors"
                                    >
                                        Inquire
                                    </button>
                                </Magnetic>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Down Arrow Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
                >
                    <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 48] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-white"
                        />
                    </div>
                </motion.div>
            </section>

            {/* --- CORE CONTENT: CLEAN & TYPOGRAPHIC --- */}
            <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-20 lg:gap-32">
                        {/* Summary Column */}
                        <div className="space-y-8 md:space-y-12">
                            <div className="space-y-4 md:space-y-6">
                                <span className="text-[10px] md:text-xs font-heading font-black text-secondary uppercase tracking-[0.4em]">The Approach</span>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-text uppercase tracking-tighter leading-none">
                                    Strategic <br /> <span className="text-secondary italic">Excellence.</span>
                                </h2>
                            </div>

                            <p className="text-lg md:text-xl text-text/60 font-medium leading-relaxed">
                                {service.description.split('.').slice(1).join('.')}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                {["Protocol Alpha", "High Impact", "Accelerated"].map((tag, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-black/[0.02] text-[10px] font-heading font-black uppercase tracking-widest text-text">
                                        <CheckCircle2 size={12} className="text-secondary" />
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Display Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {service.images.slice(1, 3).map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className={`relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ${i === 1 ? 'md:mt-12' : ''}`}
                                >
                                    <Image src={img} alt="" fill className="object-cover hover:scale-110 transition-transform duration-1000" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- IMPACT CARDS SECTION: REFINED --- */}
            {service.impactCards && (
                <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {service.impactCards.map((card: any, i: number) => {
                                const IconComponent = card.icon === "Search" ? Search : card.icon === "TrendingUp" ? TrendingUp : Infinity;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className="bg-[#FBFBFB] p-8 md:p-10 rounded-[2rem] border border-black/5 flex flex-col items-center text-center space-y-6 group hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 will-change-transform"
                                    >
                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm group-hover:border-black group-hover:scale-110 transition-all duration-500">
                                            <IconComponent size={24} strokeWidth={1.5} className="text-text" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl md:text-2xl font-heading font-black text-text uppercase tracking-tight leading-tight">
                                                {card.title}
                                            </h3>
                                            <p className="text-text/50 font-medium leading-relaxed text-sm md:text-base max-w-[280px] mx-auto">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* --- FAQ SECTION: ELEGANT --- */}
            <section className="py-16 md:py-24 bg-white border-y border-black/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-20">
                        <div className="space-y-4 md:space-y-6">
                            <span className="text-[10px] md:text-xs font-heading font-black text-secondary uppercase tracking-[0.4em]">Common Questions</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-text uppercase tracking-tighter leading-none">
                                MOSTLY ASKED <span className="text-text/20">QUESTIONS</span>
                            </h2>
                        </div>
                        <p className="text-sm md:text-lg text-text/40 font-heading font-bold uppercase tracking-widest max-w-[300px]">
                            Everything you need to know about our {service.name} process.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto border-t border-black/5">
                        {service.faqs.map((faq, i) => (
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

            {/* --- CONTACT SECTION: BOLD --- */}
            <section id="contact" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[40%] aspect-square bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                        <div className="space-y-8 md:space-y-12">
                            <div className="space-y-6 md:space-y-8">
                                <h2 className="text-[10vw] sm:text-[8vw] lg:text-[4.5vw] font-heading font-black text-text uppercase leading-[0.85] tracking-tighter">
                                    READY TO <br /> <span className="text-secondary italic">SCALE?</span>
                                </h2>
                                <div className="w-16 md:w-20 h-2 bg-text" />
                            </div>

                            <p className="text-xl md:text-2xl font-body text-text/60 leading-relaxed max-w-lg">
                                We specialize in high-impact execution. Let's discuss how we can position your brand for dominance.
                            </p>

                            <div className="space-y-6 md:space-y-8 pt-6 md:pt-8 border-t border-black/5">
                                <Link href="mailto:hello@herlead.com" className="flex items-center gap-4 md:gap-6 group">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-text group-hover:text-white transition-all shadow-sm">
                                        <Send size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div className="space-y-0.5 md:space-y-1">
                                        <span className="block text-[8px] md:text-[10px] font-heading font-black uppercase tracking-[0.4em] text-text/40">Direct Connection</span>
                                        <span className="text-lg md:text-2xl font-heading font-black text-text group-hover:text-secondary transition-colors">HELLO@HERLEAD.COM</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-black/5">
                            <form className="space-y-8 md:space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                    <div className="relative group">
                                        <input type="text" className="w-full bg-transparent border-b-2 border-black/10 py-3 md:py-4 text-lg md:text-xl text-black placeholder:text-black/40 focus:border-secondary focus:outline-none transition-all font-black uppercase tracking-tight" placeholder="Full Name" />
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-focus-within:w-full transition-all duration-500" />
                                    </div>
                                    <div className="relative group">
                                        <input type="email" className="w-full bg-transparent border-b-2 border-black/10 py-3 md:py-4 text-lg md:text-xl text-black placeholder:text-black/40 focus:border-secondary focus:outline-none transition-all font-black uppercase tracking-tight" placeholder="Email Address" />
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-focus-within:w-full transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="relative group">
                                    <textarea rows={2} className="w-full bg-transparent border-b-2 border-black/10 py-3 md:py-4 text-lg md:text-xl text-black placeholder:text-black/40 focus:border-secondary focus:outline-none transition-all resize-none font-black uppercase tracking-tight" placeholder="Project Details"></textarea>
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-focus-within:w-full transition-all duration-500" />
                                </div>

                                <Magnetic className="w-full">
                                    <button className="group relative w-full bg-text text-white py-5 md:py-6 rounded-full font-heading font-black uppercase tracking-[0.4em] overflow-hidden transition-all hover:bg-secondary">
                                        <span className="relative z-10 flex items-center justify-center gap-4 text-sm md:text-base">
                                            Initiate
                                            <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                                        </span>
                                    </button>
                                </Magnetic>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NEXT CHAPTER: ULTRA MINIMAL --- */}
            <section className="bg-black py-16 md:py-32 text-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12 md:space-y-16"
                    >
                        <span className="inline-block text-secondary font-heading font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[10px] mb-4 md:mb-8">Next Chapter</span>

                        <Link href="/#services" className="group inline-block">
                            <h2 className="text-[8vw] sm:text-[7vw] font-heading font-black text-white uppercase tracking-tighter leading-none transition-all duration-700 hover:text-secondary group-hover:italic">
                                EXPLORE <br /> ALL <br /> LEGACY
                            </h2>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 45 }}
                                className="w-20 h-20 md:w-40 md:h-40 rounded-full border border-white/20 flex items-center justify-center mx-auto mt-12 md:mt-16 transition-all group-hover:border-secondary group-hover:bg-secondary group-hover:text-white"
                            >
                                <ArrowRight size={48} className="text-white scale-75 md:scale-100" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default ServiceDetail 
