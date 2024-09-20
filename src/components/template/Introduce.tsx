import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'

export default function Introduce() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'power2.out' },
      )
    }
  }, [])
  return (
    <section className="h-screen pt-20">
      <div ref={textRef} className="text-2xl font-bold">
        안녕하세요 김충연입니다
      </div>
    </section>
  )
}
