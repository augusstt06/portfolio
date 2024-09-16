import { useEffect, useRef } from 'react'

import gsap from 'gsap'

export default function Text() {
  const blockquoteRef = useRef<HTMLQuoteElement>(null)
  const noteRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!blockquoteRef.current || !noteRef.current) return

    const h1 = blockquoteRef.current.querySelector('h1')
    const small = blockquoteRef.current.querySelector('small')

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
      repeatDelay: 0.5,
      repeat: -1,
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
      noteRef.current,
      1,
      { opacity: 0 },
      { opacity: 0.6, ease: 'Linear.easeNone' },
    )

    tl.addPause()
    tl.addLabel('exit')

    // Animation for fading out and moving up the text
    tl.to(noteRef.current, 0.5, { opacity: 0, ease: 'Linear.easeNone' })

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

    noteRef.current.addEventListener('click', () => {
      tl.play()
    })

    return () => {
      noteRef.current?.removeEventListener('click', () => {
        tl.play()
      })
    }
  }, [])

  return (
    <article className="col-flex justify-center abs-center">
      <blockquote
        ref={blockquoteRef}
        className="cursor-pointer text-3xl max-w-lg mx-auto leading-tight text-center text-[#9DF3C4]"
      >
        <h1 className="text-5xl mb-4">Hi I&apos;m Chungyeon Kim</h1>
        <small className="text-4xl">FrontEnd Developer</small>
      </blockquote>
      <p
        ref={noteRef}
        className="text-center text-white text-lg opacity-0 mt-4 cursor-pointer hover:text-[#9DF3c4] simple-transition"
      >
        Continue to view my Portfolio
      </p>
    </article>
  )
}
