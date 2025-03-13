"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { StatsSection } from "@/components/stats-section"
import { FutureSection } from "@/components/future-section"
import { ServicesSection } from "@/components/services-section"
import { SkillsSection } from "@/components/skills-section"
import { CtaSection } from "@/components/cta-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"

export default function Home() {
  // Ensure smooth scrolling for scrollytelling animations
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-[#0F0000] text-gray-200">
        <Header />
        <main>
          <HeroSection />
          <TrustSection />
          <StatsSection />
          <FutureSection />
          <ServicesSection />
          <SkillsSection />
          <CtaSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  )
}

