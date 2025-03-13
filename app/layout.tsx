import type { Metadata } from 'next'
import './globals.css'
import GlobalDebug from './global'

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <GlobalDebug />
        {children}
      </body>
    </html>
  )
}
