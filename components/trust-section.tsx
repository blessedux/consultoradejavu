"use client"

import { motion } from "framer-motion"
import SectionParticles from "@/components/ui/sectionParticles"

export function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-24 bg-[#1A0000] relative w-full" data-scroll-section>
      {/* Particles Background */}
      <SectionParticles 
        particleCount={40}
        color="rgba(240, 90, 40, 0.3)" // Orange color with lower opacity
        opacity={0.5}
        speed={0.3} // Increased speed from 0.15
        className="w-full z-0"
      />
      
      <div className="container mx-auto px-4 pl-[calc(8vw+2rem)] relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-scroll
          data-scroll-speed="0.3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Construimos confianza a través del impacto social</h2>
          <p className="text-gray-400 text-lg mb-8">
            Ayudamos a las organizaciones a desarrollar e implementar estrategias efectivas de Responsabilidad Social Corporativa 
            y programas educativos que actúan como puentes entre comunidades y organizaciones, generando impacto positivo y fortaleciendo su marca.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

