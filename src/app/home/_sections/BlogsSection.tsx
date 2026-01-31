"use client";
import React from "react";
import Lottie from "lottie-react";
import Image from 'next/image';
import {
    Instagram,
    Linkedin,
    Twitter,
} from "lucide-react";

import { blogPosts } from "@/constants/blogs";
import { socialPosts } from "@/constants/socials";

const BlogsSection = () => {
    return (
        <section className="relative w-full bg-bg-light overflow-hidden pb-4 md:pb-6 pt-8">
            {/* SECTION HEADER (Centered) */}
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
                <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
                    <div className='w-12 md:w-20 h-[2px] bg-secondary' />
                    <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.2em] text-secondary'>
                        Publications
                    </h2>
                    <div className='w-12 md:w-20 h-[2px] bg-secondary' />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-heading font-black text-text leading-[1.1] md:leading-none tracking-tighter uppercase">
                    You read our <br className="hidden md:block" />
                    publications right?
                </h2>
            </div>

            {/* BLOG CARDS */}
            <div className="blog-cards-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 mb-24">
                {blogPosts.map((post, index) => (
                    <div
                        key={post.id}
                        className="blog-card group relative w-full"
                    >
                        <div className="relative w-full aspect-square rounded-3xl md:rounded-[3rem] overflow-hidden bg-bg-dark transition-all duration-500 mb-8">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute top-6 left-6 px-4 py-1.5 bg-bg-dark text-bg-light text-[10px] font-black uppercase tracking-widest skew-x-[-10deg] rounded-sm">
                                {post.tag}
                            </div>
                        </div>
                        <div className="relative">
                            <h3 className="text-2xl md:text-3xl font-black text-text leading-[0.9] tracking-tighter uppercase group-hover:text-secondary transition-colors">
                                {post.title}
                            </h3>
                            <p className="mt-4 text-sm md:text-body-custom text-text font-bold leading-relaxed opacity-70">
                                {post.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* SOCIAL CTA */}
            <div className="w-full py-12 md:py-16 flex flex-col items-center">
                <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6 mb-16">
                    {socialPosts.slice(0, 2).map((post, i) => (
                        <div
                            key={post.id}
                            className={`social-card-${i} w-[90vw] md:w-[380px] lg:w-[420px]`}
                            style={{ transform: `rotate(${post.rotation}deg)` }}
                        >
                            <div className="bg-white rounded-3xl p-3 border border-text/5">
                                <div className="w-full aspect-square rounded-[1.25rem] overflow-hidden bg-secondary/20">
                                    <Lottie
                                        animationData={post.animation}
                                        loop={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Footer */}
                <div className="flex flex-col items-center text-center py-12">
                    <div className="px-6 py-2 border border-text/20 rounded-full mb-6">
                        <span className="text-[10px] font-bold text-text tracking-widest uppercase italic">
                            @herlead_agency — <span className="text-primary">STAY</span> <span className="text-secondary">CONNECTED</span>
                        </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-black text-text tracking-tighter uppercase mb-10 leading-[1.1] md:leading-none">
                        and obviously you follow <br className="hidden md:block" />
                        our <span className="text-secondary italic">social media</span>
                    </h3>

                    {/* Social Icon Row */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {[
                            { Icon: Instagram, colorClass: "text-social-instagram", bgClass: "bg-social-instagram/10", label: "Instagram" },
                            { Icon: Linkedin, colorClass: "text-social-linkedin", bgClass: "bg-social-linkedin/10", label: "LinkedIn" },
                            { Icon: Twitter, colorClass: "text-text", bgClass: "bg-text/10", label: "X" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href="#"
                                aria-label={social.label}
                                className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-text/10 flex items-center justify-center cursor-pointer hover:border-primary hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 group ${social.bgClass}`}
                            >
                                <social.Icon
                                    size={24}
                                    strokeWidth={social.Icon === Twitter ? 0 : 2}
                                    fill={social.Icon === Twitter ? 'currentColor' : 'none'}
                                    className={`group-hover:text-primary transition-colors ${social.colorClass}`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;