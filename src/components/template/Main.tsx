// import { useState } from 'react'

// import { useRouter } from 'next/navigation'

// import Cube from '@/components/molecules/animate/Cube'
// import DropDownText from '@/components/molecules/animate/DropDownText'
// import { asciiArt } from '@/utils/console/ascii'

export default function Main() {
  // const router = useRouter()
  // const [animationFinished, setAnimationFinished] = useState(false)
  // const onAnimationFinished = () => {
  //   setAnimationFinished(true)
  // }
  // asciiArt()
  return (
    <section className={'main'}>
      {/* <div className="hidden md:block"> */}
      {/* <Cube onAnimationFinished={onAnimationFinished} /> */}
      {/* </div> */}
      {/* <DropDownText /> */}
      {/* <button
        disabled={!animationFinished}
        className={`md:block hidden ${animationFinished ? 'opacity-100' : 'md:opacity-0'} absolute simple-transition top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black hover:text-[var(--main-color)] text-4xl space-y-4 py-4 px-4 hover:scale-[1.1]`}
        onClick={() => {
          router.push('/portfolio')
        }}
      >
        <p>Click to Viewing the Portfolio</p>
      </button> */}
      <div className="relative inline-block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-pulse bg-white/50 rounded-lg"></div>
        <button className="relative border-2 border-white bg-black px-4 py-2 rounded-md">
          Continue
        </button>
      </div>
    </section>
  )
}
