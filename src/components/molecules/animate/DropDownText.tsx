import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useRouter } from 'next/navigation' // next/navigation으로 유지

import {
  addExitAnimation,
  animateHeaderText,
  animateSubParagraph,
  wrapTextInSpan,
} from '@/utils/animation/drop-down'
import Loader from '@/components/atom/animate/Loader'

export default function DropDownText() {
  const router = useRouter()

  // 페이지 전환 중일 때 fallback 화면을 보여주기 위한 상태
  const [isNavigating, setIsNavigating] = useState(false)

  const headParagraphRef = useRef<HTMLParagraphElement>(null)
  const subParagraphRef = useRef<HTMLDivElement>(null)

  const clickHandler = () => {
    setIsNavigating(true)

    router.push('/portfolio')
  }

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

  if (isNavigating) {
    return <Loader />
  }

  return (
    <article className="w-3/4 abs-center space-y-12 col-flex">
      <div
        ref={headParagraphRef}
        className="mx-auto leading-tight text-center cursor-pointer"
      >
        <h1 className="w-full mb-6 text-3xl md:text-5xl">
          Hi I&apos;m ChungYeon Kim
        </h1>
        <small className="text-2xl md:text-4xl">Frontend Developer</small>
      </div>
      <div
        ref={subParagraphRef}
        className="relative inline-block text-center cursor-pointer"
        onClick={clickHandler}
      >
        <button className="relative bg-[#f7f7f3] px-4 py-2 rounded-md text-[#2b2f4b]">
          Viewing the Portfolio
        </button>

        <div className="absolute inset-0 animate-pulse rounded-lg"></div>
      </div>
    </article>
  )
}
