"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionParticles from "@/components/ui/sectionParticles"

export function StatsSection() {
  return (
    <section id="stats" className="py-16 md:py-24 bg-[#0F0000] relative" data-scroll-section>
      {/* Background image with blur */}
      <div className="absolute top-0 bottom-0 -left-10 right-0" style={{ width: 'calc(100vw + 10px)' }}>
        <Image
          src="/background4.webp"
          alt="Background pattern"
          fill
          className="object-cover opacity-40 filter blur-[2px]"
          priority
        />
        {/* Top fade out gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0F0000] to-transparent z-10"></div>
      </div>
      
      {/* Add particles for consistent design */}
      <SectionParticles 
        particleCount={50}
        color="rgba(255, 255, 255, 0.5)"
        opacity={0.5}
        speed={0.3}
        className="w-full z-0"
      />
      
      <div className="container mx-auto px-4 pl-[calc(8vw+2rem)] relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-scroll
            data-scroll-speed="0.3"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Nuestro <br />
              Impacto y <br />
              Experiencia
            </h2>
          </motion.div>
          <div className="space-y-6">
            <motion.div 
              className="bg-[#1A0000]/80 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#F05A28]">250+</h3>
                  <p className="text-gray-400 mt-2">Programas de RSE implementados con éxito</p>
                </div>
                <div className="h-16 w-32 bg-[#0F0000] rounded-lg">
                  {/* Chart placeholder */}
                  <div className="h-full w-full flex items-end px-1">
                    {[40, 60, 30, 80, 50, 70, 45].map((height, index) => (
                      <div
                        key={index}
                        className="w-2 mx-1 bg-[#F05A28] rounded-t-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-[#1A0000]/80 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#F05A28]">40.000</h3>
                  <p className="text-gray-400 mt-2">Vidas de alumnos impactadas por nuestros programas desde 2023</p>
                </div>
                <div className="h-16 w-16 rounded-full bg-[#0F0000] flex items-center justify-center">
                  <svg className="h-8 w-8 text-[#F05A28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-[#1A0000]/80 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#F05A28]">1.400</h3>
                  <p className="text-gray-400 mt-2">Árboles plantados desde 2023</p>
                </div>
                <div className="h-16 w-16 rounded-full bg-[#0F0000] flex items-center justify-center">
                  <svg className="h-8 w-8 text-[#F05A28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

