import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F0000] text-gray-200 p-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-8">Página no encontrada</h2>
      <p className="mb-8 text-center max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link href="/" className="px-6 py-3 bg-purple-800 hover:bg-purple-700 rounded-md text-white transition-colors">
        Volver al inicio
      </Link>
    </div>
  );
} 