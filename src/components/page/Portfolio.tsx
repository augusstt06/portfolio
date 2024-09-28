'use client'
import { Element } from 'react-scroll'

import { ABOUTME, CONTACT, PROJECT } from '@/constant'

import AboutMe from '@/components/template/AboutMe'
import Contact from '@/components/template/Contact'
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
      <Element name={CONTACT}>
        <Contact />
      </Element>
    </section>
  )
}
