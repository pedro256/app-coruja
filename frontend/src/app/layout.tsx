import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'

const font = Ubuntu({ weight:'400',preload:false })

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
      <body className={font.className}>{children}</body>
    </html>
  )
}
