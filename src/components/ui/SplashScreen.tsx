'use client'

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface SplashScreenProps {
    onComplete?: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [shouldRender, setShouldRender] = useState(false);
    const [displayCount, setDisplayCount] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLHeadingElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const wordRef = useRef<HTMLHeadingElement>(null);

    const words = ['Strategy', 'Creativity', 'Growth'];

    useEffect(() => {
        const hasShownSplash = sessionStorage.getItem('hasShownSplash');

        if (hasShownSplash) {
            setShouldRender(false);
            onComplete?.();
            return;
        }

        setShouldRender(true);
        sessionStorage.setItem('hasShownSplash', 'true');
    }, [onComplete]);

    useGSAP(() => {
        if (!shouldRender) return;

        const tl = gsap.timeline({
            onComplete: () => {
                // Exit Animation
                gsap.to(containerRef.current, {
                    y: '-100%',
                    duration: 1.2,
                    ease: "power4.inOut",
                    onComplete: () => {
                        onComplete?.();
                    }
                });
            }
        });

        // Counter Animation
        const counterProxy = { value: 0 };
        tl.to(counterProxy, {
            value: 100,
            duration: 2.5,
            ease: "power4.inOut",
            onUpdate: () => {
                setDisplayCount(Math.round(counterProxy.value));
            }
        }, 0);

        // Progress Bar Animation
        tl.to(progressRef.current, {
            width: '100%',
            duration: 2.5,
            ease: "power4.inOut"
        }, 0);

        // Word Cycling Logic (Manual intervals or GSAP callbacks)
        const wordCycle = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 600);

        return () => clearInterval(wordCycle);
    }, { dependencies: [shouldRender] });

    // Handle Word Swapping Animation
    useGSAP(() => {
        if (wordIndex !== undefined) {
            gsap.fromTo(wordRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "circ.out" }
            );
        }
    }, { dependencies: [wordIndex] });

    if (!shouldRender) return null;

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 z-100 flex h-screen w-full flex-col justify-between bg-bg-light p-8 md:p-12 lg:p-20 overflow-hidden"
        >
            {/* Top UI */}
            <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-text/80">
                        HerLead
                    </span>
                </div>
            </div>

            {/* Center Content: Cycling Words */}
            <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="relative h-24 flex items-center justify-center w-full">
                    <h2
                        ref={wordRef}
                        key={words[wordIndex]}
                        className="absolute text-[10vw] md:text-[6vw] font-heading font-black tracking-[-0.05em] uppercase text-text"
                    >
                        {words[wordIndex]}
                    </h2>
                </div>
            </div>

            {/* Bottom Content: Progress & Counter */}
            <div className="relative z-10 w-full space-y-6">
                <div className="flex items-end justify-between pb-6">
                    <h1
                        ref={counterRef}
                        className="text-7xl md:text-9xl font-heading font-black text-text tracking-tighter leading-none"
                    >
                        {displayCount}%
                    </h1>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-px bg-text/5 relative overflow-hidden">
                    <div
                        ref={progressRef}
                        className="absolute top-0 left-0 h-full bg-primary"
                        style={{ width: '0%' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
