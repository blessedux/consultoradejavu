"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  // Function to scroll to sections
  const scrollToSection = (sectionId: string, offset: number = -100) => {
    // Check if Locomotive Scroll instance exists on window
    const locomotiveScroll = (window as any).__locomotiveScroll;
    
    if (locomotiveScroll) {
      // Use Locomotive Scroll's scrollTo method with smooth animation
      locomotiveScroll.scrollTo(sectionId, {
        offset: offset,
        duration: 1500,
        easing: [0.25, 0.1, 0.25, 1.0] // cubic-bezier easing for a nice, smooth scroll
      });
    } else {
      // Fallback to native scrollIntoView if Locomotive Scroll isn't available
      const section = document.getElementById(sectionId.replace('#', ''));
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <footer className="p-6 mt-8 ml-[calc(8vw+2rem+10%)] mr-6 max-w-4xl" data-scroll-section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column - Logo and Company Info */}
        <motion.div 
          className="md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-scroll
          data-scroll-speed="0.1"
        >
          <div className="flex items-center mb-6">
            <Image 
              src="/logo_dejavu.svg" 
              alt="Consultora Dejavu Logo" 
              width={180} 
              height={54} 
              className="h-14 w-auto" 
            />
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Un puente entre comunidades y organizaciones. 
          </p>
          
          <h3 className="text-white font-semibold mb-4 mt-8">Compañía</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="#future" 
                className="text-gray-400 hover:text-white text-sm cursor-pointer" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#future');
                }}
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact', -150); // Slightly different offset to focus on the form
                }}
              >
                Carreras
              </a>
            </li>
            <li>
             
            </li>
          </ul>
        </motion.div>

        {/* Right Column - Address and Social Icons */}
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-scroll
          data-scroll-speed="0.1"
        >
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
          <address className="text-gray-400 text-sm mb-6 not-italic">
            <p className="mb-2">Napoleón 3565, 
            </p>
            <p className="mb-2">Las Condes, Región Metropolitana</p>
            <p className="mb-2">Chile</p>
            <p className="mb-2">+56 9 9739 2515</p>
            <p className="mb-2">info@consultoradejavu.cl</p>
          </address>
          
          <h3 className="text-white font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#F05A28] hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#F05A28] hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">© 2025 Consultora Dejavu. Todos los derechos reservados.</p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm">
            Política de Privacidad
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">
            Términos de Servicio
          </a>
        </div>
      </div>
    </footer>
  )
}

