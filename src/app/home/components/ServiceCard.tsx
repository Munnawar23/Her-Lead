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
            className={`relative w-[95%] h-[90%] group/card overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] transition-all duration-500
              ${group.color} ${group.textColor} border border-white/10 hover:border-white/20 will-change-transform shadow-2xl mx-auto`}
        >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] h-full">
                {/* CONTENT SIDE */}
                <div ref={contentRef} className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between h-full">
                    <div>
                        <h3 className="service-title text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-heading font-black leading-[0.95] tracking-tighter mb-10">
                            {group.title}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {group.tags && group.tags.map((tag, i) => (
                                <div
                                    key={i}
                                    onClick={() => router.push(`/services/${group.slug}`)}
                                    className="flex items-center justify-between gap-3 px-6 py-4 rounded-full bg-white border-2 border-black text-black text-xs md:text-sm font-bold shadow-[4px_4px_0px_#000] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all cursor-pointer"
                                >
                                    <span className="truncate">{tag}</span>
                                    <ArrowUpRight size={18} className="shrink-0" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        onClick={() => router.push(`/services/${group.slug}`)}
                        className="service-btn flex items-center gap-3 px-10 py-4 border-2 border-white rounded-full text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-black transition-all cursor-pointer w-fit group/learn"
                    >
                        <span>Learn more</span>
                        <ArrowUpRight size={16} className="transition-transform group-hover/learn:translate-x-1 group-hover/learn:-translate-y-1" />
                    </div>
                </div>

                {/* VISUAL SIDE */}
                <div
                    ref={visualRef}
                    className="hidden lg:flex relative h-full items-center justify-center p-12 pr-20"
                >
                    <div className="w-full h-full max-w-[600px] flex items-center justify-center">
                        {renderVisual()}
                    </div>
                </div>
            </div>

            {/* Hover Indicator Line */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/30 origin-left scale-x-0 transition-transform duration-700 group-hover/card:scale-x-100" />
        </div>
    )
}

export default ServiceCard
