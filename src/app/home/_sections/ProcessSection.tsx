"use client"
import React from "react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, your goals, and what makes your brand different. This helps us clearly define your audience and direction.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Based on our insights, we build a focused strategy and choose the right platforms, creators, or channels that align with your brand and audience.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "This is where ideas come to life. We manage the full execution with attention to detail, quality, and consistency at every step.",
  },
  {
    number: "04",
    title: "Amplification",
    description:
      "We boost visibility through a mix of paid media and organic reach to ensure your message reaches the right people at the right time.",
  },
  {
    number: "05",
    title: "Reporting & Insights",
    description:
      "After the campaign, we share clear reports and performance insights so you can see what worked and how it delivered results.",
  },
]

const ProcessSection = () => {
  return (
    <section className="w-full bg-background py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-text leading-tight tracking-tighter uppercase mb-4">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-base md:text-lg font-body text-text max-w-2xl mx-auto">
            A simple, structured approach designed to deliver clarity, quality, and measurable growth.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-white border-2 border-text/5 rounded-3xl p-8 hover:border-red-light/30 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <span className="text-2xl font-black font-heading text-primary group-hover:text-white transition-colors duration-500">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-heading font-black text-text mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-sm md:text-base font-body text-text leading-relaxed font-bold">
                {step.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-light/0 group-hover:bg-red-light transition-all duration-500 rounded-b-3xl" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default ProcessSection
