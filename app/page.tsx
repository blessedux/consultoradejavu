"use client"

import { SidebarNav } from "@/components/sidebar-nav"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { StatsSection } from "@/components/stats-section"
import { FutureSection } from "@/components/future-section"
import { ServicesSection } from "@/components/services-section"
import { SkillsSection } from "@/components/skills-section"
import { LogoSliderSection } from "@/components/logo-slider-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Import SmoothScroll with dynamic import to avoid SSR issues
const SmoothScroll = dynamic(() => import("@/components/smooth-scroll"), {
  ssr: false,
})

export default function Home() {
  // State to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Ensure smooth scrolling for scrollytelling animations
  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);
    
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // Only render smooth scroll on client-side to avoid hydration errors
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      <SmoothScroll>
        <div className="min-h-screen bg-[#0F0000] text-gray-200">
          <SidebarNav />
          <main>
            <HeroSection />
            <TrustSection />
            <StatsSection />
            <FutureSection />
            <ServicesSection />
            <SkillsSection />
            <LogoSliderSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </AnimatePresence>
  )
}

