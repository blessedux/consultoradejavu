"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function SidebarNav() {
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null)
  const [activeSection, setActiveSection] = useState('#hero')
  const scrollTimer = useRef<any>(null)
  const lastActiveSection = useRef('#hero')

  // Initialize and track scroll position
  useEffect(() => {
    let scrollWatcher: any = null;
    
    const setupScrollTracking = () => {
      if (typeof window === 'undefined') return;
      
      // Get the locomotive scroll instance
      const scroll = (window as any).__locomotiveScroll;
      if (!scroll) {
        // Retry after a delay if not found
        setTimeout(setupScrollTracking, 500);
        return;
      }
      
      console.log("LocomotiveScroll instance found");
      setLocomotiveScroll(scroll);
      
      // Check which section is most visible in viewport
      const checkVisibleSection = () => {
        const sections = [
          { id: 'hero', element: document.getElementById('hero') },
          { id: 'future', element: document.getElementById('future') },
          { id: 'services', element: document.getElementById('services') },
          { id: 'skills', element: document.getElementById('skills') },
          { id: 'projects', element: document.getElementById('projects') },
          { id: 'contact', element: document.getElementById('contact') }
        ];
        
        let bestSection = '';
        let bestVisibility = 0;
        const minVisibilityThreshold = 0.1; // Minimum visibility to consider a section active
        
        sections.forEach(({ id, element }) => {
          if (!element) return;
          
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate visibility (how much of section is in viewport)
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // Calculate as percentage of viewport
          const visibilityPercentage = visibleHeight / viewportHeight;
          
          // Weight visibility toward top of viewport
          const topPosition = Math.max(0, 1 - rect.top / viewportHeight);
          const effectiveVisibility = visibilityPercentage * (1 + topPosition * 0.5);
          
          if (effectiveVisibility > bestVisibility) {
            bestVisibility = effectiveVisibility;
            bestSection = id;
          }
        });
        
        // Only update active section if we have good visibility
        if (bestSection && bestVisibility >= minVisibilityThreshold) {
          const newActiveSection = `#${bestSection}`;
          lastActiveSection.current = newActiveSection;
          setActiveSection(newActiveSection);
        } else {
          // When between sections, keep the last active section highlighted
          // This prevents defaulting to Inicio when scrolling between sections
          setActiveSection(lastActiveSection.current);
        }
      };
      
      // Debounced scroll handler
      const handleScroll = () => {
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
        }
        
        scrollTimer.current = setTimeout(() => {
          checkVisibleSection();
        }, 10); // Small delay for better performance
      };
      
      // Add scroll event listener
      scroll.on('scroll', handleScroll);
      scrollWatcher = handleScroll; // Store for cleanup
      
      // Initial check
      checkVisibleSection();
      
      return () => {
        if (scroll && scrollWatcher) {
          scroll.off('scroll', scrollWatcher);
        }
      };
    };
    
    setupScrollTracking();
    
    // Cleanup
    return () => {
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
      
      if (scrollWatcher && (window as any).__locomotiveScroll) {
        (window as any).__locomotiveScroll.off('scroll', scrollWatcher);
      }
    };
  }, []);
  
  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId.replace('#', '');
    
    // Update active section immediately for better UX
    setActiveSection(sectionId);
    lastActiveSection.current = sectionId;
    
    if (locomotiveScroll) {
      try {
        locomotiveScroll.scrollTo(`#${targetId}`, {
          offset: -50,
          duration: 800,
          easing: [0.25, 0.00, 0.35, 1.00],
        });
      } catch (error) {
        console.error("Error scrolling with LocomotiveScroll:", error);
        
        // Fallback to native scrolling
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Use native scrolling as fallback
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navItems = [
    { id: '#hero', label: 'Inicio' },
    { id: '#future', label: 'Nosotros' },
    { id: '#services', label: 'Servicios' },
    { id: '#skills', label: 'Recursos' },
    { id: '#projects', label: 'Proyectos' },
    { id: '#contact', label: 'Contacto' },
  ];

  return (
    <div className="fixed left-20 top-4 bottom-4 w-[8vw] z-50">
      <aside className="h-full bg-white/5 backdrop-blur-md rounded-[2rem] flex flex-col items-center py-8 border border-white/10 shadow-xl">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('#hero')} 
          className="w-full px-4 cursor-pointer"
        >
          <Image 
            src="/logo_dejavu.svg" 
            alt="Consultora Dejavu Logo" 
            width={120} 
            height={36}
            className="w-full h-auto" 
          />
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col items-start justify-center gap-8 w-full px-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-gray-400 hover:text-[#F05A28] transition-all duration-500 ease-in-out text-sm font-medium w-full text-left",
                activeSection === item.id && "text-[#F05A28]"
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex flex-col gap-4 items-center">
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#F05A28] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#F05A28] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </motion.a>
        </div>
      </aside>
    </div>
  );
} 