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

      // Little follower circle
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    // Hover effect logic
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(follower, {
        scale: 1.8,
        borderColor: "rgba(0,0,0,1)",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(follower, {
        scale: 1,
        borderColor: "rgba(0,0,0,0.3)",
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Initial state
    gsap.set(cursor, { backgroundColor: "black" });
    gsap.set(follower, { borderColor: "rgba(0,0,0,0.3)" });

    // Attach to all interactive elements
    const updateInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
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
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-6 h-6 border border-black/30 rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
