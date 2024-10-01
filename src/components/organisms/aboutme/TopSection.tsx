import { type Dispatch, type SetStateAction } from 'react'

import TypingText from '@/components/molecules/animate/TypingText'

type Props = {
  setIsTopSectionEnd: Dispatch<SetStateAction<boolean>>
}
export default function TopSection(props: Props) {
  const { setIsTopSectionEnd } = props
  return (
    <article className="w-full relative text-2xl font-bold row-span-1">
      <div className="hidden md:block top-1/3 md:left-20 xl:left-40 xxl:left-[30rem] left-8 xl:text-6xl absolute space-y-5 text-2xl md:text-5xl text-[#2e2e2e]">
        <TypingText
          setIsTopSectionEnd={setIsTopSectionEnd}
          text="A Steadily growing Developer ."
          breakAfter="growing "
          highlightWord="growing"
          highlightClass={`text-[var(--main-color)] font-extrabold uppercase border-b-8 border-[var(--main-color)]`}
        />
      </div>
      {/* <div className="absolute left-1/2 -translate-x-1/2">dd</div> */}
      <div className="md:hiddenw-full h-full col-flex justify-center items-center text-4xl text-center text-[#2e2e2e] uppercase space-y-4">
        <p>
          A Steadily{' '}
          <span className="text-[var(--main-color)] border-b-8 border-[var(--main-color)]">
            growing
          </span>{' '}
        </p>
        <p>Developer .</p>
      </div>
    </article>
  )
}
