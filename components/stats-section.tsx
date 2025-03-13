"use client"

import { motion } from "framer-motion"

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0F0000]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Mira Nuestro <br />
              Impacto y <br />
              Experiencia
            </h2>
          </motion.div>
          <motion.div 
            className="bg-[#1A0000] rounded-xl p-8"
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
        </div>
      </div>
    </section>
  )
}

