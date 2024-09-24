import { Element } from 'react-scroll'

import { ABOUTME, PROJECT } from '@/constant'

import AboutMe from '@/components/template/AboutMe'
import Experience from '@/components/template/Experience'

export default function Portfoilo() {
  return (
    <section>
      <Element name={ABOUTME}>
        <AboutMe />
      </Element>

      <Element name={PROJECT}>
        <Experience />
      </Element>
    </section>
  )
}
