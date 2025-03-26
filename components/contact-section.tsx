"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

type FormData = {
  name: string;
  organization: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted with data:', data); // Debug log
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status); // Debug log
      const result = await response.json();
      console.log('Response data:', result); // Debug log

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      toast.success('Mensaje enviado exitosamente');
      reset();
    } catch (error) {
      console.error('Form submission error:', error); // Debug log
      toast.error('Error al enviar el mensaje');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-16 md:py-24 bg-[#1A0000]" data-scroll-section>
      <div className="container mx-auto px-4 pl-[calc(8vw+2rem)] max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-6 lg:col-start-1 pl-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeIn}
            data-scroll
            data-scroll-speed="0.3"
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
               
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-[#0F0000] rounded-xl p-6 lg:p-8 shadow-lg lg:col-span-5 lg:col-start-7 mx-auto w-full max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold text-white mb-6">Creemos juntos un impacto social significativo</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Nombre Completo</label>
                <input 
                  {...register("name", { required: "El nombre es requerido" })}
                  type="text" 
                  id="name" 
                  className="w-full bg-[#1A0000] border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#F05A28]"
                  placeholder="Juan Pérez"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="organization" className="block text-gray-400 mb-2">Organización</label>
                <input 
                  {...register("organization", { required: "La organización es requerida" })}
                  type="text" 
                  id="organization" 
                  className="w-full bg-[#1A0000] border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#F05A28]"
                  placeholder="Tu Organización"
                />
                {errors.organization && (
                  <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Correo Electrónico</label>
                <input 
                  {...register("email", { 
                    required: "El email es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                  type="email" 
                  id="email" 
                  className="w-full bg-[#1A0000] border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#F05A28]"
                  placeholder="juan@ejemplo.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Tu Mensaje</label>
                <textarea 
                  {...register("message", { required: "El mensaje es requerido" })}
                  id="message" 
                  rows={4}
                  className="w-full bg-[#1A0000] border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#F05A28]"
                  placeholder="Cuéntanos sobre tus objetivos de responsabilidad social y cómo podemos ayudarte"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <div className="text-gray-400 text-sm mb-4">
                <p>Sin un enfoque estratégico, muchas organizaciones pierden la oportunidad de hacer una diferencia duradera. Imagina a tu organización reconocida no solo por su éxito, sino por su compromiso con la comunidad.</p>
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-[#F05A28] hover:bg-[#D84A1B] text-white px-6 py-2 rounded-md w-full"
              >
                {isSubmitting ? 'Enviando...' : 'Comenzar Tu Impacto'}
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
             
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

