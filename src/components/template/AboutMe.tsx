'use client'
import { useState } from 'react'

import { ABOUTME } from '@/constant'

import BottomSection from '@/components/organisms/aboutme/BottomSection'
import TopSection from '@/components/organisms/aboutme/TopSection'

export default function AboutMe() {
  const [isTopSectionEnd, setIsTopSectionEnd] = useState<boolean>(false)

  return (
    // FIXME: top-padding 조정하기
    <section
      id={ABOUTME}
      className="h-screen w-full pt-12 grid grid-rows-3 bg-red-600"
    >
      <TopSection setIsTopSectionEnd={setIsTopSectionEnd} />
      <BottomSection isTopSectionEnd={isTopSectionEnd} />
    </section>
  )
}
