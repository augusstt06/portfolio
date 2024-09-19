'use client'

import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'

import { INTRODUCE, MAIN } from '@/constant'

import { useStepStore } from '@/app/store'
import Introduce from '@/components/template/Introduce'
import Main from '@/components/template/Main'

const Home: React.FC = () => {
  const { step, setStep } = useStepStore()
  const renderComponent = () => {
    switch (step) {
      case MAIN:
        return <Main />
      case INTRODUCE:
        return <Introduce />
      default:
        return <div>Error</div>
    }
  }
  useEffect(() => {
    setStep(MAIN)
  }, [])
  return (
    // <main className="bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover h-[100vh] w-[100vw]">
    <main className="min-h-screen bg-[#352F44]">{renderComponent()}</main>
    // </main>
  )
}

export default Home
