"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null)

  useEffect(() => {
    // Get the Locomotive Scroll instance from the window object
    if (typeof window !== 'undefined') {
      const scroll = (window as any).__locomotiveScroll
      if (scroll) {
        setLocomotiveScroll(scroll)
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (locomotiveScroll) {
      const element = document.querySelector(sectionId)
      if (element) {
        locomotiveScroll.scrollTo(element, {
          offset: -100,
          duration: 1000,
          easing: [0.25, 0.00, 0.35, 1.00],
        })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0000]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => scrollToSection('#hero')} className="flex items-center cursor-pointer">
          <Image 
            src="/logo_dejavu.svg" 
            alt="Consultora Dejavu Logo" 
            width={120} 
            height={36} 
            className="h-9 w-auto" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('#hero')} className="text-white hover:text-[#F05A28] transition-colors">
            Inicio
          </button>
          <button onClick={() => scrollToSection('#future')} className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Nosotros
          </button>
          <button onClick={() => scrollToSection('#services')} className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Servicios
          </button>
          <button onClick={() => scrollToSection('#projects')} className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Proyectos
          </button>
          <button onClick={() => scrollToSection('#skills')} className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Recursos
          </button>
          <button onClick={() => scrollToSection('#contact')} className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Contacto
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-[#0F0000] z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-white hover:text-[#F05A28] py-2 border-b border-gray-800 text-left"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('#future')}
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800 text-left"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection('#services')}
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800 text-left"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('#projects')}
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800 text-left"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection('#skills')}
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800 text-left"
          >
            Recursos
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800 text-left"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  )
}

