import { Element } from 'react-scroll'

import { ABOUTME, EXPERIENCE } from '@/constant'

import Experience from '../template/Experience'

import AboutMe from '@/components/template/AboutMe'

export default function Introduce() {
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
