import { SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa6'

import SkillBox from './childs/SkillBox'

export default function Skills() {
  const badges = [
    {
      title: 'Typescript',
      color: '#3178c6',
      icon: <SiTypescript className="w-6 h-6 text-white" />,
    },
    {
      title: 'React',
      color: '#33bee3',
      icon: <SiReact className="w-6 h-6 text-white" />,
    },
    {
      title: 'Next.js',
      color: '#2e2e2e',
      icon: <SiNextdotjs className="w-6 h-6 text-white" />,
    },
    {
      title: 'Redux',
      color: '#764ABC',
      icon: <TbBrandRedux className="w-6 h-6 text-white" />,
    },
    {
      title: 'AWS',
      color: '#232F3E',
      icon: <FaAws className="w-6 h-6 text-white" />,
    },
  ]

  return (
    // <article className="relative h-auto lg:col-span-1 row-span-1 korean-font bg-indigo-300">
    <article className="relative h-auto lg:col-span-1 row-span-1 korean-font col-flex justify-center">
      {/* <div className="item-start lg:absolute lg:top-12 left-8 lg:left-26 xl:left-24 xxl:left-[30rem] lg:inline lg:space-y-16 row-flex justify-around"> */}
      <div className=" flex flex-row lg:flex-col justify-between items-center w-full h-2/3 lg:space-x-0 space-x-3">
        {badges.map((badge) => (
          <SkillBox
            key={badge.title}
            title={badge.title}
            color={badge.color}
            icon={badge.icon}
          />
        ))}
      </div>
    </article>
  )
}
