'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-900 to-indigo-800 py-20 px-6 text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://plus.unsplash.com/premium_photo-1664303246428-bd684ae01231?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZCUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
          alt="Learning background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Unlock Knowledge Wherever You Are with Our LMS
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10">
        Explore a World of Expert-Led Courses Across Diverse Fields, Designed for Your Unique Learning Style!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            variant="default"
            size="lg"
            className={cn(
              "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            )}
          >
            Start Your Learning Journey
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            )}
          >
            Explore Courses
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Expert Instructors', description: 'Learn from industry professionals' },
            { title: 'Flexible Schedule', description: 'Study at your own pace, anytime' },
            { title: 'Interactive Content', description: 'Engage with multimedia learning materials' },
          ].map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
