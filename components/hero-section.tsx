"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

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
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[80vh]">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          <iframe
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            src="https://www.youtube.com/embed/KdCN8_IStlA?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=KdCN8_IStlA&enablejsapi=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title="Background Video"
          ></iframe>
          
          {/* Overlay with gradient for text readability - transparent on left, opaque on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F0000]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={fadeIn}
            >
              Actitud innovadora hacia la <span className="text-[#F05A28]">responsabilidad social</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-200 text-lg mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              variants={fadeIn}
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
            >
              <Button className="bg-[#F05A28] hover:bg-[#D84A1B] text-white px-8 py-6 rounded-md text-lg">
                Descubre Nuestro Enfoque
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F0000] to-transparent z-10"></div>
    </section>
  )
}

