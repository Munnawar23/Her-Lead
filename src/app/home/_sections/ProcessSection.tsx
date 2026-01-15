"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your brand DNA, understanding what makes you unique and identifying your ideal audience.",
  },
  {
    number: "02",
    title: "Strategy & Selection",
    description: "We craft a tailored strategy and handpick influencers who align perfectly with your brand values.",
  },
  {
    number: "03",
    title: "Delivery",
    description: "Our team executes with precision, blending creative excellence with strategic partnerships.",
  },
  {
    number: "04",
    title: "Amplification",
    description: "We maximize reach through paid media and organic sharing for optimal impact.",
  },
  {
    number: "05",
    title: "Reporting",
    description: "Transparent insights and ROI analysis prove measurable growth for your brand.",
  },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".process-card", {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-background py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">
            Our Process
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-text leading-tight tracking-tighter uppercase mb-4">
            How We Work
          </h2>
          <p className="text-base md:text-lg text-text/60 font-medium max-w-2xl mx-auto">
            A proven methodology that transforms brands through strategic campaigns.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="process-card group relative bg-white border-2 border-text/5 rounded-3xl p-8 hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Number Badge */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <span className="text-2xl font-black text-primary group-hover:text-white transition-colors duration-500">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-text mb-4 tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-text/70 leading-relaxed font-medium">
                {step.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/0 group-hover:bg-primary/100 transition-all duration-500 rounded-b-3xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="group px-10 py-4 bg-primary hover:bg-text rounded-full transition-all duration-300">
            <span className="text-sm font-black uppercase tracking-wider text-white flex items-center gap-3">
              Start Your Journey
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
