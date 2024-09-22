import Introduce from '@/components/molecules/aboutme/Introduce'
type Props = {
  isTopSectionEnd: boolean
}

export default function BottomSection(props: Props) {
  const { isTopSectionEnd } = props

  return (
    <article className="relative row-span-2">
      <Introduce isTopSectionEnd={isTopSectionEnd} />
    </article>
  )
}
