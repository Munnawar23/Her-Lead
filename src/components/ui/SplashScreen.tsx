'use client'

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useMotionValueEvent } from 'motion/react';

const SplashScreen = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [displayCount, setDisplayCount] = useState(0);
    const count = useMotionValue(0);
    const progressWidth = useTransform(count, (latest: number) => `${latest}%`);

    const words = ['Strategy', 'Creativity', 'Growth'];

    useMotionValueEvent(count, "change", (latest: number) => {
        setDisplayCount(Math.round(latest));
    });

    useEffect(() => {
        // Animate the counter from 0 to 100
        const controls = animate(count, 100, {
            duration: 3,
            ease: [0.76, 0, 0.24, 1] as const,
            onComplete: () => {
                setTimeout(() => setIsComplete(true), 500);
            }
        });

        // Cycle through words based on progress
        const wordInterval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 800);

        return () => {
            controls.stop();
            clearInterval(wordInterval);
        };
    }, [count, words.length]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ translateY: 0 }}
                    exit={{
                        translateY: '-100%',
                        transition: { duration: 1.2, ease: [0.87, 0, 0.13, 1] }
                    }}
                    className="fixed top-0 left-0 z-[60] flex h-screen w-full flex-col justify-between bg-red-light p-8 md:p-12 lg:p-20 overflow-hidden"
                >
                    {/* Top UI */}
                    <div className="relative z-10 flex justify-between items-start">
                        <div className="flex flex-col gap-1">
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[10px] font-black uppercase tracking-[0.5em] text-white"
                            >
                                HerLead
                            </motion.span>
                        </div>
                    </div>

                    {/* Center Content: Cycling Words */}
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                        <div className="relative h-24 flex items-center justify-center w-full">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={words[wordIndex]}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="absolute text-[10vw] md:text-[6vw] font-heading font-black tracking-[-0.05em] uppercase text-white"
                                >
                                    {words[wordIndex]}
                                </motion.h2>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Bottom Content: Progress & Counter */}
                    <div className="relative z-10 w-full space-y-6">
                        <div className="flex items-end justify-between pb-6">
                            <motion.h1 className="text-7xl md:text-9xl font-heading font-black text-white tracking-tighter leading-none">
                                {displayCount}%
                            </motion.h1>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                            <motion.div
                                style={{ width: progressWidth }}
                                className="absolute top-0 left-0 h-full bg-white"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;

