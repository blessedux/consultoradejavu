"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionParticles from "@/components/ui/sectionParticles"
import { useEffect, useState } from "react"

export default function UnderMaintenancePage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen w-full bg-[#0F0000] text-gray-200 flex flex-col justify-center items-center overflow-hidden relative">
      {/* Particles Background - same as hero */}
      <SectionParticles
        particleCount={70}
        color="rgba(255, 255, 255, 0.7)"
        opacity={0.7}
        speed={0.4}
        className="absolute inset-0 w-full h-full z-10"
      />

      {/* Background image - same as hero */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/background3.webp"
          alt=""
          fill
          className="opacity-30"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center bottom",
          }}
        />
      </div>

      {/* Centered under maintenance text */}
      <motion.div
        className="relative z-30 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Under maintenance
        </h1>
      </motion.div>
    </div>
  )
}
