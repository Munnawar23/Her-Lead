"use client"

import React, { useRef, useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { services } from '@/constants/serviceShowcase'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Plus, Minus, Send, CheckCircle2, Search, TrendingUp, Infinity } from 'lucide-react'
import Link from 'next/link'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

// --- REFINED COMPONENTS ---

/**
 * Premium Magnetic Button
 */
const Magnetic = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const onMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            gsap.to(element, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const onMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        };

        element.addEventListener('mousemove', onMouseMove);
        element.addEventListener('mouseleave', onMouseLeave);

        return () => {
            element.removeEventListener('mousemove', onMouseMove);
            element.removeEventListener('mouseleave', onMouseLeave);
        };
    }, { scope: ref });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}

/**
 * Smooth Text Reveal
 */
const RevealText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const ref = useRef<HTMLSpanElement>(null)

    useGSAP(() => {
        gsap.from(ref.current, {
            y: "100%",
            duration: 1,
            delay,
            ease: "power3.out"
        });
    }, { scope: ref });

    return (
        <span className="inline-block overflow-hidden pb-2">
            <span ref={ref} className="inline-block">
                {text}
            </span>
        </span>
    )
}

/**
 * Redesigned FAQ Item
 */
const FAQItem = ({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(iconRef.current, { rotate: 180, duration: 0.4 });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.4, ease: "power2.in" });
            gsap.to(iconRef.current, { rotate: 0, duration: 0.4 });
        }
    }, { dependencies: [isOpen] });

    return (
        <div
            className={`faq-item group border-b border-black/5 transition-colors duration-500 ${isOpen ? 'bg-black/2' : 'hover:bg-black/1'} opacity-0`}
        >
            <button
                onClick={onClick}
                className="w-full py-6 md:py-8 px-4 md:px-6 flex items-center justify-between text-left"
            >
                <div className="flex gap-4 md:gap-6 items-start">
                    <span className="text-[10px] md:text-xs font-heading font-black text-secondary mt-1">0{index + 1}</span>
                    <span className="text-lg md:text-2xl font-heading font-black text-text uppercase tracking-tight transition-colors">
                        {question}
                    </span>
                </div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-black/10 transition-all duration-500 ${isOpen ? 'bg-secondary border-secondary text-white' : 'group-hover:border-black/30'}`}>
                    <div ref={iconRef}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                </div>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden h-0 opacity-0"
            >
                <div className="pb-10 pl-10 md:pl-20 pr-6 md:pr-12">
                    <p className="text-base md:text-lg font-body text-text leading-relaxed max-w-2xl font-medium">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

const ServiceDetail = () => {
    const { slug } = useParams()
    const router = useRouter()
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const heroContentRef = useRef<HTMLDivElement>(null)
    const heroVisualRef = useRef<HTMLDivElement>(null)

    const service = services.find(s => s.slug === slug)

    // --- PARSING LOGIC: EXTRACT STEPS & HIGHLIGHTS ---
    const parseContent = (desc: string) => {
        const parts = desc.split(/\n/).filter(line => line.trim() !== '');
        const introLines: string[] = [];
        const items: { type: 'step' | 'highlight', label: string, title: string, desc: string }[] = [];

        let itemIndex = 1;

        parts.forEach(line => {
            const stepMatch = line.match(/^[-*]?\s*Step\s*(\d+)\s*:\s*([^–-]+)\s*[–-]\s*(.*)/i);
            const bulletMatch = line.match(/^[-*]\s*([^–\-:]+)(?:[:–\-]\s*(.*))?/);

            if (stepMatch) {
                items.push({
                    type: 'step',
                    label: stepMatch[1].padStart(2, '0'),
                    title: stepMatch[2].trim(),
                    desc: stepMatch[3].trim()
                });
            } else if (bulletMatch && !line.includes("Step")) {
                const titlePart = bulletMatch[1].trim();
                const descPart = bulletMatch[2] ? bulletMatch[2].trim() : "";

                if (descPart) {
                    items.push({ type: 'highlight', label: itemIndex.toString().padStart(2, '0'), title: titlePart, desc: descPart });
                } else {
                    if (titlePart.endsWith(':')) {
                        introLines.push(line);
                    } else {
                        items.push({ type: 'highlight', label: itemIndex.toString().padStart(2, '0'), title: titlePart, desc: "" });
                    }
                }
                itemIndex++;
            } else {
                if (items.length === 0) {
                    introLines.push(line);
                }
            }
        });

        return { intro: introLines.join('\n\n'), items };
    };

    const { intro, items } = service ? parseContent(service.description) : { intro: '', items: [] };

    useGSAP(() => {
        if (!service) return;

        // Hero Parallax & Fade
        gsap.to(heroVisualRef.current, {
            scale: 0.95,
            opacity: 0,
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Entrance Animations
        gsap.from(".reveal-inline", {
            x: -20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        gsap.from(".reveal-y", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.out"
        });

        // Methodology reveal
        gsap.from(".methodology-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".methodology-grid",
                start: "top 85%"
            }
        });

        // Roadmap Reveal
        gsap.from(".roadmap-item", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".roadmap-grid",
                start: "top 80%"
            }
        });

        // Impact Cards
        gsap.from(".impact-card", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".impact-grid",
                start: "top 85%"
            }
        });

        // FAQ Items stagger
        gsap.to(".faq-item", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".faq-list",
                start: "top 90%"
            }
        });

        // Next Chapter Stagger
        gsap.from(".next-chapter-reveal", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".next-chapter-section",
                start: "top 80%"
            }
        });

    }, { scope: containerRef });

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-bg-light p-6">
                <h1 className="text-4xl md:text-6xl font-heading font-black text-black uppercase italic mb-8">
                    Lost Connectivity
                </h1>
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
        <main ref={containerRef} className="bg-white selection:bg-secondary selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="hero-section relative h-[90vh] md:h-[85vh] w-full flex flex-col overflow-hidden bg-black">
                <div ref={heroVisualRef} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/30 z-10" />
                    <Image
                        src={service.images[0]}
                        alt={service.name}
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                </div>

                <div className="relative z-20 flex-1 flex flex-col justify-between p-6 md:p-12 lg:p-20">
                    <div className="reveal-inline">
                        <Link href="/#services" className="group inline-flex items-center gap-3 py-3 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300">
                            <ArrowLeft size={14} />
                            <span className="font-heading font-black uppercase tracking-[0.2em] text-[10px]">Back</span>
                        </Link>
                    </div>

                    <div className="max-w-6xl">
                        <div className="overflow-hidden mb-4">
                            <span className="reveal-y block text-secondary font-heading font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                                {service.category}
                            </span>
                        </div>
                        <h1 className="text-[12vw] md:text-[7vw] font-heading font-black text-white uppercase tracking-tighter leading-[0.8] mt-24 mb-12 md:mt-0 md:mb-8">
                            <RevealText text={service.name} delay={0.3} />
                        </h1>
                        <p className="reveal-y text-lg md:text-2xl text-white font-medium max-w-2xl leading-relaxed border-l-2 border-secondary pl-6">
                            {intro.split('\n')[0]}
                        </p>
                    </div>
                </div>
            </section>

            {/* --- CORE CONTENT --- */}
            <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-[1600px] mx-auto">
                    <div className="methodology-grid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
                        <div className="lg:col-span-5 methodology-item">
                            <span className="block text-[10px] font-heading font-black text-secondary uppercase tracking-[0.4em] mb-6">The Methodology</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-black uppercase tracking-tight leading-[0.9]">
                                Beyond <br /> <span className="text-secondary italic">Standard.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 methodology-item">
                            <div className="text-xl md:text-2xl text-black font-medium leading-relaxed whitespace-pre-line text-pretty">
                                {intro.split('\n').slice(1).join('\n')}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {["Strategic", "High-Impact", "Results-Driven", "Tailored"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full border border-black/10 text-[10px] font-black uppercase tracking-widest text-black">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {items.length > 0 && (
                        <div className="space-y-12">
                            <div className="flex items-end justify-between border-b border-black/10 pb-6">
                                <h3 className="text-2xl md:text-3xl font-heading font-black text-black uppercase tracking-tight">
                                    {items[0].type === 'step' ? 'Execution Roadmap' : 'Key Highlights'}
                                </h3>
                                <span className="hidden md:block text-xs font-heading font-black text-black uppercase tracking-widest">
                                    {items.length} KEY POINTS
                                </span>
                            </div>

                            <div className="roadmap-grid flex flex-col">
                                {items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="roadmap-item group py-12 border-b border-black/10 hover:bg-black/5 transition-colors duration-500 -mx-6 px-6 md:px-0 md:mx-0"
                                    >
                                        <div className="md:px-4 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                                            <div className="md:col-span-2 lg:col-span-2 flex md:justify-end">
                                                <span className="text-4xl md:text-5xl font-heading font-black text-black group-hover:text-secondary transition-colors duration-500 tabular-nums">
                                                    {item.label}
                                                </span>
                                            </div>

                                            <div className="md:col-span-10 lg:col-span-8 space-y-4">
                                                <h4 className="text-2xl md:text-3xl font-heading font-black text-black uppercase tracking-tight group-hover:text-secondary transition-colors duration-300">
                                                    {item.title}
                                                </h4>
                                                {item.desc && (
                                                    <p className="text-lg text-black font-medium leading-relaxed max-w-2xl transition-colors duration-300">
                                                        {item.desc}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="hidden md:flex md:col-span-12 lg:col-span-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                {item.type === 'step' ?
                                                    <div className="w-12 h-px bg-secondary mt-6" /> :
                                                    <CheckCircle2 className="text-secondary" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* --- IMPACT CARDS --- */}
            {service.impactCards && (
                <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="impact-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {service.impactCards.map((card: any, i: number) => {
                                const IconComponent = card.icon === "Search" ? Search : card.icon === "TrendingUp" ? TrendingUp : Infinity;
                                return (
                                    <div
                                        key={i}
                                        className="impact-card bg-[#FBFBFB] p-8 md:p-10 rounded-4xl border border-black/5 flex flex-col items-center text-center space-y-6 group hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 will-change-transform"
                                    >
                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm group-hover:border-black group-hover:scale-110 transition-all duration-500">
                                            <IconComponent size={24} strokeWidth={1.5} className="text-text" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-lg md:text-xl font-heading font-black text-text uppercase tracking-tight leading-tight">
                                                {card.title}
                                            </h3>
                                            <p className="text-text font-medium leading-relaxed text-xs md:text-sm max-w-[280px] mx-auto">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* --- FAQ SECTION --- */}
            <section className="faq-section py-16 md:py-24 bg-white border-y border-black/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-20">
                        <div className="space-y-4 md:space-y-6">
                            <span className="text-[10px] md:text-xs font-heading font-black text-secondary uppercase tracking-[0.4em]">Common Questions</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-text uppercase tracking-tighter leading-none">
                                MOSTLY ASKED QUESTIONS
                            </h2>
                        </div>
                        <p className="text-sm md:text-lg text-text font-heading font-bold uppercase tracking-widest max-w-[300px]">
                            Everything you need to know about our {service.name} process.
                        </p>
                    </div>

                    <div className="faq-list max-w-4xl mx-auto border-t border-black/5">
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

            {/* --- CONTACT SECTION --- */}
            <section id="contact" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
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

                            <p className="text-xl md:text-2xl font-body text-text leading-relaxed max-w-lg">
                                We specialize in high-impact execution. Let's discuss how we can position your brand for dominance.
                            </p>

                            <div className="space-y-6 md:space-y-8 pt-6 md:pt-8 border-t border-black/5">
                                <Link href="mailto:hello@herlead.com" className="flex items-center gap-4 md:gap-6 group">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-text group-hover:text-white transition-all shadow-sm">
                                        <Send size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div className="space-y-0.5 md:space-y-1">
                                        <span className="block text-[8px] md:text-[10px] font-heading font-black uppercase tracking-[0.4em] text-text">Direct Connection</span>
                                        <span className="text-lg md:text-2xl font-heading font-black text-text group-hover:text-secondary transition-colors">HELLO@HERLEAD.COM</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white p-6 md:p-12 rounded-4xl md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-black/5">
                            <form className="space-y-8 md:space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                    <div className="relative group">
                                        <input type="text" className="w-full bg-transparent border-b-2 border-black/20 py-3 md:py-4 text-lg md:text-xl text-black placeholder:text-black focus:border-secondary focus:outline-none transition-all font-black uppercase tracking-tight" placeholder="Full Name" />
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-focus-within:w-full transition-all duration-500" />
                                    </div>
                                    <div className="relative group">
                                        <input type="email" className="w-full bg-transparent border-b-2 border-black/20 py-3 md:py-4 text-lg md:text-xl text-black placeholder:text-black focus:border-secondary focus:outline-none transition-all font-black uppercase tracking-tight" placeholder="Email Address" />
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-focus-within:w-full transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="relative group">
                                    <textarea rows={2} className="w-full bg-transparent border-b-2 border-black/20 py-3 md:py-4 text-lg md:text-xl text-black placeholder:text-black focus:border-secondary focus:outline-none transition-all resize-none font-black uppercase tracking-tight" placeholder="Project Details"></textarea>
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

            {/* --- NEXT CHAPTER --- */}
            <section className="next-chapter-section bg-black py-16 md:py-32 text-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-12 md:space-y-16">
                        <span className="next-chapter-reveal inline-block text-secondary font-heading font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[10px] mb-4 md:mb-8">Next Chapter</span>

                        <Link href="/#services" className="next-chapter-reveal group inline-block">
                            <h2 className="text-[8vw] sm:text-[7vw] font-heading font-black text-white uppercase tracking-tighter leading-none transition-all duration-700 hover:text-secondary group-hover:italic">
                                EXPLORE <br /> ALL <br /> LEGACY
                            </h2>
                            <div
                                className="w-20 h-20 md:w-40 md:h-40 rounded-full border border-white/20 flex items-center justify-center mx-auto mt-12 md:mt-16 transition-all group-hover:border-secondary group-hover:bg-secondary group-hover:text-white"
                            >
                                <ArrowRight size={48} className="text-white scale-75 md:scale-100" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServiceDetail 
