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
        duration: 0.5,
        ease: "power3.out",
      });
    };

    // Hover effect logic
    const handleMouseEnter = () => {
      gsap.to(follower, {
        scale: 2,
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        borderColor: "transparent",
        duration: 0.3,
      });
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(0, 0, 0, 0.3)",
        duration: 0.3,
      });
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Attach to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Outer Circle */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-black/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
      />
    </>
  );
};

export default CustomCursor;
