import { SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si'

import SkillBox from './childs/SkillBox'
import { useEffect, useRef, useState } from 'react'

export default function Skills() {
  const [clickSkill, setClickSkill] = useState<string>('')
  const skillBoxRef = useRef<HTMLDivElement | null>(null)

  const handleClickSkill = (skill: string) => {
    setClickSkill(skill)
  }

  const badges = [
    {
      title: 'Typescript',
      color: '#3178c6',
      icon: <SiTypescript className="w-6 h-6 text-white" />,
      text: (
        <div className="text-left text-sm md:text-md korean-font space-y-3">
          <p>
            유틸리티 타입을 활용한 타입 추론/단언을 사용해 코드 안정성을
            높히는데 익숙합니다.
          </p>
          <p>
            Generic과 Type Alias를 사용해 비즈니스 로직을 모듈화하는 방법을 항상
            고민하고 있습니다.
          </p>
        </div>
      ),
    },
    {
      title: 'React',
      color: '#33bee3',
      icon: <SiReact className="w-6 h-6 text-white" />,
      text: (
        <div className="text-left text-sm md:text-md korean-font space-y-3">
          <p>
            Atomic 디자인 패턴과 React Hook을 사용한 컴포넌트 단위 개발에
            익숙합니다.
          </p>
          <p>
            Redux, Zustand, Tanstack-Query 등 React 기반의 라이브러리를
            프로젝트에 적극적으로 사용하고 있습니다.
          </p>
        </div>
      ),
    },
    {
      title: 'Next.js',
      color: '#2e2e2e',
      icon: <SiNextdotjs className="w-6 h-6 text-white" />,
      text: (
        <div className="text-left text-sm md:text-md korean-font space-y-3">
          <p>
            SSR / CSR을 적재적소에 활용하여 어플리케이션을 개발할수 있습니다.
          </p>
          <p></p>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        skillBoxRef.current &&
        !skillBoxRef.current.contains(event.target as Node)
      ) {
        setClickSkill('')
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    // <article className="relative h-auto lg:col-span-1 row-span-1 korean-font bg-indigo-300">
    <article className="relative h-auto lg:col-span-1 row-span-1 korean-font col-flex justify-center">
      {/* <div className="item-start lg:absolute lg:top-12 left-8 lg:left-26 xl:left-24 xxl:left-[30rem] lg:inline lg:space-y-16 row-flex justify-around"> */}
      <div
        className=" flex flex-row lg:flex-col justify-between items-center w-full h-2/3 lg:space-x-0 space-x-3"
        ref={skillBoxRef}
      >
        {badges.map((badge) => (
          <SkillBox
            key={badge.title}
            title={badge.title}
            color={badge.color}
            icon={badge.icon}
            text={badge.text}
            clickSkill={clickSkill}
            clickHandler={handleClickSkill}
          />
        ))}
      </div>
    </article>
  )
}
