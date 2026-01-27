'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import Button from '@/components/common/Button'

const RequestQuotePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        role: '',
        email: '',
        phone: '',
        industry: '',
        supportAreas: '',
        challengeOverview: '',
        additionalContext: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you! Your request for quote has been submitted. We will be in touch soon.')
    }

    const inputClasses = "w-full bg-white/50 border border-text/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 font-heading text-base md:text-lg text-black font-black placeholder:text-text/20"
    const labelClasses = "block text-[10px] md:text-xs uppercase tracking-[0.2em] font-heading font-black mb-3 text-black pl-1"

    const textRevealVariants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
        }
    }

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
        }
    }

    return (
        <main className="min-h-screen bg-bg-light pt-32 pb-0">
            {/* Background Decor */}
            <div className='absolute top-20 right-[10%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10' />
            <div className='absolute bottom-20 left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10' />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                >
                    <motion.div variants={fadeInVariants} className='inline-flex items-center gap-3'>
                        <div className='w-12 h-[2px] bg-secondary' />
                        <span className='text-xs md:text-sm font-heading font-black uppercase tracking-[0.3em] text-secondary'>Partnership</span>
                    </motion.div>

                    <h1 className="text-3xl md:text-5xl lg:text-main-heading font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter text-text uppercase">
                        <div className='relative'>
                            <motion.span variants={textRevealVariants} className='inline-block'>BEGIN YOUR</motion.span>
                        </div>
                        <div className='relative'>
                            <motion.span variants={textRevealVariants} className='inline-block text-secondary italic'>PARTNERSHIP</motion.span>
                        </div>
                        <div className='relative'>
                            <motion.span variants={textRevealVariants} className='inline-block text-primary'>WITH US.</motion.span>
                        </div>
                    </h1>

                    <motion.p variants={fadeInVariants} className="text-lg md:text-body-custom font-body font-bold text-text max-w-2xl leading-relaxed">
                        At HerLead, we support brands that are ready to grow with clarity and confidence.
                    </motion.p>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInVariants}
                        className="lg:col-span-6 space-y-8"
                    >
                        <div className="h-[2px] w-20 bg-primary" />
                        <p className="text-base md:text-body-custom font-body text-text leading-relaxed font-bold">
                            We help businesses strengthen their presence, tell their story with purpose, and build the right teams to support their next stage of growth.
                        </p>
                        <p className="text-base md:text-body-custom font-body text-text leading-relaxed">
                            When you reach out to HerLead, you’re starting a conversation, not a sales process. We take the time to understand your goals and explore whether we are the right partner to support your journey.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInVariants}
                        className="lg:col-span-6 bg-white/50 p-8 md:p-12 rounded-sm border border-text/5 shadow-xl shadow-blue-500/5"
                    >
                        <p className="text-sm md:text-body-custom font-body text-text/80 leading-relaxed italic border-l-4 border-secondary pl-6">
                            "If you are building something meaningful and looking for experienced guidance, we welcome you to connect with us."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 mb-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInVariants}
                    className="relative group block p-px rounded-[2rem] overflow-hidden bg-text/10 will-change-transform"
                >
                    <div className="bg-white/80 rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
                        {/* Decorative background circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

                        <div className="relative z-10">
                            <div className='mb-12'>
                                <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter mb-2">Service Inquiry</h2>
                                <p className="font-body text-text/40 text-sm uppercase tracking-[0.2em] font-bold">Let's start the conversation</p>
                            </div>

                            <motion.form
                                onSubmit={handleSubmit}
                                className="space-y-12"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.05 } }
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Your Name *</label>
                                        <input required name="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Company / Brand Name *</label>
                                        <input required name="companyName" value={formData.companyName} onChange={handleChange} className={inputClasses} placeholder="Acme Inc." />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Your Role / Designation *</label>
                                        <input required name="role" value={formData.role} onChange={handleChange} className={inputClasses} placeholder="CEO / Founder / Manager" />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Business Email Address *</label>
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@acme.com" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Contact Number *</label>
                                        <input required name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Industry *</label>
                                        <input required name="industry" value={formData.industry} onChange={handleChange} className={inputClasses} placeholder="e.g. Fashion, Tech, Wellness" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants} className="md:col-span-2">
                                        <label className={labelClasses}>Areas where you need strategic support *</label>
                                        <textarea required name="supportAreas" value={formData.supportAreas} onChange={handleChange} className={`${inputClasses} min-h-[100px] resize-none`} placeholder="e.g. Branding, Talent, Growth Strategy..." />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants} className="md:col-span-2">
                                        <label className={labelClasses}>Overview of your requirement or current challenge *</label>
                                        <textarea required name="challengeOverview" value={formData.challengeOverview} onChange={handleChange} className={`${inputClasses} min-h-[140px] resize-none`} placeholder="Tell us about what you're building and where you need help..." />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants} className="md:col-span-2">
                                        <label className={labelClasses}>Any additional context you’d like to share?</label>
                                        <textarea name="additionalContext" value={formData.additionalContext} onChange={handleChange} className={`${inputClasses} min-h-[100px] resize-none`} placeholder="Anything else we should know?" />
                                    </motion.div>
                                </div>

                                <motion.div variants={fadeInVariants} className="pt-10 flex flex-col items-center">
                                    <Button variant="red" size="lg" fullWidth className="max-w-md py-6 text-[11px] tracking-[0.4em] shadow-2xl shadow-secondary/20">
                                        Submit Request
                                    </Button>
                                    <p className="mt-10 text-center text-[9px] md:text-[10px] text-text/30 uppercase tracking-[0.5em] font-black">
                                        Thoughtful • Practical • Focused
                                    </p>
                                </motion.div>
                            </motion.form>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

export default RequestQuotePage
