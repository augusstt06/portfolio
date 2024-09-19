'use client'

import 'tailwindcss/tailwind.css'
import Text from '../components/organisms/Text'

const Home: React.FC = () => {
  return (
    // <main className="bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover h-[100vh] w-[100vw]">
    <main className="min-h-screen bg-[#352F44]">
      <section className="">
        {/* <Split /> */}
        <Text />
      </section>
    </main>
    // </main>
  )
}

export default Home
