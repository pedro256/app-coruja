import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { SessionProvider } from 'next-auth/react'
import AuthProvider from '@/providers/AuthProvider/AuthProvider'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from 'next-auth'

const font = Ubuntu({ weight: '400', preload: false })

export const metadata: Metadata = {
  title: 'SGA',
  description: 'Sistema Gerenciador de Autenticação',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="pt-br">
      <AuthProvider session={session}>
        <body className={font.className}>{children}
          <Toaster />
        </body>
      </AuthProvider>


    </html>
  )
}
