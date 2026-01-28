'use client'

import React from 'react'
import FormPageLayout from '@/components/common/FormPageLayout'

const InfluencerPage = () => {
    return (
        <FormPageLayout
            badge="Expression of Interest"
            title={{
                line1: "OKAY!!!",
                highlight: "SO YOURE",
                highlightItalic: true,
                line2: "HERE."
            }}
            description="Influencer Partnerships. That tells us you know your worth. We're always watching for creators who understand the power of their voice."
            heroImage="/images/services/influencer-2.webp"
            heroTestimonial="We value creators who value their audience."
            philosophyTitle="Noise is cheap. <span class='text-secondary italic'>Influence</span> is earned."
            philosophyText="We’re looking for creators who understand that a partnership is more than just a post—it’s a shared story."
            philosophyChecks={[
                "Selective Brand Matching",
                "Editorial-First Collaboration",
                "Direct PR Network Access",
                "Creative Freedom Commitment"
            ]}
            philosophyImages={["/images/services/influencer-marketing.webp", "/images/services/influencer-2.webp"]}
            formTitle="Creator Profile"
            formSubtitle="Show us your creative energy."
            submitText="Submit Interest"
            formSections={[
                {
                    title: "Creator Identity",
                    color: "secondary",
                    fields: [
                        { name: "name", label: "Your Name", type: "text", required: true, placeholder: "John Doe" },
                        { name: "publicName", label: "Creator / Public Name", type: "text", required: true, placeholder: "@johncreative" },
                        { name: "email", label: "Email Address", type: "email", required: true, placeholder: "john@creator.com" },
                        { name: "phone", label: "Contact Number", type: "tel", required: true, placeholder: "+1..." },
                    ]
                },
                {
                    title: "Platform & Reach",
                    color: "primary",
                    fields: [
                        {
                            name: "primaryPlatform", label: "Primary Platform", type: "select", required: true,
                            options: [
                                { label: "Instagram", value: "Instagram" },
                                { label: "YouTube", value: "YouTube" },
                                { label: "LinkedIn", value: "LinkedIn" },
                                { label: "TikTok", value: "TikTok" },
                                { label: "X (Twitter)", value: "X" }
                            ]
                        },
                        {
                            name: "audienceScale", label: "Audience Scale", type: "select", required: true,
                            options: [
                                { label: "Under 10K", value: "Under 10K" },
                                { label: "10K–50K", value: "10K–50K" },
                                { label: "50K–100K", value: "50K–100K" },
                                { label: "100K+", value: "100K+" }
                            ]
                        },
                        { name: "portfolioLink", label: "Portfolio / Profile Link", type: "text", required: true, placeholder: "Platform or Media Kit URL", fullWidth: true },
                        { name: "contentFocus", label: "Content Focus", type: "text", required: true, placeholder: "Fashion, Tech, Wellness, etc.", fullWidth: true },
                        { name: "workOverview", label: "Creative Approach", type: "textarea", required: true, placeholder: "Your voice, aesthetic, and what defines you...", fullWidth: true },
                    ]
                }
            ]}
        />
    )
}

export default InfluencerPage
