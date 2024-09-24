import { PROJECT } from '@/constant'

import TopSection from '@/components/organisms/project/TopSection'

export default function Project() {
  return (
    <section id={PROJECT} className="grid h-screen grid-rows-4 pt-20">
      <TopSection />
    </section>
  )
}
