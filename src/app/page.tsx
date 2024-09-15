'use client'

import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'tailwindcss/tailwind.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Home: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 100%',
          end: 'bottom 30%',
          scrub: true,
          markers: true,
        },
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-screen flex flex-col items-center justify-center ">
        <div ref={textRef} className="text-3xl font-bold text-blue-600 mb-8">
          Scroll Down to Animate Me!
        </div>
        <div className="h-[150vh]" />
      </div>
    </div>
  )
}

export default Home
