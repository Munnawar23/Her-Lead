"use client"

import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowLeft, ArrowRight, Sparkles, Target, Zap, Rocket, BarChart3, MoveRight } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Discovery",
    icon: <Sparkles className="w-8 h-8" />,
    description: "Deep diving into your brand's DNA to uncover hidden potential and market gaps.",
    details: "Market Analysis • Competitor Research • Brand Audit",
    color: "from-[#6366f1]/20 to-[#818cf8]/20"
  },
  {
    number: "02",
    title: "Strategy",
    icon: <Target className="w-8 h-8" />,
    description: "Crafting a bespoke roadmap that aligns with your goals and audience psychology.",
    details: "Framework Design • Channel Selection • KPI Setup",
    color: "from-[#a855f7]/20 to-[#c084fc]/20"
  },
  {
    number: "03",
    title: "Execution",
    icon: <Zap className="w-8 h-8" />,
    description: "Bringing ideas to life with surgical precision and creative excellence.",
    details: "Content Creation • Campaign Launch • Ad Ops",
    color: "from-[#f59e0b]/20 to-[#fbbf24]/20"
  },
  {
    number: "04",
    title: "Scale",
    icon: <Rocket className="w-8 h-8" />,
    description: "Amplifying success through iterative optimization and aggressive growth tactics.",
    details: "A/B Testing • Audience Scaling • Viral Triggers",
    color: "from-[#10b981]/20 to-[#34d399]/20"
  },
  {
    number: "05",
    title: "Optimization",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Analyzing every byte of data to squeeze maximum ROI from every campaign.",
    details: "Deep Reporting • ROAS Tracking • Future Insights",
    color: "from-[#ec4899]/20 to-[#f472b6]/20"
  },
]

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const totalItems = steps.length + 1

  const animateToStep = (index: number) => {
    if (!sliderRef.current) return
    const card = sliderRef.current.children[0] as HTMLElement
    if (!card) return

    const cardWidth = card.offsetWidth
    const gap = window.innerWidth > 1024 ? 48 : 24

    gsap.to(sliderRef.current, {
      x: -index * (cardWidth + gap),
      duration: 1,
      ease: "power3.inOut"
    })
    setActiveStep(index)
  }

  const scrollNext = () => {
    if (activeStep < totalItems - 1) animateToStep(activeStep + 1)
  }

  const scrollPrev = () => {
    if (activeStep > 0) animateToStep(activeStep - 1)
  }

  useGSAP(() => {
    if (typeof window === "undefined") return

    // Register Draggable
    const { Draggable } = require('gsap/Draggable')
    gsap.registerPlugin(Draggable)

    const card = sliderRef.current?.children[0] as HTMLElement
    if (!card || !sliderRef.current) return

    const cardWidth = card.offsetWidth
    const gap = window.innerWidth > 1024 ? 48 : 24
    const totalWidth = (cardWidth + gap) * totalItems - gap
    const maxDrag = -(totalWidth - (window.innerWidth - (window.innerWidth > 1024 ? 160 : 48)))

    // Initialize Draggable
    Draggable.create(sliderRef.current, {
      type: "x",
      bounds: { minX: Math.min(0, maxDrag), maxX: 0 },
      edgeResistance: 0.65,
      inertia: true,
      allowNativeTouchScrolling: true,
      onDrag: function () {
        const index = Math.round(Math.abs(this.x) / (cardWidth + gap))
        if (index !== activeStep) setActiveStep(Math.min(index, totalItems - 1))
      },
      onDragEnd: function () {
        const index = Math.round(Math.abs(this.x) / (cardWidth + gap))
        animateToStep(Math.min(index, totalItems - 1))
      }
    })

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out"
      })
    }

    const container = sectionRef.current
    if (container) {
      container.addEventListener('mousemove', onMouseMove)
      container.addEventListener('mouseenter', () => gsap.to(cursorRef.current, { scale: 1, opacity: 1 }))
      container.addEventListener('mouseleave', () => gsap.to(cursorRef.current, { scale: 0, opacity: 0 }))
    }

    gsap.from(".process-reveal", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    })

    return () => {
      container?.removeEventListener('mousemove', onMouseMove)
      Draggable.get(sliderRef.current)?.kill()
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative w-full bg-bg-dark py-24 lg:py-40 overflow-hidden flex flex-col justify-center">
      <div ref={cursorRef} className="fixed top-0 left-0 w-24 h-24 bg-secondary rounded-full items-center justify-center text-black font-black text-[10px] uppercase tracking-widest pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden lg:flex opacity-0 scale-0 transition-opacity duration-300">
        Drag
      </div>

      <div className="process-parallax absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-secondary/10 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-secondary/5 rounded-full" />
      </div>

      <div className="relative z-10 w-full">
        <div className="px-6 md:px-12 lg:px-20 mb-12 lg:mb-20">
          <div className="process-reveal inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-[10px] md:text-sm font-heading font-black uppercase tracking-[0.25em] text-white/50">Our Workflow</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <h2 className="process-reveal text-3xl md:text-5xl lg:text-[4.5vw] font-heading font-black uppercase leading-[0.8] tracking-tighter text-white">
              The <span className="text-secondary italic">HerLead</span> <br /> Blueprint.
            </h2>

            <div className="process-reveal flex items-center gap-4">
              <button onClick={scrollPrev} disabled={activeStep === 0} className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-500 cursor-pointer active:scale-90 ${activeStep === 0 ? 'opacity-20' : 'hover:bg-white hover:text-black'}`}>
                <ArrowLeft size={20} />
              </button>
              <button onClick={scrollNext} disabled={activeStep === totalItems - 1} className={`w-14 h-14 rounded-full bg-white flex items-center justify-center text-black transition-all duration-500 cursor-pointer active:scale-90 ${activeStep === totalItems - 1 ? 'opacity-20' : 'hover:bg-secondary hover:text-white'}`}>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative px-6 md:px-12 lg:px-20">
          <div ref={sliderRef} className="flex gap-6 lg:gap-12 transition-transform duration-100 ease-out will-change-transform">
            {steps.map((step) => (
              <div key={step.number} className="group relative shrink-0 w-[310px] md:w-[400px] lg:w-[450px] h-[420px] md:h-[500px] lg:h-[550px] bg-white/3 border border-white/10 rounded-[3rem] p-10 md:p-14 flex flex-col justify-between transition-all duration-700 hover:border-white/20 overflow-hidden lg:cursor-none">
                <div className={`absolute inset-0 bg-linear-to-b ${step.color} transition-all duration-700 ease-in-out z-0 opacity-0 group-hover:opacity-100`} />
                <div className="absolute top-10 right-10 flex flex-col items-end opacity-[0.05] group-hover:opacity-10 transition-opacity duration-700">
                  <span className="text-[8rem] font-heading font-black leading-none text-white select-none -translate-y-12">
                    {step.number}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-4xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 text-white group-hover:bg-secondary group-hover:border-secondary group-hover:rotate-12 transition-all duration-500">
                    {step.icon}
                  </div>

                  <h3 className="text-xl md:text-3xl lg:text-3xl font-heading font-black text-white mb-6 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-lg font-body font-medium text-white/40 leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                    {step.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="h-px w-full bg-white/5 mb-8 group-hover:bg-white/10 transition-colors" />
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] md:text-[10px] font-heading font-black text-secondary tracking-widest uppercase italic">
                      {step.details}
                    </p>
                    <MoveRight className="text-white/20 group-hover:text-white transition-all duration-500" size={20} />
                  </div>
                </div>
              </div>
            ))}

            <div className="shrink-0 w-[310px] md:w-[400px] lg:w-[450px] h-[420px] md:h-[500px] lg:h-[550px] bg-secondary rounded-[3rem] p-10 md:p-14 flex flex-col items-center justify-center text-center gap-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay opacity-40 group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-4">
                  Scale <br /> Faster.
                </h3>
                <p className="text-white/70 font-body font-bold uppercase tracking-widest text-[10px] mb-10 max-w-[200px] mx-auto">
                  Ready to build your legacy?
                </p>
                <button className="px-10 py-4 md:px-12 md:py-5 bg-white text-secondary rounded-2xl font-heading font-black uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-all active:scale-95 cursor-pointer">
                  Book Call
                </button>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[30px_30px] opacity-[0.05]" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 mt-12 md:mt-20">
        <div className="w-full h-px bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-secondary transition-all duration-700 ease-in-out" style={{ width: `${((activeStep + 1) / totalItems) * 100}%` }} />
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
