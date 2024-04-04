import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const font = Ubuntu({ weight: '400', preload: false })

export const metadata: Metadata = {
  title: 'SGA',
  description: 'Sistema Gerenciador de Autenticação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}
        <Toaster />
      </body>

    </html>
  )
}
