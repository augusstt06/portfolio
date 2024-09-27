import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Cube from '@/components/molecules/animate/Cube'

export default function Main() {
  const router = useRouter()
  const [animationFinished, setAnimationFinished] = useState(false)
  const onAnimationFinished = () => {
    setAnimationFinished(true)
  }

  return (
    <section className={'main'}>
      <Cube onAnimationFinished={onAnimationFinished} />

      <button
        disabled={!animationFinished}
        className={`${animationFinished ? 'opacity-100' : 'opacity-0'} absolute simple-transition top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black hover:text-[var(--main-color)] text-4xl space-y-4 py-4 px-4 hover:scale-[1.1]`}
        onClick={() => {
          router.push('/portfolio')
        }}
      >
        <p>Click to Viewing the Portfolio</p>
      </button>
    </section>
  )
}
