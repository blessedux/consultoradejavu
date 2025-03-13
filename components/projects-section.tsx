"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0F0000]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Explora nuestros proyectos de impacto <br />
          con organizaciones y comunidades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ProjectCard
            image="/placeholder.svg?height=300&width=400"
            title="Iniciativa de Empoderamiento Educativo"
            description="Desarrollamos un programa educativo integral para comunidades desatendidas, llegando a más de 5.000 estudiantes."
          />
          <ProjectCard
            image="/placeholder.svg?height=300&width=400"
            title="Marco de Sostenibilidad Corporativa"
            description="Creamos una estrategia integrada de RSE para una empresa multinacional, reduciendo el impacto ambiental en un 35%."
          />
          <ProjectCard
            image="/placeholder.svg?height=300&width=400"
            title="Programa de Desarrollo Comunitario"
            description="Diseñamos e implementamos una iniciativa integral de participación comunitaria que mejoró los resultados educativos locales en un 40%."
          />
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button className="bg-[#F05A28] hover:bg-[#D84A1B] text-white px-8 py-2 rounded-md">Ver Todos los Proyectos</Button>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

