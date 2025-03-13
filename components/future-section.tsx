"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FutureSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0F0000]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Equipo trabajando juntos"
              width={500}
              height={600}
              className="rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
            <Button className="bg-[#F05A28] hover:bg-[#D84A1B] text-white px-6 py-2 rounded-md">
              Conoce Nuestra Metodología
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

