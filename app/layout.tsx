import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZenMind - Seu Consultor Financeiro via WhatsApp',
  description: 'Democratizamos o acesso a consultoria financeira através de IA. Ajudamos brasileiros a gerenciar melhor seu dinheiro, poupar mais e evitar dívidas.',
  keywords: 'consultor financeiro, whatsapp, inteligência artificial, poupança, controle financeiro, consultoria financeira, finanças pessoais, brasil',
  authors: [{ name: 'ZenMind' }],
  openGraph: {
    title: 'ZenMind - Seu Consultor Financeiro via WhatsApp',
    description: 'Democratizamos o acesso a consultoria financeira através de IA. Ajudamos brasileiros a gerenciar melhor seu dinheiro.',
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