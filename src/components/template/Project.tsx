import { useEffect, useRef } from 'react'

import { PROJECT } from '@/constant'

import { animateRandomLetters, splitText } from '@/utils/animation/fade-in'

export default function Project() {
  const projectRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (projectRef.current) {
      splitText(projectRef.current)
      animateRandomLetters(projectRef.current)
    }
  }, [])

  return (
    <section id={PROJECT} className="grid h-screen grid-rows-4 pt-20">
      <article className="relative row-span-1 text-2xl font-bold bg-red-400">
        <h1
          ref={projectRef}
          className="top-1/3 md:left-20 xl:left-40 xxl:left-[30rem] left-8 xl:text-6xl absolute text-5xl uppercase"
        >
          Project
        </h1>
      </article>
    </section>
  )
}
