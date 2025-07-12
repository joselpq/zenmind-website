import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZenMind - Soluções Inteligentes para Negócios',
  description: 'Transformamos a comunicação empresarial com inteligência artificial e automação via WhatsApp.',
  keywords: 'whatsapp business, automação, inteligência artificial, chatbot, atendimento ao cliente',
  authors: [{ name: 'ZenMind' }],
  openGraph: {
    title: 'ZenMind - Soluções Inteligentes para Negócios',
    description: 'Transformamos a comunicação empresarial com inteligência artificial e automação via WhatsApp.',
    url: 'https://www.zenmind.com.br',
    siteName: 'ZenMind',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}