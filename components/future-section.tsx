"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function FutureSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="future" className="py-16 md:py-24 bg-[#0F0000] relative w-full" data-scroll-section>
      {/* Add a background overlay for the section for better visuals */}
      <div className="absolute top-0 bottom-0 -left-10 right-0" style={{ width: 'calc(100vw + 10px)' }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0F0000] to-[#1A0000]/60"></div>
      </div>
      
      <div className="container mx-auto px-4 pl-[calc(8vw+2rem)] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative w-full aspect-[5/6] max-h-[500px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-scroll
            data-scroll-speed="0.1"
          >
            {/* Static image that looks like a video */}
            <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-[#1A0000] to-[#2A0000]">
              <div className="relative w-full h-full">
                {isPlaying ? (
                  <iframe
                    src="https://www.youtube.com/embed/CifUDjCRmK8?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&start=10&playsinline=1&mute=1"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-50 rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <Image 
                    src="/background3.webp"
                    alt="Video preview"
                    fill
                    className="object-cover opacity-50 rounded-xl"
                  />
                )}
              </div>
              
              {/* Play/Pause button - always visible */}
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                onClick={toggleVideo}
              >
                <div className="bg-[#F05A28]/20 w-24 h-24 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-[#F05A28]/30 transition-all">
                  {isPlaying ? (
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            
            {/* Only show overlay when video is not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0000]/80 via-transparent to-transparent rounded-xl"></div>
            )}
            <div className="absolute inset-0 rounded-xl border border-[#F05A28]/20 shadow-[0_0_15px_2px_rgba(240,90,40,0.2)]"></div>
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
              Nuestro equipo de consultores con 25+ años de experiencia se dedica a la Responsabilidad Social Corporativa e 
              innovación educativa ayudando a organizaciones a crear un impacto social significativo mientras 
              alcanzan sus objetivos estratégicos.
            </p>
            <div className="bg-[#1A0000]/80 backdrop-blur-sm p-6 rounded-xl mb-8 border border-white/10">
              <p className="text-gray-300 italic">
                "Trabajar con Consultora Dejavu transformó nuestro enfoque de responsabilidad social. Sus programas 
                educativos nos ayudaron a conectar con nuestra comunidad de manera significativa y mejoraron 
                considerablemente la percepción de nuestra marca."
              </p>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full bg-[#F05A28]"></div>
                <div className="ml-3">
                  <p className="text-white font-medium">Director Dennis Guerrero</p>
                  <p className="text-gray-400 text-sm">Escuela básica g 345 - Til til</p>
                </div>
              </div>
            </div>
            <Button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
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

