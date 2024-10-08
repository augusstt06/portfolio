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
    <section
      id={CONTACT}
      className="h-screen col-flex justify-center space-y-10"
    >
      <FadeInText
        text="develop and grow passionately"
        className="text-4xl md:text-5xl text-center uppercase md:w-2/3"
        onAnimationEnd={handleAnimationEnd}
        onResetState={handleResetAnimation}
      />

      <div
        className={`${isAnimationEnd ? 'opacity-100' : 'opacity-0'} col-flex justify-around mx-auto simple-transition space-y-6`}
      >
        <div className="row-flex justify-center w-full gap-16 ">
          <Link href={GIT}>
            <FaGithubSquare className="w-16 md:w-20 h-16 md:h-20 hover:scale-[1.2] simple-transition cursor-pointer" />
          </Link>

          <BiLogoGmail
            className="w-16 md:w-20 h-16 md:h-20 hover:scale-[1.2] simple-transition cursor-pointer"
            onClick={handleConnectEmail}
          />
        </div>
        <div className="w-full text-center">
          <p className="w-full text-3xl md:text-4xl">Thank you for visit</p>
          <p className="text-xs">Copyright 2024 ChungYeonKim</p>
        </div>
      </div>
    </section>
  )
}
