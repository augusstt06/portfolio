import { SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si'

export default function Skills() {
  const badges = [
    {
      title: 'Typescript',
      icon: <SiTypescript className="text-[#3178C6] w-6 h-6" />,
      text: (
        <div className="text-left text-md korean-font space-y-3">
          <p>
            <span className={`text-[var(--main-color)]`}>유틸리티 타입</span>을
            활용한{' '}
            <span className={`text-[var(--main-color)]`}>타입 추론/단언</span>을
            사용해 코드 안정성을 높히는데 익숙합니다.
          </p>
          <p>
            특히, 유지보수/재사용성 향상을 위해{' '}
            <span className={`text-[var(--main-color)]`}>Generic</span>과{' '}
            <span className={`text-[var(--main-color)]`}>Type Alias</span>를
            사용해 비즈니스 로직을 모듈화하는 방법을 항상 고민하고 있습니다.
          </p>
        </div>
      ),
    },
    {
      title: 'React',
      icon: <SiReact className="text-[#61DAFB] w-6 h-6" />,
      text: (
        <div className="text-left text-md korean-font space-y-3">
          <p>
            <span className={`text-[var(--main-color)]`}>
              Atomic 디자인 패턴
            </span>
            과 <span className={`text-[var(--main-color)]`}>React Hook</span>을
            사용한 컴포넌트 단위 개발에 익숙합니다.
          </p>
          <p>
            <span className={`text-[var(--main-color)]`}>
              Redux, Zustand, Tanstack-Query
            </span>{' '}
            등 React 기반의 여러 라이브러리를 활용해 언제든 실사용이 가능하도록
            익히고 있습니다.
          </p>
        </div>
      ),
    },
    {
      title: 'Next.js',
      icon: <SiNextdotjs className="w-6 h-6" />,
      text: (
        <div className="text-left text-md korean-font space-y-3">
          <p>
            <span className={`text-[var(--main-color)]`}>SSR / CSR </span>을
            적재적소에 활용하여 어플리케이션을 개발할수 있습니다.
          </p>
          <p>
            API 요청 로직 분리 / 일원화를 위해{' '}
            <span className={`text-[var(--main-color)]`}>API Route</span> 를
            활용한 <span className={`text-[var(--main-color)]`}>BFF 패턴</span>
            을 적용해 개발하는것을 선호합니다.
          </p>
        </div>
      ),
    },
  ]

  return (
    <article className="relative h-auto lg:col-span-1 row-span-1">
      <div className="item-start lg:absolute lg:top-12 lg:left-24 xl:left-40 xxl:left-[30rem] lg:inline lg:space-y-10 flex flex-row justify-around">
        {badges.map((data) => (
          <div
            className={`group hover:h-[17rem] xl:hover:h-[15rem] hover:w-80 xl:hover:w-[23rem] hover:border-[var(--main-color)] simple-transition grid w-52 h-12 grid-cols-4 px-4 py-2 text-center text-lg border-2 rounded-lg cursor-pointer`}
            key={data.title}
          >
            <div className="col-span-1">{data.icon}</div>
            <div className="col-span-3">{data.title}</div>
            <div className="hidden p-3 group-hover:block col-span-4">
              {data.text}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
