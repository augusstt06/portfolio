import { gsap } from 'gsap'

function animateCube(
  textCubeRef: React.RefObject<HTMLDivElement>,
  slitOneBackRef: React.RefObject<HTMLDivElement>,
  slitTwoBackRef: React.RefObject<HTMLDivElement>,
  onAnimationFinished: () => void,
) {
  if (textCubeRef.current && slitOneBackRef.current && slitTwoBackRef.current) {
    gsap.set(textCubeRef.current, {
      x: 1000,
      y: 120,
    })

    const tl = gsap.timeline({
      onComplete: () => {
        onAnimationFinished()
      },
    })
    tl.to(slitOneBackRef.current, 1, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'sine.out',
    })
      .to(textCubeRef.current, 1, {
        x: 0,
        ease: 'back.out',
      })
      .to(
        slitOneBackRef.current,
        1,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          ease: 'sine.out',
        },
        '-=0.2',
      )
      .to(textCubeRef.current, 5, {
        y: -250,
      })
      .to(
        textCubeRef.current,
        1,
        {
          rotationX: -90,
          rotationY: -35,
          rotationZ: 15,
          ease: 'back.out(1)',
        },
        '<',
      )
      .to(
        textCubeRef.current,
        1,
        {
          rotationX: -180,
          rotationY: 35,
          rotationZ: -15,
          ease: 'back.out(1)',
        },
        '-=3.5',
      )
      .to(
        textCubeRef.current,
        1,
        {
          rotationX: -270,
          rotationY: 0,
          rotationZ: 0,
          ease: 'back.out(1)',
        },
        '-=2',
      )
      .to(slitTwoBackRef.current, 1, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        ease: 'sine.out',
      })
      .to(
        textCubeRef.current,
        1,
        {
          x: -1000,
          y: -250,
          ease: 'back.in',
        },
        '-=1',
      )
      .to(slitTwoBackRef.current, 1, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        ease: 'sine.out',
      })
  }
}

export default animateCube
