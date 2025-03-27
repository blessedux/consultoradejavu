"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useRef } from "react"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#0F0000] relative w-full" data-scroll-section>
      <div className="container mx-auto px-4 pl-[calc(8vw+2rem)]">
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
            href="/desarrollo-de-estrategia-rse"
          />
          <ServiceCard
            title="Diseño de Programas Educativos"
            description="Nuestros expertos diseñan, desarrollan e implementan programas educativos innovadores que generan un impacto significativo para comunidades y grupos de interés."
            color="bg-[#E45023]"
            href="/diseno-de-programas-educativos"
          />
          <ServiceCard
            title="Informes de Sostenibilidad"
            description="Marcos de informes integrales para medir, realizar seguimiento y comunicar su impacto social y ambiental."
            color="bg-[#D84A1B]"
            href="/informes-de-sostenibilidad"
          />
          <ServiceCard
            title="Participación Comunitaria"
            description="Estrategias para construir relaciones auténticas con las comunidades a través de iniciativas sociales significativas y programas educativos."
            color="bg-[#F05A28]"
            href="/participacion-comunitaria"
          />
          <ServiceCard
            title="Evaluación de Impacto"
            description="Evaluación rigurosa de sus iniciativas de responsabilidad social para medir resultados y optimizar programas futuros."
            color="bg-[#E45023]"
            href="/evaluacion-de-impacto"
          />
          <ServiceCard
            title="Innovación Educativa"
            description="Enfoques de vanguardia para el desarrollo educativo que abordan las necesidades reales de la comunidad y crean un cambio duradero."
            color="bg-[#D84A1B]"
            href="/innovacion-educativa"
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
  href,
}: {
  title: string
  description: string
  color: string
  href: string
}) {
  // Tilt effect state and refs
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Handle mouse movement for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (in percentage)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    
    // Smooth the tilt effect for more natural movement
    const smoothX = x * 0.8; // Dampen the effect slightly
    const smoothY = y * 0.8;
    
    setTilt({ x: smoothX, y: smoothY, active: true });
  };
  
  // Reset tilt when mouse leaves
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };
  
  // Calculate the transform style based on tilt
  const transform = tilt.active
    ? `perspective(1000px) rotateX(${tilt.y * -8}deg) rotateY(${tilt.x * 8}deg) scale3d(1.05, 1.05, 1.05)`
    : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  
  // Calculate glare position based on mouse position
  const glarePosition = {
    x: 50 + tilt.x * 25, // 25% - 75% range
    y: 50 + tilt.y * 25, // 25% - 75% range
  };
  
  return (
    <Link href={href} className="block">
      <motion.div 
        ref={cardRef}
        className={`${color} rounded-xl p-6 relative overflow-hidden group cursor-pointer will-change-transform h-full flex flex-col`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ 
          transform, 
          transition: 'transform 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background image with enhanced visibility */}
        <div className="absolute inset-0 w-full h-full transition-all duration-500 filter blur-[4px] group-hover:blur-[1px] opacity-80 group-hover:opacity-95">
          <Image 
            src="/background6.webp"
            alt="Service background"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Overlay gradient with reduced opacity */}
        <div className={`absolute inset-0 ${color} opacity-40 group-hover:opacity-30 transition-opacity duration-500`}></div>
        
        {/* Card content with flex layout */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 transform transition-transform duration-300" style={{
              transform: tilt.active ? `translateZ(40px)` : 'translateZ(0px)'
            }}>{title}</h3>
            <p className="text-white/90 mb-6">{description}</p>
          </div>
          
          {/* Button container with fixed bottom margin */}
          <div className="mt-auto pt-4 transform transition-transform duration-300" style={{
            transform: tilt.active ? `translateZ(50px) translateY(-5px)` : 'translateZ(0px)'
          }}>
            <button className="text-white flex items-center gap-2 hover:text-white/80 transition-colors">
              Saber Más <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

