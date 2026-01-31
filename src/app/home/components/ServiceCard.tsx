"use client"
import React, { useRef, useState, useEffect } from 'react'
import { ArrowUpRight, Zap, Globe, BarChart3, GraduationCap, Box, UserCheck } from "lucide-react"
import { useRouter } from "next/navigation"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lottie from "lottie-react"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface ServiceCardProps {
    group: {
        title: string
        slug: string
        desc: string
        color: string
        textColor: string
        variant: string
        tags: string[]
        video?: string
        animation?: string
        images: string[]
    }
}

const getIcon = (slug: string) => {
    switch (slug) {
        case 'pr-media-services': return <Zap size={14} />;
        case 'web-design': return <Globe size={14} />;
        case 'paid-ads': return <BarChart3 size={14} />;
        case 'corporate-training': return <GraduationCap size={14} />;
        case 'brand-creation': return <Box size={14} />;
        case 'get-the-job': return <UserCheck size={14} />;
        default: return <ArrowUpRight size={14} />;
    }
}

const ServiceCard = ({ group }: ServiceCardProps) => {
    const router = useRouter()
    const cardRef = useRef<HTMLDivElement>(null)
    const visualRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const lottieRef = useRef<any>(null)
    const [animationData, setAnimationData] = useState<any>(null)

    useEffect(() => {
        if (group.variant === 'lottie' && group.animation) {
            fetch(group.animation)
                .then(res => res.json())
                .then(data => setAnimationData(data))
                .catch(err => console.error("Error loading Lottie:", err))
        }
    }, [group.variant, group.animation])

    useGSAP(() => {
        // --- 1. Parallax Animation ---
        gsap.to(visualRef.current, {
            y: -30,
            ease: "none",
            force3D: true,
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // Smooth scrub delay
            }
        });

        // --- 2. Media Playback Control ---
        // Optimize Lottie & Video: Only play when card is active (pinned) or in view
        ScrollTrigger.create({
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
                lottieRef.current?.play();
                videoRef.current?.play().catch(() => { });
            },
            onLeave: () => {
                lottieRef.current?.pause();
                videoRef.current?.pause();
            },
            onEnterBack: () => {
                lottieRef.current?.play();
                videoRef.current?.play().catch(() => { });
            },
            onLeaveBack: () => {
                lottieRef.current?.pause();
                videoRef.current?.pause();
            }
        });
    }, { scope: cardRef });

    const renderVisual = () => {
        switch (group.variant) {
            case "lottie":
                return animationData ? (
                    <div className="relative w-full h-full flex items-center justify-center p-2 md:p-4 lg:p-6 transition-opacity duration-500">
                        <div className="w-full max-w-[620px] h-auto scale-110 lg:scale-125">
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={animationData}
                                loop={true}
                                autoplay={false}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                    </div>
                )
            case "single":
                return (
                    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10 lg:p-12">
                        <div className="relative group/img overflow-hidden rounded-3xl border border-white/10">
                            <img
                                src={group.images[0]}
                                alt={group.title}
                                className="w-full h-auto max-h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                )
            case "video":
                return group.video ? (
                    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10 lg:p-12">
                        <div className="relative w-full max-w-[260px] aspect-9/16 rounded-4xl overflow-hidden bg-bg-dark border-8 border-white/10">
                            <video
                                ref={videoRef}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-cover"
                            >
                                <source src={group.video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                ) : null
            case "double":
                return (
                    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10 lg:p-12">
                        <div className="absolute w-[400px] aspect-video rounded-3xl overflow-hidden z-20 translate-y-[-10%] translate-x-[-10%] -rotate-2 border border-white/20">
                            <img src={group.images[0]} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute w-[350px] aspect-video rounded-3xl overflow-hidden z-10 translate-y-[15%] translate-x-[15] rotate-[4deg] border border-white/10 shadow-lg">
                            <img src={group.images[1]} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div
            ref={cardRef}
            className={`relative w-[90%] h-[90%] group/card overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] transition-all duration-500
              ${group.color} ${group.textColor} border border-white/10 hover:border-white/20 will-change-transform shadow-2xl mx-auto`}
        >
            {/* Optimized Simple Light Effect */}
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-white/5 rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] h-full">
                {/* CONTENT SIDE */}
                <div ref={contentRef} className="relative z-10 p-5 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6 service-top-badge">
                            <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/10 border border-white/20">
                                {getIcon(group.slug)}
                            </div>
                            <span className="text-[10px] sm:text-[11px] md:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/70">
                                Premium Solution
                            </span>
                        </div>

                        <h3 className="service-title text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-heading font-black leading-[0.9] sm:leading-[0.85] tracking-tighter uppercase mb-4 sm:mb-8">
                            {group.title.split(' ').map((word, i) => (
                                <span key={i} className="inline-block mr-2 sm:mr-4 overflow-hidden">
                                    <span className="inline-block">{word}</span>
                                </span>
                            ))}
                        </h3>

                        <p className="service-desc text-sm sm:text-md md:text-sm lg:text-lg font-medium text-white leading-snug sm:leading-relaxed max-w-xl mb-4 sm:mb-10">
                            {group.desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
                            {group.tags && group.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    onClick={() => router.push(`/services/${group.slug}`)}
                                    className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-white/20 border border-white/10 text-[11px] sm:text-[11px] md:text-[11px] lg:text-[12px] font-bold uppercase tracking-wide transition-all hover:bg-white hover:text-black duration-300 cursor-pointer"
                                >
                                    {tag}
                                    <ArrowUpRight size={10} className="opacity-40" />
                                </span>
                            ))}
                        </div>
                    </div>

                    <div
                        onClick={() => router.push(`/services/${group.slug}`)}
                        className="service-btn flex items-center gap-4 sm:gap-6 group/btn mt-auto w-fit cursor-pointer"
                    >
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover/card:bg-white overflow-hidden">
                            <ArrowUpRight className="text-white transition-all duration-500 group-hover/card:text-black" size={22} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/40">View Impact</span>
                            <span className="text-xl sm:text-xl md:text-xl lg:text-2xl font-heading font-black uppercase tracking-tight">Explore More</span>
                        </div>
                    </div>
                </div>

                {/* VISUAL SIDE */}
                <div
                    ref={visualRef}
                    className="hidden lg:flex relative h-full items-center justify-center p-12"
                >
                    {renderVisual()}
                </div>
            </div>

            {/* Optimized Hover Indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 origin-left scale-x-0 transition-transform duration-500 group-hover/card:scale-x-100" />
        </div>
    )
}

export default ServiceCard
