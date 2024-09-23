import Introduce from '@/components/molecules/aboutme/Introduce'
import Skills from '@/components/molecules/aboutme/Skills'
import DownArrow from '@/components/molecules/arrow/DownArrow'
type Props = {
  isTopSectionEnd: boolean
}

export default function BottomSection(props: Props) {
  const { isTopSectionEnd } = props

  return (
    <article
      className={`${isTopSectionEnd ? '' : 'opacity-0'} relative lg:grid lg:grid-cols-3 row-span-2 simple-transition mt-5 lg:mt-0 space-y-5 lg:space-y-0`}
    >
      <Skills />
      <Introduce />
      <DownArrow />
    </article>
  )
}
