"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CtaSection() {
  return (
    <section className="py-12 bg-[#F05A28]">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Inicia tu camino de RSE con una consulta gratuita
            </h2>
          </div>
          <Button className="bg-white hover:bg-gray-100 text-[#F05A28] px-6 py-2 rounded-md">Reservar Ahora</Button>
        </motion.div>
      </div>
    </section>
  )
}

