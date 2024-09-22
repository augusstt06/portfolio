import { type Dispatch, type SetStateAction } from 'react'

import TypingText from '@/components/molecules/animate/TypingText'

type Props = {
  setIsTopSectionEnd: Dispatch<SetStateAction<boolean>>
}
export default function TopSection(props: Props) {
  const { setIsTopSectionEnd } = props
  return (
    <article className="relative row-span-1 text-2xl font-bold">
      <div className="top-1/3 left-20 absolute space-y-5 text-5xl">
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
