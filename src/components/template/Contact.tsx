'use client'
import { useCallback, useState } from 'react'

import Link from 'next/link'
import { BiLogoGmail } from 'react-icons/bi'
import { FaGithubSquare } from 'react-icons/fa'

import { CONTACT, GIT, MAIL } from '@/constant'

import FadeInText from '@/components/molecules/animate/FadeInText'

export default function Contact() {
  const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(false)
  const handleAnimationEnd = () => {
    setIsAnimationEnd(true)
  }

  const handleResetAnimation = () => {
    setIsAnimationEnd(false)
  }
  const handleConnectEmail = useCallback(() => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(MAIL)}`

    window.open(gmailComposeUrl, '_blank')
  }, [])

  return (
    <section id={CONTACT} className="relative grid h-screen grid-rows-4 pt-20">
      <article className="left-1/2 top-1/3 absolute h-2/3 -translate-x-1/2 space-y-12">
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
            <Link href={GIT}>
              <FaGithubSquare className="w-20 h-20 hover:scale-[1.2] simple-transition cursor-pointer" />
            </Link>

            <BiLogoGmail
              className="w-20 h-20 hover:scale-[1.2] simple-transition cursor-pointer"
              onClick={handleConnectEmail}
            />
          </div>
          <div className="w-full text-center">
            <p className="w-full text-4xl">Thank you for visit</p>
            <p className="text-xs">Copyright 2024 ChungYeonKim</p>
          </div>
        </div>
      </article>
    </section>
  )
}
