"use client"

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

// Extend Window interface to add locomotiveScroll property
declare global {
  interface Window {
    __locomotiveScroll: any;
  }
}

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<any>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!scrollRef.current) return

    // Initialize locomotive-scroll with improved settings for navigation
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      multiplier: 0.65,
      lerp: 0.08,
      touchMultiplier: 2.0,
      resetNativeScroll: true,
      reloadOnContextChange: true,
      smartphone: {
        smooth: true,
        multiplier: 0.65
      },
      tablet: {
        smooth: true,
        multiplier: 0.65
      }
    })

    // Make the locomotiveScroll instance globally available
    window.__locomotiveScroll = locomotiveScrollRef.current;

    // Add resize observer to update scroll when window resizes
    const resizeObserver = new ResizeObserver(() => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    // Force multiple updates to ensure all sections are properly handled
    const updateTimes = [100, 500, 1000, 2000];
    updateTimes.forEach(time => {
      setTimeout(() => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.update();
        }
      }, time);
    });

    // Override scrollTo method to enhance ID-based navigation
    const originalScrollTo = locomotiveScrollRef.current.scrollTo;
    locomotiveScrollRef.current.scrollTo = function(target: any, options: any = {}) {
      // If target is a string (likely a selector)
      if (typeof target === 'string') {
        const element = document.querySelector(target);
        if (element) {
          return originalScrollTo.call(this, element, {
            offset: -50,
            duration: 1000,
            ...options
          });
        } else {
          console.warn(`Target element not found: ${target}`);
        }
      }
      
      // Default behavior
      return originalScrollTo.call(this, target, options);
    };

    // Clean up on unmount
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        window.__locomotiveScroll = null;
      }
      
      resizeObserver.disconnect();
    }
  }, [])

  // Update scroll on route change
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      setTimeout(() => {
        locomotiveScrollRef.current.update();
        // Scroll to top when route changes
        locomotiveScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
      }, 200);
    }
  }, [pathname])

  return (
    <div 
      ref={scrollRef} 
      data-scroll-container
      className="min-h-screen"
    >
      {children}
    </div>
  )
} 