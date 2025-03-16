"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#0F0000]" data-scroll-section>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-scroll
          data-scroll-speed="0.3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Ofrecemos servicios integrales de consultoría en <br></br>Responsabilidad Social Corporativa y desarrollo educativo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Desarrollo de Estrategia RSE"
            description="Apoyamos a las organizaciones a crear estrategias integrales de Responsabilidad Social Corporativa alineadas con sus valores y objetivos de negocio."
            color="bg-[#F05A28]"
          />
          <ServiceCard
            title="Diseño de Programas Educativos"
            description="Nuestros expertos diseñan, desarrollan e implementan programas educativos innovadores que generan un impacto significativo para comunidades y grupos de interés."
            color="bg-[#E45023]"
          />
          <ServiceCard
            title="Informes de Sostenibilidad"
            description="Marcos de informes integrales para medir, realizar seguimiento y comunicar su impacto social y ambiental."
            color="bg-[#D84A1B]"
          />
          <ServiceCard
            title="Participación Comunitaria"
            description="Estrategias para construir relaciones auténticas con las comunidades a través de iniciativas sociales significativas y programas educativos."
            color="bg-[#F05A28]"
          />
          <ServiceCard
            title="Evaluación de Impacto"
            description="Evaluación rigurosa de sus iniciativas de responsabilidad social para medir resultados y optimizar programas futuros."
            color="bg-[#E45023]"
          />
          <ServiceCard
            title="Innovación Educativa"
            description="Enfoques de vanguardia para el desarrollo educativo que abordan las necesidades reales de la comunidad y crean un cambio duradero."
            color="bg-[#D84A1B]"
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  title,
  description,
  color,
}: {
  title: string
  description: string
  color: string
}) {
  return (
    <motion.div 
      className={`${color} rounded-xl p-6 transition-transform hover:scale-105`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="flex justify-end">
        <button className="text-white flex items-center gap-2 hover:text-gray-300 transition-colors">
          Saber Más <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  )
}

