import { useEffect } from 'react'
import gsap from 'gsap'

export default function Loading() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })

    tl.to('.circle.inner', {
      opacity: 1,
      scale: 1.2,
      duration: 1.5,
      ease: 'power1.inOut',
      repeat: 1,
      yoyo: true,
    })

    tl.to(
      '.circle.outer',
      {
        opacity: 1,
        scale: 1.1,
        duration: 1.5,
        ease: 'power1.inOut',
        repeat: 1,
        yoyo: true,
      },
      '<',
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="circle inner w-16 h-16 border-2 border-white rounded-full absolute opacity-0"></div>
      <div className="circle outer w-24 h-24 border-2 border-white rounded-full relative opacity-0"></div>
    </div>
  )
}
