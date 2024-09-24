import { PROJECT } from '@/constant'

import BottomSection from '@/components/organisms/project/BottomSection'
import TopSection from '@/components/organisms/project/TopSection'

export default function Project() {
  return (
    <section id={PROJECT} className="h-screen pt-20 grid grid-rows-4">
      <TopSection />
      <BottomSection />
    </section>
  )
}
