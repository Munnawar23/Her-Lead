'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import Button from '@/components/common/Button'

const IAmTalentPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        relocation: '',
        currentCompany: '',
        currentRole: '',
        experience: '',
        targetRole: '',
        employmentStatus: '',
        noticePeriod: '',
        resumeLink: '',
        interviewReady: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for applying! We are paying attention.')
    }

    const inputClasses = "w-full bg-white/40 border border-text/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 font-body text-sm md:text-base text-black font-bold placeholder:text-text/20"
    const labelClasses = "block text-[10px] md:text-xs uppercase tracking-[0.3em] font-heading font-black mb-3 text-black pl-1"

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
        <main className="min-h-screen bg-bg-light pt-32 pb-20">
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
                        <span className='text-xs md:text-sm font-heading font-black uppercase tracking-[0.3em] text-secondary'>Talent Application</span>
                    </motion.div>

                    <h1 className="text-3xl md:text-5xl lg:text-main-heading font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter text-text uppercase">
                        <div className='relative'>
                            <motion.span variants={textRevealVariants} className='inline-block'>FINE!!!</motion.span>
                        </div>
                        <div className='relative'>
                            <motion.span variants={textRevealVariants} className='inline-block text-secondary italic'>IMPRESS</motion.span>
                        </div>
                        <div className='relative'>
                            <motion.span variants={textRevealVariants} className='inline-block text-primary'>US.</motion.span>
                        </div>
                    </h1>

                    <motion.p variants={fadeInVariants} className="text-lg md:text-body-custom font-body font-bold text-text max-w-2xl leading-relaxed">
                        Yes, we’ll ask for your resume. No, we won’t judge you for the font. <span className='text-secondary italic'>Probably.</span>
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
                        <p className="text-base md:text-body-custom font-body text-text leading-relaxed">
                            At HerLead, we take talent seriously (and careers personally). This space is for people who know they have more to offer than their current role, title, or job portal luck suggests.
                        </p>
                        <p className="text-base md:text-body-custom font-body text-text leading-relaxed">
                            If you’ve got skills, intent, and the ability to show up when it matters, you’re exactly who we’re looking for.
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
                            "We don’t just scan resumes, we actually look at potential. Our goal is to ensure your talent finally comes across to the right people."
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
                    className="relative group block p-px rounded-[2rem] overflow-hidden bg-text/10 will-change-transform"
                >
                    <div className="bg-white/80 rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
                        {/* Decorative background circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

                        <div className="relative z-10">
                            <div className='mb-12'>
                                <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter mb-2">Talent Profile</h2>
                                <p className="font-body text-text/40 text-sm uppercase tracking-[0.2em] font-bold">Bring your best. We’re paying attention.</p>
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
                                        <label className={labelClasses}>Full Name *</label>
                                        <input required name="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Email Address *</label>
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@example.com" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Phone / WhatsApp Number *</label>
                                        <input required name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Current Location (City, Country) *</label>
                                        <input required name="location" value={formData.location} onChange={handleChange} className={inputClasses} placeholder="Dubai, UAE" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Current Company *</label>
                                        <input required name="currentCompany" value={formData.currentCompany} onChange={handleChange} className={inputClasses} placeholder="Acme Inc." />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Current Role / Designation *</label>
                                        <input required name="currentRole" value={formData.currentRole} onChange={handleChange} className={inputClasses} placeholder="Marketing Manager" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Total Years of Professional Experience *</label>
                                        <input required name="experience" value={formData.experience} onChange={handleChange} className={inputClasses} placeholder="e.g. 5 Years" />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Notice Period *</label>
                                        <input required name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} className={inputClasses} placeholder="e.g. 30 Days / Immediate" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants} className="md:col-span-2">
                                        <label className={labelClasses}>What role are you actually aiming for next? *</label>
                                        <textarea required name="targetRole" value={formData.targetRole} onChange={handleChange} className={`${inputClasses} min-h-[100px] resize-none`} placeholder="Be specific. “Anything” is not an answer." />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants} className="md:col-span-2">
                                        <label className={labelClasses}>Resume / Portfolio Link *</label>
                                        <input required name="resumeLink" value={formData.resumeLink} onChange={handleChange} className={inputClasses} placeholder="Google Drive / Dropbox / Portfolio URL" />
                                    </motion.div>
                                </div>

                                <motion.div variants={fadeInVariants} className="pt-10 flex flex-col items-center">
                                    <Button variant="red" size="lg" fullWidth className="max-w-md py-6 text-[11px] tracking-[0.4em] shadow-2xl shadow-secondary/20">
                                        Submit Application
                                    </Button>
                                    <p className="mt-10 text-center text-[9px] md:text-[10px] text-text/30 uppercase tracking-[0.5em] font-black">
                                        No hype. No false promises. Just real consideration.
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

export default IAmTalentPage
