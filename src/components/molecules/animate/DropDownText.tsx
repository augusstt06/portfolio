import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import { useStepStore } from '@/app/store'
import {
  addExitAnimation,
  animateHeaderText,
  animateSubParagraph,
  setupClickHandler,
  wrapTextInSpan,
} from '@/utils/animation/drop-down'

export default function DropDownText() {
  const { setStep } = useStepStore()
  const headParagraphRef = useRef<HTMLParagraphElement>(null)
  const subParagraphRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!headParagraphRef.current || !subParagraphRef.current) return

    const h1 = headParagraphRef.current.querySelector('h1')
    const small = headParagraphRef.current.querySelector('small')

    wrapTextInSpan(h1)
    wrapTextInSpan(small)

    const tl = gsap.timeline({ delay: 0.5 })

    animateHeaderText(h1, small, tl)
    animateSubParagraph(subParagraphRef.current, tl)
    addExitAnimation(h1, small, subParagraphRef.current, tl)
    setupClickHandler(subParagraphRef.current, tl, setStep)

    return () => {
      subParagraphRef.current?.removeEventListener('click', () => {
        tl.play()
      })
    }
  }, [setStep])

  return (
    <article className="col-flex abs-center justify-center space-y-5">
      <div
        ref={headParagraphRef}
        className="cursor-pointer text-3xl max-w-2xl mx-auto leading-tight text-center text-[#9DF3C4]"
      >
        <h1 className="mb-6 text-5xl">Hi I&apos;m Chung Yeon Kim</h1>
        <small className="text-4xl">FrontEnd Developer</small>
      </div>
      <p
        ref={subParagraphRef}
        className="group text-center text-white text-lg opacity-0 mt-4 cursor-pointer hover:text-[#9DF3c4] simple-transition relative px-6 py-2"
      >
        Click to continue Viewing the Portfolio
        <span className="absolute inset-0 border-2 border-[#9DF3c4] transition-all duration-700 transform scale-x-0 origin-left group-hover:scale-x-100 pointer-events-none z-[-1] rounded-xl" />
      </p>
    </article>
  )
}
