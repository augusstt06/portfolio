import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
} from 'react'

export type Card = {
  url: string
  title: JSX.Element
  subTitle: JSX.Element
  description: JSX.Element
}

type Props = {
  cards: Card[]
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
}

export function Carousel(props: Props) {
  const { cards, currentIndex, setCurrentIndex } = props

  const carouselRef = useRef<HTMLDivElement>(null)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
    )
  }

  useEffect(() => {
    const cardsElements = carouselRef.current?.children

    if (cardsElements) {
      for (let i = 0; i < cardsElements.length; i++) {
        const card = cardsElements[i] as HTMLElement

        const positionIndex = (i - currentIndex + cards.length) % cards.length

        if (positionIndex === 0) {
          card.style.transform = 'translateX(0) translateZ(0) scale(1)'
          card.style.opacity = '1'
        } else if (positionIndex === 1) {
          ;<span className={`text-[var(--main-color)]`}></span>
          card.style.transform = 'translateX(55%) translateZ(-50px) scale(0.5)'
          card.style.opacity = '0.7'
        } else if (positionIndex === cards.length - 1) {
          card.style.transform = 'translateX(-55%) translateZ(-50px) scale(0.5)'
          card.style.opacity = '0.7'
        } else {
          card.style.transform =
            'translateX(-100%) translateZ(-100px) scale(0.5)'
          card.style.opacity = '0'
        }
      }
    }
  }, [currentIndex])

  return (
    <div className="w-2/3 md:w-[70rem] h-[40rem] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <div
        ref={carouselRef}
        className="relative w-full h-full cursor-pointer perspective-800"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {cards.map((card, index) => {
          const isActive = index === currentIndex
          const isNext = index === (currentIndex + 1) % cards.length
          const isPrev =
            index === (currentIndex - 1 + cards.length) % cards.length

          return (
            <div
              key={index}
              className={`card h-5/6 left-20 absolute w-4/5 transition-all duration-700 ${isActive ? '' : 'opacity-50'}`}
              style={{
                transformStyle: 'preserve-3d',
                zIndex: cards.length - index,
                pointerEvents: isActive || isNext || isPrev ? 'auto' : 'none',
              }}
              onClick={() => {
                if (isActive) return
                if (isNext) next()
                if (isPrev) prev()
              }}
            >
              <div
                className={`bg-[#2e2e2e] w-full h-full rounded-lg border-4 border-[var(--main-color)] grid md:grid-cols-2 md:grid-rows-1 grid-rows-3 korean-font`}
              >
                <div className="md:col-span-1 row-span-1">
                  <img
                    src={card.url}
                    className="object-cover w-full h-full"
                    alt={card.url}
                  />
                </div>
                <div className="md:col-span-1 md:grid-rows-5 grid grid-rows-4 row-span-2">
                  <div className="text-center place-content-center row-span-1">
                    {card.title}
                    {card.subTitle}
                  </div>
                  <div className="h-full pl-2 pr-2 overflow-y-scroll md:row-span-3 row-span-4 text-[1.1rem]">
                    {card.description}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
