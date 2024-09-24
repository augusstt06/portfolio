import { Element } from 'react-scroll'

import { ABOUTME, PROJECT } from '@/constant'

import AboutMe from '@/components/template/AboutMe'
import Project from '@/components/template/Project'

export default function Portfoilo() {
  return (
    <section>
      <Element name={ABOUTME}>
        <AboutMe />
      </Element>

      <Element name={PROJECT}>
        <Project />
      </Element>
    </section>
  )
}
