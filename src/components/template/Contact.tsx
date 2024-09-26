import { useState } from 'react'

import { BiLogoGmail } from 'react-icons/bi'
import { FaGithubSquare } from 'react-icons/fa'

import { CONTACT } from '@/constant'

import FadeInText from '@/components/molecules/animate/FadeInText'

export default function Contact() {
  const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(false)
  const handleAnimationEnd = () => {
    setIsAnimationEnd(true)
  }

  const handleResetAnimation = () => {
    setIsAnimationEnd(false)
  }
  return (
    <section id={CONTACT} className="relative grid h-screen grid-rows-4 pt-20">
      <article className="left-1/2 top-1/3 absolute h-full -translate-x-1/2 bg-red-500">
        <FadeInText
          text="develop and grow passionately"
          className=" text-5xl text-center text-[var(--main-color)] uppercase"
          onAnimationEnd={handleAnimationEnd}
          onResetState={handleResetAnimation}
        />

        <div
          className={`${isAnimationEnd ? 'opacity-100' : 'opacity-0'} text-black col-flex justify-around w-[40rem] mx-auto simple-transition space-y-6`}
        >
          <div className="row-flex justify-center w-full gap-16">
            <FaGithubSquare className="w-20 h-20 hover:scale-[1.2] simple-transition cursor-pointer" />
            <BiLogoGmail className="w-20 h-20 hover:scale-[1.2] simple-transition cursor-pointer" />
          </div>
          <div className="w-full text-center bg-red-100">
            <p className="w-full text-4xl">Thank you for visit</p>
            <p className="text-sm">Copyright 2024 ChungYeonKim - aug</p>
          </div>
        </div>
      </article>
    </section>
  )
}
