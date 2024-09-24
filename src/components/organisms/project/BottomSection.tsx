import { FaGithub } from 'react-icons/fa'

import Badge from '@/components/atom/badge/Badge'
import { Carousel } from '@/components/molecules/carousel/Carousel'

export default function BottomSection() {
  const cardsStacks = {
    megaEarn: ['React', 'Zustand', 'Tanstack-Query'],
    portfolio: ['Next.js', 'Zustand', 'gsap'],
    weather: ['Next.js', 'Open AI', 'Tanstack-Query'],
  }

  const cards = [
    {
      url: '/mega.png',
      title: <h1 className="sm:text-2xl text-lg">Mega Earn</h1>,
      subTitle: (
        <p className="sm:text-md text-sm">
          <span>React를 사용한 블록체인 웹 어플리케이션</span>
          <p className="text-xs">2024.03 ~ 2024.04</p>
        </p>
      ),
      description: (
        <div className="relative w-full pt-2 space-y-3 text-sm">
          <p>블록체인 관련 이벤트 페이지와 admin 페이지를 개발했습니다</p>
          <p>
            서버측에서 다루는 <span className="text-[#9DF3c4]">bigint</span>와
            클라이언트에서 다루는 number 간{' '}
            <span className="text-[#9DF3c4]">
              타입차이로 발생하는 버그 방지
            </span>
            를 위해 를 위해 양방향으로 전환 가능한 모듈을 개발해 사용했습니다.
          </p>
          <p>
            네트워크 변경시 기타 이벤트 발생을 제한하기 위한{' '}
            <span className="text-[#9DF3c4]">Fallback UI</span>를 사용, 5초 주기
            <span className="text-[#9DF3c4]">polling</span>을 통한 데이터
            최신화, 최대 10회까지 리렌더링 되는 컴포넌트를{' '}
            <span className="text-[#9DF3c4]">
              메모이제이션을 통해 2회까지 단축
            </span>
            시키는 등, 사용자 경험을 높히기 위해 노력했습니다.
          </p>
          <p>
            반복 사용이 잦은 UI에 대해서는 styled-component로 모듈화해
            유지보수가 용이하도록 했으며,{' '}
            <span className="text-[#9DF3c4]">
              서버/클라이언트 상태 분리 및 데이터 캐싱
            </span>
            을 위해 Tanstack-Query를 사용했습니다.
          </p>
          <p className="text-xs">
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
      url: '/portfolio.png',
      title: <h1 className="sm:text-2xl text-lg">Portfolio</h1>,
      subTitle: (
        <p className="sm:text-md text-sm">Next js를 사용한 포트폴리오 개발</p>
      ),
      description: (
        <div className="relative pt-2 space-y-3 text-sm">
          <p>현재까지 공부한 내용을 바탕으로 제작한 포트폴리오 사이트입니다.</p>
          <p>
            <span className="text-[#9DF3c4]">GSAP</span>를 사용해 손쉽게
            애니메이션을 구현하여 동적인 사용감을 주려고 노력했습니다.
          </p>
          <p>
            Atmoic 패턴을 적용해 컴포넌트의 재사용률을 향상하고 유지보수가
            용이하도록 했습니다.
            <br />
            블라블라
          </p>
          <div
            className={`row-flex md:fixed bottom-16 justify-around simple-transition w-40 h-8 text-center border-2 rounded-lg cursor-pointer hover:bg-[#fff] hover:text-black`}
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
      url: '/weather.png',
      title: <h1 className="sm:text-2xl text-lg">Weather AI</h1>,
      subTitle: (
        <p className="sm:text-md text-sm">
          Next.js를 사용한 날씨 + AI 어플리케이션
        </p>
      ),
      description: (
        <div className="relative pt-2 space-y-3 text-sm">
          <p>
            날씨 앱을 사용하다가 아이디어가 떠올라 개발한 어플리케이션입니다.
          </p>
          <p>
            날씨 정보를{' '}
            <span className="text-[#9DF3c4]">Open Weather Map API</span>에서
            가져와 표시 후, 데이터를 바탕으로{' '}
            <span className="text-[#9DF3c4]">Open AI</span>를 사용해 간단한
            추천을 받을수 있도록 했습니다.
          </p>
          <div
            className={`row-flex md:fixed bottom-16 justify-around simple-transition w-40 h-8 text-center border-2 rounded-lg cursor-pointer hover:bg-[#fff] hover:text-black`}
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
      url: '/bg.jpg',
      title: <h1 className="sm:text-2xl text-lg">Mega Earn</h1>,
      subTitle: (
        <p className="sm:text-md text-sm">
          React를 사용한 블록체인 웹 어플리케이션
        </p>
      ),
      description: <p>dd</p>,
    },
  ]
  return (
    <article className="relative row-span-3">
      <Carousel cards={cards} />
    </article>
  )
}
