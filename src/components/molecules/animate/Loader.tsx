import { useEffect } from 'react'

import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

type Props = {
  setIsComplete: (complete: boolean) => void
}

export default function Loader({ setIsComplete }: Props) {
  useEffect(() => {
    const randomStop = Math.random() * (0.8 - 0.3) + 0.3
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true)
      },
    })

    tl.to('.text', {
      duration: 2,
      text: 'yarn add chungyeonkim@frontend-developer',
    })
      .from('.progress-bar', {
        duration: 0.5,
        opacity: 0,
      })
      .to('.progress', {
        duration: 1,
        width: `${randomStop * 100}%`,
      })
      .to('.progress', {
        duration: 1 - randomStop,
        width: '100%',
      })
  }, [setIsComplete])

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="wrapper w-full text-center">
        <div className="text text-3xl font-semibold mb-4 text-[var(--main-color)]"></div>
        <div className="progress-bar w-1/3 min-w-[150px] h-2 bg-red-800 mx-auto">
          <div className="progress w-0 h-full bg-[#2e2e2e]"></div>
        </div>
      </div>
    </div>
  )
}
