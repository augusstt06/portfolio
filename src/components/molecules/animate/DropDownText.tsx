import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import {
  addExitAnimation,
  animateHeaderText,
  animateSubParagraph,
  wrapTextInSpan,
} from '@/utils/animation/drop-down'

export default function DropDownText() {
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
    <article className="justify-center col-flex abs-center space-y-5">
      {/* FIXME: 넓이 조절 */}
      <div
        ref={headParagraphRef}
        className="cursor-pointer text-2xl max-w-2/3 mx-auto leading-tight text-center text-black"
      >
        <h1 className="mb-6 text-5xl">Passionately Developing</h1>
        <small className="text-4xl text-[var(--main-color)]">
          and Growing Together.
        </small>
      </div>
      {/* <p
        ref={subParagraphRef}
        className="group text-center text-white text-lg opacity-0 mt-4 cursor-pointer hover:text-[var(--main-color)] simple-transition relative px-6 py-2"
      >
        Click to continue Viewing the Portfolio
        <span className="absolute inset-0 border-2 border-[var(--main-color)] transition-all duration-700 transform scale-x-0 origin-left group-hover:scale-x-100 pointer-events-none z-[-1] rounded-xl" />
      </p> */}
    </article>
  )
}
