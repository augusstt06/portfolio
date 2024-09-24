import { type Dispatch, type SetStateAction } from 'react'

import { MAIN_COLOR_TEXT } from '@/constant'

import TypingText from '@/components/molecules/animate/TypingText'

type Props = {
  setIsTopSectionEnd: Dispatch<SetStateAction<boolean>>
}
export default function TopSection(props: Props) {
  const { setIsTopSectionEnd } = props
  return (
    <article className="relative text-2xl font-bold row-span-1">
      <div className="top-1/3 md:left-20 xl:left-40 xxl:left-[30rem] left-8 xl:text-6xl absolute space-y-5 text-5xl">
        <TypingText
          setIsTopSectionEnd={setIsTopSectionEnd}
          text="A Steadily growing Developer ."
          breakAfter="growing "
          highlightWord="growing"
          highlightClass={`text-[${MAIN_COLOR_TEXT}] font-extrabold uppercase border-b-4 border-[${MAIN_COLOR_TEXT}]`}
        />
      </div>
    </article>
  )
}
