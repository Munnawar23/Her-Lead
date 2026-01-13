"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "@/components/common/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip-container",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  }, []);

  return (
    <div id="who-we-are" className="min-h-fit md:min-h-screen w-screen bg-black">
      {/* TOP TEXT CONTENT */}
      <div className="relative flex min-h-[15vh] md:min-h-[25vh] flex-col justify-end items-center gap-4 px-4 pb-4 text-center">
        <p className="font-heading text-base uppercase text-white/40 tracking-[0.3em] md:text-lg font-semibold">
          "Smart Play for Growth"
        </p>

        <AnimatedTitle
          title="360° of <b>Digital</b> <br /> Elevation"
          containerClass="!text-white"
        />

        <div className="about-subtext font-body text-white flex flex-col items-center gap-4 mt-8">
          <p className="text-lg font-bold text-primary uppercase tracking-widest">Who We Are</p>
          <p className="text-white/60 max-w-3xl text-sm md:text-lg leading-relaxed font-medium">
             We are an experienced team of in-house experts in 360° digital elevation with talent and skills to ideate, organize, execute, publish, distribute and scale award winning content that results in impactful and measurable results for some of the world's biggest brands.
          </p>
        </div>
      </div>

      {/* GSAP ANIMATED IMAGE SECTION */}
      <div id="clip-container" className="h-[6  0vh] md:h-screen w-screen relative overflow-hidden flex items-center justify-center">
        <div className="mask-clip-path about-image relative w-[90vw] md:w-[80vw] h-[50vh] md:h-[70vh] overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
            alt="Her Lead Vision"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
