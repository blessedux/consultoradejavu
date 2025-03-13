"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function ContactSection() {
  // Animation variants for fade-in effects
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-16 md:py-24 bg-[#1A0000]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Descubre cómo podemos transformar <br />
              tu impacto social juntos
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Con más de 25 años de experiencia, creamos puentes de conexión entre organizaciones y comunidades, diseñando iniciativas de responsabilidad social que generan un impacto duradero.
            </p>
            <div className="space-y-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={1}
                variants={fadeIn}
              >
                <h3 className="text-white font-semibold mb-2">Nuestras Especialidades</h3>
                <p className="text-gray-400">
                  • Programas de educación<br />
                  • Cine como herramienta educativa<br />
                  • Soluciones paralelas<br />
                  • Estrategia en gestión social<br />
                  • Relatoría de educación emocional
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={2}
                variants={fadeIn}
              >
                <h3 className="text-white font-semibold mb-2">Información de Contacto</h3>
                <p className="text-gray-400">Email: info@consultoradejavu.com<br />Teléfono: +34 91 123 4567</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-[#0F0000] rounded-xl p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold text-white mb-6">Creemos juntos un impacto social significativo</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#1A0000] border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#F05A28]"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-gray-400 mb-2">Organización</label>
                <input 
                  type="text" 
                  id="organization" 
                  className="w-full bg-[#1A0000] border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#F05A28]"
                  placeholder="Tu Organización"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#1A0000] border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#F05A28]"
                  placeholder="juan@ejemplo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Tu Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#1A0000] border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#F05A28]"
                  placeholder="Cuéntanos sobre tus objetivos de responsabilidad social y cómo podemos ayudarte"
                ></textarea>
              </div>
              <div className="text-gray-400 text-sm mb-4">
                <p>Sin un enfoque estratégico, muchas organizaciones pierden la oportunidad de hacer una diferencia duradera. Imagina a tu organización reconocida no solo por su éxito, sino por su compromiso con la comunidad.</p>
              </div>
              <Button className="bg-[#F05A28] hover:bg-[#D84A1B] text-white px-6 py-2 rounded-md w-full">
                Comenzar Tu Impacto
              </Button>
            </form>
            
            <motion.div 
              className="flex justify-center mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
              variants={fadeIn}
            >
              <Image 
                src="/logo_dejavu.svg" 
                alt="Consultora Dejavu Logo" 
                width={120} 
                height={40} 
                className="mt-4"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

