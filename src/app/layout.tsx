import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Korbarlo - The agent who animates your ideas',
  description: 'Transform your ideas into stunning designs with Korbarlo, your AI design partner.',
  metadataBase: new URL('https://korbarlo.com'),
  openGraph: {
    title: 'Korbarlo - The agent who animates your ideas',
    description: 'Transform your ideas into stunning designs with Korbarlo, your AI design partner.',
    url: 'https://korbarlo.com',
    siteName: 'Korbarlo',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Korbarlo - AI Design Partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korbarlo - The agent who animates your ideas',
    description: 'Transform your ideas into stunning designs with Korbarlo, your AI design partner.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 