'use client'

import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'

import { MAIN } from '@/constant'

import { useStepStore } from '@/app/store'
import Introduce from '@/components/page/Introduce'
import Main from '@/components/template/Main'

const Home: React.FC = () => {
  const { step, setStep } = useStepStore()
  const renderComponent = () => {
    switch (step) {
      case MAIN:
        return <Main />

      default:
        return <Introduce />
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
