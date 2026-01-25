'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import Button from '@/components/common/Button'

const HireTalentPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        workEmail: '',
        contactNumber: '',
        location: '',
        website: '',
        industry: '',
        hiringSupport: '',
        roles: '',
        experienceLevel: '',
        positionsCount: '',
        budget: '',
        workModel: '',
        urgency: '',
        mattersMost: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission (e.g., send to API or email)
        console.log('Form submitted:', formData)
        alert('Thank you! Your request has been submitted. We will get back to you soon.')
    }

    const inputClasses = "w-full bg-white/40 backdrop-blur-md border border-text/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-500 font-body text-sm md:text-base text-black font-bold placeholder:text-text/20 shadow-inner"
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
                        <span className='text-xs md:text-sm font-heading font-black uppercase tracking-[0.3em] text-secondary'>Request Talent</span>
                    </motion.div>

                    <h1 className="text-main-heading font-heading font-black leading-[0.9] tracking-tighter text-text uppercase">
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block'>RETIRE YOUR</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-secondary italic'>HIRING</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-primary'>HEADACHES.</motion.span>
                        </div>
                    </h1>

                    <motion.p variants={fadeInVariants} className="text-lg md:text-body-custom font-body font-bold text-text max-w-2xl leading-relaxed">
                        We don’t send “almost right.” We send people who actually fit the role.
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
                            At HerLead, every profile is shared with intent. We take the time to understand the role, the expectations, and the reality of your team before introducing talent. No random CVs. No resume dumping.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInVariants}
                        className="lg:col-span-6 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-text/5 shadow-xl shadow-blue-500/5"
                    >
                        <p className="text-sm md:text-body-custom font-body text-text/80 leading-relaxed italic border-l-4 border-secondary pl-6">
                            "Our talent doesn’t walk in off the street. Every candidate is carefully screened and verified through multiple checks before becoming part of HerLead. We assess skills, mindset, and role fit first and only then do we move forward."
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
                    className="relative group block p-px rounded-[2rem] overflow-hidden bg-gradient-to-br from-text/10 via-transparent to-text/5 shadow-2xl"
                >
                    <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
                        {/* Decorative background circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

                        <div className="relative z-10">
                            <div className='mb-12'>
                                <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter mb-2">Talent Brief</h2>
                                <p className="font-body text-text/40 text-sm uppercase tracking-[0.2em] font-bold">Provide your requirements below</p>
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
                                        <label className={labelClasses}>Company Name *</label>
                                        <input required name="companyName" value={formData.companyName} onChange={handleChange} className={inputClasses} placeholder="Acme Inc." />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Work Email *</label>
                                        <input required type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} className={inputClasses} placeholder="john@acme.com" />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Contact Number / WhatsApp *</label>
                                        <input required name="contactNumber" value={formData.contactNumber} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Company Location *</label>
                                        <input required name="location" value={formData.location} onChange={handleChange} className={inputClasses} placeholder="e.g. Dubai, UAE" />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Company Website *</label>
                                        <input required name="website" value={formData.website} onChange={handleChange} className={inputClasses} placeholder="https://acme.com" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants} className="md:col-span-2">
                                        <label className={labelClasses}>Industry / Business Type *</label>
                                        <input required name="industry" value={formData.industry} onChange={handleChange} className={inputClasses} placeholder="e.g. FinTech, Healthcare" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Hiring Support Type *</label>
                                        <select required name="hiringSupport" value={formData.hiringSupport} onChange={handleChange} className={inputClasses}>
                                            <option value="">Select Option</option>
                                            <option value="Permanent">Permanent</option>
                                            <option value="Contract">Contract</option>
                                            <option value="Leadership">Leadership</option>
                                            <option value="Bulk">Bulk</option>
                                            <option value="Confidential">Confidential</option>
                                        </select>
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Experience level required *</label>
                                        <select required name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className={inputClasses}>
                                            <option value="">Select Level</option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="Mid">Mid</option>
                                            <option value="Senior">Senior</option>
                                            <option value="Leadership">Leadership</option>
                                        </select>
                                    </motion.div>

                                    <motion.div variants={fadeInVariants} className="md:col-span-2">
                                        <label className={labelClasses}>Roles you’re hiring for *</label>
                                        <textarea required name="roles" value={formData.roles} onChange={handleChange} className={`${inputClasses} min-h-[120px] resize-none`} placeholder="e.g. Senior Frontend Engineer (React/Next.js) - Looking for someone with strong architecture skills..." />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Number of positions *</label>
                                        <input required name="positionsCount" value={formData.positionsCount} onChange={handleChange} className={inputClasses} placeholder="e.g. 5" />
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Budget *</label>
                                        <input required name="budget" value={formData.budget} onChange={handleChange} className={inputClasses} placeholder="e.g. $10k - $12k / Mo" />
                                    </motion.div>

                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Work model *</label>
                                        <select required name="workModel" value={formData.workModel} onChange={handleChange} className={inputClasses}>
                                            <option value="">Select Model</option>
                                            <option value="Onsite">Onsite</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Flexible">Flexible</option>
                                        </select>
                                    </motion.div>
                                    <motion.div variants={fadeInVariants}>
                                        <label className={labelClasses}>Hiring Urgency *</label>
                                        <select required name="urgency" value={formData.urgency} onChange={handleChange} className={inputClasses}>
                                            <option value="">Select Urgency</option>
                                            <option value="Immediate">Immediate</option>
                                            <option value="15–30 days">15–30 days</option>
                                            <option value="30–60 days">30–60 days</option>
                                            <option value="Planned">Planned</option>
                                        </select>
                                    </motion.div>

                                    <motion.div variants={fadeInVariants} className="md:col-span-2">
                                        <label className={labelClasses}>What matters most in this hire? *</label>
                                        <textarea required name="mattersMost" value={formData.mattersMost} onChange={handleChange} className={`${inputClasses} min-h-[120px] resize-none`} placeholder="Skill, ownership, mindset, speed, culture, be honest." />
                                    </motion.div>
                                </div>

                                <motion.div variants={fadeInVariants} className="pt-10 flex flex-col items-center">
                                    <Button variant="red" size="lg" fullWidth className="max-w-md py-6 text-[11px] tracking-[0.4em] shadow-2xl shadow-secondary/20">
                                        Submit Request
                                    </Button>
                                    <p className="mt-10 text-center text-[9px] md:text-[10px] text-text/30 uppercase tracking-[0.5em] font-black">
                                        Ready to perform from day one.
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

export default HireTalentPage
