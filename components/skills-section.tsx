"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export function SkillsSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#1A0000]" data-scroll-section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-[6/5] rounded-xl overflow-hidden">
              <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-[#1A0000] to-[#2A0000]">
                <div className="relative w-full h-full">
                  {isPlaying ? (
                    <iframe
                      src="https://www.youtube.com/embed/M-A78UkBZH0?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&start=10&playsinline=1&mute=1"
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
              
              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0000]/80 via-transparent to-transparent rounded-xl"></div>
              )}
              <div className="absolute inset-0 rounded-xl border border-[#F05A28]/20 shadow-[0_0_15px_2px_rgba(240,90,40,0.2)]"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra experiencia es por qué las <br />
              organizaciones eligen asociarse con nosotros
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Nuestro equipo de 25 consultores aporta conocimientos especializados en Responsabilidad Social Corporativa y 
              desarrollo educativo para crear un impacto significativo.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <SkillCircle percentage={95} label="Satisfacción del Cliente" />
              <SkillCircle percentage={92} label="Tasa de Éxito" />
              <SkillCircle percentage={88} label="Impacto Comunitario" />
            </div>

            <div className="space-y-4">
              <SkillItem text="Planificación e Implementación Estratégica de RSE" />
              <SkillItem text="Desarrollo y Evaluación de Programas Educativos" />
              <SkillItem text="Participación Comunitaria y Gestión de Grupos de Interés" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillCircle({
  percentage,
  label,
}: {
  percentage: number
  label: string
}) {
  const circumference = 2 * Math.PI * 45
  const offset = circumference - (percentage / 100) * circumference

  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <circle
            className="text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            className="text-[#F05A28]"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <p className="text-gray-300 text-sm mt-2 text-center">{label}</p>
    </motion.div>
  )
}

function SkillItem({ text }: { text: string }) {
  return (
    <motion.div 
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-5 w-5 rounded-full bg-[#F05A28] flex items-center justify-center">
        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  )
}

