"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Movement logic
    const moveCursor = (e: MouseEvent) => {
      // Small core dot
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Larger lagging circle
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    // Hover effect logic
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      if (target.closest('.nav-menu-container')) return;

      gsap.to(follower, {
        scale: 2,
        backgroundColor: "rgba(212, 175, 55, 0.3)", // Translucent Gold
        borderColor: "rgba(212, 175, 55, 0.6)",
        duration: 0.4,
        ease: "power2.out",
        mixBlendMode: 'normal' as any
      });
      gsap.to(cursor, {
        scale: 0.5,
        opacity: 0.5,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "white",
        duration: 0.3,
        ease: "power2.out",
        mixBlendMode: 'difference' as any
      });
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Initial state
    gsap.set(follower, { borderColor: "white", mixBlendMode: 'difference' });
    gsap.set(cursor, { backgroundColor: "white", mixBlendMode: 'difference' });

    // Attach to all interactive elements
    const updateInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter as any);
        el.addEventListener('mouseleave', handleMouseLeave as any);
      });
    };

    updateInteractiveListeners();
    const observer = new MutationObserver(updateInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      />
    </>
  );
};

export default CustomCursor;
