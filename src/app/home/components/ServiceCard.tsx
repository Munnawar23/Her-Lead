"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

interface ServiceCardProps {
    group: {
        title: string
        desc: string
        color: string
        textColor: string
        variant: string
        tags: string[]
        video?: string
        images: string[]
    }
}

const ServiceCard = ({ group }: ServiceCardProps) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as const,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
        }
    }

    const visualVariants = {
        hidden: { opacity: 0, x: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }
        }
    }

    const renderVisual = () => {
        switch (group.variant) {
            case "single":
                return (
                    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-12 lg:p-16">
                        {/* Glow Behind */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-[70%] aspect-square bg-white/20 blur-[100px] rounded-full"
                        />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={group.images[0]}
                                alt={group.title}
                                className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg"
                            />
                        </motion.div>
                    </div>
                )
            case "video":
                return group.video ? (
                    <div className="relative w-[300px] h-[500px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-black/10">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover"
                        >
                            <source src={group.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ) : null
            case "double":
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: 50, rotate: 5 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, rotate: -5 }}
                            whileHover={{ scale: 1.08, zIndex: 20 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
                            className="absolute w-[280px] md:w-[380px] lg:w-[440px] aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-10 translate-x-[-22%] translate-y-[-18%]"
                        >
                            <img
                                src={group.images[0]}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100, y: 100, rotate: -5 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
                            whileHover={{ scale: 1.08, zIndex: 20 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
                            className="absolute w-[280px] md:w-[380px] lg:w-[440px] aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-0 translate-x-[22%] translate-y-[18%]"
                        >
                            <img
                                src={group.images[1]}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className={`relative w-full 
              min-h-[400px] md:h-[560px] lg:h-[600px]
              ${group.color} ${group.textColor} 
              rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] flex-1">
                {/* LEFT CONTENT */}
                <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                    <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl md:text-main-heading font-black leading-[1.1] uppercase">
                        {group.title}
                    </motion.h3>

                    <motion.p variants={itemVariants} className="mt-2 md:mt-3 max-w-md text-xs md:text-body-custom font-semibold opacity-80 leading-relaxed">
                        {group.desc}
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-4 flex flex-wrap gap-2 max-w-lg">
                        {group.tags.map((tag, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-1.5 px-3 py-1.5 md:px-5 md:py-2 rounded-full
                                  bg-black/5 backdrop-blur-sm border border-white
                                  text-[10px] md:text-xs font-bold uppercase tracking-wider text-white`}
                            >
                                {tag}
                            </div>
                        ))}
                    </motion.div>


                </div>

                {/* RIGHT VISUAL STACK */}
                <motion.div
                    variants={visualVariants}
                    className="hidden lg:flex relative h-full items-center justify-end pr-12"
                >
                    {renderVisual()}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ServiceCard
