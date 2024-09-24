import { useEffect, useRef } from 'react'

import {
  animateRandomLettersIn,
  animateRandomLettersOut,
  splitText,
} from '@/utils/animation/fade-in'

export default function TopSection() {
  const projectRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (projectRef.current) {
            if (entry.isIntersecting) {
              // 컴포넌트가 화면에 진입했을 때 애니메이션 실행
              splitText(projectRef.current)
              animateRandomLettersIn(projectRef.current)
            } else {
              // 컴포넌트가 화면에서 나갔을 때 반대 애니메이션 실행
              animateRandomLettersOut(projectRef.current)
            }
          }
        })
      },
      // 50% 이상 보이거나 사라질 때 트리거
      { threshold: 0.5 },
    )

    if (projectRef.current) {
      observer.observe(projectRef.current)
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current)
      }
    }
  }, [])
  return (
    <article className="relative text-2xl font-bold row-span-1">
      <h1
        ref={projectRef}
        className="top-1/3 md:left-20 xl:left-40 xxl:left-[30rem] left-8 xl:text-6xl absolute text-5xl uppercase"
      >
        Project
      </h1>
    </article>
  )
}
