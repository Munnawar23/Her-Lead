'use client'

import React from 'react'
import FormPageLayout from '@/components/common/FormPageLayout'

const IAmTalentPage = () => {
    return (
        <FormPageLayout
            badge="Talent Application"
            title={{
                line1: "FINE!!!",
                highlight: "IMPRESS",
                highlightItalic: true,
                line2: "US."
            }}
            description="Yes, we’ll ask for your resume. No, we won’t judge you for the font. Probably."
            heroImage="/images/service-legacy/career-talent.webp"
            heroTestimonial="We don't scan resumes, we see potential."
            philosophyTitle="We take talent <span class='text-secondary italic'>seriously</span> (and careers personally)."
            philosophyText="This space is for people who know they have more to offer than their current role or job portal luck suggests."
            philosophyChecks={[
                "Global Network Access",
                "Direct Market Placement",
                "Personalized Career Advocacy",
                "Exclusive High-Impact Roles"
            ]}
            philosophyImages={["/images/services/12.webp", "/images/service-legacy/career-talent.webp"]}
            formTitle="Talent Profile"
            formSubtitle="Bring your best. We’re paying attention."
            submitText="Submit Application"
            formSections={[
                {
                    title: "Personal Details",
                    color: "secondary",
                    fields: [
                        { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
                        { name: "email", label: "Email Address", type: "email", required: true, placeholder: "john@example.com" },
                        { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true, placeholder: "+1..." },
                        { name: "location", label: "Current Location", type: "text", required: true, placeholder: "Dubai, UAE" },
                    ]
                },
                {
                    title: "Professional Profile",
                    color: "primary",
                    fields: [
                        { name: "currentCompany", label: "Current Company", type: "text", required: true, placeholder: "Acme Inc." },
                        { name: "currentRole", label: "Current Role", type: "text", required: true, placeholder: "Marketing Manager" },
                        { name: "experience", label: "Years of Experience", type: "text", required: true, placeholder: "e.g. 5 Years" },
                        { name: "noticePeriod", label: "Notice Period", type: "text", required: true, placeholder: "e.g. 30 Days" },
                        { name: "targetRole", label: "What role are you aiming for?", type: "textarea", required: true, placeholder: "Be specific...", fullWidth: true },
                        { name: "resumeLink", label: "Resume / Portfolio Link", type: "text", required: true, placeholder: "Drive / Dropbox / URL", fullWidth: true },
                    ]
                }
            ]}
        />
    )
}

export default IAmTalentPage
