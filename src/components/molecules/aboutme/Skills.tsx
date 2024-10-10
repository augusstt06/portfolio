import { SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa6'

import SkillBox from './childs/SkillBox'

export default function Skills() {
  const badges = [
    {
      title: 'Typescript',
      color: '#3178c6',
      icon: <SiTypescript className="w-4 h-4 text-white" />,
    },
    {
      title: 'React',
      color: '#33bee3',
      icon: <SiReact className="w-4 h-4 text-white" />,
    },
    {
      title: 'Next.js',
      color: '#2e2e2e',
      icon: <SiNextdotjs className="w-4 h-4 text-white" />,
    },
    {
      title: 'Redux',
      color: '#764ABC',
      icon: <TbBrandRedux className="w-4 h-4 text-white" />,
    },
    {
      title: 'AWS',
      color: '#232F3E',
      icon: <FaAws className="w-4 h-4 text-white" />,
    },
  ]

  return (
    <article className="h-auto lg:col-span-1 row-span-1 korean-font row-flex justify-center w-full md:w-2/3">
      <div className=" flex flex-row justify-between items-center w-full h-2/3 lg:space-x-0 space-x-3">
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
