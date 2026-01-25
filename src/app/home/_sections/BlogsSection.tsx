"use client";
import React from "react";
import { motion } from "motion/react";
import {
    Instagram,
    Linkedin,
} from "lucide-react";

const XIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
)

import { blogPosts, socialPosts } from "@/constants";

const BlogsSection = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const
            }
        })
    };

    return (
        <section className="relative w-full bg-bg-light overflow-hidden pb-4 md:pb-6 pt-16 mt-12 md:mt-20">
            {/* SECTION HEADER (Centered) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center"
            >
                <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                        className='w-12 md:w-20 h-[2px] bg-secondary origin-right'
                    />
                    <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.2em] text-secondary'>
                        Publications
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                        className='w-12 md:w-20 h-[2px] bg-secondary origin-left'
                    />
                </div>
                <h2 className="text-main-heading font-heading font-black text-text leading-none tracking-tighter uppercase">
                    You read our <br className="hidden md:block" />
                    <span className="text-secondary italic">publications</span> right?
                </h2>
            </motion.div>

            {/* BLOG CARDS */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 mb-24">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        className="group relative w-full"
                    >
                        <div className="relative w-full aspect-square rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-text md:shadow-[15px_15px_0px] md:shadow-primary group-hover:shadow-none transition-all duration-500 mb-8">
                            <img
                                src={post.image}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                alt={post.title}
                            />
                            <div className="absolute top-6 left-6 px-4 py-1.5 bg-text text-bg-light text-[10px] font-black uppercase tracking-widest skew-x-[-10deg] rounded-sm">
                                {post.tag}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 0.05, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -top-12 md:-top-16 left-0 text-[12vw] md:text-[8vw] lg:text-[6vw] font-black text-text pointer-events-none italic uppercase"
                            >
                                0{index + 1}
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-black text-text leading-[0.9] tracking-tighter uppercase group-hover:text-secondary transition-colors">
                                {post.title}
                            </h3>
                            <p className="mt-4 text-sm md:text-body-custom text-text font-bold leading-relaxed opacity-70">
                                {post.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* SOCIAL CTA */}
            <div className="w-full py-12 md:py-16 flex flex-col items-center">
                {/* Tilted IG Cards - Top Set */}
                <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6 mb-16">
                    {socialPosts.slice(0, 2).map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, rotate: post.rotation }}
                            whileInView={{ opacity: 1, x: 0, rotate: post.rotation }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="w-[90vw] md:w-[380px] lg:w-[420px]"
                        >
                            <div className="bg-white rounded-3xl p-3 shadow-xl border border-text/5">
                                <div className="w-full aspect-square rounded-[1.25rem] overflow-hidden">
                                    <img
                                        src={post.image}
                                        className="w-full h-full object-cover"
                                        alt="Social Post"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Footer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center py-12"
                >
                    <div className="px-6 py-2 border border-text/20 rounded-full mb-6">
                        <span className="text-[10px] font-bold text-text tracking-widest uppercase italic">
                            @herlead_agency — <span className="text-primary">STAY</span> <span className="text-secondary">CONNECTED</span>
                        </span>
                    </div>
                    <h3 className="text-main-heading font-black text-text tracking-tighter uppercase mb-10 leading-none">
                        and obviously you follow <br className="hidden md:block" />
                        our <span className="text-secondary italic">social media</span>
                    </h3>

                    {/* Social Icon Row */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {[
                            { Icon: Instagram, colorClass: "text-social-instagram", bgClass: "bg-social-instagram/10", label: "Instagram" },
                            { Icon: Linkedin, colorClass: "text-social-linkedin", bgClass: "bg-social-linkedin/10", label: "LinkedIn" },
                            { Icon: XIcon, colorClass: "text-text", bgClass: "bg-text/10", label: "X" },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                                className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-text/10 flex items-center justify-center cursor-pointer hover:border-primary transition-all group shadow-lg ${social.bgClass}`}
                            >
                                <social.Icon
                                    size={24}
                                    strokeWidth={2}
                                    className={`group-hover:text-primary transition-colors ${social.colorClass}`}
                                />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Tilted IG Cards - Bottom Set */}
                <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6 mt-16 pb-12">
                    {socialPosts.slice(2, 4).map((post, i) => (
                        <motion.div
                            key={`bottom-${post.id}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, rotate: -post.rotation }}
                            whileInView={{ opacity: 1, x: 0, rotate: -post.rotation }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                            className="w-[90vw] md:w-[380px] lg:w-[420px]"
                        >
                            <div className="bg-white rounded-3xl p-3 shadow-xl border border-text/5">
                                <div className="w-full aspect-square rounded-[1.25rem] overflow-hidden">
                                    <img
                                        src={post.image}
                                        className="w-full h-full object-cover"
                                        alt="Social Post"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogsSection;
