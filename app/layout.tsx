import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WoW Hub - Despegar',
  description: 'Plataforma central de conocimiento y gobernanza del Way of Working',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-wow-surface-soft text-wow-ink antialiased">
        {children}
      </body>
    </html>
  )
}
