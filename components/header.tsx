"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0000]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo_dejavu.svg" 
            alt="Consultora Dejavu Logo" 
            width={120} 
            height={36} 
            className="h-9 w-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white hover:text-[#F05A28] transition-colors">
            Inicio
          </Link>
          <Link href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Nosotros
          </Link>
          <Link href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Servicios
          </Link>
          <Link href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Proyectos
          </Link>
          <Link href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Recursos
          </Link>
          <Link href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
            Contacto
          </Link>
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
          <Link
            href="#"
            className="text-white hover:text-[#F05A28] py-2 border-b border-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Proyectos
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Recursos
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-[#F05A28] py-2 border-b border-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

