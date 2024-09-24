import { Element } from 'react-scroll'

import { ABOUTME, EXPERIENCE } from '@/constant'

import AboutMe from '@/components/template/AboutMe'
import Experience from '@/components/template/Experience'

export default function Portfoilo() {
  return (
    <section>
      <Element name={ABOUTME}>
        <AboutMe />
      </Element>

      <Element name={EXPERIENCE}>
        <Experience />
      </Element>
    </section>
  )
}
