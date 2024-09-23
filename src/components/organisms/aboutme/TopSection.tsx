import { type Dispatch, type SetStateAction } from 'react'

import TypingText from '@/components/molecules/animate/TypingText'

type Props = {
  setIsTopSectionEnd: Dispatch<SetStateAction<boolean>>
}
export default function TopSection(props: Props) {
  const { setIsTopSectionEnd } = props
  return (
    <article className="relative text-2xl font-bold row-span-1">
      <div className="absolute text-5xl top-1/3 md:left-20 space-y-5 left-8">
        <TypingText
          setIsTopSectionEnd={setIsTopSectionEnd}
          text="A Steadily growing Developer ."
          breakAfter="growing "
          highlightWord="growing"
          highlightClass="text-[#9DF3c4] font-extrabold uppercase border-b-4 border-[#9DF3c4]"
        />
      </div>
    </article>
  )
}
