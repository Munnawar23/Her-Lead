'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'

export interface FormField {
    name: string
    label: string
    type: 'text' | 'email' | 'textarea' | 'select' | 'tel'
    placeholder?: string
    required?: boolean
    options?: { label: string; value: string }[]
    fullWidth?: boolean
}

interface FormPageLayoutProps {
    badge: string
    title: {
        line1: string
        line2?: string
        highlight?: string
        highlightItalic?: boolean
    }
    description: string
    heroImage: string
    heroTestimonial?: string
    philosophyTitle: string
    philosophyText: string
    philosophyChecks: string[]
    philosophyImages: [string, string]
    formTitle: string
    formSubtitle: string
    formSections: {
        title: string
        color: 'primary' | 'secondary'
        fields: FormField[]
    }[]
    submitText: string
}

const FormPageLayout: React.FC<FormPageLayoutProps> = ({
    badge,
    title,
    description,
    heroImage,
    heroTestimonial,
    philosophyTitle,
    philosophyText,
    philosophyChecks,
    philosophyImages,
    formTitle,
    formSubtitle,
    formSections,
    submitText
}) => {
    const [formData, setFormData] = useState<Record<string, string>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you! Your request has been submitted. We will get back to you soon.')
    }

    // Clean, minimalist input styles with bold typography
    const inputClasses = "w-full bg-white border border-black/[0.08] rounded-xl px-5 py-4 md:px-6 md:py-5 focus:outline-none focus:border-secondary transition-all duration-300 font-heading text-base md:text-xl text-black font-black placeholder:text-text/10 hover:border-black/20"
    const labelClasses = "block text-[10px] uppercase tracking-[0.25em] font-heading font-black mb-2.5 text-black pl-1"

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
        }
    }

    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-16 md:pt-24 pb-0 overflow-x-hidden">
            {/* Hero Section - Clean & Executive */}
            <section className="relative w-full px-6 md:px-12 lg:px-24 mb-6 md:mb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInVariants}
                                className='inline-flex items-center gap-2 border border-black/5 bg-white px-3 py-1.5 rounded-full shadow-sm'
                            >
                                <span className='w-1.5 h-1.5 rounded-full bg-secondary' />
                                <span className='text-[9px] font-heading font-black uppercase tracking-[0.2em] text-text/60'>{badge}</span>
                            </motion.div>

                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={fadeInVariants}
                                className="text-4xl md:text-5xl lg:text-[5.5rem] font-heading font-black leading-[1.05] tracking-tight text-text uppercase"
                            >
                                {title.line1} <br />
                                {title.highlight && (
                                    <span className={`${title.highlightItalic ? 'text-secondary italic' : 'text-primary'}`}>
                                        {title.highlight}
                                    </span>
                                )}
                                {title.line2 && <>{' '}{title.line2}</>}
                            </motion.h1>

                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={fadeInVariants}
                                className="text-base md:text-body-custom font-body font-medium text-text/50 max-w-xl leading-relaxed mx-auto lg:mx-0"
                            >
                                {description}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="lg:col-span-5 relative hidden lg:block"
                        >
                            <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden border-12 border-white shadow-2xl">
                                <img src={heroImage} alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                {heroTestimonial && (
                                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                                        <p className="text-white text-xs font-body italic tracking-wide">
                                            "{heroTestimonial}"
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Divider */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-black/5 to-transparent" />

            {/* Philosophy Section - Minimalist Grid */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: philosophyTitle }} />
                            <p className="text-base md:text-body-custom font-body text-text/50 leading-relaxed max-w-lg">
                                {philosophyText}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                            {philosophyChecks.map((item) => (
                                <div key={item} className="flex items-start gap-4 group">
                                    <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center text-secondary shrink-0 mt-1 transition-colors group-hover:bg-secondary group-hover:border-secondary group-hover:text-white">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <p className="text-[10px] font-heading font-black uppercase tracking-widest text-text/70">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative grid grid-cols-2 gap-8">
                        <div className="space-y-8 pt-12">
                            <div className="aspect-3/4 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <img src={philosophyImages[0]} alt="" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="aspect-3/4 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <img src={philosophyImages[1]} alt="" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section - Clean Integrated Look */}
            <section className="relative w-full bg-white py-12 md:py-20 border-t border-black/3">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter">{formTitle}</h2>
                        <div className="w-12 h-0.5 bg-secondary mx-auto" />
                        <p className="text-[10px] sm:text-[11px] font-heading font-black uppercase tracking-[0.3em] text-text/30">{formSubtitle}</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInVariants}
                        className="bg-white"
                    >
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="space-y-16">
                                {formSections.map((section, idx) => (
                                    <div key={section.title} className="space-y-10 group">
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-heading font-black text-black tracking-[0.4em] uppercase mb-1">Step 0{idx + 1}</span>
                                                <h3 className="text-xl font-heading font-black uppercase tracking-widest text-black">{section.title}</h3>
                                            </div>
                                            <div className="flex-1 h-px bg-black/15 group-hover:bg-black/30 transition-colors" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                                            {section.fields.map((field) => (
                                                <div key={field.name} className={field.fullWidth ? 'md:col-span-2' : ''}>
                                                    <label className={labelClasses}>{field.label}{field.required && <span className="text-secondary ml-1">*</span>}</label>
                                                    {field.type === 'textarea' ? (
                                                        <textarea
                                                            required={field.required}
                                                            name={field.name}
                                                            value={formData[field.name] || ''}
                                                            onChange={handleChange}
                                                            className={`${inputClasses} min-h-[140px] resize-none pt-4`}
                                                            placeholder={field.placeholder}
                                                        />
                                                    ) : field.type === 'select' ? (
                                                        <div className="relative">
                                                            <select
                                                                required={field.required}
                                                                name={field.name}
                                                                value={formData[field.name] || ''}
                                                                onChange={handleChange}
                                                                className={`${inputClasses} appearance-none pr-10`}
                                                            >
                                                                <option value="">Select Option</option>
                                                                {field.options?.map((opt) => (
                                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                                ))}
                                                            </select>
                                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                                <ArrowRight className="w-4 h-4 rotate-90" />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <input
                                                            type={field.type}
                                                            required={field.required}
                                                            name={field.name}
                                                            value={formData[field.name] || ''}
                                                            onChange={handleChange}
                                                            className={inputClasses}
                                                            placeholder={field.placeholder}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-12 flex flex-col items-center border-t border-black/5">
                                <button className="group relative w-full max-w-sm bg-text text-white py-6 rounded-lg font-heading font-black uppercase text-[11px] tracking-[0.4em] overflow-hidden transition-all hover:bg-secondary hover:scale-[1.01] active:scale-[0.99] shadow-xl hover:shadow-secondary/20">
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        {submitText}
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </button>
                                <p className="mt-8 text-[9px] text-text/20 font-heading font-black uppercase tracking-[0.5em]">Direct Consultation Entry</p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default FormPageLayout
