import { useState } from 'react'

import { ABOUTME } from '@/constant'

import BottomSection from '@/components/organisms/aboutme/BottomSection'
import TopSection from '@/components/organisms/aboutme/TopSection'

export default function AboutMe() {
  const [isTopSectionEnd, setIsTopSectionEnd] = useState<boolean>(false)

  return (
    <section id={ABOUTME} className="grid h-screen grid-rows-3 pt-20">
      <TopSection setIsTopSectionEnd={setIsTopSectionEnd} />
      <BottomSection isTopSectionEnd={isTopSectionEnd} />
    </section>
  )
}
