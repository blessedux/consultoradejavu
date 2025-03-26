"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// List of logos from the public/icons/logos directory
const LOGOS = [
  "20.svg",
  "ALASA.svg",
  "ALLSA.svg",
  "ASSA.svg",
  "SunEdison-Logo-Full-Color-High-Res.svg",
  "rutas del Pacifico.svg"
];

export function LogoSliderSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Function to handle hover behavior
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section 
      id="partners" 
      className="py-16 md:py-24 bg-[#0F0000] relative overflow-hidden" 
      data-scroll-section
    >
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-scroll
          data-scroll-speed="0.3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros Colaboradores
          </h2>
          <p className="text-gray-400 text-lg">
            Organizaciones que confían en nuestro enfoque de responsabilidad social
          </p>
          
        </motion.div>
      </div>
      
      <motion.div 
        className="relative w-full overflow-hidden py-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        {/* Logo slider container with double logos for infinite scroll effect */}
        <div 
          ref={sliderRef}
          className="flex items-center w-full overflow-x-hidden"
        >
          {/* First set of logos */}
          <div className={`flex whitespace-nowrap min-w-full px-4 sm:px-8 md:px-16 animate-marquee ${isPaused ? 'scrolling-paused' : ''}`}>
            {LOGOS.map((logo, i) => (
              <div 
                key={`logo-1-${i}`} 
                className="h-10 sm:h-12 md:h-16 lg:h-20 relative logo-item mx-4 sm:mx-6 md:mx-8 lg:mx-12"
                style={{ flex: '0 0 auto' }}
              >
                <div className="w-auto h-full relative">
                  <Image
                    src={`/icons/logos/${logo}`}
                    alt={`Partner logo ${i+1}`}
                    width={130}
                    height={70}
                    className="h-full w-auto object-contain"
                    priority={i < 4} // Prioritize loading first few logos
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate set of logos for seamless scrolling */}
          <div className={`flex whitespace-nowrap min-w-full px-4 sm:px-8 md:px-16 animate-marquee ${isPaused ? 'scrolling-paused' : ''}`}>
            {LOGOS.map((logo, i) => (
              <div 
                key={`logo-2-${i}`} 
                className="h-10 sm:h-12 md:h-16 lg:h-20 relative logo-item mx-4 sm:mx-6 md:mx-8 lg:mx-12"
                style={{ flex: '0 0 auto' }}
              >
                <div className="w-auto h-full relative">
                  <Image
                    src={`/icons/logos/${logo}`}
                    alt={`Partner logo ${i+1}`}
                    width={130}
                    height={70}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-r from-[#0F0000] to-transparent z-20"></div>
      <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-l from-[#0F0000] to-transparent z-20"></div>
      
      {/* Background particles for visual interest */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#F05A28]/20"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-[#F05A28]/30"></div>
        <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-[#F05A28]/20"></div>
        <div className="absolute top-1/3 left-3/4 w-4 h-4 rounded-full bg-[#F05A28]/10"></div>
      </div>
    </section>
  )
} 