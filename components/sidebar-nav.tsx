"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function SidebarNav() {
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null)
  const [activeSection, setActiveSection] = useState('#hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
  
  // Close mobile menu on window resize if screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);
  
  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId.replace('#', '');
    
    // Update active section immediately for better UX
    setActiveSection(sectionId);
    lastActiveSection.current = sectionId;
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
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

  // Handle background click
  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only close if clicking on the background (not on buttons or links)
    // Check if the clicked element is the div itself (not a child)
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
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

  // Mobile menu animations
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: { 
      opacity: 0, 
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  // Burger button animation variants
  const lineVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  };
  
  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };
  
  const line3Variants = {
    closed: { rotate: 0 },
    open: { rotate: -45 }
  };
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed left-20 top-4 bottom-4 w-[8vw] z-50 hidden md:block">
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
              href="https://www.linkedin.com/company/consultoradejavu/"
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
              href="https://www.youtube.com/@consultoradejavu5347"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F05A28] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </motion.a>
          </div>
        </aside>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 z-[60] md:hidden">
        {/* Mobile Header Bar - Ensure it's above everything */}
        <div className="flex justify-between items-center px-4 py-3 bg-[#0F0000]/80 backdrop-blur-md border-b border-white/10 relative z-[200]">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('#hero')} 
            className="cursor-pointer"
          >
            <Image 
              src="/logo_dejavu.svg" 
              alt="Consultora Dejavu Logo" 
              width={100} 
              height={30}
              className="h-8 w-auto" 
            />
          </div>
          
          {/* Burger Menu Button - Highest z-index */}
          <button 
            className="w-10 h-10 relative focus:outline-none z-[1000]"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.span
                className="block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={lineVariants}
                style={{ transformOrigin: "center" }}
              ></motion.span>
              <motion.span
                className="block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out mt-1.5"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={line2Variants}
              ></motion.span>
              <motion.span
                className="block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out mt-3"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={line3Variants}
                style={{ transformOrigin: "center" }}
              ></motion.span>
            </div>
          </button>
        </div>
        
        {/* Full-screen Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-white/5 backdrop-blur-md z-[100] flex flex-col"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={handleBackgroundClick}
              style={{ position: 'fixed' }}
            >
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 overflow-y-auto mt-14" onClick={(e) => e.stopPropagation()}>
                {/* Navigation Items */}
                <nav className="w-full max-w-md mx-auto">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "text-gray-200 hover:text-[#F05A28] transition-all duration-300 text-xl font-medium w-full text-center py-5 border-b border-white/10",
                        activeSection === item.id && "text-[#F05A28]"
                      )}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
                
                {/* Social Links */}
                <motion.div 
                  className="flex gap-8 items-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.a
                    href="https://www.linkedin.com/company/consultoradejavu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F05A28] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@consultoradejavu5347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F05A28] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 