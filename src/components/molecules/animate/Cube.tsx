import { useEffect, useRef } from 'react'

import animateCube from '@/utils/animation/cube'

type Props = {
  onAnimationFinished: () => void
}
export default function Cube(props: Props) {
  const { onAnimationFinished } = props
  const textCubeRef = useRef<HTMLDivElement>(null)
  const slitOneBackRef = useRef<HTMLDivElement>(null)
  const slitTwoBackRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    animateCube(
      textCubeRef,
      slitOneBackRef,
      slitTwoBackRef,
      onAnimationFinished,
    )
  }, [textCubeRef, slitOneBackRef, slitTwoBackRef])
  return (
    <>
      <div className={'slitOne'}>
        <div className={'slitOneFront'}></div>
        <div className={'slitOneBack'} ref={slitOneBackRef}></div>
      </div>
      <div className={'slitTwo'}>
        <div className={'slitTwoFront'}></div>
        <div className={'slitTwoBack'} ref={slitTwoBackRef}></div>
      </div>
      <div className={'textCube '} ref={textCubeRef}>
        {[
          'Hello',
          `'I'm ChungYeon Kim'`,
          'Frontend Developer',
          'Welcome to my Portfolio!',
        ].map((text, index) => {
          const i: number = index
          return (
            <div
              key={index}
              className={'textCubeWord text-black font-extrabold'}
              // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
              style={{ '--i': i } as React.CSSProperties}
            >
              {text}
            </div>
          )
        })}
      </div>
    </>
  )
}
