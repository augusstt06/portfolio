import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import { INTRODUCE } from '@/constant'

import { useStepStore } from '@/app/store'

export default function MainText() {
  const { setStep } = useStepStore()
  const headParagraphRef = useRef<HTMLParagraphElement>(null)
  const subParagraphRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!headParagraphRef.current || !subParagraphRef.current) return

    const h1 = headParagraphRef.current.querySelector('h1')
    const small = headParagraphRef.current.querySelector('small')

    if (h1) {
      const h1Text = h1.innerText
      h1.innerHTML = `<span style="display:inline-block">${h1Text}</span>`
    }

    if (small) {
      const smallText = small.innerText
      small.innerHTML = `<span style="display:inline-block">${smallText}</span>`
    }

    const tl = gsap.timeline({
      delay: 0.5,
    })

    tl.addLabel('enter')

    if (h1) {
      tl.fromTo(
        h1.querySelector('span'),
        0.6,
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, ease: 'Circ.easeOut' },
      )
    }

    tl.addLabel('h1Complete')

    if (small) {
      tl.fromTo(
        small.querySelector('span'),
        0.6,
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, ease: 'Circ.easeOut' },
        'h1Complete',
      )
    }

    tl.fromTo(
      subParagraphRef.current,
      1,
      { opacity: 0 },
      { opacity: 0.6, ease: 'Linear.easeNone' },
    )

    tl.addPause()
    tl.addLabel('exit')

    tl.to(subParagraphRef.current, 0.5, { opacity: 0, ease: 'Linear.easeNone' })

    if (h1) {
      tl.to(
        h1.querySelector('span'),
        0.4,
        { yPercent: -200, opacity: 0, ease: 'Circ.easeIn' },
        'exit',
      )
    }

    if (small) {
      tl.to(
        small.querySelector('span'),
        0.4,
        { yPercent: -200, opacity: 0, ease: 'Circ.easeIn' },
        'exit',
      )
    }

    tl.to(subParagraphRef.current, { duration: 0.4, y: 100 })

    subParagraphRef.current.addEventListener('click', () => {
      // reverse는 되감기라 아래로 떨어짐
      void tl.play().then(() => {
        setStep(INTRODUCE)
      })
    })

    return () => {
      subParagraphRef.current?.removeEventListener('click', () => {
        tl.play()
      })
    }
  }, [])

  return (
    <article className="col-flex justify-center abs-center space-y-5">
      <div
        ref={headParagraphRef}
        className="cursor-pointer text-3xl max-w-2xl mx-auto leading-tight text-center text-[#9DF3C4]"
      >
        <h1 className="text-5xl mb-6">Hi I&apos;m Chung Yeon Kim</h1>
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
