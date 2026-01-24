'use client'

import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { gsap } from 'gsap';

const SplashScreen = () => {
    const splashRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLHeadingElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    const jumpPoints = [0, 2, 8, 15, 23, 31, 42, 55, 68, 77, 89, 94, 100];

    useGSAP(() => {
        const tl = gsap.timeline();
        const index = { value: 0 };

        // Initial set
        gsap.set('.splash-word', { y: 30, opacity: 0 });

        // Word Cycle Animation
        const cycleWords = ['.word-1', '.word-2', '.word-3'];
        cycleWords.forEach((word, i) => {
            tl.to(word, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out'
            }, i * 0.8)
                .to(word, {
                    y: -15,
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power2.in'
                }, (i * 0.8) + 0.5);
        });

        // Counter & Progress Animation
        tl.to(index, {
            value: jumpPoints.length - 1,
            duration: 3,
            ease: "power2.inOut",
            snap: "value",
            onUpdate: () => {
                if (counterRef.current) {
                    const currentNumber = jumpPoints[index.value];
                    counterRef.current.innerHTML = `${currentNumber}%`;
                }
                if (progressRef.current) {
                    const currentNumber = jumpPoints[index.value];
                    gsap.to(progressRef.current, {
                        width: `${currentNumber}%`,
                        duration: 0.1,
                        ease: 'none'
                    });
                }
            },
        }, 0);

        // Slide up animation to reveal the content below
        tl.to(splashRef.current, {
            yPercent: -100,
            duration: 1.5,
            ease: 'expo.inOut',
        }, ">-0.3");

    }, { scope: splashRef });

    return (
        <div
            ref={splashRef}
            className="fixed top-0 left-0 z-[60] flex h-screen w-full flex-col justify-between bg-black p-8 md:p-12 lg:p-20 overflow-hidden"
        >
            {/* Background Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-screen" />

            {/* Top UI */}
            <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">HerLead</span>
                </div>
            </div>

            {/* Center Content: Cycling Words */}
            <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="relative h-24 flex items-center justify-center">
                    <h2 className="splash-word word-1 absolute text-[10vw] md:text-[6vw] font-heading font-black tracking-[-0.05em] uppercase text-white">
                        Strategy
                    </h2>
                    <h2 className="splash-word word-2 absolute text-[10vw] md:text-[6vw] font-heading font-black tracking-[-0.05em] uppercase text-white">
                        Creativity
                    </h2>
                    <h2 className="splash-word word-3 absolute text-[10vw] md:text-[6vw] font-heading font-black tracking-[-0.05em] uppercase text-white">
                        Growth
                    </h2>
                </div>
            </div>

            {/* Bottom Content: Progress & Counter */}
            <div className="relative z-10 w-full space-y-6">
                <div className="flex items-end justify-between border-b border-white/10 pb-6">
                    <h1 ref={counterRef} className="text-7xl md:text-9xl font-heading font-black text-white tracking-tighter leading-none">
                        0%
                    </h1>
                    <div className="flex flex-col items-end gap-1 text-right italic">
                        <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">Loading Experience</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                    <div ref={progressRef} className="absolute top-0 left-0 h-full w-0 bg-primary" />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
