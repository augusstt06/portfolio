import { useState } from 'react'

import BottomSection from '@/components/organisms/aboutme/BottomSection'
import TopSection from '@/components/organisms/aboutme/TopSection'

export default function AboutMe() {
  const [isTopSectionEnd, setIsTopSectionEnd] = useState<boolean>(false)

  return (
    <section className="h-screen pt-20 grid grid-rows-3">
      <TopSection setIsTopSectionEnd={setIsTopSectionEnd} />
      <BottomSection isTopSectionEnd={isTopSectionEnd} />
    </section>
  )
}
