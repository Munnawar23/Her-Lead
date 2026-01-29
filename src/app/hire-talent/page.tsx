'use client'

import React from 'react'
import FormPageLayout from '@/components/common/FormPageLayout'

const HireTalentPage = () => {
    return (
        <FormPageLayout
            badge="Premium Recruitment"
            title={{
                line1: "Hire the",
                highlight: "Top 1%",
                highlightItalic: true,
                line2: "Without the Grind."
            }}
            description="Stop sifted through endless resumes. We deliver pre-vetted, high-impact talent ready to scale your vision from Day 1."
            heroImage="/images/services/16.webp"
            heroTestimonial="Quality that accelerated our growth."
            philosophyTitle="Our talent doesn't <span class='text-secondary italic'>walk in</span> off the street."
            philosophyText="Rigorous verification, interviews, and real-world testing before you ever see a CV."
            philosophyChecks={[
                "AI-Powered Technical Assessment",
                "Deep-Level Culture Mapping",
                "Prior Experience Verification",
                "Communication & Soft Skills Testing"
            ]}
            philosophyImages={["/images/services/16.webp", "/images/services/1.webp"]}
            formTitle="Start Your Brief"
            formSubtitle="Ready to perform from day one."
            submitText="Send Request"
            formSections={[
                {
                    title: "Company Overview",
                    color: "secondary",
                    fields: [
                        { name: "name", label: "Your Name", type: "text", required: true, placeholder: "John Doe" },
                        { name: "companyName", label: "Company Name", type: "text", required: true, placeholder: "Acme Inc." },
                        { name: "workEmail", label: "Work Email", type: "email", required: true, placeholder: "john@acme.com" },
                        { name: "contactNumber", label: "Contact Number", type: "tel", required: true, placeholder: "+1..." },
                    ]
                },
                {
                    title: "Talent Brief",
                    color: "primary",
                    fields: [
                        { name: "industry", label: "Industry / Business Type", type: "text", required: true, placeholder: "e.g. FinTech, Healthcare", fullWidth: true },
                        {
                            name: "hiringSupport", label: "Support Type", type: "select", required: true,
                            options: [
                                { label: "Permanent", value: "Permanent" },
                                { label: "Contract", value: "Contract" },
                                { label: "Leadership", value: "Leadership" }
                            ]
                        },
                        {
                            name: "experienceLevel", label: "Experience Level", type: "select", required: true,
                            options: [
                                { label: "Entry", value: "Fresher" },
                                { label: "Mid-Level", value: "Mid" },
                                { label: "Senior", value: "Senior" },
                                { label: "Lead/VP", value: "Leadership" }
                            ]
                        },
                        { name: "roles", label: "Roles you’re hiring for", type: "textarea", required: true, placeholder: "Describe the ideal candidate...", fullWidth: true },
                    ]
                }
            ]}
        />
    )
}

export default HireTalentPage
