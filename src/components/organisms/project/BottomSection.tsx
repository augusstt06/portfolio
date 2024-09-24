import { useState } from 'react'

// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaGithub } from 'react-icons/fa'

import { CONTACT, GIT_PORTFOLIO, GIT_WEATHER } from '@/constant'

import Badge from '@/components/atom/badge/Badge'
import DownArrow from '@/components/molecules/arrow/DownArrow'
import { Carousel } from '@/components/molecules/carousel/Carousel'

type Props = {
  isTopSectionEnd: boolean
}
export default function BottomSection(props: Props) {
  const { isTopSectionEnd } = props
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsStacks = {
    megaEarn: ['React', 'Zustand', 'Tanstack-Query'],
    portfolio: ['Next.js', 'Zustand', 'gsap'],
    weather: ['Next.js', 'Open AI', 'Tanstack-Query'],
    groupware: ['Next.js', 'AWS', 'Redux'],
  }

  const routingGit = (key: number, url: string) => {
    if (key !== currentIndex) return
    router.push(url)
  }

  const cards = [
    {
      url: '/project/mega.png',
      title: <h1 className="sm:text-2xl text-lg">Mega Earn</h1>,
      subTitle: (
        <div className="sm:text-md text-sm">
          <span>React를 사용한 블록체인 웹 어플리케이션</span>
          <p className="text-xs">2024.03 ~ 2024.04</p>
        </div>
      ),
      description: (
        <div className="relative w-full pt-2 space-y-3 text-md">
          <p>블록체인 관련 이벤트 페이지와 admin 페이지를 개발했습니다</p>
          <p>
            서버측에서 다루는{' '}
            <span className={`text-[var(--main-color)]`}>bigint</span>와
            클라이언트에서 다루는 number 간{' '}
            <span className={`text-[var(--main-color)]`}>
              타입차이로 발생하는 버그 방지
            </span>
            를 위해 를 위해 양방향으로 전환 가능한 모듈을 개발해 사용했습니다.
          </p>
          <p>
            네트워크 변경시 기타 이벤트 발생을 제한하기 위한{' '}
            <span className={`text-[var(--main-color)]`}>Fallback UI</span>를
            사용, 5초 주기
            <span className={`text-[var(--main-color)]`}>polling</span>을 통한
            데이터 최신화, 최대 10회까지 리렌더링 되는 컴포넌트를{' '}
            <span className={`text-[var(--main-color)]`}>
              메모이제이션을 통해 2회까지 단축
            </span>
            시키는 등, 사용자 경험을 높히기 위해 노력했습니다.
          </p>
          <p>
            반복 사용이 잦은 UI에 대해서는 styled-component로 모듈화해
            유지보수가 용이하도록 했으며,{' '}
            <span className={`text-[var(--main-color)]`}>
              서버/클라이언트 상태 분리 및 데이터 캐싱
            </span>
            을 위해 Tanstack-Query를 사용했습니다.
          </p>
          <p className="text-xs text-red-300">
            📌 현재는 이벤트 종료 및 회사측의 레포지토리 접근 권한 변경으로
            열람이 제한되어있습니다.
          </p>
          <div className="bottom-4 row-flex md:fixed md:w-auto justify-around w-full gap-2 mt-12">
            {cardsStacks.megaEarn.map((data) => (
              <Badge title={data} key={data} />
            ))}
          </div>
        </div>
      ),
    },
    {
      url: '/project/portfolio.png',
      title: <h1 className="sm:text-2xl text-lg">Portfolio</h1>,
      subTitle: (
        <p className="sm:text-md text-sm">Next js를 사용한 포트폴리오 개발</p>
      ),
      description: (
        <div className="relative pt-2 space-y-3 text-md">
          <p>현재까지 공부한 내용을 바탕으로 제작한 포트폴리오 사이트입니다.</p>
          <p>
            <span className={`text-[var(--main-color)]`}>GSAP</span>를 사용해
            손쉽게 애니메이션을 구현하여 동적인 사용감을 주려고 노력했습니다.
          </p>
          <p>
            Atmoic 패턴을 적용해 컴포넌트의 재사용률을 향상하고 유지보수가
            용이하도록 했습니다.
          </p>
          <p>
            지속적으로 디자인 수정, 최적화를 진행하고, 내용이 수정 될때마다
            변경하여 배포해놓을 예정입니다.
          </p>
          <div
            className={`row-flex md:fixed bottom-16 justify-around simple-transition w-40 h-8 text-center border-2 rounded-lg cursor-pointer hover:bg-[#fff] hover:text-black`}
            onClick={() => {
              routingGit(1, GIT_PORTFOLIO)
            }}
          >
            <FaGithub className="w-6 h-6" />
            <p className="text-lg">GitHub Code</p>
          </div>
          <div className="bottom-4 row-flex md:fixed md:w-auto justify-around w-full gap-2 mt-12">
            {cardsStacks.portfolio.map((data) => (
              <Badge title={data} key={data} />
            ))}
          </div>
        </div>
      ),
    },
    {
      url: '/project/weather.png',
      title: <h1 className="sm:text-2xl text-lg">Weather AI</h1>,
      subTitle: (
        <p className="sm:text-md text-sm">
          Next.js를 사용한 날씨 + AI 어플리케이션
        </p>
      ),
      description: (
        <div className="relative pt-2 space-y-3 text-md">
          <p>
            날씨 앱을 사용하다가 아이디어가 떠올라 개발한 어플리케이션입니다.
          </p>
          <p>
            날씨 정보를{' '}
            <span className={`text-[var(--main-color)]`}>
              Open Weather Map API
            </span>
            에서 가져와 표시 후, 데이터를 바탕으로{' '}
            <span className={`text-[var(--main-color)]`}>Open AI</span>를 사용해
            간단한 추천을 받을수 있도록 했습니다.
          </p>
          <p>
            <span className={`text-[var(--main-color)]`}>Zustand</span>를 사용해
            사용자 검색 데이터가{' '}
            <span className={`text-[var(--main-color)]`}>
              새로고침시에도 유지
            </span>{' '}
            되도록 localStorage에 저장했으며, 해당 데이터를가 Ai에 자동으로 입력
            되게끔 했습니다.
          </p>
          <p>
            외부 API로 인한 CORS 처리, 요청 로직 분리/일원화를 위해 Next.js 의{' '}
            <span className={`text-[var(--main-color)]`}>API Route</span>를
            사용한 <span className={`text-[var(--main-color)]`}>BFF 패턴</span>
            을 적용했습니다.
          </p>
          <div
            className={`row-flex md:fixed bottom-16 justify-around simple-transition w-40 h-8 text-center border-2 rounded-lg cursor-pointer hover:bg-[#fff] hover:text-black`}
            onClick={() => {
              routingGit(2, GIT_WEATHER)
            }}
          >
            <FaGithub className="w-6 h-6" />
            <p className="text-lg">GitHub Code</p>
          </div>
          <div className="bottom-4 row-flex md:fixed md:w-auto justify-around w-full gap-2 mt-12">
            {cardsStacks.weather.map((data) => (
              <Badge title={data} key={data} />
            ))}
          </div>
        </div>
      ),
    },
    {
      url: '/project/groupware.png',
      title: <h1 className="sm:text-2xl text-lg">Groupware</h1>,
      subTitle: (
        <p className="sm:text-md text-sm">
          Next.js를 사용한 그룹웨어 서비스 개발
        </p>
      ),
      description: (
        <div className="relative pt-2 space-y-3 text-md">
          <p>팀원과 함께 기획/디자인/개발을 진행한 협업 프로젝트입니다.</p>
          <p>
            협업간 원활한 소통을 위해{' '}
            <span className={`text-[var(--main-color)]`}>
              Figma/Markdown을 통한 기획/인터페이스 문서화
            </span>
            를 진행했습니다.
          </p>
          <p>
            Markdown 템플릿을 지원하기 위해 Toast-Ui-Editor를 사용해 CRUD기능을
            개발했으며, 손쉬운 칸반보드 개발을 위해 ReactDnD 라이브러리를
            사용했습니다.
            <br />
            또한 장소의 시각적 표시를 위해 Kakao Map API를 사용해 장소 검색/선택
            기능을 개발했습니다.
            <br />
            API 요청간, 로직 일원화 및 유지보수 개선을 위해{' '}
            <span className={`text-[var(--main-color)]`}>
              제네릭을 활용한 모듈화
            </span>
            를 실시했습니다.
          </p>
          <p>
            완성된 프로젝트는{' '}
            <span className={`text-[var(--main-color)]`}>
              AWS Code Build/Deploy
            </span>
            를 사용한 CI/CD 파이프라인을 구축해 배포했습니다.
          </p>
          <p className="text-xs text-red-300">
            📌 현재는 AWS 기간 만료로 인해 서비스 되고 있지 않습니다.
          </p>
          {/* <div
            className={`row-flex md:fixed bottom-16 justify-around simple-transition w-40 h-8 text-center border-2 rounded-lg cursor-pointer hover:bg-[#fff] hover:text-black`}
            onClick={() => {
              routingGit(3, GIT_PORTFOLIO)
            }}
          >
            <FaGithub className="w-6 h-6" />
            <p className="text-lg">GitHub Code</p>
          </div> */}
          <div className="bottom-4 row-flex md:fixed md:w-auto justify-around w-full gap-2 mt-12">
            {cardsStacks.groupware.map((data) => (
              <Badge title={data} key={data} />
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <article
      className={`${isTopSectionEnd ? '' : 'opacity-0'} relative row-span-3 simple-transition`}
    >
      <Carousel
        cards={cards}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <DownArrow next={CONTACT} scrollY={800} />
    </article>
  )
}
