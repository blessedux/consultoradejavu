"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FutureSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video when component is mounted
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay was prevented:", error);
      });
    }
  }, []);
  
  return (
    <section id="future" className="py-16 md:py-24 bg-[#0F0000]" data-scroll-section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative w-full aspect-[5/6] rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-scroll
            data-scroll-speed="0.1"
          >
            {/* Google Drive embed - using an iframe with direct link to video player */}
            <iframe
              src="https://drive.google.com/file/d/1tVyyyNV3FKZMPmjtOwfPQIzD08uxwwID/preview"
              allow="autoplay; encrypted-media"
              className="absolute inset-0 w-full h-full rounded-xl"
              frameBorder="0"
              title="Consultora Dejavu Video"
            ></iframe>
            
            {/* Fallback for browsers that don't support iframe embedding */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#1A0000] z-[-1]">
              <p className="text-gray-400 text-center">Video cargando...</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-scroll
            data-scroll-speed="0.2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Estamos construyendo un futuro <br />
              sostenible juntos. ¡Únete!
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Nuestro equipo de 25 consultores dedicados aporta experiencia en Responsabilidad Social Corporativa e 
              innovación educativa para ayudar a las organizaciones a crear un impacto social significativo mientras 
              alcanzan sus objetivos estratégicos.
            </p>
            <div className="bg-[#1A0000] p-6 rounded-xl mb-8">
              <p className="text-gray-300 italic">
                "Trabajar con Consultora Dejavu transformó nuestro enfoque de responsabilidad social. Sus programas 
                educativos nos ayudaron a conectar con nuestra comunidad de manera significativa y mejoraron 
                considerablemente la percepción de nuestra marca."
              </p>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full bg-[#F05A28]"></div>
                <div className="ml-3">
                  <p className="text-white font-medium">María Rodríguez</p>
                  <p className="text-gray-400 text-sm">Directora de RSC, Fundación EduTech</p>
                </div>
              </div>
            </div>
            <Button 
              className="bg-[#F05A28] hover:bg-[#D84A1B] text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Conoce Nuestra Metodología
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

