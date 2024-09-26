import { CONTACT } from '@/constant'

import DropDownText from '@/components/molecules/animate/DropDownText'

export default function Contact() {
  return (
    <section id={CONTACT} className="h-screen pt-20 grid grid-rows-4 relative">
      <h1>Contact</h1>
      <DropDownText />
      {/* FIXME: 깃허브, 메일, 전화번호 */}
      {/* QR 코드? */}
    </section>
  )
}
