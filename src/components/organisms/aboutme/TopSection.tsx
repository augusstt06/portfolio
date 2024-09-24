import { type Dispatch, type SetStateAction } from 'react'

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
          highlightClass={`text-[var(--main-color)] font-extrabold uppercase border-b-8 border-[var(--main-color)]`}
        />
      </div>
    </article>
  )
}
