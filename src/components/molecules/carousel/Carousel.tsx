import React, { useEffect, useRef, useState } from 'react'

export type Card = {
  url: string
  title: JSX.Element
  subTitle: JSX.Element
  description: JSX.Element
}

type Props = {
  cards: Card[]
}

export function Carousel(props: Props) {
  const { cards } = props

  const [currentIndex, setCurrentIndex] = useState(0)
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

        // Adjust transformations for the current, next, and previous cards
        if (positionIndex === 0) {
          card.style.transform = 'translateX(0) translateZ(0) scale(1)'
          card.style.opacity = '1'
        } else if (positionIndex === 1) {
          card.style.transform = 'translateX(55%) translateZ(-50px) scale(0.5)'
          card.style.opacity = '0.7'
        } else if (positionIndex === cards.length - 1) {
          card.style.transform = 'translateX(-55%) translateZ(-50px) scale(0.5)'
          card.style.opacity = '0.7'
        } else {
          card.style.transform =
            'translateX(-100%) translateZ(-100px) scale(0.5)'
          card.style.opacity = '0' // Hide cards not in view
        }
      }
    }
  }, [currentIndex])

  const clickHandler = (index: number) => {
    if (index === (currentIndex + 1) % cards.length) {
      next()
    } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
      prev()
    }
  }

  return (
    <div className="w-2/3 md:w-[70rem] h-[35rem] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <div
        ref={carouselRef}
        className="perspective-800 relative w-full h-full cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="card h-5/6 left-20 absolute w-4/5 transition-all duration-700"
            style={{
              transformStyle: 'preserve-3d',
              zIndex: cards.length - index,
            }}
            onClick={() => {
              clickHandler(index)
            }}
          >
            <div className=" bg-[#2e2e2e] w-full h-full rounded-lg border-4 border-[#9DF3c4] grid md:grid-cols-2 md:grid-rows-1 grid-rows-3 korean-font">
              <div className="md:col-span-1 row-span-1">
                <img
                  src={card.url}
                  className="object-cover w-full h-full"
                  alt={card.url}
                />
              </div>
              <div className="md:col-span-1 md:grid-rows-5 grid grid-rows-4 row-span-2">
                <div className="place-content-center row-span-1 text-center">
                  {card.title}
                  {card.subTitle}
                </div>
                <div className="md:row-span-1 row-span-4 pl-2 pr-2">
                  {card.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
