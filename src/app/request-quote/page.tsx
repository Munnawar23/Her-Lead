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

    const inputClasses = "w-full bg-white/50 border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-body text-base"
    const labelClasses = "block text-xs uppercase tracking-[0.3em] font-heading font-black mb-2 text-text/60"

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
        <main className="min-h-screen bg-background pt-32 pb-20">
            {/* Background Decor */}
            <div className='absolute top-20 right-[10%] w-64 h-64 bg-red-light/10 rounded-full blur-3xl -z-10' />
            <div className='absolute bottom-20 left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10' />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                >
                    <motion.div variants={fadeInVariants} className='inline-flex items-center gap-3'>
                        <div className='w-12 h-[2px] bg-red-light' />
                        <span className='text-sm font-heading font-black uppercase tracking-[0.3em] text-red-light'>Partnership</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-heading font-black leading-[0.9] tracking-tighter text-text uppercase">
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block'>BEGIN YOUR</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-red-light italic'>PARTNERSHIP</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-primary'>WITH US.</motion.span>
                        </div>
                    </h1>

                    <motion.p variants={fadeInVariants} className="text-xl md:text-2xl font-body font-bold text-text max-w-2xl leading-relaxed">
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
                        <p className="text-lg md:text-xl font-body text-text leading-relaxed font-bold">
                            We help businesses strengthen their presence, tell their story with purpose, and build the right teams to support their next stage of growth.
                        </p>
                        <p className="text-lg md:text-xl font-body text-text leading-relaxed">
                            When you reach out to HerLead, you’re starting a conversation, not a sales process. We take the time to understand your goals and explore whether we are the right partner to support your journey.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInVariants}
                        className="lg:col-span-6 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-text/5 shadow-xl shadow-blue-500/5"
                    >
                        <p className="text-base md:text-lg font-body text-text/80 leading-relaxed italic border-l-4 border-red-light pl-6">
                            "If you are building something meaningful and looking for experienced guidance, we welcome you to connect with us."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 mb-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInVariants}
                    className="bg-white rounded-sm shadow-2xl shadow-text/5 border border-text/5 p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <div className='mb-12'>
                            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter mb-2">Service Inquiry</h2>
                            <p className="font-body text-text/40 text-sm uppercase tracking-[0.2em] font-bold">Let's start the conversation</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Your Name *</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Company / Brand Name *</label>
                                    <input required name="companyName" value={formData.companyName} onChange={handleChange} className={inputClasses} placeholder="Acme Inc." />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Your Role / Designation *</label>
                                    <input required name="role" value={formData.role} onChange={handleChange} className={inputClasses} placeholder="CEO / Founder / Manager" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Business Email Address *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@acme.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Contact Number *</label>
                                    <input required name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Industry *</label>
                                    <input required name="industry" value={formData.industry} onChange={handleChange} className={inputClasses} placeholder="e.g. Fashion, Tech, Wellness" />
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>Areas where you need strategic support *</label>
                                <textarea required name="supportAreas" value={formData.supportAreas} onChange={handleChange} className={`${inputClasses} min-h-[100px]`} placeholder="e.g. Branding, Talent, Growth Strategy..." />
                            </div>

                            <div>
                                <label className={labelClasses}>Overview of your requirement or current challenge *</label>
                                <textarea required name="challengeOverview" value={formData.challengeOverview} onChange={handleChange} className={`${inputClasses} min-h-[140px]`} placeholder="Tell us about what you're building and where you need help..." />
                            </div>

                            <div>
                                <label className={labelClasses}>Any additional context you’d like to share?</label>
                                <textarea name="additionalContext" value={formData.additionalContext} onChange={handleChange} className={`${inputClasses} min-h-[100px]`} placeholder="Anything else we should know?" />
                            </div>

                            <div className="pt-6">
                                <Button variant="red" size="lg" fullWidth className="py-6 text-[10px] tracking-[0.3em]">
                                    Submit Request
                                </Button>
                                <p className="mt-8 text-center text-[10px] text-text/40 uppercase tracking-[0.4em] font-black">
                                    Thoughtful • Practical • Focused
                                </p>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

export default RequestQuotePage
