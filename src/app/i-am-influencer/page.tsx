'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import Button from '@/components/common/Button'

const InfluencerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        publicName: '',
        email: '',
        phone: '',
        primaryPlatform: '',
        portfolioLink: '',
        contentFocus: '',
        audienceScale: '',
        audienceProfile: '',
        collaborationFormats: '',
        workOverview: '',
        motivation: '',
        additionalContext: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you! Your interest has been recorded. We will be watching.')
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
                        <span className='text-sm font-heading font-black uppercase tracking-[0.3em] text-red-light'>Expression of Interest</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-heading font-black leading-[0.9] tracking-tighter text-text uppercase">
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block'>OKAY!!!</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-red-light italic'>SO YOURE</motion.span>
                        </div>
                        <div className='overflow-hidden'>
                            <motion.span variants={textRevealVariants} className='inline-block text-primary'>HERE.</motion.span>
                        </div>
                    </h1>

                    <motion.p variants={fadeInVariants} className="text-xl md:text-2xl font-body font-bold text-text max-w-2xl leading-relaxed">
                        Influencer Partnerships ❤️🔥 <br />
                        <span className='text-red-light italic text-lg md:text-xl'>That tells us you know your worth.</span>
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
                            At HerLead, we’re always watching for creators who understand the power of their voice and know how to use it with intention. This isn’t about noise or chasing brand tags; it’s about presence, consistency, and real influence.
                        </p>
                        <p className="text-lg md:text-xl font-body text-text leading-relaxed">
                            Bring what you’ve got. We review every submission, and when the alignment hits, we’ll reach out. Simple. Selective. Worth it.
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
                            "We look for creators who value their audience and understand that a partnership is more than just a post—it's a shared story."
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
                            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter mb-2">Creator Profile</h2>
                            <p className="font-body text-text/40 text-sm uppercase tracking-[0.2em] font-bold">Show us your creative energy</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Your Name *</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Creator / Public Name *</label>
                                    <input required name="publicName" value={formData.publicName} onChange={handleChange} className={inputClasses} placeholder="@johncreative" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Email Address *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@creator.com" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Contact Number / WhatsApp *</label>
                                    <input required name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Primary Platform *</label>
                                    <select required name="primaryPlatform" value={formData.primaryPlatform} onChange={handleChange} className={inputClasses}>
                                        <option value="">Select Platform</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="YouTube">YouTube</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="X">X (Twitter)</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Podcast">Podcast</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Audience Scale *</label>
                                    <select required name="audienceScale" value={formData.audienceScale} onChange={handleChange} className={inputClasses}>
                                        <option value="">Select Scale</option>
                                        <option value="Under 10K">Under 10K</option>
                                        <option value="10K–50K">10K–50K</option>
                                        <option value="50K–100K">50K–100K</option>
                                        <option value="100K–500K">100K–500K</option>
                                        <option value="500K+">500K+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>Portfolio / Profile Link(s) *</label>
                                <input required name="portfolioLink" value={formData.portfolioLink} onChange={handleChange} className={inputClasses} placeholder="Primary platform link or Media Kit URL" />
                            </div>

                            <div>
                                <label className={labelClasses}>Content Focus *</label>
                                <input required name="contentFocus" value={formData.contentFocus} onChange={handleChange} className={inputClasses} placeholder="Fashion, Beauty, Lifestyle, Business, Tech, etc." />
                            </div>

                            <div>
                                <label className={labelClasses}>Audience Profile *</label>
                                <input required name="audienceProfile" value={formData.audienceProfile} onChange={handleChange} className={inputClasses} placeholder="Primary geography, age group, niche" />
                            </div>

                            <div>
                                <label className={labelClasses}>Collaboration Formats of Interest *</label>
                                <select required name="collaborationFormats" value={formData.collaborationFormats} onChange={handleChange} className={inputClasses}>
                                    <option value="">Select Primary Interest</option>
                                    <option value="Brand Campaigns">Brand Campaigns</option>
                                    <option value="Editorial Features">Editorial Features</option>
                                    <option value="PR Gifting">PR Gifting</option>
                                    <option value="Events & Experiences">Events & Experiences</option>
                                    <option value="Long-Term Partnerships">Long-Term Partnerships</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelClasses}>Overview of your work and creative approach *</label>
                                <textarea required name="workOverview" value={formData.workOverview} onChange={handleChange} className={`${inputClasses} min-h-[120px]`} placeholder="Your voice, aesthetic, and what defines your content..." />
                            </div>

                            <div>
                                <label className={labelClasses}>What draws you to PR-led brand collaborations? *</label>
                                <textarea required name="motivation" value={formData.motivation} onChange={handleChange} className={`${inputClasses} min-h-[120px]`} placeholder="Share your motivation..." />
                            </div>

                            <div>
                                <label className={labelClasses}>Additional context you would like to share?</label>
                                <textarea name="additionalContext" value={formData.additionalContext} onChange={handleChange} className={`${inputClasses} min-h-[100px]`} placeholder="Anything else we should know?" />
                            </div>

                            <div className="pt-6">
                                <Button variant="red" size="lg" fullWidth className="py-6 text-[10px] tracking-[0.3em]">
                                    Submit Interest
                                </Button>
                                <p className="mt-8 text-center text-[10px] text-text/40 uppercase tracking-[0.4em] font-black">
                                    Simple. Selective. Worth it.
                                </p>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

export default InfluencerPage
