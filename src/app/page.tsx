'use client'

import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'

import { ABOUTME, MAIN } from '@/constant'

import { useStepStore } from '@/app/store'
import AboutMe from '@/components/template/AboutMe'
import Main from '@/components/template/Main'

const Home: React.FC = () => {
  const { step, setStep } = useStepStore()
  const renderComponent = () => {
    switch (step) {
      case MAIN:
        return <Main />
      case ABOUTME:
        return <AboutMe />
      default:
        return <div>Error</div>
    }
  }
  useEffect(() => {
    setStep(MAIN)
  }, [])
  return (
    // <main className="bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover h-[100vh] w-[100vw]">
    <main className="min-h-screen">{renderComponent()}</main>
    // </main>
  )
}

export default Home
