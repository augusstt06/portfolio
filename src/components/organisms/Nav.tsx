'use client'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import { ABOUTME, CONTACT, MAIN, PROJECT } from '@/constant'

import { useStepStore } from '@/app/store'

export default function Nav() {
  const { step, setStep } = useStepStore()
  const [activeMenu, setActiveMenu] = useState(ABOUTME)

  const menus = [
    { title: MAIN },
    { title: ABOUTME },
    { title: PROJECT },
    { title: CONTACT },
  ]

  useEffect(() => {
    const sections = menus.map((menu) => document.getElementById(menu.title))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id)
          }
        })
      },
      // 50%가 보일 때 트리거
      { threshold: 0.5 },
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [menus])

  const clickHandler = (menu: string) => {
    setStep(menu)
  }

  const isButtonDisabled = step === MAIN

  return (
    <nav
      className={`fixed w-full h-20 grid grid-cols-5 transition-opacity duration-1000 ease-in-out ${step !== MAIN ? 'opacity-100' : 'opacity-0'} z-50`}
    >
      <section className="relative grid-center grid grid-cols-4 col-start-2 col-end-5">
        {menus.map((data) => (
          <Link key={data.title} to={data.title} smooth={true} duration={500}>
            <button
              disabled={isButtonDisabled}
              onClick={() => {
                clickHandler(data.title)
              }}
              className={`relative w-[10rem] h-16 transition-colors duration-300 text-center hover:text-[var(--main-color)]
                ${activeMenu === data.title ? `text-[var(--main-color)]` : 'text-white'}
              `}
            >
              {data.title}
              <span
                className={`absolute left-0 bottom-0 h-1 bg-[var(--main-color)] transition-all duration-300 transform ${activeMenu === data.title ? 'w-full' : 'w-0'}`}
              />
            </button>
          </Link>
        ))}
      </section>
    </nav>
  )
}
