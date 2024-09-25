import { SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si'

import SkillBox from './childs/SkillBox'

export default function Skills() {
  const badges = [
    {
      title: 'Typescript',
      color: '#3178c6',
      icon: <SiTypescript className="w-6 h-6 text-white" />,
      text: (
        <div className="text-left text-md korean-font space-y-3">
          <p>
            유틸리티 타입을 활용한 타입 추론/단언을 사용해 코드 안정성을
            높히는데 익숙합니다.
          </p>
          <p>
            특히, 유지보수/재사용성 향상을 위해 Generic과 Type Alias를 사용해
            비즈니스 로직을 모듈화하는 방법을 항상 고민하고 있습니다.
          </p>
        </div>
      ),
    },
    {
      title: 'React',
      color: '#33bee3',
      icon: <SiReact className="w-6 h-6 text-white" />,
      text: (
        <div className="text-left text-md korean-font space-y-3">
          <p>
            Atomic 디자인 패턴과 React Hook을 사용한 컴포넌트 단위 개발에
            익숙합니다.
          </p>
          <p>
            Redux, Zustand, Tanstack-Query 등 React 기반의 여러 라이브러리를
            활용해 언제든 실사용이 가능하도록 익히고 있습니다.
          </p>
        </div>
      ),
    },
    {
      title: 'Next.js',
      color: '#2e2e2e',
      icon: <SiNextdotjs className="w-6 h-6 text-white" />,
      text: (
        <div className="text-left text-md korean-font space-y-3">
          <p>
            SSR / CSR을 적재적소에 활용하여 어플리케이션을 개발할수 있습니다.
          </p>
          <p>
            API 요청 로직 분리 / 일원화를 위해 API Route를 활용한 BFF 패턴 을
            적용해 개발하는것을 선호합니다.
          </p>
        </div>
      ),
    },
  ]

  return (
    <article className="relative h-auto lg:col-span-1 row-span-1 korean-font">
      <div className="item-start lg:absolute lg:top-12 lg:left-24 xl:left-40 xxl:left-[30rem] lg:inline lg:space-y-16 flex flex-row justify-around">
        {badges.map((badge) => (
          <SkillBox
            key={badge.title}
            title={badge.title}
            color={badge.color}
            icon={badge.icon}
            text={badge.text}
          />
        ))}
      </div>
    </article>
  )
}
