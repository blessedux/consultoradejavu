"use client"

import type React from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { motion } from "framer-motion"

export function MainContent() {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Panel de Control</h1>
          <p className="text-gray-400 mt-1">Bienvenido de nuevo, Juan Pérez</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm">Exportar</button>
          <button className="px-4 py-2 bg-gradient-to-r from-[#F05A28] to-[#F07328] hover:from-[#E54917] hover:to-[#E56217] text-white rounded-lg text-sm">
            Añadir Nuevo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DashboardCard
          title="Ingresos Totales"
          value="$24,560"
          change="+14.2%"
          isPositive={true}
          icon={
            <div className="bg-[#F05A28]/20 p-3 rounded-lg">
              <svg className="h-6 w-6 text-[#F05A28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          }
        />
        <DashboardCard
          title="Pedidos Totales"
          value="1,245"
          change="+32.5%"
          isPositive={true}
          icon={
            <div className="bg-[#F05A28]/20 p-3 rounded-lg">
              <svg className="h-6 w-6 text-[#F05A28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          }
        />
        <DashboardCard
          title="Nuevos Clientes"
          value="356"
          change="+18.7%"
          isPositive={true}
          icon={
            <div className="bg-[#F05A28]/20 p-3 rounded-lg">
              <svg className="h-6 w-6 text-[#F05A28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          }
        />
        <DashboardCard
          title="Tasa de Abandono"
          value="2.4%"
          change="-3.5%"
          isPositive={true}
          icon={
            <div className="bg-[#F05A28]/20 p-3 rounded-lg">
              <svg className="h-6 w-6 text-[#F05A28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-[#161A25] rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Revenue Overview</h2>
            <select className="bg-gray-800 text-gray-300 text-sm rounded-lg px-3 py-1.5 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 w-full flex items-end justify-between px-2">
            {[35, 55, 40, 70, 85, 60, 45, 75, 50, 65, 80, 55].map((height, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-6 bg-gradient-to-t from-purple-600 to-blue-500 rounded-t-sm"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-400 mt-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#161A25] rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Top Products</h2>
            <button className="text-sm text-gray-400 hover:text-white">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: "Product A", category: "Electronics", sales: "$12,500", percentage: 35 },
              { name: "Product B", category: "Clothing", sales: "$8,200", percentage: 25 },
              { name: "Product C", category: "Accessories", sales: "$6,700", percentage: 20 },
              { name: "Product D", category: "Home Goods", sales: "$4,500", percentage: 15 },
            ].map((product, index) => (
              <div key={index} className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center text-white font-medium">
                  {product.name.charAt(0)}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">{product.name}</p>
                      <p className="text-xs text-gray-400">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">{product.sales}</p>
                      <div className="flex items-center justify-end">
                        <div className="h-1 w-16 bg-gray-700 rounded-full mt-1">
                          <div
                            className="h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                            style={{ width: `${product.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-400 ml-2">{product.percentage}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardCard({
  title,
  value,
  change,
  isPositive,
  icon,
}: {
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: React.ReactNode
}) {
  return (
    <motion.div 
      className="bg-[#161A25] p-4 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h3 className="text-xl font-bold text-white mt-1">{value}</h3>
          <div className={`flex items-center mt-2 ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>
        {icon}
      </div>
    </motion.div>
  )
}

