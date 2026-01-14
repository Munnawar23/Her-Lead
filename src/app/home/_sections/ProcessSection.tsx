"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTransition } from "@/components/TransitionProvider";

const steps = [
  {
    number: "Step 1",
    title: "Discovery",
    description: "Our approach first starts with in-depth discovery and research, in order to gain a thorough understanding of what makes our client’s business unique, as well as what their consumer profile looks like.",
  },
  {
    number: "Step 2",
    title: "Strategy & Selection",
    description: "We then propose a strategy and select influencers that fit within those strategies who will not only pair well with our client’s brand, but also who’s social following matches their target key-demographic.",
  },
  {
    number: "Step 3",
    title: "Delivery",
    description: "Next comes the execution, blending creative ad treatment with precise influencer execution. We oversee every step, working with influencers to maintain top-quality posts and keep clients updated throughout.",
  },
  {
    number: "Step 4",
    title: "Amplification",
    description: "We use paid media and organic sharing to amplify campaigns, reaching the target audience. Our team optimizes strategies to drive results and achieve client goals.",
  },
  {
    number: "Step 5",
    title: "Reporting",
    description: "Post-campaign, we share transparent insights and ROI analysis, detailing customer journeys from impression to conversion. Our impactful, measurable strategy delivers definitive growth for your brand.",
  },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { transitionTo } = useTransition();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const targetScroll = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useGSAP(() => {
    gsap.from(".process-card", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full min-h-screen md:h-screen bg-background px-4 md:px-12 py-4 md:py-6 flex flex-col justify-center overflow-hidden">
      {/* Magenta Container */}
      <div className="relative w-full h-full max-h-[850px] bg-[#FF1178] rounded-[2.5rem] md:rounded-[3rem] px-6 md:px-14 py-8 md:py-12 flex flex-col justify-center overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[30%] aspect-square bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] aspect-square bg-black/5 rounded-full blur-3xl pointer-events-none" />
 
        {/* Heading */}
        <div className="relative z-10 max-w-3xl mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.1] tracking-tight">
            How does a multi-service agency elevate their clients through integrated campaigns?
          </h2>
        </div>

        {/* Cards Carousel */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="relative z-10 flex gap-4 overflow-x-auto no-scrollbar pb-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        >
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="process-card shrink-0 w-[80vw] md:w-[320px] h-[350px] md:h-[380px] bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-7 flex flex-col snap-center border border-white/10 select-none hover:bg-white/15 transition-colors"
            >
              <div className="mb-6">
                <span className="px-4 py-1.5 bg-white/20 rounded-full text-[9px] md:text-[10px] font-black text-white uppercase tracking-wider">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tighter">
                {step.title}
              </h3>
              
              <p className="text-[11px] md:text-xs text-white/80 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Controls Area */}
        <div className="relative z-10 mt-8 flex items-center justify-between">
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-14 h-14 md:w-20 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95'}`}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-14 h-14 md:w-20 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95'}`}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
