import { type Dispatch, type SetStateAction } from 'react'

import FadeInText from '@/components/molecules/animate/FadeInText'

type Props = {
  setIsTopSectionEnd: Dispatch<SetStateAction<boolean>>
}
export default function TopSection(props: Props) {
  const { setIsTopSectionEnd } = props

  return (
    <article className="relative text-2xl font-bold row-span-1">
      <FadeInText
        text="Project"
        className="md:block hidden top-1/4 md:left-20 xl:left-40 xxl:left-[30rem] left-8 xl:text-6xl absolute text-5xl uppercase text-[#2e2e2e]"
        onAnimationEnd={() => {
          setIsTopSectionEnd(true)
        }}
      />
      <div className="md:hidden w-full h-full items-left justify-center pl-12 text-4xl text-left text-[#2e2e2e] uppercase space-y-4">
        <p>project</p>
      </div>
    </article>
  )
}
