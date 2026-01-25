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
                        <span className='text-sm font-heading font-black uppercase tracking-[0.3em] text-red-light'>Talent Application</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-heading font-black leading-[0.9] tracking-tighter text-text uppercase">
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block'>FINE!!!</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-red-light italic'>IMPRESS</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-primary'>US.</motion.span>
                        </div>
                    </h1>

                    <motion.p variants={fadeInVariants} className="text-xl md:text-2xl font-body font-bold text-text max-w-2xl leading-relaxed">
                        Yes, we’ll ask for your resume. No, we won’t judge you for the font. <span className='text-red-light italic'>Probably.</span>
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
                        <p className="text-lg md:text-xl font-body text-text leading-relaxed">
                            At HerLead, we take talent seriously (and careers personally). This space is for people who know they have more to offer than their current role, title, or job portal luck suggests.
                        </p>
                        <p className="text-lg md:text-xl font-body text-text leading-relaxed">
                            If you’ve got skills, intent, and the ability to show up when it matters, you’re exactly who we’re looking for.
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
                    className="bg-white rounded-sm shadow-2xl shadow-text/5 border border-text/5 p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <div className='mb-12'>
                            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter mb-2">Talent Profile</h2>
                            <p className="font-body text-text/40 text-sm uppercase tracking-[0.2em] font-bold">Bring your best. We’re paying attention.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Full Name *</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Email Address *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Phone / WhatsApp Number *</label>
                                    <input required name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Current Location (City, Country) *</label>
                                    <input required name="location" value={formData.location} onChange={handleChange} className={inputClasses} placeholder="Dubai, UAE" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Current Company *</label>
                                    <input required name="currentCompany" value={formData.currentCompany} onChange={handleChange} className={inputClasses} placeholder="Acme Inc." />
                                </div>
                                <div>
                                    <label className={labelClasses}>Current Role / Designation *</label>
                                    <input required name="currentRole" value={formData.currentRole} onChange={handleChange} className={inputClasses} placeholder="Marketing Manager" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Total Years of Professional Experience *</label>
                                    <input required name="experience" value={formData.experience} onChange={handleChange} className={inputClasses} placeholder="e.g. 5 Years" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Notice Period *</label>
                                    <input required name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} className={inputClasses} placeholder="e.g. 30 Days / Immediate" />
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>What role are you actually aiming for next? *</label>
                                <textarea required name="targetRole" value={formData.targetRole} onChange={handleChange} className={`${inputClasses} min-h-[100px]`} placeholder="Be specific. “Anything” is not an answer." />
                            </div>

                            <div>
                                <label className={labelClasses}>Resume / Portfolio Link *</label>
                                <input required name="resumeLink" value={formData.resumeLink} onChange={handleChange} className={inputClasses} placeholder="Google Drive / Dropbox / Portfolio URL" />
                            </div>

                            <div className="pt-6">
                                <Button variant="red" size="lg" fullWidth className="py-6 text-[10px] tracking-[0.3em]">
                                    Submit Application
                                </Button>
                                <p className="mt-8 text-center text-[10px] text-text/40 uppercase tracking-[0.4em] font-black">
                                    No hype. No false promises. Just real consideration.
                                </p>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

export default IAmTalentPage
