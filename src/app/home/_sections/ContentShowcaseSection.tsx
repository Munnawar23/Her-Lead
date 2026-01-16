"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTransition } from "@/components/TransitionProvider";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Heart,
  MessageCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    tag: "Branding",
    title: "Why Minimal No Longer Works",
    description:
      "How bold storytelling is shaping the future of digital brands.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
    size: "large",
    rotation: -2,
  },
  {
    id: 2,
    tag: "Digital Marketing",
    title: "Designed to Go Viral",
    description: "Creating content that people want to share, not skip.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200",
    size: "medium",
    rotation: 4,
  },
  {
    id: 3,
    tag: "Web & Tech",
    title: "The Rise of Interactive Websites",
    description: "Why motion and interaction matter more than ever.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
    size: "small",
    rotation: -10,
  },
];

const socialPosts = [
  {
    id: 1,
    user: "herlead_agency",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    likes: "12.4k",
    rotation: -6,
  },
  {
    id: 2,
    user: "herlead_agency",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    likes: "8.9k",
    rotation: 6,
  },
];

const ContentShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { transitionTo } = useTransition();

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      if (marquee) {
        const totalWidth = marquee.scrollWidth / 2;
        gsap.to(marquee, {
          x: -totalWidth,
          duration: 30,
          repeat: -1,
          ease: "none",
        });
      }

      gsap.utils.toArray(".funky-blog-card").forEach((card: any) => {
        gsap.from(card, {
          scale: 0.8,
          opacity: 0,
          y: 100,
          rotate: card.dataset.rotate || 0,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        });
      });

      gsap.to(".blog-blob", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });

      gsap.to(".social-card-inner", {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-background overflow-hidden pb-16 md:pb-24"
    >
      {/* BLOG HEADER */}
      <div className="relative w-full h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden bg-red-light mb-12 md:mb-16">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap opacity-20">
          <div
            ref={marqueeRef}
            className="flex gap-10 text-[15vw] md:text-[20vw] font-black uppercase text-text leading-none italic select-none"
          >
            <span>THE JOURNAL THE JOURNAL THE JOURNAL THE JOURNAL&nbsp;</span>
            <span>THE JOURNAL THE JOURNAL THE JOURNAL THE JOURNAL&nbsp;</span>
          </div>
        </div>

        <div className="relative z-10 text-center">
          <div className="mb-6 bg-white text-text px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.5em] inline-block shadow-2xl">
            <span className="text-primary">Insights</span> & <span className="text-red-light">Stories</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-text leading-[0.8] tracking-tighter uppercase drop-shadow-2xl">
            Lately<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="absolute top-20 right-[15%] w-24 h-24 bg-white rounded-full hidden md:flex items-center justify-center -rotate-12 shadow-xl animate-bounce">
          <span className="text-[10px] font-black text-text text-center px-4 leading-tight">
            NEW EVERY WEEK
          </span>
        </div>
        <div className="absolute bottom-20 left-[10%] w-32 h-32 bg-text rounded-lg border-4 border-white hidden md:flex items-center justify-center rotate-12 shadow-2xl skew-x-12">
          <span className="text-lg font-black text-white italic">FRESH!</span>
        </div>
      </div>

      {/* BLOG CARDS */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-y-12 md:gap-x-12 md:gap-y-20 mb-16">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className="funky-blog-card group relative w-full"
            style={{
              width: "100%",
              maxWidth: post.size === "large" ? "100%" : post.size === "medium" ? "700px" : "500px",
            }}
            data-rotate={post.rotation}
          >
            <div className="relative w-full aspect-square md:aspect-video rounded-none md:rounded-[3rem] overflow-hidden bg-black md:shadow-[15px_15px_0px] md:shadow-primary group-hover:shadow-none transition-all duration-500 mb-8 md:mb-10">
              {index === 0 ? (
                <video
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/soon.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt={post.title}
                />
              )}
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest skew-x-[-10deg] rounded-sm">
                {post.tag}
              </div>
            </div>

            <div className="relative px-6 md:px-0">
              <div className="absolute -top-12 md:-top-16 left-6 md:left-0 text-[12vw] md:text-[10vw] font-black text-black/5 pointer-events-none italic uppercase">
                0{index + 1}
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-text leading-[0.9] tracking-tighter uppercase group-hover:text-red-light transition-colors">
                {post.title}
              </h3>
              <p className="mt-4 md:mt-5 text-base md:text-lg text-text font-bold max-w-md leading-relaxed">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SOCIAL CTA */}
      <div className="w-full py-12 md:py-16 flex flex-col items-center">
        {/* Tilted IG Cards */}
        <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6 mb-16">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="social-card w-[85vw] md:w-[320px]"
              style={{ transform: `rotate(${post.rotation}deg)` }}
            >
              <div className="social-card-inner bg-white rounded-3xl p-4 shadow-xl border border-black/5">
                <div className="flex items-center gap-3 mb-4 px-2">
                  <div className="w-8 h-8 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-px">
                    <div className="w-full h-full rounded-full bg-white p-px">
                      <div className="w-full h-full rounded-full bg-black/5" />
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-text">
                    herlead_agency
                  </span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-text/20" />
                    <div className="w-1 h-1 rounded-full bg-text/20" />
                  </div>
                </div>
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover"
                    alt="Social Post"
                  />
                </div>
                <div className="flex gap-4 px-2">
                  <Heart size={20} className="text-pink-500 fill-pink-500" />
                  <MessageCircle size={20} className="text-text/40" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Footer */}
        <div className="flex flex-col items-center text-center">
          <div className="px-6 py-2 border border-text rounded-full mb-6">
            <span className="text-[10px] font-bold text-text tracking-widest uppercase italic">
              @herlead_agency — <span className="text-primary">STAY</span> <span className="text-red-light">CONNECTED</span>
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-text tracking-tighter uppercase mb-10">
            Follow along for <br />
            <span className="text-primary">ideas</span>, <span className="text-red-light">insights</span> & inspiration
          </h3>

          {/* Social Icon Row */}
          <div className="flex items-center gap-4 md:gap-6">
            {[
              { Icon: Instagram, color: "#E1306C", label: "Instagram" },
              { Icon: Twitter, color: "#000000", label: "Twitter" },
              { Icon: Linkedin, color: "#0077B5", label: "LinkedIn" },
              { Icon: Twitter, color: "#000000", label: "X" },
              { Icon: Facebook, color: "#1877F2", label: "Facebook" },
              { Icon: Youtube, color: "#FF0000", label: "YouTube" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                aria-label={social.label}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-text/10 flex items-center justify-center cursor-pointer hover:scale-110 hover:border-primary active:scale-95 transition-all group"
                style={{ backgroundColor: `${social.color}10` }}
              >
                <social.Icon
                  size={20}
                  strokeWidth={2}
                  className="group-hover:text-primary transition-colors"
                  style={{ color: social.color }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcaseSection;
