"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

const steps = [
  {
    number: "01",
    title: "Discovery",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description: "Our approach first starts with in-depth discovery and research, in order to gain a thorough understanding of what makes our client’s business unique, as well as what their consumer profile looks like.",
    tag: "Analysis",
    size: "large"
  },
  {
    number: "02",
    title: "Strategy & Selection",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    description: "We then propose a strategy and select influencers that fit within those strategies who will not only pair well with our client’s brand, but also who’s social following matches their target key-demographic.",
    tag: "Targeting",
    size: "small"
  },
  {
    number: "03",
    title: "Delivery",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    description: "Next comes the execution, blending creative ad treatment with precise influencer execution. We oversee every step, working with influencers to maintain top-quality posts and keep clients updated throughout.",
    tag: "Execution",
    size: "medium"
  },
  {
    number: "04",
    title: "Amplification",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    description: "We use paid media and organic sharing to amplify campaigns, reaching the target audience. Our team optimizes strategies to drive results and achieve client goals.",
    tag: "Growth",
    size: "large"
  },
  {
    number: "05",
    title: "Reporting",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    description: "Post-campaign, we share transparent insights and ROI analysis, detailing customer journeys from impression to conversion. Our impactful, measurable strategy delivers definitive growth for your brand.",
    tag: "Metrics",
    size: "small"
  },
  {
    number: "06",
    title: "Let’s get started",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    description: "If you’re starting from scratch, we’ll take care of creating your account on a top email marketing platform. If you already have an account, we’ll optimize it for better performance, getting you ready for powerful campaigns.",
    tag: "Onboard",
    size: "medium"
  },
];

const ProcessSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Animation | null>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track || !marqueeRef.current) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth / 2;
      
      const animation = gsap.to(track, {
        x: -totalWidth,
        duration: 15, // Faster speed
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const val = parseFloat(x);
            return val > 0 ? (val % totalWidth) - totalWidth : val % totalWidth;
          })
        }
      });

      animationRef.current = animation;

      Draggable.create(track, {
        type: "x",
        inertia: true,
        onPress() {
          animation.pause();
        },
        onDrag() {
          gsap.set(this.target, {
            x: gsap.utils.wrap(-totalWidth, 0, this.x)
          });
        },
        onThrowUpdate() {
          gsap.set(this.target, {
            x: gsap.utils.wrap(-totalWidth, 0, this.x)
          });
        },
        onRelease() {
          const currentX = gsap.getProperty(track, "x") as number;
          const progress = Math.abs(currentX / totalWidth);
          animation.progress(progress % 1).play();
        }
      });

      gsap.from(".process-header", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 90%",
        }
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-10 pb-24 md:pt-16 md:pb-32 bg-background relative overflow-hidden border-t border-text/5">
      <div className="px-6 md:px-12 lg:px-20 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10 process-header">
        <div className="space-y-4">
          <h4 className="font-heading text-primary text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold italic">
            Methodology
          </h4>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-text   tracking-tighter uppercase font-bold max-w-4xl">
            How does a <span className="text-primary italic">multi-service agency</span> elevate their clients through integrated campaigns?
          </h2>
        </div>
        <div className="max-w-sm space-y-4 border-l border-text/10 pl-8">
          <p className="font-body text-text/50 text-base md:text-lg leading-relaxed">
            Our approach blends strategy, creativity, and data to deliver impactful results across every channel.
          </p>
        </div>
      </div>

      <div 
        ref={marqueeRef}
        className="w-full cursor-grab active:cursor-grabbing overflow-hidden relative"
      >
        <div 
          ref={trackRef}
          className="flex whitespace-nowrap items-center"
        >
          {[...steps, ...steps].map((step, index) => {
            const widthClass = 
              step.size === "large" ? "w-[400px] md:w-[600px]" :
              step.size === "medium" ? "w-[300px] md:w-[450px]" :
              "w-[250px] md:w-[350px]";
            
            const aspectClass = 
              step.size === "large" ? "aspect-video" :
              step.size === "medium" ? "aspect-square" :
              "aspect-[4/5]";

            return (
              <div 
                key={`${step.number}-${index}`}
                className={`${widthClass} ${aspectClass} shrink-0 px-4 inline-block group`}
              >
                <div className="w-full h-full relative overflow-hidden rounded-none border border-text/5 bg-text/5 shadow-md">
                  {/* Background Image - Always Full Color */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover grayscale-0 scale-100 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  {/* Glassmorphism Category Tag */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                       <span className="font-heading text-[9px] uppercase tracking-[0.2em] text-white font-bold">
                        {step.tag}
                      </span>
                    </div>
                  </div>

                  {/* Corner Number Detail */}
                  <div className="absolute top-6 right-8 z-20">
                    <span className="font-heading text-4xl italic font-black text-primary/40 block">
                      {step.number}
                    </span>
                  </div>

                  {/* Bottom Content Area - Always Visible, Simplified */}
                  <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end min-h-[50%]">
                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl md:text-3xl text-white font-bold tracking-tighter leading-none">
                        {step.title}
                      </h3>
                      <p className="font-body text-xs md:text-sm text-white/70 leading-relaxed whitespace-normal line-clamp-2 max-w-[90%]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
