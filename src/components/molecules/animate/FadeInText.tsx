import React, { useEffect, useRef, useState } from 'react'

import {
  animateRandomLettersIn,
  animateRandomLettersOut,
  splitText,
} from '@/utils/animation/fade-in'

type Props = {
  text: string
  className?: string
  onAnimationEnd?: () => void
  onResetState?: () => void
}

export default function FadeInText(props: Props) {
  const { text, className, onAnimationEnd, onResetState } = props
  const textRef = useRef<HTMLHeadingElement>(null)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    if (isAnimated) return // 이미 애니메이션이 실행된 경우 중복 실행 방지
    if (onResetState) onResetState()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (textRef.current && entry.isIntersecting && !isAnimated) {
            splitText(textRef.current)
            animateRandomLettersIn(textRef.current, () => {
              setIsAnimated(true)
              if (onAnimationEnd) onAnimationEnd()
            })
          } else if (!entry.isIntersecting && isAnimated && textRef.current) {
            animateRandomLettersOut(textRef.current)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [onAnimationEnd, isAnimated])

  return (
    <h1 ref={textRef} className={className}>
      {text}
    </h1>
  )
}
