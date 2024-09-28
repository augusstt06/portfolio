import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import { useRouter } from 'next/navigation'

import {
  addExitAnimation,
  animateHeaderText,
  animateSubParagraph,
  wrapTextInSpan,
} from '@/utils/animation/drop-down'

export default function DropDownText() {
  const router = useRouter()
  const clickHandler = () => {
    router.push('/portfolio')
  }
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

    return () => {
      subParagraphRef.current?.removeEventListener('click', () => {
        tl.play()
      })
    }
  }, [])

  return (
    <article className="justify-center w-3/4 col-flex abs-center space-y-8 block md:hidden">
      <div
        ref={headParagraphRef}
        className="mx-auto text-2xl leading-tight text-center text-black cursor-pointer"
      >
        <h1 className="w-full mb-6 text-5xl">Hi I&apos;m ChungYeon Kim</h1>
        <small className="text-4xl text-[var(--main-color)]">
          Frontend Developer
        </small>
      </div>
      <p
        ref={subParagraphRef}
        className="group text-center text-[#2e2e2e] text-lg opacity-0 mt-4 cursor-pointer hover:text-[var(--main-color)] simple-transition relative px-6 py-2"
        onClick={clickHandler}
      >
        Click to continue Viewing the Portfolio
        <span className="absolute inset-0 border-2 border-[var(--main-color)] transition-all duration-700 transform scale-x-0 origin-left group-hover:scale-x-100 pointer-events-none z-[-1] rounded-xl" />
      </p>
    </article>
  )
}
