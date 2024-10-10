import Introduce from '@/components/molecules/aboutme/Introduce'

type Props = {
  isTopSectionEnd: boolean
}

export default function BottomSection(props: Props) {
  const { isTopSectionEnd } = props

  return (
    <article
      className={`w-[100vw] row-span-2 ${isTopSectionEnd ? '' : 'opacity-0'} relative lg:grid lg:grid-cols-3 row-span-2 simple-transition lg:mt-0 space-y-3 lg:space-y-0`}
    >
      <Introduce />
    </article>
  )
}
