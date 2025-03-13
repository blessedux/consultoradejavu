'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F0000] text-gray-200 p-4">
      <h1 className="text-5xl font-bold mb-4">¡Algo salió mal!</h1>
      <p className="mb-8 text-center max-w-md">
        Hubo un problema al cargar esta página. Por favor intenta nuevamente.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-purple-800 hover:bg-purple-700 rounded-md text-white transition-colors"
        >
          Intentar nuevamente
        </button>
        <Link href="/" className="px-6 py-3 border border-purple-800 hover:bg-purple-900 rounded-md text-white transition-colors">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
} 