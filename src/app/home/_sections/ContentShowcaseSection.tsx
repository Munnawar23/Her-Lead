"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTransition } from "@/context/TransitionProvider";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Heart,
  MessageCircle,
} from "lucide-react";

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
)

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    tag: "Brand Strategy",
    title: "The Art of Storytelling",
    description: "How to build a brand that resonates with human emotions.",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1200",
    rotation: -4,
  },
  {
    id: 2,
    tag: "Digital Marketing",
    title: "Designed to Go Viral",
    description: "Creating content that people want to share, not skip.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200",
    rotation: 4,
  },
  {
    id: 3,
    tag: "Web & Tech",
    title: "Interactive Websites",
    description: "Why motion and interaction matter more than ever.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
    rotation: -10,
  },
];

const socialPosts = [
  {
    id: 1,
    user: "herlead_agency",
    image: "/images/23.png",
    likes: "12.4k",
    rotation: -6,
  },
  {
    id: 2,
    user: "herlead_agency",
    image: "/images/22.png",
    likes: "8.9k",
    rotation: 6,
  },
  {
    id: 3,
    user: "herlead_agency",
    image: "/images/lion.png",
    likes: "15.2k",
    rotation: -4,
  },
  {
    id: 4,
    user: "herlead_agency",
    image: "/images/post.png",
    likes: "10.1k",
    rotation: 8,
  },
];

const ContentShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { transitionTo } = useTransition();

  useGSAP(
    () => {
      gsap.from(".showcase-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".showcase-title",
          start: "top 85%",
        }
      });

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
      className="relative w-full bg-background overflow-hidden pb-4 md:pb-6 pt-16"
    >
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <h2 className="showcase-title text-3xl md:text-5xl lg:text-6xl font-heading font-black text-text leading-[1.1] tracking-tighter uppercase">
          You read our <br />
          <span className="text-red-light">publications</span> right?
        </h2>
      </div>

      {/* BLOG CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 mb-16">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className="funky-blog-card group relative w-full"
            data-rotate={post.rotation}
          >
            <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden bg-black md:shadow-[15px_15px_0px] md:shadow-primary group-hover:shadow-none transition-all duration-500 mb-8">
              <img
                src={post.image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt={post.title}
              />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest skew-x-[-10deg] rounded-sm">
                {post.tag}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-12 md:-top-16 left-0 text-[12vw] md:text-[8vw] lg:text-[6vw] font-black text-black/5 pointer-events-none italic uppercase">
                0{index + 1}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-text leading-[0.9] tracking-tighter uppercase group-hover:text-red-light transition-colors">
                {post.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-text font-bold leading-relaxed opacity-70">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SOCIAL CTA */}
      <div className="w-full py-12 md:py-16 flex flex-col items-center">
        {/* Tilted IG Cards - Top Set */}
        <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6 mb-16">
          {socialPosts.slice(0, 2).map((post) => (
            <div
              key={post.id}
              className="social-card w-[90vw] md:w-[380px] lg:w-[420px]"
              style={{ transform: `rotate(${post.rotation}deg)` }}
            >
              <div className="social-card-inner bg-white rounded-3xl p-3 shadow-xl border border-black/5">
                <div className="w-full aspect-square rounded-[1.25rem] overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover"
                    alt="Social Post"
                  />
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
            and obviously you follow our <br />
            <span className="text-red-light">social media</span>
          </h3>

          {/* Social Icon Row */}
          <div className="flex items-center gap-4 md:gap-6">
            {[
              { Icon: Instagram, color: "#E1306C", label: "Instagram" },
              { Icon: Linkedin, color: "#0077B5", label: "LinkedIn" },
              { Icon: XIcon, color: "#000000", label: "X" },
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

        {/* Tilted IG Cards - Bottom Set */}
        <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6 mt-16">
          {socialPosts.slice(2, 4).map((post) => (
            <div
              key={`bottom-${post.id}`}
              className="social-card w-[90vw] md:w-[380px] lg:w-[420px]"
              style={{ transform: `rotate(${-post.rotation}deg)` }}
            >
              <div className="social-card-inner bg-white rounded-3xl p-3 shadow-xl border border-black/5">
                <div className="w-full aspect-square rounded-[1.25rem] overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover"
                    alt="Social Post"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcaseSection;
