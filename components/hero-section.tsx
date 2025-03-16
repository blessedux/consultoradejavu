"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import SectionParticles from "@/components/ui/sectionParticles"

export function HeroSection() {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // This is needed because the YouTube iframe API doesn't have TypeScript types by default
    const player = videoRef.current;
    
    // We'll use postMessage to control the YouTube iframe
    const makePostMessageRequest = (action: string) => {
      player?.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: action,
          args: [],
        }),
        "*"
      );
    };

    // Ensure video starts playing when component mounts
    const timeout = setTimeout(() => {
      makePostMessageRequest("playVideo");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Function to scroll to contact section
  const scrollToContact = () => {
    // Check if Locomotive Scroll instance exists on window
    const locomotiveScroll = (window as any).__locomotiveScroll;
    
    if (locomotiveScroll) {
      // Use Locomotive Scroll's scrollTo method with smooth animation
      locomotiveScroll.scrollTo('#contact', {
        offset: -100,
        duration: 1500,
        easing: [0.25, 0.1, 0.25, 1.0] // cubic-bezier easing for a nice, smooth scroll
      });
    } else {
      // Fallback to native scrollIntoView if Locomotive Scroll isn't available
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Animation variants for fade-in effects
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-[90vh] w-full" data-scroll-section>
      {/* Particles Background */}
      <SectionParticles 
        particleCount={70}
        color="rgba(255, 255, 255, 0.7)"
        opacity={0.7}
        speed={0.4}
        className="w-full z-10"
      />
      
      {/* Background image with negative positioning to ensure it covers the left edge */}
      <div className="absolute top-0 bottom-0 -left-10 right-0" style={{ width: 'calc(100vw + 10px)' }}>
        <Image
          src="/background3.webp"
          alt="Background pattern"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Background video with frame - adjusted for full width with content padding */}
      <div className="absolute mx-8 left-[calc(8vw+2rem)] right-8 top-32 bottom-0 overflow-hidden rounded-[1.5%] border-4 border-[#000000]/20 shadow-[0_0_25px_5px_rgba(240,90,40,0.4)] z-20">
        <div className="relative w-full h-full">
          <iframe
            ref={videoRef}
            className="absolute w-full h-full object-cover scale-110"
            src="https://www.youtube.com/embed/KdCN8_IStlA?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&cc_load_policy=0&playlist=KdCN8_IStlA&enablejsapi=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title="Background Video"
          ></iframe>
          
          {/* Overlay with gradient for text readability - transparent on left, opaque on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0000]/30 via-[#0F0000]/50 to-[#0F0000] backdrop-blur-[1px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pl-[calc(8vw+2rem)] relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-end">
          <div className="lg:col-start-7 lg:col-span-6 ml-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={fadeIn}
              data-scroll
              data-scroll-speed="0.5"
            >
              Actitud innovadora hacia la <span className="text-[#F05A28]">responsabilidad social</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-200 text-lg mb-8 text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              variants={fadeIn}
              data-scroll
              data-scroll-speed="0.3"
              data-scroll-delay="0.1"
            >
              Transformando organizaciones a través de iniciativas estratégicas de Responsabilidad Social Corporativa 
              y programas educativos que generan un impacto positivo duradero.
            </motion.p>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              variants={fadeIn}
              data-scroll
              data-scroll-speed="0.1"
              data-scroll-delay="0.2"
              className="text-right"
            >
              <Button 
                onClick={scrollToContact}
                className="bg-[#F05A28] hover:bg-[#D84A1B] text-white px-8 py-6 rounded-md text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contáctanos Ahora
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F0000] to-transparent z-40"></div>
    </section>
  )
}

