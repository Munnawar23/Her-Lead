'use client'

import { useRef, useEffect, useState } from 'react';

const SplashScreen = () => {
    const splashRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLHeadingElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [wordIndex, setWordIndex] = useState(0);

    const jumpPoints = [0, 2, 8, 15, 23, 31, 42, 55, 68, 77, 89, 94, 100];
    const words = ['Strategy', 'Creativity', 'Growth'];

    useEffect(() => {
        let startTime = Date.now();
        const duration = 3000; // 3 seconds

        const updateLine = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Update counter and progress bar
            const jumpIndex = Math.floor(progress * (jumpPoints.length - 1));
            const currentNumber = jumpPoints[jumpIndex];

            if (counterRef.current) {
                counterRef.current.innerHTML = `${currentNumber}%`;
            }
            if (progressRef.current) {
                progressRef.current.style.width = `${currentNumber}%`;
            }

            // Update word index based on time
            const currentWord = Math.floor(progress * words.length);
            if (currentWord < words.length) {
                setWordIndex(currentWord);
            }

            if (progress < 1) {
                requestAnimationFrame(updateLine);
            } else {
                // Done loading, slide up
                if (splashRef.current) {
                    splashRef.current.style.transition = 'transform 1.5s cubic-bezier(0.87, 0, 0.13, 1)';
                    splashRef.current.style.transform = 'translateY(-100%)';
                }
            }
        };

        requestAnimationFrame(updateLine);
    }, []);

    return (
        <div
            ref={splashRef}
            className="fixed top-0 left-0 z-[60] flex h-screen w-full flex-col justify-between bg-black p-8 md:p-12 lg:p-20 overflow-hidden"
        >
            {/* Top UI */}
            <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">HerLead</span>
                </div>
            </div>

            {/* Center Content: Cycling Words */}
            <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="relative h-24 flex items-center justify-center">
                    {words.map((word, i) => (
                        <h2
                            key={word}
                            className={`absolute text-[10vw] md:text-[6vw] font-heading font-black tracking-[-0.05em] uppercase text-white transition-all duration-500 ${wordIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            {word}
                        </h2>
                    ))}
                </div>
            </div>

            {/* Bottom Content: Progress & Counter */}
            <div className="relative z-10 w-full space-y-6">
                <div className="flex items-end justify-between pb-6">
                    <h1 ref={counterRef} className="text-7xl md:text-9xl font-heading font-black text-white tracking-tighter leading-none">
                        0%
                    </h1>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                    <div ref={progressRef} className="absolute top-0 left-0 h-full w-0 bg-primary transition-all duration-100 ease-linear" />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
