'use client'
import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Korbarlo - The agent who animates your ideas',
  description: 'Transform your ideas into stunning designs with Korbarlo, your AI design partner.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="relative w-full">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
          <div className="animate-float-delayed absolute top-40 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          {/* Logo Animation */}
          <div className="mb-8 relative w-24 h-24 mx-auto">
            <div className="animate-pulse absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50" />
            <div className="relative w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-4xl">K</span>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Idea to design in seconds.
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Korbarlo is your superhuman design partner. Start for free today.
          </p>

          {/* Input Section */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-2">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Ask Korbarlo to create a design..."
                className="w-full bg-transparent border-0 text-white placeholder-gray-400 focus:ring-0 text-lg py-4 px-6"
              />
              <button className="absolute right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
                Create
              </button>
            </div>
          </div>

          {/* Example Tags */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Brand identity', 'UI design', 'Logo design', 'Web design'].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
              >
                {tag} ↗
              </button>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-24 flex justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold">140,000+</div>
              <div className="text-gray-400">Designers using Korbarlo</div>
            </div>
            <div className="h-12 w-px bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-black"
                  />
                ))}
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2 text-gray-400">4.9/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 