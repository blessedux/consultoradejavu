"use client"

import type React from "react"

import { useState } from "react"
import { Home, BarChart2, Users, ShoppingCart, MessageSquare, Settings, HelpCircle, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0F1117] text-gray-200">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-[#161A25] transform transition-transform duration-200 ease-in-out md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-[#F05A28] flex items-center justify-center text-white font-bold">
                D
              </div>
              <span className="ml-2 text-xl font-bold">Dejavu</span>
            </div>
            <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-[#F05A28] to-[#F07328] text-white"
                >
                  <Home className="h-5 w-5 mr-3" />
                  Panel Principal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
                >
                  <BarChart2 className="h-5 w-5 mr-3" />
                  Analíticas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
                >
                  <Users className="h-5 w-5 mr-3" />
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
                >
                  <ShoppingCart className="h-5 w-5 mr-3" />
                  Pedidos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  Mensajes
                </a>
              </li>
            </ul>

            <div className="mt-8 px-4">
              <h3 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Configuración</h3>
              <ul className="mt-2 space-y-1 px-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    General
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
                  >
                    <HelpCircle className="h-5 w-5 mr-3" />
                    Soporte
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* User profile */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar de usuario"
                className="h-10 w-10 rounded-full bg-gray-700"
              />
              <div className="ml-3">
                <p className="text-sm font-medium">Juan Pérez</p>
                <p className="text-xs text-gray-400">Administrador</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={cn("transition-all duration-200 ease-in-out", "md:ml-64")}>
        {/* Header */}
        <header className="bg-[#161A25] shadow-md">
          <div className="flex items-center justify-between h-16 px-4">
            <button className="text-gray-400 hover:text-white md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>

            <div className="flex items-center space-x-4">
              <button className="p-1 text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <div className="h-8 w-[1px] bg-gray-700"></div>

              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="User avatar"
                  className="h-8 w-8 rounded-full bg-gray-700"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

