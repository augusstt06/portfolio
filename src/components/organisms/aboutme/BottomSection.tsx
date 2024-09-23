import Introduce from '@/components/molecules/aboutme/Introduce'
import Skills from '@/components/molecules/aboutme/Skills'
type Props = {
  isTopSectionEnd: boolean
}

export default function BottomSection(props: Props) {
  const { isTopSectionEnd } = props

  return (
    <article className="relative grid grid-cols-3 row-span-2">
      <Skills />
      <Introduce isTopSectionEnd={isTopSectionEnd} />
    </article>
  )
}
