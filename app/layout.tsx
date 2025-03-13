import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Consultora Dejavu',
  description: 'Transformando el impacto social',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
