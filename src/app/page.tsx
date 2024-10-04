'use client'

import 'tailwindcss/tailwind.css'

// import { MAIN } from '@/constant'

// import { useStepStore } from '@/app/store'
// import Portfoilo from '@/components/page/Portfolio'
import Main from '@/components/template/Main'

const Home: React.FC = () => {
  // const renderComponent = () => {
  //   switch (step) {
  //     case MAIN:
  //       return <Main />

  //     default:
  //       return <Portfoilo />
  //   }
  // }

  return (
    // <main className="bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover h-[100vh] w-[100vw]">
    <main className="min-h-screen w-full">
      <Main />
    </main>
    // </main>
  )
}

export default Home
