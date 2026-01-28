'use client'

import React from 'react'
import FormPageLayout from '@/components/common/FormPageLayout'

const RequestQuotePage = () => {
    return (
        <FormPageLayout
            badge="Partnership Inquiry"
            title={{
                line1: "BEGIN YOUR",
                highlight: "PARTNERSHIP",
                highlightItalic: true,
                line2: "WITH US."
            }}
            description="At HerLead, we support brands that are ready to grow with clarity and confidence. Starting a conversation, not a sales process."
            heroImage="/images/services/pr-media.webp"
            heroTestimonial="Strategic support for the build."
            philosophyTitle="Growth should be <span class='text-secondary italic'>intentional.</span>"
            philosophyText="We help businesses strengthen their presence, tell their story with purpose, and build the right teams to support their journey."
            philosophyChecks={[
                "Strategic Brand Guidance",
                "PR & Media Networking",
                "Talent Scaling Support",
                "Performance-Led Insights"
            ]}
            philosophyImages={["/images/services/pr-media-1.webp", "/images/services/pr-media-2.webp"]}
            formTitle="Service Inquiry"
            formSubtitle="Let's start the conversation."
            submitText="Submit Request"
            formSections={[
                {
                    title: "Brand Overview",
                    color: "secondary",
                    fields: [
                        { name: "name", label: "Your Name", type: "text", required: true, placeholder: "John Doe" },
                        { name: "companyName", label: "Company / Brand Name", type: "text", required: true, placeholder: "Acme Inc." },
                        { name: "role", label: "Your Role", type: "text", required: true, placeholder: "Founder / CEO" },
                        { name: "email", label: "Business Email", type: "email", required: true, placeholder: "john@acme.com" },
                    ]
                },
                {
                    title: "Strategic Needs",
                    color: "primary",
                    fields: [
                        { name: "phone", label: "Contact Number", type: "tel", required: true, placeholder: "+1..." },
                        { name: "industry", label: "Industry", type: "text", required: true, placeholder: "e.g. Wellness, Tech" },
                        { name: "supportAreas", label: "Areas of Need", type: "textarea", required: true, placeholder: "Branding, Talent, Strategy...", fullWidth: true },
                        { name: "challengeOverview", label: "Current Challenge", type: "textarea", required: true, placeholder: "Tell us about what you're building...", fullWidth: true },
                    ]
                }
            ]}
        />
    )
}

export default RequestQuotePage
