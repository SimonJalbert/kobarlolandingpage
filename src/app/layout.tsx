import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kobarlo - Design to App in Seconds',
  description: 'Watch as our AI transforms static designs into stunning animations. No coding required.',
  metadataBase: new URL('https://kobarlo.com'),
  openGraph: {
    title: 'Kobarlo - Design to App in Seconds',
    description: 'Watch as our AI transforms static designs into stunning animations. No coding required.',
    url: 'https://kobarlo.com',
    siteName: 'Kobarlo',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kobarlo - AI Design Partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kobarlo - Design to App in Seconds',
    description: 'Watch as our AI transforms static designs into stunning animations. No coding required.',
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
      <head>
        <title>Kobarlo - Design to App in Seconds</title>
        <meta name="description" content="Watch as our AI transforms static designs into stunning animations. No coding required." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 