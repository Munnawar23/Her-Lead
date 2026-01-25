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
                        <span className='text-sm font-heading font-black uppercase tracking-[0.3em] text-red-light'>Request Talent</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-heading font-black leading-[0.9] tracking-tighter text-text uppercase">
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block'>RETIRE YOUR</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-red-light italic'>HIRING</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-primary'>HEADACHES.</motion.span>
                        </div>
                    </h1>

                    <motion.p variants={fadeInVariants} className="text-xl md:text-2xl font-body font-bold text-text max-w-2xl leading-relaxed">
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
                        <p className="text-lg md:text-xl font-body text-text leading-relaxed">
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
                        <p className="text-base md:text-lg font-body text-text/80 leading-relaxed italic border-l-4 border-red-light pl-6">
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
                    className="bg-white rounded-sm shadow-2xl shadow-text/5 border border-text/5 p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <div className='mb-12'>
                            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter mb-2">Talent Brief</h2>
                            <p className="font-body text-text/40 text-sm uppercase tracking-[0.2em] font-bold">Provide your requirements below</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Your Name *</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Company Name *</label>
                                    <input required name="companyName" value={formData.companyName} onChange={handleChange} className={inputClasses} placeholder="Acme Inc." />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Work Email *</label>
                                    <input required type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} className={inputClasses} placeholder="john@acme.com" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Contact Number / WhatsApp *</label>
                                    <input required name="contactNumber" value={formData.contactNumber} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Company Location *</label>
                                    <input required name="location" value={formData.location} onChange={handleChange} className={inputClasses} placeholder="e.g. Dubai, UAE" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Company Website *</label>
                                    <input required name="website" value={formData.website} onChange={handleChange} className={inputClasses} placeholder="https://acme.com" />
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>Industry / Business Type *</label>
                                <input required name="industry" value={formData.industry} onChange={handleChange} className={inputClasses} placeholder="e.g. FinTech, Healthcare" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Hiring Support Type *</label>
                                    <select required name="hiringSupport" value={formData.hiringSupport} onChange={handleChange} className={inputClasses}>
                                        <option value="">Select Option</option>
                                        <option value="Permanent">Permanent</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Leadership">Leadership</option>
                                        <option value="Bulk">Bulk</option>
                                        <option value="Confidential">Confidential</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Experience level required *</label>
                                    <select required name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className={inputClasses}>
                                        <option value="">Select Level</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="Mid">Mid</option>
                                        <option value="Senior">Senior</option>
                                        <option value="Leadership">Leadership</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>Roles you’re hiring for *</label>
                                <textarea required name="roles" value={formData.roles} onChange={handleChange} className={`${inputClasses} min-h-[120px]`} placeholder="e.g. Senior Frontend Engineer (React/Next.js) - Looking for someone with strong architecture skills..." />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Number of positions *</label>
                                    <input required name="positionsCount" value={formData.positionsCount} onChange={handleChange} className={inputClasses} placeholder="e.g. 5" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Budget *</label>
                                    <input required name="budget" value={formData.budget} onChange={handleChange} className={inputClasses} placeholder="e.g. $10k - $12k / Mo" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Work model *</label>
                                    <select required name="workModel" value={formData.workModel} onChange={handleChange} className={inputClasses}>
                                        <option value="">Select Model</option>
                                        <option value="Onsite">Onsite</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Flexible">Flexible</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Hiring Urgency *</label>
                                    <select required name="urgency" value={formData.urgency} onChange={handleChange} className={inputClasses}>
                                        <option value="">Select Urgency</option>
                                        <option value="Immediate">Immediate</option>
                                        <option value="15–30 days">15–30 days</option>
                                        <option value="30–60 days">30–60 days</option>
                                        <option value="Planned">Planned</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>What matters most in this hire? *</label>
                                <textarea required name="mattersMost" value={formData.mattersMost} onChange={handleChange} className={`${inputClasses} min-h-[120px]`} placeholder="Skill, ownership, mindset, speed, culture, be honest." />
                            </div>

                            <div className="pt-6">
                                <Button variant="red" size="lg" fullWidth className="py-6 text-[10px] tracking-[0.3em]">
                                    Submit Quote
                                </Button>
                                <p className="mt-8 text-center text-[10px] text-text/40 uppercase tracking-[0.4em] font-black">
                                    Ready to perform from day one.
                                </p>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

export default HireTalentPage
