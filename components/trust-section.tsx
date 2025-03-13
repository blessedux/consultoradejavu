"use client"

import { motion } from "framer-motion"

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1A0000]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Construimos confianza a través del impacto social</h2>
          <p className="text-gray-400 text-lg mb-8">
            Con nuestro equipo de 25 consultores especializados, ayudamos a las organizaciones a desarrollar e implementar estrategias 
            efectivas de Responsabilidad Social Corporativa y programas educativos que crean cambios significativos en las comunidades 
            mientras fortalecen su marca.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

