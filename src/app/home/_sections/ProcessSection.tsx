"use client"

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
    <section className="mt-20 md:mt-32 w-full bg-bg-light pt-4 md:pt-8 pb-4 md:pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
            <div className='w-12 md:w-20 h-[2px] bg-secondary' />
            <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.2em] text-secondary'>Process</h2>
            <div className='w-12 md:w-20 h-[2px] bg-secondary' />
          </div>
          <p className="text-xl md:text-body-custom font-body font-bold text-text leading-relaxed max-w-2xl mx-auto uppercase tracking-widest opacity-60">
            How does a multi service agency evaluate their clients?
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-white border-2 border-text/5 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-500">
                <span className="text-2xl font-black font-heading text-secondary group-hover:text-white transition-colors duration-500">
                  {step.number}
                </span>
              </div>

              <h3 className="text-2xl font-heading font-black text-text mb-4 tracking-tighter uppercase leading-none">
                {step.title}
              </h3>

              <p className="text-sm md:text-body-custom font-body font-bold text-text/80 leading-relaxed">
                {step.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary/0 group-hover:bg-secondary transition-all duration-500 rounded-b-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
